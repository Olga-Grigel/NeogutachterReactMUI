// import Mappin from "../../components/Mappin/Mappin"
import {
    YMaps,
    Map,
    Placemark,
    FullscreenControl,
} from '@pbe/react-yandex-maps'
import mappin from '../../images/Mappin.png'
import Box from '@mui/material/Box'

export default function App() {
    const defaultState = {
        center: [50.9333, 6.95],
        zoom: 12.25,
        controls: ['zoomControl', 'fullscreenControl'],
    }

    return (
        <Box>
            <Box></Box>
            <YMaps query={{ lang: 'en_US' }}>
                <Map
                    width="100vw"
                    height="586px"
                    defaultState={defaultState}
                    modules={[
                        'control.ZoomControl',
                        'control.FullscreenControl',
                    ]}
                >
                    {/* с помощью FullscreenControl я хочу поменять кнопку полноэкранного размера карты, но пока не нашла как это сделать*/}
                    <FullscreenControl />
                    {/* с помощью Placemark я хочу поменять маркер, делаю как в примерах, но маркер не отражается*/}
                    <Placemark
                        geometry={[50.9333, 6.95]}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: '../../images/Mappin.png',
                            iconImageSize: [30, 42],
                            iconImageOffset: [-3, -42],
                        }}
                    />
                </Map>
            </YMaps>
        </Box>
    )
}
