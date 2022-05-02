import fs from "fs";

const count = 10000;
for (let id = 1; id <= count; id += 1) {
    const m: any = JSON.parse(fs.readFileSync(`json/${id}.json`).toString());
    m.name = "CATS #" + id;
    m.description = "";
    m.image = "https://kingcrowndao.github.io/kcdcats/images/" + id + ".png";
    fs.writeFileSync(`json/${id}.json`, JSON.stringify(m));
    console.log(`#${id} generated.`);
}
