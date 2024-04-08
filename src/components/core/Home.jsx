import React from 'react'
import {useState, useEffect} from 'react'
import Spinner from '../common/Spinner';
import Product from './Product';

export default function Home( {setSearch, search } ) {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState( false )
    const [items, setItems] = useState( [] )
  
    async function fetchProductData() {
      setLoading(true)
      console.log("1")
      try{
  
        const res = await fetch(API_URL);
        const data = await res.json();
        setItems(data)
        console.log(data)
  
      }
      catch(error) {
        console.log("Error aya hua hai")
        setItems ( [] )
      }
      console.log("3")
      setLoading(false)
    }

  
    useEffect( () => {
  
      fetchProductData()
      console.log("4")
    }, [])
  return (
    <div>
      {
         loading ? <Spinner/> :
           items.length > 0 ?
        (
          <div className='grid max-w-6xl gap-5 p-6 mx-auto xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 my-7'>
            {
              
              items.filter((item) => 
                item.title.toLowerCase().includes(search)
              ).map ( (items) => {
                return (
                  <Product 
                  key={items.id}
                  items= {items}
                   />
                  
                )
                
                })
            }
          </div>
        )
        :
        <div className='flex items-center justify-center '>
        <p>No Data Found</p>
        </div>
      }
    </div>
  )
}
