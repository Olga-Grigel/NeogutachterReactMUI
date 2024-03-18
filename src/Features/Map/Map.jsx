
// import Mappin from "../../components/Mappin/Mappin"
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import mappin from "../../images/Mappin.png"

export default function App() {
  const defaultState = {
    center: [	50.9333, 6.95],
    zoom: 12.25,
    controls: ["zoomControl", "fullscreenControl"],
  };

  return (
    <YMaps query={{ lang: 'en_US' }}>
      <Map
      width="100vw"
      height="586px"
      defaultState={defaultState}
      modules={["control.ZoomControl", "control.FullscreenControl"]}>
        <Placemark 
        geometry={[50.9333, 6.95]}
        // options={{
        //   iconLayout: 'default#image',
        //   iconImageHref: "../../images/Mappin.png",
        //   iconImageSize: [30, 42],
        // }}
        />
      </Map>
    </YMaps>
  );
}
