import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={
          <PrivateRoute>
            <Posts />
          </PrivateRoute>
        }/>
        <Route path="about" element={<About />} />
        <Route path="login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path="register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        <Route path="/posts/:id" element={<PostDetails/>} />
      </Route>
    </Routes>
  );
}

export default App;