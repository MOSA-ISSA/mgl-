import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuRotation, setMenuRotation] = useState(0);
  const [dotsRotation, setDotsRotation] = useState(0);

  const handleMenuClick = () => {
    setMenuRotation(menuRotation + 90);
  };

  const handleDotsClick = () => {
    setDotsRotation(dotsRotation + 90);
  };

  return (
    <div className="header">
      <div
        className={`menu-icon ${menuRotation === 90 ? 'spin' : ''}`}
        style={{ transform: `rotate(${menuRotation}deg)` }}
        onClick={handleMenuClick}
      >
        ☰
      </div>
      <div className="logo">MGL</div>
      <div
        className={`dots-icon ${dotsRotation === 90 ? 'spin' : ''}`}
        style={{ transform: `rotate(${dotsRotation}deg)` }}
        onClick={handleDotsClick}
      >
        ⋮
      </div>
    </div>
  );
};

export default Header;
