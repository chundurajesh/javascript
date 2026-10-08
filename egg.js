let student ={
    name : "rajesh",
    greet: function(){
        console.log("hello"+this.name);
    }
};
student.greet();