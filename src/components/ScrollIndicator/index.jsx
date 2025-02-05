import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components';

// STYLES
const ScrollTopWrapper = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    overflow-x: hidden;
    z-index: 11111;

    button {
        border: none;
        width: 40px;
        height: 40px;
        background-color: #69C4E8;
        color: #fff;
        border-radius: 50%;
        transition: all 0.3s;

        @media (max-width: 400px) {
            width: 30px;
            height: 30px;
        }
    }

    .icon {
        margin-top: -3px;
        font-weight: 300;

        @media (max-width: 400px) {
            font-size: 12px;
        }
    }
    .visible {
        opacity: 1;
        display: block;
        color: #fff;
        transition: opacity 0.3s;
    }
    .invisible {
        opacity: 0;
    }
`;

function ScrollIndicator() {
    const [isVisible, setIsVisible] = useState(false);

    // Handler
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <ScrollTopWrapper>
            <button
                className={isVisible ? 'd-block' : 'd-none'}
                type="button"
                onClick={scrollToTop}
            >
                <FaChevronUp className="icon" />
            </button>
        </ScrollTopWrapper>
    );
}

export default ScrollIndicator;
