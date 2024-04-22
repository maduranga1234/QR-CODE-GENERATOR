import React, { useRef, useState, useEffect } from 'react';
import { BrowserQRCodeReader } from '@zxing/library';

const QRCodeReader = () => {
  const videoRef = useRef(null);
  // const canvasRef = useRef(null);
  const codeReader = useRef(new BrowserQRCodeReader());
  const [scannedResult, setScannedResult] = useState('');

  useEffect(() => {
    const startScanner = async () => {
      try {
        const videoElement = videoRef.current;

        const videoInputDevices = await codeReader.current.listVideoInputDevices();
        const selectedDeviceId = videoInputDevices[0].deviceId;

        const constraints = {
          video: {
            deviceId: selectedDeviceId,
          },
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoElement.srcObject = stream;

        codeReader.current.decodeFromVideoDevice(selectedDeviceId, videoElement, (result) => {
          if (result) {
            setScannedResult(result.getText());
          }
        });
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startScanner();

    return () => {
      codeReader.current.reset();
    };
  }, []);

//   const handleCaptureImage = () => {
//     const videoElement = videoRef.current;
//     const canvasElement = canvasRef.current;

//     if (videoElement && canvasElement) {
//       const context = canvasElement.getContext('2d');
//       context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

//       const imageDataUrl = canvasElement.toDataURL('image/png');

//       // Trigger file download
//       const anchorElement = document.createElement('a');
//       anchorElement.href = imageDataUrl;
//       anchorElement.download = 'qr_code_image.png';
//       anchorElement.click();
//     }
//   };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="mb-8 text-3xl font-bold">QR Code Reader</h1>
      <div className="relative w-64 h-64">
        <video ref={videoRef} className="absolute inset-0 w-full h-full" autoPlay playsInline></video>
        {scannedResult && (
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
            <p className="text-lg">{scannedResult}</p>
          </div>
        )}
        
      </div>
     
      <h1>{scannedResult}</h1>
    </div>

    
  );
};

export default QRCodeReader;
