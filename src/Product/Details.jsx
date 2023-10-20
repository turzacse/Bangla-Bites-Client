import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
    const { id } = useParams();
    
    const [product, setProduct]= useState([]);
    const [selected, setSelected] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(()=> {
        fetch('https://bangla-bites-server-side-7pnd8ccw7-turzas-projects.vercel.app/product')
        .then(res => res.json())
        .then(data => {
            setProduct(data);
            setIsLoading(false);
        })
    },[])

    useEffect(()=>{
        const select = product.filter(p => p._id === id);
        setSelected(select);
        setIsLoading(false);
    },[id, product])

    console.log(id);
    console.log(product);
    //console.log(selected[0]);

    const result = selected[0];
    console.log(result);

    const {photo,name,brand, type, price, ratting, description} = result || {};
    console.log(name,brand, type, price, ratting, description);

    const handleAdd = e =>{
        e.preventDefault();
       const cart = {photo,name,brand, type, price, ratting, description};

       fetch('https://bangla-bites-server-side-7pnd8ccw7-turzas-projects.vercel.app/cart',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(cart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Your product has been added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className="mx-20">
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="rounded-xl md:h-[400px] md:w-[600px]" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="md:flex justify-between">
                    <h3><span className="font-semibold">Brand:</span> {brand}</h3> <h3 className="btn bg-success">{price}TK</h3>
                    </div>
                    <p className="text-gray-400">{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAdd} className="btn btn-warning text-white hover:bg-red-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;