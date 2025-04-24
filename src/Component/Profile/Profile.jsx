import { useContext, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      setMessage("Profile updated successfully!");
      window.location.reload(); // Refresh to reflect changes in UI (optional)
    } catch (error) {
      setMessage("Error updating profile: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
      <img
        src={user.photoURL}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <p className="text-center text-sm mb-2">Email: {user.email}</p>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium text-sm">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium text-sm">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Save Changes
        </button>
      </form>

      {message && <p className="text-center text-green-600 mt-4">{message}</p>}
    </div>
  );
};

export default Profile;
