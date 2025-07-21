import * as actionTypes from "./actionTypes"

export function getProductsSuccess(products) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products }
}

export function createProductSuccess(product) {
    // return {type:actionTypes.CREATE_PRODUCT_SUCCESS, product}
    //JavaScript'te bir obje gonderirsek ismi product ve degeri o product'in icinde ne varsa gonderilir.
    // return {type:actionTypes.CREATE_PRODUCT_SUCCESS, product:product}
    return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product }
}

export function updateProductSuccess(product) {
    return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product }
}

//Api'de ekleme icin post guncelleme icin put kullanılır
//id gonderilmemisse ekleme, id gonderilmisse guncellemedir.
export function saveProductApi(product) {
    //prduct id varsa onu koy, yoksa hiçbir şey koyma
    //default'u get'tir.
    return fetch("http://localhost:3000/products/" + (product.id || ""),
        {
            method: product.id ? "PUT" : "POST", //id varsa PUT degilse POST Request'tir
            //- default'u budur, api'den api'ye degisir.
            headers: { "content-type": "application/json" }, //api farklı header'lar istiyorsa nasıl gonderilecegini soyler 
            body: JSON.stringify(product) //stringlestirmek - request'ler string formatinda gonderilir.
        })
        .then(handleResponse)
        .catch(handleError); //ayni isleri yapmamak icin ortak kod
}

export function saveProduct(product) {
    return function (dispatch) {
        //eklenmeye veya guncellenmeye calisilan data yollanir 
        //saveProductApi(product).then(savedProduct => {
        return saveProductApi(product).then(savedProduct => {
            product.id ? 
            dispatch(updateProductSuccess(savedProduct)) //id varsa
            : dispatch(createProductSuccess(savedProduct)) //id yoksa
        }).catch(error=>{throw error}); //hata donerse
    }
}

//handle error ve handle response yardımcı fonksiyonları
//export async function handleResponse(response){
export function handleResponse(response){
    //response'un sonucuna gore karar verecek
    if(response.ok){
        return response.json()
    }

    // const error = await response.text() //sonuc ok degilse bir hata var
    // throw new Error(error)

    //
    // response.text() Promise döner, o yüzden burada then ile işle
    return response.text().then(error => {
        throw new Error(error);
    });
}

export function handleError(error){
    console.error("Bir Hata Olustu!");
    throw error;
}

// export function getProducts(){
export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products";

        if (categoryId) {
            url = url + "?categoryId=" + categoryId
        }

        return fetch(url).then(response => response.json()) //response her zaman stringtir (tipi).
            .then(result => dispatch(getProductsSuccess(result)));
    }
}