import { useState, useEffect } from "react";
import style from "./Composant_dest_pop.module.css";
import img_fleche_gauche from "./icone/contour-du-bouton-circulaire-fleche-arriere-gauche.png";
import img_fleche_droite from "./icone/contour-du-bouton-circulaire-fleche-droite.png";

function Composant_dest_pop() {
  {
    /* Tableaux des Items */
  }
  const destinations = [
    { id: 1, name: "Seychelles", itemClass: style.item1 },
    { id: 2, name: "Islande", itemClass: style.item2 },
    { id: 3, name: "Nouvelle-Zélande", itemClass: style.item3 },
    { id: 4, name: "Nambie", itemClass: style.item4 },
    { id: 5, name: "Italie", itemClass: style.item5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  {
    /* Reprise de la position initiale des Items une fois la taille de la fenêtre dépassant 1120px*/
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1120) {
        setCurrentIndex(0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  {
    /*Déclaration des fonctions précédant et suivant parcourant les Items de l'objet destinations */
  }
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === destinations.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <>
      <div className={style.mainWrapper}>
        <div className={style.carouselContainer}>
          <div className={style.headerSection}>
            <h1 className={style.mainTitle}>Nos destination populaires</h1>
            <button className={style.ctaButton}>M'inspirer davantage</button>
          </div>

          <button
            onClick={handlePrev}
            className={`${style.navButton} ${style.prevButton}`}
          >
            <img
              src={img_fleche_gauche}
              alt="fleche de gauche"
              className={style.arrowIcon}
            />
          </button>

          <div className={style.innerContainer}>
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className={`${style.cardItem} ${dest.itemClass}`}
                style={{
                  transform: `translateX(-${currentIndex * 80}%)`,
                  transition: "0.5s ease",
                }}
              >
                <div className={style.cardContent}>
                  <h1 className={style.cardTitle}>
                    <span className={style.idBadge}>{dest.id}</span> ♠
                  </h1>
                  <p className={style.cardLabel}>{dest.name} →</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className={`${style.navButton} ${style.nextButton}`}
          >
            <img
              src={img_fleche_droite}
              alt="fleche de droite"
              className={style.arrowIcon}
            />
          </button>
        </div>
      </div>
    </>
  );
}
export default Composant_dest_pop;
