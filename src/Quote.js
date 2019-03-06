import React, { Component } from "react";

class Quote extends Component {
  render() {
    return (
      <div className="bg-light text-dark">
        <div className="row">
          <div className="col">
            <div className="p-5">
              <h2>${this.props.data.latestPrice}</h2>
              <p>
                <em>last updated {this.props.data.latestTime}</em>
              </p>
            </div>
          </div>
          <div className="col">
            <dl>
              <dt>Open</dt>
              <dd>${this.props.data.open}</dd>
              <dt>High</dt>
              <dd>${this.props.data.high}</dd>
              <dt>Low</dt>
              <dd>${this.props.data.low}</dd>
              <dt>52-Week High</dt>
              <dd>${this.props.data.week52High}</dd>
              <dt>52-Week Low</dt>
              <dd>${this.props.data.week52Low}</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
