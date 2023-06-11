if (typeof (Storage) !== 'undefined') {
    //Nếu có hỗ trợ
    //Thực hiện thao tác với Storage
    console.log('Trình duyệt của bạn hỗ trợ Storage');
} else {
    //Nếu không hỗ trợ
    console.log('Trình duyệt của bạn không hỗ trợ Storage');
}

function searchBook() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();
    let results = document.getElementById("searchResults");
    results.innerHTML = "";
    let books = datajson;

    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let name = book.bookName.toLowerCase();
        let authors = book.author.toLowerCase();

        if (name.includes(filter) || authors.includes(filter)) {
            let listItem = document.createElement("li");
            listItem.textContent = book.bookName + " - " + book.author;
            results.appendChild(listItem);
        }
    }
}