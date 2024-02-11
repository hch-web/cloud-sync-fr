import heroImage from 'assets/hero-image.webp';
import contactSectioImage from 'assets/contact-section-image.webp';

export const heroSectionStyles = {
  background: `url(${heroImage}) center/cover no-repeat fixed`,
  height: '100vh',
  minHeight: '500px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
};

export const serviceCardStyles = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '0 10px',
  textAlign: 'center',

  '& img': {
    width: '120px',
    height: '120px',
    objectFit: 'contain',
  },
};

export const priceSectionCardStyles = {
  border: '1px solid #f0f0f0',
  borderRadius: '10px',
  padding: '20px',
  '&:hover': {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export const clientImageStyles = image => ({
  width: '100%',
  maxWidth: '150px',
  height: '100px',
  background: `url(${image}) center/contain no-repeat`,
});

export const contactSectionStyles = {
  background: `url(${contactSectioImage}) center/cover no-repeat fixed`,
  padding: '100px 0'
};
