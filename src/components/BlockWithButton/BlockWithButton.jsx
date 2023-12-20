import './BlockWithButton.css';
import ButtonWithArrow from '../ButtonWithArrow/ButtonWithArrow.jsx'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowLong from "../../images/ArrowLong.png";

function BlockWithButton() {
  return (
    <Box
      sx={{
        maxWidth: '50%',
        position: 'relative',
        marginLeft: '105px',
        marginTop: {
          lg: '118px',
          md: '70px',
          sm: '30px',
          xs: '20px'
        },
        marginBottom: {
          lg: '142px',
          md: '40px',
          sm: '10px',
          xs: '5px'
        }
      }}>
      <Box>
        <Typography color="primary.black"
          sx={{
            letterSpacing: 'normal',
            fontFamily: 'Lexend Deca',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: {
              lg: '48px',
              md: '40px',
              sm: '35px',
              xs: '30px'
            },
            lineHeight: '68px',
          }}
        >Hier den besten <br />Kfz-Gutachter finden!</Typography>
        <h2 className="homepage__title homepage__highlighting">Wir übernehmen</h2>
        <br />
        <h2 className="homepage__title homepage__highlighting">das für dich.</h2>
      </Box>
      <Box>
        <ButtonWithArrow />
        <Box sx={{
          backgroundImage: `URL(${ArrowLong})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          height: '182px',
          width: '140px',
          position: 'absolute',
          bottom: '3px',
          left: {
            lg: '370px',
            md: '278px',
            sm: '245px',
            xs: '212px'
          },
        }}>
        </Box>
      </Box>
    </Box >
  );
}

export default BlockWithButton;
