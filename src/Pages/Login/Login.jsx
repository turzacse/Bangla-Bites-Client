import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // user create 
        signIn(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div className="w-1/3 mx-auto bg-base-400 shadow-2xl p-10">
            <form onSubmit={handleLogin}>
            <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required />
            <input type="password" name="password" placeholder="Password" className="input input-bordered w-full my-4" required/>

            <input type="submit" className="btn w-full bg-success" value="Login" />
            <button className='text-xl text-center mt-5'>
            <FcGoogle className='text-center text-3xl'></FcGoogle>
            </button>
            <p>Not Registered?? 
            <Link 
            className='text-blue-400 ml-2'
            to='/register'
            >Please Register</Link> </p>


        </form>
        </div>
    );
};

export default Login;