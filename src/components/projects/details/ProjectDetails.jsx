import React, { useState } from 'react';
import databaseDesign from "../../../assets/images/database design.png";
import figma1 from "../../../assets/images/figma1.png";
import figma2 from "../../../assets/images/figma2.png";
import "./projectDetails.css";

const ProjectDetails = () => {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [databaseDesign, figma1, figma2];

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="project-detail">
      <h3>Travel Management System</h3>
      <div className="slider">
        <button className="slider-btn left" onClick={prevSlide}>&lt;</button>
        <img className="slider-image" src={images[index]} alt="Project Screenshot" onClick={openModal} />
        <button className="slider-btn right" onClick={nextSlide}>&gt;</button>
      </div>
      <h5>Project: Comprehensive Travel Booking System</h5>

      <p><strong>Description:</strong><br />
        The Travel Booking System is designed to facilitate the booking and management of various travel services including flights, hotels, and travel packages. The system is intended to provide a seamless user experience for travelers, ensuring that all aspects of their journey can be managed from a single platform.
      </p>

      <p><strong>Key Components:</strong></p>

      <p><strong>1. User Management:</strong><br />
        <strong>Users Table:</strong> Stores user information such as username, email, password, and role.<br />
        <strong>Roles Table:</strong> Defines different user roles within the system (e.g., Admin, Customer).
      </p>

      <p><strong>2. Hotel Management:</strong><br />
        <strong>Hotels Table:</strong> Contains details about hotels including name, main image, address, and country.<br />
        <strong>Rooms Table:</strong> Manages individual hotel rooms and their status (available/booked).<br />
        <strong>RoomDetails Table:</strong> Stores detailed information about each room including images and descriptions.<br />
        <strong>HotelEvaluations Table:</strong> Stores customer reviews and ratings for hotels.<br />
        <strong>HotelFeatures Table:</strong> Lists features available in hotels, such as swimming pool or gym.<br />
        <strong>roomDetails_has_roomFeatures Table:</strong> Links room details to specific room features.
      </p>

      <p><strong>3. Flight Management:</strong><br />
        <strong>Flights Table:</strong> Contains flight details such as departure and arrival times, and associated planes.<br />
        <strong>Plane Table:</strong> Stores information about planes including company name and number of seats.<br />
        <strong>PlaneSeats Table:</strong> Manages individual seats on a plane and their status.<br />
        <strong>seatBooking Table:</strong> Manages seat reservations for users.
      </p>

      <p><strong>4. Travel Packages:</strong><br />
        <strong>Packages Table:</strong> Stores information about travel packages, including name, price, and main image.<br />
        <strong>packageDetails Table:</strong> Contains detailed descriptions and images for packages.<br />
        <strong>Benefits Table:</strong> Lists benefits included in travel packages.<br />
        <strong>packageDetails_has_benefits Table:</strong> Links package details to specific benefits.<br />
        <strong>Roadmaps Table:</strong> Contains travel itineraries or roadmaps.<br />
        <strong>packageDetails_has_roadmaps Table:</strong> Links package details to specific roadmaps.<br />
        <strong>packageBooking Table:</strong> Manages bookings of travel packages.<br />
        <strong>packageEvaluations Table:</strong> Stores customer reviews and ratings for travel packages.
      </p>

      <p><strong>5. Location Management:</strong><br />
        <strong>Countries Table:</strong> Stores information about countries.<br />
        <strong>countryDetails Table:</strong> Contains detailed descriptions and images of countries.<br />
        <strong>Places Table:</strong> Stores information about tourist places within countries.<br />
        <strong>placeDetails Table:</strong> Contains detailed descriptions and images of places.
      </p>

      <p><strong>6. Booking Management:</strong><br />
        <strong>roomBooking Table:</strong> Manages room bookings for users, including start and end times.<br />
        <strong>packageBooking Table:</strong> Manages bookings of travel packages.<br />
        <strong>seatBooking Table:</strong> Manages seat reservations for users.
      </p>

      <p><strong>Technical Details:</strong><br />
        <strong>Database Design:</strong><br />
        The database is designed using a relational model to ensure data integrity and efficient access. Each table represents an entity with attributes and primary keys, while relationships between entities are managed through foreign keys.<br />
        <strong>Optimization:</strong><br />
        Indexes are used on primary keys and frequently queried fields to improve performance. Normalization is applied to minimize redundancy and ensure data integrity.<br />
        <strong>Security:</strong><br />
        User passwords are stored securely using hashing algorithms. Role-based access control is implemented to restrict access to sensitive information.
      </p>

      <p><strong>Challenges and Solutions:</strong><br />
        <strong>Data Consistency:</strong> Implemented constraints and triggers to maintain data consistency and integrity.<br />
        <strong>Performance:</strong> Optimized queries and used indexing to enhance the performance of the system.<br />
        <strong>Scalability:</strong> Designed the database schema to be scalable to handle a growing number of users and bookings.
      </p>

      <p><strong>Conclusion:</strong><br />
        This Travel Booking System provides a robust solution for managing travel-related services, ensuring a seamless and efficient booking experience for users. The comprehensive database design supports various functionalities and ensures data integrity, performance, and scalability.
      </p>

      <p><strong>Role and Contribution:</strong><br />
        - Led the database design and implementation.<br />
        - Developed entity-relationship diagrams to visualize database structure.<br />
        - Collaborated with frontend and backend teams to ensure seamless integration.<br />
        - Implemented security measures to protect user data.<br />
        - Optimized database performance through indexing and query optimization.
      </p>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={images[index]} alt="Enlarged Project Screenshot" />
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
