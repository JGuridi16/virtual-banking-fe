import { BrowserRouter } from 'react-router-dom';
import MainRouter from './navigation/MainRouter';
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <MainRouter />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
