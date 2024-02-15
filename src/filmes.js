const movie = [
    {
        url: "https://br.web.img2.acsta.net/c_310_420/pictures/23/12/12/15/59/2772653.jpg",
        titulo: "Madame Teia",
        tipo: "Ficção",
        diretor:  "S.J Clarkson",
        elenco:["Dakota Johnson", "Sydney Sweeney", "Isabela Merced"],
        sinopsi: "Uma mulher que pode ver o futuro se junta a três jovens para combater uma ameaça em comum.",
        avaliação:"3,2",
    },
    {
        url: "https://br.web.img2.acsta.net/c_310_420/pictures/23/04/24/16/38/3592850.png",
        titulo: "Nosso Lar 2: Os Mensageiros",
        tipo: ["Fantasia", "Ficção"],
        diretor:  "Wagner de Assis",
        elenco:["Edson Celulari",  "Fábio Lago",  "Othon Bastos"],
        sinopsi: "Sequência de Nosso Lar (2010), uma cidade astral onde espíritos vão para aprender lições e conhecimentos.",
        avaliação:"3,2",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/pictures/23/10/19/16/00/5781108.jpg",
        titulo: "Todos Menos Você",
        tipo: ["Comédia", "Romance"],
        diretor:  "Will Gluck",
        elenco:["Sydney Sweeney",  "Glen Powell",  "Alexandra Shipp"],
        sinopsi: "Em Todos Menos Você Bea (Sydney Sweeney) e Ben (Glen Powell), combinam um encontro após se esbarrar nos corredores da faculdade em que estudam. Em uma noite quase perfeita, o jovem casal possui tudo para manter o contato: química, uma boa conversa e um incrível desejo um pelo outro. ",
        avaliação:"3,7",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/pictures/23/12/21/17/23/0868774.jpg",
        titulo: "Baghead: A Bruxa dos Mortos",
        tipo: "Terror",
        elenco:["Freya Allan", "Jeremy Irvine", "Ruby Barker"],
        sinopsi: "Em Baghead: A Bruxa dos Mortos, uma garota explora uma entidade capaz de falar com os mortos e sofre consequências terríveis.",
        avaliação:"3,2",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/pictures/23/07/06/16/50/4093909.jpg",
        titulo: "Bob Marley: One Love",
        tipo: ["Biopic", "Drama"],
        diretor: "Reinaldo Marcus Green",
        elenco:["Kingsley Ben-Adir", "Lashana Lynch", "James Norton"],
        sinopsi: "Bob Marley: One Love é um filme biográfico dirigido por Reinaldo Marcus Green (King Richard: Criando Campeãs) que conta a história de Robert Nesta Marley OM, mais conhecido como Bob Marley, grande ícone do reggae. O filme relembra os importantes feitos do cantor para seu país, assim como as dificuldades que sua família e conhecidos passaram.",
        avaliação:"3,6",
    },
    {
        url: "https://br.web.img2.acsta.net/c_310_420/pictures/23/12/19/15/53/5419585.jpg",
        titulo: "Wish - O Poder dos Desejos",
        tipo: ["Aventura", "Animação"],
        diretor:  "Chris Buck",
        elenco:["Ariana DeBose", "Chris Pine", "Chris Pine"],
        sinopsi: "Em Wish: O Poder dos Desejos, conhecemos a história de Asha (Ariana DeBose) que em uma medida de desespero para salvar sua terra natal de inimigos, pede com todas as suas forças a ajuda de uma Estrela, que lhe atende. Em companhia de seu bode, Valentino, eles navegam para Rosas, o reino dos desejos, onde os desejos podem literalmente se tornar realidade.",
        avaliação:"3,1",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/pictures/23/12/07/19/08/2800297.jpg",
        titulo: "Patos!",
        tipo: ["Aventura", "Animação", "Comédia"],
        diretor:  "Benjamin Renner",
        elenco:["Sérgio Stern", "Kumail Nanjiani", "Priscila Amorim"],
        sinopsi: "Uma família de patos parte em uma viagem que promete muitas aventuras - mas os planos acabam tomando um rumo diferente.",
        avaliação:"4,0",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/pictures/23/12/11/14/39/2389191.png",
        titulo: "Aquaman 2: O Reino Perdido",
        tipo: ["Ação", "Aventura", "Fantasia"],
        diretor: "James Wan",
        elenco: ["Jason Momoa", "Patrick Wilson", "Amber Heard"],
        sinopsi: "Aquaman 2 é a sequência do filme Aquaman de 2018, que acompanha Arthur Curry (Jason Momoa), o filho do humano Tom Curry (Temuera Morrison) com a atlante Atlanna (Nicole Kidman)",
        avaliação:"4,0",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/pictures/23/08/16/19/38/1565930.jpg",
        titulo: "Mussum, o Filmis",
        tipo: "Biopic",
        diretor:"Silvio Guindane",
        elenco: ["Ailton Graça", "Vanderlei Bernardino", "Neusa Borges"],
        sinopsi: "Cinebiografia de Antônio Carlos Bernardes Gomes, o Mussum.",
        avaliação:"4,0",
    },
    {
        url: "https://br.web.img3.acsta.net/c_310_420/pictures/23/05/08/10/29/0695770.jpg",
        titulo: "Oppenheimer",
        tipo: ["Biopic", "Histórico", "Suspense"],
        diretor:"Christopher Nolan",
        elenco: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
        sinopsi: "Na Segunda Guerra Mundial, um grupo de cientistas participa de um projeto secreto para desenvolver as primeiras bombas atômicas.",
        avaliação:"3,8",
    },
];

const divResultado = document.getElementById("resultados")
for (const filmes of movie) {
    divResultado.innerHTML += `
    <div class="row">
    <div class="col-6">
        <div class="d-flex justify-content-end mb-5">
            <img class=" img1 " src="${filmes.url}">
        </div>
    </div>
    <div class="conteudo col-6">
        <div class=" ">
            <h4><strong>${filmes.titulo}</strong></h4>
            <p>Gêrero: <strong> ${filmes.tipo}</strong></p>
            <p>Direção: <strong>${filmes.diretor}</strong></p>
            <p>Elenco:<strong> ${filmes.elenco}</strong></p>
            <p><strong>Sinopse:</strong> ${filmes.sinopsi}</p>
            <div class="d-flex justify-content">
                <div class="avaliacao col-2 border border-black text-center">
                    <p><strong>Usuários</strong></p>
                    <h5>${filmes.avaliação}</h5>
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