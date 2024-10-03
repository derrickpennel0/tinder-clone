import React from "react";
import SwipeButton from "./components/SwipeButton";
import { LiaUndoAltSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";

function SwipeButtons() {
  return (
    <div
      className="mt-4 w-full h-auto flex justify-evenly items-center"
      style={{ position: "absolute", bottom: 80 }}
    >
      {/* all swipe buttons   */}
      <SwipeButton icon={<LiaUndoAltSolid size={30} color="yellow" />} />
      <SwipeButton icon={<IoMdClose size={30} color="red" />} />
      <SwipeButton icon={<AiFillStar size={30} color="blue" />} />
      <SwipeButton icon={<AiFillHeart size={30} color="green" />} />
      <SwipeButton icon={<AiFillThunderbolt size={30} color="violet" />} />
    </div>
  );
}

export default SwipeButtons;
