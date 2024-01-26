import './App.css';
import ScreenWithHeader from '../../Features/ScreenWithHeader/ScreenWithHeader.jsx';
import Reviews from '../../Features/Reviews/Reviews.jsx';
import ReviewsMobile from '../../Features/ReviewsMobile/ReviewsMobile.jsx';
import ScreenWithCarousel from '../../Features/ScreenWithCarousel/ScreenWithCarousel.jsx'

// function App() {
//   return <Button variant="contained">Hello world</Button>;
// }

function App() {
  return (
    <div>
      <ScreenWithHeader />
      <Reviews />
      <ReviewsMobile />
      <ScreenWithCarousel />
    </div>

  );
}

export default App;
