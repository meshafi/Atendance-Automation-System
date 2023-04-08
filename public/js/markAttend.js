// open calender
const open_btn = document.querySelector(".open-popup");
const modal = document.querySelector(".modal");
const close_btn = document.querySelector(".close-btn");

open_btn.addEventListener("click", () => {
    modal.style.display = "block";
});

close_btn.addEventListener("click", () => {
    modal.style.display = "none";
});

// toggle status
const toggle_status = document.querySelector(".toggle-status");
let toggle = false;
const all_chechbox = document.getElementsByTagName("input");

toggle_status.addEventListener("click", () => {
    for (let i = 0; i < all_chechbox.length; ++i) {
        all_chechbox[i].checked ^= 1;
    }
});

// clear status

// calander button clicked
