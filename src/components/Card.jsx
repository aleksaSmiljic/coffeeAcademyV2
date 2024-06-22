const Card = ({ title, description, price }) => {
  return (
    <li className="flex justify-center items-center bg-gray-100 border-[#248CC5] border-2 m-3 rounded-lg">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="p-2 md:left-2">
            <p className="text-black font-semibold text-xl font-montserrat">
              {title}
            </p>
            <p className="text-black  font-montserrat text-md font-medium">
              {description.short}
            </p>
            <p className="font-semibold text-xl text-[#164864] font-montserrat ">
              {price.small}.00 RSD
            </p>
          </div>
          <img
            src="coffeeCup.png"
            alt={title}
            className="h-32 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden right-2 m-2"
          />
        </div>
        <button className="bg-[#248CC5] text-white h-8 hover:bg-[#164864] focus:bg-[#164864] duration-200">
          Order here
        </button>
      </div>
    </li>
  );
};

export default Card;
