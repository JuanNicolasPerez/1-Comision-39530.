import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'


const firebaseConfig = {
    // process.env.API_KEY,
    apiKey: "AIzaSyADOc_ylzJ_gSulMg938bb_5vW9DNjQ_Ds",
    authDomain: "proyecto-juannicolasperez.firebaseapp.com",
    projectId: "proyecto-juannicolasperez",
    storageBucket: "proyecto-juannicolasperez.appspot.com",
    messagingSenderId: "947172328879",
    appId: "1:947172328879:web:9e5ae645a4177e547b5b5a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const cargarBDD = async () => {
    const promise = await fetch('./Json/product.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            nombre: prod.nombre,
            rubro: prod.rubro,
            idCategoria: prod.idCategoria,
            cantidad: prod.cantidad,
            precio: prod.precio,
            img: prod.img
        })
    })
}

export const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

export const updateProducto = async (id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async (id) => {
    await deleteDoc(doc(db, "productos", id))
}

//Create orden Compra

export const createOrdenCompra = async (cliente, productos, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const oCompra = { ...ordenCompra.data(), id: ordenCompra.id }
    return oCompra
}