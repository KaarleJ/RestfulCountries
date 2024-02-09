package org.acme;

import java.io.InputStream;
import java.util.Scanner;

import org.jboss.resteasy.reactive.server.ServerResponseFilter;

import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerResponseContext;

public class Filters {

  @ServerResponseFilter

  public void forwardingFilter(ContainerRequestContext requestContext,
      ContainerResponseContext responseContext) {
    if (responseContext.getStatus() == 404) {
      responseContext.setStatus(200);
      try {
        InputStream stream = getClass().getResourceAsStream("/META-INF/resources/index.html");
        if (stream != null) {
          try (Scanner scanner = new Scanner(stream).useDelimiter("\\A")) {
            String html = scanner.hasNext() ? scanner.next() : "";
            responseContext.setEntity(html);
            responseContext.getHeaders().putSingle("Content-Type", "text/html");
          }
        }
      } catch (Exception e) {
        responseContext.setStatus(500);
        responseContext.setEntity("Internal Server Error");
      }
    }
  }
}
