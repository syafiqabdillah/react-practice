import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      items: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newItem.length > 0) {
      this.setState((prev) => ({
        items: [...prev.items, prev.newItem],
      }));
      this.clearForm();
    }
  }

  handleDelete(deletedItem) {
    const newList = this.state.items.filter((item) => {
      return item !== deletedItem;
    });
    this.setState((prev) => ({
      items: newList,
    }));
  }

  clearForm() {
    this.setState({ newItem: "" });
    document.getElementById("form").reset();
  }

  render() {
    console.log(this.items)
    const list = this.state.items.map((item) => {
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

export default App;
