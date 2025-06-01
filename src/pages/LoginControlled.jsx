import { useRef } from 'react'
const LoginPageControlled = () => {
    // controlled component for login
    const username = useRef();
    const password = useRef();

    const validation = () => {
        if (username.current.value === "" || password.current.value === "") {
            alert("Username and password cannot be empty");
            return false;
        }
        return true;
    }

    // login function
    const login = (e) => {
        e.preventDefault();
        const validate = validation();
        if(validate === false) return;
        if (username.current.value === "admin" && password.current.value === "admin") {
            alert("Login successful!");
            // Redirect to home page or perform other actions
        } else {
            alert("Invalid username or password");
        }
    };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login Page</h1>
      <form className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            ref={username}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            ref={password}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          onClick={login}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPageControlled;
