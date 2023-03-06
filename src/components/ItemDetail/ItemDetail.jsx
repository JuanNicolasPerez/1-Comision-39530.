import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

// context
import { useDarkModeContext } from '../../context/DarkModeContext'
import { useCarritoContext } from '../../context/CarritoContext'

export const ItemDetail = ({ item }) => {
    const { darkMode } = useDarkModeContext()
    const { addItem } = useCarritoContext()

    const onAdd = (cantidad) => { //Agregar el producto al carrito
        addItem(item, cantidad)
    }

    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={item.img} className="img-fluid img-detail" alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className='col-md-8'>
                <div className='cardBody'>
                    <h5 className='card-title'>{item.nombre}</h5>
                    <p className='card-text'>Categoria: {item.rubro}</p>
                    <p className='card-text'>Precio: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className='card-text'>Stock: {item.cantidad}</p>
                    
                    <ItemCount valInicial={1} stock={item.cantidad} onAdd={onAdd} />
                    
                    <div className='btn-comprar'>
                        <Link className='nav-link' to={"/cart"}>
                            <button className='btn btn-secondary'>Finalizar Compra</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
