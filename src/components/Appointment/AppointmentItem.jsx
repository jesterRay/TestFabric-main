import React from 'react';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AppointmentItem({ day, time }) {
    return (
        <div className="appointment-time d-flex justify-content-between">
            <span>{day}</span>
            <span>{time}</span>
            <Link to="/home-3">
                <FaClock /> Book
            </Link>
        </div>
    );
}

export default AppointmentItem;
