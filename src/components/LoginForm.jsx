import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../Schemas/loginSchema";
import { useLoginStore } from "../stores/LoginStore";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { setLogin, setIsAdminTrue } = useLoginStore();
  const navigate = useNavigate();

  const localStorageUserData = JSON.parse(localStorage.getItem("user"));
  const localStorageAdminData = JSON.parse(localStorage.getItem("admin"));

  const USER = { userEmail: "user@user.com", userPassword: "user1234" };
  const ADMIN = { adminEmail: "admin@admin.com", adminPassword: "admin1234" };

  const onSubmit = (data) => {
    console.log(data);
    if (
      (localStorageUserData?.email === data.email &&
        localStorageUserData?.password === data.password) ||
      (USER.userEmail === data.email && USER.userPassword === data.password)
    ) {
      setLogin();
      navigate("/");
      return;
    }

    if (
      (localStorageAdminData?.email === data.email &&
        localStorageAdminData?.password === data.password) ||
      (ADMIN.adminEmail === data.email && ADMIN.adminPassword === data.password)
    ) {
      setLogin();
      setIsAdminTrue();
      navigate("/");
      return;
    }

    alert("Invalid email or password!");
  };

  return (
    <form
      className="flex justify-center items-center flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="Email" className="w-full px-4 md:w-[400px] m-2">
        <input
          {...register("email")}
          placeholder="Email"
          type="text"
          className={`block border placeholder-slate-400 shadow-sm w-full font-montserrat p-1 h-12 rounded-md my-2 focus:outline-none
            ${
              errors.email
                ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                : "border-slate-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            }`}
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </label>
      <label htmlFor="password" className="w-full px-4 md:w-[400px] m-2">
        <input
          {...register("password")}
          placeholder="Šifra"
          type="password"
          className={`block border placeholder-slate-400 shadow-sm w-full font-montserrat p-1 h-12 rounded-md my-2 focus:outline-none
            ${
              errors.password
                ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                : "border-slate-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            }`}
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

export default LoginForm;
