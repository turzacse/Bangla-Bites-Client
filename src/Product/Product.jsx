import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../Pages/Home/ProductCard";
import Footer from "../Shared/Footer";

const Product = () => {
    const { name } = useParams();

    //console.log(name);
    const [products, setProducts] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [brands, setbrands] = useState([]);
    const [slider, setSlider] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://server-side-sepia-eight.vercel.app/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            })
    }, [name])

    useEffect(() => {
        const filteredProduct = products.filter(pro => pro.brand === name);
        setFilterProduct(filteredProduct);
    }, [products, name])

    useEffect(() => {
        fetch('https://turzacse.github.io/Fake-Data/brand.json')
            .then(res => res.json())
            .then(data => {
                setbrands(data);
                setIsLoading(false);
            })
    }, [])

    const ourBrands = brands.brands;
    useEffect(() => {
        if (brands && brands.brands) {
            const selected = ourBrands.filter(brand => brand.name === name);
            setSlider(selected || null);
        }
    }, [name, brands])

    console.log(slider, name);
    console.log(brands.brands);

    const img = [];
    for (const item of slider) {
        if (item.sliderimages) {
            img.push(...item.sliderimages);
        }
    }

    console.log(img);


    return (
        <div>
            <div className="mx-10 mb-10">
            {/* slider  */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img[0]} className="w-full lg:h-[350px] h-[170px] rounded-3xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-2 lg:right-5 right-2 lg:top-1/2 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img[1]} className="w-full lg:h-[350px] h-[170px] rounded-3xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-2 lg:right-5 right-2 lg:top-1/2 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img[2]} className="w-full lg:h-[350px] h-[170px] rounded-3xl" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 left-2 lg:right-5 right-2 lg:top-1/2 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {/* finished Slider  */}
            <div>
                <h2 className="mt-10 lg:text-3xl text-2xl font-bold text-orange-500 shadow-2xl">Our Food item</h2>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-5 gap-2">
                        {
                            filterProduct.length === 0 ? <p className="bg-base-200 p-10 w-[350px] mx-auto shadow-2xl text-center md:mt-20  text-red-400 font-bold text-2xl">The Item of this brand is unavailable now <br /> <Link to='/' className="font-normal text-green-600">Please Go back to home</Link> </p> 
                            :
                            filterProduct.map(p => <ProductCard key={p._id} p={p}></ProductCard>)
                        }
                    </div>
                )}
            </div>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Product;