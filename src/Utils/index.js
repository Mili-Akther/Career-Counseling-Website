const getStoreBookAppointment = () => {
  const bookingsStr = localStorage.getItem("myBookings");
  return bookingsStr ? JSON.parse(bookingsStr) : [];
};

const addToMyBookings = (booking) => {
  const bookings = getStoreBookAppointment();
  const alreadyBooked = bookings.some((b) => b.id === booking.id);

  if (!alreadyBooked) {
    bookings.push(booking);
    localStorage.setItem("myBookings", JSON.stringify(bookings));
  }
};


// remove the booking from localStorage
const removeFromMyBookings = (id) => {
  const stored = JSON.parse(localStorage.getItem("myBookings")) || [];

  // Force numeric comparison
  const updated = stored.filter((item) => Number(item.id) !== Number(id));

  localStorage.setItem("myBookings", JSON.stringify(updated));
};

export { getStoreBookAppointment, addToMyBookings, removeFromMyBookings };
