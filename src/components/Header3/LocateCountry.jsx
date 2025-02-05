import React, { useEffect, useState } from "react";

function CountryFlag() {
  const [countryCode, setCountryCode] = useState(null);

  const getCountryCode = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const country = data.results[0].components.country_code;
        setCountryCode(country.toUpperCase());
        localStorage.setItem("userCountryCode", country.toUpperCase());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getCountryCode(latitude, longitude);
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  useEffect(() => {
    const storedCountryCode = localStorage.getItem("userCountryCode");
    if (storedCountryCode) {
      setCountryCode(storedCountryCode);
    } else {
      getLocation();
    }
  }, []);

  return (
    <div>
      {
        countryCode ? 
          <img
            src={`https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`}
            alt={`Flag of ${countryCode}`}
            style={{ width: "100px", height: "auto" }}
          /> : "Locating..."
      }
    </div>
  );
}

export default CountryFlag;
