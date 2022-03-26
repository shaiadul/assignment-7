import React from 'react';

const UpdateData = (props) => {
    const {data} =props;
    const {img,name} = data;
    return (
        <div>
            <p><img className='mini-pic' src={img} alt="" /> {name}</p>
        </div>
    );
};

export default UpdateData;