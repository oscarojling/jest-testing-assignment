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
    <div className="w-full max-w-sm md:max-w-md m-auto my-8 p-8">
      <label htmlFor="username">Enter your name</label>
      <input
        id="username"
        onChange={handleChange}
        placeholder="Enter your name..."
        value={username}
        className="w-full p-2 mb-3 bg-gray-200"
      ></input>
      {username !== "" && (
        <button
          onClick={handleClick}
          className="w-full bg-yellow-600 text-white rounded p-2 cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-yellow-700"
        >
          Start
        </button>
      )}
    </div>
  );
};

export default StartScreen;
