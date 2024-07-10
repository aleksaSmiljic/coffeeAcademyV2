import SuccessfullRegister from "../components/SuccessfullRegister";
import RegisterForm from "../components/RegisterForm";
import { useLoginStore } from "../stores/LoginStore";

const RegisterPage = () => {
  const { isLogin } = useLoginStore();

  return (
    <div className="flex flex-col bg-white items-center justify-center w-full h-screen">
      <img
        src="logo.png"
        alt="caffee academy logo"
        className="w-48 h-auto pb-28"
      />
      {isLogin ? (
        <SuccessfullRegister />
      ) : (
        <div className="flex justify-center items-center flex-col w-full">
          <div className="text-2xl font-montserrat font-semibold text-[#164864]">
            Registruj se
          </div>
          <div className="w-full">
            <RegisterForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
