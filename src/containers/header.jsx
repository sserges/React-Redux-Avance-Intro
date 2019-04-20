import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class Header extends Component {
  onClickAuthentification = () => {
    this.props.setAuthentification(!this.props.isLoggedIn);
  };

  renderAuthentificationLabel = () => {
    if (this.props.isLoggedIn) {
      return "Déconnexion";
    } else {
      return "Connexion";
    }
  };

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
            <a
              className="nav-link"
              href="#"
              onClick={this.onClickAuthentification}
            >
              {this.renderAuthentificationLabel()}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.authentification.isLoggedIn
  };
};
export default connect(
  mapStateToProps,
  actions
)(Header);
