const container = document.querySelector('.cart-container')
/**
 * Actualise le contenu du panier 
 */
function makeCartContent() {
    if(panier.getLength() == 0) {
        container.innerHTML = '<h3 class="textInfo">Panier vide</h3>'
        document.querySelector('.price').innerText = 'Commander - ' + panier.getTotal() + '€'
    }else {
        console.log(sortCartItems(panier.getCartContent()))

        container.innerHTML = ''
        sortCartItems(panier.getCartContent()).forEach((item) => {
            if(item.number > 0) {
            const div = document.createElement('div')
            div.classList.add('cart-item')
            container.appendChild(div)

            const span = document.createElement('span')
            span.innerText = item.name +  ' × ' + item.number
            div.appendChild(span)

            const subDiv = document.createElement('div')
            subDiv.classList.add('delete-controller')
            div.appendChild(subDiv)

            const number = document.createElement('input')
            number.type = 'number'
            number.placeholder = '1'
            number.setAttribute('max', item.number)
            number.setAttribute('min', 1)
            number.setAttribute('value', 1)
            number.classList.add('number')
            subDiv.appendChild(number)

            const button = document.createElement('button')
            button.innerText = 'Supprimer'
            button.addEventListener('click', () => {
                panier.deleteItemOfCart(item.name, number.valueAsNumber);
                makeCartContent()
            })
            subDiv.appendChild(button)
            document.querySelector('.price').innerText = 'Commander - ' + panier.getTotal() + '€'
        }

        })
    }
}
/**
 * Forme un tableau d'objet 'compressé' de la liste des items présent dans le panier de l'utilisateur et prend en entrée un panier de type {Cart}
 * @param {Array} Cart 
 * @returns {Array}
 */
function sortCartItems(Cart) {
    let vinN = 0, vodkN = 0, madelaineN = 0, stjN = 0, poissonAspergeN = 0, truffeChocN = 0, ceppesGrilleN = 0;


    Cart.forEach((item) => {
        switch (item.name) {
            case 'Vin rouge':
                vinN++;
                break;
            case 'Vodka':
                vodkN++;
                break;
            case 'Madelaine':
                madelaineN++;
                break;
            case 'Menu Saint Jacques':
                stjN++;
                break;
            case 'Menu Poisson et Asperge':
                poissonAspergeN++;
                break;
            case 'Truffes au chocolat':
                truffeChocN++;
                break;
            case 'Menu cèpes':
                ceppesGrilleN++;
                break;
            default:
                break;
        }
    })

    const compressedCart = [
        {
            name : 'Vin rouge',
            number: vinN
        },
        {
            name : 'Vodka',
            number: vodkN
        },
        {
            name : 'Madelaine',
            number: madelaineN
        },
        {
            name : 'Menu Saint Jacques',
            number : stjN
        },
        {
            name : 'Menu Poisson et Asperge',
            number : poissonAspergeN
        }, 
        {
            name : 'Truffes au chocolat',
            number : truffeChocN
        },
        {
            name : 'Menu cèpes',
            number : ceppesGrilleN
        }
    ]

    return compressedCart;

}

/**
 *  Fonction appelée lors de la supression d'un item dans le panier de l'utilisateur, cette fonction actualise,  sans rechargé la modal, le contenu du panier 
 * @param {string} name 
 */
function refresh(name, number) {
    panier.deleteItemOfCart(name, number);
    makeCartContent()
}