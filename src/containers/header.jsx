import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs bg-primary">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ressources
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Connexion
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  actions
)(Header);