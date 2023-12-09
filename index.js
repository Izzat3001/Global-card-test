const cardDesc = document.querySelector('.card-desc');
let inputSearch = document.getElementById('input')

$(document).ready(function () {
    $.ajax({
        url: "https://baconipsum.com/api/?type=lucky",
        type: "GET",
        success: function(res) {
            const desc = `<p class="desc">${res[1]}</p>` 
            cardDesc.insertAdjacentHTML("beforeend", desc)
        }
    })
})

inputSearch.oninput = function() {
    this.value = this.value.replace(/[!@#$%^&*()]+/, '');
    this.value = this.value.substr(0, 12);
    
    console.log(this.value)
}


