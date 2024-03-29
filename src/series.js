const series = [
    {
        url: "https://br.web.img3.acsta.net/c_150_200/pictures/22/09/05/16/15/4077701.jpg",
        titulo: "Santo",
        tipo: ["Suspense", "Ação"],
        diretor:  "Carlos López (IV)",
        elenco:["Bruno Gagliasso", "Raúl Arévalo", "Victória Guerra"],
        sinopsi: "Santo é um thriller policial da Netflix que mistura intriga e ação, flertando com o terror em alguns momentos. A trama gira em torno de Santo, um perigoso traficante de drogas brasileiro cuja identidade permanece um grande mistério.",
        avaliação:"2,4",
    },
    {
        url: "https://br.web.img3.acsta.net/c_150_200/pictures/21/01/04/12/12/0170975.jpg",
        titulo: "Cobra Kai",
        tipo: ["Drama", "Artes Marciais"],
        diretor: "Josh Heald",
        elenco:["Ralph Macchio", "William Zabka", "Tanner Buchanan"],
        sinopsi: "Trinta e quatro anos depois de Daniel Larusso (Ralph Macchio) e Johnny Lawrence (William Zabka) se enfrentarem, a rivalidade entre os dois ressurge quando Lawrence decide retomar sua vida por meio do infame dojo Cobra Kai. ",
        avaliação:"4,5",
    },
    {
        url: "https://br.web.img2.acsta.net/c_150_200/pictures/22/05/30/15/56/1469166.jpg",
        titulo: "A Casa do Dragão",
        tipo: ["Drama", "Fantasia"],
        diretor: "George R.R. Martin",
        elenco:["Matt Smith (XI)", "Paddy Considine", "Olivia Cooke"],
        sinopsi: "Baseada no livro Fogo & Sangue de George R. R. Martin, A Casa do Dragão é um spin-off de Game of Thrones que narra a história de conquista de terras em Westeros, mais conhecida como a Dança dos Dragões. Situada mais de 200 anos antes dos eventos da série original, acompanhamos a guerra civil que acontece enquanto os meio-irmãos Aegon II (Tom Glynn-Carney) e Rhaenyra (Emma D'Arcy) almejam o trono após a morte do pai Viserys I (Paddy Considine).",
        avaliação:"4,5",
    },
    {
        url: "https://br.web.img3.acsta.net/c_150_200/pictures/21/01/19/16/45/4248163.jpg",
        titulo: "Fate: A Saga Winx",
        tipo: "Aventura",
        diretor:  "Brian Young",
        elenco:["Abigail Cowen", "Hannah van der Westhuysen"],
        sinopsi: "Fate: A Saga Winx é uma série live-action baseada na popular série animada Clube das Winx. A série gira em torno de seis fadas populares que devem aprender a controlar seus poderes mágicos freqüentando uma escola em um mundo fantástico. ",
        avaliação:"3,9",
    },
    {
        url: "https://br.web.img2.acsta.net/c_150_200/pictures/22/10/05/09/42/3385930.jpg",
        titulo: "O Senhor dos Anéis: Os Anéis de Poder",
        tipo: ["Aventura", "Ficção"],
        diretor:  ["John D. Payne", "Patrick McKay"],
        elenco:["Morfydd Clark", "Markella Kavenagh"],
        sinopsi: "Antes da jornada de Frodo pela Terra-Média, a Segunda Era foi palco de diversas lendas heróicas. O drama épico que se passa milhares de anos antes de A Sociedade do Anel, tem foco em um momento da história em que grandes poderes foram forjados, reinos ascenderam e também ruíram, ao mesmo tempo em que heróis foram testados e tiveram a esperança quase aniquilada pelo grande vilão do universo de Senhor dos Anéis.",
        avaliação:"3,2",
    },
    {
        url: "https://br.web.img3.acsta.net/c_150_200/pictures/19/03/21/16/15/4239577.jpg",
        titulo: "Game of Thrones",
        tipo: ["Drama", "Fantasia"],
        diretor:  "David Benioff",
        elenco:["Peter Dinklage", "Emilia Clarke", "Kit Harington"],
        sinopsi: "Game of Thrones conta a história de um lugar onde uma força destruiu o equilíbrio das estações, há muito tempo. Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, as reivindicações e as forças sobrenaturais correm as portas do Reino dos Sete Reinos.",
        avaliação:"4,8",
    },
    {
        url: "https://br.web.img2.acsta.net/c_150_200/pictures/14/03/31/19/28/462555.jpg",
        titulo: "Breaking Bad",
        tipo: "Drama",
        diretor:  "Vince Gilligan",
        elenco:["Bryan Cranston", "Aaron Paul, Anna Gunn"],
        sinopsi: "Walter White (Bryan Cranston) é um professor de química na casa dos 50 anos que trabalha em uma escola secundária no Novo México. Para atender às necessidades de Skyler (Anna Gunn), sua esposa grávida, e Walt Junior (RJ Mitte), seu filho deficiente físico, ele tem que trabalhar duplamente.",
        avaliação:"4,8",
    },
    {
        url: "https://br.web.img3.acsta.net/c_150_200/pictures/18/11/12/13/38/3629995.jpg",
        titulo: "Supernatural",
        tipo: ["Terror", "Drama"],
        diretor: "Eric Kripke",
        elenco: ["Jared Padalecki", "Jensen Ackles", "Misha Collins"],
        sinopsi: "Desde que era pequeno, Sam Winchester (Jared Padalecki) tentava escapar do próprio passsado. Após a misteriosa morte de Mary (Samantha Smith), o pai de Sam passou a procurar vingança contra as forças do mal que mataram a esposa, destruindo qualquer ser maligno que cruze o seu caminho.",
        avaliação:"4,7",
    },
    {
        url: "https://br.web.img3.acsta.net/c_150_200/pictures/19/11/26/09/09/5380589.jpg",
        titulo: "Anne With an E",
        tipo: "Drama",
        diretor:"Moira Walley-Beckett",
        elenco: ["Amybeth McNulty", "Geraldine James", "Lucas Jade Zumann"],
        sinopsi: "Depois de treze anos sofrendo no sistema de assistência social, a orfã Anne é mandada para morar com uma solteirona e seu irmão. Munida de sua imaginação e de seu intelecto, a pequena Anne vai transformar a vida de sua família adotiva e da cidade que lhe abrigou, lutando pela sua aceitação e pelo seu lugar no mundo.",
        avaliação:"4,7",
    },
    {
        url: "https://br.web.img3.acsta.net/c_150_200/pictures/14/01/06/14/35/382626.jpg",
        titulo: "Sherlock",
        tipo: ["Drama", "Policial"],
        diretor:"Steven Moffat",
        elenco: ["Benedict Cumberbatch", "Martin Freeman", "Amanda Abbington"],
        sinopsi: "O dr. John Watson precisa de um lugar para morar em Londres. Ele é apresentado ao detetive Sherlock Holmes e os dois acabam desenvolvendo uma parceria intrigante, na qual a dupla vagará pela capital inglesa solucionando assassinatos e outros crimes brutais. Tudo isso em pleno século XXI.",
        avaliação:"4,7",
    },
];


const divPageseries = document.getElementById("pageseries")
for (const serie of series) {
    divPageseries.innerHTML += `
    <div class="local col-12 col-md-4  d-flex justify-content">
        <img class=" img1 " src="${serie.url}">
        <a href="series.js"><strong>${serie.titulo}</strong></a>
        <p>Gêrero: <strong> ${serie.tipo}</strong></p>
    </div>
    
    
    
`    
}