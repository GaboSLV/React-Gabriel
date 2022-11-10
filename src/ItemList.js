import Item from "./Item"
export const ItemList = ({items}) => {
  return (
   <section className="productos">
    {
      items.map((item) =>{
        return <Item key={item.id} {...item} />
      })
    }
   </section>
  )
}
export default ItemList