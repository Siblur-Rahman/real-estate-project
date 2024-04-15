import { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

const {createUser, updateUserProfile} = useContext(AuthContext);
const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault();
        const name =e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const image = e.target.image.value
        
        // create user in firebase

        createUser(email, password)
        .then(()=>{
            updateUserProfile(name, image);
            navigate("/");
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <div className="text-center">
                <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Image URL</span>
                        </label>
                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p>Already have Account? Please
                    <Link to="/login"><button className="btn btn-link">LOGIN</button></Link>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Register;