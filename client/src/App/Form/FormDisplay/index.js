import React from "react";
// import List from "../../List";

function FormDisplay(props) {
  const { handleChange, handleSubmit, inputs } = props;
  const { description, price } = inputs;
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input name="description" onChange={handleChange} value={description} type="text" placeholder="Enter Item" />
      <input name="price" onChange={handleChange} value={price} type="text" placeholder="Price" />
      <button className="submit">Add to List</button>
      {/* <List items={items}></List> */}
    </form>
  )
}

export default FormDisplay;