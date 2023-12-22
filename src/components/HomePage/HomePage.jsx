import HomepageHeader from '../HomepageHeader/HomepageHeader.jsx'
import BlockWithButton from '../BlockWithButton/BlockWithButton.jsx'
import BlockWithImmages from '../BlockWithImmages/BlockWithImmages.jsx'
import Box from '@mui/material/Box';
import background from "../../images/HomeBackgroundImmage.png";

function HomePageHeader() {
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
        <BlockWithImmages />
      </Box >
    </Box >

  );
}

export default HomePageHeader;
