import NavBar from "../components/atoms/NavBar";

function CuentaUsuario() {
    return ( 
        <>
            <NavBar/>
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
    

        </>
     );
}

export default CuentaUsuario;