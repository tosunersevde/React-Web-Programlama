import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({
    categories,
    product,
    onSave,
    onChange,
    errors
}) => {
    return (
        <form onSubmit={onSave}>
            {/* <h2>{product.id ? "Guncelle" : "Ekle"}</h2> */}
            <h2>{product && product.id ? "Güncelle" : "Ekle"}</h2>
            <TextInput
                name="productName"
                label="Product Name"
                // value={product.productName}
                value={product ? product.productName : ""}
                onChange={onChange}
                //error="Hata"
                error={errors.productName}
            />

            <SelectInput
                name="categoryId"
                label="Category"
                value={product.categoryId || ""}
                defaultOption="Seciniz"
                options={categories.map(category=>({
                    //value={product ? product.categoryId : ""}
                    value:category.id,
                    text:category.categoryName
                }))}
                onChange={onChange}
                //error="Hata"
                error={errors.categoryId}
            />

            <TextInput
                name="unitPrice"
                label="Unit Price"
                value={product ? product.unitPrice : ""}
                onChange={onChange}
                //error="Hata"
                error={errors.unitPrice}
            />

            <TextInput
                name="quantityPerUnit"
                label="Quantity Per Unit"
                value={product ? product.quantityPerUnit : ""}
                onChange={onChange}
                //error="Hata"
                error={errors.quantityPerUnit}
            />

            <TextInput
                name="unitsInStock"
                label="Units In Stock"
                value={product ? product.unitsInStock : ""}
                onChange={onChange}
                //error="Hata"
                error={errors.unitsInStock}
            />

            <button type="submit" className="btn btn-success">Kaydet</button>
        </form>
    )
}

export default ProductDetail;