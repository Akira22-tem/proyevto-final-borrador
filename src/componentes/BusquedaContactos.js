import React from 'react';

function BusquedaContactos({ terminoBusqueda, onCambiarBusqueda, modoOscuro }) {
  // Manejar cambios en el campo de búsqueda
  const manejarCambioBusqueda = (e) => {
    onCambiarBusqueda(e.target.value);
  };

  // Limpiar búsqueda
  const limpiarBusqueda = () => {
    onCambiarBusqueda('');
  };

  // Estilos temática guerrera
  const estilosGuerreros = {
    contenedorPrincipal: {
      background: modoOscuro
        ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      borderRadius: '20px',
      padding: '25px',
      border: '3px solid #dc2626',
      boxShadow: modoOscuro
        ? '0 8px 30px rgba(220, 38, 38, 0.4)'
        : '0 8px 30px rgba(220, 38, 38, 0.2)',
      marginBottom: '30px',
    },
    inputBusqueda: {
      border: '3px solid #374151',
      borderRadius: '15px',
      padding: '18px 60px 18px 55px',
      fontSize: '18px',
      fontWeight: '600',
      background: modoOscuro
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      color: modoOscuro ? '#f9fafb' : '#1f2937',
      boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.4s ease',
      width: '100%',
    },
    iconoBusqueda: {
      position: 'absolute',
      top: '50%',
      left: '20px',
      transform: 'translateY(-50%)',
      color: '#dc2626',
      filter: 'drop-shadow(0 2px 6px rgba(220, 38, 38, 0.4))',
      zIndex: 2,
    },
    botonLimpiar: {
      position: 'absolute',
      top: '50%',
      right: '15px',
      transform: 'translateY(-50%)',
      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      border: '3px solid #dc2626',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(251, 191, 36, 0.5)',
      cursor: 'pointer',
      zIndex: 2,
    },
    titulo: {
      background: 'linear-gradient(135deg, #dc2626, #fbbf24)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold',
      fontSize: '20px',
      textAlign: 'center',
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    textoAyuda: {
      color: modoOscuro ? '#fbbf24' : '#dc2626',
      fontWeight: 'bold',
      fontSize: '14px',
      textAlign: 'center',
      marginTop: '15px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
  };

  return (
    <div className="row mb-4">
      <div className="col-12">
        <div style={estilosGuerreros.contenedorPrincipal}>
          <h6 style={estilosGuerreros.titulo}>🔍 BÚSQUEDA DE GUERREROS</h6>

          <div className="position-relative">
            {/* Icono de búsqueda */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              style={estilosGuerreros.iconoBusqueda}
            >
              <circle
                cx="11"
                cy="11"
                r="8"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                d="m21 21-4.35-4.35"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>

            {/* Campo de búsqueda */}
            <input
              type="text"
              className="form-control border-0"
              id="txt_busqueda"
              placeholder="Buscar guerreros por nombre o comunicación..."
              value={terminoBusqueda}
              onChange={manejarCambioBusqueda}
              style={estilosGuerreros.inputBusqueda}
              onFocus={(e) => {
                e.target.style.borderColor = '#fbbf24';
                e.target.style.boxShadow = '0 0 0 5px rgba(251, 191, 36, 0.3)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#374151';
                e.target.style.boxShadow =
                  'inset 0 2px 10px rgba(0, 0, 0, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            />

            {/* Botón para limpiar búsqueda */}
            {terminoBusqueda && (
              <button
                className="btn p-0 border-0"
                onClick={limpiarBusqueda}
                title="Limpiar búsqueda"
                type="button"
                style={estilosGuerreros.botonLimpiar}
                onMouseEnter={(e) => {
                  e.target.style.transform =
                    'translateY(-50%) scale(1.2) rotate(90deg)';
                  e.target.style.boxShadow =
                    '0 6px 15px rgba(251, 191, 36, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform =
                    'translateY(-50%) scale(1) rotate(0deg)';
                  e.target.style.boxShadow =
                    '0 4px 12px rgba(251, 191, 36, 0.5)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <line
                    x1="18"
                    y1="6"
                    x2="6"
                    y2="18"
                    stroke="#1f2937"
                    strokeWidth="3"
                  />
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="18"
                    stroke="#1f2937"
                    strokeWidth="3"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Texto de ayuda */}
          <div style={estilosGuerreros.textoAyuda}>
            ⚡ Encuentra a tus guerreros por nombre o email de batalla
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusquedaContactos;
