import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { NavLink } from "react-router-dom";
import { addToMyBookings, getStoreBookAppointment, removeFromMyBookings } from "../../Utils";

const MyBooking = () => { 

  const [bookings, setBookings] = useState([]); // <- Empty array now
  const [modalOpen, setModalOpen] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);
    useEffect(() => {
      const storedBookings = getStoreBookAppointment();
      setBookings(storedBookings);
    }, []);
    const handleSubmit = (formData) => {
      const bookingWithId = {
        ...formData,
        id: editingBooking ? editingBooking.id : Date.now(),
        status: "Confirmed",
      };

      if (editingBooking) {
        setBookings((prev) =>
          prev.map((b) => (b.id === editingBooking.id ? bookingWithId : b))
        );
      } else {
        setBookings((prev) => [...prev, bookingWithId]);
      }

      // Save to localStorage
      addToMyBookings(bookingWithId);

      setModalOpen(false);
    };


  const handleNewBooking = () => {
    setEditingBooking(null);
    setModalOpen(true);
  };

  const handleReschedule = (booking) => {
    setEditingBooking(booking);
    setModalOpen(true);
  };

const handleCancel = (id) => {
  removeFromMyBookings(id);
  setBookings((prev) => prev.filter((booking) => booking.id !== id));
  console.log("Updated localStorage:", localStorage.getItem("myBookings"));
};

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">My Bookings</h2>
        <NavLink to="/services"
          className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-2 font-semibold transition duration-300"       
        >
          New Booking
        </NavLink>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">You have no bookings yet</p>
          <button onClick={handleNewBooking} className="btn btn-primary">
            Book Your First Session
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="card bg-white shadow-md p-6 rounded-lg border"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">
                  {booking.firstName} {booking.lastName}
                </h3>
                <span className="badge badge-success text-white">
                  {booking.status}
                </span>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Email:</span> {booking.email}
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  {booking.phoneNumber}
                </p>
                <p>
                  <span className="font-medium">Appointment Date:</span>{" "}
                  {booking.appointmentDate}
                </p>
                <p>
                  <span className="font-medium">Address:</span>{" "}
                  {booking.address}
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => handleCancel(booking.id)}
                  className="btn btn-outline btn-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleReschedule(booking)}
                  className="btn btn-outline btn-sm"
                >
                  Reschedule
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        bookingData={editingBooking}
      />
    </div>
  );
};

export default MyBooking;
