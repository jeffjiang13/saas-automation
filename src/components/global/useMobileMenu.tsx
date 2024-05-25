import { useState } from 'react';

const useMobileMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return { isMobileMenuOpen, toggleMobileMenu };
};

export default useMobileMenu;
