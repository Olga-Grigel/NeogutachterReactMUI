import './App.css';
import ScreenWithHeader from '../../Features/ScreenWithHeader/ScreenWithHeader.jsx';
import ScreenWithReviews from '../../Features/ScreenWithReviews/ScreenWithReviews.jsx';
import ScreenWithReviewsMobile from '../../Features/ScreenWithReviewsMobile/ScreenWithReviewsMobile.jsx';
import ScreenWithCarousel from '../../Features/ScreenWithCarousel/ScreenWithCarousel.jsx';
import ScreenWithPhone from '../../Features/ScreenWithPhone/ScreenWithPhone.jsx';
import ScreenBecomePartner from '../../Features/ScreenBecomePartner/ScreenBecomePartner.jsx';
import ScreenWithFAQ from '../../Features/ScreenWithFAQ/ScreenWithFAQ.jsx'

function App() {
  return (
    <div>
      {/* <ScreenWithHeader />
      <ScreenWithReviews />
      <ScreenWithReviewsMobile />
      <ScreenWithCarousel />
      <ScreenWithPhone />
      <ScreenBecomePartner /> */}
      <ScreenWithFAQ />
    </div>

  );
}

export default App;
