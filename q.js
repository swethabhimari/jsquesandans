//1
var str1="  Hello"
var str2="good morning  "
console.log(str1.trimStart(),str2.trimEnd());
var str=(str1.concat(" ",str2));
console.log(str.toUpperCase())
//2
var m="string MIDDLE part"
 console.log(m.slice(7,13).toLowerCase())
 console.log(m.indexOf("t"))
 //3
 var p="b."
   var q="swetha"
console.log(p.concat(q).toUpperCase().charAt(6));
//4
var a1="hello"
  var a2="welcome"
var r=a1.charAt(0).toUpperCase()+a1.slice(1,3).concat(a2.slice(-3,-1))+a2.charAt(a2.length -1).toUpperCase()
console.log(r)
//5
var ex="   extra  string  ";
var trim=ex.trim()
 var up=trim.charAt(0).toUpperCase()+trim.slice(1,12)+trim.charAt(trim.length -1).toUpperCase()
 console.log(up)
 //6
 var st="hello there how are you"
  console.log(st.indexOf("are"))
  //7
  var smartphone={
    Brand:"samsung",
    Model:"s24 5G",
    Prize:100909
    }
    console.log(Object.seal(smartphone));
    smartphone.Prize=200000;
    console.log(Object.isSealed(smartphone));
    //8
    var book={
      name:"The adventures of sherlack holmes",
      Author:"canon",
      Publishedyear:1989
      }
      console.log(book)
      console.log(Object.freeze(book))
      book.publishedyear=2000;
      console.log(Object.isFrozen(book))
      //9
      var person={
        Firstname:"swetha",
        Lastname:"beemari",
        age:16
        }
        console.log(Object.keys(person));
        console.log(Object.values(person))
        //10
        var course={
          Title:"java",
          Instructor:"google",
          Duration:"6mnths"
          }
          console.log(Object.entries(course))
          delete course.Duration
          console.log(course)
          //11
          var employee={
            Name:"swetha",
            Position:"developer",
            Salary:50000
            }
            console.log(employee)
            console.log(Object.seal(employee))
            employee.Position="seniordeveloper"
            console.log(Object.keys(employee))
            //12
            var s="hi hello welcome"
            var m=s.slice(3,8).toUpperCase()
            console.log(m)
            //13
            var s1="string"
            console.log(s1.toUpperCase(),s1.length)
            //14
            var a="ASCII"
            var c=a.charAt(3).charCodeAt(3)
            console.log(c)
            //15
            var sf="  second  "
            var tr=sf.trim().slice(1,4)
            console.log(tr)
            //16
            var b1="STRING1"
            var b2="STRING2"
             var concat=b1.concat("  ",b2.toLowerCase())
             console.log(concat)
             //17
             var sp="  space"
             var tri=sp.trim().slice(1,6)
             console.log(tri)
             //18
             var char="character"
             var c=char.charAt(3).toUpperCase()
             console.log(c)
             //19
             var a=5
             var b=10
             var c=20
             var result=a*b+c
             console.log(result)
             var comp={
             eq:result==100,
             gr:result>=100,
             less:result<=100,
             neq:result!=100
             }
             console.log(comp)
             //20
             var x=8
             var y=12
             var logical={
                  and:x>5&&y<20,
                  or:x>5||y<20,
                  and2:x>5&&y>20,
                  or2:x<5||y<20,
                  or3:x<5||y>20
             }
             console.log(logical)
             console.log(!logical)
             //21
             var num1=25>35 ? "YES 25 is  less tha 35" :"NO 25 is not greater than 35"
             console.log(num1)
             //22
             var m=15
             var n=10
             var operations={
              sub:m-n,
              div:m/n
             }
             console.log(operations)
             var result=operations%2==0 ? "even" : "sub=5,div=1.5 both are odd numbers"
             console.log(result)
             //23
             var age=18
              var com={
              eq:age==18,
              typeq:age===18
            }
             console.log(com)










