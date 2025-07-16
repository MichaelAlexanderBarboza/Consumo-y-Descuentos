;
import DesPorcentageFrom from "./components/DesPercentageFrom";
import  MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

const App = () => {
  const { order, addItem, removeItem, porcentage, setPorcentage, placeOrder } = useOrder();
  return (
    <>
      <header className=" bg-amber-200 py-3">
        {" "}
        {/*contenedor del encabezado */}
        <h1 className="text-3xl text-center text-black font-black">
          Cuentas y Consumo{" "}
        </h1>
      </header>

      <main className="max-w-7xl mx-auto p-10 grid grid-cols-2 gap-3  ">
        {/* contenedor del main */}
        <div>
          {/* contenedor del menu */}
          <h2 className="text-2xl font-black">Menú</h2>
          <div className="space-y-2 mt-5">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id} // Use the item's id as the key for each MenuItem
                item={item} // Pass the item prop to the MenuItem component
                addItem={addItem} // Pass the addItem function to the MenuItem component
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center border border-amber-200 rounded-lg shadow-lg p-5">
          
          {/* contenedor del consumo */}
          <OrderContents
            order={order} // Pass the order state to OrderContents
            removeItem={removeItem} // Pass the removeItem function to the MenuItem component
          />
          <DesPorcentageFrom
            porcentage={porcentage} // Pass the porcentage state to DesPorcentageFrom
            setPorcentage={setPorcentage} // Pass the setporcentage function to DesporcentageFrom
          />
          <OrderTotals
            order={order} // Pass the order state to OrderTotals
            porcentage={porcentage} // Pass the porcentage state to OrderTotals
          placeOrder={placeOrder} // Pass the placeOrder function to OrderTotals
          />
        </div>
      </main>
    </>
  );
};

export default App;
