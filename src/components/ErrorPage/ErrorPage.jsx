
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>OOPss !!</h2>
            <Link to="/"><button>Go Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;