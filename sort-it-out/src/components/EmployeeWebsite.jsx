import React, { Component } from "react";
import Employee from "./Employee";
import seed from "../seed.json";

class EmployeeWebsite extends Component {
  state = {
    result: {},
    search: "",
    seed,
  };

  handleSort = (method) => {
      
  };

  handleInputSearch = (event) => {};

  render() {
    return (
      <main className='container'>
        <div className='row'>
          <section className="col-lg-12">
            <table id='employees' className="table table-striped table-bordered table-md" cellSpacing="0" width="100%">
              <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
              </thead>
              {this.state.seed.map((person) => (
                <Employee
                  id={person.id}
                  key={person.id}
                  fullname={`${person.name.first} ${person.name.last}`}
                  email={person.email}
                  image={person.picture.medium}
                  phone={person.phone}
                />
              ))}
            </table>
          </section>
        </div>
      </main>
    );
  }
}

export default EmployeeWebsite;
