import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../../redux/items";
import Item from "./Item";

class List extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const { data, loading, errMsg } = this.props;
    const itemComponents = data.map((item, i) => {
      return <Item key={i} {...item}></Item>
    })
    if (loading) {
      return (
        <div className="loading">...Loading
        </div>
      )
    } else if (errMsg) {
        return (
          <div>{errMsg}</div>
        )
    } else {
        return (
          <div className="list">
            {itemComponents}
          </div>
        )
    }
  }
}

const mapStateToProps = state => {
  return state.items;
};

export default connect(mapStateToProps, { getItems })(List);