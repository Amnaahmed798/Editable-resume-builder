function generateResume(): void {
    // Profile Info
    const name: string = (document.getElementById("name") as HTMLInputElement).value;
    const nameElement = document.querySelector("#namet h1") as HTMLElement;
    nameElement.textContent = name || "WRITE NAME HERE...";

    (document.getElementById("emailt") as HTMLElement).innerHTML = (document.getElementById("email") as HTMLInputElement).value;
    (document.getElementById("professiont") as HTMLElement).innerHTML = (document.getElementById("profession") as HTMLInputElement).value;
    (document.getElementById("contactt") as HTMLElement).innerHTML = (document.getElementById("contact") as HTMLInputElement).value;
    (document.getElementById("locationt") as HTMLElement).innerHTML = (document.getElementById("location") as HTMLInputElement).value;

    // Links (Ensure unique IDs for multiple link inputs)
    const facebookLink: string = (document.getElementById("facebook-link") as HTMLInputElement).value;
    const linkedinLink: string = (document.getElementById("linkedin-link") as HTMLInputElement).value;

    const facebookElement = document.getElementById("facebooklink") as HTMLAnchorElement;
    facebookElement.innerHTML = facebookLink;
    facebookElement.href = facebookLink;

    const linkedinElement = document.getElementById("linkedinlink") as HTMLAnchorElement;
    linkedinElement.innerHTML = linkedinLink;
    linkedinElement.href = linkedinLink;

    // About Me
    const about: string = (document.getElementById("aboutarea") as HTMLTextAreaElement).value;
    (document.getElementById("aboutmet") as HTMLElement).innerHTML = about;

    // Skills
    const skills: string = (document.getElementById("skillsarea") as HTMLTextAreaElement).value;
    (document.getElementById("skillst") as HTMLElement).innerHTML = skills.replace(/\n/g, "<br>");

    // Education
    const school: string = (document.getElementById("school") as HTMLInputElement).value;
    const schoolYear: string = (document.getElementById("school-year") as HTMLInputElement).value;
    const schoolCertificate: string = (document.getElementById("school-certificate") as HTMLInputElement).value;

    const highschool: string = (document.getElementById("highschool") as HTMLInputElement).value;
    const highschoolYear: string = (document.getElementById("highschool-year") as HTMLInputElement).value;
    const highschoolCertificate: string = (document.getElementById("highschool-certificate") as HTMLInputElement).value;

    const university: string = (document.getElementById("university") as HTMLInputElement).value;
    const universityYear: string = (document.getElementById("university-year") as HTMLInputElement).value;
    const universityCertificate: string = (document.getElementById("university-certificate") as HTMLInputElement).value;

    const educationHTML: string = `
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
    (document.getElementById("educationContent") as HTMLElement).innerHTML = educationHTML;

    // Experience
    const experience: string = (document.getElementById("experiencearea") as HTMLTextAreaElement).value;
    (document.getElementById("experiencet") as HTMLElement).innerHTML = experience.replace(/\n/g, "<br>");

    // Projects
    const projects: string = (document.getElementById("projectsarea") as HTMLTextAreaElement).value;
    (document.getElementById("projectst") as HTMLElement).innerHTML = projects.replace(/\n/g, "<br>");


    
}
document.getElementById("fileInput")?.addEventListener("change", function () {
    const fileInput = <HTMLInputElement>this;
    const file = fileInput.files ? fileInput.files[0] : null; // Get the selected file

    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Read the file as a DataURL

        // Once the file is successfully read
        reader.onload = function () {
            const imagePreview = document.getElementById("imagePreview") as HTMLImageElement;
            if (imagePreview) {
                imagePreview.src = reader.result as string; // Update image preview
            }
        };

        // Handle any errors during file reading
        reader.onerror = function () {
            console.error("Error reading the file:", reader.error);
        };
    } else {
        console.error("No file selected");
    }
});
