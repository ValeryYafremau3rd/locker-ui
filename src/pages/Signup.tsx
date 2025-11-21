import { useState } from "react";
import { useDispatch } from "react-redux";
import useAuthEffect from "../effects/useAuthEffect";
import { signupUser } from "../redux/reducers/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useAuthEffect();

  const handleSignup = (e: any) => {
    e.preventDefault();
    dispatch(signupUser({ username, password }));
  };

  return (
    <div className="flex justify-center items-center h-screen  ">
      <form
        onSubmit={handleSignup}
        className="flex justify-center items-center flex-col bg-amber-100 p-5 rounded-md"
      >
        <div>
          <input className="bg-gray-400 m-3 rounded-sm p-2"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input className="bg-gray-400 m-3 rounded-sm p-2"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-1/1">
          <button type="submit"  className="m-3 p-2 float-right bg-green-600">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
