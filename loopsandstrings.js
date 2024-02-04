// FOR LOOP
// let Sum=0;
// for (let i= 0; i<=5; i++) {
//  Sum=Sum+i;
// }
//  console.log(Sum);
// infinite loop can be ended we shouldnever do in our programme that it takes more and more spaces inside the memory.
// stopping condition =true always then loop is never ending infinite loop
// eg for(let i=1;i<=0;i++) it will hang our browser
    // WHILE LOOP
    // while(condition){----> Initialisation
        // do some work ---->Updation
    // }
    // let i=0;
    // while (i<=5) {
    //     console.log("i=",i);
    //     i++;
    // }
    // DO WHILE LOOP atleast ek bar run krega hi krega
    // do  {
        // do some work
    // }while(condition);
    // let i=1;
    // do{
    //     console.log("i=",i);
    //     i++;
    // }while (i<=10);
    //****FOR-OF LOOP****
    // to iterate on some special data type means special data type ke upar loop lagane me help krte haa.
        // for(let Val of strVar){
            // do some work
        // }
        // let Str="ApnaCollege";
        // let size=0;
        // for (let i of Str) { 
        //     // iterartore-->Characters
        //     console.log("i=" ,i);
        //     size++;
            
        // }
        // console.log("string size=",size);
        // FOR-IN LOOP
        // let Student={
        //     name:"Rahul Kumar",
        //     age: 20,
        //     Cgpa:9.8,
        //     isPass:true,

        // };
        // for (let  i in Student) {
        //    console.log("i=",i, "value=",Student[i]);
        // //    i ki value humari keys return karta haa
                
        //     }
        // TO print even numbers
        // for(let i=0; i<=100;i=i+2) {
        //     console.log("i=",i);
            
        // // } GUESSING THE GAME NUMBER
        // const prompt=require('prompt-sync')();
        // let gameNumber=25;

        // let userName=prompt("Guess the number:");
        // console.log(userName);

        // while (userName !== gameNumber) {
        //      userName= prompt("You entered the wrong number,guess again:");
        // }
        //  console.log("congratulations, you entered the right numner");
        // STRINGS****
        // strings is a sequence of characters used to represent text

    // let Str1="Kirat"
    // let Str2="Anand"
    // console.log(Str2.length);
    // let Str2="Apnacollege"
    // console.log(Str2[5]);
    // TEMPLATE LITERALS
    // BACTIC=``
    // let Sentence=`This is Template Literal`;
    // console.log( typeof Sentence);
    // template literals me string ke sath variables ko bhi likh sakte haa
    // let Object={
    //     item:"Pen",
    //     price: 10,
    // };
    // let output=`the cost of ${Object.item} is ${Object.price} rupees`;
    // console.log(output);
    // template literals are strings have embedded expressions in strings
    // console.log("Apna \n College");
     // \n escape character used to print the characters in other line
    // console.log("Apna\tCollege");
    // /t single character count hoti haa
    // strings me koi change nhi ata they are immutable
    // ******STRINGS METHODS AND FUNCTIONS*******
    let Str="HelloKiratAnand"
    let Str2="KIHALLCHALL"
    let Str3="   Miljuga    "
    let Str4="Learning Javascript"
    console.log(Str.toUpperCase());
    console.log(Str2.toLowerCase());
    console.log(Str3.trim());
    console.log( Str4.slice(0,8));
    console.log(Str2.concat(Str3));
    console.log(Str3.replace("j","Q"));
    // agar j repetition me haa to jab sab se pehla wala j metch hoga to replace krega
    console.log(Str2.charAt(3));
