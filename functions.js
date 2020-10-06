function calculateCost() {

    var Allcosts = document.getElementsByClassName("price");
    var i;
    var totalCheque = 0;
    for (i = 0; i < Allcosts.length; i++) {
        totalCheque += parseFloat(Allcosts[i].innerHTML);
    }
    alert('Total Cost is: ' + totalCheque + ' L.E');
}