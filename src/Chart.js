import React, { Component } from "react";

class Chart extends Component {
  componentDidMount() {
    console.log("mounting");
    (function() {
      console.log("inside of callback");
      window.drawChart();
    })();
  }

  render() {
    if (this.props.data && this.props.data.length > 0) {
      window.chartData = this.props.data.map(function(e) {
        return [e.label, e.low, e.open, e.close, e.high];
      });
    }
    return (
      <div>
        <div
          id="myChart"
          className="m-auto"
          style={{ width: "80%", height: "500px" }}
        />
      </div>
    );
  }
}

export default Chart;
