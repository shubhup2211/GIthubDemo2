function emp(){ //act as constructor
    this.name = "Shubham";   // this make sure it is belong to method Emp only
}

function EmpData(){
    var empObj = new emp();   //obj creation to share members
    console.log(empObj.name);
}

EmpData();


//Anonymous function
var an = function(a,b){
    c = a + b;
    console.log(c);
}

an(4,5);

//Arrow function
an = (a,b,c) => {
    d = b-a+c;
    console.log(d);
}

an(8,6);
an(4,5,8);