import React from 'react';
import UpdateData from '../UpdateData/UpdateData';
import './Update.css'

const Update = ({select}) => {
    console.log(select);

    // clear
   const clear = (value)=>{
     value = [];
   
    }
    // selection
    const selection =(data) =>{
        const length = data.length;
        const random = Math.floor(Math.random(length) * length) + 1
        
        
        
    }
    return (
        <div className='divs'>
            <h3>জমা করা বই সমূহ</h3>
            {
                select.map(click => <div id='clear'>
                   
                    <UpdateData data={click} key={click.id}></UpdateData>
                    </div>)
            }
            <button onClick={() =>selection(select)} className='update-btn'>বাছাইকরন</button>

            <button onClick={() =>clear(select)} className='update-btn'>বাতিল করুন</button>
            <div id='selectedItems'>
                
            </div>
        </div>
    );
};

export default Update;