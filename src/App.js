// // src/App.js

// import React, { useEffect, useState } from "react";
// import axios from "axios"; // axios import 합니다.

// const App = () => {
//   const [todos, setTodos] = useState(null);
//   const [todo, setTodo] = useState({ title: "" });

//   const onSubmitHandler = async todo => {
//     axios.post("http://localhost:3001/todos", todo);
//     setTodos(todo);
//   };

//   // axios를 통해서 get 요청을 하는 함수를 생성합니다.
//   // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
//   const fetchTodos = async () => {
//     // json server 의 todos를 가져와서 setTodos에 data를 넣겠다.
//     const { data } = await axios.get("http://localhost:3001/todos");
//     setTodos(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
//   };

//   // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.

//   useEffect(() => {
//     // effect 구문에 생성한 함수를 넣어 실행합니다.
//     // axios 의 GET method를 이용해 3001번의 todos json server에 있는 값을 불러오고 있다.
//     fetchTodos();
//   }, []);

//   // data fetching이 정상적으로 되었는지 콘솔을 통해 확인합니다.
//   console.log(todos); // App.js:16
//   console.log(todo); // App.js:16
//   return (
//     <>
//       <form
//         onSubmit={e => {
//           e.preventDefault();
//           onSubmitHandler(todo);
//         }}
//       >
//         <input
//           type="text"
//           onChange={ev => {
//             const { value } = ev.target;
//             setTodo({
//               ...todo,
//               title: value,
//             });
//           }}
//         ></input>
//         <button>추가하기</button>
//       </form>
//       <div>
//         {todos?.map(todo => (
//           <div key={todo.id}>{todo.title}</div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;

// src/App.js

import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.

const App = () => {
  const fetchMoviesHandler = () => {
    fetch(
      "https://react-http-2f295-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
    )
      .catch(console.error("err"))
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };
  // const fetchMoviesHandler = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://react-http-2f295-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // async function addMovieHandler(movie) {
  //   const response = await fetch(
  //     "https://react-http-2f295-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(movie),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   // const data = await response.json();
  // }
  // console.log(todos); // App.js:16
  // console.log(todo); // App.js:16
  return <div></div>;
};

export default App;
