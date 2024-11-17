import Link from "./Link";

interface CountryCardProps {
  name: {
    common: string;
    official: string;
  };
  flag: {
    svg: string;
    alt: string;
  };
}

const CountryCard = ({ name, flag }: CountryCardProps) => {
  return (
    <Link
      to={`/country/${name.common}`}
      className="bg-yellow-100 m-2 shadow-md py-5 px-16 flex flex-row justify-start items-center h-20 rounded-md w-full hover:text-cyan-500 hover:brightness-90 relative mt-5"
    >
      <h2 className="text-2xl mr-5 text-yellow-950 text-left truncate max-w-sm">
        {name.common}
      </h2>
      <h3 className="text-lg text-yellow-800 text-left truncate md:flex">
        ({name.official})
      </h3>
      <img
        src={flag.svg}
        alt={flag.alt}
        className="w-20 h-12 shadow-md absolute top-5 right-5"
      />
    </Link>
  );
};

export default CountryCard;
