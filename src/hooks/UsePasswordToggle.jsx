import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const UsePasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const Icon = visible ? (
      <AiFillEye onClick={() => setVisible(!visible)} />
      ) : (
      <AiFillEyeInvisible  onClick={() => setVisible(!visible)} />
  );
  const inputType = visible ? "text" : "password";
  return [inputType, Icon, setVisible];
};

export default UsePasswordToggle;
