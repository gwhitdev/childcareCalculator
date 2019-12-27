// Please read licence at https://gtw1986.github.io/childcareCalculator/
// Copyright 2019 Gareth Whitley


$(document).ready(function() {
$('.info').toggle(false);
let initialAmount; // The initial amount of money to start working with

/* HMRC variables */
let divideBy = 8;
let timesBy = 2;

/* Totals */
let firstSubTotal;
let secondSubTotal;
let finalSubTotal;

/* Work out the childcare amounts */
    
    $("#submit").click(function(e) {
        $('.info').show();
        window.location = '#info';
        totalChildCare = $("input[name=amountToPay").val();
        initialAmount = $("input[name=initialAmount").val();
        let parsedChildCare = Number.parseFloat(totalChildCare);
        let parsedInitialAmount = Number.parseFloat(initialAmount);

        console.log("childCare: " + totalChildCare);
        console.log("initialAmount: " + initialAmount);

        firstSubTotal = initialAmount / divideBy;
        let parsedFirstSubTotal = Number.parseFloat(firstSubTotal);

        secondSubTotal = parsedFirstSubTotal * timesBy;
        let parsedSecondSubTotal = Number.parseFloat(secondSubTotal);

        thirdSubTotal = parsedSecondSubTotal + parsedInitialAmount;
        finalSubTotal = Number.parseFloat(thirdSubTotal).toFixed(2);
    
        let numberOfWays = $("input[name=numberOfShares").val();
        let parsedNumberOfWays = Number.parseFloat(numberOfWays);
        let childCare = totalChildCare / parsedNumberOfWays;
        let parsedSplitChildCare = Number.parseFloat(childCare).toFixed(2);

        let difference = finalSubTotal - parsedSplitChildCare;
        let fixedDifference = difference.toFixed(2);
        
        $("#toppedUp").text(finalSubTotal);
        $("#difference").text(fixedDifference);
        $("#personalShare").text(parsedSplitChildCare);

        if(fixedDifference > 0) {
            $('#message').text('Consider paying less money in');
            $('#message').show();
        }
        if(fixedDifference < 0) {
            $('#message').text('Consider paying more money in');
            $('#message').show();
        }
        if(fixedDifference == 0) {
            $('#message').text("It looks like you're considering paying the right amount of money in.");
            $('#message').show();
        }
        e.preventDefault();

    });
    $("#reset").click(function(e) {
        $("#toppedUp, #difference, #personalShare").text('0');
        window.location = '#form';
        $('#message').toggle();
        $('.info').toggle();
    });


}); // END