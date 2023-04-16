import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SIZE } from "../pages/Main";

const CircleBox = styled.div`
  .circle {
    width: 100px;
    height: 100px;
    background: #4bc475;
    border-radius: 50%;
    position: relative;
  }

  .name {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    color: #ffffff;
  }
`;

const Avatar = ({
  id = 0,
  imageUrl = "",
  name = "",
  sizeType = SIZE.small,
  isOther = false,
  numbers = 0,
}) => {
  const [initial, setInitial] = useState("");

  const getFirstLetters = (word) => {
    const regex = /\b(\w)/g;
    return (word.match(regex) || []).join("");
  };

  useEffect(() => {
    if (!imageUrl) {
      setInitial(getFirstLetters(name));
    }
  }, []);

  const renderCircle = () => {
    if (imageUrl) {
      return <img src={imageUrl} alt="Avatar" className="circle" />;
    } else {
      return (
        <div className="circle">
          <span className="name">{!isOther ? initial : numbers}</span>
        </div>
      );
    }
  };

  return <CircleBox id={`key-` + id}>{renderCircle()}</CircleBox>;
};

export default Avatar;
