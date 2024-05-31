import axios from 'axios';
import {useState,React} from 'react'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {

  const [email,SetEmail] = useState("");
  const [password,SetPassword] = useState("");
  
  async function handleSubmit(event){

    event.preventDefault();

    await axios.post("http://localhost:5000/users/signing",{
      password:password,
      email:email,
    }).then(function(response){
      
      if(response.status===201){

        localStorage.setItem('id',response.data.user._id);
        localStorage.setItem('username',response.data.user.username);
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('email',response.data.user.email);
     

        window.location.href = '/';
       
      }

    }).catch(function(error){
      console.log(error);
       toast.error('😟 invalid ', {
           position: "top-right",
           autoClose: 5000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
           });
    });

  }


  return (

      <div
    className="relative mx-auto mt-20 w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    <div className="w-full">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div className="mt-5">
            <form action="POST" onSubmit={handleSubmit} >
                <div className="relative mt-6">
                    <input type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" 
                    value={email} onChange={(e)=> SetEmail(e.target.value)}
                    />
                    <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>
                <div className="relative mt-6">
                    <input type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" 
                    value={password} onChange={(e) => SetPassword(e.target.value)}
                    />
                    <label for="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>
                <div className="my-6">
                    <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                </div>
                <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                    <Link to="/SignUp"
                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                        up
                    </Link>.
                </p>
            </form>
        </div>
    </div>
</div>
  )
}

export default Login