import Box from '@mui/material/Box';
import CardArticle from '../../components/CardArticle/CardArticle';
import { Typography } from '@mui/material';
import CarouselBlog from '../../Features/CarouselBlog/CarouselBlog';
import './ScreenWithBlog.css';
import { articles } from '../../utils/constants'

function ScreenWithBlog() {

    function renderCardArticle() {
        articles.forEach((article) => {
            <CardArticle text={article.title} />;
        });

    }
    renderCardArticle()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: {
                    mobileMS: '2.85vw 10.14vw 5vw',
                    mobileXS: '15.93vw 5.71vw 15.93vw'
                }
            }}
        >
            <Typography sx={{
                letterSpacing: {
                    mobileL: 'normal',
                    mobileXS: '-0.48px'
                },
                textWrap: 'wrap',
                color: '#393939',
                fontFamily: "Lexend Deca",
                fontSize: {
                    mobileL: '2.78vw',
                    mobileMS: '4.5vw',
                    mobileXS: '5.57vw'
                },
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: {
                    mobileMS: '3.89vw',
                    mobileXS: '8.49vw'
                },
                mb: {
                    mobileMS: '50px',
                    mobileXS: '25px'
                }
            }}>
                Artikel zum Thema Gutachter
            </Typography>
            <Box sx={{
                height: '100%',
                position: 'relative',
                width: '100%',
                display: {
                    mobileL: 'none',
                    mobileXS: 'block'
                },
            }}>
                <CarouselBlog />
            </Box>
            <Box sx={{
                display: {
                    mobileL: 'grid',
                    mobileXS: 'none'
                },
                gridTemplateColumns: 'repeat(2, 38.89vw)',
                gap: '1.94vw',
                justifyItems: 'center',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
            }
            } >

                {
                    articles.map((article, personIndex) => { return (<CardArticle key={personIndex} text={article.title} />) })
                }

            </Box>
        </Box >
    );
}

export default ScreenWithBlog;