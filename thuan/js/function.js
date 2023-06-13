if (typeof (Storage) !== 'undefined') {
    //Nếu có hỗ trợ
    //Thực hiện thao tác với Storage
    console.log('Trình duyệt của bạn hỗ trợ Storage');
} else {
    //Nếu không hỗ trợ
    console.log('Trình duyệt của bạn không hỗ trợ Storage');
}

window.onload = function() {
    // Check if the include is loaded
    const checkIncludeLoaded = function() {
        const includeWrapper = document.getElementById('include-wrapper');
        if (includeWrapper && includeWrapper.children.length > 0) {
            const storedData = localStorage.getItem('users');
            const dataContainer = document.getElementById('user-item-number');
            // Check if data exists in localStorage
            if (storedData) {
                // Convert the stored data from string to its original form (e.g., JSON.parse for JSON data)
                const data = JSON.parse(storedData);
                let number = data[0].listItem.length;
                if (dataContainer) {
                    // Rest of your code to manipulate the element
                    // Modify the HTML content of the element with the retrieved data
                    dataContainer.innerHTML = number;
                } else {
                    console.error("Element with ID 'user-item-number' not found.");
                }
            }
        } else {
            // If not loaded, wait and check again
            setTimeout(checkIncludeLoaded, 100);
        }
    };

    // Initial check
    checkIncludeLoaded();
};
