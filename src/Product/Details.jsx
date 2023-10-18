import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
    const { id } = useParams();
    
    const [product, setProduct]= useState([]);
    const [selected, setSelected] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(()=> {
        fetch('http://localhost:5001/product')
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

       fetch('http://localhost:5001/cart',{
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
            Details Route
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="rounded-xl h-[400px] w-[600px]" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between">
                    <h3>Brand: {brand}</h3> <h3 className="btn bg-success">{price}TK</h3>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAdd} className="btn btn-warning">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;