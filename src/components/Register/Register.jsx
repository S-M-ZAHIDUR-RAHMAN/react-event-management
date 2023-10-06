
import { Link } from "react-router-dom";
const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    }


    return (
        <div className="hero min-h-screen bg-slate-500">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">You can register here and then get access to our awesome event services.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body bg-slate-600">
                        <div className="form-control ">
                        <label className="label ">
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
                        <div className="form-control mt-6">
                            <input className="btn accent" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className="flex justify-center bg-slate-600">Already have an account? Please go to <span className="text-blue-700 underline"><Link to="/login">Login</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;