import NavBar from "../components/atoms/NavBar";

function CuentaUsuario({ boletosComprados }) {
  return ( 
    <>
      <NavBar />
      <div className='row'>
        <div className="col-12 mt-5">
          <div className="card text-center">
            <div className="card-header">
              ¡¡¡Concierto!!!
            </div>
            <div className="card-body">
              Aquí el video en vivo
            </div>
            <div className="card-footer text-body-secondary">
              Jasai-Live
            </div>
          </div>
        </div>
      </div>
      {/* Verificación condicional para manejar boletosComprados cuando está indefinido */}
      {boletosComprados ? (
        <div className="row mt-5">
          <div className="col-12">
            <h3>Boletos Comprados:</h3>
            <ul>
              {boletosComprados.map((boleto, index) => (
                <li key={index}>{`Lugar: ${boleto.lugar}, Descripción: ${boleto.descripcion}`}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Cargando boletos...</p>
      )}
    </>
  );
}

export default CuentaUsuario;
