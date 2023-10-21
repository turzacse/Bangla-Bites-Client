import { Link, NavLink } from "react-router-dom";
import StarRatings from 'react-star-ratings';


const ProductCard = ({ p }) => {
    //console.log(p);
    const {_id, name, photo,brand, type, price, ratting, description } = p;
    const dName ='No product Here';

    const rating = typeof ratting === 'number' ? ratting : parseFloat(ratting);


    return (
        <div>
            {/* <h2>{p.length}</h2> */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="lg:h-[200px] h-[100px] lg:w-[200px] w-[100px] rounded-xl ml-4" src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title lg:text-2xl text-xl">{name || dName}</h2>
                    <h2 className="text-gray-400 font-semibold"><span className="font-bold text-black">Brand: </span>{brand}</h2>
                    <h2 className="text-gray-400 font-semibold"><span className="font-bold text-black">Type: </span>{type}</h2>
                    <h2 className="text-gray-400 font-semibold"><span className="font-bold text-black">Price: </span>{price} BDT</h2>
                    {/* <h2 className="text-gray-400 font-semibold"><span className="font-bold text-black"></span>{ratting}</h2> */}
                    <StarRatings
                            rating={rating}
                            starRatedColor="#ffa534"
                            starEmptyColor="gray"
                            numberOfStars={5} 
                            name="rating"
                            starDimension="20px"
                            starSpacing="1px"
                        />
                   
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