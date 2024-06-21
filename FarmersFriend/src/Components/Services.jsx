import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-14 mr-14 mt-10">
      {/* First card */}
      <div className="card card-compact bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Integrated Agricultural Management Strategies</h2>
          <p>Enhancing Crop Suitability, Optimizing Irrigation Control, and Efficient Resource Management</p>
          <figure>
            <img src="https://th.bing.com/th/id/OIP.6Wu1VqrMvN6Nli9M7RlkxwHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Shoes" />
          </figure>
          <div className="card-actions justify-end">
            <Link to="/crop-suitability" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </div>

      {/* Second card */}
      <div className="card card-compact bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Weather Forecast Integration</h2>
          <p>Integrate weather forecast data for your region.</p>
          <figure>
            <img src="https://th.bing.com/th/id/OIP.6Wu1VqrMvN6Nli9M7RlkxwHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Shoes" />
          </figure>
          <div className="card-actions justify-end">
            <Link to="/weather-forecast" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </div>

      {/* Third card */}
      <div className="card card-compact bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title">Community Forum</h2>
          <p>Connect with other farmers in the community forum.</p>
          <figure>
            <img src="https://th.bing.com/th/id/OIP.6Wu1VqrMvN6Nli9M7RlkxwHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Shoes" />
          </figure>
          <div className="card-actions justify-end">
            <Link to="/community-forum" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
