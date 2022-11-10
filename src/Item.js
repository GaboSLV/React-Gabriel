import { Link } from "react-router-dom"

export const Item = ({nombre, image, precio, id}) => {
  const url = `/item/${id}`
  return(
  
  <div className='cardDesign'>
     <div className="imageCard"> <img src={image} alt="" className="imgs"/></div>
      <div className='infoCard'>
        <p>Artículo: {nombre}</p>
        <p>Precio: {precio}</p>
        <Link to={url} className="vermas-btn">Ver más</Link>
      </div>
    </div>
    )}
export default Item