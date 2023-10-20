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