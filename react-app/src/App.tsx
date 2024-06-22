import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: 'Kathmandu',
      zipCode: 8844
    }
  });

  const handleClick = () => {
    setCustomer({...customer,address: {...customer.address, zipCode: 8848}});
  };

  return (
  <div>
     <button onClick={handleClick}>Click me</button>
  </div>
  );
}

export default App;
