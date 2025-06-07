let frm = document.getElementById('frm');
let resp1 = document.getElementById('tituloResp');
let resp2 = document.getElementById('calculoResp');
let limpar = document.getElementById('limpar');

frm.addEventListener('submit', function(e){
    let Dmenor = Number(document.getElementById('Dmenor').value);
    let Dmaior = Number(document.getElementById('Dmaior').value);
    let Nvoltas = Number(document.getElementById('Nvoltas').value);

    let dadosCorreia = (Dmenor + Dmaior) * Nvoltas;
    let calculoFinal = (dadosCorreia * 3.14) / 2;

    let Mts = Math.floor(calculoFinal / 1000);
    let MM = Math.floor(calculoFinal % 1000);
    
    resp1.innerText = 'Metragem Linear';
    resp2.innerText = `${Mts} metro(s) e ${MM} milímetro(s)`;

    resp1.classList.add('show');
    resp2.classList.add('show');

    document.body.classList.add('show-results');

    e.preventDefault();
});

limpar.addEventListener('click', function(){
    document.getElementById('Dmenor').value = '';
    document.getElementById('Dmaior').value = '';
    document.getElementById('Nvoltas').value = '';
    resp1.innerText = '';
    resp2.innerText = 'Espero ter ajudado';
    resp1.classList.remove('show');
    resp2.classList.remove('show');
    document.body.classList.remove('show-results'); // Adicionei essa linha
});