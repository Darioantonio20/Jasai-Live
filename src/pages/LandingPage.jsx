import Footer from "../components/atoms/Footer";
import NavBar from "../components/atoms/NavBar";
import AboutUs from "../components/molecules/AboutUs";
import Carrousel from "../components/molecules/Carrousel";
import Section2 from "../components/molecules/Section2";
import Section3 from "../components/molecules/Section3";
import Section4 from "../components/molecules/Section4";
import CompraBoletos from "./CompraBoletos";

function LandingPage() {
    return ( 
        <>{/*Estructuración con atomic design de LandingPage*/}
           <NavBar/>
           <Carrousel/>
           <Section2/>
           <Section3/>
           <Section4/>
           <CompraBoletos/>
           <AboutUs/>
           <Footer/>
        </>
     );
}

export default LandingPage;