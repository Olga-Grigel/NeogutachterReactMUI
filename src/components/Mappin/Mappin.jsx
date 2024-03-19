import Box from "@mui/material/Box"
import mappin from "../../images/Mappin.png"

function Mappin() {
  return (
    <Box
      sx={{
        width: "50px",
        height: "63px",
      }}
    >
      <img src={mappin} className="mappin" alt={mappin} />
    </Box>
  )
}

export default Mappin
