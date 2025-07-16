import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  porcentage: number; // Optional porcentage for discounts
  placeOrder: () => void; // Function to place the order
};

const OrderTotals = ({ order, porcentage, placeOrder }: OrderTotalsProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );

  const discountAmount = useMemo(() => subTotalAmount * porcentage, [ porcentage, order]);
const totalAmount = useMemo(() => subTotalAmount - discountAmount, [ porcentage, order]);



  return (
    <>
      <div className="w-full m-10   space-y-3 ">
        <h2 className=" text-2xl font-bold">Totales y Descuentos</h2>

        <p>
          SubTotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Descuentos {""}
          <span className="font-bold">{formatCurrency(discountAmount)}</span>
        </p>
        <p>
          Total a pagar: {""}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button className="bg-amber-200 w-full p-2 font-bold rounded-lg hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed  "
       disabled={totalAmount === 0}
       onClick={placeOrder}
       >
      
      
        Guardar Orden 
      </button>
    </>
  );
};

export default OrderTotals;
