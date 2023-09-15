import Footer from "../components/atoms/Footer";
import NavBar from "../components/atoms/NavBar";
import Carrousel from "../components/molecules/Carrousel";
import Section2 from "../components/molecules/Section2";

function LandingPage() {
    return ( 
        <>{/*Estructuración con atomic design de LandingPage*/}
           <NavBar/>
           <Carrousel/>
           <Section2/>
           <Footer/>
        </>
     );
}

export default LandingPage;