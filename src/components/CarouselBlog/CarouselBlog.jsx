import Box from '@mui/material/Box';
import { useState } from 'react';
import CardArticle from '../../components/CardArticle/CardArticle';
import './CarouselBlog.css';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import { useRef } from 'react';
import articles from '../../utils/constants'


function CarouselBlog() {

    const [article, setArticles] = useState(articles);
    const [offset, setOffset] = useState(0);
    const divBlock = useRef(null);

    const handleLeftArrowClick = () => {
        setOffset((curentOffset) => {
            const newOffset = curentOffset + divBlock.current.getBoundingClientRect().width
            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () => {
        setOffset((curentOffset) => {
            const widthBlockWindow = divBlock.current.getBoundingClientRect().width
            const newOffset = curentOffset - widthBlockWindow
            const maxOffset = -(widthBlockWindow * (article.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    return (
        <Box className='main-container'>
            <Box ref={divBlock} className='window'>
                <Box className='all-pages-container'
                    sx={{
                        transform: `translateX(${offset}px)`,
                    }}>
                    {
                        article.map((article, personIndex) => { return (<CardArticle key={personIndex} text={article.title} className={'dimensions'} />) })
                    }
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                mt: '25px'
            }}>
                <button onClick={handleLeftArrowClick} className='button-blog'>
                    <img src={arrowLeft} alt='arrowLeft' />
                </button>
                <button onClick={handleRightArrowClick} className='button-blog'>
                    <img src={arrowRight} alt='arrowRight' />
                </button>
            </Box>

        </Box>
    );

}

export default CarouselBlog;