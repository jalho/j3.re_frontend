import React from "react";

interface HeaderProps {
  text: string;
  ratio?: number; // TODO: Use this if it's useful or remove it from everywhere!
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

  // SVG attributes
  const SVGNamespace = "http://www.w3.org/2000/svg"; // a good convention they say
  
  // TODO: Consider using `props.ratio` here to make responsive layout consistent.
  const v = {
    min_x: 0,
    min_y: 0,

    // dimensions of the SVG viewbox TODO: Make responsive!
    width: window.innerWidth,
    height: window.innerHeight / 8,

    SVGScalar: 1.7 // used to scale the whole graphic up or down
  };
  const viewboxValuesString = `${v.min_x} ${v.min_y} ${v.width / v.SVGScalar} ${v.height / v.SVGScalar}`;

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
