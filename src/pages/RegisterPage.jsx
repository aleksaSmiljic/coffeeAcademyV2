import { useState } from "react";
import { useLoginStore } from "../stores/LoginStore";
import SuccessfullRegister from "../components/SuccessfullRegister";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  const { login, setLogin, setIsAdminTrue } = useLoginStore();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (registerForm.password === registerForm.passwordAgain) {
      if (registerForm.email.includes("@coffee.com")) {
        setIsAdminTrue();
        setLogin();
        localStorage.setItem("admin", JSON.stringify(registerForm));
      } else {
        setLogin();
        localStorage.setItem("user", JSON.stringify(registerForm));
      }
    } else {
      alert("PASSWORDS NOT MATCHING");
    }
  }
  return (
    <div className="flex flex-col bg-white items-center justify-center w-full h-screen">
      <img
        src="logo.png"
        alt="caffee academy logo"
        className="w-48 h-auto pb-28"
      />
      {login ? (
        <SuccessfullRegister />
      ) : (
        <div className="flex justify-center items-center flex-col w-full">
          <div className="text-2xl font-montserrat font-semibold text-[#164864]">
            Registruj se
          </div>
          <div className="w-full">
            <RegisterForm
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              registerForm={registerForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
