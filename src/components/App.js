// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState("")
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
            setImages(data.message);
            setIsLoading(false)
          });
      }, []);

      if (isLoading) return <h3>Loading...</h3>;
    return(
        <div>
            <img src={images} alt=""/>

        </div>
    );
}

export default App;