/*
Kudos to you for looking here! However, there is nothing "broken" with this file.
This file exists soley for you to see something new. 

For story purposes, imagine that this file is from a library that the intern
was instructed to use during the planning meeting.
*/

// Example arrow function declaration.
const submitUpdate = () => {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;

    const fullName = `${lastName}, ${firstName}`;
    console.log(fullName);

    /*
    This function call is purposefully commented out.
    This exists solely as an example for posting user information to the "backend".

    postData("https://ExampleBackEnd.com/new-user", fullName).then((data) => {
        console.log(data);
    });
    */
};

// Example asynchronous function declaration.
async function postData(url = "", data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}
