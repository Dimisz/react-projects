import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/Home";
const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home/>} />
    </Routes>

  );
}

export default App;
