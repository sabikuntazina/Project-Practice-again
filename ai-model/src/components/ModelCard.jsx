import { useState } from "react";

const ModelCard = ({ model ,handleCarts}) => {
    const [isSubscribe, setSubscribe]=useState(false);
    // console.log(model)
    const handleFunctions=(model)=>{
      
      setSubscribe(true)
      handleCarts(model)
    }
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="w-full h-52 p-4 bg-zinc-400">
          <img
            src={model.image}
            alt="model"
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{model.title} hkjh</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleFunctions(model)} className="btn w-full bg-red-500 text-white font-bold rounded-2xl">
             {isSubscribe ? "Subscribed" : "Subscribe Now "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
