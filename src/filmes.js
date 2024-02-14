const filmes = [
    {
        url: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/30/21/19874092.jpg",
        titulo: "Forrest Gump - O Contador de História",
        tipo: ["Comédia", "Drama", "Romance"],
        diretor:  "Robert Zemeckis",
        elenco:["Tom Hanks", "Gary Sinise", "Robin Wright"],
        sinopsi: "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções. Por obra do acaso, ele consegue participar de momentos cruciais, como a Guerra do Vietnã e Watergate, mas continua pensando no seu amor de infância, Jenny Curran.",
        avaliação:"4,7",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg",
        titulo: "O Poderoso Chefão",
        tipo: "Relançamento 24 de fevereiro de 2022",
        diretor:  "Francis Ford Coppola",
        elenco:["Marlon Brando", "Al Pacino", "James Caan"],
        sinopsi: "Don Vito Corleone (Marlon Brando) é o chefe de uma 'família' de Nova York que está feliz, pois Connie (Talia Shire), sua filha, se casou com Carlo (Gianni Russo). Porém, durante a festa, Bonasera (Salvatore Corsitto) é visto no escritório de Don Corleone pedindo 'justiça', vingança na verdade contra membros de uma quadrilha, que espancaram ...",
        avaliação:"4,8",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/pictures/19/04/10/19/44/2904073.jpg",
        titulo: "A Lista de Schindler",
        tipo: ["Biopic", "Drama", "História"],
        diretor:  "Steven Spielberg",
        elenco:["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
        sinopsi: "A inusitada história de Oskar Schindler (Liam Neeson), um sujeito oportunista, sedutor, 'armador', simpático, comerciante no mercado negro, mas, acima de tudo, um homem que se relacionava muito bem com o regime nazista, tanto que era membro do próprio Partido Nazista (o que não o impediu de ser preso algumas vezes, mas sempre o libertavam ...",
        avaliação:"3,9",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/16/48/20083748.jpg",
        titulo: "Um Sonho de Liberdade",
        tipo: "Drama",
        diretor:  "Frank Darabont",
        elenco:["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        sinopsi: "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela. Ele é mandado para uma prisão que é o pesadelo de qualquer detento, a Penitenciária Estadual de Shawshank, no Maine. Lá ele irá cumprir a ...",
        avaliação:"4,8",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/28/19962110.jpg",
        titulo: "O Rei Leão",
        tipo: ["Aventura", "Animação", "Família"],
        diretor:  ["Roger Allers", "Rob Minkoff"],
        elenco:["Garcia Júnior", "Matthew Broderick", "Jonathan Taylor"],
        sinopsi: "Simba, um leão herdeiro do trono, precisará enfrentar seu tio Scar e escapar de suas artimanhas para evitar perder seu posto como futuro rei.",
        avaliação:"4,7",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/47/20224867.jpg",
        titulo: "O Senhor dos Anéis - O Retorno do Rei",
        tipo: ["Aventura", "Fantasia"],
        diretor:  "Peter Jackson",
        elenco:["Sean Astin", "Elijah Wood", "Viggo Mortensen"],
        sinopsi: "Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf (Ian McKellen) e Pippin (Billy Boyd) partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden (Bernard Hill) em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso Frodo (Elijah Wood), Sam (Sean ...",
        avaliação:"4,7",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/66/66/20156966.jpg",
        titulo: "À Espera de um Milagre",
        tipo: ["Policial", "Drama", "Fantasia"],
        diretor:  "Frank Darabont",
        elenco:["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
        sinopsi: "1935, no corredor da morte de uma prisão sulista. Paul Edgecomb (Tom Hanks) é o chefe de guarda da prisão, que temJohn Coffey (Michael Clarke Duncan) como um de seus prisioneiros. Aos poucos, desenvolve-se entre eles uma relação incomum, baseada na descoberta de que o prisioneiro possui um dom mágico que é, ao mesmo tempo, misterioso e milagroso.",
        avaliação:"4,7",
    },
    {
        url: "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/87/63/19962446.jpg",
        titulo: "A vida é Bela",
        tipo: ["Comédia", "Comédia dramática", "Drama"],
        diretor: "Roberto Benigni",
        elenco: ["Roberto Benigni", "Horst Buchholz", "Marisa Paredes"],
        sinopsi: "Durante a Segunda Guerra Mundial na Itália, o judeu Guido (Roberto Benigni) e seu filho Giosué são levados para um campo de concentração nazista. Afastado da mulher, ele tem que usar sua imaginação para fazer o menino acreditar que estão participando de uma grande brincadeira, com o intuito de protegê-lo do terror e da violência que os cercam.",
        avaliação:"4,7",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg",
        titulo: "Batman - Ocavaleiro Das Trevas",
        tipo: ["Ação", "Suspense"],
        diretor:"Chrstopher Nolan",
        elenco: ["Christian Bale", "Heath Ledger", "MAaron Eckhart"],
        sinopsi: "Após dois anos desde o surgimento do Batman (Christian Bale), os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon (Gary Oldman) e do promotor público Harvey Dent (Aaron Eckhart), Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa (Heath ...",
        avaliação:"4,7",
    },
    {
        url: "https://br.web.img2.acsta.net/c_310_420/pictures/19/04/26/17/30/2428965.jpg",
        titulo: "Vingadores: Ultimato",
        tipo: ["Ação", "Aventura", "Ficção Cientifica"],
        diretor:"Joe Russo",
        elenco: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
        sinopsi: "Os Vingadores unem forças para lutar contra Thanos, após o vilão eliminar metade dos seres vivos da galáxia.",
        avaliação:"4,7",
    },
];

const divResultado = document.getElementById("resultado")
for (const filme of filmes) {
    divResultado.innerHTML += `
    <div class="row">
        <div class="col-6">
            <div class="d-flex justify-content-end mb-5">
                <img class=" img1 " src="${filme.url}">
            </div>
        </div>
        <div class="conteudo col-6">
            <div class=" ">
                <h4>${filme.titulo}</h4>
                <p>Gêrero: ${filme.tipo}</p>
                <p>Direção: <strong>${filme.diretor}</strong></p>
                <p>Elenco: ${filme.elenco}</p>
                <p><strong>Sinopse:</strong> ${filme.sinopsi}</p>
                <div class="d-flex justify-content">
                    <div class="avaliacao col-2 border border-black text-center">
                        <p><strong>Usuários</strong></p>
                        <h5>${filme.avaliação}</h5>
                    </div>
                    <div class=" button1 mx-auto  col-4">
                        <button type="button" class=" btn btn-primary">Assistir Agora!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
}