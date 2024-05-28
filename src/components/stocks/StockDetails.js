import React from "react";
import axios from "axios";
import { withRouter } from "../../utils/withRouter";
import { Link } from "react-router-dom";


class StockDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStock : {},
      errorMessage: "",
    };
  }

  componentDidMount() {
    let stockId = this.props.router.params.id;
    let dataURL = `https://gist.githubusercontent.com/venkateshb007/fbc1fbc9a986175543a44a32d240a312/raw/64e78e9d4a73b3bf42613519f6e5851cf76fe513/stocks-280524.json`;
    axios
      .get(dataURL)
      .then((response) => {
        let stocks = response.data;
        let selectedStock = stocks.find((stock) => {
          return stock.id === stockId;
        });

        this.setState({
            selectedStock: selectedStock,
        });
      })
      .catch((err) => {
        this.setState({
          errorMessage: err,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <p className="h3 text-primary">Stock Details</p>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, eius. Perferendis magnam vel delectus mollitia. Quis
              expedita ratione enim accusantium tempore quisquam excepturi
              perspiciatis cumque. Dolores facilis iusto commodi, repudiandae
              quasi odit corrupti, necessitatibus totam harum et autem placeat
              voluptates!
            </p>
          </div>
          <div className="row mt-3">
            <div className="col">
              {Object.keys(this.state.selectedStock).length !== 0 ? (
                <React.Fragment>
                  <div className="card">
                    <div className="card-header bg-primary text-white">
                      <p className="h4">
                      {this.state.selectedStock.name}
                      </p>
                    </div>
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col">
                          <ul className="list-group">
                          <li className="list-group-item list-group-item-dark ">
                                Stock ID : {this.state.selectedStock.id}
                            </li>
                            <li className="list-group-item list-group-item-dark ">
                                Market : {this.state.selectedStock.market}
                            </li>
                            <li className="list-group-item list-group-item-dark">
                                Industry : {this.state.selectedStock.industry}
                            </li>
                            <li className="list-group-item list-group-item-dark">
                                Symbol : {this.state.selectedStock.symbol}
                            </li>
                            <li className="list-group-item list-group-item-dark">
                                Sector : {this.state.selectedStock.sector}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                   <div className="card-footer">
                   <Link to="/stocks" className="btn btn-sm btn-primary">Back</Link>
                   </div>
                  </div>
                </React.Fragment>
              ) : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(StockDetails);
