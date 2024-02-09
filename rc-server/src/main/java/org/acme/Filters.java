package org.acme;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

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
        responseContext.setEntity(Files.readString(Paths.get("src/main/resources/META-INF/resources/index.html")));
      } catch (IOException e) {
        responseContext.setStatus(500);
        responseContext.setEntity("Internal Server Error");
      }
    }
  }
}
