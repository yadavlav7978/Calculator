

let display_text = document.getElementById('display');
let input = "";

let button = Array.from(document.querySelectorAll('button'));

function checkoperator(s){

    if(s=='+' || s=='-' || s=='*' || s=='/' || s=='%' || s=='.'){
        return true;
    }
     return false;
}

button.forEach(element => {
    element.addEventListener('click', (event) => {
        if (element.textContent == '=') {
            let output = eval(input).toString();
            display_text.textContent = output;
            input = output;
        }
        else if (element.textContent == 'AC') {
            input = "";
            display_text.textContent = "0";
        }
        else if (element.textContent == 'DEL') {
            input = input.slice(0, -1);  // to pop remove the last element from input string 
            //The slice() method takes two arguments: the start index and the end index.
            // SYNTAX: string.slice(startIndex, endIndex);
            if (input == "") {
                input = "0";
            }
            display_text.textContent = input;
        }
        else {
          
            if(checkoperator(element.textContent) && (input.length>0 && checkoperator(input.slice(-1)))){
                    // do nothing,because i dont want something like this **/+,//*,98**
            }else{
            input += element.textContent;
            display_text.textContent = input;
            }
        }
    });
});


// function solve(s){
//     let operator;
//     let leftpart="";
//     let rightpart="";

//     let i=0;
//     while(!isNaN(s[i])){  // jab tak not a number false hai (input string number hai)
//         leftpart+=s[i];
//         i++;
//     }
//     operator=s[i];
//     i++;

//     while(i<s.length){
//        rightpart+=s[i];
//        i++;
//     }
//     let result;
//     leftpart=parseInt(leftpart);
//     rightpart=parseInt(rightpart);

//     if(operator=='+'){
//       result=leftpart+rightpart;
//     }
//     else if(operator=='-'){
//         result=leftpart-rightpart;
//     }
//     else if(operator=='X'){
//         result=leftpart*rightpart;
//     }
//     else if(operator=='÷'){
//         result=leftpart/rightpart;
//     }
//     else if(operator=='%'){
//         result=leftpart%rightpart;
//     }

//     return String(result);

// }