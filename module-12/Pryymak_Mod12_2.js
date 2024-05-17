let books = [
    "1. The Great Gatsby",
    "2. Anna Karenina",
    "3. War and Peace",
    "4. In Search of Lost Time",
    "5. Hamlet",
    "6. Crime and Punishment",
    "7. The Odyssey",
    "8. Pride and Prejudice",
    "9. Don Quixote",
    "10. The Lord of the Rings"
];

function sort_asc(){
    let output = document.getElementById("books");
    output.innerHTML = "";
    let books_sorted = books.toSorted((a, b) => a - b);

    books_sorted.forEach(book => {
        output.innerHTML += "<li>" + book + "</li>";
    });
}

function sort_desc(){
    let output = document.getElementById("books");
    output.innerHTML = "";
    let books_sorted = books.toSorted((a, b) => a - b);
    let reversed = books_sorted.toReversed();

    reversed.forEach(book => {
        output.innerHTML += "<li>" + book + "</li>";
    });
}