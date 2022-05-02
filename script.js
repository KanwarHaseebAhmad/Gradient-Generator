document.querySelector("#generate").addEventListener("click", () => {
    var hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var hex1 = "";
    var hex2 = "";
    var random_index = 0;

    for (let i = 0; i < 6; i++) {
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hex1 += hex_numbers[random_index];
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hex2 += hex_numbers[random_index];
    }

    document.body.style.background = `linear-gradient(to right, #${hex1}, #${hex2})`;
    document.querySelector("#hex1").textContent = hex1;
    document.querySelector("#hex2").textContent = hex2;
});
