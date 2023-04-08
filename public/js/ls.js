const url = "../json/list.json";

function newRow(sno, name, rollno, url) {
    const tr_e = document.createElement("tr");
    const sno_e = document.createElement("td");
    const name_e = document.createElement("td");
    const rollno_e = document.createElement("td");
    const view_btn_e = document.createElement("td");
    const anchor_e = document.createElement("a");
    const btn_e = document.createElement("button");

    sno_e.innerHTML = sno;
    name_e.innerHTML = name;
    rollno_e.innerHTML = rollno;
    btn_e.innerHTML = "View";
    anchor_e.href = url;
    anchor_e.append(btn_e);
    view_btn_e.append(anchor_e);

    tr_e.append(sno_e);
    tr_e.append(name_e);
    tr_e.append(rollno_e);
    tr_e.append(view_btn_e);

    const table = document.querySelector("tbody");
    table.appendChild(tr_e);
}

async function readJson() {
    const res = await fetch(url);
    const JsonData = await res.json();

    JsonData.forEach((elem) => {
        newRow(elem.no, elem.name, elem.rollno, elem.rollno);
    });
}

readJson();
