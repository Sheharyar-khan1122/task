const statusText = document.getElementById("status");
const addBtn = document.getElementById("addBtn");

let isFriend = false;

addBtn.addEventListener("click", function () {

```
if (!isFriend) {
    // Add friend
    statusText.innerText = "Friend";
    addBtn.innerText = "Remove";
    addBtn.style.backgroundColor = "#28a745";

    isFriend = true;

} else {
    // Remove friend
    statusText.innerText = "Not a Friend";
    addBtn.innerText = "Add";
    addBtn.style.backgroundColor = "#5a4f7a";

    isFriend = false;
}
```

});
