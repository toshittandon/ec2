const FeatureCard = ({ icon, title, description, className = '' }) => {
  return (
    <div
      className={`bg-white rounded-xl p-8 smooth-shadow transition-all duration-300 hover:smooth-shadow-hover hover:-translate-y-1 border-t-4 border-ec2-pink ${className}`}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-warm-charcoal">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
