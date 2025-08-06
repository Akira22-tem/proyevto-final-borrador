import React, { useState, useEffect } from 'react';
import FormularioContacto from './componentes/FormularioContacto';
import ListaContactos from './componentes/ListaContactos';
import BusquedaContactos from './componentes/BusquedaContactos';
import FiltrosOrdenacion from './componentes/FiltrosOrdenacion';
import ModalEliminacion from './componentes/ModalEliminacion';
import BarraNavegacion from './componentes/BarraNavegacion';
import ExportarContactos from './componentes/ExportarContactos';

function App() {
  // Estados principales de la aplicación
  const [contactos, setContactos] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [ordenAscendente, setOrdenAscendente] = useState(true);
  const [letraFiltro, setLetraFiltro] = useState('');
  const [modoOscuro, setModoOscuro] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [contactoEditando, setContactoEditando] = useState(null);
  const [mostrarModalEliminacion, setMostrarModalEliminacion] = useState(false);
  const [contactoAEliminar, setContactoAEliminar] = useState(null);

  // Cargar datos del localStorage al iniciar la aplicación
  useEffect(() => {
    const contactosGuardados = localStorage.getItem('agendaContactosGuerrera');
    const modoOscuroGuardado = localStorage.getItem('modoOscuroGuerrero');

    if (contactosGuardados) {
      setContactos(JSON.parse(contactosGuardados));
    }

    if (modoOscuroGuardado) {
      setModoOscuro(JSON.parse(modoOscuroGuardado));
    }
  }, []);

  // Guardar contactos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('agendaContactosGuerrera', JSON.stringify(contactos));
  }, [contactos]);

  // Guardar modo oscuro en localStorage
  useEffect(() => {
    localStorage.setItem('modoOscuroGuerrero', JSON.stringify(modoOscuro));
    if (modoOscuro) {
      document.body.setAttribute('data-bs-theme', 'dark');
      document.body.style.background =
        'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)';
    } else {
      document.body.removeAttribute('data-bs-theme');
      document.body.style.background =
        'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)';
    }
  }, [modoOscuro]);

  // FUNc 1: Agregar nuevo contacto
  const agregarContacto = (nuevoContacto) => {
    const contactoCompleto = {
      ...nuevoContacto,
      id: Date.now(),
      fechaCreacion: new Date().toISOString(),
    };
    setContactos([...contactos, contactoCompleto]);
    setMostrarFormulario(false);
  };

  // FUNc 3: Editar contacto existente
  const editarContacto = (contactoActualizado) => {
    const contactosActualizados = contactos.map((contacto) =>
      contacto.id === contactoActualizado.id
        ? { ...contactoActualizado, fechaCreacion: contacto.fechaCreacion }
        : contacto
    );
    setContactos(contactosActualizados);
    setContactoEditando(null);
    setMostrarFormulario(false);
  };

  // FUNc 4: Eliminar contacto
  const iniciarEliminacion = (contacto) => {
    setContactoAEliminar(contacto);
    setMostrarModalEliminacion(true);
  };

  const confirmarEliminacion = () => {
    if (contactoAEliminar) {
      setContactos(
        contactos.filter((contacto) => contacto.id !== contactoAEliminar.id)
      );
      setMostrarModalEliminacion(false);
      setContactoAEliminar(null);
    }
  };

  const cancelarEliminacion = () => {
    setMostrarModalEliminacion(false);
    setContactoAEliminar(null);
  };

  // Preparar datos para edición
  const prepararEdicion = (contacto) => {
    setContactoEditando(contacto);
    setMostrarFormulario(true);
  };

  // Cancelar edición/formulario
  const cancelarFormulario = () => {
    setMostrarFormulario(false);
    setContactoEditando(null);
  };

  // FUNc 5: Filtrar contactos por búsqueda
  const contactosFiltradosBusqueda = contactos.filter(
    (contacto) =>
      contacto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      contacto.email.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  // FUNc 6: Aplicar filtros y ordenación
  const contactosFinales = contactosFiltradosBusqueda
    .filter(
      (contacto) =>
        letraFiltro === '' ||
        contacto.nombre.toLowerCase().startsWith(letraFiltro.toLowerCase())
    )
    .sort((a, b) => {
      if (ordenAscendente) {
        return a.nombre.localeCompare(b.nombre);
      } else {
        return b.nombre.localeCompare(a.nombre);
      }
    });

  // Obtener letras disponibles para el filtro
  const letrasDisponibles = [
    ...new Set(
      contactos.map((contacto) => contacto.nombre.charAt(0).toUpperCase())
    ),
  ].sort();

  // FUNc 7: Alternar modo oscuro
  const alternarModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div
      className={`min-vh-100`}
      style={{
        background: modoOscuro
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)',
        minHeight: '100vh',
      }}
    >
      <BarraNavegacion
        modoOscuro={modoOscuro}
        alternarModoOscuro={alternarModoOscuro}
        mostrarFormulario={() => setMostrarFormulario(true)}
      />

      <div className="container py-4">
        {mostrarFormulario && (
          <FormularioContacto
            contactoEditando={contactoEditando}
            onGuardarContacto={
              contactoEditando ? editarContacto : agregarContacto
            }
            onCancelar={cancelarFormulario}
            modoOscuro={modoOscuro}
          />
        )}

        <BusquedaContactos
          terminoBusqueda={terminoBusqueda}
          onCambiarBusqueda={setTerminoBusqueda}
          modoOscuro={modoOscuro}
        />

        <FiltrosOrdenacion
          ordenAscendente={ordenAscendente}
          onCambiarOrden={setOrdenAscendente}
          letraFiltro={letraFiltro}
          onCambiarLetraFiltro={setLetraFiltro}
          letrasDisponibles={letrasDisponibles}
          totalContactos={contactosFinales.length}
          modoOscuro={modoOscuro}
        />

        {contactos.length > 0 && (
          <ExportarContactos contactos={contactos} modoOscuro={modoOscuro} />
        )}

        <ListaContactos
          contactos={contactosFinales}
          totalContactosOriginales={contactos.length}
          onEditarContacto={prepararEdicion}
          onEliminarContacto={iniciarEliminacion}
          modoOscuro={modoOscuro}
        />
      </div>

      <ModalEliminacion
        mostrar={mostrarModalEliminacion}
        contacto={contactoAEliminar}
        onConfirmar={confirmarEliminacion}
        onCancelar={cancelarEliminacion}
        modoOscuro={modoOscuro}
      />
    </div>
  );
}

export default App;
