

const Cart = ({cart , handleDeleteCart}) => { 
  return (
   
    <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={cart.image}
      alt="cart"  className="w-30 h-30"
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{cart.title}</h2>
    <p>{cart.description}</p>
    <div className="card-actions justify-end items-center">
      <h1 className="lg:text-2xl font-bold lg:gap-5">{cart.price}/Per Month</h1>
      <button onClick={()=>handleDeleteCart(cart)} className="btn btn-error text-white ">X</button>
    </div>
  </div>

</div>

  );
};

export default Cart;