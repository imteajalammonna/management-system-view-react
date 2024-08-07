import { Checkbox, TextField } from "@mui/material";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <div className="bg-gradient-to-r p-5">
                <IoArrowBack onClick={handleBack} className="text-2xl mx-5 text-white cursor-pointer"></IoArrowBack>
            </div>
            <div className="flex items-center justify-center mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 shadow-2xl min-w-[1200px] rounded-2xl place-items-stretch place-content-around">
                    <div className="">
                        <img
                            src="https://i.ibb.co/FYBCLsY/Screenshot-159.png"
                            alt="Side Image"
                            className="rounded-s-2xl"
                        />
                    </div>
                    <div className="rounded-2xl z-50 flex flex-col items-center justify-center w-full pr-10">
                        <h2 className="text-5xl font-bold text-blue-600 mb-4">Create Account</h2>
                        <form className="w-full">
                            <div className="space-y-4 w-ful max-w- flex flex-col">
                                <TextField id="fullWidth" label="Name" variant="standard" />
                                <TextField id="standard-basic" label="Gmail" variant="standard" />
                                <TextField id="standard-basic" label="Madrasha Name" variant="standard" />
                                <TextField id="standard-basic" label="Password" variant="standard" />
                                <TextField id="standard-basic" label="Confirm Password" variant="standard" />
                            </div>
                            <div className="my-3"><Checkbox />I agree to the <Link className="underline text-[#3347ff]">terms of service</Link> and <Link className="underline text-[#3347ff]"> privacy policy</Link></div>
                            <button className="text-white font-bold w-full bg-[#5352EC] p-3 rounded-xl">Login</button>
                            <div className="flex my-5">
                                <button className="text-white font-bold w-1/2 mr-2 bg-[#5352EC] p-3 rounded-xl">Madrasha</button>
                                <button className="text-white font-bold w-1/2 ml-2 bg-[#5352EC] p-3 rounded-xl">Admin</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;