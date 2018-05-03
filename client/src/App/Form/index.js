import React, { Component } from "react";
import FormDisplay from "./FormDisplay";
import { connect } from "react-redux";
import { addItem } from "../../redux/items";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      inputs: {
        description: "",
        price: ""
      },
      items: []
    }
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      }
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.inputs);
    this.setState(this.initialState);
  }
  render() {
    const props = {
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      ...this.state
    }
    return (
      <FormDisplay {...props}></FormDisplay>
    )
  }
}

export default connect(null, { addItem })(Form);