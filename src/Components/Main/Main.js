import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Update from '../Update/Update';
import './Main.css'

const Main = () => {
    // usestate one
    const [books, setBooks] = useState([])
    // useEffect
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setBooks(data))
        
    },[])

    // usestat two
    const [updates, setUpdates] = useState([])
    // click Handler
    const clickCart = (selectedProduct) =>{
        let news = [selectedProduct,...updates];
    //   const setNew =  new.shift(selectedProduct)
        
        setUpdates(news)
    };
// console.log(updates);
    return (
       <div className='shop-container'>
            <div className='single-cart'>
            {
                books.map(book => <Cart key={book.id} data={book} click={clickCart}></Cart>)
            }
            </div> 
            <div className='update-container'>
                <Update key={updates.id} select={updates}></Update>
            </div>
       </div>
    );
};

export default Main;