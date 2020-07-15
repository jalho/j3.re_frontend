import React from "react";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className="header">
      <svg
        className="container"
      >

        <text
          className="text"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
        >
            {props.text}
        </text>

      </svg>
    </div>
  );
};

export default Header;
