import React from "react";

interface CardProps {
  infoText?: string;
  items?: JSX.Element[];
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className="card">
      {props.infoText && (
        <em className="infoText">
          {props.infoText}
        </em>
      )}
      {props.items && props.items.map((item, idx) => (<div key={idx}>{item}</div>))}
    </div>
  );
};

export default Card;
