import React, { useReducer } from "react";

const initialState = {
  showImage: false,
  showFullDescription: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_IMAGE":
      return {
        ...state,
        showImage: !state.showImage,
      };

    case "TOGGLE_DESCRIPTION":
      return {
        ...state,
        showFullDescription: !state.showFullDescription,
      };

    default:
      state;
  }
};

const Module = ({ data }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { showImage, showFullDescription } = state;

  const toggleImage = () => {
    dispatch({ type: "TOGGLE_IMAGE" });
  };
  const toggleDescription = () => {
    dispatch({ type: "TOGGLE_DESCRIPTION" });
  };

  // Main Logic setup with ternary operator
  let moduleImage = showImage ? data.image : "";
  let moduleDescription = showFullDescription
    ? data.desc
    : data.desc.substring(0, 90);

  return (
    <>
      <div className="border-2 p-6 rounded-md">
        <div>
          <img
            style={{
              height: "90px",
              width: "90px",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "1px 3px 10px rgba(0,0,0,0.175)",
              textIndent: "111px",
              cursor: "pointer",
            }}
            src={moduleImage}
            alt=""
          />
          <button
            onClick={toggleImage}
            className="bg-[#56a79a] text-white mt-3 mb-5 px-[6px] py-[1px] shadow-md rounded-md text-[12px] font-bold"
          >
            {showImage ? "Hide Image" : "Show Image"}
          </button>
        </div>
        <h3 className="text-2xl">{data.title}</h3>
        <p>{moduleDescription}</p>
        <button
          onClick={toggleDescription}
          className="bg-black text-white px-4 py-1 rounded-md mt-2"
        >
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      </div>
    </>
  );
};

export default Module;
