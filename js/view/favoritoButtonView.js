const FavoritoButtonView = (() => {
    const renderizarBotaoFavorito = () => {
        const botaoFavorito = document.querySelectorAll('.botao-favorito');


        // Verifica se há elementos encontrados
        if (botaoFavorito.length > 0) {
            // Itera sobre todos os elementos e atualiza o conteúdo
            botaoFavorito.forEach((botaoFavorito) => {
                botaoFavorito.innerHTML = `
                    <button id="ver-favorito">
                        <a class="botao-favorito" href=""><img src="img/icones/favorito.svg"></a>
                    </button>
                `;
            });
        }
    };


    return {
        renderizarBotaoFavorito,
    };
})();

