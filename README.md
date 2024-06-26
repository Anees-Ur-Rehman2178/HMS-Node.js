# HRS-Node.js

Project- [ Hostel-Reservation-System]

Description: This hotel reservation application allows users to sign up and log in using their email and password, with role-based access control ensuring proper permissions. The application uses JWT (JSON Web Token) for user authentication. Users can view available rooms, book specific ones, and see real-time updates on booking status and room availability. They can also manage their profiles and update passwords. Admins have special privileges to add, update, and remove rooms, keeping information accurate and up-to-date. This system makes the booking process easy, secure, and transparent for both users and admins.

---- Features -----

* User Authentication: Users can sign up and log in using their email and password. The application uses JWT authentication to maintain secure sessions and verify user credentials 
  effectively.
* Room Listing and Booking: Users can view a list of available rooms and book their preferred room. The system ensures that bookings are processed accurately, preserving the availability 
  of rooms.
* Real-Time Booking Status: The application provides a live status of room availability and current bookings, allowing users to see real-time updates.
* User Profile Management: Users can view their profile information and change their password, ensuring their account's security.
* Admin Controls: Admins can manage the list of rooms, including adding, updating, and deleting rooms from the system. Admins also have the ability to view and manage user bookings to 
  ensure efficient operation of the hostel.

---- Routes ------

* POST /signup - Register a new user with role-based access control.
* POST /login - Login for existing users using email and password.
* GET /rooms - Retrieve a list of available rooms.
* POST /book/ - Book a specific room.
* GET /bookings - Fetch live booking status and room availability.
* POST /room - Add new rooms (Admin only).
* PUT /room/- Update room details (Admin only).
* DELETE /room/- Remove a room from the list (Admin only).
* GET /user/profile - Retrieve user profile details.
* PUT /profile/password - Update user password.
