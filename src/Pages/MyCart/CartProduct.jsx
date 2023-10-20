import { AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';

const CartProduct = ({product}) => {
    console.log(product);
    const {_id, name, brand, price, photo} = product;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              
             fetch(`http://localhost:5001/cart/${_id}`,{
                method: 'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                if(data.deleteCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
    }
    return (
        <div>
            <div className="md:w-1/2 w-full mx-auto flex p-5 gap-10 shadow-2xl mb-10">
                <div>
                    <img className="md:h-[200px] h-[150px] md:w-[300px] w-[200px] rounded-xl" src={photo} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <h3><span className='font-bold'>Brand:</span>{brand}</h3>
                    <h4><span className='font-bold'>Price:</span> {price} TK</h4>
                    <div className='text-2xl mt-20 flex justify-center items-center gap-10'>
                        <button 
                        onClick={() => handleDelete(_id)}
                        className='bg-red-400 p-2 rounded-full text-white'>
                        <AiOutlineDelete></AiOutlineDelete>
                        </button>
                        <button className='btn btn-warning'>See Details</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartProduct;