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
  <div>
    <span>
      {title}
    </span>
    <span>
      {subtitle}
    </span>
  </div>
);

export default Header;
