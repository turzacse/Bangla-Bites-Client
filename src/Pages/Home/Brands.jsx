import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = ({brand}) => {
    
    const {id, name, brandimg} = brand;
    
    return (
        <div>
            <div className="card card-side bg-base-200 shadow-xl">
                <figure><img className="lg:h-[200px] h-[120px] lg:w-[350px] w-[200px] rounded-xl p-4" src={brandimg} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="lg:text-2xl text-lg font-semibold">{name}</h2>
                    <Link to={`/product/${name}`} 
                    className="btn btn-success bg-orange-500 text-white border-none">Buy</Link>
                    </div>
                </div>
            </div>
    );
};

export default Brands;