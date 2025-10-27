import { motion } from 'framer-motion';

const ButtonPrimary = ({ children, onClick, href, className = '', ...props }) => {
  const baseStyle = {
    background: 'linear-gradient(to right, #E91E63, #C2185B)',
  };
  
  const baseClasses = 'text-white px-8 py-3 rounded-lg font-semibold shadow-md inline-block';
  
  if (href) {
    return (
      <motion.a
        href={href}
        style={baseStyle}
        className={`${baseClasses} ${className}`}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(233, 30, 99, 0.3)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      style={baseStyle}
      className={`${baseClasses} ${className}`}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(233, 30, 99, 0.3)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default ButtonPrimary;
