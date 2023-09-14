function Footer() {
    return ( 
        <>
        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Siguenos</h6>
                        <i class="fa-brands fa-xl fa-facebook fa-beat iconoRedes m-2"></i>
                        <i class="fa-brands fa-xl fa-twitter fa-beat iconoRedes m-2"></i>
                        <i class="fa-brands fa-tiktok fa-beat fa-xl iconoRedes m-2"></i>
                    </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"> 
                        <h6 className="text-uppercase fw-bold mb-4">Terminos Legales</h6>
                        <p><a href="#!" className="text-reset">terminos y condiciones politica de privacidad</a></p>
                    </div>
                    <div className="col-md-3 col-lg-1 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contactanos</h6>
                        <p><i className="fas fa-envelope fa-beat me-3"></i>jasaLive@gmail.com</p>
                        <p><i className="fas fa-phone fa-beat me-3"></i> + 52 961 479 5475</p>
                        <p><i className="fas fa-phone fa-beat me-3"></i> + 52 961 283 5436</p>
                        <p><i className="fas fa-phone fa-beat me-3"></i> + 52 968 109 6112</p>
                    </div>
                </div>
                </div>
            </section>
            <div className="text-center p-4 footerSectionDerechosDeAutor">© 2021 Copyright:<a className="text-reset fw-bold" href="">Éxitos 20-21.com</a></div>
        </footer>
        </>
     );
}

export default Footer;