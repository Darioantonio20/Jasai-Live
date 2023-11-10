import Chart from "../components/atoms/Chart";
import NavBar from "../components/atoms/NavBar";
import "../assets/styles/Pages.css";


function CuentaAdmin() {
    return (
        <>
        <NavBar/>
        <Chart/>
          <div className="col-md-12 col-sm-12 mt-5 d-flex justify-content-center align-items-center">
            <div className="card text-center">
              <div className="card-header">Control de cámaras</div>
              <div className="card-body">
                <div className="container mt-4">
                  <div className="row justify-content-center">
                    <div className="col-auto">
                      <button className="btn buttoncititito btn-secondary btn-lg">▲</button>
                    </div>
                  </div>
                  <div className="row justify-content-center mt-2">
                    <div className="col-auto">
                      <button className="btn buttoncititito btn-secondary btn-lg">◄</button>
                    </div>
                    <div className="col-auto">
                      <button className="btn buttoncititito btn-secondary btn-lg">►</button>
                    </div>
                  </div>
                  <div className="row justify-content-center mt-2">
                    <div className="col-auto">
                      <button className="btn buttoncititito btn-secondary btn-lg">▼</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-body-secondary">
                <div className="table-responsive">-</div>
              </div>
            </div>
          </div>
        </>
    );
}

export default CuentaAdmin;