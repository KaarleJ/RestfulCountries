package org.acme.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SimpleCountry {
  @JsonProperty("name")
  private CountryName name;
  @JsonProperty("flag")
  private CountryFlag flags;
  @JsonProperty("code")
  private String cca2;
}
