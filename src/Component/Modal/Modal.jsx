import React, { useEffect, useState } from "react";
import { addToMyBookings } from "../../Utils";
import { toast } from "react-toastify";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  appointmentDate: "",
  address: "",
};

const Modal = ({ open, onClose, onSubmit, bookingData }) => {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    setFormData(bookingData || emptyForm);
  }, [bookingData, open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      ...formData,
      id: bookingData?.id || Date.now(),
      status: "Confirmed",
    };

    addToMyBookings(booking); // Save full data to localStorage
    onSubmit(booking); // Send data to parent component
    toast.success(
      bookingData ? "Booking updated successfully!" : "Booking created successfully!")
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center text-black justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {bookingData ? "Reschedule Booking" : "New Booking"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="input input-bordered w-full"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            className="input input-bordered w-full"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            className="input input-bordered w-full"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="input input-bordered w-full"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <input
            className="input input-bordered w-full"
            name="appointmentDate"
            type="date"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
          <input
            className="input input-bordered w-full"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="btn">
              Close
            </button>
            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-2 font-semibold transition duration-300"
            >
              {bookingData ? "Update" : "Book An Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
