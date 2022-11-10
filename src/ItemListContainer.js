// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import arrayProductos from "./Arrayproductos";
// import ItemList from "./ItemList";
// const ItemListContainer = () => {
//   const [items, setItems] = useState([]);
//   const { id } = useParams();
//   useEffect(() => {
//     if (!id) {
//       console.log("Todos los productos");
//     } else {
//       console.log(id);
//     }

//     let simulacionPedido = new Promise((res) => {
//       setTimeout(() => {
//         res(arrayProductos);
//       }, 2000);
//     });
//     simulacionPedido
//       .then((respuesta) => {
//         respuesta.filter(item=>item.category === id)

//         setItems(respuesta);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id]);
//   return (
//     <div>
//       {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
//     </div>
//   );
// };

// export default ItemListContainer;

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { getProductByCategoryId, getProducts } from "./utils"

const ItemListContainer = () => {

    const [items, setItems] = useState([]) 
    const {cat} = useParams() 

    useEffect(() => {

        if(cat){

            getProductByCategoryId(cat) 
            .then(res => {
                setItems(res)
            })
            .catch(err => {
              console.log(err)
            })

        }else{

            getProducts()
            .then((respuesta) => {
                setItems(respuesta)
            })
            .catch((error) => {
                console.log(error)
            })
        }

    }, [cat])

    return (
        <div>
            <h2>Productos</h2>
            {items.length == 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
        </div>
    )

}

export default ItemListContainer
