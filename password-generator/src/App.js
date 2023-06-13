import { useState, createContext } from 'react';

import PGIndex from './pages/pg/PGIndex';
import ErrorSuccessNotification from './components/ErrorSuccessHandler';

const LoginContext = createContext();
function App() {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorSuccessData({
      errorStatus: false,
      errorType: 'success',
      errorMsg: ''});
  };

  const [errorSuccessData, setErrorSuccessData] = useState({
    errorStatus: false,
    errorType: 'success',
    errorMsg: ''
  })

  const errorSuccessDataHandler = (errorSuccessNewData) => {
    setErrorSuccessData(errorSuccessNewData);
  };

  return (
    <div className="App">
      <ErrorSuccessNotification errorStatus={errorSuccessData.errorStatus} errorType={errorSuccessData.errorType} errorMsg={errorSuccessData.errorMsg} handleClose={handleClose} />
      <LoginContext.Provider value = {{errorSuccessDataHandler}}>
        <PGIndex />
      </LoginContext.Provider>
    </div>
  );
}

export {LoginContext};
export default App;
