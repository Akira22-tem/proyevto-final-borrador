import React from 'react';

function FiltrosOrdenacion({
  ordenAscendente,
  onCambiarOrden,
  letraFiltro,
  onCambiarLetraFiltro,
  letrasDisponibles,
  totalContactos,
  modoOscuro,
}) {
  // Alternar orden alfabético
  const alternarOrden = () => {
    onCambiarOrden(!ordenAscendente);
  };

  // Manejar cambio de filtro por letra
  const manejarCambioLetra = (e) => {
    onCambiarLetraFiltro(e.target.value);
  };

  // Limpiar filtro de letra
  const limpiarFiltroLetra = () => {
    onCambiarLetraFiltro('');
  };

  // Estilos temática guerrera
  const estilosGuerreros = {
    contenedorPrincipal: {
      background: modoOscuro
        ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      borderRadius: '18px',
      padding: '25px',
      border: '3px solid #dc2626',
      boxShadow: modoOscuro
        ? '0 8px 30px rgba(220, 38, 38, 0.4)'
        : '0 8px 30px rgba(220, 38, 38, 0.2)',
      marginBottom: '30px',
    },
    botonOrden: {
      background: ordenAscendente
        ? 'linear-gradient(135deg, #dc2626 0%, #991b1c 100%)'
        : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      border: '3px solid #fbbf24',
      color: ordenAscendente ? '#ffffff' : '#1f2937',
      fontWeight: 'bold',
      borderRadius: '12px',
      padding: '15px 20px',
      fontSize: '16px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      boxShadow: ordenAscendente
        ? '0 6px 20px rgba(220, 38, 38, 0.5)'
        : '0 6px 20px rgba(251, 191, 36, 0.5)',
      transition: 'all 0.3s ease',
      width: '100%',
    },
    selectFiltro: {
      border: '3px solid #374151',
      borderRadius: '12px',
      padding: '15px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      background: modoOscuro
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      color: modoOscuro ? '#f9fafb' : '#1f2937',
      transition: 'all 0.3s ease',
      width: '100%',
    },
    botonLimpiar: {
      background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
      border: '3px solid #9ca3af',
      color: '#ffffff',
      fontWeight: 'bold',
      borderRadius: '12px',
      padding: '15px 20px',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      boxShadow: '0 4px 15px rgba(107, 114, 128, 0.4)',
      transition: 'all 0.3s ease',
      width: '100%',
    },
    alertaResultados: {
      background: modoOscuro
        ? 'linear-gradient(135deg, #374151 0%, #1f2937 100%)'
        : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      border: '3px solid #dc2626',
      borderRadius: '15px',
      color: modoOscuro ? '#fbbf24' : '#1f2937',
      fontWeight: 'bold',
      fontSize: '16px',
      textAlign: 'center',
      padding: '15px',
      boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    titulo: {
      background: 'linear-gradient(135deg, #dc2626, #fbbf24)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold',
      fontSize: '18px',
      textAlign: 'center',
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  };

  return (
    <div className="row mb-4">
      <div className="col-12">
        <div style={estilosGuerreros.contenedorPrincipal}>
          <h6 style={estilosGuerreros.titulo}>⚔️ CONTROLES DE BATALLA</h6>

          <div className="row align-items-center">
            {/* Botón de ordenación */}
            <div className="col-md-3 col-lg-3 mb-3">
              <button
                className="btn border-0"
                onClick={alternarOrden}
                title={`Ordenar ${ordenAscendente ? 'Z-A' : 'A-Z'}`}
                type="button"
                style={estilosGuerreros.botonOrden}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = ordenAscendente
                    ? '0 8px 25px rgba(220, 38, 38, 0.7)'
                    : '0 8px 25px rgba(251, 191, 36, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = ordenAscendente
                    ? '0 6px 20px rgba(220, 38, 38, 0.5)'
                    : '0 6px 20px rgba(251, 191, 36, 0.5)';
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="me-2"
                >
                  {ordenAscendente ? (
                    <path d="M3 8L12 17L21 8H3Z" fill="currentColor" />
                  ) : (
                    <path d="M21 16L12 7L3 16H21Z" fill="currentColor" />
                  )}
                </svg>
                {ordenAscendente ? '🔽 A-Z' : '🔼 Z-A'}
              </button>
            </div>

            {/* Filtro por letra inicial */}
            <div className="col-md-4 col-lg-4 mb-3">
              <select
                className="form-select border-0"
                value={letraFiltro}
                onChange={manejarCambioLetra}
                id="select_letra_filtro"
                style={estilosGuerreros.selectFiltro}
                onFocus={(e) => {
                  e.target.style.borderColor = '#fbbf24';
                  e.target.style.boxShadow =
                    '0 0 0 4px rgba(251, 191, 36, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#374151';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <option value="">🔤 TODAS LAS LETRAS</option>
                {letrasDisponibles.map((letra) => (
                  <option key={letra} value={letra}>
                    {letra} - Guerreros con "{letra}"
                  </option>
                ))}
              </select>
            </div>

            {/* Botón para limpiar filtro de letra */}
            {letraFiltro && (
              <div className="col-md-2 col-lg-2 mb-3">
                <button
                  className="btn border-0"
                  onClick={limpiarFiltroLetra}
                  title="Quitar filtro de letra"
                  type="button"
                  style={estilosGuerreros.botonLimpiar}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow =
                      '0 8px 25px rgba(107, 114, 128, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow =
                      '0 4px 15px rgba(107, 114, 128, 0.4)';
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="me-1"
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
                  QUITAR
                </button>
              </div>
            )}

            {/* Contador de contactos */}
            <div
              className={`col-md-3 ${
                letraFiltro ? 'col-lg-3' : 'col-lg-5'
              } mb-3`}
            >
              <div style={estilosGuerreros.alertaResultados}>
                <strong>📊 GUERREROS:</strong>
                <br />
                {totalContactos} encontrado{totalContactos !== 1 ? 's' : ''}
                {letraFiltro && (
                  <div style={{ fontSize: '14px', marginTop: '5px' }}>
                    🔤 Letra: "{letraFiltro}"
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltrosOrdenacion;
