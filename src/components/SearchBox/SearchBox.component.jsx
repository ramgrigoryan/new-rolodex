import { Component } from "react";
import './SearchBox.css'

class SearchBox extends Component {
  render() {
    const { cb, placeholder, className } = this.props;
    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={cb}
      />
    );
  }
}
export default SearchBox;
