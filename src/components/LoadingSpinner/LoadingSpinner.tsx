import React from "react";
import "./styles.scss";

type Props = {
  scale: number;
  color: string;
  parentStyles: {};
};

const LoadingSpinner = ({ scale, color, parentStyles }: Props) => {
  return (
    <div style={parentStyles}>
      <div className="lds-default" style={{ color, transform: `scale(${scale})` }}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
