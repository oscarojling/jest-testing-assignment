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
    <div className="w-3xl m-auto my-8 p-8 rounded-xl border border-pink-500 flex justify-between">
      <label htmlFor="username">Enter your name</label>
      <input
        id="username"
        onChange={handleChange}
        placeholder="Enter your name..."
        value={username}
      ></input>
      {username !== "" && <button onClick={handleClick}>Start</button>}
    </div>
  );
};

export default StartScreen;
