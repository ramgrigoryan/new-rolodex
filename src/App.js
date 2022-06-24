import { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState(
          () => {
            return {
              monsters: users,
            };
          },
          () => {
            console.log(this.state);
          }
        );
      });
    console.log("CDM");
  }

  onSearchChange = (event) => {
    let searchField = event.target.value.trim().toLowerCase();
    this.setState(() => {
      return {
        searchField,
      };
    });
  };

  render() {
    console.log("render");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredArray = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <input
          className="search-input"
          type="search"
          placeholder="Monster name"
          onChange={onSearchChange}
        />
       <CardList monsters={filteredArray}/>
      </div>
    );
  }
}
export default App;
