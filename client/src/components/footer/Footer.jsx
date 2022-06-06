import React from 'react';

const Footer = () => {
  return (
    <div className="footer_wrapper" style={{ marginTop: '20px' }}>
      <p
        className="footer_content"
        style={{ textAlign: 'center', fontWeight: 'bold' }}
      >
        © 2022 Society Management System, Inc.
      </p>
    </div>
  );
};

export default React.memo(Footer);
