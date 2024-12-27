import SmartQueue from './views/smartqueue';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="app_main">
      <SmartQueue />
      <ToastContainer />
    </div>
  );
}

export default App;
