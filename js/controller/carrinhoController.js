// js/controller/carrinhoController.js

const CarrinhoController = ((model, view) => {
    const init = () => {
        atualizarView();

        // Delegação de eventos para interações do carrinho
        const container = document.getElementById('carrinho-container');

        container.addEventListener('click', (event) => {
            if (event.target.closest('.remover-button')) {
                const produtoId = parseInt(event.target.getAttribute('data-id'));
                model.removerItem(produtoId);
                atualizarView();
            }

            if (event.target.id === 'limpar-carrinho') {
                model.limparCarrinho();
                atualizarView();
            }
        });

        container.addEventListener('input', (event) => {
            if (event.target.classList.contains('quantidade-input')) {
                const produtoId = parseInt(event.target.getAttribute('data-id'));
                const novaQuantidade = parseInt(event.target.value);
                if (!isNaN(novaQuantidade) && novaQuantidade > 0) {
                    model.atualizarQuantidade(produtoId, novaQuantidade);
                    atualizarView();
                }
            }
        });

    };


    const atualizarView = () => {
        const carrinho = model.getCarrinho();
        view.renderizarCarrinho(carrinho);
    };

    return {
        init
    };
})(CarrinhoModel, CarrinhoView);