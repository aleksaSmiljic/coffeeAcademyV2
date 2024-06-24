import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../stores/LoginStore";
import { useState } from "react";
import SuccessfulLogin from "../components/SuccessfulLogin";
import LoginForm from "../components/LoginForm";
import LoginFormZod from "../TestComponents/LoginFormZod";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const USER = { userEmail: "user@user.com", userPassword: "user1234" };
  const ADMIN = { adminEmail: "admin@admin.com", adminPassword: "admin1234" };

  const { login, setLogin, setLogout, setIsAdminTrue } = useLoginStore();

  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleLogout() {
    setLogout();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const localStorageDataUser = JSON.parse(localStorage.getItem("user"));
    const localStorageDataAdmin = JSON.parse(localStorage.getItem("admin"));
    if (
      (localStorageDataUser?.email === email &&
        localStorageDataUser?.password === password) ||
      (localStorageDataAdmin?.email === email &&
        localStorageDataAdmin?.password === password) ||
      (USER.userEmail === email && USER.userPassword === password) ||
      (ADMIN.adminEmail === email && ADMIN.adminPassword === password)
    ) {
      if (email.includes("@coffee.com") || email === ADMIN.adminEmail) {
        setIsAdminTrue();
      }
      setLogin();
      navigate("/");
    } else {
      alert("Invalid email or password!");
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
        <SuccessfulLogin handleLogout={handleLogout} />
      ) : (
        <div className="flex justify-center items-center flex-col w-full">
          <div className="text-2xl font-montserrat font-semibold text-[#164864]">
            Prijavi se
          </div>
          <div className="w-full">
            {/* <LoginForm
              email={email}
              password={password}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleSubmit={handleSubmit}
            /> */}
            <LoginFormZod />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
