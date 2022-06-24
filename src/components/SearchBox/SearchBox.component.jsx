import { Component } from "react";

class SearchBox extends Component {
  render() {
    const {cb} = this.props;
    return (
      <input
        className="search-input"
        type="search"
        placeholder="Monster name"
        onChange={cb}
      />
    );
  }
}
export default SearchBox;