import React from 'react';
import "../App.css"

const Item = (props) => {
    const { item, addToCart } = props;
    return (
        <div  style={{ width: "15rem", marginBottom: "15px" }}>
            <a className="card-img-top" href={`/${item._id}`}>
                <img src={item.imageURL} className="card-img-top" alt="..."
                    style={{
                        width: "200px",
                        height: "200px",
                        border: "solid grey 1px"
                    }} />
            </a>
            <div className="card-body" >
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: {item.price}</p>
                <a onClick={() => { addToCart(item) }} className="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    );
}

export default Item;