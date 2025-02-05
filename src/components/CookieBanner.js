// src/components/CookieBanner.js
import React, { useContext } from 'react';
import { CookieContext } from '../contexts/CookieContext.js';

const CookieBanner = () => {
    const { isVisible, handleAcceptCookies } = useContext(CookieContext);

    return (
        isVisible && (
            <div style={styles.banner}>
                <p>
                    This website uses cookies to enhance the user experience. 
                    By continuing to browse, you consent to our use of cookies.
                </p>
                <button onClick={handleAcceptCookies} style={styles.button}>
                    Accept
                </button>
            </div>
        )
    );
};

const styles = {
    banner: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        background: '#333',
        color: '#fff',
        padding: '15px',
        textAlign: 'center',
        zIndex: 1000,
    },
    button: {
        marginLeft: '10px',
        padding: '5px 10px',
        backgroundColor: '#f0ad4e',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default CookieBanner;
