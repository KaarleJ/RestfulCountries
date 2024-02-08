package org.acme.service;

import java.util.List;

import org.acme.model.Country;
import org.acme.model.SimpleCountry;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.QueryParam;

@Path("/")
@RegisterRestClient
public interface RestfulCountriesService {

  @GET
  @Path("/all")
  List<SimpleCountry> getAll(@QueryParam("fields") String[] fields);

  @GET
  @Path("/name/{name}")
  List<SimpleCountry> getByName(@QueryParam("fields") String[] fields, @PathParam("name") String name);

  @GET
  @Path("/name/{name}")
  List<Country> getOneByName(@QueryParam("fields") String[] fields, @PathParam("name") String name);

}
