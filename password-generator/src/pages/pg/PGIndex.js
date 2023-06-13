import React, { useState, useContext } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

import pgStyles from './styles';
import { LoginContext } from '../../App';

const arr = Array.from(Array(26));
const capArr = arr.map((e, index) => index + 65);
const smArr = arr.map((e, index) => index + 97);
const capStr = capArr.map((e) => String.fromCharCode(e));
const smStr = smArr.map((e) => String.fromCharCode(e));
const noStr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const spCh = ['@', '#', '!', '%', '&', '*'];

const passObj = { 'capStr': capStr, 'smStr': smStr, 'noStr': noStr, 'spCh': spCh };

function PGIndex() {

  const classes = pgStyles();
  const { errorSuccessDataHandler } = useContext(LoginContext);


  const [passGeneratedValue, setPassGeneratedValue] = useState('');
  const [length, setLength] = useState(6);
  const [capitalLetter, setCapitalLetter] = useState(true);
  const [smallLetter, setSmallLetter] = useState(true);
  const [number, setNumber] = useState(true);
  const [specialChar, setSpecialChar] = useState(false);

  const copyToClipboardHandler = () => {
    const errorSuccessData = {};
    if(!passGeneratedValue) {
      errorSuccessData.errorStatus = true;
      errorSuccessData.errorType = 'error';
      errorSuccessData.errorMsg = `Password have not generated.`;
    } else {
      errorSuccessData.errorStatus = true;
      errorSuccessData.errorType = 'success';
      errorSuccessData.errorMsg = `Password Copied to Clipboard!`;
    }
    errorSuccessDataHandler(errorSuccessData);
  }

  const atleastOneChecked = () => {
    return capitalLetter || smallLetter || number || specialChar;
  }

  const generateEachPass = (type, passLength) => {
    let passSubStr = '';
    for(let i=0;i<passLength;i++) {
      passSubStr+=passObj[type][Math.floor(Math.random()*passObj[type].length)];
    }
    return passSubStr;
  }

  const handleSubmit = async () => {
    const errorSuccessData = {};
    const res = await atleastOneChecked();
    if (!res) {
      errorSuccessData.errorStatus = true;
      errorSuccessData.errorType = 'error';
      errorSuccessData.errorMsg = 'Please Select at least One field.';
      errorSuccessDataHandler(errorSuccessData);
      return;
    }

    let arr = [];
    if (capitalLetter) arr = ['capStr', ...arr];
    if (smallLetter) arr = [...arr,'smStr'];
    if (number) arr = [...arr, 'noStr'];
    if (specialChar) arr = [...arr, 'spCh'];

    let eachPassLength = Math.floor(length / (arr.length));
    let ans = '';
    for (let i = 0; i < arr.length; i++) {
      ans += generateEachPass(arr[i], eachPassLength);
    }

    const remainLength = length-ans.length
    if(remainLength>0) {
      ans += generateEachPass(arr[0], remainLength);
    }

    setPassGeneratedValue(ans);
    errorSuccessData.errorStatus = true;
    errorSuccessData.errorType = 'success';
    errorSuccessData.errorMsg = 'Password Generated Successfully!';
    errorSuccessDataHandler(errorSuccessData);
  }

  return (
    <Box className={classes.mainDiv}>
      <Box className={classes.passGenDiv}>
        <Box className={classes.passGenHeader}>Password Generator</Box>
        <Box className={classes.passGenBody}>
          <Box className={classes.passShowBox}>
            <Paper
              elevation={10}
              className={classes.passShowVal}
            >
              <Box>{passGeneratedValue}</Box>
              <Box className={classes.clipBoard}><ContentCopyIcon  onClick={copyToClipboardHandler}/></Box>
            </Paper>
          </Box>
          <Box className={classes.SelectBoxDiv}>
            <Box className={classes.EachSelectBox}>
              <Box>Capital Letters</Box>
              <Checkbox
                checked={capitalLetter}
                onChange={(e) => { setCapitalLetter(e.target.checked) }}
              />
            </Box>
            <Box className={classes.EachSelectBox}>
              <Box>Small Letters</Box>
              <Checkbox
                checked={smallLetter}
                onChange={(e) => { setSmallLetter(e.target.checked) }}
              />
            </Box>
            <Box className={classes.EachSelectBox}>
              <Box>Numbers</Box>
              <Checkbox
                checked={number}
                onChange={(e) => { setNumber(e.target.checked) }}
              />
            </Box>
            <Box className={classes.EachSelectBox}>
              <Box>Special Characters</Box>
              <Checkbox
                checked={specialChar}
                onChange={(e) => { setSpecialChar(e.target.checked) }}
              />
            </Box>
            <Box className={classes.EachSelectBox} sx={{ marginTop: '10px' }}>
              <Box>Length</Box>
              <TextField
                type="number"
                value={length}
                onChange={(e) => {
                  if (e.target.value > 15) {
                    setLength(15)
                  } else if (e.target.value < 6) {
                    setLength(6)
                  } else {
                    setLength(e.target.value)
                  }
                }}
                InputProps={{
                  inputProps: {
                    max: 15, min: 6,
                    style: {
                      height: "15px",
                    },
                  }
                }}
                size="small"
              />
            </Box>
          </Box>
          <Box className={classes.GenerateButtonBoxDiv} >
            <Button variant="contained" fullWidth onClick={handleSubmit}>
              Generate Password
            </Button>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default PGIndex
