export async function uppgift1() {
  let ålder = +await input("Ålder: ");
  if (ålder < 18) {
    output("Omyndig");
  } else {
    output("Myndig");
  }
}

export async function uppgift2() {
  let längd = +await input("Längd: ");
  if (längd < 200) {
    output("Hej du korte!");
  } else {
    output("Hej du långe!");
  }
}

export async function uppgift3() {
  let x = +await input("Ett tal: ");
  if (x < 0) {
    output("Talet är negativt.")
  } else if (x > 0) {
    output("Talet är positivt.")
  } else {
    output("Talet är noll.")
  }
}

export async function uppgift4() {
  let x = +await input("x = ");
  let y = +await input("y = ");
  
  if (x == y) {
    output("x = y");
  } else if (x < y) {
    output("x < y");
  } else {
    output("x > y");
  }
}

export async function uppgift5() {
  let x = +await input("x = ");
  let y = +await input("y = ");
  let operator = await input("Operator (+, -, *, /): ");
  
  if (operator == "+") {
    output("Summa: " + (x+y).toString());
  } else if (operator == "-") {
    output("Differens: " + (x-y).toString());
  } else if (operator == "*") {
    output("Produkt: " + (x*y).toString());
  } else if (operator == "/") {
    output("Kvot: " + (x/y).toString());
  }
}

export async function uppgift6() {
  let valör = +await input("Valör (1-13): ");

  if (valör == 11) {
    output("En knekt");
  } else if (valör == 12) {
    output ("En dam");
  } else if (valör == 13) {
    output("En kung");
  } else if (valör == 1) {
    output("Ett ess");
  } else {
    output("En " + valör.toString() + ":a");
  }
}

export async function uppgift7() {
  let nummer = +await input("Månadsnummer: ");
  let månad = ["Januari", "Februari", "Mars", "April", "Maj", "Juni",
    "Juli", "Augusti", "September", "Oktober", "November", "December"
  ];
  output(månad[nummer - 1]);
}

export async function uppgift8() {
  let nummer = +await input("Månadsnummer: ")
  if (nummer == 12 || nummer < 3) {
    output("Vinter");
  } else if (nummer > 2 && nummer < 6) {
    output("Vår");
  } else if (nummer > 5 && nummer < 9) {
    output("Sommar");
  } else {
    output("Höst");
  }
}

export async function uppgift9() {
  let tal1 = +await input("Tal 1: ");
  let tal2 = +await input("Tal 2: ");
  let produkt = +await input("Produkt: ");

  if (tal1 * tal2 == produkt) {
    output("Rätt!");
  } else {
    output("Fel. Rätt svar: " + (tal1*tal2).toString());
  }
}

export async function uppgift10() {
  let tal1 = +await input("Tal 1: ");
  let tal2 = +await input("Tal 2: ");

  output("Summa: " + (tal1 + tal2).toString());
  output("Medel: " + ((tal1 + tal2)/2).toString())
  output("Minsta: " + Math.min(tal1, tal2))
  output("Största: " + Math.max(tal1, tal2))
}

export async function uppgift11() {
  let tal1 = +await input("Tal 1: ");
  let tal2 = +await input("Tal 2: ");
  let tal3 = +await input("Tal 3: ");

  output("Summa: " + (tal1 + tal2 + tal3).toString());
  output("Medel: " + ((tal1 + tal2 + tal3)/3).toString())
  output("Minsta: " + Math.min(tal1, tal2, tal3))
  output("Största: " + Math.max(tal1, tal2, tal3))
}

export async function uppgift12() {
  let tecken = await input("Tecken: ")
  if (tecken.charCodeAt(0) > 64 && tecken.charCodeAt(0) < 91) {
    output("Stor bokstav")
  } else if (tecken.charCodeAt(0) > 96 && tecken.charCodeAt(0) < 123) {
    output("Liten bokstav")
  } else {
    output("Annat tecken")
  }
}
export async function uppgift13() {
  let tal = +await input("Mata in ett tal mellan -999 och 999: ")

  if (Math.abs(tal) < 10) {
    output("En siffra")
  } else if (Math.abs(tal) < 100) {
    output("Två siffror")
  } else {
    output("Tre siffror")
  }
  
  if (tal < 0) {
    output("Negativt")
  } else if (tal > 0) {
    output("Positivt")
  } else {
    output("Noll")
  }
}
export async function uppgift14() {
  let sida1 = +await input("Sida 1: ");
  let sida2 = +await input("Sida 2: ");
  let sida3 = +await input("Sida 3: ");

  let negativ_sida = sida1 < 0 || sida2 < 0 || sida3 < 0
  let sida3_längd = sida3 > sida1 + sida2
  let sida2_längd = sida2 > sida1 + sida3
  let sida1_längd = sida1 > sida2 + sida3
  if (negativ_sida || sida3_längd || sida2_längd || sida1_längd) {
    output("Triangel? Nej!")
  } else {
    output("Triangel? Ja!")
  }
}

export {};