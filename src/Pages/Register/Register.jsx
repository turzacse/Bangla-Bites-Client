
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const name = e.target.name.value;

        console.log(email, password, name, photo);

        const capitalLetter = /[A-Z]/;
        const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

        setError('');
        setSuccess('');
        if (password.length < 6) {
            setError('Password should be 6 charecter or longer');
            return;
        }
        if (!capitalLetter.test(password)) {
            setError('Password sould contain at least one Capital letter');
            return;
        }

        if (!specialCharacter.test(password)) {
            setError('Password sould contain at least one Special Character');
            return;
        }

        // user create 
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registration Successful',
                    showConfirmButton: false,
                    timer: 3000
                })
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    return (
        <div>
            <div className="md:w-1/3 w-full mx-auto bg-base-400 shadow-2xl p-10">
                <form onSubmit={handleRegister}>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full my-4" required />
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered w-full" required />
                    <input type="password" name="password" placeholder="Password" className="input input-bordered w-full my-4" required />

                    <input type="submit" className="btn w-full bg-success" value="Login" />
                    <button className='text-xl text-center mt-5'>
                    </button>
                    {
                        error && <p className="text-red-400">{error}</p>
                    }
                    {
                        success && <p>{success}</p>
                    }
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