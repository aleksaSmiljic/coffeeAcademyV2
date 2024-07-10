import { useEffect } from "react";
import CardList from "../components/CardList";
import { useLoginStore } from "../stores/LoginStore";

const HomePage = () => {
  const { login } = useLoginStore();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user?.isLogin) login();
  }, []);

  return <CardList />;
};

export default HomePage;
