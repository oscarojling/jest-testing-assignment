import { SetStateAction, useState } from "react";

type StartScreenProps = {
  handleStart: (username: string) => void;
};

const StartScreen = ({ handleStart }: StartScreenProps) => {
  const [username, setUsername] = useState<string>("");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setUsername(e.target.value);
  };

  const handleClick = () => {
    if (username !== "") {
      handleStart(username);
      setUsername("");
    }
  };

  return (
    <div className="w-3xl m-auto my-8 p-8">
      <label htmlFor="username">Enter your name</label>
      <input
        id="username"
        onChange={handleChange}
        placeholder="Enter your name..."
        value={username}
        className="w-full p-2 mb-3"
      ></input>
      {username !== "" && <button onClick={handleClick} className="w-full bg-blue-600 text-white rounded p-2">Start</button>}
    </div>
  );
};

export default StartScreen;
