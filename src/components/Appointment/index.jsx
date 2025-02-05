import React from 'react';
import bgImg from '../../assets/img/appointment.jpg';
import appointmentData from './appointmentData';
import AppointmentItem from './AppointmentItem';

function Apointment() {
    return (
        <section className="make-appointment-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-12 col-lg-5">
                        <div className="appointment-notice-board">
                            <div
                                className="notice-board-banner bg-cover"
                                style={{ backgroundImage: `url(${bgImg})` }}
                            />
                            <div className="appointment-list">
                                <h2>Make Appointment</h2>

                                {appointmentData.map((data) => (
                                    <AppointmentItem
                                        key={data.id}
                                        day={data.day}
                                        time={data.time}
                                    />
                                ))}
                                <div className="appointment-time d-flex justify-content-between">
                                    <span>Saturday / Sunday</span>
                                    <span>Off Day</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8 col-lg-7 col-12 mt-5 mt-lg-0 px-lg-4">
                        <div
                            className="map-wrapper map-iframe"
                            style={{ width: '100%', height: '100%' }}
                        >
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.643863384683!2d90.41804006977539!3d23.8128745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c64c82097045%3A0x31facf4b615e4df3!2sJapan%20Taguchi%20Construction%20Co.%20Ltd.%20JTCCL!5e0!3m2!1sen!2sbd!4v1632475336630!5m2!1sen!2sbd"
                                style={{ border: '0', height: '100%', width: '100%' }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Apointment;
