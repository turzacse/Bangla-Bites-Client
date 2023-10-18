import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = ({brand}) => {
    
    const {id, name, brandimg} = brand;
    
    return (
        <div>
            <div className="card card-side bg-base-200 shadow-xl">
                <figure><img className="h-[200px] w-[350px] rounded-xl p-4 shadow-xl" src={brandimg} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <Link to={`/product/${name}`} 
                    className="btn btn-success">Watch</Link>
                    </div>
                </div>
            </div>
    );
};

export default Brands;