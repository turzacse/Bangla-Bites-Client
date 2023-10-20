// import { FaBowlFood } from 'react-icons/fa';

const Extra2 = () => {
    return (
        <div className="my-10">
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={'https://i.ibb.co/yffmSyD/coffee1.jpg'} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="md:text-5xl text-3xl font-bold mb-10">Why Choose  <span className="text-orange-500">Bangla Bites !!</span></h1>
                        
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4">
                {/* chose 1 */}
                <div>
                    <h2 className="text-xl font-bold text-sky-500">Authentic Bangladeshi Flavors</h2>
                    <p className="text-gray-400">We're passionate about preserving the rich and diverse culinary traditions of Bangladesh. Our chefs use time-honored recipes and the finest spices to deliver the true taste of Bangladesh to your doorstep.</p>
                </div>
                {/* chose 2 */}
                <div>
                    <h2 className="text-xl font-bold text-sky-500">Exquisite Menu</h2>
                    <p className="text-gray-400">Our menu is a carefully curated selection of delectable Bangladeshi dishes. From mouthwatering biryanis to spicy curries and sweet desserts, every item is a reflection of our commitment to quality and authenticity.</p>
                </div>
                {/* chose 3 */}
                <div>
                    <h2 className="text-xl font-bold text-sky-500">Prompt and Safe Delivery</h2>
                    <p className="text-gray-400">We prioritize the freshness and safety of your food. Our delivery team ensures that your order reaches you promptly and in the best condition, giving you peace of mind.</p>
                </div>
                {/* chose 4 */}
                <div>
                    <h2 className="text-xl font-bold text-sky-500">Customer-Centric Approach</h2>
                    <p className="text-gray-400">At Bangla Bites, we believe in putting our customers first. We're here to accommodate your preferences and dietary requirements, and we welcome your feedback to continually improve our service.</p>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra2;