document.querySelectorAll(".dropdown").forEach(dropdown => {
    new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: true,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
  })







document.querySelectorAll(".bottom__button").forEach(button => {
    button.addEventListener('click', function (event) {
        document.querySelectorAll('.bottom__item').forEach(item => {
            if (item.querySelector('.bottom__button') !== button) {
                item.classList.remove('dropdown__open')
            }

        })

        event._isClick = true
        button.parentElement.classList.toggle('dropdown__open')

    })

})
// находим все элементы header button

document.body.addEventListener('click', function (event) {

    console.log(event.target.parentElement.classList.contains('dropdown__open'));
    if (
        event._isClick == true ||
        event.target.classList.contains('bottom__button') == true ||
        event.target.classList.contains('dropdown') == true
    ) return

    document.querySelectorAll('.bottom__item').forEach(item => {

        item.classList.remove('dropdown__open')

    })

})
