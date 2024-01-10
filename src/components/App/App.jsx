import './App.css';
import FirstScreen from '../../Features/FirstScreen/FirstScreen.jsx';
import Reviews from '../../Features/Reviews/Reviews.jsx';
import ThirdScreen from '../../Features/ThirdScreen/ThirdScreen.jsx'

// function App() {
//   return <Button variant="contained">Hello world</Button>;
// }

function App() {
  return (
    <div>
      <FirstScreen />
      <Reviews />
      <ThirdScreen />
    </div>

  );
}

export default App;
