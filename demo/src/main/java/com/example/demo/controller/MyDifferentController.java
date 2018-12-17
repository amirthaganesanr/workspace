package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyDifferentController {
	@RequestMapping(value="/different")
    public String myMethod()
    {
    	return "Return Value";
    }

}
