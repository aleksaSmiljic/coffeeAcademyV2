import { Link } from "react-router-dom";

const LoginForm = ({
  handleSubmit,
  handleEmailChange,
  handlePasswordChange,
  email,
  password,
}) => {
  return (
    <form
      className="flex justify-center items-center flex-col"
      onSubmit={handleSubmit}
    >
      <label htmlFor="Email" className="w-full px-4 md:w-[400px] m-2">
        <input
          placeholder="Email"
          required
          type="email"
          className="block border border-black w-full font-montserrat p-1 h-12 rounded-md my-2"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
      </label>
      <label htmlFor="password" className="w-full px-4 md:w-[400px] m-2">
        <input
          placeholder="Šifra"
          required
          type="password"
          className="block border border-black w-full font-montserrat p-1 h-12 rounded-md my-2"
          value={password}
          onChange={(e) => handlePasswordChange(e)}
        />
      </label>
      <p className="underline font-montserrat text-sm text-[#248CC5]">
        <Link to="/register">Želim da se registrujem</Link>
      </p>
      <div>
        <Link
          to="/password-reset"
          className="underline font-montserrat text-sm text-[#248CC5]"
        >
          Zaboravio sam šifru
        </Link>
      </div>
      <div className="w-full px-4 md:w-[400px]">
        <button className="block h-12 py-2 px-4 my-10 w-full text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md">
          Prijavi se
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
