import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // user create 
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <div className="w-1/3 mx-auto bg-base-400 shadow-2xl p-10">
            <form onSubmit={handleRegister}>
            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
            <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full my-4" required />
            <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required />
            <input type="password" name="password" placeholder="Password" className="input input-bordered w-full my-4" required/>

            <input type="submit" className="btn w-full bg-success" value="Login" />
            <button className='text-xl text-center mt-5'>
            </button>
            <p>Already Registered?? 
            <Link 
            className='text-blue-400 ml-2'
            to='/login'
            >Please Login</Link> </p>


        </form>
        </div>
        </div>
    );
};

export default Register;