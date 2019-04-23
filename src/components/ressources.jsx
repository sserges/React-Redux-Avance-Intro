import React, { Component } from "react";
import { connect } from "react-redux";

import { addRessources } from "../actions";

class Ressources extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <button
            type="button"
            onClick={() => this.props.addRessources()}
            className="btn btn-raised btn-primary"
          >
            Ajouter un nombre
          </button>
        </div>
        <div className="col">Entiers</div>
        <div className="col">Contiennent "1" </div>
        <div className="col"> Entiers premiers </div>
        <div className="col"> Entiers premiers contenants "1"</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ressources);
