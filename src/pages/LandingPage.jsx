import Footer from "../components/atoms/Footer";
import NavBar from "../components/atoms/NavBar";
import Carrousel from "../components/molecules/Carrousel";

function LandingPage() {
    return ( 
        <>{/*Estructuración con atomic design de LandingPage*/}
           <NavBar/>
           <Carrousel/>
           <Footer/>
        </>
     );
}

export default LandingPage;