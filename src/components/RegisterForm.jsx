import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../Schemas/registerSchema";
import { useLoginStore } from "../stores/LoginStore";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { login } = useLoginStore();

  const onSubmit = (data) => {
    login(data?.email, data?.password);
  };
  return (
    <form
      className={`flex justify-center items-center flex-col`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="w-full px-3 md:w-[400px] m-2">
        <input
          {...register("fullName")}
          placeholder="Ime i Prezime"
          type="text"
          className={`block border placeholder-slate-400 shadow-sm w-full font-montserrat p-1 h-12 rounded-md my-2 focus:outline-none
            ${
              errors.fullName
                ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                : "border-slate-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            }`}
        />
        {errors.fullName && (
          <div className="text-pink-600">{errors.fullName.message}</div>
        )}
      </label>
      <label className="w-full px-3 md:w-[400px] m-2">
        <input
          {...register("email")}
          placeholder="Email"
          className={`block border placeholder-slate-400 shadow-sm w-full font-montserrat p-1 h-12 rounded-md my-2 focus:outline-none
            ${
              errors.email
                ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                : "border-slate-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            }`}
        />
        {errors.email && (
          <div className="text-pink-600">{errors.email.message}</div>
        )}
      </label>
      <label className="w-full px-3 md:w-[400px] m-2">
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
          <div className="text-pink-600">{errors.password.message}</div>
        )}
      </label>
      <label className="w-full px-3 md:w-[400px] m-2">
        <input
          {...register("confirmPassword")}
          placeholder="Šifra (ponovo)"
          type="password"
          className={`block border placeholder-slate-400 shadow-sm w-full font-montserrat p-1 h-12 rounded-md my-2 focus:outline-none
            ${
              errors.confirmPassword
                ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                : "border-slate-300 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            }`}
        />
        {errors.confirmPassword && (
          <div className="text-pink-600">{errors.confirmPassword.message}</div>
        )}
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
