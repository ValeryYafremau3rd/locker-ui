import { useState } from "react";
import { useDispatch } from "react-redux";
import useAuthEffect from "../effects/useAuthEffect";
import { signupUser } from "../redux/reducers/authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useAuthEffect()

  const handleSignup = (e: any) => {
    e.preventDefault();
    dispatch(signupUser({ username, password }));
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
