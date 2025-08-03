import React, { useState, useEffect } from 'react';

function FormularioContacto({
  contactoEditando,
  onGuardarContacto,
  onCancelar,
  modoOscuro,
}) {
  // Estados del formulario
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    foto: null,
    fotoUrl: '',
  });

  // Estado para errores de validación
  const [errores, setErrores] = useState({});

  // Cargar datos del contacto si está editando
  useEffect(() => {
    if (contactoEditando) {
      setDatosFormulario({
        nombre: contactoEditando.nombre,
        email: contactoEditando.email,
        telefono: contactoEditando.telefono,
        direccion: contactoEditando.direccion,
        foto: contactoEditando.foto || null,
        fotoUrl: contactoEditando.fotoUrl || '',
      });
    } else {
      setDatosFormulario({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        foto: null,
        fotoUrl: '',
      });
    }
    setErrores({});
  }, [contactoEditando]);

  // Función para validar el formulario
  const validarFormulario = () => {
    const nuevosErrores = {};

    // Validar nombre
    if (!datosFormulario.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    } else if (datosFormulario.nombre.trim().length < 2) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar email
    if (!datosFormulario.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(datosFormulario.email)) {
      nuevosErrores.email = 'El formato del email no es válido';
    }

    // Validar teléfono
    if (!datosFormulario.telefono.trim()) {
      nuevosErrores.telefono = 'El teléfono es obligatorio';
    } else if (!/^\d{10}$/.test(datosFormulario.telefono.replace(/\D/g, ''))) {
      nuevosErrores.telefono = 'El teléfono debe tener exactamente 10 dígitos';
    }

    // Validar dirección
    if (!datosFormulario.direccion.trim()) {
      nuevosErrores.direccion = 'La dirección es obligatoria';
    } else if (datosFormulario.direccion.trim().length < 5) {
      nuevosErrores.direccion = 'La dirección debe tener al menos 5 caracteres';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // Manejar cambios en los inputs
  const manejarCambioInput = (campo, valor) => {
    setDatosFormulario({
      ...datosFormulario,
      [campo]: valor,
    });

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errores[campo]) {
      setErrores({
        ...errores,
        [campo]: '',
      });
    }
  };

  // Manejar subida de foto
  const manejarCambioFoto = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      // Verificar que sea una imagen
      if (!archivo.type.startsWith('image/')) {
        setErrores({
          ...errores,
          foto: 'Solo se permiten archivos de imagen',
        });
        return;
      }

      // Verificar tamaño (máximo 5MB)
      if (archivo.size > 5 * 1024 * 1024) {
        setErrores({
          ...errores,
          foto: 'La imagen debe ser menor a 5MB',
        });
        return;
      }

      // Convertir a base64 para almacenar en localStorage
      const reader = new FileReader();
      reader.onload = (e) => {
        setDatosFormulario({
          ...datosFormulario,
          foto: archivo,
          fotoUrl: e.target.result,
        });
        // Limpiar error de foto
        if (errores.foto) {
          setErrores({
            ...errores,
            foto: '',
          });
        }
      };
      reader.readAsDataURL(archivo);
    }
  };

  // Eliminar foto
  const eliminarFoto = () => {
    setDatosFormulario({
      ...datosFormulario,
      foto: null,
      fotoUrl: '',
    });
  };

  // Manejar envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      const contactoParaGuardar = contactoEditando
        ? { ...datosFormulario, id: contactoEditando.id }
        : datosFormulario;

      onGuardarContacto(contactoParaGuardar);

      // Limpiar formulario
      setDatosFormulario({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        foto: null,
        fotoUrl: '',
      });
      setErrores({});
    }
  };

  // Estilos personalizados temática guerrera
  const estilosGuerreros = {
    tarjeta: {
      background: modoOscuro
        ? 'linear-gradient(145deg, #1f2937 0%, #111827 50%, #1f2937 100%)'
        : 'linear-gradient(145deg, #ffffff 0%, #f9fafb 50%, #ffffff 100%)',
      border: modoOscuro ? '3px solid #dc2626' : '3px solid #dc2626',
      borderRadius: '20px',
      boxShadow: modoOscuro
        ? '0 10px 40px rgba(220, 38, 38, 0.4)'
        : '0 10px 40px rgba(220, 38, 38, 0.3)',
      overflow: 'hidden',
    },
    header: {
      background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
      color: '#ffffff',
      borderBottom: '4px solid #fbbf24',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      padding: '20px',
    },
    input: {
      border: '3px solid #374151',
      borderRadius: '12px',
      padding: '15px 20px',
      fontSize: '16px',
      background: modoOscuro ? '#111827' : '#ffffff',
      color: modoOscuro ? '#f9fafb' : '#111827',
      transition: 'all 0.3s ease',
      fontWeight: '500',
    },
    label: {
      color: modoOscuro ? '#fbbf24' : '#dc2626',
      fontWeight: 'bold',
      fontSize: '15px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '8px',
    },
    botonGuardar: {
      background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
      border: '3px solid #fbbf24',
      color: '#ffffff',
      fontWeight: 'bold',
      padding: '15px 30px',
      borderRadius: '12px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      boxShadow: '0 6px 20px rgba(220, 38, 38, 0.4)',
      transition: 'all 0.3s ease',
      fontSize: '16px',
    },
    botonCancelar: {
      background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
      border: '3px solid #9ca3af',
      color: '#ffffff',
      fontWeight: 'bold',
      padding: '15px 30px',
      borderRadius: '12px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      boxShadow: '0 6px 20px rgba(107, 114, 128, 0.4)',
      transition: 'all 0.3s ease',
      fontSize: '16px',
    },
    contenedorFoto: {
      border: '3px dashed #dc2626',
      borderRadius: '15px',
      padding: '20px',
      textAlign: 'center',
      background: modoOscuro
        ? 'rgba(220, 38, 38, 0.1)'
        : 'rgba(220, 38, 38, 0.05)',
      transition: 'all 0.3s ease',
    },
    previsualizacionFoto: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '4px solid #fbbf24',
      boxShadow: '0 4px 15px rgba(251, 191, 36, 0.5)',
    },
  };

  return (
    <div className="row mb-5">
      <div className="col-12">
        <div className="card border-0" style={estilosGuerreros.tarjeta}>
          <div className="card-header border-0" style={estilosGuerreros.header}>
            <h4 className="mb-0 d-flex align-items-center justify-content-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="me-3"
              >
                <path
                  d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16l3-2 3 2z"
                  fill="currentColor"
                />
                <circle cx="9" cy="9" r="2" fill="#1f2937" />
                <circle cx="15" cy="9" r="2" fill="#1f2937" />
              </svg>
              {contactoEditando
                ? '⚔️ ENTRENAR GUERRERO'
                : '🛡️ RECLUTAR NUEVO GUERRERO'}
            </h4>
          </div>
          <div className="card-body p-5">
            {/* Sección de foto */}
            <div className="row mb-4">
              <div className="col-12">
                <label className="form-label" style={estilosGuerreros.label}>
                  📸 Retrato del Guerrero
                </label>
                <div style={estilosGuerreros.contenedorFoto}>
                  {datosFormulario.fotoUrl ? (
                    <div>
                      <img
                        src={datosFormulario.fotoUrl}
                        alt="Foto del guerrero"
                        style={estilosGuerreros.previsualizacionFoto}
                      />
                      <div className="mt-3">
                        <button
                          type="button"
                          className="btn btn-sm"
                          onClick={eliminarFoto}
                          style={{
                            background:
                              'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                            color: '#ffffff',
                            border: '2px solid #fbbf24',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                          }}
                        >
                          🗑️ Eliminar Foto
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mb-3"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                          stroke="#dc2626"
                          strokeWidth="2"
                        />
                        <circle
                          cx="8.5"
                          cy="8.5"
                          r="1.5"
                          stroke="#dc2626"
                          strokeWidth="2"
                        />
                        <polyline
                          points="21,15 16,10 5,21"
                          stroke="#dc2626"
                          strokeWidth="2"
                        />
                      </svg>
                      <p
                        style={{
                          color: modoOscuro ? '#fbbf24' : '#dc2626',
                          fontWeight: 'bold',
                        }}
                      >
                        📷 Subir foto del guerrero
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={manejarCambioFoto}
                        className="form-control"
                        style={{
                          border: '2px solid #fbbf24',
                          borderRadius: '8px',
                          background: modoOscuro ? '#111827' : '#ffffff',
                        }}
                      />
                    </div>
                  )}
                  {errores.foto && (
                    <div
                      className="text-danger mt-2"
                      style={{ fontWeight: 'bold' }}
                    >
                      🚫 {errores.foto}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              {/* Campo Nombre */}
              <div className="col-md-6">
                <div className="mb-4">
                  <label
                    htmlFor="txt_nombre"
                    className="form-label"
                    style={estilosGuerreros.label}
                  >
                    ⚡ Nombre del Guerrero *
                  </label>
                  <input
                    type="text"
                    className={`form-control border-0 ${
                      errores.nombre ? 'is-invalid' : ''
                    }`}
                    id="txt_nombre"
                    value={datosFormulario.nombre}
                    onChange={(e) =>
                      manejarCambioInput('nombre', e.target.value)
                    }
                    placeholder="Nombre completo del guerrero"
                    style={estilosGuerreros.input}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#fbbf24';
                      e.target.style.boxShadow =
                        '0 0 0 4px rgba(251, 191, 36, 0.3)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#374151';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                  {errores.nombre && (
                    <div
                      className="invalid-feedback"
                      style={{ fontWeight: 'bold', fontSize: '14px' }}
                    >
                      🚫 {errores.nombre}
                    </div>
                  )}
                </div>
              </div>

              {/* Campo Email */}
              <div className="col-md-6">
                <div className="mb-4">
                  <label
                    htmlFor="txt_email"
                    className="form-label"
                    style={estilosGuerreros.label}
                  >
                    📧 Comunicación de Batalla *
                  </label>
                  <input
                    type="email"
                    className={`form-control border-0 ${
                      errores.email ? 'is-invalid' : ''
                    }`}
                    id="txt_email"
                    value={datosFormulario.email}
                    onChange={(e) =>
                      manejarCambioInput('email', e.target.value)
                    }
                    placeholder="guerrero@batalla.com"
                    style={estilosGuerreros.input}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#fbbf24';
                      e.target.style.boxShadow =
                        '0 0 0 4px rgba(251, 191, 36, 0.3)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#374151';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                  {errores.email && (
                    <div
                      className="invalid-feedback"
                      style={{ fontWeight: 'bold', fontSize: '14px' }}
                    >
                      🚫 {errores.email}
                    </div>
                  )}
                </div>
              </div>

              {/* Campo Teléfono */}
              <div className="col-md-6">
                <div className="mb-4">
                  <label
                    htmlFor="txt_telefono"
                    className="form-label"
                    style={estilosGuerreros.label}
                  >
                    📱 Línea Directa de Combate *
                  </label>
                  <input
                    type="tel"
                    className={`form-control border-0 ${
                      errores.telefono ? 'is-invalid' : ''
                    }`}
                    id="txt_telefono"
                    value={datosFormulario.telefono}
                    onChange={(e) =>
                      manejarCambioInput('telefono', e.target.value)
                    }
                    placeholder="0987654321"
                    maxLength="10"
                    style={estilosGuerreros.input}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#fbbf24';
                      e.target.style.boxShadow =
                        '0 0 0 4px rgba(251, 191, 36, 0.3)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#374151';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                  {errores.telefono && (
                    <div
                      className="invalid-feedback"
                      style={{ fontWeight: 'bold', fontSize: '14px' }}
                    >
                      🚫 {errores.telefono}
                    </div>
                  )}
                </div>
              </div>

              {/* Campo Dirección */}
              <div className="col-md-6">
                <div className="mb-4">
                  <label
                    htmlFor="txt_direccion"
                    className="form-label"
                    style={estilosGuerreros.label}
                  >
                    🏰 Fortaleza Base *
                  </label>
                  <input
                    type="text"
                    className={`form-control border-0 ${
                      errores.direccion ? 'is-invalid' : ''
                    }`}
                    id="txt_direccion"
                    value={datosFormulario.direccion}
                    onChange={(e) =>
                      manejarCambioInput('direccion', e.target.value)
                    }
                    placeholder="Ubicación de la fortaleza"
                    style={estilosGuerreros.input}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#fbbf24';
                      e.target.style.boxShadow =
                        '0 0 0 4px rgba(251, 191, 36, 0.3)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#374151';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  />
                  {errores.direccion && (
                    <div
                      className="invalid-feedback"
                      style={{ fontWeight: 'bold', fontSize: '14px' }}
                    >
                      🚫 {errores.direccion}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Botones del formulario */}
            <div className="d-flex gap-4 justify-content-center mt-4">
              <button
                className="btn border-0"
                onClick={manejarEnvio}
                type="submit"
                style={estilosGuerreros.botonGuardar}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px) scale(1.05)';
                  e.target.style.boxShadow =
                    '0 8px 25px rgba(220, 38, 38, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow =
                    '0 6px 20px rgba(220, 38, 38, 0.4)';
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="me-2"
                >
                  <path
                    d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="17,21 17,13 7,13 7,21"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="7,3 7,8 15,8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                {contactoEditando
                  ? '⚔️ ACTUALIZAR GUERRERO'
                  : '🛡️ RECLUTAR GUERRERO'}
              </button>
              <button
                className="btn border-0"
                onClick={onCancelar}
                type="button"
                style={estilosGuerreros.botonCancelar}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px) scale(1.05)';
                  e.target.style.boxShadow =
                    '0 8px 25px rgba(107, 114, 128, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow =
                    '0 6px 20px rgba(107, 114, 128, 0.4)';
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="me-2"
                >
                  <line
                    x1="18"
                    y1="6"
                    x2="6"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                🚫 CANCELAR MISIÓN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormularioContacto;
