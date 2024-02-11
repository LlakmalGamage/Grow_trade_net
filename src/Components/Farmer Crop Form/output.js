import { useLocation } from 'react-router-dom';
import '../../App.css';
function RecommendationComponent() {
  const location = useLocation(); // Access location object
  const prediction = location.state?.prediction; // Access prediction from state

  return (
    <div>
      <h2>Based on your input data, we are recommending you to cultivate:</h2>
        <div className='prediction'>
          <br/>
          {prediction &&  <h2>{prediction}</h2>} 
        </div>
    </div>
  );
}

export default RecommendationComponent;