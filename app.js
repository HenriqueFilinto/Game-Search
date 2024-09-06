function pesquisar(){
    let section = document.getElementById("resultado-pesquisa");
    let campoP = document.getElementById("campo-pesquisa").value;

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for(let jogo of games) {

        titulo = jogo.titulo.toLowerCase();
        descricao = jogo.descricao.toLowerCase();
        tags = jogo.tags.toLowerCase();

        if (campoP == "") {

            section.innerHTML = "<p>Nenhum Jogo Encontrado</p>"

            return
        }

        campoP = campoP.toLowerCase()

        if(titulo.includes(campoP) || descricao.includes(campoP) || tags.includes(campoP)){

            

            resultados += `
            <div class="item-resultado">
                    <h2>
                        <a href="${jogo.link}" target="_blank">
                            ${jogo.titulo}
                        </a>
                    </h2>
                    <p class="descricao-meta">
                        ${jogo.descricao}
                    </p>
                    <p class="score-meta">
                        Nota no metacritc: ${jogo.score}
                    </p>
                    <a href="${jogo.saibamais}" target="_blank">Saiba Mais</a>
                </div>
        `;

        } else if(!resultados){
            resultados = "<p>Nenhum Jogo Encontrado</p>"
        }

        
    }

    section.innerHTML = resultados;
    
}