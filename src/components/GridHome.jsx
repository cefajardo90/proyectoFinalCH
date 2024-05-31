const GridHome = () => {
  return (
    <div className="cotainer-fluid">
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="card" style={{ width: "18rem" }}>
            <img src="/images/Banner1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">LUMINARIA LED/ALÓGENA</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Ver artículos
              </a>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <div className="card" style={{ width: "18rem" }}>
            <img src="/images/Banner1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">LIMPIEZA Y CUIDADO</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Ver artículos
              </a>
            </div>
          </div>
        </div>
        <div className="col-auto">
          <div className="card" style={{ width: "18rem" }}>
            <img src="/images/Banner1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">ACCESORIOS Y LUJOS</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Ver artículos
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card text-bg-dark">
          <img src="/images/GridDelivery.jpg" className="card-img" alt="..." />
          <div className="card-img-overlay">
            <h4 className="card-title">
              ENVÍO CONTRAENTREGA / PAGO ANTICIPADO
            </h4>
            <p className="card-text">
              Todos nuestros envíos son gratuitos en la modalidad contraentrega,
              así mismo puedes solicitar tu pedido para entrega directa con pago
              anticipado comunicándote a nuestra línea directa de atención al
              cliente
            </p>
            <p className="card-text">
              <small>
                NOTA: No todos los destinos nacionales cuentan con pago
                contraentrega debido a políticas propias de las transportadoras.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridHome;
