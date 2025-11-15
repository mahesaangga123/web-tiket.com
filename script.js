const tanggal = document.querySelector(".tanggal");
const calender = document.querySelector(".date");
const tahun = document.querySelector(".tahun-input");
const bulan = document.querySelector(".bulan-input");
const cancelBtn = document.querySelector(".cancel");
const applyBtn = document.querySelector(".apply");
const nextBtn = tanggal.querySelector(".next");
const prevBtn = tanggal.querySelector(".prev");
const dates = document.querySelector(".dates");

let selectedDate = new Date();
let year = selectedDate.getFullYear();
let month = selectedDate.getMonth();

calender.addEventListener("click", () => {
    tanggal.hidden = false;
});

cancelBtn.addEventListener("click", () => {
    tanggal.hidden = true;
});

applyBtn.addEventListener("click", () => {

    calender.value = selectedDate.toLocaleDateString 
    ("en-ID", {
        tahun: "numeric",
        bulan: "2-digit",
        hari: "2-digit,"
    });

    tanggal.hidden = true;
});

nextBtn.addEventListener("click", () => {
    if (month === 11) year++;
    month = (month + 1) %12;
    displayDates();
});

prevBtn.addEventListener("click", () => {
    if (month === 0) year--;
    month = (month - 1 + 12) %12;
    displayDates();
});

bulan.addEventListener("change", () => {
    month = bulan.selectedIndex;
    displayDates();
})

tahun.addEventListener("change", () => {
    year = tahun.value;
    displayDates();
})

const updateYearMonth = () => {
    bulan.selectedIndex = month;
    tahun.value = year;
}

const handleDateClick = (e) => {
    const button = e.target;

    const selected = dates.querySelector(".selected");
    selected && selected.classList.remove("selected");

    button.classList.add("selected");

    selectedDate = new Date(year, month, parseInt(button.textContent));
}

const displayDates = () => {

    updateYearMonth();

    dates.innerHTML = "";

    const lastOfPrevMonth = new Date(year, month, 0);

   for (let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
    const text = lastOfPrevMonth.getDate() -
    lastOfPrevMonth.getDay() + i;
    const button = createButton(text, true, false);
    dates.appendChild(button);
   }

    const lastOfMonth = new Date(year, month + 1, 0);

    for(let i = 1; i <= lastOfMonth.getDate(); i++) {

        const isToday =
        selectedDate.getDate() === i &&
        selectedDate.getFullYear() === year &&
        selectedDate.getMonth() == month;

        const button = createButton(i, false, isToday);
        button.addEventListener("click", handleDateClick)
        dates.appendChild(button);
    }


    const firstOfNextMonth = new Date(year, month + 1, 1);

    for(let i = firstOfNextMonth.getDay(); i < 0; i++) {
        const text = firstOfNextMonth.getDate() -
        firstOfNextMonth.getDay() + i;

        const button = createButton(text, true, false);
        dates.appendChild(button);
    }
};

const createButton = (text, isDisabled = false, isToday = false) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.disabled = isDisabled;
    button.classList.toggle("today", isToday);
    return button;
};

displayDates();