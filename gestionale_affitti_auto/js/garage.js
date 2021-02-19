var garage = [];

if(verificaUtente()){
    //Alla class="loader" aggiungo "hidden", così nascondo la GIF di caricamento
    document.getElementsByClassName('loader')[0].classList.add("hidden");

    function getBrands(){
        let marche$ = fetch(BRANDURL).then((brands) => {
            //Quando metto le parentesi graffe aggiungo il return
            return brands.json();
        });
        console.log(marche$);
        return marche$;
        
    }
    /*
    //Deposito le marche delle auto nel local storage
    if(window.localStorage.getItem('brands') == null){
        //getBrands()....ecc ecc
        window.localStorage.setItem('brands', JSON.stringify(marche$));
    }
    */

    getBrands().then((brands) => {
        console.log(brands);
        
        let cards = '';
        //Results è del'API
        brands.Results.forEach((brand) => {
            //ricerca dei modelli per scuderia
            cards += `
            <div class="card">
                <div class="card-header" id="${brand.MakeId}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button"
                            data-toggle="collapse" data-target="#collapse${brand.MakeId}" aria-expanded="false"
                            aria-controls="collapse${brand.MakeId}">
                            ${brand.MakeName}
                        </button>
                    </h2>
                </div>
                <div id="collapse${brand.MakeId}" class="collapse" aria-labelledby="${brand.MakeId}"
                    data-parent="#container-brands">
                    <div class="card-body">
                        <ul id="lista-${brand.MakeId}">
                            
                        </ul>
                    </div>
                </div>
            </div>
            `;

            getModels(brand.MakeId).then((modelli) => {

                let list = document.getElementById("lista-"+brand.MakeId);
                list.innerHTML = '';
                modelli.Results.forEach((mod) => {
                    list.innerHTML += `
                    <li>
                    ${mod.Model_Name}
                    </li>`
                });
            });
        });
        document.getElementById('container-brands').innerHTML = cards;
    });

    //Dopo aver ottenuto le scuderie aggiungo i modelli
    function getModels(brandId){
        let modelli$ = fetch(MODELURL+`${brandId}?format=json`).then((models) => {
            //Se metto le parentesi graffe ci vuole il return
            return models.json();
        });
        return modelli$;
    }

}
else{
    location.href = 'index.html';
}