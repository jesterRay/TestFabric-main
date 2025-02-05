import React from 'react';
import Footer3 from '../Footer3';
import Header3 from '../Header3';
import PageBanner from '../PageBanner';

const CookiePolicy = () => {
  return (
    <>
      <Header3 />
      <PageBanner currentPage='Cookie Policy' heading='Cookie Policy'/>
      <div style={styles.container}>
        {/* <h1 style={styles.title}>Cookie Policy</h1> */}

        <p style={styles.paragraph}>
          At <strong>TestFabrics</strong>, we are committed to maintaining the trust and confidence of visitors to our website. 
          This Cookie Policy outlines what cookies are, how we use them, and how you can control them.
        </p>

        <strong style={styles.subheading}>1. What Are Cookies?</strong>
        <p style={styles.paragraph}>
          Cookies are small data files that are stored on your device when you visit a website. 
          They allow the website to recognize your device and store information about your preferences or actions. 
          Cookies are widely used to enhance website performance and provide a better user experience.
        </p>

        <strong style={styles.subheading}>2. How We Use Cookies</strong>
        <p style={styles.paragraph}>We use cookies on our website to:</p>
        <ul style={styles.list}>
          <li>Ensure the functionality of the website.</li>
          <li>Analyze website traffic and user behavior to improve our services.</li>
          <li>Enable social media features for enhanced user interaction.</li>
        </ul>

        <p style={styles.paragraph}>The cookies we use include:</p>
        <ul style={styles.list}>
          <li>
            <strong>Essential Cookies</strong>: Necessary for the operation of our website. 
            They allow you to navigate the site and use its features, such as accessing secure areas.
          </li>
          <li>
            <strong>Performance and Analytics Cookies</strong>: These cookies help us understand how visitors interact with our website by collecting 
            and reporting information anonymously. We use this data to enhance the user experience.
          </li>
          <li>
            <strong>Functionality Cookies</strong>: These cookies allow us to remember your preferences and provide enhanced, personalized features.
          </li>
          <li>
            <strong>Social Media Cookies</strong>: We use social media cookies to allow you to share content from our website on platforms like 
            <a href="https://www.facebook.com/p/Testfabrics-Inc-100070179757613/" style={styles.link}>Facebook</a>, 
            <a href="https://twitter.com/testfabrics" style={styles.link}>Twitter</a>, 
            <a href="https://www.instagram.com/p/CoDQrSYpXIf/" style={styles.link}>Instagram</a>, and 
            <a href="https://www.youtube.com/@testfabricsinc2413" style={styles.link}>YouTube</a>.
          </li>
        </ul>

        <strong style={styles.subheading}>3. Third-Party Cookies</strong>
        <p style={styles.paragraph}>
          Some cookies on our website are set by third-party services, such as Google Analytics, to track usage statistics and improve performance. 
          These third-party cookies are subject to the privacy policies of the respective providers.
        </p>

        <strong style={styles.subheading}>4. How You Can Control Cookies</strong>
        <p style={styles.paragraph}>
          You can control or delete cookies at any time by adjusting the settings in your browser. 
          Please note that blocking or disabling cookies may affect the functionality of our website.
        </p>
        <p style={styles.paragraph}>To manage cookies on different browsers:</p>
        <ul style={styles.list}>
          <li><strong>Google Chrome</strong>: Settings Privacy and Security Cookies.</li>
          <li><strong>Mozilla Firefox</strong>: Preferences Privacy & Security Cookies and Site Data.</li>
          <li><strong>Safari</strong>: Preferences Privacy Cookies and website data.</li>
          <li><strong>Microsoft Edge</strong>: Settings Privacy, search, and services Cookies.</li>
        </ul>

        <strong style={styles.subheading}>5. Updates to This Policy</strong>
        <p style={styles.paragraph}>
          We may update this Cookie Policy from time to time to reflect changes in technology or legislation. 
          Any changes will be posted on this page, and we encourage you to review it regularly.
        </p>

        <strong style={styles.subheading}>6. Contact Us</strong>
        <p style={styles.paragraph}>
          If you have any questions or concerns about this Cookie Policy, please contact us:
        </p>
        <p style={styles.paragraph}>
          <strong>TestFabrics Inc.</strong>
        </p>
      </div>
      <Footer3 />
    </>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '1250px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
   
    // backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    
    // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    color: '#1f3c88',
    textAlign: 'center',
    marginBottom: '20px',
  },
  subheading: {
    // fontSize: '1.8rem',
    // color: '#1f3c88',
    marginTop: '20px',
    marginBottom: '10px',
    fontWeight:'bold'
  },
  paragraph: {
    fontSize: '1rem',
    marginBottom: '15px',
  },
  list: {
    paddingLeft: '20px',
    marginBottom: '15px',
  },
  link: {
    color: '#1f3c88',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default CookiePolicy;
