

const Cart = ({cart}) => {
  // console.log(cart)
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
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>

  );
};

export default Cart;