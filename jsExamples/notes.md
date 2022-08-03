# form validation

## name check
- include a second [a-z] after [A-Z] because the name has to have at least 2 characters

## checked radio
- default checked
- como garantir que a pessoa tenha que selecionar para poder enviar
- seguir exemplo do restaurante

if (!(s[0].checked || s[1].checked)) {
    alert("Birth sex must be informed");
    return false;
} else {
    return true;
}

## value vs pointers

Call by value
- if I change the value in the function, does not change in the main (if the data is stack)
- if is Heap, it will change (array for example)

JS -> call by value (or by value with pointerss)

map -> new array, same size (return)
filter -> reduce array (return)

DOM

live -> getElementBy...
static -> querySelector...

## events js

addEventListener(type, function, false/true)

false -> false to bubbling -> by default is bubbling false
true -> true to capture

capture -> from outside to inside
bubbling -> from inside to outside

## regex - intro

/ab+c/

...abc...
...abbc...
...abbbc...

can be letters before and after

/^ab+c$/

there's a start and end

abc
abbc
abbbc

/^ab*c$/

b can also be 0

ac
abc
abbc
abbbc

-> i can't write regex to validate "counting"

/a(b+)c/

- saving b in memory
- but i can't count

/bonjour/ 
/bonjour/g -> replace globally
/bonjour/gi -> replace globally and without carrying for upper case
/(b)onjour/gi -> replace with "$1onsoir"  -> it will make Bonsoir when Bonjour has upper case B

[ ] -> remove space -/[ ]/g -> "-"

## regex - removing and replacing characters

