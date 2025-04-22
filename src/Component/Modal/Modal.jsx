import React from "react";

const Modal = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e); 
    }
  return (
    <div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle text-black"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Book an Appointment</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4" >
            <div>
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="input input-bordered w-full"
                name="firstName"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="input input-bordered w-full"
                name="lastName"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                name="email"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="input input-bordered w-full"
                name="phoneNumber"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Appointment Date</span>
              </label>
              <input type="date" className="input input-bordered w-full"
                name="appointmentDate"
               />                       
            </div>

            <div>
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                className="input input-bordered w-full"
                name="address"
              />
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
              <button type="submit" className="btn btn-primary">
                Make Appointment    
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
