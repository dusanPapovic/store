import React from "react";
import { useState } from "react";

function AppCustomers() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Dusan",
      surname: "Popovic",
    },
    {
      id: 2,
      name: "Petar",
      surname: "Peric",
    },
    {
      id: 3,
      name: "Stefan",
      surname: "Milosevic",
    },
  ]);

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    surname: "",
  });

  const handleDelete = (deleteCustomerId) => {
    setCustomers(customers.filter((el) => el.id !== deleteCustomerId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCustomers([...customers, { ...newCustomer }]);

    setNewCustomer({
      name: "",
      surname: "",
    });
  };

  return (
    <div>
      <div>
        {customers.map((customer) => (
          <div className="container" key={customer.id}>
            <div className="row pt-3">
              <div className="col-2">
                {customer.name} {customer.surname}
              </div>
              <div className="col-3">
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(customer.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="row pt-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                value={newCustomer.name}
                placeholder="Ime"
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                value={newCustomer.surname}
                placeholder="Prezime"
                onChange={(e) =>
                  setNewCustomer({ ...newCustomer, surname: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Dodaj kupca</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppCustomers;
