import './App.scss';
import Navbar from './Composants/Pages/Navbar';
import Profil from './Composants/Pages/Profil';

function App() {
  var resizeTimer;
  var resizeThreshold = 1000;

  window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth < 720) {
          alert("Oui, mon site est responsive !");
        }
      }, resizeThreshold);
    });
  return (

    <div>
      <Navbar />
      <Profil />


  </div>


  );
}

export default App;
