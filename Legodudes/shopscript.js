console.log(products)

//Gå igjennom alle produkter, generere HTML for hvert produkt, skrive dette til index.html

//En variabel som kan holde på HTML-en for produktene
let productHTML = ""

products.map((product, index) => productHTML +=`
             <article class="products-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL" />
                <a href="KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>Kr. ${product.price} </p>
                <button>Legg til i handlekurv</button>
            </article>`)

//Finn #productslist, og fyll den med verdiene ivariabelen productHTML
document.getElementById("productlist").innerHTML = productHTML