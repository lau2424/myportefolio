import '../Styles/Profil.scss';
import css from '../Images/css.png';
import html from '../Images/html.png';
import js from '../Images/js.png';
import react from '../Images/react.png';
import ruby from '../Images/ruby.png';
import sql from '../Images/mysql.png';
import 'animate.css';

export default function Profil() {
  return (
    <div className="profil-container">
        <div className="profil-title"><h1>LAURENT</h1> <h1>LARFA</h1></div>
      <div className="profil-box-title">
        <div className="profil-description">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam dolor dignissimos veniam cupiditate nisi recusandae tempore ratione, eaque possimus non, voluptatem asperiores voluptates mollitia sunt. Similique, eveniet repellendus dicta harum quam ipsum cumque sit cupiditate laudantium explicabo unde consectetur! Omnis quas similique sed delectus nulla!</p>
        </div>
      </div>
        <ul className="animate__heartBeat">
          <li><img src={react} alt="React" /></li>
          <li><img src={ruby} alt="Ruby" /></li>
          <li><img src={sql} alt="My SQL" /></li>
          <li><img src={js} alt="Javascript" /></li>
          <li><img src={html} alt="HTML" /></li>
          <li><img src={css} alt="CSS" /></li>
        </ul>


      <div className="profil-center"></div>
    </div>
    )
  }
