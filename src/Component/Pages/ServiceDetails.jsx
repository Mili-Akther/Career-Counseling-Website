import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";
import { AuthContext } from "../../Provider/AuthProvider";

const ServiceDetails = () => {
  const {
    image,
    name,
    category,
    price,
    counselor,
    description,
    duration,
    rating,
  } = useLoaderData();

  const { user } = useContext(AuthContext);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = () => {
    if (comment.trim() === "") return;

    const newComment = {
      text: comment,
      user: user?.displayName || "Anonymous",
      photo: user?.photoURL,
    };

    setComments([...comments, newComment]);
    setComment("");
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#000000] to-[#797979] text-white flex flex-col justify-center items-center px-6 py-16">
      {/* Title */}
      <div className="text-center mb-16 ">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight -mt-42">
          Personalized <br />
          <span className="text-cyan-300">Career Guidance</span>
        </h1>
        <p className="mt-6 max-w-3xl text-gray-300 text-lg sm:text-xl">
          Our team of experienced career counselors is dedicated to helping you
          identify your strengths, explore your interests, and discover the
          right career path that aligns with your goals.
        </p>
      </div>

      {/* Content Row */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-64 w-full max-w-7xl">
        {/* Left Text Block */}
        <div className="text-left max-w-md space-y-6">
          <h2 className="text-4xl font-bold text-pink-500">
            Unlock Your Potential
          </h2>
          <p className="text-gray-300 text-lg">
            At our Career Counseling Website, we believe that everyone deserves
            the opportunity to pursue fulfilling work. Our expert counselors
            will work closely with you to uncover your unique talents, passions,
            and aspirations.
          </p>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            book a session
          </button>
        </div>

        {/* Right Image */}
        <div className="w-[340px] sm:w-[420px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={image}
            alt="Career Counselor"
            className="w-[4000px] h-[450px] border-5 rounded-3xl border-cyan-400"
          />
        </div>
      </div>

      {/* Modal Component */}
      <Modal />

      {/* Comment Section */}
      <div className="mt-16 w-full max-w-4xl">
        <h3 className="text-2xl font-bold mb-4 text-cyan-300">
          Leave a Comment / Feedback
        </h3>
        <textarea
          className="textarea textarea-bordered w-full text-black"
          placeholder="Write your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="btn btn-outline btn btn-outline-accent mt-2"
          onClick={handleCommentSubmit}
        >
          Comment / Feedback
        </button>

        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-2">All Comments</h4>
          {comments.length === 0 ? (
            <p className="text-gray-400">No comments yet.</p>
          ) : (
            comments.map((c, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white bg-opacity-10 rounded-lg shadow mt-3"
              >
                {c.photo && (
                  <img
                    src={c.photo}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-pink-300">{c.user}</p>
                  <p className="text-gray-300">{c.text}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
