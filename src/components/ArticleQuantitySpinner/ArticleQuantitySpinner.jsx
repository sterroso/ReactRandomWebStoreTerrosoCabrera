import React, { useState } from "react";

const ArticleQuantitySpinner = (props) => {
    const { minQuantity = 1, maxQuantity } = props;

    const [currentQuantity, setCurrentQuantity] = useState(minQuantity);

    const handleButtonClick = (amount = 1) => {
        const result = (currentQuantity + amount) < minQuantity || (currentQuantity + amount) > maxQuantity ? currentQuantity : currentQuantity + amount;

        setCurrentQuantity(result);
     }

  return (
    <div className="form-control w-full">
        <label className="label">
            <span className="label-text text-xs">Cantidad:</span>
        </label>

        <label className="input-group">
            <span className={`font-bold text-xl ${minQuantity === maxQuantity ? 'disabled' : ''}`} onClick={() => handleButtonClick(-1)}>-</span>
            <input type="text" className="input input-bordered text-center" readOnly value={currentQuantity} />
            <span className={`font-bold text-xl ${minQuantity === maxQuantity ? 'disabled' : ''}`} onClick={() => handleButtonClick()}>+</span>
        </label>
    </div>
  )
}

export default ArticleQuantitySpinner;