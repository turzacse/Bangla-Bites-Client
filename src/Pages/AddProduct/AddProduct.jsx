import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = e =>{
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
        //send data 
        fetch('http://localhost:5001/product',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(product)
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
        e.target.reset();
    }
    return (
    <div className="bg-base-200 p-10 w-1/2 mx-auto shadow-xl">
        <h3 className="text-2xl font-semibold text-center mb-10">Add the Food Item</h3>
        <form onSubmit={handleAddProduct}>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full my-4" required/>

            <div className="flex gap-4 mb-4">
                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" required />
                <input type="text" name="type" placeholder="Product Type" className="input input-bordered w-full" required/>
            </div>
            <div className="flex gap-4">
                <input type="text" name="price" placeholder="Product Price" className="input input-bordered w-full" required/>
                <input type="text" name="ratting" placeholder="Product Ratting" className="input input-bordered w-full" required/>
            </div>
            <input type="text" name="description" placeholder="Product Description" className="input input-bordered w-full my-4" required/>

            <input type="submit" className="btn w-full bg-success" value="Add a product" />

        </form>
    </div>
    );
};

export default AddProduct;