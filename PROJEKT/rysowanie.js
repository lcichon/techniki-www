let dane; // tablica obiektów z dane.json
let biezacy = 0; // numer aktualnego pytania
let pokazPlatki = false; // czy odpowiedź (płatki) jest odsłonięta
let kontener;

function szkic(p) {

  p.setup = async function () {
    kontener = document.getElementById('widzet'); // okienko tak duże jak kontener
    p.createCanvas(kontener.clientWidth, 400);
    dane = await p.loadJSON('dane.json');
  };

  p.windowResized = function () {
    p.resizeCanvas(kontener.clientWidth, 400);
  };

  p.draw = function () {
    p.background(250, 242, 245);
    if (!dane) { return; }

    let obiekt = dane[biezacy];
    let srodekX = p.width / 2;
    let srodekY = p.height / 2;
    let promien = 45;

    // pytanie na górze (tekst zawija się w ramce)
    p.noStroke(); 
    p.fill(60);
    p.textAlign(p.CENTER, p.TOP);
    p.textSize(16);
    p.text(obiekt.pytanie, 15, 15, p.width - 30, 130);

    // płatki - tylko po kliknięciu środka
    if (pokazPlatki) {
      p.stroke(215, 150, 175);
      p.fill(244, 194, 209);
      for (let i = 0; i < obiekt.odpowiedz; i++) {
        let kat = (i / obiekt.odpowiedz) * p.TWO_PI;
        let x = srodekX + p.cos(kat) * promien;
        let y = srodekY + p.sin(kat) * promien;
        p.circle(x, y, 55);
      }
    }

    // środek kwiatka - zawsze
    p.strokeWeight(2);
    p.stroke(222, 184, 88);
    p.fill(250, 220, 120);
    p.circle(srodekX, srodekY, 50);

    // podpowiedź na dole
    p.noStroke();
    p.fill(120);
    p.textSize(13);
    if (pokazPlatki) {
      p.text('Kliknij środek ponownie, aby przejść do następnego pytania', 10, p.height - 80, p.width - 20, 65);
    } else {
      p.text('Kliknij środek, aby zobaczyć odpowiedź', srodekX, p.height - 25);
    }
  };

  // klik myszą 
  p.mousePressed = function () {
    let srodekX = p.width / 2;
    let srodekY = p.height / 2;
    let d = p.dist(p.mouseX, p.mouseY, srodekX, srodekY);
    if (d < 25) { // 25 = promień środka (50/2)
      if (!pokazPlatki) {
        pokazPlatki = true; // 1 klik- pokaż płatki
      } else {
        biezacy = (biezacy + 1) % dane.length; // kolejny klik- następne pytanie
        pokazPlatki = false; // znów schowaj płatki
      }
    }
  };

}

new p5(szkic, 'widzet');
