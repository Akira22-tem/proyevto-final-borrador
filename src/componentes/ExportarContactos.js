import React from 'react';

function ExportarContactos({ contactos, modoOscuro }) {
  // Exportar a CSV
  const exportarCSV = () => {
    const headers = [
      'Nombre',
      'Email',
      'Telefono',
      'Direccion',
      'Fecha_Creacion',
    ];
    const csvContent = [
      headers.join(','),
      ...contactos.map((contacto) =>
        [
          `"${contacto.nombre}"`,
          `"${contacto.email}"`,
          `"${contacto.telefono}"`,
          `"${contacto.direccion}"`,
          `"${new Date(contacto.fechaCreacion).toLocaleDateString()}"`,
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute(
      'download',
      `agenda_guerreros_${new Date().toISOString().split('T')[0]}.csv`
    );
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Exportar a JSON (alternativa a PDF por simplicidad)
  const exportarJSON = () => {
    const datosExportar = {
      agenda_guerreros: contactos,
      total_guerreros: contactos.length,
      fecha_exportacion: new Date().toISOString(),
      version: '1.0',
    };

    const jsonContent = JSON.stringify(datosExportar, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute(
      'download',
      `agenda_guerreros_${new Date().toISOString().split('T')[0]}.json`
    );
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Estilos temática guerrera
  const estilosGuerreros = {
    contenedorExportar: {
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
      textAlign: 'center',
    },
    titulo: {
      background: 'linear-gradient(135deg, #dc2626, #fbbf24)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold',
      fontSize: '18px',
      marginBottom: '20px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    botonCSV: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      border: '3px solid #fbbf24',
      color: '#ffffff',
      fontWeight: 'bold',
      padding: '15px 25px',
      borderRadius: '12px',
      fontSize: '16px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      boxShadow: '0 6px 20px rgba(16, 185, 129, 0.5)',
      transition: 'all 0.3s ease',
      marginRight: '15px',
    },
    botonJSON: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      border: '3px solid #fbbf24',
      color: '#ffffff',
      fontWeight: 'bold',
      padding: '15px 25px',
      borderRadius: '12px',
      fontSize: '16px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      boxShadow: '0 6px 20px rgba(139, 92, 246, 0.5)',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div className="row mb-4">
      <div className="col-12">
        <div style={estilosGuerreros.contenedorExportar}>
          <h6 style={estilosGuerreros.titulo}>
            📊 EXPORTAR REGISTROS DE BATALLA
          </h6>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <button
              className="btn border-0"
              onClick={exportarCSV}
              title="Exportar como archivo CSV"
              type="button"
              style={estilosGuerreros.botonCSV}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px) scale(1.05)';
                e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.5)';
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
                  d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <polyline
                  points="7,10 12,15 17,10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="12"
                  y1="15"
                  x2="12"
                  y2="3"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              📄 EXPORTAR CSV
            </button>

            <button
              className="btn border-0"
              onClick={exportarJSON}
              title="Exportar como archivo JSON"
              type="button"
              style={estilosGuerreros.botonJSON}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px) scale(1.05)';
                e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.5)';
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
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <polyline
                  points="14,2 14,8 20,8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="16"
                  y1="13"
                  x2="8"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="16"
                  y1="17"
                  x2="8"
                  y2="17"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <polyline
                  points="10,9 9,9 8,9"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              📋 EXPORTAR JSON
            </button>
          </div>

          <div
            style={{
              color: modoOscuro ? '#9ca3af' : '#6b7280',
              fontSize: '14px',
              marginTop: '15px',
              fontWeight: 'bold',
            }}
          >
            💾 Total de guerreros: {contactos.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExportarContactos;
