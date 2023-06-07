import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]}
      />
    </div>
  );
}

/**
 * Implementa este carousel de fotos en React. Olvida de CSS
 *
 * 1. Identifica la estructura de la variable 'images'
 * 2. OLVIDA los eventos. ¿Qué variable de estado necesitamos para almacenar cual es la foto que queremos mostrar?
 * 3. Inicializa la variable de estado adecuadamente y modifica el atributo src adecuadamente para que al inicio, veamos la primera foto del array images
 * 4. CAMBIA el valor de la variable de estado y comprueba que puedes visualizar las otras fotos del array
 * 5. SOLO ENTONCES, codifica los eventos. Sugiero empezar por el Click de 'Next'
 */

function Carousel({ images }) {
  function handleImg(e) {
    if (e.target.textContent === "Next") {
      if (currentImg >= images.length - 1) {
        setCurrentImg(0);
        return;
      }

      setCurrentImg(currentImg + 1);
      return;
    }

    if (e.target.textContent === "Prev") {
      if (currentImg === 0) {
        setCurrentImg(images.length - 1);
        return;
      }
      setCurrentImg(currentImg - 1);
      return;
    }
  }

  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div>
      <button onClick={handleImg}>Prev</button>
      <img src={images[currentImg]} alt="person" />
      <button onClick={handleImg}>Next</button>
    </div>
  );
}
