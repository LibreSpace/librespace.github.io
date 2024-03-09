function myFunction() {
    var input, filter, divs, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    divs = document.getElementsByClassName("card");

    for (i = 0; i < divs.length; i++) {
        a = divs[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            divs[i].style.display = "";
        } else {
            divs[i].style.display = "none";
        }
    }
}
