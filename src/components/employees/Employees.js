import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Employees extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      errorMessage: '',
    };
  }

  componentDidMount() {
    let dataURL = `https://gist.githubusercontent.com/venkateshb007/bed214f10906dc5c1f49aab3a2db1d3d/raw/f666f780b2fd4cbea79644dfa0c00953459ed532/employees-280524.json`;
    axios.get(dataURL).then((response) => {
      this.setState({
        employees: response.data,
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
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <p className="h3 text-primary">Employees</p>
              <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae, ipsum, modi quod saepe blanditiis, amet consequuntur illo ducimus similique dolorum in neque facilis. Quibusdam doloremque commodi quaerat expedita dolorum?</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {
                this.state.employees.length > 0 ?
                  <React.Fragment>
                    <table className="table table-striped table-light table-hover text-center">
                      <thead className="bg-dark text-white">
                        <tr>
                          <th>Emp ID</th>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Age</th>
                          <th>Email</th>
                          <th>Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.employees.map((employee) => {
                            return (
                              <tr key={employee.login.uuid}>
                                <td className="font-weight-bold">{employee.login.uuid.substr(employee.login.uuid.length - 4)}</td>
                                <td><img src={employee.picture.large} width="50" height="50" alt="" /></td>
                                <td><Link to={`/employees/${employee.login.uuid}`} className="text-primary font-weight-bold">{employee.name.first} {employee.name.last}</Link></td>
                                <td className="font-weight-bold">{employee.dob.age} Yrs.</td>
                                <td className="font-weight-bold">{employee.email}</td>
                                <td className="font-weight-bold">{employee.location.city}</td>
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
    );
  }
}

export default Employees;
