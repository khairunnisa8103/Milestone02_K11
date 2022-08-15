/* Input file*/
const form = document.querySelector("form") ;
fileInput = form.querySelector(".file-input") ;

form.addEventListener("click", ()=> {
    fileInput.click();

})

/* display file */
var loadFile = function(event) {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[[0]]);
    output.onload = function() {
        URL.revokeObjectURL(output.src)
    }
}

/* Submit Button */
$(document).$ready(function(){
    $("#submit_button").click(function() {
        $("#projectData").submit()
    })
})

// fileInput.onchange = ({target}) => {
//     let file = target.files[0];
//     if(file) {
//         let fileName = file.name;
//         uploadFile(fileName);
//     }
// 
// }
// 
// function uploadFile(name) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST",);
//     xhr.send()
// }