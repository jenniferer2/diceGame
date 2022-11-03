var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber1(number) {
    var d1 = document.getElementById('d1');
    d1.innerHTML = "Dice 1 roll: " + number;
  }

  function printNumber2(number) {
    var d2 = document.getElementById('d2');
    d2.innerHTML = "Dice 2 roll: " + number;
  }
  function printTotal(number) {
    var dt = document.getElementById('dt');
    dt.innerHTML = "Total roll: " + number;
  }


  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var total = 0;
    var result1 = dice.roll();
    total = total + result1; 
    printNumber1(result1);
    var result2 = dice.roll();
    total = total + result2;
    printNumber2(result2); 
    printTotal(total);    
  };
  
  