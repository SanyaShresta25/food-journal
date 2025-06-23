// LoadingSpinner.tsx

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-orange-100">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-b-transparent border-gradient animate-spin" />
      <div className="absolute inset-3 rounded-full bg-white flex items-center justify-center text-pink-500 font-semibold">
        🍽️
      </div>
    </div>
  </div>
);

export default LoadingSpinner;
