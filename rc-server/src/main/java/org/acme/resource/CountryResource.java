package org.acme.resource;

import java.util.List;

import org.acme.model.Country;
import org.acme.model.SimpleCountry;
import org.acme.service.RestfulCountriesService;
import org.eclipse.microprofile.rest.client.inject.RestClient;
import org.jboss.resteasy.reactive.ClientWebApplicationException;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Response;

@Path("/api/countries")
public class CountryResource {

    @Inject
    @RestClient
    RestfulCountriesService restfulCountriesService;

    @GET
    public List<SimpleCountry> getAll() {
        return restfulCountriesService.getAll(new String[] { "name", "flags", "cca2" });
    }

    @GET
    @Path("/search")
    public Response getByName(@QueryParam("name") String name) {
        try {
            List<SimpleCountry> countries = restfulCountriesService.getByName(
                    new String[] { "name", "flags", "cca2", "population", "capital", "region", "subregion",
                            "currencies", "maps" },
                    name);
            return Response.ok(countries).build();
        } catch (ClientWebApplicationException e) {
            return Response.ok(List.of()).build();
        }
    }

    @GET
    @Path("/name/{name}")
    public Response getCountryByName(@PathParam("name") String name) {
        try {
            List<Country> countries = restfulCountriesService.getOneByName(
                    new String[] { "name", "flags", "cca2", "population", "capital", "region", "subregion",
                            "currencies", "maps" },
                    name);
            return Response.ok(countries.get(0)).build();
        } catch (ClientWebApplicationException e) {
            System.out.println(e.getLocalizedMessage());
            return Response.ok().build();
        }

    }
}