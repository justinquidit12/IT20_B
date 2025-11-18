// function legalAge(age){

//     if( age >= 18){
//         console.log("you are not am adult");

//     }else{
//         console.log("you are not an adult");
//     }
// }
// legalAge(69);

// function computerGrade(grade){

//     let grade = 76;

//     if(grade > 75 && grade > 80)
//     {
//         console.log("kaya")
//     } else if (grade > 80)
//     {
//         console.log("pas");

//     }else{
//         console.log("bagsak");
//     }
// }

function computerGrade(grade){

    if(grade >= 94.5){
        console.log("1")
    }else if (grade => 91.5){
console.log("1.25")
 }else if (grade => 91.5){
console.log("1.25")
 }else if (grade => 89.5){
console.log("1.5")
 }else if (grade => 86.5){
console.log("1.75")
 }else if (grade => 84.5){
console.log("2")

    }else{
        console.log("Not within the transmutation");
    }
}

computerGrade(87);

function login(username, password) {

    if (username === "justins") {
        console.log("welcome user");
    } else {
        console.log("invalid Login Credential");
    }

}

login("justin", 1234);

function ticketPricce(Age){
    if (Age < 18){
        if(Age < 5){


     console.log("Ticket: Free");

      }else{

   console.log("Ticket: Child price");
        }

    }else{
        if (Age >=60){
            console.log("Ticket: Sentor Discount");
                }else{
                    console.log("Ticket: Adult Price");
        }

    }
}

ticketPricce(20);