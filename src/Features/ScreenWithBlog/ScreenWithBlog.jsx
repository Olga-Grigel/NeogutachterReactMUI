import Box from '@mui/material/Box';
import CardArticle from '../../components/CardArticle/CardArticle';
import { Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

function ScreenWithBlog() {
    var articles =
        [
            { title: 'Prämienzuschlag Kfz-Versicherung – Wichtige Infos zum Thema!' },
            { title: 'Prämienzuschlag Kfz-Versicherung – Wichtige Infos zum Thema!' },
            { title: 'Prämienzuschlag Kfz-Versicherung – Wichtige Infos zum Thema!' },
            { title: 'Prämienzuschlag Kfz-Versicherung – Wichtige Infos zum Thema!' },
        ]
    function renderCardArticle() {
        articles.forEach((article, index) => {
            <CardArticle text={article.title} />;
            console.log(<CardArticle text={article.title} />)
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
                letterSpacing: 'normal',
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
            <Box>
                <Carousel
                    indicatorIconButtonProps={{
                        style: {
                            color: '#E0E0E0',
                            width: '1.3vw',
                            padding: '8px'
                        }
                    }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            color: '#545454'
                        }
                    }}
                    indicatorContainerProps={{
                        style: {
                            marginTop: '2.55vw',
                        }
                    }}
                >
                    {
                        articles.map((article, i) => <CardArticle key={i} text={article} />)
                    }
                </Carousel>
            </Box>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 38.89vw)',
                gap: '1.94vw',
                justifyItems: 'center',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
            }
            } >

                {
                    articles.map((article) => (
                        <CardArticle text={article.title} />
                    ))
                }

            </Box>
        </Box >
    );
}

export default ScreenWithBlog;