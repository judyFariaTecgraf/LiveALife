// js/app.js


document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.split("/").pop();


    // if (page === 'produtos.html' || page === '') {
    //     ProdutosController.init();
    // }


    if (page === 'index.html' || page === '') {
        ShopController.init();
    }


    // if (page === 'carrinho.html') {
    //     CarrinhoController.init();
    // }



    // if (page === 'index.html' || page === 'produtos.html' || page === '') {
    //     ProdutosController.init();
    // }


  
    if (page === 'favorito.html') {
        FavoritoController.init();
    }

    ProdutosController.init();
    CarrinhoButtonController.init();
    FavoritoButtonController.init();
   
    /* para os pop-ups aparecerem em todas as telas */
    CarrinhoController.init();
    // FavoritoController.init();

});





