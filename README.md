# EVENT_BOOKING_PLATFORM
The simplest, most dynamic way to manage, discover, and host world-class events in your local city with Saurav

# Features

1. User Authentication: Secure login & registration with JWT and bcrypt.
2. 2FA OTP Verification:
3. Mandatory Email OTP to activate your account upon Registration (or delayed login attempts).
4. Mandatory Email OTP to finalize and secure event ticket booking.
5. Role-Based Access:
6. Admin: Create, edit, and delete events. Confirm and reject all incoming booking requests, mark them as 'Paid' or 'Not Paid'. Access is strictly locked to database-flagged users only.
7. User: Browse events, submit ticket booking requests via OTP, view personal dashboard pending status, and cancel bookings.
8. Event Management: Create free and paid events with detailed descriptions, external image URLs, dates, categories, and seating capacity.
9. Smart Booking System:
10. Mandatory 2FA OTP to authorize a booking request.
11. All booking requests (both free and paid) enter a secure 'Pending' queue for Admin verification.
12. Seat availability accurately updates and securely validates against overbooking logic.
13. Admin Analytics Dashboard: Track live data such as Pending Requests, Total Revenue, and Total Confirmed Paid Clients directly from the admin panel.
14. Email Notifications: Automated email delivery upon successful booking confirmation using Nodemailer.
15. Sleek UI/UX: Built entirely with React, Tailwind CSS, and polished with micro-interactions.
