import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem, editItem } from "../../../../redux/items.js";

class EditForm extends Component {
  constructor(props) {
    super(props);
    const { description, price } = props;
    this.state = {
      inputs: {
        description: description || "",
        price: price || ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
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
    const { _id, addItem, editItem, clear, add } = this.props;
    if (add) {
      addItem(this.state.inputs)
    } else {
      editItem(this.state.inputs, _id)
    }
    if (clear) {
      this.clearInputs();
    }
    // editItem(index, this.state.inputs);
  }

  clearInputs() {
    this.setState({
      inputs: {
        description: "",
        price: ""
      }
    })
  }


  render() {
    const { description, price } = this.state.inputs;
    return (
      <form className="edit-form" onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          name="description"
          value={description}
          type="text"
          placeholder="Enter Description"
        />
        <input 
          onChange={this.handleChange}
          name="price"
          value={price}
          type="text"
          placeholder="Enter price"
        />
        <button className="save-button">Save</button>
      </form>
    )
  }
}

export default connect(null, { addItem, editItem }) (EditForm);