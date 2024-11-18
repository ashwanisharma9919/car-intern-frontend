import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  const truncatedDescription =
    car?.description?.length > 120
      ? car.description.substring(0, 120) + "..."
      : car?.description;

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
      <Link to={`/cars/${car?._id}`}>
        {/* Image Section */}
        <div className="h-48 bg-gray-200">
          <img
            src={car?.images[0]?.url || "/placeholder-image.png"}
            alt={car.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">{car.title}</h2>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">{truncatedDescription}</p>

          {/* Call to Action */}
          <div className="text-right">
            <span className="text-blue-500 text-sm font-medium hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarCard;
