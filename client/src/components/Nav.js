import React from "react";
import "../style/Nav.css";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.png";
import Login from "../components/Login";

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true,
    });
  }

  render() {
    return (
      <Navbar className="navbar sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            {" "}
            <img src={logo} alt="Logo" />
          </a>
          <form className="d-flex">
            <input
              className="form-control me-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-secondary" type="submit">
              Search
            </button>
          </form>

          {this.state.clicked ? (
            <Login />
          ) : (
            <button
              onClick={this.handleClick}
              type="submit"
              className="rounded signin-button"
            >
              Sign In
            </button>
          )}
        </div>
      </Navbar>
    );
  }
}

export default Nav;
