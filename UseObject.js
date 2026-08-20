const employee={
    empId:'2',
    name:'ram' ,
    price:'3000',
    techstack:[{
        plang:"java",
        server:'apache',
        database:'mySQl',
        database2:"mongodb"
    },
    {
        plang:"python",
        server:'Django',
        database:'mySQl',
        database2:"mongoodb"
    },
    {
        plang:"React",
        server:'node server',
        database:'mySQl',
        database2:"mongoodb"
    }]
}
console.log(employee)
console.log(employee.techstack[0])
console.log(employee.techstack[1])
console.log(employee.techstack[2].server)