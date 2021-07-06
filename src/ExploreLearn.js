import React from "react";
import SimpleCarousel from "simple-react-carousel";

function ExploreLearn() {
  return (
    <section className="explore-learn">
      <div className="mejo-center">
        <p className="l-text">
          <span className="bold-text">Explore</span> and Learn
        </p>
        <p>
          Choose the subject that you want to learn and really get serious
          about.
        </p>
      </div>
      <SimpleCarousel>
        {carouselItems.map((c, i) => {
          return <CarouselItem key={i} title={c.title} body={c.body} />;
        })}
      </SimpleCarousel>
    </section>
  );
}

const carouselItems = [
  {
    title: "Criminalistics",
    body: "Personal Identification, Police Photography, Forensic Ballistics, Legal Medicine, Questioned Document Examination, Lie Detection Techniques, Forensic Chemistry and Toxicology",
  },
  {
    title: "Criminal Law and Jurisprudence",
    body: "Revised Penal Code (Book 1), Revised Penal Code (Book 2), Human Rights Education, Special Penal Laws, Evidence, Criminal Procedure",
  },
  {
    title: "Criminalistics",
    body: "Personal Identification, Police Photography, Forensic Ballistics, Legal Medicine, Questioned Document Examination, Lie Detection Techniques, Forensic Chemistry and Toxicology",
  },
  {
    title: "Criminal Law and Jurisprudence",
    body: "Revised Penal Code (Book 1), Revised Penal Code (Book 2), Human Rights Education, Special Penal Laws, Evidence, Criminal Procedure",
  },
];

function CarouselItem(props) {
  const { title, body } = props;
  return (
    <div>
      <p>{title}</p>
      <p>{body}</p>
      <button>Show More</button>
    </div>
  );
}

export default ExploreLearn;
