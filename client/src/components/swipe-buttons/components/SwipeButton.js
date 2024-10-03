import React from "react";

function SwipeButton({ icon }) {
  return (
    <div className="shadow-xl p-3 bg-whitesmoke rounded-full bg-slate-50">
      <span
        className={`p-3 flex justify-center items-center transition duration-500 hover:scale-125`}
      >
        {icon}
      </span>
    </div>
  );
}

export default SwipeButton;
