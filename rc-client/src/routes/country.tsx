import useCountry from "../hooks/useCountry";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack as Back } from "react-icons/io";

const Country = () => {
  const { code } = useParams();
  const { country, loading } = useCountry(code as string);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="w-full h-5/6 flex flex-col justify-center items-center">
        <Loader size="48" />
      </div>
    );
  }

  return (
    <div>
      {!country ? (
        <p>No country found</p>
      ) : (
        <div className="relative flex flex-row justify-between text-yellow-950 p-36 text-left">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-5 left-5 bg-gray-300 px-2 rounded-md border-2 border-gray-500 text-gray-500 hover:brightness-90"
          >
            <Back size='24'/>
          </button>
          <div>
            <h1 className="text-3xl font-bold text-left my-5">
              {country.name.common}
            </h1>
            <h2 className="text-xl text-left my-3">
              {country.name.official} ({country.code})
            </h2>
            <p className="text-xl my-3">Population: {country.population}</p>
            <p className="text-xl my-3">
              Currency: {country.currency.name} ({country.currency.symbol})
            </p>
            <p className="text-xl my-3">Capital: {country.capital}</p>
            <p className="text-xl my-3">Region: {country.region}</p>
            <p className="text-xl my-3">Sub-region: {country.subregion}</p>
            <p className="text-xl my-3">
              Google Maps: <a href={country.maps} className="text-blue-800">{country.maps}</a>
            </p>
          </div>
          <img
            src={country.flag.svg}
            alt={country.flag.alt}
            className="h-52 shadow-xl rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default Country;
