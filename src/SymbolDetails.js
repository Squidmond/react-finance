import React, { Component } from "react";

class SymbolDetails extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    if (!this.state.loaded) {
      let endpoint = !this.props.showFullDetail
        ? "https://api.iextrading.com/1.0/stock/" +
          this.props.symbol.symbol +
          "/company"
        : "https://api.iextrading.com/1.0/stock/" +
          this.props.symbol.symbol +
          "/batch?types=quote,news,chart,company&range=1m&last=10";

      fetch(endpoint).then(response => {
        response.json().then(data => {
          if (!this.props.showFullDetail) {
            this.setState(state => {
              return { loaded: true, data: data };
            });
          } else {
            this.setState(state => {
              return {
                loaded: true,
                data: data.company,
                quote: data.quote,
                news: data.news,
                chart: data.chart
              };
            });
          }
        });
      });
    }
  }

  render() {
    return (
      <div className="m-1 p-4 bg-dark text-light">
        {!this.state.loaded ? (
          <progress />
        ) : (
          <div>
            <h1>{this.state.data.companyName}</h1>
            <p>{this.state.data.description}</p>
            <dl>
              <dt>Industry</dt>
              <dd>{this.state.data.industry}</dd>
              <dt>Sector</dt>
              <dd>{this.state.data.sector}</dd>
              <dt>CEO</dt>
              <dd>{this.state.data.CEO}</dd>
              <dt>Exchange</dt>
              <dd>{this.state.data.exchange}</dd>
            </dl>
            {this.state.news && this.state.news.length > 0 ? (
              <div>
                <h2>News</h2>
                {this.state.news.map(function(e, i) {
                  return (
                    <div key={i}>
                      <blockquote>
                        <img src={e.image} alt="file not found" />
                        <h3>
                          <a href={e.url}>{e.headline}</a>
                        </h3>
                        <p>{e.summary}</p>
                        <p>{e.related}</p>
                        <cite>
                          {e.source} @ {e.datetime}
                        </cite>
                      </blockquote>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        )}
        {this.props.showFullDetail ? (
          ""
        ) : (
          <a
            className="btn btn-block btn-primary"
            href={"/details/" + this.props.symbol.symbol}
          >
            {this.props.symbol.name}
          </a>
        )}
      </div>
    );
  }
}

export default SymbolDetails;
