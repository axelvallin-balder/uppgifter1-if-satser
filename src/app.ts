export async function uppgift1() {
  let ålder = +await input("Ålder: ")
  if (ålder < 18) {
    output("Omyndig")
  } else {
    output("Myndig")
  }
}

export {};