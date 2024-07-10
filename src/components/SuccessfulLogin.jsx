import { Link } from "react-router-dom";

const SuccessfulLogin = ({ logout }) => {
  return (
    <div className="">
      <button className="block py-2 px-4 my-10 w-[200px] text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md font-montserrat">
        <Link to="/">Home Page</Link>
      </button>
      <button
        onClick={logout}
        className="block py-2 px-4 my-10 w-[200px] text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md font-montserrat"
      >
        <Link to="/login">Log Out</Link>
      </button>
    </div>
  );
};

export default SuccessfulLogin;
