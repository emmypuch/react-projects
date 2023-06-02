import React, { Component } from "react";
// import MuiThemeProvider from "material-ui/styles/ThemeProvider";
import { createTheme } from "@mui/material/styles";

import AppBar from "@mui/material/AppBar";
// import MuiTextField from "@mui/material/TextField";
// import RaisedButton from "@mui/material/RaisedButton";
export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values } = this.props;

    return (
      <createTheme>
        <React.Fragment>
          <div>hiiii</div>
          <AppBar title="Enter user details" />
        </React.Fragment>
      </createTheme>
    );
  }
}

export default FormUserDetails;
