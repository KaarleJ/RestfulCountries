import { Country } from "../types";

const countries: Country[] = [
  {
    name: {
      common: "Afghanistan",
      official: "Islamic Republic of Afghanistan",
    },
    code: "AF",
    flag: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg",
      alt: "Flag of Afghanistan",
    },
    population: 27657145,
    capital: "Kabul",
    currency: {
      name: "Afghan afghani",
      symbol: "؋",
    },
    region: "Asia",
    subregion: "Southern Asia",
    maps: "https://goo.gl/maps/4G3YXfE5z4a3VFr59",
  },
  {
    name: { common: "Åland Islands", official: "Åland Islands" },
    code: "AX",
    flag: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_%C3%85land.svg",
      alt: "Flag of Åland Islands",
    },
    population: 28875,
    capital: "Mariehamn",
    currency: {
      name: "Euro",
      symbol: "€",
    },
    region: "Europe",
    subregion: "Northern Europe",
    maps: "https://goo.gl/maps/4G3YXfE5z4a3VFr59",
  },
  {
    name: { common: "Albania", official: "Republic of Albania" },
    code: "AL",
    flag: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
      alt: "Flag of Albania",
    },
    population: 2886026,
    capital: "Tirana",
    currency: {
      name: "Albanian lek",
      symbol: "L",
    },
    region: "Europe",
    subregion: "Southern Europe",
    maps: "https://goo.gl/maps/4G3YXfE5z4a3VFr59",
  },
  {
    name: {
      common: "Algeria",
      official: "People's Democratic Republic of Algeria",
    },
    code: "DZ",
    flag: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
      alt: "Flag of Algeria",
    },
    population: 40400000,
    capital: "Algiers",
    currency: {
      name: "Algerian dinar",
      symbol: "د.ج",
    },
    region: "Africa",
    subregion: "Northern Africa",
    maps: "https://goo.gl/maps/4G3YXfE5z4a3VFr59",
  },
  {
    name: { common: "American Samoa", official: "American Samoa" },
    code: "AS",
    flag: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg",
      alt: "Flag of American Samoa",
    },
    population: 57100,
    capital: "Pago Pago",
    currency: {
      name: "United States dollar",
      symbol: "$",
    },
    region: "Oceania",
    subregion: "Polynesia",
    maps: "https://goo.gl/maps/4G3YXfE5z4a3VFr59",
  },
  {
    name: { common: "Andorra", official: "Principality of Andorra" },
    code: "AD",
    flag: {
      svg: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
      alt: "Flag of Andorra",
    },
    population: 78014,
    capital: "Andorra la Vella",
    currency: {
      name: "Euro",
      symbol: "€",
    },
    region: "Europe",
    subregion: "Southern Europe",
    maps: "https://goo.gl/maps/4G3YXfE5z4a3VFr59",
  },
];

export const getCountries = async (search: string | null) => {
  if (search) {
    const res = new Promise<Country[]>((resolve) => {
      setTimeout(() => {
        resolve(
          countries.filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(search.toLowerCase())
          )
        );
      }, 1000);
    });

    return res;
  } else {
    const res = new Promise<Country[]>((resolve) => {
      setTimeout(() => {
        resolve(countries);
      }, 1000);
    });

    return res;
  }
};

export const getCountry = async (code: string) => {
  const res = new Promise<Country>((resolve, reject) => {
    const country = countries.find(
      (country) => country.code === code
    );
    if (country) {
      setTimeout(() => {
        resolve(country);
      }, 1000);
    } else {
      reject(`Country ${code} not found`);
    }
  });

  return res;
};
