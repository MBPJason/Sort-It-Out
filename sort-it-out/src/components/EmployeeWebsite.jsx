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
          <section className='col-lg-8 align-content-center'>
            <table
              id='employees'
              className='table table-striped table-bordered table-md '
              cellSpacing='0'
              width='100%'
            >
              <thead>
                <tr>
                  <th onClick={this.nameSort} >Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Phone</th>
                </tr>
              </thead>
              <tbody>
                {this.state.result.map((person) => (
                  <Employee
                    id={person.id}
                    key={person.id}
                    fullname={`${person.name.first} ${person.name.last}`}
                    email={person.email}
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
