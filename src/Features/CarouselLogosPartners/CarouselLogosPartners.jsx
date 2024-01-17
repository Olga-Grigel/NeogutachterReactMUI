import Carousel from 'react-material-ui-carousel'
import logopartner1 from '../../images/logopartner1.svg'
import logopartner2 from '../../images/logopartner2.svg'
import logopartner3 from '../../images/logopartner3.svg'
import logopartner4 from '../../images/logopartner4.svg'
import LogosPartners from '../LogosPartners/LogosPartners'


function CarouselLogosPartners() {

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
        ]
    var items = [];
    for (let i = 0; i < itemq.length; i += 4) {
        items.push({
            "img1": itemq[i],
            "img2": itemq[i + 1],
            "img3": itemq[i + 2],
            "img4": itemq[i + 3],
        })
    }

    //Это мои попытки (закомментированные), но ничего пока ен получилось

    // function countLogo(quantity) {
    //     for (let i = 0; i < itemq.length; i += quantity) {
    //         for (let a = 1; a <= quantity; a += 1) {
    //             items.push({
    //                 a: itemq[i + (a - 1)],
    //             })
    //         }
    //     }
    // }
    // countLogo(4);
    // console.log(items);

    // window.onresize = function (e) {
    //     if (e.target.outerWidth >= 1075) {
    //         for (let i = 0; i < itemq.length; i += 4) {
    //             items.push({
    //                 "img1": itemq[i],
    //                 "img2": itemq[i + 1],
    //                 "img3": itemq[i + 2],
    //                 "img4": itemq[i + 3],
    //             })
    //         }
    //     } else {
    //         for (let i = 0; i < itemq.length; i += 2) {
    //             items.push({
    //                 "img1": itemq[i],
    //                 "img2": itemq[i + 1],
    //             })
    //         }
    //     }
    // }


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
                    marginTop: '2.9vw',
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