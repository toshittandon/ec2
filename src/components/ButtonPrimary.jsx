const ButtonPrimary = ({ children, onClick, href, className = '', ...props }) => {
  const baseStyle = {
    background: 'linear-gradient(to right, #E91E63, #C2185B)',
    transition: 'all 0.3s ease'
  };
  
  const hoverStyle = {
    background: 'linear-gradient(to right, #C2185B, #E91E63)'
  };
  
  const baseClasses = 'text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 inline-block';
  
  if (href) {
    return (
      <a
        href={href}
        style={baseStyle}
        className={`${baseClasses} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={baseStyle}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
