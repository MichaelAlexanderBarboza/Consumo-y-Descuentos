import { formatCurrency } from "../helpers";
import type { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[]; // The order prop should be an array of OrderItem
  removeItem: (id:MenuItem['id']) => void; // Function to remove an item from the order
};

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div className="w-full h-full  justify-between ">
      <h2 className="font-black text-2xl">Consumo</h2>
      <div className="space-y-3 my-5">
        {order.length === 0 ? (
          <p className="text-center">"No hay consumo" </p>
        ) : (
          order.map((item) => (
            <div className="  flex justify-between items-center border-t border-amber-200 last-of-type:border-b "
            key={item.id}>
           <div>
               <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad:{item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
           </div>
              <button 
              onClick={() => removeItem(item.id)} // Call removeItem with the item to be removed
               className="bg-red-500 text-white  h-8 w-8 font-black rounded-full">
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderContents;
