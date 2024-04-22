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
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-8 bg-gray-100 rounded-lg shadow-lg w-80">
        <h1 className="px-4 mb-6 text-2xl font-bold" >QR Code Generator</h1>
        <input
          type="text"
          placeholder="Enter data"
          value={inputData}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        {inputData && (
          <div ref={qrCodeRef} className="flex justify-center mb-4">
           <QRCode value={inputData} size={128} />
          </div>
        )}
        {inputData && (
          <button
            onClick={handleDownloadClick}
            className="px-12 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Download QR Code
          </button>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
