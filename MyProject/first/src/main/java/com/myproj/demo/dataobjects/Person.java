package com.myproj.demo.dataobjects;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;


/**
 * The persistent class for the PERSONS database table.
 * 
 */
@Entity
@Table(name="PERSONS")
public class Person implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name="AGE")
	private BigDecimal age;

	@Id
	@Column(name="ID")
	private BigDecimal id;

	@Column(name="LOCATION")
	private String location;

	@Column(name="NAME")
	private String name;

	public Person() {
	}

	public BigDecimal getAge() {
		return this.age;
	}

	public void setAge(BigDecimal age) {
		this.age = age;
	}

	public BigDecimal getId() {
		return this.id;
	}

	public void setId(BigDecimal id) {
		this.id = id;
	}

	public String getLocation() {
		return this.location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}