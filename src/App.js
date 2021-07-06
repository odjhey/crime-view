import "./App.css";
import ExploreLearn from "./ExploreLearn";

function App() {
  return (
    <div className="container">
      <section className="nav">
        <ul>
          <li>
            <a href="#home">logo</a>
          </li>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#courses">courses</a>
          </li>
          <li>
            <a href="#pricings">pricing</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#singup">signup</a>
          </li>
          <li>
            <a href="#login">login</a>
          </li>
        </ul>
      </section>
      <section className="hero light-fcolor center-text">
        <p className="xl-text bold-text">
          A Better Learning Future Starts Here.
        </p>
        <p className="m-text">Mastery Within Your Reach.</p>
        <button>Start Now</button>
      </section>

      <ExploreLearn></ExploreLearn>

      <section className="educators-container">
        <div className="educators-title center-text">
          <p className="l-text bold-text">Our Educators</p>
          <p>Reliable resources from our top notch pool of instructors.</p>
        </div>
        <div className="educators">
          {educators.map((e, i) => {
            return (
              <Educator
                key={i}
                idx={i}
                name={e.name}
                dept={e.dept}
                role={e.role}
              />
            );
          })}
        </div>
      </section>
      <section className="motto light-fcolor center-text">
        <p className="xxl-text bold-text">Technological Advancements</p>
        <p className="l-text">for the field of Criminology</p>
        <p>
          We are committed in equipping the aspiring criminologists with
          convenient, concise, and beneficial learning resources to help them
          pass, or, even top the Criminologists Licensure Examination (CLE).
        </p>
      </section>

      <section className="partnerships center-text">
        <p className="l-text bold-text">Partnerships</p>
        <p>Pioneering adopters of our innovative solutions.</p>
        <ul>
          <li>UC Innovation and Nurturing Space</li>
          <li>We serve and Protect</li>
          <li>Professional Criminologists Association of the Philippines</li>
          <li>Ifugao State University</li>
          <li>Phil CSI</li>
        </ul>
      </section>

      <section className="footer light-fcolor">
        <div>
          <p className="s-text">About Us</p>
          <ul>
            <li>
              <a href="#home">Team</a>
            </li>
            <li>
              <a href="#home">Company</a>
            </li>
            <li>
              <a href="#home">Contact Us</a>
            </li>
            <li>
              <a href="#home">Privacy Policy</a>
            </li>
            <li>
              <a href="#home">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="s-text">Services</p>
          <ul>
            <li>
              <a href="#home">Pricing</a>
            </li>
            <li>
              <a href="#home">Courses</a>
            </li>
            <li>
              <a href="#home">Educators</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="copyright">
        <p className="light-fcolor xs-text">
          Crimview 2020 © All rights reserved
        </p>
      </section>
    </div>
  );
}

const educators = [
  {
    name: "Atty Reyes",
    role: "Dean, University Of The Cordilleras - College Of Criminal Justice Education",
    dept: "PhD. Criminology, University of the Cordilleras",
  },
  {
    name: "Dr. Ariel Nimo",
    role: "Vice President For Academics And Research, University Of The Cordilleras",
    dept: "PhD. Criminology, University of the Cordilleras",
  },
  {
    name: "Atty Reyes",
    role: "Dean, University Of The Cordilleras - College Of Criminal Justice Education",
    dept: "PhD. Criminology, University of the Cordilleras",
  },
  {
    name: "Dr. Christian Pascual",
    role: "Director, Institute For Innovative Learning And International Cooperation",
    dept: "PhD. Criminology, University of Baguio",
  },
  {
    name: "Ms. Leah Donato",
    role: "Faculty, University Of The Cordilleras - College Of Criminal Justice Education​",
    dept: "PhD. Criminology, University of the Cordilleras",
  },
  {
    name: "Dr. Robino Cawi",
    role: "Regional Director, Professional Criminologists Association Of The Philippines, Cordillera",
    dept: "PhD. Criminology, University of the Cordilleras",
  },
];

function Educator(props) {
  const { name, role, dept, idx } = props;
  const left = idx % 2;
  return (
    <div className={`center-text ${left === 0 ? "left" : "right"}`}>
      <p className="l-text bold-text">{name}</p>
      <p>{role}</p>
      <p>{dept}</p>
    </div>
  );
}

export default App;
