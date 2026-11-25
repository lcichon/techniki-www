let dane;                 // tablica obiektów z dane.json
let biezacy = 0;          // numer aktualnego pytania
let pokazPlatki = false;  // czy odpowiedź (płatki) jest odsłonięta

function szkic(p) {

  p.setup = async function () {
    p.createCanvas(400, 400);
    dane = await p.loadJSON('dane.json');
  };

  p.draw = function () {
    p.background(250, 242, 245);
    if (!dane) { return; }

    let obiekt = dane[biezacy];
    let srodekX = p.width / 2;
    let srodekY = p.height / 2 + 50;
    let promien = 60;

    // pytanie na górze (tekst zawija się w ramce)
    p.fill(60);
    p.textAlign(p.CENTER, p.TOP);
    p.textSize(16);
    p.text(obiekt.pytanie, 15, 15, p.width - 30, 130);

    // płatki - tylko po kliknięciu środka
    if (pokazPlatki) {
      p.fill(244, 194, 209);
      for (let i = 0; i < obiekt.odpowiedz; i++) {
        let kat = (i / obiekt.odpowiedz) * p.TWO_PI;
        let x = srodekX + p.cos(kat) * promien;
        let y = srodekY + p.sin(kat) * promien;
        p.circle(x, y, 55);
      }
    }

    // środek kwiatka - zawsze
    p.fill(250, 220, 120);
    p.circle(srodekX, srodekY, 50);

    // podpowiedź na dole
    p.fill(120);
    p.textSize(13);
    if (pokazPlatki) {
      p.text('Kliknij środek ponownie, aby przejść do następnego pytania', srodekX, p.height - 25);
    } else {
      p.text('Kliknij środek, aby zobaczyć odpowiedź', srodekX, p.height - 25);
    }
  };

  // klik myszą 
  p.mousePressed = function () {
    let srodekX = p.width / 2;
    let srodekY = p.height / 2 + 50;
    let d = p.dist(p.mouseX, p.mouseY, srodekX, srodekY);
    if (d < 25) {                 // 25 = promień środka (50/2)
      if (!pokazPlatki) {
        pokazPlatki = true;       // 1 klik- pokaż płatki
      } else {
        biezacy = (biezacy + 1) % dane.length; // kolejny klik- następne pytanie
        pokazPlatki = false;      // znów schowaj płatki
      }
    }
  };

}

new p5(szkic, 'widzet');
