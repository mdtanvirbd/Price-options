import { AiFillCheckSquare } from "react-icons/ai";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="border bg-blue-500 text-white p-4 rounded-lg shadow m-4 max-w-sm flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold mb-2 text-center">{name}</h3>
        <p className="text-xl mb-4 text-center">${price} / month</p>
        <ul className="list-disc list-inside flex-grow space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <AiFillCheckSquare className="text-green-400 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-12 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
        Choose Plan
      </button>
    </div>
  );
};

export default PriceOption;
