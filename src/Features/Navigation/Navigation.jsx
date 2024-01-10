import NavigationLink from "../../components/NavigationLink/NavigationLink.jsx";
import NavigationLinkWithIcon from "../NavigationLinkWithIcon/NavigationLinkWithIcon.jsx";
import NavigationIcon from '../../components/NavigationIcon/NavigationIcon.jsx'
import pencil from '../../images/pencil.svg';
import telephone from '../../images/telephone.svg';
import partner from '../../images/partner.svg';
import search from '../../images/search.svg';
import login from '../../images/login.svg';
import Box from '@mui/material/Box';



function Navigation() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '40px',
        alignItems: 'center'
      }}>
      <NavigationLinkWithIcon icon={pencil} text={"Online anfrage"} />
      <NavigationLinkWithIcon icon={telephone} text={"Telefonisch anfragen"} />
      <NavigationLinkWithIcon icon={partner} text={"Partner verden"} />

      <Box
        sx={{
          mr: "16px",
          ml: "16px"
        }}
      ><NavigationLink text={"Blog"} />
      </Box>

      <Box display={'flex'}
        sx={{
          justifyContent: "space-between",
          width: "72px",
          margin: '8px 28px'
        }}>
        <NavigationIcon icon={search} />
        <NavigationIcon icon={login} />
      </Box>
    </Box>
  );
}

export default Navigation;