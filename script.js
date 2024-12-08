async function getData() {
    const url = "https://data.gov.bh/api/explore/v2.1/catalog/datasets/01-statistics-of-students-nationalities_updated/records?where=colleges%20like%20%22IT%22%20AND%20the_programs%20like%20%22bachelor%22&limit=100";
    const tableBody = document.querySelector("tbody");
    // Fetch data from the API
    const response = await fetch(url);

    const data = await response.json();

    // Since data.results is the array that we want to loop through
    const results = data.results; 

    // Loop through the results array
    results.forEach(result => {
        // Creating a row element for each result
        const row = document.createElement("tr");

        // create 5 elements td for each row
        const year = document.createElement("td");
        const semester = document.createElement("td");
        const program = document.createElement("td");
        const nationality = document.createElement("td");
        const college = document.createElement("td");
        const numOfStudents = document.createElement("td"); 

        // Fill in the value for each table data
        year.innerText = result['year']
        semester.innerText = result['semester']
        program.innerText = result['the_programs']
        nationality.innerText = result['nationality']
        college.innerText = result['colleges']
        numOfStudents.innerText = result['number_of_students']

        // Append each cell to the row
        row.appendChild(year);
        row.appendChild(semester);
        row.appendChild(program);
        row.appendChild(nationality);
        row.appendChild(college);
        row.appendChild(numOfStudents);

        // Append the row to the table body (
        tableBody.appendChild(row);
    });

}
// Call the function 
getData();  
