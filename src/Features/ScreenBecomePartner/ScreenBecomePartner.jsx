import Box from '@mui/material/Box';
import BlockWithButtonBecomePartner from '../../Features/BlockWithButtonBecomePartner/BlockWithButtonBecomePartner';
import backgroundBecomePartner from "../../images/backgroundBecomePartner.png";
import imageBecomePartner from '../../images/imageBecomePartner.png';
import ImageBecomePartner from '../../components/ImageBecomePartner/ImageBecomePartner'

function ScreenBecomePartner() {
  return (
    <Box
      sx={{
        p: {
          mobileM: '103px 0 100px',
          mobileXS: '110px 0 106px'
        },
        backgroundColor: '#F5F5F5',
        backgroundImage: `URL(${backgroundBecomePartner})`,
        backgroundRepeat: "no-repeat",
        display: 'flex',
        gap: {
          mobileL: '4.69vw',
          mobileXS: '0vw'
        },
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: {
          mobileL: '0',
          mobileXS: '46px',
        }
      }}
    >
      <Box sx={{
        width: {
          mobileL: '35%',
          mobileXS: '100%',
        },
        marginLeft: {
          mobileL: '10.24vw',
          mobileXS: '0',
        },
        display: {
          mobileL: 'block',
          mobileXS: 'flex',
        },
        justifyContent: 'center',
      }}>
        <BlockWithButtonBecomePartner />
      </Box>

      <Box sx={{
        mr: 'auto',
        ml: {
          mobileL: '3vw',
          mobileXS: '0px',
        }
      }}>
        <Box
          sx={{
            display: {
              mobileL: 'block',
              mobileXS: 'none',
            },
            width: '35.47vw',
            height: '33vw',
          }}
        >
          <ImageBecomePartner path={imageBecomePartner} />
        </Box>
      </Box>

    </Box >

  );
}

export default ScreenBecomePartner;
