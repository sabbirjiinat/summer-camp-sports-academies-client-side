# Summer Camp Sports Academies

# About the site

- website have a navbar with the Website logo or Website name, Home, Instructors, Classes, Dashboard and User profile picture. The user profile picture and Dashboard on the navbar are conditional. If the user is signed in, the navbar will show the profile picture; otherwise, it will show the Login button.The navbar and footer on all the pages except on the 404 page

- On the registration page fields:Name,Email,Password,Confirm Password, and Photo URL.The functionality of hosting the user's photos on ImageBB. the Registration page, display errors when password is less than 6 characters,don't have a capital letter,don't have a special character.
  On the home page have a slider. Use information, message, and picture. Have a popular class section, popular instructors section,Instructors Page also a Classes page Showing all approved classes by admin.

- There is student dashboard . My classes page : student can see all the Classes they booked after clicking the Select button. user can delete the bookmark , and also a pay button.clicking the Pay button for a Class on the My Bookmarked Classes, the student will be redirected to the payment page to finalize their payment.After successfully pay removing the class on bookmarked page by default.also have a payment history page for students. It will show the payment made by that student.The newest payment is at the top. My Enrolled page : Showed all the Classes a student selected after successful payment.

- There is a instructor dashboard .Instructor can add a class. By default, the value of the status field will be pending. In my classes page, instructor can see all Classes added after clicking the Add button from the Add a Class page. Each Class will show relevant information, including pending/ approved/ denied status, Feedback & Update button.
  If the Class is in the denied state by the admin, at that time, an admin can write feedback explaining why the Class was denied, which will appear in the feedback column in a modal.

- There also a admin dashboard . Manage Classes page: This page will show all the Classes. All the classes added by the Instructor from the Add Class page will be displayed here.class information : Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status( Approve, Deny and send feedback)By default, the status will be pending. When an admin clicks the Approve button, the status will be updated to approved. The Deny and the Approve button will become disabled.If the admin clicks the Deny button, the status will be updated to denied. The Deny and the Approve button will become disabled.A modal will be opened When the admin clicks the send feedback button. Admin will write the approved/denied reason in a text field and send it to the Instructor.
  There is a Manage Users page: The admin can see the relevant information of all registered users. By default, everyone will be a student. And there will be 2 buttons: Make Instructor button and Make Admin button.Admin can make anyone as admin or instructor.

# packages/ technology name

- react
react-dom
tailwindcss
daisyui
headlessui
stripe/react-stripe-js
stripe/stripe-js
tanstack-query
axios
firebase
react-helmet-async
react-hook-form
react-hot-toast
react-icons
react-responsive-carousel
react-router-dom
react-spinners
sweetalert
swiper

## 🔗Live Site Links

[(https://summer-camp-sports-academies.web.app/)]
