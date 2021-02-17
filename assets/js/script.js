/**
 * Abrir e Fechar o modal
 */
const Modal = {
    open() {
        //Adicionar a classe active ao modal
        document.querySelector('.modal-overlay')
            .classList.add('active')
    },
    close() {
        //Remover a classe active do modal
        document.querySelector('.modal-overlay')
            .classList.remove('active')
    }
}