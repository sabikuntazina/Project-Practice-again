import Cart from "./Cart";


const CartSection = ({carts}) => {
  // console.log(carts)
  return (
    <div>
      <h1>Your Cart</h1>
      <div className="grid grid-cols-1 space-y-7 my-5">
        {
          carts.map((item)=><Cart key={item.id} cart={item} ></Cart>)
        }
      </div>
    </div>
  );
};

export default CartSection;