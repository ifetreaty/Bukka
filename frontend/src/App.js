// // import { Outlet, Link } from "react-router-dom";

// // export default function App() {
// //   return (
// //         <div className="App">
// //     <Routes>
// //       <Route exact path="/">
// //         {
// //           user && user._id ? <Homepage/>:<Login/>
// //         }<Homepage/></Route>
// //       {/* <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route> */}
// //       <Route path="/" element={<Homepage />} />
// //       {/* <Route path="/Register"><Register/></Route> */}
// //       <Route path="/Login" element={<Login />} />
// //       <Route path="/Register" element={<Register />} />
// //     </Routes>
    
// //         </div>
// //       );
// //     }

// import './App.css';
// import Homepage from "./components/homepage/Homepage"
// import Login from "./components/login/Login"
// import Register from "./components/register/Register"
// import { Routes, Route, Link } from "react-router-dom";
// import {useState} from 'react';
// function App() {
//   const [user,setLoginUser] = useState({

//   })
//   return (
//     <div className="App">
// <Routes>
//   <Route exact path="/">
//     {
//       user && user._id ? <Homepage/>:<Login/>
//     }<Homepage/></Route>
//   {/* <Route path="/Login"><Login setLoginUser={setLoginUser}/></Route> */}
//   <Route path="/" element={<Homepage />} />
//   {/* <Route path="/Register"><Register/></Route> */}
//   <Route path="/Login" element={<Login />} />
//   <Route path="/Register" element={<Register />} />
// </Routes>

//     </div>
//   );
// }

// export default App;

import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/register">Create Account</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  );
}