import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const ErrorSuccesshandler = (props) => {
  const {errorStatus, errorType, errorMsg, handleClose} = props;
  
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={errorStatus} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={errorType} sx={{ width: '100%' }} variant='filled' elevation={6}>
          {errorMsg}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default ErrorSuccesshandler;