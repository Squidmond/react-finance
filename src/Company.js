import React, { Component } from "react";

class Company extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.data.companyName}</h1>
        <p>{this.props.data.description}</p>
        <dl>
          <dt>Industry</dt>
          <dd>{this.props.data.industry}</dd>
          <dt>Sector</dt>
          <dd>{this.props.data.sector}</dd>
          <dt>CEO</dt>
          <dd>{this.props.data.CEO}</dd>
          <dt>Exchange</dt>
          <dd>{this.props.data.exchange}</dd>
        </dl>
      </div>
    );
  }
}

export default Company;
