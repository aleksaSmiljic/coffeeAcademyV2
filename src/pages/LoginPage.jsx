import { useLoginStore } from "../stores/LoginStore";
import SuccessfulLogin from "../components/SuccessfulLogin";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const { login, setLogout } = useLoginStore();

  function handleLogout() {
    setLogout();
  }

  return (
    <div className="flex flex-col bg-white items-center justify-center w-full h-screen">
      <img
        src="logo.png"
        alt="caffee academy logo"
        className="w-48 h-auto pb-28"
      />
      {login ? (
        <SuccessfulLogin handleLogout={handleLogout} />
      ) : (
        <div className="flex justify-center items-center flex-col w-full">
          <div className="text-2xl font-montserrat font-semibold text-[#164864]">
            Prijavi se
          </div>
          <div className="w-full">
            <LoginForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
