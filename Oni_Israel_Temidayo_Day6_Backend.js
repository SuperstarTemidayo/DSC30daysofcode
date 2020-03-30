function squareNumbers(numbers){
  
    numbers.forEach(function(element, index, array){
        array[index] = element* element;
    });
    console.log(numbers);
    }
    squareNumbers([1,2,3,4])