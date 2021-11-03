const student =[
    {
        name:"Nguyen van a",
        Age: 18,
    },
    {
        name:"Tran Van b",
        Age: 17,
    },
    {
        name:"Le Thi c",
        Age: 17,
    }
    ]
    
    for(let i=0;i<student.length;i++)
    {
        if(student[i].name==="Tran Van b" && student[i].Age===17)
        {
            console.log(student[i]);
        }
        if( student[i].Age===17)
        {
            console.log(student[i]);
        }
    }