// if, else, dan nested if
var nilai = 75;
if (nilai >= 80) {
  console.log("Nilai A");
} else if (nilai >= 70) {
  console.log("Nilai B");
} else {
  console.log("Nilai C");
}

// switch case
var hari = "Senin";
switch (hari) {
  case "Senin":
    console.log("Hari kerja");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari libur");
    break;
  default:
    console.log("Hari tidak valid");
}

// for statement
for (var i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// while
var counter = 0;
while (counter < 5) {
  console.log("Counter: " + counter);
  counter++;
}

// do while
var angka = 1;
do {
  console.log("Angka: " + angka);
  angka++;
} while (angka <= 3);

// function
function tambah(a, b) {
  return a + b;
}
var hasilPenambahan = tambah(5, 3);
console.log("Hasil penambahan: " + hasilPenambahan);
