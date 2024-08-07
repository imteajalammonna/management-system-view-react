import { MdLocalLibrary } from "react-icons/md";

const Home = () => {
    return (
        <div className="">
            <div className="bg-gradient-to-r pb-80 px-8">
                <hr className="text-white" />
                <h1 className="text-5xl font-bold bangla text-center text-white mt-10">শিক্ষাই জাতির মেরুদন্ড</h1>
            </div>
            <div className="m-14">
                <h4 className="bg-blue p-3 text-2xl text-white w-32">Category</h4>
                <hr className="text-blue" />
            </div>
            <div className="m-10 flex items-center justify-center space-x-24">
                <div className="bg-pink p-8 rounded-2xl"><MdLocalLibrary className="text-4xl" /></div>
                <div className="bg-green p-8 rounded-2xl"><MdLocalLibrary className="text-4xl" /></div>
                <div className="bg-yellow p-8 rounded-2xl"><MdLocalLibrary className="text-4xl" /></div>
                <div className="bg-gray p-8 rounded-2xl"><MdLocalLibrary className="text-4xl" /></div>
                <div className="bg-purple p-8 rounded-2xl"><MdLocalLibrary className="text-4xl" /></div>
                <div className="bg-blue p-8 rounded-2xl"><MdLocalLibrary className="text-4xl" /></div>
            </div>
            <hr className="m-14" />

            <div className="flex mx-48 my-24">

                <div className="bg-blue flex items-center justify-center p-5 px-20 text-white">
                    <div className="">
                        <img className="h-96" src="https://i.ibb.co/yp87YN9/man.png" alt="" />
                        <h2 className="text-3xl">Abdur Rahim </h2>
                    </div>
                    <div className="text-5xl">About</div>
                </div>

                <div className="">
                </div>

            </div>
        </div>
    );
};

export default Home;