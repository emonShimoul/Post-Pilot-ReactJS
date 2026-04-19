import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const {user, handleLogOut} = useAuth();
  
  return (
    <div className="space-y-16">

      {/* 🔥 Hero Section */}
      <section className="text-center mt-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          PostPilot 🚀
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          A simple and powerful platform to manage your posts efficiently.
          Create, search, and organize your content in one place.
        </p>

        <div className="space-x-3">
          <Link
            to="/posts"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow"
          >
            Explore Posts
          </Link>

          {!user ? <Link
            to="/login"
            className="border px-6 py-2 rounded hover:bg-gray-100"
          >
            Login
          </Link> :
          <button className="border px-6 py-2 rounded hover:bg-gray-100" onClick={()=>handleLogOut()}>
            LogOut
          </button>
          }
        </div>
      </section>

      {/* ⭐ Features Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-5 bg-white rounded-xl shadow">
          <h3 className="font-semibold text-lg">Create Posts</h3>
          <p className="text-gray-600 mt-2">
            Easily add and manage your posts in real-time.
          </p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow">
          <h3 className="font-semibold text-lg">Search & Filter</h3>
          <p className="text-gray-600 mt-2">
            Quickly find posts using smart search functionality.
          </p>
        </div>

        <div className="p-5 bg-white rounded-xl shadow">
          <h3 className="font-semibold text-lg">Clean UI</h3>
          <p className="text-gray-600 mt-2">
            Minimal and user-friendly design for better experience.
          </p>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section className="text-center bg-blue-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-800">
          Ready to manage your posts?
        </h2>

        <p className="text-gray-600 mt-2">
          Start exploring and organizing your content now.
        </p>

        <Link
          to="/posts"
          className="inline-block mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
};

export default Home;