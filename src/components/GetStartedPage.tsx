import { ChefHat, ArrowRight } from 'lucide-react';
import StrawberryBackground from './StrawberryBackground';
import { motion } from 'framer-motion';

const GetStartedPage: React.FC<{ onGetCooking: () => void }> = ({ onGetCooking }) => (
  <StrawberryBackground>
    <div className="flex items-center justify-center min-h-screen px-4">
      <motion.div
        className="text-center backdrop-blur-lg bg-white/10 rounded-3xl p-10 border border-white/30 shadow-xl max-w-xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-md">
            <ChefHat className="w-10 h-10 text-gray-800" />
          </div>
          <div className="text-white text-lg opacity-90">100k Premium Recipe</div>
        </div>

        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Get<br />Cooking
        </h1>
        <p className="text-white text-xl mb-10 opacity-90 max-w-md mx-auto">
          Simple way to find Tasty Recipe
        </p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(72, 211, 134, 0.7)' }}
          onClick={onGetCooking}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          Start Cooking
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
  </StrawberryBackground>
);

export default GetStartedPage;
