import React from "react";
import "./Biodata.css";
import BiodataContainer from "./BiodataContainer";

class Biodata extends React.Component {
  constructor(props) {
    super(props);
    this.randomizePerson = this.randomizePerson.bind(this);
    this.state = {
      currentPerson: null,
      persons: [
        {
          fullname: "Craig Berry",
          age: 23,
          address: "(307) 325-9260 200 Columbia St Hanna, Wyoming(WY), 82327",
          src: "images/person1.jpg",
        },
        {
          fullname: "Lonnie Lamb",
          age: 43,
          address: "(251) 649-4744 1113 N Way Dr Semmes, Alabama(AL), 36575",
          src: "images/person2.jpg",
        },
        {
          fullname: "Hadwin Rose",
          age: 36,
          address:
            "(757) 868-7824 16 N Valasia Rd Poquoson, Virginia(VA), 23662",
          src: "images/person3.jpg",
        },
        {
          fullname: "Alison Pierce",
          age: 20,
          address:
            "(410) 943-4688 3526 Indian Grant Rd East New Market, Maryland(MD), 21631",
          src: "images/person4.jpg",
        },
        {
          fullname: "Vania Burrows",
          age: 32,
          address:
            "(574) 936-5266 10899 Olive Trl Plymouth, Indiana(IN), 46563",
          src: "images/person5.jpg",
        },
      ],
    };
  }

  getRandomPerson() {
    const newPerson = this.state.persons[
      Math.floor(Math.random() * this.state.persons.length)
    ];
    if (
      this.state.currentPerson &&
      newPerson.fullname === this.state.currentPerson.fullname
    ) {
      return this.getRandomPerson();
    } else {
      return newPerson;
    }
  }

  componentDidMount() {
    this.randomizePerson();
  }

  randomizePerson() {
    this.setState({
      currentPerson: this.getRandomPerson(),
    });
  }

  render() {
    let content;
    if (this.state.currentPerson) {
      content = (
        <div>
          <BiodataContainer
            src={this.state.currentPerson.src}
            fullname={this.state.currentPerson.fullname}
            age={this.state.currentPerson.age}
            address={this.state.currentPerson.address}
            randomizePerson={this.randomizePerson}
          />
        </div>
      );
    } else {
      content = null;
    }
    return <div className="container">{content}</div>;
  }
}

export default Biodata;
