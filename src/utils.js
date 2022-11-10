import arrayProductos from "./Arrayproductos"

const generatePromise = (operation,time = 2000) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(operation)
        }, time)
    })
}

export const getProductById = (id) => generatePromise(arrayProductos.filter(item=>item.id == id))
export const getProducts = () => generatePromise(arrayProductos)

export const getProductByCategoryId = (id) => generatePromise(arrayProductos.filter(item=>item.category == id))

export default {
    getProducts,
    getProductByCategoryId
}
