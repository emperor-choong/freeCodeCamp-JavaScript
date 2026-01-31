function generateSignature(name, title, company) {
    let ascii = name.toUpperCase().charCodeAt(0);
    let newName = "";
    if(ascii >= 65 && ascii <= 73){
        newName = ">>" + name;
    }else if(ascii >= 74 && ascii <= 82){
        newName = "--" + name;
    }else if(ascii >= 83 && ascii <= 90){
        newName = "::" + name;
    }

    return newName + ", " + title + " at " + company;
}

// console.log(generateSignature("Quinn Waverly", "Founder and CEO", "TechCo"));
// console.log(generateSignature("Alice Reed", "Engineer", "TechCo"));
// console.log(generateSignature("Tina Vaughn", "Developer", "example.com"));
// console.log(generateSignature("B. B.", "Product Tester", "AcmeCorp"));
// console.log(generateSignature("windstorm", "Cloud Architect", "Atmospheronics"));