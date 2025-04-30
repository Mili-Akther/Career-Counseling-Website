  import React, { useContext, useState } from "react";
  import { useLoaderData } from "react-router-dom";
  import Modal from "../Modal/Modal";
  import { AuthContext } from "../../Provider/AuthProvider";

  const ServiceDetails = () => {
     const [modalOpen, setModalOpen] = useState(false); 
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
     
 const handleSubmitBooking = (formData) => {
   // Add/update booking logic here
   setModalOpen(false);
 };

   const [currentBooking, setCurrentBooking] = useState(null);

    const { user } = useContext(AuthContext);

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleCommentSubmit = () => {
      if (comment.trim() === "") return;

      const newComment = {
        text: comment,
        user: user?.displayName || "Anonymous",
        photo: user?.photoURL,
        date: new Date().toLocaleDateString(),
      };

      setComments([...comments, newComment]);
      setComment("");
    };


    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        {/* Header Section */}
        <div className="text-center pt-16 pb-10 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Personalized <span className="text-cyan-400">Career Guidance</span>
          </h1>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Our team of experienced career counselors is dedicated to helping
            you identify your strengths, explore your interests, and discover
            the right career path that aligns with your goals.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>

            {/* Right Features */}
            <div className="w-full lg:w-1/2 space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4 bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="p-3 bg-gray-100 bg-opacity-20 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2">
                    Quick response
                  </h3>
                  <p className="text-black">
                    Emergency response time is one hour or less guaranteed. A
                    live person will answer your call, or you can enter a
                    service ticket yourself.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="p-3 bg-gray-100 bg-opacity-20 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2">
                    Quality Support
                  </h3>
                  <p className="text-black">
                    We take support one step further by tailoring our replies to
                    suit your knowledge, expectations and personality.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 bg-white bg-opacity-10 p-6 rounded-lg">
                <div className="p-3 bg-gray-100 bg-opacity-20 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2">
                    Attention to Detail
                  </h3>
                  <p className="text-black">
                    We begin each web development project by gaining a solid
                    understanding of who you are, what you do and why you do it.
                  </p>
                </div>
              </div>

              {/* Book Session Button */}
              <button
                className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-2 rounded-full font-semibold transition duration-300"
                onClick={() => setModalOpen(true)}
              >
                Book a session
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="mb-16 bg-white bg-opacity-5 p-6 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                  {name}
                </h2>
                <p className="text-gray-600 mb-6">{description}</p>
                <div className="grid grid-cols-2 gap-4 ">
                  <div>
                    <p className="text-black font-bold text-lg">
                      Category :{" "}
                      <span className="font-semibold text-cyan-600">
                        {category}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-black font-bold text-lg">
                      Price:{" "}
                      <span className="font-semibold text-cyan-600">
                        {price}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-black font-bold text-lg">
                      Duration :{" "}
                      <span className="font-semibold text-cyan-600">
                        {duration}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-black font-bold text-lg">
                      Rating :{" "}
                      <span className="font-semibold text-cyan-600">
                        {rating}/5
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                  About Your Counselor
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                    {/* Counselor image placeholder */}
                    <div className="">
                      <img
                        src={image}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-black">{counselor}</p>
                    <p className="text-gray-500">Professional Career Advisor</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  With years of experience in career guidance, {counselor}{" "}
                  specializes in helping clients discover their true potential
                  and navigate their professional journey with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Comment Section */}
          <div className="w-full max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">
              Leave a Comment / Feedback
            </h3>

            <div className="bg-white bg-opacity-5 p-6 rounded-lg mb-8">
              <textarea
                className="w-full p-4 bg-slate-800 text-white rounded-lg border border-gray-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-50 mb-4"
                placeholder="Write your comment here..."
                rows="4"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-2 rounded-full font-semibold transition duration-300"
                onClick={handleCommentSubmit}
              >
                Submit Comment
              </button>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">All Comments</h4>
              {comments.length === 0 ? (
                <div className="bg-white bg-opacity-5 p-6 rounded-lg text-center">
                  <p className="text-gray-400">
                    No comments yet. Be the first to comment!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {comments.map((c, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-5 p-6 rounded-lg shadow-lg transition-transform hover:transform hover:scale-[1.01]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {c.photo ? (
                            <img
                              src={c.photo}
                              alt={c.user}
                              className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
                              <span className="text-lg font-bold">
                                {c.user.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <h5 className="font-semibold text-cyan-400">
                              {c.user}
                            </h5>
                            <span className="text-xs text-gray-400">
                              {c.date}
                            </span>
                          </div>
                          <p className="text-gray-300">{c.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Component */}
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmitBooking}
          bookingData={currentBooking}
        />
      </div>
    );
  };

  export default ServiceDetails;
