package com.myproj.demo;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.myproj.demo.dataobjects.Person;

@Path("/services")
public interface FirstService {
	
	@GET
	@Path("/myMethod")
	@Produces({"application/json"})
	public Response myMethod();
	
	@GET
	@Path("/myDB")
	@Produces({"application/json"})
	public Response myDB();
	
	@GET
	@Path("/refData")
	@Produces({"application/json"})
	public Response refDataValue();
	
	@POST
	@Path("/addData")
	@Produces({"application/json"})
	@Consumes({"application/json"})
	public Response addData(Person person);

}
