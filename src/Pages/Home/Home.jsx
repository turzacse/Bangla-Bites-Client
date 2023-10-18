import { useEffect, useState } from "react";
import Brands from "./Brands";
import Footer from "../../Shared/Footer";

const Home = () => {

    const [brands, setbrands] = useState([]);

    useEffect(() => {
        fetch('https://turzacse.github.io/Fake-Data/brand.json')
            .then(res => res.json())
            .then(data => setbrands(data));
    }, [])

    const allBrand = brands.brands;

    //console.log(product);
    return (
        <div className="">
            
            <div className="mx-10">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 m-20">
                    {
                        allBrand?.map(brand => <Brands key={brand.id} brand={brand}></Brands>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;