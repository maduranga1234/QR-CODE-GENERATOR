import Home from "./Home";
import QRCodeGenerator from "./QrCodeGenerator";
import QRCodeReader from "./QrCodeReader";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">


<Router>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/genarate" element={<QRCodeGenerator />} />
          <Route path="/scan" element={<QRCodeReader />} />
          
          
        </Routes>
      </Router>

     
     
    </div>
  );
}

export default App;
