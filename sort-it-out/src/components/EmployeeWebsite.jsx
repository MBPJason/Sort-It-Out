import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import DropdownInput from "./DropdownInput";
import seed from "../seed.json";

export default function EmployeeWebsite() {
  const [data, setData] = useState([]);
  const [names, setNames] = useState("");
  const [emails, setEmails] = useState("");
  const [phones, setPhones] = useState("");
  const [nameAsc, setNameAsc] = useState({
    which: "first",
    bool: false,
  });

  useEffect(() => {
    setData(seed);
  }, []);

  // Name sorting by string
  useEffect(() => {
    let namesSorted = seed.filter(
      ({ name }) =>
        name.first.toLocaleLowerCase().includes(names.toLocaleLowerCase()) ||
        name.last.toLocaleLowerCase().includes(names.toLocaleLowerCase())
    );

    names.trim().length === 0 ? setData(seed) : setData(namesSorted);
  }, [names]);

  // Email sorting by string
  useEffect(() => {
    let emailsSorted = seed.filter(
      ({ email }) =>
        email.toLocaleLowerCase().includes(emails.toLocaleLowerCase())
    );

    emails.trim().length === 0 ? setData(seed) : setData(emailsSorted);
  }, [emails]);

  // Phone sorting by string
  useEffect(() => {
    const reg = /[^0-9]/g
    
    let phonesSorted = seed.filter(
      ({ phone }) =>
        phone.split(reg).join('').includes(phones)
    );
      
    phones.trim().length === 0 ? setData(seed) : setData(phonesSorted);
  }, [phones]);



  // State input managers
  const handleName = (e) => {
    const { value } = e.target;
    setNames(value);
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmails(value);
  };

  const handlePhone = (e) => {
    const { value } = e.target;
    setPhones(value);
  };


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
                  <DropdownInput
                    title="Name"
                    value={names}
                    onChange={handleName}
                    option1="First Name"
                    option2="Last Name"
                  />
                </th>
                <th scope='col'>
                  <DropdownInput
                    title="Email"
                    value={emails}
                    onChange={handleEmail}
                    option1="Asc"
                    option2="Des"
                  />
                </th>
                <th scope='col'>
                <DropdownInput
                    title="Phone"
                    value={phones}
                    onChange={handlePhone}
                    option1="Asc"
                    option2="Des"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((person) => (
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
