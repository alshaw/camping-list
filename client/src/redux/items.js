import axios from "axios";
const url = "api/items/";

export function getItems() {
  return dispatch => {
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: "GET_ITEMS",
          items: response.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function addItem(newItem) {
  return dispatch => {
    axios
      .post(url, newItem)
      .then(response => {
        console.log(response);
        let { data } = response;
        dispatch({
          type: "ADD_ITEM",
          data
        });
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function editItem(editedItem, id) {
  return dispatch => {
    console.log(editedItem);
    axios
      .put(url + id, editedItem)
      .then(response => {
        console.log(response);
        dispatch({
          type: "EDIT_ITEM",
          editedItem: response.data,
          id
        });
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function removeItem(id) {
  return dispatch => {
    axios
      .delete(url + id, id)
      .then(response => {
        dispatch({
          type: "REMOVE_ITEM",
          id
        });
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export default function itemsReducer(
  prevState = { data: [], loading: true },
  action
) {
  switch (action.type) {
    case "GET_ITEMS":
      return {
        data: action.items,
        loading: false
      };

    case "ADD_ITEM":
      return {
        data: [...prevState.data, action.data],
        loading: false
      };

    case "EDIT_ITEM":
      return {
        data: prevState.data.map(item => {
          if (item._id === action.id) {
            return action.editedItem;
          } else {
            return item;
          }
        }),
        loading: false
      };

    case "REMOVE_ITEM":
      return {
        data: prevState.data.filter(item => {
          return item._id !== action.id;
        }),
        loading: false
      };

    default:
      return prevState;
  }
}
