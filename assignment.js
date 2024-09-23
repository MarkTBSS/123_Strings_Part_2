"use strict";

// Define the books array
const books = [
    { title: "Introduction to Computer Programs" },
    { title: "Advanced Algorithms and Data Structures" }
];

// 16.1
function normalizeAuthorName(author) {
    author = author.trim();
    if (author.endsWith("(Contributor)")) {
        author = author.slice(0, -"(Contributor)".length).trim();
    }
    const firstName = author.slice(0, author.indexOf(" "));

    let lastName = "";
    if (author.indexOf(" ") === author.lastIndexOf(" ")) {
        lastName = author.slice(author.indexOf(" ") + 1, author.length);
    } else {
        lastName = author.slice(
            author.indexOf(" ") + 1,
            author.lastIndexOf(" ")
        );
    }

    const capitalizedFirstName =
        firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    const capitalizedLastName =
        lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

    return capitalizedFirstName + " " + capitalizedLastName;
}

// 16.2
const newBookTitle = books[1].title.replace("Programs", "Software");

// 16.3
function logBookTheme(title) {
    title = title.toLowerCase();

    if (title.startsWith("computer")) {
        console.log("This book is about computers");
    } else if (title.includes("algorithms") && title.includes("structures")) {
        console.log("This book is about algorithms and data structures");
    } else if (
        (title.endsWith("system") || title.endsWith("systems")) &&
        !title.includes("operating")
    ) {
        console.log(
            "This book is about some systems, but definitely not about operating systems"
        );
    }
}

// Example usage
console.log(normalizeAuthorName('  JuliE sussMan (Contributor)')); // "Julie Sussman"
console.log(newBookTitle); // "Advanced Algorithms and Data Structures"
logBookTheme("Computer Science Basics"); // "This book is about computers"
logBookTheme("Introduction to Algorithms and Data Structures"); // "This book is about algorithms and data structures"
logBookTheme("Distributed Systems"); // "This book is about some systems, but definitely not about operating systems"