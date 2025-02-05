import React from 'react';

function Map() {
    return (
        <div id="map">
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11984.163007730771!2d-75.8044152!3d41.3297272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c51f349d0b6511%3A0x4b36bbaa7556183c!2sTestfabrics%20Inc!5e0!3m2!1sen!2s!4v1699102643709!5m2!1sen!2s"
                frameBorder="0"
                style={{
                    border: '0',
                    width: '100%',
                }}
                allowFullScreen=""
                aria-hidden="false"
            />
        </div>
    );
}

export default Map;
