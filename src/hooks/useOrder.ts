import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";


const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [porcentage, setPorcentage] = useState(0); // State to manage the discount porcentage

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 } // Increment quantity
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, quantity: 1 }; // Create a new item with quantity 1
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id)); // Remove item by id
  };

  const placeOrder = () => {
    setOrder([]); // Clear the order after placing it
    setPorcentage(0); // Reset the discount porcentage
    alert("Orden guardada correctamente"); // Alert to confirm order placement
  };
  return {
    order,
    porcentage,
    setPorcentage, // Expose the setporcentage function to update the discount porcentage
    addItem,
    removeItem,
    placeOrder, // Function to place the order
  };
};

export default useOrder;
