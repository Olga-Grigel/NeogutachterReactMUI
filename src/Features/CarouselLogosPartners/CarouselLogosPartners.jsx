import Carousel from 'react-material-ui-carousel'
import logopartner1 from '../../images/logopartner1.svg'
import logopartner2 from '../../images/logopartner2.svg'
import logopartner3 from '../../images/logopartner3.svg'
import logopartner4 from '../../images/logopartner4.svg'
import LogosPartners from '../LogosPartners/LogosPartners'



function CarouselLogosPartners(props) {
    var items = [
        {
            img1: logopartner1,
            img2: logopartner2,
            img3: logopartner3,
            img4: logopartner4,
        },
        {
            img1: logopartner4,
            img2: logopartner3,
            img3: logopartner2,
            img4: logopartner1,
        },
        {
            img1: logopartner3,
            img2: logopartner4,
            img3: logopartner1,
            img4: logopartner2,
        }
    ]

    return (
        <Carousel
            indicatorIconButtonProps={{
                style: {
                    color: '#E0E0E0',
                    width: '0.555vw',
                    height: '0.555vw',
                    padding: '0.555vw'
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: '#545454'
                }
            }}
            indicatorContainerProps={{
                style: {
                    marginTop: '50px',
                }

            }}
        >
            {
                items.map((item, i) => <LogosPartners key={i} item={item} />)
            }
        </Carousel>
    )
}
export default CarouselLogosPartners