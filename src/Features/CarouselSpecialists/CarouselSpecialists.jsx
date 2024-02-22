import Box from '@mui/material/Box';
import { useState } from 'react';
import CardSpecialists from '../../Features/CardsSpecialists/CardsSpecialists';
import './CarouselSpecialists.css';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';

const SCROLL_WIDTH = 266 + 28

function CarouselSpecialists({ arraySpecialists }) {

    const [offset, setOffset] = useState(0);

    const handleLeftArrowClick = () => {
        setOffset((curentOffset) => {
            const newOffset = curentOffset + SCROLL_WIDTH
            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () => {
        setOffset((curentOffset) => {
            const newOffset = curentOffset - SCROLL_WIDTH
            const maxOffset = -(SCROLL_WIDTH * (arraySpecialists.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    return (
        <Box className='specialist-main-container'>
            <Box className='specialist-window'>
                <Box className='specialist-all-pages-container'
                    sx={{
                        transform: `translateX(${offset}px)`,
                    }}>
                    {
                        arraySpecialists.map((article, personIndex) => { return (<CardSpecialists key={personIndex} company={article.company} address={article.address} className={'specialist-dimensions'} />) })
                    }
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                mr: '20px',
                mt: '43px',
                pb: {
                    mobileL: '0',
                    mobileXS: '60px',
                }
            }}>
                <button onClick={handleLeftArrowClick} className='specialist-button'>
                    <img src={arrowLeft} alt='arrowLeft' />
                </button>
                <button onClick={handleRightArrowClick} className='specialist-button'>
                    <img src={arrowRight} alt='arrowRight' />
                </button>
            </Box>

        </Box>
    );

}

export default CarouselSpecialists;