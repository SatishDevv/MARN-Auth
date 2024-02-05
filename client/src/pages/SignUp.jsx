import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl text-center font-semibold my-7 ">Sign Up</h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="UserName"
          id="username"
          className="bg-slate-100 p-3 rounded-lg "
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg "
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg "
        />

        <button className="bg-slate-700 p-3 text-white uppercase rounded-xl hover:opacity-90 disabled:opacity-50  ">
          {" "}
          sign Up{" "}
        </button>
      </form>
      <div className=" flex gap-2 pt-5 ">
        <p>Have an account?</p>
        <Link to='/sign-in' className='text-blue-600' >
          <span>Sign in</span>
        </Link>
      </div>
    </div>
  );
}
