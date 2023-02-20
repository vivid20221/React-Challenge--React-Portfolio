import React from 'react';
import '../styles/Header.css';






const styles = {
    headerStyle: {
      background: 'red',
    },
    headingStyle: {
      fontSize: '100px',
    },
  };


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Welcome</h1>
    </header>
  );
}

export default Header;
