
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
// import auth from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {

    const {createUser, logOut} = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        //6 character validation
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character');
            return;
        }
        // eslint-disable-next-line no-useless-escape
        else if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
            setRegisterError('Your password should have at least one special character');
            return;
        }

        setRegisterError('');
        setSuccess('');

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(swal("User registered successfully!"))

                //update profile
                updateProfile(result.user, {
                    displayName: name,
                })
                .then()
                .catch()

                logOut();
            })
            .catch(error => {
                setRegisterError(error.message);
            })
    }
    useEffect(() => {
        AOS.init();
      }, []);


    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/4Pm53yS/env2.jpg)' }} data-aos="slide-up" data-aos-anchor-placement="top-center"data-aos-duration="linear">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center text-white lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">You can register here and then get access to our awesome event services.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered " required />
                            <label className="label ">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-0">
                            <input className="btn accent bg-yellow-400" type="submit" value="Register" />
                        </div>
                    </form>
                    <div>
                    {   
                    registerError && <p>{registerError}</p>
                    }
                    <div className="hidden">
                    {
                    success && `${success}` 
                    }
                    </div>
                    
                </div>
                    <p className="flex justify-center pb-4">Already have an account? Please go to <span className="text-blue-700 underline"><Link to="/login"> Login</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;