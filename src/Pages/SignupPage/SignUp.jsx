import React, { useContext, useState } from 'react';
import logo from "../../assets/car.png";
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import useTitle from '../../CustomHooks/useTitle';

const SignUp = () => {
  useTitle("Sign Up")
    const [error, setError] = useState("")
    const {signUp, logOut} = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError("")
        signUp(email, password)
            .then((result) => {
                const user = result.user;
                UpdateUser(user, name, photo)
                Swal.fire(
                    'User sign up successfull',
                    'Login to continue',
                    'success'
                  )
                  logOut()
                form.reset()
            })
            .catch(error => setError(error.message))
    }

    const UpdateUser = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
          })
            .then(() => {})
            .catch(error => setError(error))
    }
    return (
        <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
      <div className="flex gap-3 items-center">
          <img src={logo} alt="logo" className="mb-3 w-16 h-16" />
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#da8deb] from-[#47dcd1]">
            TurboDrive
          </span>
        </div>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign up to create your account
            </h1>
            
            <form onSubmit={handleSignUp} className="space-y-4 md:space-y-6" action="#">
              <h3 className="text-base text-green-500"></h3>
              <h3 className="text-base text-red-600">{error}</h3>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2 focus:border-primary2 block w-full p-2.5 "
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2 focus:border-primary2 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary1 focus:border-primary2 block w-full p-2.5 "
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photo"
                  id="photo"
                  placeholder="Your Photo URL"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary2 focus:border-primary2 block w-full p-2.5 "
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full text-white bg-primary2 hover:bg-primary1 focus:ring-4 focus:outline-none focus:ring-primary1 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account? {" "}
                <Link
                  to="/login"
                  className="font-medium text-primary2 hover:underline "
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;