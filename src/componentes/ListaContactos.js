import React from 'react';

function ListaContactos({
  contactos,
  totalContactosOriginales,
  onEditarContacto,
  onEliminarContacto,
  modoOscuro,
}) {
  // Función para obtener las iniciales del nombre
  const obtenerIniciales = (nombre) => {
    return nombre.charAt(0).toUpperCase();
  };

  // Función para formatear la fecha
  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Estilos temática guerrera
  const estilosGuerreros = {
    tarjetaContacto: {
      background: modoOscuro
        ? 'linear-gradient(145deg, #1f2937 0%, #111827 50%, #1f2937 100%)'
        : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
      border: '3px solid',
      borderColor: modoOscuro ? '#374151' : '#e5e7eb',
      borderRadius: '20px',
      boxShadow: modoOscuro
        ? '0 10px 30px rgba(0, 0, 0, 0.5)'
        : '0 10px 30px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    avatarGuerrero: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #dc2626 0%, #991b1c 100%)',
      border: '4px solid #fbbf24',
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#ffffff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
      boxShadow: '0 6px 20px rgba(220, 38, 38, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fotoGuerrero: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      border: '4px solid #fbbf24',
      objectFit: 'cover',
      boxShadow: '0 6px 20px rgba(220, 38, 38, 0.5)',
    },
    nombreGuerrero: {
      background: 'linear-gradient(135deg, #dc2626, #fbbf24)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold',
      fontSize: '1.3rem',
      textShadow: modoOscuro
        ? '1px 1px 2px rgba(255,255,255,0.1)'
        : '1px 1px 2px rgba(0,0,0,0.1)',
    },
    botonEditar: {
      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      border: '3px solid #dc2626',
      color: '#1f2937',
      fontWeight: 'bold',
      borderRadius: '10px',
      padding: '10px 14px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)',
    },
    botonEliminar: {
      background: 'linear-gradient(135deg, #dc2626 0%, #991b1c 100%)',
      border: '3px solid #fbbf24',
      color: '#ffffff',
      fontWeight: 'bold',
      borderRadius: '10px',
      padding: '10px 14px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)',
    },
    footerTarjeta: {
      background: modoOscuro
        ? 'linear-gradient(135deg, #374151 0%, #1f2937 100%)'
        : 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
      borderTop: '3px solid #fbbf24',
      padding: '15px',
    },
    etiquetaCampo: {
      color: modoOscuro ? '#fbbf24' : '#dc2626',
      fontWeight: 'bold',
      fontSize: '14px',
    },
    contenedorInfo: {
      background: modoOscuro
        ? 'rgba(220, 38, 38, 0.1)'
        : 'rgba(220, 38, 38, 0.05)',
      borderRadius: '10px',
      border: '2px solid rgba(220, 38, 38, 0.2)',
      padding: '12px',
      marginBottom: '12px',
      transition: 'all 0.3s ease',
    },
  };

  // Si no hay contactos registrados
  if (totalContactosOriginales === 0) {
    return (
      <div className="text-center py-5">
        <div className="mb-4">
          <svg width="150" height="150" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L3 7L12 12L21 7L12 2Z"
              fill={modoOscuro ? '#374151' : '#9ca3af'}
              stroke="#dc2626"
              strokeWidth="3"
            />
            <path
              d="M3 7V17C3 19 12 22 12 22S21 19 21 17V7"
              stroke="#dc2626"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="12" cy="14" r="2" fill="#fbbf24" />
          </svg>
        </div>
        <h2
          style={{
            color: '#dc2626',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(220, 38, 38, 0.3)',
            marginBottom: '20px',
          }}
        >
          🏰 NO HAY GUERREROS RECLUTADOS
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: modoOscuro ? '#fbbf24' : '#dc2626',
            fontWeight: 'bold',
          }}
        >
          ⚔️ Comienza tu ejército reclutando tu primer guerrero de élite
        </p>
      </div>
    );
  }

  // Si no se encontraron contactos con los filtros aplicados
  if (contactos.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="mb-4">
          <svg width="150" height="150" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="#dc2626" strokeWidth="4" />
            <path d="m21 21-4.35-4.35" stroke="#fbbf24" strokeWidth="4" />
            <line
              x1="11"
              y1="8"
              x2="11"
              y2="14"
              stroke="#dc2626"
              strokeWidth="3"
            />
            <line
              x1="8"
              y1="11"
              x2="14"
              y2="11"
              stroke="#dc2626"
              strokeWidth="3"
            />
          </svg>
        </div>
        <h2
          style={{
            color: '#dc2626',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(220, 38, 38, 0.3)',
            marginBottom: '20px',
          }}
        >
          🔍 GUERREROS NO ENCONTRADOS
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: modoOscuro ? '#fbbf24' : '#dc2626',
            fontWeight: 'bold',
          }}
        >
          ⚡ Ajusta los filtros de búsqueda para encontrar a tus guerreros
        </p>
      </div>
    );
  }

  return (
    <div className="row">
      {contactos.map((contacto) => (
        <div key={contacto.id} className="col-md-6 col-lg-4 mb-4">
          <div
            className="card h-100 border-0"
            style={estilosGuerreros.tarjetaContacto}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
              e.currentTarget.style.borderColor = '#fbbf24';
              e.currentTarget.style.boxShadow = modoOscuro
                ? '0 20px 50px rgba(220, 38, 38, 0.6)'
                : '0 20px 50px rgba(220, 38, 38, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.borderColor = modoOscuro
                ? '#374151'
                : '#e5e7eb';
              e.currentTarget.style.boxShadow = modoOscuro
                ? '0 10px 30px rgba(0, 0, 0, 0.5)'
                : '0 10px 30px rgba(0, 0, 0, 0.15)';
            }}
          >
            {/* Barra superior decorativa */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, #dc2626, #fbbf24, #dc2626)',
                zIndex: 1,
              }}
            ></div>

            <div className="card-body p-4" style={{ paddingTop: '25px' }}>
              {/* Header de la tarjeta con avatar y botones */}
              <div className="d-flex justify-content-between align-items-start mb-4">
                {/* Avatar o foto del guerrero */}
                {contacto.fotoUrl ? (
                  <img
                    src={contacto.fotoUrl}
                    alt={`Guerrero ${contacto.nombre}`}
                    style={estilosGuerreros.fotoGuerrero}
                  />
                ) : (
                  <div style={estilosGuerreros.avatarGuerrero}>
                    {obtenerIniciales(contacto.nombre)}
                  </div>
                )}

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm border-0"
                    onClick={() => onEditarContacto(contacto)}
                    title="Entrenar guerrero"
                    type="button"
                    style={estilosGuerreros.botonEditar}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.15) rotate(5deg)';
                      e.target.style.boxShadow =
                        '0 6px 15px rgba(251, 191, 36, 0.7)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1) rotate(0deg)';
                      e.target.style.boxShadow =
                        '0 4px 12px rgba(251, 191, 36, 0.4)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className="btn btn-sm border-0"
                    onClick={() => onEliminarContacto(contacto)}
                    title="Expulsar del ejército"
                    type="button"
                    style={estilosGuerreros.botonEliminar}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.15) rotate(-5deg)';
                      e.target.style.boxShadow =
                        '0 6px 15px rgba(220, 38, 38, 0.7)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1) rotate(0deg)';
                      e.target.style.boxShadow =
                        '0 4px 12px rgba(220, 38, 38, 0.4)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <polyline
                        points="3,6 5,6 21,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Información del contacto */}
              <h5
                className="card-title text-truncate mb-4"
                style={estilosGuerreros.nombreGuerrero}
              >
                ⚔️ {contacto.nombre}
              </h5>

              <div className="informacion-contacto">
                <div
                  style={{
                    ...estilosGuerreros.contenedorInfo,
                    background: modoOscuro
                      ? 'rgba(220, 38, 38, 0.15)'
                      : 'rgba(220, 38, 38, 0.08)',
                  }}
                >
                  <strong style={estilosGuerreros.etiquetaCampo}>
                    📧 Comunicación:
                  </strong>
                  <br />
                  <small
                    className="text-break"
                    style={{ fontSize: '14px', fontWeight: '500' }}
                  >
                    {contacto.email}
                  </small>
                </div>

                <div
                  style={{
                    ...estilosGuerreros.contenedorInfo,
                    background: modoOscuro
                      ? 'rgba(251, 191, 36, 0.15)'
                      : 'rgba(251, 191, 36, 0.08)',
                    borderColor: 'rgba(251, 191, 36, 0.3)',
                  }}
                >
                  <strong style={estilosGuerreros.etiquetaCampo}>
                    📱 Línea Directa:
                  </strong>
                  <br />
                  <small
                    style={{
                      fontSize: '16px',
                      fontFamily: 'monospace',
                      fontWeight: 'bold',
                    }}
                  >
                    {contacto.telefono}
                  </small>
                </div>

                <div
                  style={{
                    ...estilosGuerreros.contenedorInfo,
                    background: modoOscuro
                      ? 'rgba(107, 114, 128, 0.15)'
                      : 'rgba(107, 114, 128, 0.08)',
                    borderColor: 'rgba(107, 114, 128, 0.3)',
                    marginBottom: '0',
                  }}
                >
                  <strong style={estilosGuerreros.etiquetaCampo}>
                    🏰 Fortaleza:
                  </strong>
                  <br />
                  <small
                    className="text-break"
                    style={{ fontSize: '14px', fontWeight: '500' }}
                  >
                    {contacto.direccion}
                  </small>
                </div>
              </div>
            </div>

            {/* Footer de la tarjeta */}
            <div
              className="card-footer border-0 text-center"
              style={estilosGuerreros.footerTarjeta}
            >
              <small
                style={{
                  color: modoOscuro ? '#fbbf24' : '#dc2626',
                  fontWeight: 'bold',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                ⚔️ Reclutado: {formatearFecha(contacto.fechaCreacion)}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaContactos;