/\+/g/ -> replace to " " (for all +, replace each one with space -> result 3 spaces when there's +++)
/\++/g/ -> replace to " " (replace sequecences of at least one + with space -> result: +++ (is a sequence) now it's just 1 space)

/\+(\+*)/g -> replace with -> " $1"

&nbsp -> non breakable space -> respected by html (it can make a space without html touch it)

/^[A-Z]([a-z]|(([ ]+|[-])[A-Z]))*$/
- begin with A to Z in upper case letter
- followed by 0 or many of the following (* => repeat for 0 or several times what's inside () )
                    - one or more space
                    - one dash (-)
- if the anterior is true, then next name letter must be upper case
- end string

/^[A-Z]([a-z]|((\s+|[-])[A-Z]))*$/
\s -> white space, also accepts tab
so Mary\tBrown will be accepted

lenght -> must be at least 2 letters the name of a person
/^[A-Z][a-z]([a-z]|((\s+|[-])[A-Z]))*$/

var regex = /[a-z]/;
regex.source -> present the string of the variable

/^(\+\d{1,3}[ ])?(\(\d{3}\)[ ]|\d{3}-)\d{3}-\d{4}$/

(\+\d{1,3}[ ])? =>> +n
(\(\d{3}\)[ ] =>> (nnn)
| =>> or
\d{3}-) =>> nnn-
\d{3}-\d{4}$/ =>> nnn-nnnn

? means 0 or 1
+ means 1 to infinit
* means 0 to infinit
\d{1,3} means the QUANTITY goes to 1 to 3
\d means it's a digit

--

## regex - review numbers

https://regexr.com/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

student number LSH12345
\^LS[UAHM]\d{5}$\

postal code canada
^[A-Z]\d[A-Z]([ ]|-)?\d[A-Z]\d$/i

i => case insensitive (allow upper and lower case)

\w => could be also a number, so pay attention

\s => accepts tab, we don't use it

+ => 1 or more
? => 0 or 1
* => 0 or plus

if you want () or + (real char) you have to put \ (scape)

## slideshow

- use in our project final

solution 1
- hard coded slides

solution 2
- don't use example 2 (does not work) -> the transition does not work

solution 3
-> resolve ->  remove element and add it again
-> use querySelector because is static

solution 4
- similar to 1, but uses JS to setup the slides/images
- most elegant

solution 5
- adaptation of 3
- img background
- flex
- use if you have text and image to bg
- only good if you just want to change image with the same text

## flexbox

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://codepen.io/enxaneta/full/adLPwv/ 

------------------------------------------------------------------------

## celine notes

comparison operators: 
        - == compares only values, allowing automatic type conversion
        - === compares both values and types without type conversion
        - != 
        - !== 
        - < 
        - > 
        - >=
        - <= 

conditional operator : 
        - ?: 
            - ex: (a > b)? a/b : b/a meaning if a >b then return a/b else return b/a 

logical operators:
        - && means logical and 
        - || means logical or 
        - | means logical not
    
bitwise operators: (used in circuits)
        - & means and
        - | means or
        - ^ means 
    
- we can't use - bc it represents minus
- variable names are case sensitive
- without saying var, then the variables are going to be considered as global variables
- gloabal = makes connection with the whole code, therefore the complexity goes up
    
automatic conversions : 
        - "5" == 5 => true, if there were 3 = (===), then it'll prevent the conversion from happening
        - "5"-1 => js compiler forgives, therefore will be as if it was 5-1 = 4
        - "5"+1 => js prefers concanation instead of forgiveness for addition, therefore, will show "51"
        - 5 + "1" => "51", bc it's still an addition
        - "5" - 1 + 1 => converts to number, then stays as number after the minus, therefore it's 5
        - "5" + 1 - 1 => concatenation, therefore it's 50
        
        x = "5";
        y = 5; 

        x ==y => true

        (x+1)==(y+1) => false ("51==6", which is false)

        false == 0 => true (false can be converted to 0)
            - 0 == "0" => true (automatic conversion)
            - false == "0" => true
            - "" == 0 => true (empty string is false)
                - 0 == "0" => true 
                - "" == "0" => false (bc they're both strings)
        
        if("0") {do A}
        else{do B} 
        //wil, execute A, bc the string is not empty (inconsistency in js)

        - "five" + 1 => "five1"
        - "five" - 1 => NaN 


            - NaN === NaN -> false
                - === > exactly equal to itself
                - however, that statement is false 

            - NaN == NaN -> false 

            - y = "five";
            - X = y-1;

            if (x==NaN) {
                write ("It's NaN"); 
            }

                - result : this will never print out that string
            
                option 2: (to make it work)
                    if (isNaN(x)) {
                        write ("It's NaN"); 
                    }
                    
                    //creating a fct to make it not NaN
                    function IsNaN(x) {
                        return !(x===x); 
                    }

                        - NaN is the only fonction that can say that it is not itself therefore the function above works
            
            other conversion examples: 
                false == 0 -> true
                false == " " -> true 
                " " == 0 -> true 
                "Five" + 0 -> "Five0"
                "five" + "" -> "five" 
                    
                    conversions doesn't go through other elements 

                x = false; 
                if(x) {do A;} 
                else {do B;} 
                    result : do B; 
                
                x = 0;
                if (x) {do A;}
                else{do B;}
                    result : do B;
                
                x="";
                if (x) {do A;}
                else {do B;} 
                    result : do B;

                x = NaN; 
                if(x) {do A;}
                else{do B;} 
                    result: do B; 

                5 == false -> false
                5 == true -> false

                    if 5 can be converted into false?
                    x = 5; 
                    if (x) {do A;}
                    else {do B;}
                        result: 


                
                *NaN is not convertible to false (neither true or false)
                
                because of all of the rules that conflict with each other : 
                false == 0 -> true
                false == "" -> true
                "" == 0 -> true

                "0" == 0 -> true
                0 == "" -> true
                "0" == "" -> false 
                
                //not necessarily transitive
                "0" == false -> true
                "0" == true -> false 

                x="0"; 
                if(x) {do A;}
                else {do B;}
                    result: will execute A because of the conflict of rules
                        - rule 1: if something can be converted to false, it must be treated as false in a condition
                        - rule 2: if a string is used as a condition, the empty string is treated as false and any non-empty string is treated as true 

                1)the piece of code: 
                if(x) {A;}
                else {B;}

                    is equivalent (hold the same result) to 
                        if (x==true) {A;}
                        else {B;}

                        (  ) true
                        (  ) false

                                    deductions: if x=5, then it would produce A on top and B at the bottom 

                1) the piece of code: 
                    if(!x) {A;}
                    else{B;}

                    is equivalent (hold the same resut) to 

                    if (x==false) {A;}
                    else {B;}

                    (  ) true
                    (  ) false 
                                    deduction, if it was 0, then it would be false and false, therefore the answer is NaN 

                2) the piece of code: 
                    if (x==true) {A;}
                    else {B;}

                    is equivalent (hold the same resut) to 

                    if((!x)==false) {A;}
                    else{B;}

                    (  ) true
                    (  ) false 
                                    deduction, if x=5, it would be B, bc 5 can't be converted to true, not 5 would be converted to A so NaN wouldn't work here
                                    
                3) the piece of code: 
                    if (x==false) {A;}
                    else {B;}

                    is equivalent (hold the same resut) to 

                    if((!x)==true) {A;}
                    else{B;}

                    (  ) true
                    (  ) false 
                                    deduction, NaN would be B at first, then true to give A, so NaN works for not equivalence

                4) the piece of code: 
                    if (x==false) {A;}
                    else {B;}

                    is equivalent (hold the same resut) to 

                    if((!x)==false) {A;}
                    else{B;}

                    (  ) true
                    (  ) false 
                                    deduction, 5 would be B at first, then B, therefore 5 doesn't work
                                                as for NaN, would be B at first, then A (not equivalent, therefore it works) 
                
                5) the piece of code: 
                    considering the piece of code: 
                        if (x==x) {B;}
                        else {A;}
                        - statement: we can say that it will always execute B
                                    deduction, would be false, bc of the example of NaN 
                
                NOTE :
                - null === null (even without conversion)
                - undefined === undefined 
                - null == undefined (even with conversion)           
                
        inputs in the documents don't mean anything to the HTML? true 
                    - <p> Today is 
                            Monday 
                        </p> 
                    
                            - browser wouldn't understant the break unless we put <br> between

        controls: 
        for-in : 
                    - for each index 
                    - won't have to respect the boundaries 
                    - automatically goes index 1, 2, 3, 4, etc. 
        
        for-of: 
                    - c# and java only
                    - any element that consists of a list 

        js also has breaks just like html

        c# = delegation (in js too)
                    - declaring a variable to be a functional variable 
                    - has to be a special variable that can receive the function
                    - variable can have a value of a function   
        
        in js, we can also make anonymous functions -> function with no name 
                    - we can use it to execute immediately since it has no name, we can't call it 
