import React,{useState,useEffect} from 'react'
import {searchProducts} from '../services'

function GoodBuys({search}) {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        getProducts();
    },[search])

    const getProducts = ()=>{
        const searchResults = searchProducts();
        if(searchResults){
         setProducts(searchResults.data)
         console.log(searchResults)
        }
    }

    return (
        <div>
            <h2>good buys</h2>
        </div>
    )
}

export default GoodBuys
