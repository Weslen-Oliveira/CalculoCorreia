const frm = document.getElementById('frm');
const resp = document.getElementById('resp');
const btnCalcular = document.getElementById('btnCalcular');
const divModal = document.getElementById('divModal');
const btnFechar = document.getElementById('btnFecharModal');

btnCalcular.addEventListener('click', () => {
    const Dmenor = Number(document.getElementById("Dmenor").value);
    const Dmaior = Number(document.getElementById("Dmaior").value);
    const Nvoltas = Number(document.getElementById("Nvoltas").value);


    let dadosCorreia = (Dmenor + Dmaior) * Nvoltas;
    let calculoFinal = (dadosCorreia * 3.14) / 2;

    let Mts = Math.floor(calculoFinal / 1000);
    let MM = Math.floor(calculoFinal % 1000);
    
    resp.innerText = `${Mts} metro(s) e ${MM} milímetro(s)`;
    resp.style.color = 'green';
    divModal.style.display = 'flex';

    if(Dmenor <= 0 || Dmaior <= 0 || Nvoltas <= 0) {
        resp.innerText = `*Preencha todos os Campos !`;
        resp.style.color = 'red';
        divModal.style.display = 'flex';
    }

});
btnFechar.addEventListener('click', () => {
    divModal.style.display = 'none'; //Esconde o modal
    frm.reset(); //Apaga os Campos do Formulário
    resp.innerText = ''; //Limpa a resposta do modal
});

