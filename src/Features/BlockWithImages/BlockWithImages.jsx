import ImageHeader from '../../components/ImageHeader/ImageHeader.jsx';
import image1 from '../../images/photo1.png';
import image2 from '../../images/photo2.png';
import image3 from '../../images/photo3.png';
import Box from '@mui/material/Box';

function BlockWithImages() {
  return (
    <Box
      sx={{
        pr: {
          xs: '28px',
          mobileL: '16px',
          mobileXS: '0'
        },
        pt: {
          mobileL: '0',
          mobileXS: '46px'
        },
        overflow: {
          mobileL: 'visible',
          mobileXS: 'hidden',
        },
        m: '0',
        width: {
          mobileL: '50%',
          mobileXS: '100vw',
        },
        height: {
          mobileL: 'inherit',
          mobileM: '285px',
          mobileS: '255px',
          mobileXS: '228px'
        },
      }}
    >
      <Box
        sx={{
          m: {
            mobileL: '0',
            mobileXS: '0 auto',
          },
          width: {
            mobileL: '100%',
            mobileM: '500px',
            mobileS: '400px',
            mobileMS: '330px',
            mobileXS: '290px',
          },
          height: '100%',
          position: 'relative'
        }}>
        <Box
          sx={{
            position: 'absolute',
            width: {
              lg: '202px',
              md: 'calc(202px * 0.8)',
              xs: 'calc(202px * 0.7)',
              mobileL: 'calc(202px * 0.6)',
              mobileM: 'calc(202px * 0.7)',
              mobileS: 'calc(202px * 0.6)',
              mobileXS: '106px',
            },
            height: {
              lg: '349px',
              md: 'calc(349px * 0.8)',
              xs: 'calc(349px * 0.7)',
              mobileL: 'calc(349px * 0.6)',
              mobileM: 'calc(349px * 0.7)',
              mobileS: 'calc(349px * 0.6)',
              mobileXS: '182px',
            },
            top: {
              lg: '5px',
              md: '18px',
              mobileL: '',
              mobileM: '13px',
              mobileS: '',
              mobileXS: '0'
            },
            right: {
              lg: '477px',
              md: '370px',
              xs: '330px',
              mobileL: '290px',
              mobileM: '340px',
              mobileS: '280px',
              mobileMS: '226px',
              mobileXS: '207px',
            },
            zIndex: '3'
          }}
        >
          <ImageHeader path={image1} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: {
              lg: '248px',
              md: 'calc(248px * 0.8)',
              xs: 'calc(248px * 0.7)',
              mobileL: 'calc(248px * 0.6)',
              mobileM: 'calc(248px * 0.7)',
              mobileS: 'calc(248px * 0.6)',
              mobileXS: '129px',
            },
            height: {
              lg: '428px',
              md: 'calc(428px * 0.8)',
              xs: 'calc(428px * 0.7)',
              mobileL: 'calc(428px * 0.6)',
              mobileM: 'calc(428px * 0.7)',
              mobileS: 'calc(428px * 0.6)',
              mobileXS: '223px',
            },
            top: {
              lg: '155px',
              md: '140px',
              mobileL: '120px',
              mobileMS: '77px',
              mobileXS: '76px'
            },
            right: {
              lg: '230px',
              md: '180px',
              xs: '160px',
              mobileL: '145px',
              mobileM: '160px',
              mobileS: '125px',
              mobileMS: '102px',
              mobileXS: '80px'
            },
            zIndex: '3'
          }}
        >
          <ImageHeader path={image2} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: {
              lg: '215px',
              md: 'calc(215px * 0.8)',
              xs: 'calc(215px * 0.7)',
              mobileL: 'calc(215px * 0.6)',
              mobileM: 'calc(215px * 0.7)',
              mobileS: 'calc(215px * 0.6)',
              mobileXS: '112px',
            },
            height: {
              lg: '329px',
              md: 'calc(329px * 0.8)',
              xs: 'calc(329px * 0.7)',
              mobileL: 'calc(329px * 0.6)',
              mobileM: 'calc(329px * 0.7)',
              mobileS: 'calc(329px * 0.6)',
              mobileXS: '172px',
            },
            top: {
              mobileL: '70px',
              mobileXS: '33px',
            },
            right: {
              mobileM: '25px',
              mobileS: '10px',
              mobileMS: '0px',
              mobileXS: '-25px',
            },
            zIndex: '2'
          }}
        >
          <ImageHeader path={image3} />
        </Box>
      </Box>
    </Box >
  );
}

export default BlockWithImages;
