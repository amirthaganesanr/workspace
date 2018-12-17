class MyObject
{
	constructor(name,age)
	{
		this.name = name;
		this.age = age;
	}

	function myAge()
	{
		return this.age;
	}
}

export default MyObject;