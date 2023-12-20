import ImmageHeader from '../ImmageHeader/ImmageHeader.jsx';
import image1 from '../../images/photo1.png';
import image2 from '../../images/photo2.png';
import image3 from '../../images/photo3.png';
import Box from '@mui/material/Box';

function BlockWithImmages() {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: {
            lg: '202px',
            md: 'calc(202px * 0.8)',
            sm: 'calc(202px * 0.7)',
            xs: 'calc(202px * 0.6)',
          },
          height: {
            lg: '349px',
            md: 'calc(349px * 0.8)',
            sm: 'calc(349px * 0.7)',
            xs: 'calc(349px * 0.6)',
          },
          top: {
            lg: '2px',
            md: '18px',
            sm: '13px',
            xs: '10px'
          },
          right: {
            lg: '455px',
            md: '370px',
            sm: '320px',
            xs: "270px"
          },
          zIndex: '3'
        }}
      >
        <ImmageHeader path={image1} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: {
            lg: '248px',
            md: 'calc(248px * 0.8)',
            sm: 'calc(248px * 0.7)',
            xs: 'calc(248px * 0.6)',
          },
          height: {
            lg: '428px',
            md: 'calc(428px * 0.8)',
            sm: 'calc(428px * 0.7)',
            xs: 'calc(428px * 0.6)',
          },
          top: {
            lg: '152px',
            md: '140px',
            sm: '120px',
            xs: '110px'
          },
          right: {
            lg: '211px',
            md: '170px',
            sm: '145px',
            xs: '125px'
          },
          zIndex: '3'
        }}
      >
        <ImmageHeader path={image2} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: {
            lg: '215px',
            md: 'calc(215px * 0.8)',
            sm: 'calc(215px * 0.7)',
            xs: 'calc(215px * 0.6)',
          },
          height: {
            lg: '329px',
            md: 'calc(329px * 0.8)',
            sm: 'calc(329px * 0.7)',
            xs: 'calc(329px * 0.6)',
          },
          top: '68px',
          right: '5px',
          zIndex: '2'
        }}
      >
        <ImmageHeader path={image3} />
      </Box>
    </Box >
  );
}

export default BlockWithImmages;
