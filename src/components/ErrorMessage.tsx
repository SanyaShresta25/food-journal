
// ErrorMessage.tsx
import StrawberryBackground from './StrawberryBackground';

const ErrorMessage: React.FC<{ error: string }> = ({ error }) => (
  <StrawberryBackground>
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-white text-xl">Error: {error}</div>
    </div>
  </StrawberryBackground>
);

export default ErrorMessage;

