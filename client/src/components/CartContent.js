import "../App.css"


const CartContent = (props) => {
    const {cartItems, addToCart, removeItem} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + parseInt(c.price).toFixed(2) * c.qty, 0);
    const taxPrice = itemsPrice * 0.072;
    const shippingPrice = itemsPrice * 0.010
    const total = itemsPrice + taxPrice + shippingPrice
    return(
    <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart is Empty</div>}
            {cartItems.map((item) => {
                    return(
                    <div key={item.id} className="row">
                        <div className="col-2"> {item.name} </div> 
                        <div className="col-2">
                            <button style={{marginRight: "2px", backgroundColor: "green"}} onClick={() => addToCart(item)}>+</button>
                            <button style={{backgroundColor: "red"}} onClick={() => removeItem(item)}>-</button>
                        </div>    
                        <div className="col-2 text-right">{item.qty} x {parseInt(item.price).toFixed(2)}</div>   
                    </div>)
                })}
        </div>
        {cartItems.length !== 0 &&(
            <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Items Price</div>
                    <div className="col-1 text-right">{itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Tax</div>
                    <div className="col-1 text-right">{taxPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Shipping</div>
                    <div className="col-1 text-right">{shippingPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Total</div>
                    <div className="col-1 text-right">{total.toFixed(2)}</div>
                </div>
                <button style={{
                    backgroundColor: "#0d6efd",
                    color: "white",
                    borderRadius: "0.5rem",
                    width: "200px",
                    marginTop: "10px"
                }}>Checkout</button>
            </>
        )}
    </aside>)
}

export default CartContent;