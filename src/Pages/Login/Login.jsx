import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.config';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');


    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setError('');
        // user create 
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Log in Successful',
                    showConfirmButton: false,
                    timer: 3000
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setError('Invalid email or password. Please try again.');
                console.error(error);
            })
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = e => {
        setError('');
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    return (
        <div className="md:w-1/3 mx-auto bg-base-400 shadow-2xl p-10">
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required />
                <input type="password" name="password" placeholder="Password" className="input input-bordered w-full my-4" required />

                <input type="submit" className="btn w-full bg-success" value="Login" />
                {
                    error && <p className="text-red-400">{error}</p>
                }
                <button
                    onClick={googleSignIn}
                    className='text-xl text-center mt-5'>
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