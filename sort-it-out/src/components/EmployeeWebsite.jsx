import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import DropdownInput from "./DropdownInput";
import seed from "../seed.json";

export default function EmployeeWebsite() {
  const [data, setData] = useState([]);
  const [trueArr, setTrueArr] = useState([]);
  const [names, setNames] = useState("");
  const [emails, setEmails] = useState("");
  const [phones, setPhones] = useState("");
  const [nameAsc, setNameAsc] = useState({
    which: "",
    bool: false,
  });

  useEffect(() => {
    setData(seed);
    setTrueArr(seed);
  }, []);

  useEffect(() => {
    const reg = /[^0-9]/g;

    let arrSorted = trueArr.filter(
      ({ name, phone, email }) =>
        (name.first.toLocaleLowerCase().includes(names.toLocaleLowerCase()) ||
          name.last.toLocaleLowerCase().includes(names.toLocaleLowerCase())) &&
        email.toLocaleLowerCase().includes(emails.toLocaleLowerCase()) &&
        phone.split(reg).join("").includes(phones)
    );

    if (
      names.trim().length === 0 &&
      emails.trim().length === 0 &&
      phones.trim().length === 0
    ) {
      setData(trueArr);
    } else {
      setData(arrSorted);
    }
  }, [names, emails, phones, trueArr]);

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

  // Main engine of sorting for ascending or descending
  const ascending = (which, bool) => {
    if (which === "gender") {
      let genderArray = data.sort((a, b) => {
        let genderA = a.gender;
        let genderB = b.gender;

        if (bool) {
          if (genderA < genderB) {
            return -1;
          }
          if (genderA > genderB) {
            return 1;
          }
          return 0;
        } else {
          if (genderA > genderB) {
            return -1;
          }
          if (genderA < genderB) {
            return 1;
          }
          return 0;
        }
      });

      setData(genderArray);
    }

    if (which === "first name") {
      let firstNameArray = data.sort((a, b) => {
        let fa = a.name.first.toLocaleLowerCase();
        let fb = b.name.first.toLocaleLowerCase();

        if (bool) {
          if (fa > fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
          return 0;
        } else {
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        }
      });

      setData(firstNameArray);
    }

    if (which === "last name") {
      let lastNameArray = data.sort((a, b) => {
        let la = a.name.last.toLocaleLowerCase();
        let lb = b.name.last.toLocaleLowerCase();

        if (bool) {
          if (la > lb) {
            return -1;
          }
          if (la < lb) {
            return 1;
          }
          return 0;
        } else {
          if (la < lb) {
            return -1;
          }
          if (la > lb) {
            return 1;
          }
          return 0;
        }
      });

      setData(lastNameArray);
    }

    if (which === "email") {
      let emailArray = data.sort((a, b) => {
        let emailA = a.email.toLocaleLowerCase();
        let emailB = b.email.toLocaleLowerCase();

        if (bool) {
          if (emailA < emailB) {
            return -1;
          }
          if (emailA > emailB) {
            return 1;
          }
          return 0;
        } else {
          if (emailA > emailB) {
            return -1;
          }
          if (emailA < emailB) {
            return 1;
          }
          return 0;
        }
      });
      setData(emailArray);
    }

    if (which === "phone") {
      let phoneArray = data.sort((a, b) => {
        const reg = /\((.*)\)/g;
        let phoneA = a.phone.split(reg);
        let phoneB = b.phone.split(reg);

        if (bool) {
          return phoneA[1] - phoneB[1];
        } else {
          return phoneB[1] - phoneA[1];
        }
      });

      setData(phoneArray);
    }
  };

  // Pre check for sorting engine. Sets state afterwards
  const sort = (column, asc) => {
    if (column === "first name" || column === "last name") {
      if (nameAsc.which === column) {
        ascending(nameAsc.which, !nameAsc.bool);
        setNameAsc((prevState) => ({ ...prevState, bool: !nameAsc.bool }));
      } else {
        ascending(column, false);
        setNameAsc({
          which: column,
          bool: false,
        });
      }
    } else {
      if (asc === "asc") {
        ascending(column, false);
        setNameAsc({
          which: column,
          bool: false,
        });
      } else {
        console.log("setting state to true");
        setNameAsc({
          which: column,
          bool: true,
        });
      }
    }
  };

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
                      <p
                        className='dropdown-item'
                        onClick={() => sort("gender", "asc")}
                      >
                        Male
                      </p>
                      <p
                        className='dropdown-item'
                        onClick={() => sort("gender", "des")}
                      >
                        Female
                      </p>
                    </div>
                  </div>
                </th>
                <th scope='col'>
                  <DropdownInput
                    title='Name'
                    value={names}
                    onChange={handleName}
                    option1='First Name'
                    option2='Last Name'
                    sort1={() => sort("first name")}
                    sort2={() => sort("last name")}
                  />
                </th>
                <th scope='col'>
                  <DropdownInput
                    title='Email'
                    value={emails}
                    onChange={handleEmail}
                    option1='Asc'
                    option2='Des'
                    sort1={() => sort("email", "asc")}
                    sort2={() => sort("email", "des")}
                  />
                </th>
                <th scope='col'>
                  <DropdownInput
                    title='Phone'
                    value={phones}
                    onChange={handlePhone}
                    option1='Asc'
                    option2='Des'
                    sort1={() => sort("phone", "asc")}
                    sort2={() => sort("phone", "des")}
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
