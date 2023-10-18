import { Link, NavLink } from "react-router-dom";

const ProductCard = ({ p }) => {
    //console.log(p);
    const {_id, name, photo,brand, type, price, ratting, description } = p;
    return (
        <div>
            <h2>{p.length}</h2>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="h-[200px] w-[200px]" src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <h2 className="text-gray-400 font-semibold"><span className="font-bold text-black">Brand: </span>{brand}</h2>
                    <h2 className="text-gray-400 font-semibold"><span className="font-bold text-black">Type: </span>{type}</h2>
                    <h2 className="text-gray-400 font-semibold"><span className="font-bold text-black">Price: </span>{price}</h2>
                    <h2 className="text-gray-400 font-semibold"><span className="font-bold text-black">Ratting: </span>{ratting}</h2>
                    <div className="card-actions justify-end">
                        <Link
                        to={`/details/${_id}`}
                        className="btn btn-success"
                        >Details</Link>
                        <Link
                        to={`/update/${_id}`}
                        className="btn btn-warning">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;