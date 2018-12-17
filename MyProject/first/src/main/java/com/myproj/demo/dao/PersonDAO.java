package com.myproj.demo.dao;

import java.util.List;

import com.myproj.demo.dataobjects.Person;

public interface PersonDAO {
	
	public List<Person> getPersons();
	
	public void addPerson(Person person);

}
