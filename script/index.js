const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay')
    const cartBtn = document.querySelector('#cart-button')

    const openModal = () =>{
        modal.classList.add('open')
    }

    const closeModal = () =>{
        modal.classList.remove('open')
    }

    cartBtn.addEventListener('click', () => {
        openModal()
    })

    modal.addEventListener('click', (event) =>{
        console.log(event.target);
        if (event.target.classList.contains('cart-modal__overlay') || event.target.closest('.cart-modal__header--close')){
            
            closeModal()    
        }
        
    })
}

const restsFunc = () =>{
    const container = document.querySelector('#rests-container')

    const restArray  =[
        {
            id: 1,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: '1.jpg'
        },
        {
            id: 2,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: '2.jpg'
        },
        {
            id: 3,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: '3.jpg'
        },
        {
            id: 4,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: '4.jpg'
        },
        {
            id: 5,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: '5.jpg'
        },
        {
            id: 6,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: '6.jpg'
        }
    ]

    const loading = () =>{
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>' 
    }

    const randerRests = (array) =>{
        container.innerHTML = ''
         
        array.forEach((card) =>{
            container.insertAdjacentHTML('beforeend', `
                <a href="/goods.html?id=${card.id}" class="products-card">
                    <div class="products-card__image">
                        <img src="/img/rests/${card.image}" alt="${card.image}">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description--row">
                            <h2 class="products-card__description--title">${card.title}</h2>
                            <div class="products-card__description--badge">${card.time} мин</div>
                        </div>
                        <div class="products-card__description--row">
                            <div class="products-card__description--info">
                                <div class="products-card__description--info--rating">
                                    <img src="/img/icons/star.svg" alt="star"> ${card.rating}
                                </div>
                                <div class="products-card__description--info--price">
                                    От ${card.price} ₽
                                </div>
                                <div class="products-card__description--info--group">
                                    ${card.type}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                `)
            
        })
    }

    if (container){
        loading()
        setTimeout(()=>{
            randerRests(restArray)
        }, 1000)
    }
    
}

const resrsFuncgoods = () =>{
    const container = document.querySelector('#rests-container-goods')

    const restArray  =[
        {
            id: 1,
            title: 'Ролл угорь стандарт',
            subtitle: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            cart: 'В корзину',
            price: 250,
            image: 'good 1.jpg'
        },
        {
            id: 2,
            title: 'Калифорния лосось стандарт',
            subtitle: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            cart: 'В корзину',
            price: 395,
            image: 'good 2.jpg'
        },
        {
            id: 3,
            title: 'Окинава стандарт',
            subtitle: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            cart: 'В корзину',
            price: 250,
            image: 'good 3.jpg'
        },
        {
            id: 4,
            title: 'Цезарь маки хl',
            subtitle: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            cart: 'В корзину',
            price: 250,
            image: 'good 4.jpg'
        },
        {
            id: 5,
            title: 'Ясай маки стандарт 185 г',
            subtitle: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            cart: 'В корзину',
            price: 250,
            image: 'good 5.jpg'
        },
        {
            id: 6,
            title: 'Ролл с креветкой стандарт',
            subtitle: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            cart: 'В корзину',
            price: 250,
            image: 'good 6.jpg'
        }
    ]

    const loading = () =>{
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>' 
    }

    const randerRests = (array) =>{
        container.innerHTML = ''
         
        array.forEach((card) =>{
            container.insertAdjacentHTML('beforeend', `
                <div class="products-card">
                    <div class="products-card__image">
                        <img src="/img/goods/${card.image}" alt="1">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description--row">
                            <h5 class="products-card__description--name">
                                ${card.title}
                            </h5>
                        </div>
                        <div class="products-card__description--row">
                            <p class="products-card__description--text">
                                ${card.subtitle}
                            </p>
                        </div>
                        <div class="products-card__description--row">
                            <div class="products-card__description--controls">
                                <button class="btn btn-primary">
                                    ${card.cart}
                                    <img src="/img/icons/shopping-cart-white.svg" alt="cart">
                                </button>
                                <span class="products-card__description--controls--price">
                                    ${card.price} ₽
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                `)
        })
    }

    if (container){
        loading()
        setTimeout(()=>{
            randerRests(restArray)
        }, 1000)
    }
}

modalFunc()
restsFunc()
resrsFuncgoods()