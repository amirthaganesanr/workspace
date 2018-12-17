package com.myapplication.restclient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@RestController
public class RestclientApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestclientApplication.class, args);
	}
	
	@RequestMapping("/")
	public String myMethod()
	{
		return "Hello RestClient";
	}
	
	@Bean
	public RestTemplate getRestTemplate()
	{
		return new RestTemplate();
	}
}
