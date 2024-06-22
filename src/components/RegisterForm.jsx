import { Link } from "react-router-dom";

const RegisterForm = ({ handleSubmit, handleInputChange, registerForm }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex justify-center items-center flex-col`}
    >
      <label htmlFor="Email" className="w-full px-3 md:w-[400px] m-2">
        <input
          placeholder="Ime i Prezime"
          pattern="([a-zA-Z]{2,})\s([a-zA-Z]{2,})"
          required
          value={registerForm.fullName}
          type="text"
          className={`peer block border border-slate-300 placeholder-slate-400 shadow-sm w-full font-montserrat p-1 h-12 rounded-md my-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`}
          name="fullName"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </label>
      <label htmlFor="Email" className="w-full px-3 md:w-[400px] m-2">
        <input
          placeholder="Email"
          pattern="([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})"
          required
          value={registerForm.email}
          type="email"
          className={`peer block border border-slate-300 placeholder-slate-400 shadow-sm w-full font-montserrat p-1 h-12 rounded-md my-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        ${
          registerForm.email.length > 0
            ? "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            : ""
        }`}
          name="email"
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </label>
      <label htmlFor="Email" className="w-full px-3 md:w-[400px] m-2">
        <input
          placeholder="Šifra"
          pattern="[\w!@#$%^&*]{8,20}$"
          required
          value={registerForm.password}
          type="password"
          className={`peer block border border-slate-300 placeholder-slate-400 shadow-sm w-full font-montserrat p-1 h-12 rounded-md my-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            ${
              registerForm.password.length > 0
                ? "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                : ""
            }`}
          name="password"
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="Email" className="w-full px-3 md:w-[400px] m-2">
        <input
          placeholder="Šifra (ponovo)"
          required
          value={registerForm.passwordAgain}
          type="password"
          className={`peer block border border-slate-300 placeholder-slate-400 shadow-sm w-full font-montserrat p-1 h-12 rounded-md my-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            ${
              registerForm.passwordAgain !== registerForm.password &&
              registerForm.passwordAgain.length > 0
                ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500"
                : ""
            }`}
          name="passwordAgain"
          onChange={handleInputChange}
        />
      </label>

      <div className="px-4 flex items-center flex-col w-full md:w-[400px]">
        <button className="block h-12 py-2 px-4 mt-10 mb-5 w-full text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md">
          Registruj se
        </button>
        <p className="underline font-montserrat text-sm">
          <Link to="/login">
            Već imate kreiran nalog?{" "}
            <span className="text-[#164864] font-semibold">Prijavite se</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
