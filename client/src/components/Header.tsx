import React from "react";

interface HeaderProps {
  text: string;
  scale?: number;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

  // SVG attributes
  const SVGNamespace = "http://www.w3.org/2000/svg"; // a good convention they say
  const v = {
    min_x: 0,
    min_y: 0,
    width: window.innerWidth / 3,
    height: window.innerHeight / 32,
    scale: props.scale ? props.scale : 1
  };
  const viewboxValuesString = `${v.min_x} ${v.min_y} ${v.width / v.scale} ${v.height / v.scale}`;

  /* Defined here instead of in a stylesheet because Sass doesn't support all of
  these attributes. These SVG <text> element's attributes will center the text. */
  const SVGTextCentering = {
    x: "50%",
    y: "50%",
    textAnchor: "middle",
    dominantBaseline: "middle"
  };

  return (
    <svg viewBox={viewboxValuesString} xmlns={SVGNamespace} className="header">

      {/* The below can be used to highlight SVG viewbox. */}
      {/* <rect width="100%" height="100%" fill="grey" /> */}

      <text {...SVGTextCentering}>
        {props.text}
      </text>
    </svg>
  );
};

export default Header;
