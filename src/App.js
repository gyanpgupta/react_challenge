import React, { Component } from "react";
// import "./App.css";
import { setData } from "./store/action";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickSvg: "",
    };
  }

  componentDidMount = () => {
    fetch("./api/mockFetch").then((res) => {
      this.props.dispatch(setData(res));
    });
  };

  handleSvg = (item) => {
    this.setState({ clickSvg: item });
  };

  render() {
    const svgsData = this.props.apiResponse;

    return (
      <div className="App">
        {svgsData &&
          svgsData.map((item, key) => {
            const colorCode = item.svg.props.children.props.fill;
            return (
              <div
                onMouseEnter={() => this.handleSvg(colorCode)}
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
