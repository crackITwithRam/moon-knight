import React from "react";
import "./item.scss";

const Item = ({
  grocery,
  handleRemoveItem,
  mode,
  onItemDblClick,
  onKeyPress,
}) => {
  return (
    <div className="banner">
      <div className="shopping-image">
        <img src={grocery.image} alt={grocery.name} />
      </div>
      <div className="flex-container">
        {mode ? (
          <div className="text">
            <input
              type="text"
              onKeyPress={(e) => onKeyPress(e, grocery.id)}
              defaultValue={grocery.name}
            />
            <input type="text" defaultValue={grocery.price} width="50%" />
          </div>
        ) : (
          <div
            className="text"
            onDoubleClick={onItemDblClick}
          >{`${grocery.name} : ${grocery.price}`}</div>
        )}

        <button
          className="btn"
          style={{ width: "100px" }}
          onClick={() => handleRemoveItem(grocery.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Item;
