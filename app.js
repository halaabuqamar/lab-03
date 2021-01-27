var nomeals = prompt("How Many Meals Did you buy?");

var OrderDetails;

if (nomeals >= 3 && nomeals <= 10) {
    OrderDetails = "Congrats you won a free meal";
}
else if (nomeals >= 11 && nomeals <= 20) {
    OrderDetails = "Congrats you won TWO free meals";
}
else {
    OrderDetails = "Good Luck Next Time";
}

document.write(OrderDetails);
// document.getElementById("order").innerText = nomeals;

var branch = prompt("Write the Branch Name:")
var branchdetails;
if (branch == "abdoun" || branch == "7th circle" || branch == "swefieh" || branch == "abdallah ghosheh") {

} else {
    branchdetails = "you are not being a loyal customer :p";
}

alert('Are You LOvin It');