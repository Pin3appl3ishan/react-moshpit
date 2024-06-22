import Button from "./components/Button/Button";

function App() {
  const handleClick = () => {
    console.log('Button clicked');
  };
  return (
    <>
    <Button onClick={handleClick} color="primary">Click Me</Button>
    </>
  );
}

export default App;
