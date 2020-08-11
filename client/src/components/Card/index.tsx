import React from "react";

interface CardProps {
  infoText?: string;
  items?: string[];
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className="card">
      {props.infoText && (
        <em className="infoText">
          {props.infoText}
        </em>
      )}
      {props.items && props.items.map((item, idx) => <span key={idx}>{item}</span>)}
    </div>
  );
};

export default Card;
