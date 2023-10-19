

const Extra1 = () => {
    return (
        <div className="bg-base-200 shadow-2xl lg:flex lg:flex-row flex-row-reverse justify-between rounded-xl lg:p-20 p-10">
            <div>
                <h2 className="lg:text-5xl text-3xl font-bold lg:mt-10"><span className="text-orange-500">Savor</span> the <br />Flavor <span className="text-orange-500">Today</span></h2>
                <p className="lg:mr-20 text-gray-500 my-6">At our establishment, we believe that food is an art form. It's a symphony of flavors that takes you on a delightful adventure, leaving you craving for more. Whether you're a connoisseur or an adventurer, our menu offers something for every palate.</p>
                <button className="btn capitalize text-xl bg-orange-500 text-white mb-10 py-2 px-4 hover:text-black">Explore</button>
            </div>
            <img className="lg:h-1/2 lg:w-1/2 rounded-3xl border-none shadow-2xl" src={'https://i.ibb.co/6s3Nt7W/home1.jpg'} alt="" />
        </div>
    );
};

export default Extra1;