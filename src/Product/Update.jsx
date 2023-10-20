import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
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

    const result = selected[0];

    const {_id, photo,name,brand, type, price, ratting, description} = result || {};

    const handleUpdate = e =>{
        e.preventDefault();

        const form = e.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const description = form.description.value;

        const product = {photo, name, brand, type, price, ratting, description}

        console.log(product);

        fetch(`http://localhost:5001/product/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Your product has been Updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className="bg-base-200 p-10 md:w-1/2 w-full mx-auto shadow-xl">
            <h3 className="text-2xl font-semibold text-center mb-10">Update the Food Item</h3>
            <form onSubmit={handleUpdate}>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" defaultValue={photo} required />
            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full my-4" defaultValue={name} required/>

            <div className="lg:flex flex-row gap-4 mb-4">
                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full mb-4" defaultValue={brand} required />
                <input type="text" name="type" placeholder="Product Type" className="input input-bordered w-full" defaultValue={type} required/>
            </div>
            <div className="lg:flex flex-row gap-4">
                <input type="text" name="price" placeholder="Product Price" className="input input-bordered w-full mb-4" defaultValue={price} required/>
                <input type="text" name="ratting" placeholder="Product Ratting" className="input input-bordered w-full" defaultValue={ratting} required/>
            </div>
            <input type="text" name="description" placeholder="Product Description" className="input input-bordered w-full my-4" defaultValue={description} required/>

            <input type="submit" className="btn w-full bg-success" value="Update" />

        </form>
        </div>
    );
};

export default Update;