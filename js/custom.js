function openFilter() {
    var openFilterButton = document.getElementsByClassName('js-open-filter');
    
    openFilterButton[0].onclick = function () {
        var filter = document.getElementsByClassName('js-filter');

        if (filter[0].classList.contains('closed')) {
            filter[0].classList.remove('closed');
            openFilterButton[0].classList.add('main-filter-open_has-opened');
        } else {
            filter[0].classList.add('closed');
            openFilterButton[0].classList.remove('main-filter-open_has-opened');
        }
    }


}

openFilter();