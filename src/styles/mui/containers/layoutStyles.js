export const navbarStyles = isScrolled => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  ...(isScrolled && {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: isScrolled ? 'white' : 'transparent',
    borderBottom: isScrolled ? '1px solid #f0f0f0' : 'none',
  }),
});

export const test = '';
