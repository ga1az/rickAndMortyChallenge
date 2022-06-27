async function connection(char, word) {
    let url = `https://rickandmortyapi.com/api/${word}`;
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        let data = json["results"];
        console.log(charCounter(data, char, word));
    } else {
        console.log("Error " + response.status);
    }
}

function charCounter(data, char, word) {
    let counter = 0;
    data.map((item) => {
        if (item["name"].includes(char)) {
            item["name"].split("").forEach((item) => {
                if (item === char) {
                    counter++;
                }
            });
        }
    });
    return {
        char: char,
        counter: counter,
        resource: word,
    };
}

connection("l", "location");
