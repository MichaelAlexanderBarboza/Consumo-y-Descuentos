import type { Dispatch, SetStateAction } from "react";

// Example array of porcentage options
const desPorcentages = [
 {
    id: 'tip-5',
    value: .05,
    label: '5%'
  },
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-15',
    value: .15,
    label: '15%'
  },
];
type DesPorcentageProps = {
  porcentage: number; // Optional porcentage prop
  setPorcentage: Dispatch<SetStateAction<number>>;
};

const DesPorcentageFrom = ({ setPorcentage, porcentage }: DesPorcentageProps) => {
  return (
    <div className="w-full ">
      <h3 className="font-bold text-2xl">Descuento:</h3>
      <form>
        {desPorcentages.map((desPorcentage) => (
          <div key={desPorcentage.id} className="flex gap-5">
            <input
              id={desPorcentage.id}
              type="radio"
              name="desporcentage"
              value={desPorcentage.value}
              onChange={(e) => setPorcentage(+e.target.value)}
              checked={porcentage === desPorcentage.value}
              className="cursor-pointer"
            />

            <label htmlFor={desPorcentage.id} className="cursor-pointer">
              {desPorcentage.label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default DesPorcentageFrom;
