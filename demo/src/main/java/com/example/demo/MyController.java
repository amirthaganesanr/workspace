package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
	
	@RequestMapping(value="/main")
    public String myMethod()
    {
    	return "Return Value";
    }

}
