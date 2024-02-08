package org.acme.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CountryFlag {
  private String svg;
  private String alt;
}
