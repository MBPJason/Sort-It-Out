import React, { Component } from "react";
import Employee from "./Employee";
import seed from "../seed.json";

class EmployeeWebsite extends Component {
  state = {
    result: [],
    search: "",
    seed,
    nameCounter: 0,
  };

  componentDidMount() {
    this.setState({
      result: seed,
    });
  }

  nameSort = () => {
    if (this.state.nameCounter === 0) {
      this.handleSort("Alpha");
      this.setState({ nameCounter: 1 });
    } else {
      this.handleSort("Beta");
      this.setState({ nameCounter: 0 });
    }
  }

  handleSort = (method) => {
    let sortedArray;
    if (method === "Alpha") {
      sortedArray = seed.sort((a, b) => {
        let fa = a.name.first.toLowerCase(),
          fb = b.name.first.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

      this.setState({ result: sortedArray });
    } else if (method === "Beta") {
      sortedArray = seed.sort((a, b) => {
        let fa = a.name.first.toLowerCase(),
          fb = b.name.first.toLowerCase();

        if (fa > fb) {
          return -1;
        }
        if (fa < fb) {
          return 1;
        }
        return 0;
      });

      this.setState({ result: sortedArray });
    }
  };

  handleInputSearch = (event) => {};

  render() {
    return (
      <main className='container'>
        <section className='jumbotron jumbotron-fluid text-center'>
          <h2 className='display-4'>Simple Sorting Table</h2>
          <p className='lead'> Just a simple sorting table with seed data</p>
        </section>
        <div className='row'>
          <br />
          <br />
          <br />
          <section className='col align-content-center'>
            <table
              id='employees'
              className='table table-striped table-bordered table-md '
              cellSpacing='0'
              width='100%'
            >
              <thead>
                <tr>
                  <th scope='col'>Gender</th>
                  <th scope='col' onClick={this.nameSort} >Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Phone</th>
                </tr>
              </thead>
              <tbody>
                {this.state.result.map((person) => (
                  <Employee
                    id={person.id.value.slice(-4)}
                    key={person.id.value.slice(-4)}
                    fullname={`${person.name.first} ${person.name.last}`}
                    email={person.email}
                    gender={person.gender}
                    image={person.picture.medium}
                    phone={person.phone}
                  />
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    );
  }
}

export default EmployeeWebsite;
