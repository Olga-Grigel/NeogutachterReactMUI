import HomepageHeader from '../HomepageHeader/HomepageHeader.jsx'
import BlockWithButton from '../BlockWithButton/BlockWithButton.jsx'
import BlockWithImages from '../BlockWithImages/BlockWithImages.jsx'
import Box from '@mui/material/Box';
import background from "../../images/HomeBackgroundImage.png";

function FirstScreen() {
  return (
    <Box
      sx={{
        backgroundColor: '#F5F5F5',
        backgroundImage: `URL(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: {
          xs: 'right -663px top -275px',
          mobileXS: 'right -1277px top -317px',
        },
      }}
    >
      <HomepageHeader />
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            mobileL: 'row',
            mobileXS: 'column',
          },
          justifyContent: 'space-between',
          mt: {
            mobileL: '0',
            mobileXS: '46px',
          }
        }}
      >
        <BlockWithButton />
        <BlockWithImages />
      </Box >
    </Box >

  );
}

export default FirstScreen;
