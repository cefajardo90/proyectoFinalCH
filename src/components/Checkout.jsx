import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
//import arrayProductos from "./catalog/products.json";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const Checkout = () => {
  const {cart, clear, getCountProducts, getTotalPrice}  = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [orderId, setOrderId]=useState("");

  //CARGA DE PRODUCTOS VIA JSON
  /* useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayProductos);
      }, 2000);
    });

    promesa.then((respuesta) => {
        setCart(respuesta);
    });
  }, []); */

  //CARGA DE PRODUCTOS VIA FIRESTORE
  /* useEffect(() => {
    const conexion = getFirestore();
    const itemsCollection = collection(conexion, "inventario");
    getDocs(itemsCollection).then((dataShot) => {
      if (dataShot.size > 0) {
        setCart(
          dataShot.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
      }
    });
  }, []); 

  const calcularTotal = () =>{
    return cart.reduce((acumulador, item) => acumulador += item.precio,0);
  }*/

  const generarCompra = () =>{
    if (nombre === "" ){
      return(
        <div className="container my-5">
          <div className="row">
            <div className="col">
              <div className="alert alert-danger d-flex-center" role="alert">
                <h2>Por favor ingrese los datos para continuar con la compra.</h2>
                {console.log("Entró al mensaje")}
              </div>
            </div>
          </div>
        </div>
      )
    }

    const buyer = {nombre:nombre, email:email, telefono:telefono};
    const items = cart.map(item => ({id:item.itemId, title:item.nombre, price:item.precio}));
    const date = new Date();
    const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const order = {buyer:buyer, items:items, date:currentDate, total:getTotalPrice()};
    
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(data => {
        setOrderId(data.id);
    }); 
    setNombre("");
    setEmail("");
    setTelefono("");
    clear();
    /* const itemsCollection = collection(db, "inventario");
    arrayProductos.forEach(item => {
        addDoc(itemsCollection, item);
    }) */
    console.log("Mi Id de orden: "+order);
  }

  if (getCountProducts() == 0 && orderId.data=="") {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div className="alert alert-danger d-flex-center" role="alert">
              <h3>No hay productos agregados en este momento</h3>
              <Link to={"/"} className="btn text-white bg-dark my-5 rounded-0">
                Volver a página principal
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container my-5">
      {!orderId ? 
      <div className="row">
        <div className="col text-start">
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}}/>
                </div>
                <button type="button" className="btn text-white bg-black" onClick={generarCompra}>Generar compra</button>
                </form>
        </div>
        <div className="col">
            <table className="table align-middle">
                <tbody>
                    {cart.map(item => (
                        <tr key={item.itemId}>
                            <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                            <td>{item.nombre}</td>
                            <td>x{item.quantity}</td>
                            <td>${item.precio}</td>
                        </tr>
                    ))}
                    <tr className="text-end">
                        <td  colSpan={3}><b>Total:</b></td>
                        <td><b>${getTotalPrice()}</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      :""}
      <div className="row">
        <div className="col">
          {orderId ? (<div className="alert alert-success" role="alert"> 
            <p>Tu orden de compra se realizó satisfactoriamente con código: {orderId}</p>
            <Link to={"/"} className="btn text-white bg-dark my-5 rounded-0">
            Volver a página principal</Link></div>):""}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
