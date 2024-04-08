import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const QRCodeGenerator = () => {
  const [inputData, setInputData] = useState('');
  const qrCodeRef = useRef(null);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };


  const handleDownloadClick = () => {

    if (!inputData) {
      alert('Please enter data to generate a QR code.');
      return;
    }

    
    html2canvas(qrCodeRef.current)
    .then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, 'qrcode.png');
      });
    });

  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md p-8 bg-gray-100 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6 px-4" >QR Code Generator</h1>
        <input
          type="text"
          placeholder="Enter data"
          value={inputData}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md mb-4"
        />
        {inputData && (
          <div ref={qrCodeRef} className="mb-4 flex justify-center">
           <QRCode value={inputData} size={128} />
          </div>
        )}
        {inputData && (
          <button
            onClick={handleDownloadClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-12 rounded"
          >
            Download QR Code
          </button>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
