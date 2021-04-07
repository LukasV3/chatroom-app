import React from "react";
import "./styles.scss";

type Props = {
  scale?: number;
  color?: string;
  parentStyles?: {};
};

const LoadingSpinner = ({ scale, color, parentStyles }: Props) => {
  return (
    <div style={parentStyles}>
      <div className="lds-default" style={{ transform: `scale(${scale})` }}>
        <div style={{ background: `${color}` }}></div>
        <div style={{ background: `${color}` }}></div>
        <div style={{ background: `${color}` }}></div>
        <div style={{ background: `${color}` }}></div>
        <div style={{ background: `${color}` }}></div>
        <div style={{ background: `${color}` }}></div>
        <div style={{ background: `${color}` }}></div>
        <div style={{ background: `${color}` }}></div>
        <div style={{ background: `${color}` }}></div>
        <div style={{ background: `${color}` }}></div>
        <div style={{ background: `${color}` }}></div>
        <div style={{ background: `${color}` }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
