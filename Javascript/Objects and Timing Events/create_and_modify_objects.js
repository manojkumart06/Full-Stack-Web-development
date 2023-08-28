var main = function () {
  // Use it to set the student and address objects
  let student = {};
  let address = {};
  function setStudent(name,age,rollno) {
    // Update this function to set the student object (Step 1)
    student.name = name;
    student.age = age;
    student.rollno = rollno;
  }
  function setAddressAndUpdateStudent(City,state) {
    // Update this function to set the address object and set the student object again (Step 2)
	  address.City = City;
      address.state = state;
      student.address = address; 
  }
  function deleteRollNumber() {
    // Update this function to remove 'roll no' property from the student object (Step 3)
      delete setStudent["rollno"];
  }
  function getStudent() {
    return student;
  }
  function getAddress() {
    return address;
  }
  return {
    setStudent,
    setAddressAndUpdateStudent,
    deleteRollNumber,
    getStudent,
    getAddress
  };
};

// Usage
var module = main();

module.setStudent("John Doe", 20, "123");
module.setAddressAndUpdateStudent("New York", "NY");

console.log(module.getStudent());
console.log(module.getAddress());

module.deleteRollNumber();

console.log(module.getStudent());
