import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
const BASE_URL = 'http://localhost:7777/api/colo'

export const dataContext = createContext(null)

const DataContextProvider = ({ children }) => {
    const [coloData, setColoData] = useState([])
    const [orginal, setOrginal] = useState([])
    const [filtering, setFiltering] = useState([])

    const getAllData = async () => {
        await axios.get(BASE_URL).then((res) => {
            setColoData(res.data.data)
            setOrginal(res.data.data)
            setFiltering(res.data.data)
            console.log(res.data.data.length)
        }).catch((error) => {
            console.log(error)
        })

    }
    const deleteData = async (id) => {
        await axios.delete(BASE_URL + `/${id}`).then(() => {
            const deleting = coloData.filter((x) => x._id !== id)
            setColoData(deleting)
            setOrginal(deleting)
            setFiltering(deleting)
        }).catch((error) => {
            console.log(error)
        })
    }
    const postData = async (newData) => {
        await axios.post(BASE_URL, newData).then(() => {
            setColoData([...coloData, newData])
        })
    }
    useEffect(() => {
        getAllData()
    }, [])
    //Wishlist
    const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [])
    const addToWishlist = (colo) => {
        const target = wishlist.find((x) => x._id == colo._id)
        if (target) {
            alert("data movcuddur")
        } else {
            setWishlist([...wishlist,colo])
            localStorage.setItem("wishlist", JSON.stringify([...wishlist,colo]))
        }
    }
    const deleteToWishlist = (colo) => {
        const target = wishlist.find((x) => x._id == colo._id)
        wishlist.splice(wishlist.indexOf(target), 1)
        setWishlist([...wishlist])
        localStorage.setItem("wishlist", JSON.stringify([...wishlist]))
    }
    //Basket
    const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
    const addToBasket = (colo) => {
        console.log(colo);
        const target = basket.find((x) => x._id == colo._id)
        if (target) {
            target.count += 1,
                target.totalPrice = target.count * target.colo.price,
                setBasket([...basket])
            localStorage.setItem("basket", JSON.stringify([...basket]))
        } else {
            const NewItem = {
                count: 1,
                totalPrice:colo.price,
                _id:colo._id,
                colo:colo
            }
            setBasket([...basket, NewItem]),
                localStorage.setItem("basket", JSON.stringify([...basket, NewItem]))
        }
    }
    const deleteToBasket = (colo) => {
        const target = basket.find((x) => x._id == colo._id)
        basket.splice(basket.indexOf(target), 1)
        setBasket([...basket]),
            localStorage.setItem("basket", JSON.stringify([...basket]))
    }
    const increaseBasket = (colo) => {
        const target = basket.find((x) => x._id == colo._id)
        target.count += 1,
            target.totalPrice = target.count * target.colo.price,
            setBasket([...basket]),
            localStorage.setItem("basket", JSON.stringify([...basket]))
    }
    const decreaseBasket = (colo) => {
        const target = basket.find((x) => x._id == colo._id)
        if (target.count > 0) {
            target.count -= 1,
                target.totalPrice = target.count * target.colo.price
            setBasket([...basket]),
                localStorage.setItem("basket", JSON.stringify([...basket]))
        }
    }



    //
    const values = {
        coloData, setColoData, setOrginal, setFiltering, deleteData, postData, wishlist, addToWishlist, deleteToWishlist, basket, addToBasket, deleteToBasket,
        increaseBasket, decreaseBasket
    }

    return <dataContext.Provider value={values}>{children}</dataContext.Provider>
}
const useDataContext = () => createContext(dataContext)
export { useDataContext, DataContextProvider }