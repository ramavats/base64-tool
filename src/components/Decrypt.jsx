import React, { useState } from 'react';

const Decrypt = () => {
const [inputText, setInputText] = useState('');
const [outputText, setOutputText] = useState('');
const [copyButtonText, setCopyButtonText] = useState('Copy 📋');
const [decryptButtonText, setDecryptButtonText] = useState('Decrypt');

const decryptFromBase64 = (text) => {
  try {
    const decodedText = atob(text);
    setOutputText(decodedText);
  } catch (e) {
    setOutputText('Invalid Base64 string');
  }
};

const handleInputChange = (event) => {
  setInputText(event.target.value);
};

const handleDecryptButtonClick = (event) => {
  decryptFromBase64(inputText);
  setDecryptButtonText('Done ✅');
  setTimeout(() => {
    setDecryptButtonText('Decrypt');
  }, 5000);
};

const handleCopyClick = (event) => {
  navigator.clipboard.writeText(outputText);
  setCopyButtonText('Copied! ✅');
  setTimeout(() => {
    setCopyButtonText('Copy 📋');
  }, 5000);
};

return (
  <div className='flex flex-col justify-center mx-2 my-10 lg:px-96'>
    <textarea className='textarea textarea-primary text-white textarea-lg h-40 lg:h-60' value={inputText} onChange={handleInputChange} />
    <button className="animated-button bg-gradient-to-r from-rose-700 to-pink-600 mt-4 rounded-lg font-bold text-white py-3 lg:py-4 animated-button" onClick={handleDecryptButtonClick}>{decryptButtonText}</button>
    <div className='flex flex-col mt-10'>
    <h3 className='text-xl font-bold '>📌 Decrypted Text:</h3>
      <textarea className='textarea mt-2 h-36 bg-gray-900 text-white' readOnly value={outputText} />
      <div className='flex items-end justify-end'>
      <button className='animated-button bg-gradient-to-r from-rose-700 to-pink-600 py-3 lg:py-4  px-5 lg:px-8 mt-5 rounded-lg text-white mt-2 animated-button' onClick={handleCopyClick}>{copyButtonText}</button>
      </div>
    </div>
  </div>
);
};



export default Decrypt