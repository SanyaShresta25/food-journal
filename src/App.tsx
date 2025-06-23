import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import GetStartedPage from './components/GetStartedPage';
import RecipesPage from './components/RecipesPage';
import RecipeDetailPage from './components/RecipeDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStartedPageWrapper />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage />} />
      </Routes>
    </Router>
  );
};

// Wrapper for GetStartedPage to handle button navigation
const GetStartedPageWrapper = () => {
  const navigate = useNavigate();
  return <GetStartedPage onGetCooking={() => navigate('/recipes')} />;
};

export default App;
