package org.acme.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CountryName {
  private String common;
  private String official;
}
