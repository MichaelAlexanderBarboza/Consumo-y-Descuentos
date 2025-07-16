import type { MenuItem } from "../types";

type MenuItemProps = {// Define the properties for the MenuItem component
  item: MenuItem; // The item prop should be of type MenuItem
  addItem: (item:MenuItem)=> void; // Function to add item to the order
};

const MenuItem = ({item, addItem}:MenuItemProps) => {
  return (
    <button className="border-1  border-amber-200 w-full p-1 flex 
    justify-between hover:bg-amber-100 transition-colors "
    onClick={() => addItem(item)}> {/* Button to add item to order */}
    <p>{item.name}</p>
    <p className='font-black'>${item.price}</p>
    </button>
  )
}

export default MenuItem