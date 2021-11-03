//cau 1

let str_input  = prompt("cau 1: nhap chuoi can dao nguoc :");
let str_result=""
for(let i=str_input.length-1;i>=0;i--)
{    str_result=str_result+(str_input[i])
}
console.log(str_result);

//cau2
str_input  = prompt("cau 2: nhap chuoi can in hoa chu cai dau :").toString();
str_result = str_input.charAt(0).toUpperCase()

str_result[0]=str_input[0].toUpperCase()
for(let i=1;i<str_input.length;i++)
{    
    if(str_input[i-1]==" ")
    {
        str_result=str_result+str_input[i].toUpperCase()
    }
    else{
        str_result=str_result+str_input[i];
    }
}
console.log(str_result);

//cau 3
let n=prompt("cau 3: nhap so luong mang :");
let arr = new Array();
for(let i=0;i<n;i++)
{
    arr[i]=prompt("phan tu mang thu [" + i +"]");
}

for(let i=0;i<n;i++)
{
    for(let j=i+1;j<n-1;j++)
    {
        if(arr[j]===arr[i])
        {
            arr.splice(j,1);
        }
    }
}
arr_result=""
for(let i=0;i<arr.length;i++)
{
    arr_result=arr_result+arr[i]+"\t"
}
console.log(arr_result)

//cau 4

arr = [
    {
      name: "QuincyColdwater",
      age: 18,
      salary:19000,
      role:"Nhan Vien Thoi vu"
    },
    {
        name: "tran van tai",
        age: 16,
        salary:50000,
        role:"Nhan Vien chinh thuc"
    },
    {
        name: "nguyen phu quang",
        age: 30,
        salary:990000,
        role:"quan ly"
    },
];
n=Number(prompt("cau 4: Chon thao tac(1 read, 2 create, 3 update, 4 delete: "));
switch(n) {
    case 1:
        
        if(arr.length>0)
        {
            for(let i=0;i<arr.length;i++)
            {
                console.log(arr[i]);
            }
        }  
        else
        {
            n=Number(prompt("chon lai thao tac, 2 de create "));
        }
      break;
    
    case 2:

        name_nv=prompt("Ten nhan vien");
        age_nv=prompt("Tuoi tuoi nhan vien");
        salary_nv=prompt("luong nhan vien");
        role_nv=prompt("Chuc Vu nhan vien");

        arr.push({name_nv,age_nv,salary_nv,role_nv});
        for(let i=0;i<arr.length;i++)
            {
                console.log(arr[i]);
            }
      break;
      case 3:
        num=Number(prompt("chon vi tri nhan vien can sua"));
        arr[num].name=prompt("Ten");
        arr[num].age=prompt("Tuoi");
        arr[num].salary=prompt("luong");
        arr[num].role=prompt("Chuc Vu");
        for(let i=0;i<arr.length;i++)
            {
                console.log(arr[i]);
            }
        break;
      case 4:
        num=Number(prompt("chon vi tri nhan vien can xoa"));
        arr.splice(num,1);
        for(let i=0;i<arr.length;i++)
            {
                console.log(arr[i]);
            }
        break;
    default:
        break;
}

//cau 5

    ngay=Number(prompt("Cau 5: nhap ngay :"));
    thang=Number(prompt("nhap thang :"));
    nam=Number(prompt("nhap nam :"));

    switch(thang) {

    case 1: case 3: case 5: case 7: case 8: case 10:  case 12:

                if( ngay>0 && ngay<=31){
                console.log("Ngay thang nam hop le");
                break;
                }
                else
                {                 console.log("Ngay thang nam khong hop le");
                    break;
                }

    case 4: case 6: case 9: case 11:

                if( ngay<=30 && ngay>0){
                    console.log("Ngay thang nam hop le");
                    break;
                }
                else{                 
                    console.log("Ngay thang nam ko hop le");
                    break;
                }
    case 2:
                if (nam % 400 === 0) 
                    checkYear=true; 
                else if (nam % 4 === 0 && nam % 100 != 0) 
                        checkYear=true;
                        else checkYear=false
                if(checkYear===true &&ngay<=29)
                {
                    console.log("Ngay thang nam hop le");
                    break;
                }
                if( ngay <=28 && ngay > 0){
                    console.log("Ngay thang nam hop le");
                    break;
                }
                else
                {                     
                   console.log("Ngay thang nam ko hop le")
                   break;
                }

    default: console.log("Ngay thang nam ko hop le")

    break;

    }

