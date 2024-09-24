import React, { useContext } from 'react';
import { Context } from './Context';

const SearchBar = () => {
  const { onSent, result, setInput, input } = useContext(Context);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-[#000000] opacity-100 z-0"></div>
      <div className="relative z-10 w-full max-w-3xl mt-40">
        <div className="flex items-center gap-4 bg-[#272727] backdrop-blur-lg px-4 py-[10px] rounded-full shadow-md">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Enter your prompt..."
            className="flex-grow px-6 py-4 rounded-full outline-none bg-[#1a1a1a] transition-colors duration-[200ms] focus:bg-white focus:text-black text-white placeholder-gray-400"
            onKeyDown={(e) => e.key === 'Enter' && onSent()}
          />
          <button
            type="submit"
            onClick={onSent}
            className="flex items-center justify-center bg-[#1a1a1a] hover:bg-white text-white px-3 py-3 rounded-full shadow-lg transition-all"
          >
            <img
              width={20}
              className='search-icon invert'
              src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
              alt="Search Icon"
            />
          </button>
        </div>
        {result && (
          <div className="mt-6 bg-[#272727] backdrop-blur-lg p-6 rounded-lg shadow-md">
            <p className="text-white">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
