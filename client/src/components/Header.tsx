import React from "react";

interface HeaderProps {
  text: string;
}

/**
 * Header is an SVG element for possible later SVG animation purposes.
 */
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

  return (
    <div className="header">

      <svg viewBox={"0 0 140 20"} xmlns={"http://www.w3.org/2000/svg"}>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          {props.text}
        </text>
      </svg>

    </div>
  );
};

export default Header;
