import React from 'react';

function BarraNavegacion({
  modoOscuro,
  alternarModoOscuro,
  mostrarFormulario,
}) {
  // Manejar clic en nuevo contacto
  const manejarNuevoContacto = () => {
    mostrarFormulario();
  };

  // Manejar alternancia de modo oscuro
  const manejarCambioModo = () => {
    alternarModoOscuro();
  };

  // Estilos personalizados para la temática de lucha
  const estilosPersonalizados = {
    navbar: {
      background: modoOscuro
        ? 'linear-gradient(135deg, #1a1a1a 0%, #2d1b1b 50%, #1a1a1a 100%)'
        : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)',
      borderBottom: modoOscuro ? '3px solid #dc2626' : '3px solid #dc2626',
      boxShadow: '0 4px 20px rgba(220, 38, 38, 0.3)',
    },
    botonPrincipal: {
      background:
        'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)',
      border: '2px solid #fbbf24',
      color: '#ffffff',
      fontWeight: 'bold',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
      boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)',
      transition: 'all 0.3s ease',
    },
    botonModo: {
      background: modoOscuro
        ? 'linear-gradient(135deg, #374151 0%, #4b5563 50%, #374151 100%)'
        : 'linear-gradient(135deg, #6b7280 0%, #9ca3af 50%, #6b7280 100%)',
      border: '2px solid #fbbf24',
      color: '#ffffff',
      fontWeight: 'bold',
      boxShadow: '0 4px 15px rgba(107, 114, 128, 0.4)',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg shadow-lg"
        style={estilosPersonalizados.navbar}
      >
        <div className="container">
          {/* Logo y título de la aplicación */}
          <span className="navbar-brand h1 mb-0 d-flex align-items-center">
            {/* Icono de escudo guerrero */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              className="me-2"
            >
              <path
                d="M12 2L3 7L12 12L21 7L12 2Z"
                fill="#dc2626"
                stroke="#fbbf24"
                strokeWidth="2"
              />
              <path
                d="M3 7V17C3 19 12 22 12 22S21 19 21 17V7"
                stroke="#dc2626"
                strokeWidth="2"
                fill="none"
              />
              <path d="M12 12V22" stroke="#fbbf24" strokeWidth="2" />
            </svg>
            <span
              className="d-none d-sm-inline"
              style={{
                background: 'linear-gradient(135deg, #dc2626, #fbbf24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              }}
            >
              ⚔️ AGENDA GUERRERA
            </span>
            <span
              className="d-sm-none"
              style={{
                background: 'linear-gradient(135deg, #dc2626, #fbbf24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
              }}
            >
              ⚔️ AGENDA
            </span>
          </span>

          {/* Botones de acción */}
          <div className="d-flex gap-3">
            {/* Botón para agregar nuevo contacto */}
            <button
              className="btn d-flex align-items-center"
              onClick={manejarNuevoContacto}
              title="Reclutar nuevo guerrero"
              type="button"
              style={estilosPersonalizados.botonPrincipal}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.4)';
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="me-2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="12"
                  y1="8"
                  x2="12"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <line
                  x1="8"
                  y1="12"
                  x2="16"
                  y2="12"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
              <span className="d-none d-sm-inline">RECLUTAR GUERRERO</span>
              <span className="d-sm-none">NUEVO</span>
            </button>

            {/* Botón para alternar modo oscuro */}
            <button
              className="btn d-flex align-items-center"
              onClick={manejarCambioModo}
              title={
                modoOscuro
                  ? 'Despertar al amanecer'
                  : 'Entrar en modo batalla nocturna'
              }
              type="button"
              style={estilosPersonalizados.botonModo}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow =
                  '0 6px 20px rgba(107, 114, 128, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow =
                  '0 4px 15px rgba(107, 114, 128, 0.4)';
              }}
            >
              {modoOscuro ? (
                // Icono de sol dorado para modo claro
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    fill="#fbbf24"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <line
                    x1="12"
                    y1="1"
                    x2="12"
                    y2="3"
                    stroke="#fbbf24"
                    strokeWidth="3"
                  />
                  <line
                    x1="12"
                    y1="21"
                    x2="12"
                    y2="23"
                    stroke="#fbbf24"
                    strokeWidth="3"
                  />
                  <line
                    x1="4.22"
                    y1="4.22"
                    x2="5.64"
                    y2="5.64"
                    stroke="#fbbf24"
                    strokeWidth="3"
                  />
                  <line
                    x1="18.36"
                    y1="18.36"
                    x2="19.78"
                    y2="19.78"
                    stroke="#fbbf24"
                    strokeWidth="3"
                  />
                  <line
                    x1="1"
                    y1="12"
                    x2="3"
                    y2="12"
                    stroke="#fbbf24"
                    strokeWidth="3"
                  />
                  <line
                    x1="21"
                    y1="12"
                    x2="23"
                    y2="12"
                    stroke="#fbbf24"
                    strokeWidth="3"
                  />
                  <line
                    x1="4.22"
                    y1="19.78"
                    x2="5.64"
                    y2="18.36"
                    stroke="#fbbf24"
                    strokeWidth="3"
                  />
                  <line
                    x1="18.36"
                    y1="5.64"
                    x2="19.78"
                    y2="4.22"
                    stroke="#fbbf24"
                    strokeWidth="3"
                  />
                </svg>
              ) : (
                // Icono de luna plateada para modo oscuro
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    fill="#e5e7eb"
                    stroke="#374151"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Estilos CSS personalizados */}
      <style jsx>{`
        .navbar-brand:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }

        .btn:hover {
          cursor: pointer;
        }

        /* Efectos de brillo para los botones */
        .btn:active {
          transform: scale(0.95) !important;
        }
      `}</style>
    </>
  );
}

export default BarraNavegacion;
