import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const { user, handleDelete, handleEdit } = useAuth();

  const shortDesc = post.body.length > 100 ?
    post.body.slice(0, 150) + "..." :
    post.body;

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">

        {/* CONTENT */}
        <div>
            <h2 className="text-lg font-semibold text-gray-800">
            {post.title}
            </h2>

            <p className="text-gray-600 mt-2">
            {shortDesc}
            </p>
        </div>

        {/* FOOTER (Author + Actions aligned) */}
        <div className="flex justify-between items-center mt-4 pt-3 border-t">
            
            {/* AUTHOR */}
            <p className="text-sm text-gray-500">
            By {post.userName ? post.userName : "Guest User"}
            </p>

            <Link
                to={`/posts/${post.id}`}
                className="text-blue-500 hover:underline inline-block"
            >
                view details →
            </Link>

            {/* ACTIONS */}
            {user && post.userId === user.id && (
            <div className="flex gap-4">
                <button
                onClick={() => handleEdit(post)}
                className="text-blue-500 hover:underline"
                >
                Edit
                </button>

                <button
                onClick={() => handleDelete(post.id)}
                className="text-sm text-red-500 hover:underline"
                >
                Delete
                </button>
            </div>
            )}
        </div>
    </div>
  );
};

export default Post;