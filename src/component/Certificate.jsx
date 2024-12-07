/* eslint-disable react/prop-types */
const Certificate = ({ certificate }) => {
  return (
    <div className="certificate bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-violet-200">
      <h4 className="text-lg md:text-xl font-bold text-violet-700 mb-2">
        {certificate.title}
      </h4>
      <p className="text-sm md:text-base text-gray-600">
        Issuer: <span className="font-medium">{certificate.issuer}</span>
      </p>
      <p className="text-sm md:text-base text-gray-600">
        Date: <span className="font-medium">{certificate.date}</span>
      </p>
    </div>
  );
};

export default Certificate;
