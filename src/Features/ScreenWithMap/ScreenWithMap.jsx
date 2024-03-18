import Map from "../Map/Map.jsx"
import Box from "@mui/material/Box"

function ScreenWithMap() {
  return (
    <Box
    // sx={{
    //   backgroundColor: '#F5F5F5',
    //   backgroundImage: `URL(${background})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: {
    //     xs: 'right -663px top -275px',
    //     mobileXS: 'right -1277px top -317px',
    //   },
    // }}
    >
      <Map />
    </Box>
  )
}

export default ScreenWithMap
