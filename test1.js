const fs = require("fs");

fs.readFile(
  "equation.json",
  // callback function that is called when reading file is done
  function (err, data) {
    // json data
    const jsonData = data;
    // parse json
    const jsonParsed = JSON.parse(jsonData);
    //operators array
    const operators = {
      add: "+",
      subtract: "-",
      multiply: "*",
      divide: "/",
      equal: "=",
    };
    let eq, operator1, operator2, equation;
    for (opt in operators) {
      if (jsonParsed.op == opt) {
        eq = operators.equal;
      }
      //looking for first operator
      if (jsonParsed.lhs.op == opt) {
        if (opt == "add") {
          operator1 = operators.add;
        } else if (opt == "subtract") {
          operator1 = operators.subtract;
        } else if (opt == "multiply") {
          operator1 = operators.multiply;
        } else if (opt == "divide") {
          operator1 = operators.divide;
        }
      }
      //looking for second operator
      if (jsonParsed.lhs.rhs.op == opt) {
        if (opt == "add") {
          operator2 = operators.add;
        } else if (opt == "subtract") {
          operator2 = operators.subtract;
        } else if (opt == "multiply") {
          operator2 = operators.multiply;
        } else if (opt == "divide") {
          operator2 = operators.divide;
        }
      }
    }

    //parsing expression
    equation =
      jsonParsed.lhs.lhs +
      operator1 +
      "(" +
      jsonParsed.lhs.rhs.lhs +
      operator2 +
      jsonParsed.lhs.rhs.rhs +
      ")" +
      eq +
      jsonParsed.rhs;

    console.log(equation);
  }
);
