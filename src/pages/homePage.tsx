import { useState, type ChangeEvent } from "react";
import { useTeacherStore } from "../store/teachers";

useTeacherStore;
interface FormData {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  contact: string;
  address: string;
  subject: string;
}
function HomePage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    contact: "",
    address: "",
    subject: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };
  const handleReset = () => {};
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formData);
    console.log(import.meta.env.VITE_BACKEND_BASEURL as string);
  };
  return (
    <div className="formContainer">
      <h1>Teacher Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={(e) => handleChange(e)}>
          <option value="">Select</option>
          <option value="male"> Male </option>
          <option value="female">Female</option>
          <option value="other">Other </option>
        </select>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          name="contact"
          placeholder="Enter Contact no."
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject" onChange={(e) => handleChange(e)}>
          <option value="">Select</option>
          <option value="math">Math</option>
          <option value="physics">Physics</option>
          <option value="english">English</option>
        </select>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
