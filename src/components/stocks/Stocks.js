import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Stocks extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
          stocks : [],
          errorMessage : ''
        }
        
    }

    componentDidMount() {
      let dataURL = `https://gist.githubusercontent.com/venkateshb007/fbc1fbc9a986175543a44a32d240a312/raw/64e78e9d4a73b3bf42613519f6e5851cf76fe513/stocks-280524.json`;
      axios.get(dataURL).then((response) => {
        this.setState({
          stocks: response.data,
        });
      }).catch((err) => {
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
              <div className="col">
                <p className="h3 text-primary">Stocks</p>
                <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, maiores laudantium. Minima officiis animi quas quaerat quibusdam perferendis atque quam eum, ullam a beatae officia repellendus qui saepe perspiciatis praesentium dicta? Voluptates sit aspernatur natus optio ullam atque omnis repellat!</p>
              </div>
            </div>
            <div className="row">
            <div className="col">
              {
                this.state.stocks.length > 0 ?
                  <React.Fragment>
                    <table className="table table-striped table-light table-hover text-center">
                      <thead className="bg-dark text-white">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Market</th>
                          <th>Industry</th>
                          <th>Symbol</th>
                          <th>Sector</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.stocks.map((stock) => {
                            return (
                              <tr key={stock.id}>
                                <td>{stock.id.substr(stock.id.length - 4)}</td>
                                <td>
                                  <Link to={`/stocks/${stock.id}`} className="text-primary font-weight-bold" >{stock.name}</Link>
                                  </td>
                                <td>
                                  {stock.market}</td>
                                <td>
                                  {stock.industry}
                                  </td>
                                <td>
                                  {stock.symbol}
                                  </td>
                                  <td>{stock.sector}</td>
                              </tr>
                            );
                          })
                        }
                      </tbody>
                    </table>
                  </React.Fragment> : null
              }
            </div>
          </div>
          </div>
        </React.Fragment>
      )
    }
}

export default Stocks;