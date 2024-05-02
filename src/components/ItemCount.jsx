import { useEffect, useState } from "react";

const ItemCount = ({stock}) => { //stock= PROP :: cantidad máxima de items
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const sumar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if (contador > 1) {
            setContador(contador-1);
        }
    }

    const onAdd = () => {
        if (contador <= itemStock){
            setItemStock(itemStock - contador)
            console.log("Agregué "+ contador + " productos al carrito.")
            setContador(1);
        }
    }

    useEffect(() => {
        setItemStock(stock); 
    }, [stock])

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" onClick={restar}> - </button>
                        <button type="button" className="btn btn-primary"> {contador} </button>
                        <button type="button" className="btn btn-primary" onClick={sumar}> + </button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;