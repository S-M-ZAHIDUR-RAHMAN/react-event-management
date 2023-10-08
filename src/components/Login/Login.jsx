
// import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
// import auth from "../../firebase/firebase.config";
import swal from "sweetalert";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const [registerLoginError, setRegisterLoginError] = useState('');
    const [successLogin, setSuccessLogin] = useState('');

    
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        setRegisterLoginError('');
        setSuccessLogin('');

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccessLogin(swal("Good job!", "User logged in successfully!", "success"))
                e.target.reset();
                navigate('/')
                
            })
            .catch(error => {
                setRegisterLoginError(error.message);
            })
    }
    //Google
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn =()=>{
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccessLogin(swal("Good job!", "User logged in successfully!", "success"))
            navigate('/')
        })
        .catch(error => {
            setRegisterLoginError(error.message);
        })
    }



    return (
        <div className="hero min-h-screen bg-slate-500">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">You can login here and then get access to our awesome event services.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn accent" type="submit" value="Login" />
                        </div>
                    </form>
                    <div>
                    {   
                    registerLoginError && <p>{registerLoginError}</p>
                    }
                    <div className="hidden">
                    {
                    successLogin && `${successLogin}` 
                    }
                    </div>
                </div>
                    <p className="flex justify-center">Yet to open an Account ? Please go to <span className="text-blue-700 underline"><Link to="/register">Register</Link></span></p>
                    <div className="flex justify-center">
                        <button className="btn accent" onClick={handleGoogleSignIn}>Google Sign in</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Login;