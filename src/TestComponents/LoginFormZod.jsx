import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginFormZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const localStorageUserData = JSON.parse(localStorage.getItem("user"));
  const localStorageAdminData = JSON.parse(localStorage.getItem("admin"));

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex justify-center items-center flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="Email" className="w-full px-4 md:w-[400px] m-2">
        <input
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (
                value !== localStorageAdminData?.email ||
                value !== localStorageUserData?.email
              ) {
                return "Email does not exist";
              }
              return true;
            },
          })}
          placeholder="Email"
          type="text"
          className={`peer block border border-slate-300 placeholder-slate-400 shadow-sm w-full font-montserrat p-1 h-12 rounded-md my-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
            errors.email
              ? "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              : ""
          }`}
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </label>
      <label htmlFor="password" className="w-full px-4 md:w-[400px] m-2">
        <input
          {...register("password", {
            required: "Password is required",
            validate: (value) => {
              if (
                value !== localStorageAdminData?.password ||
                value !== localStorageUserData?.password
              ) {
                return "Incorrect password";
              }
              return true;
            },
          })}
          placeholder="Šifra"
          type="password"
          className="peer block border border-slate-300 placeholder-slate-400 shadow-sm w-full font-montserrat p-1 h-12 rounded-md my-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
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

export default LoginFormZod;
