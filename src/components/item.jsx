import React from "react";
import "./item.scss";

const Item = ({
  grocery,
  handleRemoveItem,
  onItemDblClick,
  onEnterKeyPress,
}) => {
  return (
    <div className="banner">
      <div className="shopping-image">
        <img src={grocery.image} alt={grocery.name} />
      </div>
      <div className="flex-container">
        {grocery.editMode ? (
          <div className="text">
            <input
              type="text"
              onKeyPress={(e) => onEnterKeyPress(e,grocery.id)}
              defaultValue={grocery.name}
              name="name"
            />
            <input type="text" defaultValue={grocery.price} name="price" onKeyPress={(e) => onEnterKeyPress(e,grocery.id)} width="50%" />
          </div>
        ) : (
          <div
            className="text"
            onDoubleClick={()=>onItemDblClick(grocery.id)}
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
