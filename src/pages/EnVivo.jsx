import NavBar from "../components/atoms/NavBar";

function EnVivo() {
      // Simulación de espera

    return ( 
        <>
        <NavBar/>
            <div className="cardcitaVideo d-flex justify-content-center align-items-center">
                <div className="cardcitaVideo__skeleton cardcitaVideo__title"></div>
            </div>
        </>
     );
}

export default EnVivo;