import { VscBug,VscGlobe } from "react-icons/vsc";


export const Posts = () => {
  return (
    <button
      onClick={() => {
        alert("Obteniendo Datos");
        fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
          response.json())
          .then(data=>console.log(data))
          .catch(error=>console.log(error))
      }}
    ><VscGlobe/>
      Traer Datos
    </button>
  );
};
