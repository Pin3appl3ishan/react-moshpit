import { FormEvent, useState } from "react";

const Form = () => {

    const [person, setPerson] = useState({name: '', age: ''});

    const handleSumbit = (event: FormEvent) => {
        event.preventDefault();
        console.log(person);
    }

  return (
    <form onSubmit={handleSumbit}>
        <div className="mb-3">
            <label htmlFor="name" className='form-label'>Name</label>
            <input value={person.name} onChange={(event) => setPerson({...person, name: event.target.value})} type="text" id='name' className='form-control'/>
        </div>
        <div className="mb-3">
            <label htmlFor="age" className='form-label'>Age</label>
            <input value={person.age} onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})} type="number" id='age' className='form-control'/>
        </div>
        <button className="btn btn-primary">Submit</button>
    </form>
  )
} 

export default Form