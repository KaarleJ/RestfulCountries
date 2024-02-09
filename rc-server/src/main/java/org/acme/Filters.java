package org.acme;

import java.net.URI;

import org.jboss.resteasy.reactive.server.ServerResponseFilter;

import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerResponseContext;
import jakarta.ws.rs.core.Response;

public class Filters {

  @ServerResponseFilter
  public void forwardingFilter(ContainerRequestContext requestContext,
      ContainerResponseContext responseContext) {

    URI newLocation = URI.create("http://host:8080/");
    responseContext.getHeaders().putSingle("Location", newLocation);
    responseContext.setStatus(Response.Status.TEMPORARY_REDIRECT.getStatusCode());
  }
}
