import { makeStyles } from '@mui/styles';

const pgStyles = makeStyles({
    mainDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '97vh',
        margin: 'auto',
    },
    passGenDiv: {
        width: '350px',
        height: 'auto',
        minHeight: '400px',
        border: '2px solid black',
        borderRadius: '5px',
    },
    passGenHeader: {
        width: '98%',
        height: 'auto',
        minHeight: '50px',
        padding: '4px',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        color: '#fff',
        backgroundColor: 'black',
        borderRadius: '5px 5px 0 0',
        fontSize: '1.8rem',
        fontWeight: '500',
        fontFamily: 'sans-serif',
        textAlign: 'center',
    },
    passShowBox: {
        height: '50px',
        border: '1px solid black',
    },
    passShowVal: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        padding: '0 10px 0 20px',
        fontSize: '18px',
    },
    clipBoard: {
        cursor:'pointer',
        '&:hover': {
            color:'black',
        }
    },
    SelectBoxDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '30px 0 50px 0',
    },
    EachSelectBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '92%',
        padding: '0 10px 0 20px',
    },
    GenerateButtonBoxDiv: {
        width: '95%',
        margin: 'auto',
        marginBottom: '5px'
    }
});

export default pgStyles;