import useCountries from "../hooks/useCountries";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import CountryTable from "../components/CountryTable";
import Paper from "../components/Paper";
import AppHeader from "../components/AppHeader";

const Root = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");
  const { countries, loading } = useCountries(search);

  return (
    <div className="flex flex-col justify-start items-center mt-36  ">
      <AppHeader>
        <SearchBar
          setParams={setSearchParams}
        />
      </AppHeader>
      <Paper>
        {loading ? (
          <div className="flex items-center justify-center h-5/6">
            <Loader size="48" />
          </div>
        ) : (
          <CountryTable countries={countries} />
        )}
      </Paper>
    </div>
  );
};

export default Root;
