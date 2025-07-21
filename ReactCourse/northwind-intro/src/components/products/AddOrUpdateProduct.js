import React, { use, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";
import { useNavigate, useParams } from "react-router-dom";
//import { useParams } from 'react-router-dom';

function AddOrUpdateProduct({
    products,
    categories,
    //getProducts,
    getCategories,
    saveProduct,
    //history,
    //product,
    //...props //mevcut prop'ları genişletiyoruz - Mevcut component'in proplarına usttekiler eklenmis oldu.
}) {

    // useParams kullanarak productId'yi almak
    const { productId } = useParams(); // React Router v6'da match.params yerine useParams kullanılır
    const navigate = useNavigate(); // React Router v6'da history yerine useNavigate kullanılır

    //const [productState, setProduct] = useState({ ...product }); 

    //setState yerine ReactHooks'taki syntax
    //const [product, setProduct] = useState({ ...props.product }) //product state'ini setProduct fonksiyonuyla set edebiliz demektir.

    //const [product, setProduct] = useState({});
    const [product, setProduct] = useState(null);

    const [errors, setErrors] = useState({});

    // getProductById işlevi
    // function getProductById(products, productId) {
    //     return products.find(product => product.id === parseInt(productId)) || null;
    // }

    useEffect(() => {
        //categoriy'leri getiren bir sayfaya gitmemiş.
        if (categories.length === 0) {
            getCategories();
        }
        // setProduct({ ...props.product }) //state'deki product nesnesini set ettik

        if (productId) {
            //sayi olan 1 ve string olan 1 eslessin diye == kullanıldı
            const foundProduct = products.find(p => p.id == parseInt(productId)); // productId'yi int'e çeviriyoruz
            //const foundProduct = products.find(p => p.id === parseInt(productId)); // productId'yi int'e çeviriyoruz
            setProduct(foundProduct || {}); // Ürün bulunamazsa boş bir obje
        } else {
            //setProduct({ ...props.product }); // Eğer productId yoksa yeni bir ürün oluşturuluyor
            setProduct(null); // Eğer productId yoksa yeni bir ürün oluşturuluyor
        }

        // if (productId) {
        //     const foundProduct = products.find(p => p.id === parseInt(productId));
        //     setProduct(foundProduct || {});
        // } else {
        //     setProduct({ ...product });
        // }

        // if (productId) {
        //     const foundProduct = products.find(p => p.id === parseInt(productId)); // productId'yi int'e çeviriyoruz
        //     setProduct(foundProduct || {}); // Ürün bulunamazsa boş bir obje
        // }

        //}, [productId, products, categories, getCategories, product]); 
        //}, [productId, products, categories, getCategories, props.product]); 
        //}, [props.product]); //sonsuz donguyu engellemek icin props.product dom'a yerlestigi zaman bitir
        //}, [productId, products, categories, getCategories, props.product]);
        //}, [productId, products]);
    }, [productId, products, categories, getCategories]);

    //Bir event ile data'mızı dolduruyoruz
    function handleChange(event) {
        const { name, value } = event.target;
        setProduct(previousProduct => ({
            ...previousProduct, //onceki product'i extend eder, onun uzerine yazar
            [name]: name === "categoryId" ? parseInt(value, 10) : value //categoryId degeri varsa int'e cevirirz, categoryId degilse value'yi oldugu gibi yaz
        })) //state'imizdeki product

        validate(name, value);
    }

    function validate(name, value) {
        if (name === "productName" && value === "") {
            setErrors(previousErrors => ({
                ...previousErrors,
                productName: "Urun ismi olmalidir"
            }))
        } else {
            setErrors(previousErrors => ({
                ...previousErrors,
                productName: ""
            }))
        }
        //alert(errors.productName)
    }

    function handleSave(event) {
        //
        event.preventDefault(); // Sayfanın yenilenmesini engeller

        if (!product) {
            console.error("Product is undefined or null");
            return;
        }

        event.preventDefault(); //sayfanın refresh olmasını engeller
        saveProduct(product).then(() => {
            navigate("/"); // Kaydetme sonrası anasayfaya yönlendirme
            //history.push("/") //daha once geldigimiz sayfalara yonlendirme yapmak icin kullanılır
        }) //kaydetmeyi yaptıktan sonra
            //
            .catch(error => {
                console.error("Error saving product: ", error);
            });
    }

    // // Eğer product objesi boşsa, ProductDetail bileşenine geçmeden önce kontrol ediyoruz
    // if (!product || Object.keys(product).length === 0) {
    //     return <div>Loading...</div>; // Eğer ürün verisi yüklenmediyse ya da boşsa bir yükleniyor mesajı gösterebiliriz
    // }

    // if (!product) {
    //     return <div>Loading...</div>;
    // }

    // if (product === null) {
    //     return <div>Loading...</div>;
    // }

    if (!product && productId) {
        return <div>Loading...</div>;
    }

    //const isValidProduct = product && product.id;

    //jsx return eder
    return (
        <ProductDetail
            //product={productState} // productState'i burada geçiyoruz
            //product={product}
            product={product || {}} // Eğer product null ise boş bir obje gönderebiliriz.
            categories={categories}
            onChange={handleChange}
            onSave={handleSave}
            errors={errors}
        />
    )
}

// export function getProductById(products, productId) {
//     let product = products.find(product => product.id === productId) || null; //degilse nulla ata
//     return product;
// }

//Uygulamayi redux'a baglama
//ownProps component'lerin kendi içinde barındırdıkları prop'lar
//function mapStateToProps(state, ownProps) {
function mapStateToProps(state) {
    //const productId = ownProps.productId;
    //const productId = ownProps.match.params.productId //parametrelere bak, productId'yi cek

    //const { productId } = ownProps.match.params;
    //const { productId } = useParams(); // React Router v6'da useParams kullanılarak alınır
    //const productId = state.productId;

    // Redux'dan ürün verisini alıyoruz
    // const product = productId && state.productListReducer.length > 0
    //     ? state.productListReducer.find(p => p.id === parseInt(productId)) // productId'ye göre ürün buluyoruz
    //     : {}; // Eğer ürün bulunamazsa boş bir nesne döndürüyoruz

    // state'teki urunler icinden bu urunu bulma
    // const product = productId && state.productListReducer.length > 0
    //     ? getProductById(state.productListReducer, productId)
    //     : {}; //degilse yeni eklenmeye calisan urundur

    //mevcut state olusturma
    return {
        //product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}

// function mapStateToProps(state) {
//     return {
//         products: state.productListReducer,
//         categories: state.categoryListReducer
//     };
// }

const mapDispatchToProps = {
    getCategories, saveProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct)

// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { getCategories } from "../../redux/actions/categoryActions";
// import { saveProduct } from "../../redux/actions/productActions";
// import ProductDetail from "./ProductDetail";
// import { useParams, useNavigate } from "react-router-dom";

// function AddOrUpdateProduct({
//     products,
//     categories,
//     getCategories,
//     saveProduct,
// }) {
//     const { productId } = useParams(); // URL parametresinden productId'yi alıyoruz
//     const navigate = useNavigate(); // history yerine useNavigate kullanıyoruz

//     const [product, setProduct] = useState(null);  // Başlangıçta product null olarak set ediliyor

//     useEffect(() => {
//         if (categories.length === 0) {
//             getCategories();
//         }

//         // Eğer productId varsa, ilgili ürünü bulalım.
//         if (productId) {
//             const foundProduct = products.find(p => p.id === parseInt(productId)); // productId'yi doğru türde kontrol et
//             setProduct(foundProduct || null);  // Ürün bulunamazsa null döner
//         } else {
//             setProduct(null);  // Eğer productId yoksa, null kullan
//         }
//     }, [productId, products, categories, getCategories]);

//     function handleChange(event) {
//         const { name, value } = event.target;
//         setProduct(previousProduct => ({
//             ...previousProduct,
//             [name]: name === "categoryId" ? parseInt(value, 10) : value
//         }));
//     }

//     function handleSave(event) {
//         event.preventDefault();
//         saveProduct(product).then(() => {
//             navigate("/"); // history.push yerine navigate() kullanıyoruz
//         });
//     }

//     // JSX kodu
//     return (
//         <ProductDetail
//             product={product} // Eğer null ise, ProductDetail bileşeni içinde null kontrolü yapılacak
//             categories={categories}
//             onChange={handleChange}
//             onSave={handleSave}
//         />
//     );
// }

// function mapStateToProps(state) {
//     return {
//         products: state.productListReducer,
//         categories: state.categoryListReducer
//     };
// }

// const mapDispatchToProps = {
//     getCategories, saveProduct
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);



