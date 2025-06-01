import useForm from "../hooks/FormHook";

const LoginHook = () => {
  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation if needed
    if (values.email === "" || values.password === "") {
      alert("Email and password cannot be empty");
      return;
    }
    if (values.email === "admin@gmail.com" && values.password === "admin") {
      alert("Login successful!");
      // Redirect to home page or perform other actions
    } else {
      alert("Invalid email or password");
    }
    resetForm();
  };
  return (
    <div className="login-hook">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default LoginHook;
