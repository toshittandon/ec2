import { motion, AnimatePresence } from 'framer-motion';

const LoadingAnimation = ({ isLoading, onComplete }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-warm-charcoal via-warm-charcoal to-gray-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => {
            if (!isLoading) onComplete?.();
          }}
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <motion.img
                src="/ec2.svg"
                alt="EC² Logo"
                className="h-32 md:h-40 lg:h-48"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </motion.div>

            {/* Text Animation */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                EC²
              </h1>
              <motion.p
                className="text-sm md:text-base font-medium"
                style={{
                  background: 'linear-gradient(to right, #FFD700, #FF8C00, #E91E63, #00BCD4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                Entrepreneurship and Community Club
              </motion.p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              className="mt-12 w-64 h-1 bg-gray-700 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(to right, #FFD700, #FF8C00, #E91E63, #00BCD4)',
                }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 1.3, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Particles Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-gold to-sunset-orange"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -50],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1 + Math.random() * 1,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
