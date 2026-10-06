import Cart from "./Cart";

const CartSection = ({ carts, handleDeleteCart,setCarts }) => {
  // console.log(carts)
  const calculateTotal=carts.reduce((sum,item)=>sum+item.price,0)


  return (
    <div className="space-y-5 mb-5">
      <h1 className="lg:text-4xl">Your Cart</h1>
      {carts.length === 0 ? 
        <div className="w-full h-100 border-2 border-gray-200 shadow-2xl flex justify-center items-center">
          <h1 className=" lg:text-4xl font-bold">Your card is Empty</h1>
        </div>
       : 
        <div className="grid grid-cols-1 space-y-7 my-5">
          {carts.map((item) => (
            <Cart
              key={item.id}
              cart={item}
              handleDeleteCart={handleDeleteCart}
            ></Cart>
          ))}
          <div className="btn w-full bg-black text-white text-xl font-bold flex justify-between items-center"><div>Total</div> <div>{calculateTotal} $</div></div>
        </div>
      }
        
       <button onClick={()=>setCarts([])} className="btn w-full bg-red-500 text-white text-xl font-bold">Check Out</button>
    </div>
  );
};

export default CartSection;