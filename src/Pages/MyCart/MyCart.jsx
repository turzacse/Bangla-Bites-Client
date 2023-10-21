import { Link, useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useState } from "react";

const MyCart = () => {
    const cart = useLoaderData();
    const [carts, setCarts] = useState(cart);
    console.log(carts.length);
    return (
        <div>
            {
                carts.length === 0 ? 
                <p className="bg-base-200 p-10 w-[300px] mx-auto shadow-2xl text-center md:mt-32 mt-20  text-red-400 font-bold text-2xl">Your Cart is empty <br /> <Link to='/' className="font-normal text-green-600">Go back to home</Link> </p> : ''
            }
            <div className="gdid grid-cols-1 gap-10">
            {
                carts.map(product => <CartProduct 
                    key={product._id} 
                    product={product}
                    carts={carts}
                    setCarts={setCarts}
                    ></CartProduct>)
            }
        </div>
        </div>
    );
};

export default MyCart;