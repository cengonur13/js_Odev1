let userName = prompt("Kullanıcı Adi : ");
let myNameDOM = document.querySelector("#myName")
               .innerHTML = userName;

function showTime() {
    const days = ["Pazar", "Pazartesi", "Salı", "Carsamba",
                  "Persembe", "Cuma", "Cumartesi"];

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = days[date.getDay()];
    let clockDOM = document.querySelector("#myClock")
        .innerHTML = `${hour}:${minute}:${second} - ${day}`;
}
setInterval(showTime,500);
