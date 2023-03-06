import { Item } from "../Item/Item"
import { ItemCart } from "../ItemCart/ItemCart"

export const ItemList = ({ productos, plantilla }) => {
    return (
        <>
            {
                plantilla === 'item'
                    ?
                    productos.map(products => <Item item={products} key={products.id} />)
                    :
                    productos.map(products => <ItemCart item={products} key={products.id} />)
            }

        </>
    )
}

export default ItemList;
