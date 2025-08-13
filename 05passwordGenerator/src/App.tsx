import { useCallback, useEffect, useState, useRef } from 'react';

// The main App component for the password generator
function App() {
  // State hooks for managing the application's data
  const [length, setLength] = useState(12); // Length of the password, defaults to 12
  const [characters, setCharacters] = useState(false); // Flag for including special characters
  const [numbers, setNumbers] = useState(false); // Flag for including numbers
  
  const [password, setPassword] = useState(''); // The generated password
  const [copied, setCopied] = useState(false); // Flag to show "Copied" message

  // useRef hook to create a reference to the password input field
  const passwordRef = useRef<HTMLInputElement>(null);

  // useCallback hook to memoize the passwordGenerator function.
  // This prevents it from being recreated on every re-render unless its dependencies change.
  const passwordGenerator = useCallback(() => {
    let generatedPassword = '';
    let characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numbers) {
      characterSet += '0123456789';
    }
    if (characters) {
      characterSet += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    }

    // Generate the password based on the length and character set
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      generatedPassword += characterSet.charAt(randomIndex);
    }
    setPassword(generatedPassword);
  }, [length, characters, numbers, setPassword]);

  // useCallback hook to memoize the copy function
  const copyPasswordToClipboard = useCallback(() => {
    // Select the text in the input field
    passwordRef.current?.select();
    // For mobile compatibility, you can also set a selection range
    passwordRef.current?.setSelectionRange(0, 999);

    // Try to copy the text to the clipboard
    window.navigator.clipboard.writeText(password);
  }, [password])

  // useEffect hook to call the passwordGenerator function whenever dependencies change.
  // This regenerates the password when length, characters, or numbers are updated.
  useEffect(() => {
    passwordGenerator();
  }, [length, characters, numbers, passwordGenerator]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-sans p-4">
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-transform duration-300 hover:scale-105">

        {/* Title of the application */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-400 mb-8">
          Password Generator
        </h1>

        {/* Password display and copy button */}
        <div className="flex items-center w-full mb-6 relative">
          <input
            type="text"
            className="flex-1 bg-gray-700 text-white text-lg font-mono py-3 px-5 rounded-l-xl outline-none border-2 border-gray-700 focus:border-blue-500 transition-colors duration-200"
            placeholder="Your password"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-r-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Control options for the password */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-6">
          {/* Length control */}
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer h-2 accent-blue-400 w-40"
            />
            <label className="text-lg font-medium text-gray-300">
              Length: <span className="text-blue-400">{length}</span>
            </label>
          </div>

          {/* Character checkbox */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={characters}
              onChange={() => setCharacters((prev) => !prev)}
              className="w-5 h-5 accent-blue-400 cursor-pointer"
            />
            <label className="text-lg font-medium text-gray-300">
              Characters
            </label>
          </div>

          {/* Number checkbox */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers((prev) => !prev)}
              className="w-5 h-5 accent-blue-400 cursor-pointer"
            />
            <label className="text-lg font-medium text-gray-300">
              Numbers
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
