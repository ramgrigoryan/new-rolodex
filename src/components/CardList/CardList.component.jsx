import { Component } from "react";
import Card from "../Card/Card.component";
import './card-list.css'

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card monster={monster}/>
        ))}
      </div>
    );
  }
}

export default CardList;
