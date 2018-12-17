package com.myapplication.restclient.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
	
	@RequestMapping(value="/controller")
	public String myMethod()
	{
		return "Hello Rest Controller";
	}

}
