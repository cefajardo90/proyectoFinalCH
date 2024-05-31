import { Link } from "react-router-dom";

const Error404 = () =>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>ERROR 404</h1>
                    <h2>Página no encontrada</h2>
                    <p>La página solicitada no existe</p>
                    <p className="my-5"><Link to={"/"} className="btn bg-black text-white">Volver a inicio</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;