import React from 'react';

function ModalEliminacion({
  mostrar,
  contacto,
  onConfirmar,
  onCancelar,
  modoOscuro,
}) {
  // Si no se debe mostrar el modal, no renderizar nada
  if (!mostrar || !contacto) {
    return null;
  }

  // Manejar confirmación de eliminación
  const confirmarEliminacion = () => {
    onConfirmar();
  };

  // Manejar cancelación
  const cancelarEliminacion = () => {
    onCancelar();
  };

  // Estilos temática guerrera
  const estilosGuerreros = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(5px)',
    },
    modal: {
      background: modoOscuro
        ? 'linear-gradient(145deg, #1f2937 0%, #111827 100%)'
        : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
      border: '4px solid #dc2626',
      borderRadius: '25px',
      boxShadow: '0 20px 60px rgba(220, 38, 38, 0.6)',
      overflow: 'hidden',
    },
    header: {
      background: 'linear-gradient(135deg, #dc2626 0%, #991b1c 100%)',
      color: '#ffffff',
      borderBottom: '4px solid #fbbf24',
      padding: '25px',
      textAlign: 'center',
    },
    iconoAdvertencia: {
      background: 'linear-gradient(135deg, #dc2626 0%, #991b1c 100%)',
      border: '4px solid #fbbf24',
      borderRadius: '50%',
      width: '80px',
      height: '80px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 8px 25px rgba(220, 38, 38, 0.6)',
      animation: 'pulse 2s infinite',
      marginBottom: '20px',
    },
    contenedorContacto: {
      background: modoOscuro
        ? 'rgba(220, 38, 38, 0.2)'
        : 'rgba(220, 38, 38, 0.1)',
      border: '3px solid #dc2626',
      borderRadius: '15px',
      padding: '20px',
      margin: '20px 0',
      textAlign: 'center',
    },
    nombreContacto: {
      background: 'linear-gradient(135deg, #dc2626, #fbbf24)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold',
      fontSize: '24px',
      marginBottom: '10px',
    },
    alertaPeligro: {
      background: modoOscuro
        ? 'linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)'
        : 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
      border: '3px solid #dc2626',
      borderRadius: '12px',
      padding: '15px',
      color: modoOscuro ? '#fbbf24' : '#dc2626',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    botonConfirmar: {
      background: 'linear-gradient(135deg, #dc2626 0%, #991b1c 100%)',
      border: '3px solid #fbbf24',
      color: '#ffffff',
      fontWeight: 'bold',
      padding: '15px 30px',
      borderRadius: '12px',
      fontSize: '16px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      boxShadow: '0 6px 20px rgba(220, 38, 38, 0.5)',
      transition: 'all 0.3s ease',
    },
    botonCancelar: {
      background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
      border: '3px solid #9ca3af',
      color: '#ffffff',
      fontWeight: 'bold',
      padding: '15px 30px',
      borderRadius: '12px',
      fontSize: '16px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      boxShadow: '0 6px 20px rgba(107, 114, 128, 0.5)',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={estilosGuerreros.overlay}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0" style={estilosGuerreros.modal}>
          {/* Header del modal */}
          <div
            className="modal-header border-0"
            style={estilosGuerreros.header}
          >
            <div className="w-100">
              <h3
                className="modal-title mb-0"
                style={{
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                ⚔️ EXPULSIÓN DEL EJÉRCITO
              </h3>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={cancelarEliminacion}
              aria-label="Cerrar"
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            ></button>
          </div>

          {/* Cuerpo del modal */}
          <div className="modal-body p-4">
            <div className="text-center">
              {/* Icono de advertencia animado */}
              <div style={estilosGuerreros.iconoAdvertencia}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                    fill="#fbbf24"
                  />
                  <line
                    x1="12"
                    y1="9"
                    x2="12"
                    y2="13"
                    stroke="#1f2937"
                    strokeWidth="3"
                  />
                  <line
                    x1="12"
                    y1="17"
                    x2="12.01"
                    y2="17"
                    stroke="#1f2937"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </div>

            <h4
              className="text-center mb-4"
              style={{
                color: modoOscuro ? '#dc2626' : '#dc2626',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              🚨 CONFIRMAR EXPULSIÓN
            </h4>

            {/* Información del contacto */}
            <div style={estilosGuerreros.contenedorContacto}>
              {contacto.fotoUrl && (
                <img
                  src={contacto.fotoUrl}
                  alt={`Guerrero ${contacto.nombre}`}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    border: '4px solid #fbbf24',
                    marginBottom: '15px',
                    objectFit: 'cover',
                  }}
                />
              )}
              <h5 style={estilosGuerreros.nombreContacto}>{contacto.nombre}</h5>
              <p
                style={{
                  color: modoOscuro ? '#9ca3af' : '#6b7280',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  marginBottom: '0',
                }}
              >
                📧 {contacto.email}
              </p>
            </div>

            <div style={estilosGuerreros.alertaPeligro}>
              <div style={{ fontSize: '18px', marginBottom: '10px' }}>
                ⚠️ ALERTA DE BATALLA
              </div>
              <div style={{ fontSize: '14px' }}>
                Esta acción expulsará permanentemente al guerrero del ejército.
                <br />
                <strong>NO SE PUEDE DESHACER</strong>
              </div>
            </div>
          </div>

          {/* Footer del modal con botones */}
          <div className="modal-footer border-0 justify-content-center p-4">
            <button
              type="button"
              className="btn border-0 me-3"
              onClick={cancelarEliminacion}
              style={estilosGuerreros.botonCancelar}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow =
                  '0 8px 25px rgba(107, 114, 128, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow =
                  '0 6px 20px rgba(107, 114, 128, 0.5)';
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
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              🛡️ CANCELAR
            </button>
            <button
              type="button"
              className="btn border-0"
              onClick={confirmarEliminacion}
              style={estilosGuerreros.botonConfirmar}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.5)';
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="me-2"
              >
                <polyline
                  points="3,6 5,6 21,6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              ⚔️ EXPULSAR GUERRERO
            </button>
          </div>
        </div>
      </div>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 8px 25px rgba(220, 38, 38, 0.6);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 12px 35px rgba(220, 38, 38, 0.8);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 8px 25px rgba(220, 38, 38, 0.6);
          }
        }

        .modal-dialog {
          animation: modalEntrada 0.4s ease-out;
        }

        @keyframes modalEntrada {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(-50px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default ModalEliminacion;
