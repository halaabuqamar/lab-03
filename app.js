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


// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
var order = prompt('have you ordered Big tasty or Big mac inter the name?'); 

while (order !== 'Big tasty' && order !== "Big mac") {
    order = prompt('have you ordered Big tasty or Big mac inter the name?');  
} 

var itemOrder;
if (order === 'Big tasty') {
    itemOrder =  '<img src="pictures/bigtasty.jpg"/>';
} else if (order === 'Big mac') {
    itemOrder = '<img src="pictures/bigmac.jpg"/>';
} 



var truth = prompt('Are you sure you bought more than 3 ?if yes enter the number again??');

var result = '';

for (var i = 2; i <= truth; i++) {
  result = result + itemOrder;
}

document.write(result);


document.write(OrderDetails);
// document.getElementById("order").innerText = nomeals;

var branch = prompt("Write the Branch Name:")
var branchdetails;
if (branch == "abdoun" || branch == "7th circle" || branch == "swefieh" || branch == "abdallah ghosheh") {

} else {
    branchdetails = "you are not being a loyal customer :p";
}

alert('Are You LOvin It');