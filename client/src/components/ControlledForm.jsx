import { useRef, useState } from "react";
/*  Way to handle controlled and uncontrolled component*/

export default function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

 const handleSubmit = (e) => {
  console.log("ControlledForm", name , email )
    e.preventDefault();
    let tempErrors = {};
    if (!name) tempErrors.name = "Name is required";
    if (!email.includes("@")) tempErrors.email = "Valid email required";
    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      alert(`Name: ${name}, Email: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}


export function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const [errors, setErrors] = useState({});

  const handleSubmitChange = (e) => {
    console.log("UncontrolledForm",nameRef.current.value)
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    let tempErrors = {};
    if (!name) tempErrors.name = "Name is required";
    if (!email.includes("@")) tempErrors.email = "Valid email required";
    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      alert(`Name: ${name}, Email: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmitChange}>
      <div>
        <input type="text"  defaultValue="Hello" placeholder="Name" ref={nameRef} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <input type="email" placeholder="Email" ref={emailRef} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
//
//export default ControlledForm;

