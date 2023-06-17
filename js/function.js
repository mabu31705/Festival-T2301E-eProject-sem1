if (typeof (Storage) !== 'undefined') {
    //Nếu có hỗ trợ
    //Thực hiện thao tác với Storage
    console.log('Trình duyệt của bạn hỗ trợ Storage');
} else {
    //Nếu không hỗ trợ
    console.log('Trình duyệt của bạn không hỗ trợ Storage');
}

//function take data from json
let dataFromJson;
let userFromJson;
let currentUserLocalStorage;
let successLogin;
getDataFromJson = () => {
    fetch("./data/data.json")
        .then(res => res.json())
        .then(data => {
            dataFromJson = data;
            let updateData = JSON.stringify(dataFromJson);
            localStorage.setItem("books", updateData);
        })
        .catch(err => {
            console.error("error get data from json" + err);
        });
    fetch("./data/users.json")
        .then(res => res.json())
        .then(data => {
            userFromJson = data
            let updateData = JSON.stringify(userFromJson);
            localStorage.setItem("users", updateData);
        })
        .catch(err => {
            console.error("error get data from json" + err);
        });
}
noData = () => {
    let getBook = localStorage.getItem('books');
    let getUser = localStorage.getItem('users');
    if (getBook == null && getUser == null) {
        getDataFromJson();
    }
}
noData();

// Check if data exists
function removeItem(index) {
    currentUserLocalStorage = localStorage.getItem('currentUser');
    if (typeof (currentUserLocalStorage) !== 'undefined' && currentUserLocalStorage !== null) {
        const data = JSON.parse(currentUserLocalStorage);
        data.listItem.splice(index, 1);
        let updateData = JSON.stringify(data);
        localStorage.setItem('currentUser', updateData);
        location.reload();
    }
}
function saveCart(){
    currentUserLocalStorage = localStorage.getItem('currentUser');
    let userLocalStorage =localStorage.getItem('users');
    let data = JSON.parse(userLocalStorage);
    let dataCurrent = JSON.parse(currentUserLocalStorage);
    if (typeof (currentUserLocalStorage) !== 'undefined' && currentUserLocalStorage !== null) {
        data.push(dataCurrent);
        localStorage.setItem('users', JSON.stringify(data));
    }
}

//show off canvas
window.onload = function () {
    // Check if the include is loaded
    const checkIncludeLoaded = function () {
        const includeWrapper = document.getElementById('include-wrapper');
        if (includeWrapper && includeWrapper.children.length > 0) {
            let storedData = localStorage.getItem('currentUser');
            let dataContainer = document.getElementById('user-item-number');
            // Check if data exists in localStorage
            if (typeof (storedData) !=='null') {
                // Convert the stored data from string to its original form (e.g., JSON.parse for JSON data)
                let data = JSON.parse(storedData);
                // Access the HTML element where you want to display the data
                let canvasOffContent = document.getElementById('canvasOffContent');
                // Create an empty string to store the HTML content
                let htmlContent = '';
                let userCart = data.listItem;
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
                        '                           <button onclick="removeItem(' + i + ')" class="btn btn-outline-info">Remove</button></div>\n' +
                        '                      </div>\n' +
                        '                    <hr>'
                    ;
                }
                canvasOffContent.innerHTML = htmlContent;
            } else {
                console.log("do nothing");
            }

        } else {
            // If not loaded, wait and check again
            setTimeout(checkIncludeLoaded, 100);
        }

    };

    // Initial check
    checkIncludeLoaded();
};

//modal register and login
function openLoginModal() {
    let loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'block';
}

function closeLoginModal() {
    let loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'none';
}

function openRegisterModal() {
    let registerModal = document.getElementById('registerModal');
    registerModal.style.display = 'block';
}

function closeRegisterModal() {
    let registerModal = document.getElementById('registerModal');
    registerModal.style.display = 'none';
}

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
    let loginModal = document.getElementById('loginModal');
    let registerModal = document.getElementById('registerModal');
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    } else if (event.target === registerModal) {
        registerModal.style.display = 'none';
    } else {
    }
};

// register and login function
function registerUser() {
    // Get form field values
    let name = document.getElementById('register-name').value;
    let email = document.getElementById('register-email').value;
    let password = document.getElementById('register-password').value;
    let rePassword = document.getElementById('register-re-password').value;
    // Perform any validation if needed
    let successRegister = document.getElementById('successRegister');
    let rePasswordError = document.getElementById('rePasswordError');
    let existUserError = document.getElementById('existUserError');
    userFromJson = localStorage.getItem('users');
    let data = JSON.parse(userFromJson);
    // Create an object to store the registration data
    let userIdAi = data.length + 1;
    let userData = {
        userId: userIdAi,
        userName: name,
        email: email,
        password: password,
        listItem: []
    };
    let arrUser = data;
    let unm = "";
    let pnm = "";
    for (let i = 0; i < arrUser.length; i++) {
        if (name === arrUser[i].userName) {
            existUserError.classList.remove('d-none');
            successRegister.classList.add('d-none');
            rePasswordError.classList.add('d-none');
            unm = "error"
        }
    }
    if (password !== rePassword) {
        pnm = 'error';
        rePasswordError.classList.remove('d-none');
        successRegister.classList.add('d-none');
        existUserError.classList.add('d-none');
    }
    // Store user data in localStorage
    if ((unm !== 'error') && (pnm !== 'error') && name !== "" && email !== "" && password !== "") {
        successRegister.classList.remove('d-none');
        rePasswordError.classList.add('d-none');
        existUserError.classList.add('d-none');
        arrUser.push(userData);
        localStorage.setItem('users', JSON.stringify(arrUser));
    }
    document.getElementById('register-name').value = "";
    document.getElementById('register-email').value = "";
    document.getElementById('register-password').value = "";
    document.getElementById('register-re-password').value = "";
}


function loginUser() {
    let name = document.getElementById('login-name').value;
    let password = document.getElementById('login-password').value;
    let imgElement = document.getElementById('accountAvatar');
    let accountName = document.getElementById('accountName');
    let loginUser = localStorage.getItem("currentUser");
    userFromJson = localStorage.getItem('users');
    let data = JSON.parse(userFromJson);
    let arrUser = data;
    let userData = {};
    for (let i = 0; i < arrUser.length; i++) {
        if ((name === arrUser[i].userName) && (password === arrUser[i].password)) {
            userData = {
                userId: arrUser[i].userId,
                userName: arrUser[i].userName,
                email: arrUser[i].email,
                password: arrUser[i].password,
                listItem: arrUser[i].listItem,
                userImage: "1.png"
            };
            localStorage.setItem('currentUser', JSON.stringify(userData));
            imgElement.src = '../images/pngs/' + userData.userImage + '';
            accountName.textContent = userData.userName;
            document.getElementById('login-name').value = "";
            document.getElementById('login-password').value = "";
            closeLoginModal();
        }
    }
    if(typeof (loginUser) !== 'null'){
        setLogin();
    }
}

setLogin = () =>{
    let notLogin = document.getElementById("notLogin");
    let hasLogin = document.getElementById("hasLogin");
    if (hasLogin.classList.contains('d-none')){
        hasLogin.classList.remove('d-none');
    }
    if (notLogin.classList.contains('d-none')){
        console.log("d-none notlogin");
    } else {
        notLogin.classList.add('d-none');
    }
}


function logOutAcc() {
    localStorage.removeItem("currentUser");
    location.reload();
}
