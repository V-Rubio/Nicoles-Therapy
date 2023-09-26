//CREATING THE LISTENER - to add new object 
$("#clearInput").click(function(){
        $("#input1").val("");
        $("#input2").val("");
        $("#input3").val("");
});

const buttonListener = document.getElementById("submit");
buttonListener.addEventListener("click", function() {
    const firstTextBox = document.getElementById("input1");
    const secondTextBox = document.getElementById("input2");
    var input1 = firstTextBox.value;
    var input2 = secondTextBox.value;

    var input3 = $("#input3").val();
    /* Using jQuery to do the same thing you see above in less lines #for id, none for class*/

    console.log(input1);
    console.log(input2);
    console.log(input3);

    alert(input1 + "\n" + input2 + "\n" + input3);
    return false;
    /* Dont do anything else that you would normally do*/
});

//OLD SUBMIT BUTTON
// $("#submitInput").click(function(){
//     alert("Submit Button was Pressed.");
// });