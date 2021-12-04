import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import seed from "../seed.json";

export default function EmployeeWebsite() {
  const [data, setData] = useState(seed);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sort, setSort] = useState({
    method: "",
    array: [],
  });
  const [nameAsc, setNameAsc] = useState({
    which: "first",
    bool: false,
  });

  useEffect(() => {
    setData(seed);
    setSort({
      method: "",
      array: data,
    });
  }, []);

  // nameSort = () => {
  //   if (this.state.nameCounter === 0) {
  //     this.handleSort("Alpha");
  //     this.setState({ nameCounter: 1 });
  //   } else {
  //     this.handleSort("Beta");
  //     this.setState({ nameCounter: 0 });
  //   }
  // };

  // handleSort = (method) => {
  //   let sortedArray;
  //   if (method === "Alpha") {
  //     sortedArray = seed.sort((a, b) => {
  //       let fa = a.name.first.toLowerCase(),
  //         fb = b.name.first.toLowerCase();

  //       if (fa < fb) {
  //         return -1;
  //       }
  //       if (fa > fb) {
  //         return 1;
  //       }
  //       return 0;
  //     });

  //     this.setState({ result: sortedArray });
  //   } else if (method === "Beta") {
  //     sortedArray = seed.sort((a, b) => {
  //       let fa = a.name.first.toLowerCase(),
  //         fb = b.name.first.toLowerCase();

  //       if (fa > fb) {
  //         return -1;
  //       }
  //       if (fa < fb) {
  //         return 1;
  //       }
  //       return 0;
  //     });

  //     this.setState({ result: sortedArray });
  //   }
  // };

  // handleInputSearch = (event) => {};

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
                <th scope='col'>
                  <div className='dropdown'>
                    <button
                      type='button'
                      className='btn btn-secondary dropdown-toggle'
                      id='dropdownMenuGender'
                      data-toggle='dropdown'
                    >
                      Gender
                    </button>
                    <div className='dropdown-menu'>
                      <p className='dropdown-item'>Male</p>
                      <p className='dropdown-item'>Female</p>
                    </div>
                  </div>
                </th>
                <th scope='col'>
                  <div className='input-group'>
                    <div className='input-group-prepend'>
                      <div className='dropdown'>
                        <button
                          type='button'
                          className='btn btn-secondary dropdown-toggle'
                          id='dropdownMenuName'
                          data-toggle='dropdown'
                        >
                          Name
                        </button>
                        <div className='dropdown-menu'>
                          <p className='dropdown-item' onClick>
                            First Name
                          </p>
                          <p className='dropdown-item' onClick>
                            Last Name
                          </p>
                        </div>
                      </div>
                    </div>
                    <input type='text' className='form-control'></input>
                  </div>
                </th>
                <th scope='col'>Email</th>
                <th scope='col'>Phone</th>
              </tr>
            </thead>
            <tbody>
              {sort.array.map((person) => (
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
