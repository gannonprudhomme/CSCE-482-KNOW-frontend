import * as React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

/**
 * The header of the knowledge panel
 * Displays the title and subtitle
 */
const Header: React.FC<HeaderProps> = ({ title, subtitle }) => (
  <div className="knowledge-panel-title">
    <span>
      {title}
    </span>
    <br></br>
    <span>
      <div className="knowledge-panel-subtitle">{subtitle}</div>
    </span>
  </div>
);

export default Header;
