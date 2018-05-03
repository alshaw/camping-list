import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem, editItem } from "../../../redux/items";
import EditForm from "./EditForm";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  render() {
    let {
      description,
      price,
      _id,
      removeItem
    } = this.props;
    if (this.state.isEditing) {
      return (
        <div className="edit-form">
          <EditForm {...this.props} options={{ toggle: this.toggleEdit }} />
          <button className="close-button" onClick={this.toggleEdit}>Close</button>
        </div>
      );
    }
    return <div className="items-list">
        <div className="description">
          <h3>{description}</h3>
          <h4>${price}</h4>
        </div>
        <div className="buttons">
          <button className="edit-button" onClick={this.toggleEdit}>
            EDIT
          </button>
          <button className="delete-button" onClick={() => this.props.removeItem(_id)}>
            DELETE
          </button>
        </div>
      </div>;
  }
}

export default connect(null, { removeItem, editItem })(Item);

