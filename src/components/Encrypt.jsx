import React, { useState } from 'react';

const Encrypt = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [encryptButtonText, setEncryptButtonText] = useState('Encrypt');
  const [copyButtonText, setCopyButtonText] = useState('Copy 📋');

  const encryptToBase64 = (text) => {
    const encodedText = btoa(text);
    setOutputText(encodedText);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleEncryptButtonClick = (event) => {
    encryptToBase64(inputText);
    setEncryptButtonText('Done ✅');
    setTimeout(() => {
      setEncryptButtonText('Encrypt');
    }, 5000);
  };

  const handleCopyClick = (event) => {
    navigator.clipboard.writeText(outputText);
    setCopyButtonText('Copied! ✅');
    setTimeout(() => {
      setCopyButtonText('Copy 📋');
    }, 5000);
  }

  return (
    <div className='flex flex-col justify-center mx-2 my-10 lg:px-96'>
      <textarea className="textarea textarea-primary text-white textarea-lg h-40 lg:h-60" placeholder="Enter any text here" value={inputText} onChange={handleInputChange} />
      <button className='bg-gradient-to-r from-rose-700 to-pink-600 mt-4 rounded-lg font-bold text-white py-3 lg:py-4 animated-button' onClick={handleEncryptButtonClick}>{encryptButtonText}</button>
      <div className='flex flex-col mt-10'>
        <h3 className='text-xl font-bold '>📌 Encrypted Text:</h3>
        <textarea className="textarea mt-2 h-36 bg-gray-900 text-white" readOnly value={outputText} />
        <div className='flex items-end justify-end'>
          <button className='bg-gradient-to-r from-rose-700 to-pink-600 py-3 lg:py-4  px-5 lg:px-8 mt-5 rounded-lg text-white mt-2 animated-button' onClick={handleCopyClick}>{copyButtonText}</button>
        </div>
      </div>
    </div>
  );
};


export default Encrypt