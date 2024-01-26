import './App.css';
import ScreenWithHeader from '../../Features/ScreenWithHeader/ScreenWithHeader.jsx';
import ScreenWithReviews from '../../Features/ScreenWithReviews/ScreenWithReviews.jsx';
import ScreenWithReviewsMobile from '../../Features/ScreenWithReviewsMobile/ScreenWithReviewsMobile.jsx';
import ScreenWithCarousel from '../../Features/ScreenWithCarousel/ScreenWithCarousel.jsx'

// function App() {
//   return <Button variant="contained">Hello world</Button>;
// }

function App() {
  return (
    <div>
      <ScreenWithHeader />
      <ScreenWithReviews />
      <ScreenWithReviewsMobile />
      <ScreenWithCarousel />
    </div>

  );
}

export default App;
