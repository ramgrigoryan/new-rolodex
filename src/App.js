import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";

const App = () => {
  const [searchField, searchFieldSetter] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const filteredArray = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredArray);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    let searchFieldString = event.target.value.trim().toLowerCase();
    searchFieldSetter(searchFieldString);
  };
  return (
    <div>
      <h1>Monster Rolodex</h1>
      <SearchBox
        cb={onSearchChange}
        placeholder="search monstr"
        className="SearchBox"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;
