import * as React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
  subtitle: string;
}

/**
 * The header of the knowledge panel
 * Displays the title and subtitle
 */
const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <div>
    <span className="header-title">
      {title}
    </span>
    <span className="header-subtitle">
      {subtitle}
    </span>
  </div>
);

export default Header;
