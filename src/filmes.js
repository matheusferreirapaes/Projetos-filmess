const filmes = [
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrFDkeXcKSQJV0c3vlsspAobPgr9u8lFX3A&usqp=CAU",
        titulo: "Forrest Gump - O Contador de História",
        tipo: ["Comédia", "Drama", "Romance"],
        diretor:  "Robert Zemeckis",
        elenco:["Tom Hanks", "Gary Sinise", "Robin Wright"],
    },
    {
        url: "https://avatars.mds.yandex.net/i?id=c109190f70eebe240c5935c0d2ec8441faaea277-9094970-images-thumbs&n=13",
        titulo: "O Poderoso Chefão",
        tipo: "Relançamento 24 de fevereiro de 2022",
        diretor:  "Francis Ford Coppola",
        elenco:["Marlon Brando", "Al Pacino", "James Caan"],
    },
    {
        url: "https://avatars.mds.yandex.net/i?id=e6141e5e00a211592336b996bb30ecd796a7942b-9744150-images-thumbs&n=13",
        titulo: "A Lista de Schindler",
        tipo: ["Biopic", "Drama", "História"],
        diretor:  "Steven Spielberg",
        elenco:["Liam Neeson", "Ben Kingsley", "Ralph Fiennes"],
    },
    {
        url: "https://avatars.mds.yandex.net/i?id=c351e0e43357591dd89b2e2338fc7265-5644655-images-thumbs&n=13",
        titulo: "Um Sonho de Liberdade",
        tipo: "Drama",
        diretor:  "Frank Darabont",
        elenco:["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    },
    {
        url: "https://avatars.mds.yandex.net/i?id=bf77dd5b7909b778fbd252696a86cf45a16eab73-9181720-images-thumbs&n=13",
        titulo: "O Rei Leão",
        tipo: ["Aventura", "Animação", "Família"],
        diretor:  ["Roger Allers", "Rob Minkoff"],
        elenco:["Garcia Júnior", "Matthew Broderick", "Jonathan Taylor"],
    },
    {
        url: "https://avatars.mds.yandex.net/i?id=f5c469e6d8d7cfcbb313dfe656a4293a15a684f8-9146252-images-thumbs&n=13",
        titulo: "O Senhor dos Anéis - O Retorno do Rei",
        tipo: ["Aventura", "Fantasia"],
        diretor:  "Peter Jackson",
        elenco:["Sean Astin", "Elijah Wood", "Viggo Mortensen"],
    },
    {
        url: "https://avatars.mds.yandex.net/i?id=f92cb7fac13790e0c44f003995c2f954e5790fde-6947220-images-thumbs&n=13",
        titulo: "À Espera de um Milagre",
        tipo: ["Policial", "Drama", "Fantasia"],
        diretor:  "Frank Darabont",
        elenco:["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    },
    {
        url: "https://avatars.mds.yandex.net/i?id=c5e2e07d3ea31c410ff3f7b4050c1ae3-5450106-images-thumbs&n=13",
        titulo: "A vida é Bela",
        tipo: ["Comédia", "Comédia dramática", "Drama"],
        diretor: "Roberto Benigni",
        elenco: ["Roberto Benigni", "Horst Buchholz", "Marisa Paredes"],
    },
    {
        url: "https://avatars.mds.yandex.net/i?id=18960db2fb3434e8d9385c78523c9e1fb3331dfc-12168040-images-thumbs&n=13",
        titulo: "Batman - Ocavaleiro Das Trevas",
        tipo: ["Ação", "Suspense"],
        diretor:"Chrstopher Nolan",
        elenco: ["Christian Bale", "Heath Ledger", "MAaron Eckhart"],
    },
    {
        url: "https://avatars.mds.yandex.net/i?id=2e5b197aadfde2779729dc2d416cf623644fd546-10932700-images-thumbs&n=13",
        titulo: "Vingadores: Ultimato",
        tipo: ["Ação", "Aventura", "Ficção Cientifica"],
        diretor:"Joe Russo",
        elenco: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    },
];

const divResultado = document.getElementById("resultado")
for (const filme of filmes) {
    divResultado.innerHTML += `
    <div class="row">
        <div class="col-6">
            <div class="d-flex justify-content-end mb-5">
                <img class="rounded img-fluid" src="${filme.url}">
            </div>
        </div>
        <div class="col-6">
            <div class=" mb-5 text-start p-5">
                <h4>${filme.titulo}</h4>
                <p>Gêrero: ${filme.tipo}</p>
                <p>Direção: <strong>${filme.diretor}</strong></p>
                <p>Elenco: ${filme.elenco}</p>
                <div class="d-grid gap-2 col-6">
                    <button type="button" class="btn btn-primary">Assistir Agora!</button>
                </div>
            </div>
        </div>
    </div>
`
}