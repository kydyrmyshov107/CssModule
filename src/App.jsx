import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import Header from "./header/Header";
import { Container } from "react-bootstrap";
import Main from "./components/main/Main";

const data = [
  {
    id: 1,
    img: "https://images.moviesanywhere.com/e9bface2d525948199c3f93d34e99f48/57b87c46-7c77-4adf-b423-2830e627684f.jpg",
    name: "WHY Him",
    nameG: "Комедии",
  },

  {
    id: 2,
    img: "https://www.bluedogposters.com.au/cdn/shop/products/PP34925_1400x.jpg?v=1674016516",
    name: "HARRY POTTER",
    nameG: "Фантастика",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
    name: "MARVEL",
    nameG: "Фантастика",
  },

  {
    id: 4,
    img: "https://images.moviesanywhere.com/86719fa50148888e6971d1ef0b0bee7f/0b802f07-4fb8-4f7e-85e5-602d79740483.jpg",
    name: "Furious 7",
    nameG: "Боевики",
  },

  {
    id: 5,
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12114919_p_v8_aa.jpg",
    name: "SINESTOR",
    nameG: "Ужасы",
  },
  {
    id: 6,
    img: "https://viva.ua/storage/shares/01_01_2021/6001e6ec1ee85.jpg",
    name: "JUMANJI",
    nameG: "Комедии",
  },
  {
    id: 7,
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/733a169d-feb2-441b-863c-12c603bd4aba/600x900",
    name: "ATTACK WHITE HOUSE",
    nameG: "Боевики",
  },
  {
    id: 8,
    img: "https://api.start.ru/images/unsafe/630x900/filters:quality(70):watermark(18.png,15,-0,0,15,15)/f25263af20204d2eb2f2d3ac8436eecc/vertical_15x?w=384&q=75",
    name: "СПУТНИК ",
    nameG: "Ужасы",
  },
];

function App() {
  const [todo, setTodo] = useState(data);

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <Main todo={todo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
