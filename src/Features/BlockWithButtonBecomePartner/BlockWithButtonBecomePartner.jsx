import './BlockWithButtonBecomePartner.css';
import ButtonWithArrowBecomePartner from '../../components/ButtonWithArrowBecomePartner/ButtonWithArrowBecomePartner.jsx'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function BlockWithButtonBecomePartner() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: {
          mobileL: '100%',
          mobileXS: '92%',
        },
        display: {
          mobileL: 'block',
          mobileXS: 'flex',
        },
        flexDirection: 'column',
        alignItems: 'unsafe center'
      }}>
      <Box sx={{
        textAlign: {
          mobileL: 'start',
          mobileXS: 'center',
        },
      }}>
        <Typography color="primary.black"
          sx={{
            letterSpacing: {
              mobileL: 'normal',
              mobileXS: '-0.15vw',
            },
            fontFamily: 'Lexend Deca',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: {
              mobileL: '3.33vw',
              mobileMS: '4.33vw',
              mobileXS: '6.9vw',
            },
            lineHeight: {
              mobileL: '4.72vw',
              mobileMS: '5.72vw',
              mobileXS: '9.2vw',
            },
          }}
        >
          <span className="becomePartner__highlighting">Neogutachter.de</span> <br />
          für Gutachter</Typography>

        <Typography color="primary.black"
          sx={{
            letterSpacing: {
              mobileL: 'normal',
              mobileXS: '-0.07vw',
            },
            mt: {
              mobileMS: '1.66vw',
              mobileXS: '4.25vw',
            },
            mb: {
              mobileMS: '3.61vw',
              mobileXS: '3.7vw',
            },
            fontFamily: 'Lexend Deca',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: {
              mobileL: '1.66vw',
              mobileMS: '2.66vw',
              mobileXS: '4.25vw',
            },
            lineHeight: {
              mobileL: '2.5vw',
              mobileMS: '3.5vw',
              mobileXS: '6.37vw',
            },
          }}
        >Sind Sie Gutachter? Legen Sie sich ein Profil an und generieren Sie neue Kunden.</Typography>
      </Box>

      <ButtonWithArrowBecomePartner textButton={'Hier Partner werden'} />


    </Box >
  );
}

export default BlockWithButtonBecomePartner;
