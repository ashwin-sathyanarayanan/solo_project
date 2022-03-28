import { useEffect, useState } from "react";
import axios from "axios";
import Navigationbar from "./NavigationBar";
import CartContent from "./CartContent";
import Item from "./Item";
import "../App.css"

const DisplayAll = (props) => {
    const { userLoggedIn, setUserLoggedIn } = props;
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/", {
                // send our cookie along with the axios request
                withCredentials: true
            })
            .then(response => {
                // console.log(response.data.allItems)
                setItems(response.data.allItems)
                console.log(cartItems)
            })
            .catch((err) => console.log(err.response))
    }, [])

    const addToCart = (item) => {
        console.log(item)
        const exist = cartItems.find(x => x._id === item._id);
        console.log(exist)
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x._id === item._id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, qty: 1 }]);
        }
    }

    const removeItem = (item) => {
        const exist = cartItems.find((x) => x._id === item._id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x._id !== item._id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x._id === item._id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    }

        return <div >
            <Navigationbar
                userLoggedIn={userLoggedIn}
                setUserLoggedIn={setUserLoggedIn}
            />
            {/* <!-- Inner --> */}
            <div className="row">
                <div className="block row" style={{ flex: 2, flexWrap: "wrap" }}>
                    {/* <!-- Single item --> */}
                        {items.map((item) => {
                            return (<Item key={item.id} item={item} addToCart={addToCart}/>)
                        })}
                </div>
                <div className="block row" style={{flex: 1}}>
                    <CartContent
                        cartItems={cartItems}
                        removeItem = {removeItem}
                        addToCart = {addToCart}
                    />
                </div>
            </div>
        </div>
    };

    export default DisplayAll;




