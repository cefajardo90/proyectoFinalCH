import { useEffect, useState } from "react";
//import arrayProducts from "./catalog/products.json";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(true);
  const { id } = useParams();

  //ACCESO VÍA .JSON
  /* useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(id ? arrayProducts.filter(item => item.categoria == id) : arrayProducts);
      }, 2000);
    });
    promesa.then((respuesta) => {
      setItems(respuesta);
    });
  }, [id]); */

  //ACCESO VÍA FIRESTORE
  /* useEffect(() => {
    const conexion = getFirestore();
    const itemDoc = doc(conexion, "inventario", "dT9bd8tx3H8Q0f398lCa");
    getDoc(itemDoc).then((dataShot) => {
      if (dataShot.exists()) {
        setItems({id:dataShot.id, ...dataShot.data()});
      }
    });
  }, []); */

  //ACCESO A LA COLECCIÓN BD
  /* useEffect(() => {
    const conexion = getFirestore();
    const itemsCollection = collection(conexion, "inventario");
    getDocs(itemsCollection).then((dataShot) => {
      if (dataShot.size > 0) {
        setItems(
          dataShot.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
      }
    });
  }, []); */

  //ACCESO A LA BD CON QUERY Y WHERE (FILTRADO)
  useEffect(() => {
    const conexion = getFirestore();
    const itemsCollection = collection(conexion, "inventario");
    const queryCollection = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
    getDocs(queryCollection).then((dataShot) => {
      if (dataShot.size > 0) {
        setItems(dataShot.docs.map((item) => ({ id: item.id, ...item.data() })));
        setVisible(false);
      }
    });
  }, [id]);

  return (
    <div className="container py-5">
      <div className="row">
        {visible ? <Loading/> : <ItemList items={items} />}
        {/*PRUEBA PARA UN SOLO OBJETO EN EL ARRAY DE CONEXION*/}
        {/* <p>{items.categoria}</p>
      <p>{items.precio}</p>
      <p><img src={items.imagen} alt={items.imagen} /></p> */}
      </div>
    </div>
  );
};

export default ItemListContainer;
