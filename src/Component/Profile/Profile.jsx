import React from "react";

const Profile = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-3xl font-bold mb-4">My Profile</div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-400"
            />
            <div className="text-left space-y-2">
              <h2 className="text-2xl font-semibold">Millie Akter</h2>
              <p className="text-gray-600">
                🎓 Diploma in Computer Engineering
              </p>
              <p className="text-gray-600">📍 Chittagong, Bangladesh</p>
              <p className="text-gray-600">📧 millie@example.com</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">About Me</h3>
            <p className="text-gray-700 leading-relaxed">
              I'm a passionate learner and aspiring full-stack developer. I love
              working on real-world projects and exploring opportunities in
              software development, networking, and AI.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <div className="badge badge-primary">HTML</div>
              <div className="badge badge-secondary">CSS</div>
              <div className="badge badge-accent">JavaScript</div>
              <div className="badge badge-info">React</div>
              <div className="badge badge-success">Firebase</div>
              <div className="badge badge-warning">Networking</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
