module.exports = function toReadable (number) {
    let numberUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let numberTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    function toDevide (number){
        let number1 = numberUnits[number % 10];        
        let number2 = numberTens[Math.trunc(number/10)-2];
        if (number <= 19) {
            return numberUnits[number];
        } else if (number % 10 == 0) {
            return number2;
        } else {
            return number2 + " "+ number1;
        }
    }

    if (0 <= number && number <= 99){
        return toDevide(number)
    } else if(number % 100 == 0){ 
        return numberUnits[Math.trunc(number / 100)] + " " + "hundred";
    } else { return numberUnits[Math.trunc(number / 100)] + " " + "hundred" + " " + toDevide(number % 100)};

       
}

