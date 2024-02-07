interface CountryCardProps {
  name: {
    common: string;
    official: string;
  };
  flag: {
    svg: string;
    alt: string;
  };
  code: string;
}

const CountryCard = ({ name, flag, code }: CountryCardProps) => {
  return (
    <a href={`/country/${code}`} className="bg-yellow-100 m-2 shadow-md py-5 px-16 flex flex-row justify-between items-center h-20 rounded-md w-full hover:text-cyan-500 hover:brightness-90">
      <div className="flex flex-row">
        <h2 className="text-2xl mr-5 text-yellow-950">{name.common}</h2>
        <h3 className="text-xl text-yellow-800">({name.official})</h3>
      </div>
      <img src={flag.svg} alt={flag.alt} className="w-20 h-12 shadow-md" />
    </a>
  );
};

export default CountryCard;
