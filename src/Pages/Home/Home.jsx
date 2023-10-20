import { useContext, useEffect, useState } from "react";
import Brands from "./Brands";
import Footer from "../../Shared/Footer";
import Extra1 from "./Extra1";
import Extra2 from "./Extra2";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {

    const [brands, setbrands] = useState([]);
    const { dark} = useContext(AuthContext);
    useEffect(() => {
        fetch('https://turzacse.github.io/Fake-Data/brand.json')
            .then(res => res.json())
            .then(data => setbrands(data));
    }, [])

    const allBrand = brands.brands;

    //console.log(product);
    return (
        <div className={dark ? "dark" : "light"}>
            <Extra1></Extra1>
            
            <div className="text-center mt-16">
                    <h1 className="lg:text-5xl text-2xl font-extrabold text-orange-500">Our Featured Brands</h1>
                    <h3 className="text-green-600 font-semibold mt-2 lg:text-lg text-sm">Discover the world's most loved brands under one roof</h3>
                    <p className="text-gray-400 lg:mx-32 mt-4">Welcome to our brand showcase! At <span className="text-orange-500">Bangla Bites</span>, we take pride in offering you the finest selections from top brands that have captured the hearts of millions worldwide. Indulge in the familiar tastes of McDonald's, sip on the classic refreshment of Coca-Cola, and more.</p>
                </div>

            <div className="mx-10">
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-2 lg:m-20 mt-10">
                    {
                        allBrand?.map(brand => <Brands key={brand.id} brand={brand}></Brands>)
                    }
                </div>
            </div>
            <Extra2></Extra2>
            <Footer></Footer>
        </div>
    );
};

export default Home;