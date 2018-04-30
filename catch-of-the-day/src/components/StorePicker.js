import React, { Component, Fragment } from "react";
import { getFunName } from "../helpers";

export class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = event => {
    event.preventDefault();
    // wtf why
    this.props.history.push(`/store/${this.myInput.value.value}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          ref={this.myInput}
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Vist Store</button>
      </form>
    );
  }
}
