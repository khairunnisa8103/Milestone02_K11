/* Input file*/
const form = document.querySelector(".project_file") ;
fileInput = form.querySelector("#file-input") ;

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


/// function myfunc(event) {
///     event.preventDefault();
/// 
///     var project_name = document.getElementById("project-name-input").value;
///     var project_target = document.getElementById("project-target-input").value;
///     var project_description = document.getElementById("project-description-input").value;
///     var temp_project_category = document.getElementById("project-category-select")
/// 
///     temp_project_category.checked ? project_category = "Pertanian" : project_category = "Manufaktur" ;
/// 
///     localStorage.setItem('Is_project_name', project_name)
///     localStorage.setItem('Is_project_category', project_category)
///     localStorage.setItem('Is_project_target', project_target)
///     localStorage.setItem('Is_project_description', project_description)
/// }

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