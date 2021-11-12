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

  const handleDelete = (deleteCustomerId) => {
    setCustomers(customers.filter((el) => el.id !== deleteCustomerId));
  };

  return (
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
  );
}

export default AppCustomers;
