import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Componentes
import ItemList from '../ItemList/ItemList';

// Context
import { useDarkModeContext } from '../../context/DarkModeContext';

//Firebase
import { getProductos } from '../../firebase/firebase'

export const ItemListContainer = () => {
    const [products, setProductos] = useState([])
    const { idCategoria } = useParams()
    const { darkMode } = useDarkModeContext()
    console.log(darkMode)

    useEffect(() => {
        if (idCategoria) {
            getProductos()
                .then(items => {
                    const products = items.filter(prod => prod.cantidad > 0).filter(prod => prod.idCategoria === parseInt(idCategoria))
                    const productsList = <ItemList productos={products} plantilla={'item'}/> //Array de productos en JSX
                    setProductos(productsList)
            })
        } else {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.cantidad > 0)
                const productsList = <ItemList productos={products} plantilla={'item'}/> //Array de productos en JSX
                setProductos(productsList)
            })
        }
    }, [idCategoria])

    return (
        <div className='row cardProductos'>
            {products}
        </div>
    );
}
