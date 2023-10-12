import NavBar from "../components/atoms/NavBar";

function CuentaUsuario() {
    return ( 
        <>
            <NavBar/>
            <div className='row'>
                <div class="col-12 mt-5">
                    <div class="card text-center">
                        <div class="card-header">
                            ¡¡¡Concierto!!!
                        </div>
                    <div class="card-body">
                        Aquí el video en vivo
                    </div>
                        <div class="card-footer text-body-secondary">
                        Jasai-Live
                        </div>
                    </div>
                </div>
            </div>
    

        </>
     );
}

export default CuentaUsuario;