

<template>
    <section class="banner">
        <div class="container">
            <div class="banner-item">
                <h2 class="banner-item--title">Онлайн-сервис <br> доставки еды на дом</h2>
                <p class="banner-item--subtitle">Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком</p>
            </div>
        </div>
    </section>

    <section class="products">
        <div class="container">
            <div class="products-header">
                <h3 class="products-header--title">
                    Рестораны
                </h3>
                <input class="products-header--search" placeholder="Поиск блюд и ресторанов">
            </div>

            <div class="products-wrapper" id="rests-container">
                <router-link 
                    class="products-card"
                    v-for="rest in restArray"
                    :key="rest.id"
                    :to="`/rest?id=${rest.id}`"
                >
                    <div class="products-card__image">
                        <img :src="getUrl(rest.image)" alt="1"/>
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description--row">
                            <h2 class="products-card__description--title">{{ rest.title }}</h2>
                            <div class="products-card__description--badge">{{ rest.time }} мин</div>
                        </div>
                        <div class="products-card__description--row">
                            <div class="products-card__description--info">
                                <div class="products-card__description--info--rating">
                                    <img src="/img/icons/star.svg" alt="star"> {{ rest.rating }}
                                </div>
                                <div class="products-card__description--info--price">
                                    От {{ rest.price }} ₽
                                </div>
                                <div class="products-card__description--info--group">
                                    {{ rest.type }}
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>

            </div>
        </div>
    </section>
</template>

<script setup>

const getUrl = (name) =>{
    return new URL(`/img/rests/${name}`, import.meta.url)
}
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
</script>