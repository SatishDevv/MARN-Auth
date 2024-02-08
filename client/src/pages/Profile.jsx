import { useSelector } from "react-redux";
export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl font-semibold text-center py-7 ">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="w-24 h-24 self-center cursor-pointer rounded-full object-cover mt-2 "
          src={currentUser.profilePicture}
          alt="profile"
        />
        <input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="UserName"
          className="bg-slate-100 rounded-lg p-3 "
        />
        <input
          defaultValue={currentUser.email}
          type="email"
          id="email"
          placeholder="Email"
          className="bg-slate-100 p-3 rounded-lg "
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="bg-slate-100 p-3 rounded-lg "
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-45 ">
          Update{" "}
        </button>
      </form>
      <div className='flex justify-between mt-5 '>
        <span className="text-red-500" >Delete Account</span>
        <span className="text-red-500" >Sign Out</span>
      </div>

    </div>
  );
}
