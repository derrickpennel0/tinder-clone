import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import API_SERVER from "../../config/config";
import axios from "axios";

function TinderCards() {
  const [people, setPeople] = useState([]);
  const [direction, setLastDirection] = useState("");

  // on page load
  useEffect(() => {
    axios.get(API_SERVER + "/tinder/cards").then((response) => {
      console.log(response);
      if (response.data.length > 0) {
        setPeople(response.data);
      }
    });
  }, []);

  // on swipe function
  const swiped = (direction, nameToDelete) => {
    console.log(`removing: ${nameToDelete}`);
    setLastDirection(direction);
  };

  // on card left screen
  const outOfFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  return (
    <div className="w-full ">
      <div className="w-[65%] flex justify-center mt-[2%]">
        {people?.map((i) => (
          <TinderCard
            className="swipe shadow-lg"
            style={{ position: "absolute" }}
            key={i._id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, i.name)}
            onCardLeftScreen={() => outOfFrame(i.name)}
          >
            <div
              key={i._id}
              className="p-[10%]"
              style={{
                backgroundImage: `url(${i.imgUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                width: "550px",
                height: "55vh",
                maxWidth: "40vw",
                position: "absolute",
              }}
            >
              <h3
                key={i._id}
                className=""
                style={{
                  position: "absolute",
                  bottom: 0,
                  fontWeight: "bold",
                  fontFamily: "Verdana, Arial, Helvetica, sans-serif",
                  color: i.flag === "0" ? "#FF4D6D" : "white",
                  margin: "8px",
                  background: i.flag === "0" ? "white" : "#FF4D6D",
                  padding: "2px 5px",
                  borderRadius: "10px",
                }}
              >
                {" "}
                {i.name}
              </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
