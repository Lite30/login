// Components/MainContent/MainContent.js
import React from 'react';
import './MainContent.css'; // Import the CSS file

const MainContent = ({ children }) => {
    return (
        <div className="main-content">
            {children}
        </div>
    );
};

export default MainContent;
