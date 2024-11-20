const calculateResult = () => {/**from html function will be calledd */
 
 

  /* input recived from form by id*/
  let numOne = parseFloat(document.getElementById("firstNumber").value);
  let numTwo = parseFloat(document.getElementById("secondNumber").value);
  let operation = document.getElementById("operation").value;

  let xecute = /* calling fuction  based on operation*/ 
   
    operation === "+" ? addTwo(numOne, numTwo) :/**additon  */
    operation === "-" ? cutThem(numOne, numTwo) :/**substraction */
    operation === "/" ? divideEm(numOne, numTwo) :/**diviton */
    bioLogy(numOne, numTwo); /**multiply */
  
  document.getElementById("result").textContent = `Result: ${xecute}`;/**sending to output */
}

const addTwo = (numOne, numTwo) => numOne + numTwo;
const cutThem = (numOne, numTwo) => numOne - numTwo;
const divideEm = (numOne, numTwo) =>  numOne / numTwo;
const bioLogy = (numOne, numTwo) => numOne * numTwo;
