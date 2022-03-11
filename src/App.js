import React, { Component } from "react";
import "./App.css";
import { setData } from "./store/action";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickSvg: "",
      svgData: [],
    };
  }

  componentDidMount = () => {
    fetch("./api/mockFetch").then((res) => {
      this.props.dispatch(setData(res));
      this.setState({ svgData: this.props.apiResponse });
    });
  };

  handleSvg = (item) => {
    this.setState({ clickSvg: item });
  };
  handleRandom = (e, colorCode) => {
    e.preventDefault();
    this.state.svgData.images.sort((x) => {
      return (
        x.svg.props.children.props.fill === colorCode && Math.random() - 0.5
      );
    });
  };

  render() {
    const { svgData } = this.state;
    return (
      <div className="App">
        {
          svgData.images &&
          svgData.images.map((item, key) => {
            const colorCode = item.svg.props.children.props.fill;
            return (
              <div
                onMouseEnter={() => this.handleSvg(colorCode)}
                onMouseLeave={(e) => this.handleRandom(e, colorCode)}
                className="App-logo"
                key={key}
              >
                {!(this.state.clickSvg === colorCode) ? (
                  <span>{item.svg}</span>
                ) : (
                  <span className="fill-color">{colorCode}</span>
                )}
              </div>
            );
          })}
      </div>
    );
  }
}
const mapStateToProps = function (state) {
  return {
    apiResponse: state.apiResponse,
  };
};
export default connect(mapStateToProps)(App);
