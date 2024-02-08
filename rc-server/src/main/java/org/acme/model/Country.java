package org.acme.model;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonCreator;

import lombok.Data;

@Data
public class Country {

  private CountryName name;

  private String code;

  private CountryFlag flag;

  private Integer population;

  private String capital;

  private String region;

  private String subregion;

  private CountryCurrency currency;

  private String maps;

  @JsonCreator
  public Country(
      CountryName name,
      String cca2,
      CountryFlag flags,
      Integer population,
      String[] capital,
      String region,
      String subregion,
      Map<String, CountryCurrency> currencies,
      Map<String, String> maps) {
    this.name = name;
    this.code = cca2;
    this.flag = flags;
    this.population = population;
    this.capital = capital[0];
    this.region = region;
    this.subregion = subregion;
    this.currency = currencies.values().iterator().next();
    this.maps = maps.get("googleMaps");
  }
}
