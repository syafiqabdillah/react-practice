import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: null,
      items: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete(this);
  }

  handleInputChange(e) {
    const target = e.target;
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.newItem) {
      
    }
    this.setState((prev) => ({
      items: [...prev.items, prev.newItem],
    }));
    this.clearForm();
  }

  handleDelete(deletedItem) {
    const newList = this.state.items.filter(item => {
      return item != deletedItem;
    })
    this.setState(prev => ({
      items: newList
    }))
  }

  clearForm() {
    this.setState({ newItem: null });
    document.getElementById("form").reset();
  }

  render() {

    const list = this.state.items.map(item => {
      return <li>{item}
        <button onClick={this.handleDelete}>delete</button>
      </li>
    })

    return (
      <div className="container">
        <h1 className="title">To-Not-Do-List</h1>
        <div className="list">
          <ul>
           {list}
          </ul>
        </div>
        <form id="form" className="input" onSubmit={this.handleSubmit}>
          <input
            name="newItem"
            type="text"
            value={this.state.newItem}
            onChange={this.handleInputChange}
          />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}

export default App;
