document.getElementById("resumetemplate").style.display = "none";
    
    function generateResume() {
    // Profile Info
    let name = document.getElementById("name").value;
    document.querySelector("#namet h1").textContent = name || "WRITE NAME HERE...";

    document.getElementById("emailt").innerHTML = document.getElementById("email").value;
    document.getElementById("professiont").innerHTML = document.getElementById("profession").value;
    document.getElementById("contactt").innerHTML = document.getElementById("contact").value;
    document.getElementById("locationt").innerHTML = document.getElementById("location").value;

    // Links (Ensure unique IDs for multiple link inputs)
   // Get input values from the input fields
let facebookLink = document.getElementById("facebook-link").value;
let linkedinLink = document.getElementById("linkedin-link").value;

// Update the Facebook link dynamically
document.getElementById("facebooklink").innerHTML = facebookLink;
document.getElementById("facebooklink").href = facebookLink;

// Update the LinkedIn link dynamically
document.getElementById("linkedinlink").innerHTML = linkedinLink;
document.getElementById("linkedinlink").href = linkedinLink;


    // About Me
    let about = document.getElementById("aboutarea").value;
    document.getElementById("aboutmet").innerHTML = about;


    // Skills
    let skills = document.getElementById("skillsarea").value;
    document.getElementById("skillst").innerHTML = skills.replace(/\n/g, "<br>");

    // Retrieve values from input fields
    let school = document.getElementById("school").value;
    let schoolYear = document.getElementById("school-year").value;
    let schoolCertificate = document.getElementById("school-certificate").value;

    let highschool = document.getElementById("highschool").value;
    let highschoolYear = document.getElementById("highschool-year").value;
    let highschoolCertificate = document.getElementById("highschool-certificate").value;

    let university = document.getElementById("university").value;
    let universityYear = document.getElementById("university-year").value;
    let universityCertificate = document.getElementById("university-certificate").value;

    // Build HTML content
    let educationHTML = `
        <b>${school || "School Name Not Provided"}</b><br>
        ${schoolCertificate || "Certificate Not Provided"}<br>
        ${schoolYear || "Year Not Provided"}<br><br>
        
        <b>${highschool || "Higher School Name Not Provided"}</b><br>
        ${highschoolCertificate || "Certificate Not Provided"}<br>
        ${highschoolYear || "Year Not Provided"}<br><br>
        
        <b>${university || "University Name Not Provided"}</b><br>
        ${universityCertificate || "Certificate Not Provided"}<br>
        ${universityYear || "Year Not Provided"}
    `;

    // Update only the content inside <p> with ID "educationContent"
    document.getElementById("educationContent").innerHTML = educationHTML;
    // Experience
    let experience = document.getElementById("experiencearea").value;
    document.getElementById("experiencet").innerHTML = experience.replace(/\n/g, "<br>");

    // Projects
    let projects = document.getElementById("projectsarea").value;
    document.getElementById("projectst").innerHTML = projects .replace(/\n/g, "<br>");

    document.getElementById("resumeform").style.display = "none";
    document.getElementById("resumetemplate").style.display = ""; 
 

     
    }
    document.getElementById("fileInput").addEventListener("change", function () {
        let file = this.files[0]; // Get the selected file

        if (file) {
            let reader = new FileReader();
            reader.readAsDataURL(file); // Read the file as a DataURL

            // Once the file is successfully read
            reader.onload = function () {
                document.getElementById("imagePreview").src = reader.result; // Update image preview
            };

            // Handle any errors during file reading
            reader.onerror = function () {
                console.error("Error reading the file:", reader.error);
            };
        } else {
            console.error("No file selected");
        }
    });
   
   
    // Enable in-place editing
    function saveContent() {
    // Get all elements with contenteditable="true"
    const editableElements = document.querySelectorAll('[contenteditable="true"]');

    // Iterate through each editable element and log the changes
    editableElements.forEach(element => {
        // You can save the content wherever needed (e.g., in a database or localStorage)
        console.log(`${element.id}: ${element.innerHTML}`);

        // Example of storing content in localStorage (persistent across page reloads)
        localStorage.setItem(element.id, element.innerHTML);
    });

    alert("Content saved successfully!");
}

// Function to load saved content from localStorage (if any)
function loadContent() {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');

    editableElements.forEach(element => {
        // Check if there's saved content for each editable element
        const savedContent = localStorage.getItem(element.id);
        if (savedContent) {
            element.innerHTML = savedContent;  // Load the saved content
        }
    });
}

// Call loadContent when the page loads to restore saved content
window.onload = loadContent;
