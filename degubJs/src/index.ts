import { getBaseEmail } from "./services/email";
console.log("Olá");


async function main() {
    console.log(await getBaseEmail("teste")); // sem o await e sem estar dentro de uma function o console printa a promisse
}

main();