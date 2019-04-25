import React, { Component } from "react";
import { connect } from "react-redux";

import { addRessource, getSpecialRessource } from "../actions";
import {
  getIntegerList,
  getContainsOneList,
  getPrimeNumberList,
  getSpecialNumberList
} from "../selectors";

class Ressources extends Component {
  componentWillMount() {
    this.props.getSpecialRessource();
  }
  renderRessource = ressources => {
    return ressources.map(ressource => <li key={ressource}>{ressource}</li>);
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <button
            type="button"
            onClick={() => this.props.addRessource()}
            className="btn btn-raised btn-primary"
          >
            Ajouter un nombre
          </button>
        </div>
        <div className="col">
          Entiers
          <ul>{this.renderRessource(this.props.intergerRessources)}</ul>
        </div>
        <div className="col">
          Contiennent "1"
          <ul>{this.renderRessource(this.props.containsOneRessources)}</ul>
        </div>
        <div className="col">
          Entiers premiers
          <ul>{this.renderRessource(this.props.primeRessources)}</ul>
        </div>
        <div className="col">
          Entiers premiers contenants "1"
          <ul>{this.renderRessource(this.props.specialRessources)}</ul>
        </div>
        {this.props.message}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    intergerRessources: getIntegerList(state),
    containsOneRessources: getContainsOneList(state),
    primeRessources: getPrimeNumberList(state),
    specialRessources: getSpecialNumberList(state),
    message: state.ressource.message
  };
};

const mapDispatchToProps = {
  addRessource,
  getSpecialRessource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ressources);
