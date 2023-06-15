if (typeof (Storage) !== 'undefined') {
    //Nếu có hỗ trợ
    //Thực hiện thao tác với Storage
    console.log('Trình duyệt của bạn hỗ trợ Storage');
} else {
    //Nếu không hỗ trợ
    console.log('Trình duyệt của bạn không hỗ trợ Storage');
}

const storedDataJS = localStorage.getItem('users');

// Check if data exists
if (storedDataJS) {
    // Convert the retrieved string back into its original form (e.g., JSON.parse for JSON data)
    const data = JSON.parse(storedDataJS);
    function removeItem(index) {
         data[0].listItem.splice(index,1);
        let updateData=JSON.stringify(data);
        localStorage.setItem('users',updateData);
        location.reload();
    }

}

let userIndexJS = 0;
//take data from json and show off canvas
window.onload = function () {
    // Check if the include is loaded
    const checkIncludeLoaded = function () {
        const includeWrapper = document.getElementById('include-wrapper');
        if (includeWrapper && includeWrapper.children.length > 0) {
            const storedData = localStorage.getItem('users');
            const dataContainer = document.getElementById('user-item-number');
            // Check if data exists in localStorage
            if (storedData) {
                // Convert the stored data from string to its original form (e.g., JSON.parse for JSON data)
                const data = JSON.parse(storedData);
                // Access the HTML element where you want to display the data
                const canvasOffContent = document.getElementById('canvasOffContent');
                // Create an empty string to store the HTML content
                let htmlContent = '';
                let userCart = data[userIndexJS].listItem;
                // Loop through the array data and generate HTML content
                for (let i = 0; i < userCart.length; i++) {
                    let number = userCart.length;
                    if (dataContainer) {
                        // Modify the HTML content of the element with the retrieved data
                        dataContainer.innerHTML = number;
                    } else {
                        console.error("Element with ID 'user-item-number' not found.");
                    }
                    const item = userCart[i];
                    let imgSrc = "./images/books/" + item.image;
                    htmlContent += '<div class="d-flex ">\n' +
                        '                      <div class="col-4">\n' +
                        '                        <div class="p-1">\n' +
                        '<img src="' + imgSrc + '" style="width: 150px;height: 150px" alt="">\n' +
                        '                        </div>\n' +
                        '                      </div>\n' +
                        '                      <div class="col-8">\n' +
                        '                        <div class="d-flex">\n' +
                        '                          <div class="col-4">\n' +
                        '                            <div class="title-offcanvas">Title</div>\n' +
                        '                          </div>\n' +
                        '                          <div class="col-8">\n' +
                        '                            <div class="content-offcanvas">' + item.bookName + '</div>\n' +
                        '                          </div>\n' +
                        '                        </div>\n' +
                        '                        <div class="d-flex">\n' +
                        '                          <div class="col-4">\n' +
                        '                            <div class="title-offcanvas">Author</div>\n' +
                        '                          </div>\n' +
                        '                          <div class="col-8">\n' +
                        '                            <div class="content-offcanvas">' + item.author + '</div>\n' +
                        '                          </div>\n' +
                        '                        </div>\n' +
                        '                        <div class="d-flex">\n' +
                        '                          <div class="col-4">\n' +
                        '                            <div class="title-offcanvas">Price</div>\n' +
                        '                          </div>\n' +
                        '                          <div class="col-8">\n' +
                        '                            <div class="content-offcanvas">' + item.price + '</div>\n' +
                        '                          </div>\n' +
                        '                        </div>\n' +
                        '                      </div>\n' +
                        '                    </div>\n' +
                        '                    <div class="d-flex justify-content-evenly mt-3">\n' +
                        '                      <div class="p-1"><a href="!#/payment/store/' + item.bookId + '" class="btn btn-outline-info">Purchase</a></div>\n' +
                        '                      <div class="p-1">' +
                        '                           <button onclick="removeItem('+i+')" class="btn btn-outline-info">Remove</button></div>\n' +
                        '                      </div>\n' +
                        '                    <hr>'
                    ;
                }
                canvasOffContent.innerHTML = htmlContent;

            }


        } else {
            // If not loaded, wait and check again
            setTimeout(checkIncludeLoaded, 100);
        }

    };

    // Initial check
    checkIncludeLoaded();
};

//function take data from json
let dataFromJson;
let userFromJson;
getDataFromJson = () => {
    fetch("./data/data.json")
        .then(res=> res.json())
        .then(data=>{
            dataFromJson=data;
        })
        .catch(err=>{
            console.error("error get data from json");
        });
    fetch("./data/users.json")
        .then(res=>res.json())
        .then(data=>{
            userFromJson=data
        });
}
getDataFromJson();

//modal register and login
function openModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};