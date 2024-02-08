package org.acme.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CountryCurrency {
  private String name;
  private String symbol;
}
