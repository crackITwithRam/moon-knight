import React, { useState } from "react";
import "./App.scss";
import "./Banner.scss";
import { imageObj } from "./constants";
import GroceryItem from "./components/item";

const initItmes = [
  { id: 1, name: "Tomato", alt: "tomato", price: 110 },
  { id: 2, name: "Rice", alt: "rice", price: 40 },
  { id: 3, name: "Chicken", alt: "chicken", price: 180 },
  { id: 4, name: "Yogurt", alt: "yogurt", price: 35 },
];

//parent component
const App = () => {
  const updatedInitItems = initItmes.map((item) => {
    return { ...item, image: imageObj[item.alt] };
  });

  const [list, setList] = useState(updatedInitItems);
  const [edit, setEdit] = useState(false);

  const _onKeyPressHandler = (e, gId) => {
    list.forEach((item) => {
      if (item.id === gId) {
        item.name = e.target.value;
      }
    });

    e.key === "Enter" && setEdit(false);
  };

  const _handleRemove = () => {
    const filteredList = list.filter((value) => value.price <= 100);
    setList(filteredList);
  };

  const _handleRemoveItem = (gId) => {
    const filteredList = list.filter((value) => value.id !== gId);
    setList(filteredList);
  };

  const _onItemDobuleCLick = () => {
    setEdit(true);
  };

  return (
    <div className="App">
      <header>
        <div>
          <svg height="auto" width="auto">
            <polygon
              strokeMiterlimit="10"
              points="30 5, 20 200, 440 170, 440 55"
              style={{ fill: "none", stroke: "#000", strokeWidth: "5" }}
            />
            <polygon
              points="5 31, 5 185, 410 205, 430 10"
              style={{ opacity: "0.2", fill: "#000" }}
            />
            <polygon
              points="5 31, 5 180, 410 200, 430 10"
              style={{ opacity: "1", fill: "red" }}
            />
            <text fontFamily="Viga" fontSize="65">
              <tspan
                fill="#000"
                opacity="0.8"
                x="43"
                y="100"
                fontFamily="Viga"
                fontSize="45"
              >
                GROFFER
              </tspan>
              <tspan
                x="43"
                y="97"
                fontFamily="Viga"
                fontSize="45"
                opacity="1"
                fill="#fff"
              >
                GROFFER
              </tspan>
            </text>

            <text
              fontFamily="Josefin Sans"
              fontWeight="700"
              fontSize="20"
              fill="#fff"
            >
              <tspan fill="#000" x="65" y="127">
                S H O P&nbsp; &nbsp;N O W
              </tspan>
              <tspan x="65" y="125">
                S H O P&nbsp; &nbsp;N O W
              </tspan>
            </text>
            <polyline
              points="30 3, 20 200"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.5" }}
            />
          </svg>
        </div>

        <div className="button_flex-container">
          <button
            onClick={_handleRemove}
            className="btn"
            style={{ fontSize: "10px", height: "28px" }}
          >
            Remove <br /> Expensive
          </button>
          <button
            onClick={() => setList(updatedInitItems)}
            className="btn btn-green"
            style={{ fontSize: "10px", height: "28px" }}
          >
            <img
              alt="reload"
              className="icon"
              src="https://htmlacademy.ru/assets/icons/reload-6x-white.png"
            />
            Reload
          </button>
        </div>

        {list.map((grocery) => (
          <div
            key={`${grocery.name} ${grocery.price}`}
            style={{ padding: "10px" }}
          >
            <GroceryItem
              grocery={grocery}
              handleRemoveItem={_handleRemoveItem}
              mode={edit}
              onItemDblClick={_onItemDobuleCLick}
              onKeyPress={_onKeyPressHandler}
            />
          </div>
        ))}
      </header>
    </div>
  );
};

export default App;
