import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

import { toggleNavbar } from "../../state/actionCreators";
import { Action } from "../../types/state";

// import Header from "../../components/Header";

const Sandbox: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>

      {/* <Header text="Sandbox" /> */}

      <p>
        {"Miscellanious demos here. "}
      </p>

      <div style={{ padding: "inherit", backgroundColor: "rgb(1, 2, 3, 0.1)", borderRadius: "0.5em"}}>
          <header>Redux demo:</header>
          <Button
            variant="primary"
            onClick={(): Action => dispatch(toggleNavbar())}
          >
            Toggle navigation bar
          </Button>
          <br />
          <i>
            {"Demonstrates dynamic UI using Redux."}
          </i>
      </div>

    </>
  );
};

export default Sandbox;
