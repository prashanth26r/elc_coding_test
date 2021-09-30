import React, { useState,useCallback } from 'react';
import { searchProducts } from '../services'
import { debounce } from "lodash";
const baseURL = 'http://localhost:3035'
import axios from 'axios';
axios.defaults.baseURL = baseURL;
const searchUrl = '/searchProducts'

function Menu() {

    const [showingSearch, setShowSearch] = useState(false)
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([])

    const getProducts = () => {

        try {
            axios.get(search ? searchUrl+'/?searchText='+search:searchUrl).then(res => {
                if (res) {                    
                    setProducts(res.data.data)
                }
            })
        }
        catch (err) {

        }

    }

    const handler = useCallback(debounce(getProducts, 300), []);

    const onSearchChange = (e) => {
        const val = e.target.value;
        setSearch(val);
        if(!val){
            setProducts([])
            return;
        }
        handler();
     };

    const showSearchContainer = (e) => {
        e.preventDefault();
        setShowSearch(!showingSearch)
    }

    return (
        <header className="menu">
            <div className="menu-container">
                <div className="menu-holder">
                    <h1>ELC</h1>
                    <nav>
                        <a href="#" className="nav-item">HOLIDAY</a>
                        <a href="#" className="nav-item">WHAT'S NEW</a>
                        <a href="#" className="nav-item">PRODUCTS</a>
                        <a href="#" className="nav-item">BESTSELLERS</a>
                        <a href="/goodBuys" className="nav-item">GOODBYES</a>
                        <a href="#" className="nav-item">STORES</a>
                        <a href="#" className="nav-item">INSPIRATION</a>
                        <input type="text" placeholder='search' className="search"
                            style={{ width: '200px', color: 'black' }}
                            value={search}
                            onChange={onSearchChange} />

                    </nav>
                </div>
            </div>
            <div  style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                { 
                    products.map(i=>(
                        <div key={i._id} style={{background:'white',width:'320px',height:'320px',margin:'5px'
                        }}>
                        <h4>{i.name}</h4>
                            <img src={baseURL+i.picture} style={{height:'250px',width:'200px'}}/>
                          <div style={{display:'flex',justifyContent:'space-between'}}>
                           <h5>{i.price}</h5>
                           {
                               i.isActive === 'true' ? (<input type='button' value='Add to Bag'/>) : (<p>Sold out</p>)
                           }
                           </div>
                            </div>
                    ))
                }
            </div>
        </header>
    );
}

export default Menu;