function btn(){
    const btn = document.querySelector('.header__btn');

    btn.addEventListener('click', () => {
        btn.style.backgroundColor = '#80AA75';
        btn.style.color = '#fff';
    })
}
export default btn