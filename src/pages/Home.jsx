import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const {user, handleLogOut} = useAuth();
  
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-16">

      {/* Hero Section */}
      <section className="text-center mt-16 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Manage Your Blog <span className="text-blue-500">Effortlessly</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Create, edit, and organize your posts with a clean and intuitive interface.
          Built for simplicity and productivity.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/posts"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow transition active:scale-95"
          >
            Explore Posts
          </Link>

          {!user ? (
            <Link
              to="/register"
              className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          ) : (
            <button
              onClick={handleLogOut}
              className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Logout
            </button>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 mt-20">
        {[
          {
            title: "Create Posts",
            desc: "Write and publish your content with ease.",
          },
          {
            title: "Search & Filter",
            desc: "Quickly find posts with smart filtering.",
          },
          {
            title: "User Control",
            desc: "Manage your own posts securely.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow 
                      hover:shadow-xl hover:-translate-y-1 
                      transition duration-300"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-50 to-blue-100 p-10 rounded-xl mt-20">
        <h2 className="text-2xl font-semibold text-gray-800">
          Ready to start writing?
        </h2>

        <p className="text-gray-600 mt-2">
          Join now and take control of your content.
        </p>

        <Link
          to="/posts"
          className="inline-block mt-5 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition active:scale-95"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;