import "./styles/Todo.css"
import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../redux/ToNotDoList/tonotdolist.actions";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    this.setState({
      newItem: target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newItem.length > 0) {
      this.clearForm();
      this.props.addItem(this.state.newItem);
    }
  }

  handleDelete(deletedItem) {
    this.props.removeItem(deletedItem);
  }

  clearForm() {
    this.setState({ newItem: "" });
    document.getElementById("form").reset();
  }

  render() {
    const list = this.props.tonotdolist.map((item) => {
      return (
        <li key={item}>
          {item}
          <button onClick={(e) => this.handleDelete(item, e)}>x</button>
        </li>
      );
    });

    return (
      <div className="container">
        <div className="card">
          <h2 className="title">To-Not-Do-List</h2>
          <div className="list">
            <ul>{list}</ul>
          </div>

          <form id="form" className="inputs" onSubmit={this.handleSubmit}>
            <input
              name="newItem"
              type="text"
              value={this.state.newItem}
              onChange={this.handleInputChange}
            />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tonotdolist: state.tonotdolist.toNotDoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (payload) => dispatch(addItem(payload)),
    removeItem: (payload) => dispatch(removeItem(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
