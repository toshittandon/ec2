import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1] 
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={`bg-white rounded-xl p-8 smooth-shadow hover:smooth-shadow-hover border-t-4 border-ec2-pink ${className}`}
    >
      <motion.div 
        className="text-5xl mb-4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay: delay + 0.2,
          type: "spring",
          stiffness: 200
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-warm-charcoal">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
