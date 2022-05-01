class Cart {
    constructor(name) {
        this.name = name
        this.inside = []
        this.id = Date.now()
    }

    addItemToCart(obj) {
        this.inside.push(obj)
        this.saveCartItems()
    }

    deleteItemOfCart(objName, number) {
        let i = 0;
        let array = []
        for(let k = 0; k < this.getLength(); k++) {
            if(this.inside[k].name != objName) {
                array.push(this.inside[k])
            }
            else if(number <= i) {
                    array.push(this.inside[k])
            }else {
                i++;
            }
        }

        this.inside = array
        this.saveCartItems()
    }

    clear() {
        this.inside = []
    }

    saveCartItems() {
        sessionStorage.setItem('cart', JSON.stringify(this.getCartContent()))
    }

    getCartContent() {
        return this.inside
    }

    getLength() {
        return this.inside.length
    }

    getTotal() {
        let total = 0;
        this.getCartContent().forEach((item) => {
            total += item.price
        })
        return total.toPrecision(5)
    }


}

const Items = [
    {
        name: 'Vin rouge', type: 'drink', price: 25.99 
    },
    {
        name: 'Vodka', type: 'drink', price: 11.99
    },
    {
        name: 'Menu Saint Jacques', type: 'menu', price: 19.50
    },
    {
        name: 'Menu Poisson et Asperge', type: 'menu', price:17.85
    },
    {
        name : 'Truffes au chocolat', type: 'food', price:12.25
    },
    {
        name : 'Menu cèpes', type: 'menu', price:25.00
    }
]

let panier = new Cart("Food_cart")

if(sessionStorage.getItem('cart') != null) {
    panier.inside = JSON.parse(sessionStorage.getItem('cart'))
    console.log(panier.getCartContent())
    console.info('Cart already exist.')
}


