import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const UpdateProfile = () => {
    const { user, updateUserProfile} = useContext(AuthContext);

    const upDateProfile = (e) =>{
        const name =e.target.name.value
        const image = e.target.image.value
        updateUserProfile(name || user.name, image || user.photoURL);
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <div className="text-center">
                        {/* <div className=""> */}
                            <img src={user.photoURL} alt="" className="w-[500px] h-[500px] rounded-full" />
                        {/* </div> */}
                </div>
                <h2 className="text-2xl"><span className="text-red-600 font-semibold">Email:</span> {user.email}</h2>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                <form className="card-body" onSubmit={upDateProfile}>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Image URL</span>
                        </label>
                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered" />
                    </div>
                    {/* <div className="form-control">
                    <label className="label">
                        <span className="">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div> */}
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Profile</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;