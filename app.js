var initialPrice = document.querySelector("#initial-price");
var stockNumber = document.querySelector("#number-stocks");
var finalPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#btn-submit");
var outputBox = document.querySelector('#output');


function profitLossCalculator(initial, current, number) {
 
    if (initial && current && number) {
        if (initial > current) {
            var lossAmount = initial - current;
            var lossPercentage = (lossAmount/initial)*100;
            lossAmount = lossAmount.toFixed(2)
            lossPercentage = lossPercentage.toFixed(2)
            outputBox.innerText = "Oops! You got a loss of Rs."+ lossAmount + ". Loss Percentage is "+lossPercentage + "%";
            outputBox.style.color = "Red"
        }
        else{
            if(initial < current){
                var profitAmount = current - initial;
                var profitPercentage = (profitAmount/initial)*100;
                profitAmount = profitAmount.toFixed(2)
                profitPercentage = profitPercentage.toFixed(2)
                outputBox.innerText = "Congratulations! You got a profit of Rs."+ profitAmount + ". profit Percentage is "+profitPercentage + "%";
                outputBox.style.color = "Green"

            }else{
                outputBox.innerText = "Everything is as it is."
                outputBox.style.color = "yellow"
            }
        }


    }else{
        outputBox.innerText = "Please Enter all the fields."
        outputBox.style.color = "Red"
    }


}







function clickHandler(){
    number = stockNumber.value;
    initial = (initialPrice.value)*number;
    current = (finalPrice.value)*number;
    
    profitLossCalculator(initial, current, number)
}




submitButton.addEventListener("click", clickHandler)
refreshBtn.addEventListener("click", refreshHandler)
