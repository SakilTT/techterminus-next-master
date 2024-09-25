import React from 'react';

function Map() {
  const mapStyle = {
    width: '100%',
  };
  return (
    <div className='my-[100px] max-md6:my-[50px] max-w-[1440px] mx-auto'>
      <iframe
        title="mapFrame"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d251.63569608016184!2d73.2357215774707!3d22.277413613777185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc50c6dac1acd%3A0xa8b2751341f9dc4b!2sKANHA%20HEIGHTS%202!5e0!3m2!1sen!2sin!4v1691738611246!5m2!1sen!2sin"
        width="600"
        height="450"
        loading="lazy"
        style={mapStyle}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;
