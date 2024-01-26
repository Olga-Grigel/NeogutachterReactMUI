import Carousel from 'react-material-ui-carousel'
import logopartner1 from '../../images/logopartner1.svg'
import logopartner2 from '../../images/logopartner2.svg'
import logopartner3 from '../../images/logopartner3.svg'
import logopartner4 from '../../images/logopartner4.svg'
import LogosPartners from '../LogosPartners/LogosPartners'
import { useState } from 'react'


function CarouselLogosPartners() {
    const [logos, setLogos] = useState([])

    var itemq =
        [
            logopartner1,
            logopartner2,
            logopartner3,
            logopartner4,
            logopartner4,
            logopartner3,
            logopartner2,
            logopartner1,
            logopartner2,
            logopartner1,
            logopartner4,
            logopartner3,
        ]

    function split4(items) {
        for (let i = 0; i < itemq.length; i += 4) {
            items.push({
                "img1": itemq[i],
                "img2": itemq[i + 1],
                "img3": itemq[i + 2],
                "img4": itemq[i + 3]
            })
        }
    }

    function split3(items) {
        for (let i = 0; i < itemq.length; i += 3) {
            items.push({
                "img1": itemq[i],
                "img2": itemq[i + 1],
                "img3": itemq[i + 2]
            })
        }
    }
    function split2(items) {
        for (let i = 0; i < itemq.length; i += 2) {
            items.push({
                "img1": itemq[i],
                "img2": itemq[i + 1]
            })
        }
    }
    function split1(items) {
        for (let i = 0; i < itemq.length; i += 1) {
            items.push({
                "img1": itemq[i]
            })
        }
    }

    window.onresize = function (e) {
        let items = []
        if (e.target.innerWidth >= 1075) { split4(items) }
        else {
            if (e.target.innerWidth >= 950) { split3(items) }
            else {
                if (e.target.innerWidth >= 600) { split2(items) }
                else { split1(items) }
            }
        }
        setLogos(items)
    }

    return (
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
                logos.map((item, i) => <LogosPartners key={i} item={item} />)
            }
        </Carousel>
    )
}
export default CarouselLogosPartners