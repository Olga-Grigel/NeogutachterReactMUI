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
        backgroundPosition: 'right top',
        padding: '28px 48px 36px 48px',
      }}
    >
      <HomepageHeader />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <BlockWithButton />
        <BlockWithImmages />
      </Box >
    </Box >

  );
}

export default HomePageHeader;
