import { Link } from "react-router-dom";

const SuccessfullRegister = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-3xl font-montserrat text-center font-medium">
        Uspešno ste se registrovali!
      </h2>
      <h2 className="text-lg m-6 text-center font-montserrat">
        <span className="text-[#248CC5]">Čestitamo!</span> Uspešno ste se
        registrovali. Sada možete uživati u brzom i jednostavnom naručivanju
        omiljene kafe online!
      </h2>
      <button className="block py-2 px-4 my-10 w-[200px] text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md font-montserrat">
        <Link to="/">Home Page</Link>
      </button>
    </div>
  );
};

export default SuccessfullRegister;
