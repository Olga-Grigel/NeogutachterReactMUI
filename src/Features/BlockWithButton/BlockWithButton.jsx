import './BlockWithButton.css';
import ButtonWithArrow from '../../components/ButtonWithArrow/ButtonWithArrow.jsx'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowLong from "../../images/ArrowLong.png";
import ArrowLongMobile from "../../images/ArrowMobil.svg";

function BlockWithButton() {
  return (
    <Box
      sx={{
        pl: {
          xs: '28px',
          mobileXS: '24px'
        },
        width: {
          mobileL: '50%',
          mobileXS: '90%',
        },
        position: 'relative',
        marginRight: {
          xs: '0px',
          mobileXS: 'auto',
        },
        marginLeft: {
          lg: '125px',
          md: '95px',
          sm: '30px',
          xs: '20px',
          mobileXS: '0',
        },
        mt: {
          lg: '125px',
          md: '70px',
          sm: '30px',
          mobileL: '80px',
          mobileXS: '0',
        },
        marginBottom: {
          lg: '142px',
          md: '80px',
          sm: '50px',
          xs: '100px',
          mobileL: '50px',
          mobileXS: '0',
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
              mobileL: '25px',
              mobileMS: '31px',
              mobileXS: '24px',
            },
            lineHeight: {
              sm: '68px',
              mobileXS: '42px',
            },
          }}
        >Hier den besten <br />Kfz-Gutachter finden!</Typography>
        <h2 className="homepage__title homepage__highlighting">Wir übernehmen</h2>
        <br />
        <h2 className="homepage__title homepage__highlighting">das für dich.</h2>
      </Box>
      <Box
        sx={{
          position: 'relative'
        }}
      >
        <ButtonWithArrow textButton={'Gutachter kostenlos anfragen'} />
        <Box sx={{
          position: 'absolute',
          backgroundImage: {
            sm: `URL(${ArrowLong})`,
            mobileXS: `URL(${ArrowLongMobile})`
          },
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: {
            sm: '182px',
            mobileXS: '115px'
          },
          width: {
            sm: '140px',
            mobileXS: '50px'
          },
          bottom: {
            sm: '3px',
            mobileXS: '40px'
          },
          left: {
            lg: '370px',
            sm: '278px',
            mobileL: '240px',
            mobileMS: '300px',
            mobileXS: '230px'
          },
        }}>
        </Box>
      </Box>
    </Box >
  );
}

export default BlockWithButton;
