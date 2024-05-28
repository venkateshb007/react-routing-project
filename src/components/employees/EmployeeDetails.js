import React from "react";
import axios from "axios";
import { withRouter } from "../../utils/withRouter";
import { Link } from "react-router-dom";
class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEmployee: {},
      errorMessage: "",
    };
  }

  componentDidMount() {
    let employeeId = this.props.router.params.id;

    let dataURL = `https://gist.githubusercontent.com/venkateshb007/bed214f10906dc5c1f49aab3a2db1d3d/raw/f666f780b2fd4cbea79644dfa0c00953459ed532/employees-280524.json`;
    axios
      .get(dataURL)
      .then((response) => {
        let employees = response.data;
        let selectedEmployee = employees.find((employee) => {
          return employee.login.uuid === employeeId;
        });
        this.setState({
          selectedEmployee: selectedEmployee,
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
            <p className="h3 text-primary">Employee Details</p>
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
              {Object.keys(this.state.selectedEmployee).length !== 0 ? (
                <React.Fragment>
                  <div className="card">
                    <div className="card-header bg-primary text-white">
                      <p className="h4">
                      {this.state.selectedEmployee.name.title}{" "}
                        {this.state.selectedEmployee.name.first}{" "}
                        {this.state.selectedEmployee.name.last}
                      </p>
                    </div>
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={this.state.selectedEmployee.picture.large} alt="" className="img-fluid img-thumbnail d-block m-auto " />
                        </div>
                        <div className="col-md-8">
                          <ul className="list-group">
                            <li className="list-group-item list-group-item-dark ">
                                Age : {this.state.selectedEmployee.dob.age} Yrs.
                            </li>
                            <li className="list-group-item list-group-item-dark">
                                Email : {this.state.selectedEmployee.email}
                            </li>
                            <li className="list-group-item list-group-item-dark">
                                City : {this.state.selectedEmployee.location.city }
                            </li>
                            <li className="list-group-item list-group-item-dark">
                                State : {this.state.selectedEmployee.location.state }
                            </li>
                            <li className="list-group-item list-group-item-dark">
                                Phone : {this.state.selectedEmployee.phone }
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                   <div className="card-footer">
                   <Link to="/employees" className="btn btn-sm btn-primary">Back</Link>
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

export default withRouter(EmployeeDetails);
