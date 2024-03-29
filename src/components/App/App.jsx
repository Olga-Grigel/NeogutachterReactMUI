import './App.css';
import ScreenWithHeader from '../../Features/ScreenWithHeader/ScreenWithHeader.jsx';
import ScreenWithReviews from '../../Features/ScreenWithReviews/ScreenWithReviews.jsx';
import ScreenWithReviewsMobile from '../../Features/ScreenWithReviewsMobile/ScreenWithReviewsMobile.jsx';
import ScreenWithCarousel from '../../Features/ScreenWithCarousel/ScreenWithCarousel.jsx';
import ScreenWithPhone from '../../Features/ScreenWithPhone/ScreenWithPhone.jsx';
import ScreenBecomePartner from '../../Features/ScreenBecomePartner/ScreenBecomePartner.jsx';
import ScreenWithFAQ from '../../Features/ScreenWithFAQ/ScreenWithFAQ.jsx';
import ScreenWithBlog from '../../Features/ScreenWithBlog/ScreenWithBlog.jsx';
import ScreenWithSelectionOfSpecialists from '../../Features/ScreenWithSelectionOfSpecialists/ScreenWithSelectionOfSpecialists.jsx';
import ScreenWithFooter from '../../Features/ScreenWithFooter/ScreenWithFooter.jsx'

function App() {
  return (
    <div>
      <ScreenWithHeader />
      <ScreenWithReviews />
      <ScreenWithReviewsMobile />
      <ScreenWithCarousel />
      <ScreenWithSelectionOfSpecialists />
      <ScreenWithPhone />
      <ScreenBecomePartner />
      <ScreenWithFAQ />
      <ScreenWithBlog />
      <ScreenWithFooter />
    </div>

  );
}

export default App;
