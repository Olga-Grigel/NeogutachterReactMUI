import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Home from '@mui/icons-material/Home';
import CardTicker from '../CardTicker/CardTicker';
import logopartner1 from '../../images/logopartner1.svg';
import logopartner2 from '../../images/logopartner2.svg'
import logopartner3 from '../../images/logopartner3.svg'
import logopartner4 from '../../images/logopartner4.svg'



function Example(props) {
    var items = [
        {
            img1: logopartner1,
            img2: logopartner2,
            img3: logopartner3,
            img4: logopartner4,
        },
        {
            img1: logopartner1,
            img2: logopartner2,
            img3: logopartner3,
            img4: logopartner4,
        },
        {
            img1: logopartner1,
            img2: logopartner2,
            img3: logopartner3,
            img4: logopartner4,
        }
    ]

    return (
        <Carousel
            IndicatorIcon={<Home />}
            indicatorIconButtonProps={{
                style: {
                    Padding: '10px',     // 1 
                    color: 'blue'        // 3 
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    backgroundColor: 'red'  // 2 
                }
            }}
            indicatorContainerProps={{
                style: {
                    marginTop: '50px',  // 5 
                }

            }}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '9.72vw',
                alignItems: 'center'
            }}>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p> */}
            <Box
                sx={{

                }}>
                <img src={props.item.img1} alt='logopartner' />
                <img src={props.item.img2} alt='logopartner' />
                <img src={props.item.img3} alt='logopartner' />
                <img src={props.item.img4} alt='logopartner' />
            </Box>
        </Paper>
    )
}

export default Example