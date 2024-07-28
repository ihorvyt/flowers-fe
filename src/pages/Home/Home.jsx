import {Header} from "../Components/Header/Index.jsx";
import Footer from "../Components/Footer/index.jsx"
import Slider from "../Components/Slider/Index.jsx";
import FilterSlider from "../Components/SortSwiper/Index.jsx";
import BouquetsCard from "../Components/FlowersCard/Index.jsx";
import './home.scss'
import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {fetchBouquet} from "../../redux/slices/bouqetsSlice.js";

export const Home = () => {
    const flowers1 = [
        {
            "id": "001",
            "name": "Product 1",
            "price": 120,
            "image": {
                "imageId": "https://www.meme-arsenal.com/memes/2e39c69b3e383b36a1db912367a3b491.jpg"
            },
            "discount": {
                "amount": 20,
                "percentage": 10
            }
        },
        {
            "id": "002",
            "name": "Product 2",
            "price": 150,
            "image": {
                "imageId": "https://www.meme-arsenal.com/memes/2e39c69b3e383b36a1db912367a3b491.jpg"
            },
            "discount": {
                "amount": 25,
                "percentage": 15
            }
        },
        {
            "id": "003",
            "name": "Product 3",
            "price": 200,
            "image": {
                "imageId": "https://www.meme-arsenal.com/memes/2e39c69b3e383b36a1db912367a3b491.jpg"
            },
            "discount": {
                "amount": 30,
                "percentage": 20
            }
        },
        {
            "id": "004",
            "name": "Product 4",
            "price": 80,
            "image": {
                "imageId": "https://www.meme-arsenal.com/memes/2e39c69b3e383b36a1db912367a3b491.jpg"
            },
            "discount": {
                "amount": 10,
                "percentage": 5
            }
        },
        {
            "id": "005",
            "name": "Product 5",
            "price": 95,
            "image": {
                "imageId": "https://www.meme-arsenal.com/memes/2e39c69b3e383b36a1db912367a3b491.jpg"
            },
            "discount": {
                "amount": 15,
                "percentage": 10
            }
        },
        {
            "id": "006",
            "name": "Product 6",
            "price": 60,
            "image": {
                "imageId": "https://www.meme-arsenal.com/memes/2e39c69b3e383b36a1db912367a3b491.jpg"
            },
            "discount": {
                "amount": 5,
                "percentage": 8
            }
        },
        {
            "id": "007",
            "name": "Product 7",
            "price": 300,
            "image": {
                "imageId": "https://www.meme-arsenal.com/memes/2e39c69b3e383b36a1db912367a3b491.jpg"
            },
            "discount": {
                "amount": 50,
                "percentage": 17
            }
        },
        {
            "id": "008",
            "name": "Product 8",
            "price": 180,
            "image": {
                "imageId": "https://www.meme-arsenal.com/memes/2e39c69b3e383b36a1db912367a3b491.jpg"
            },
            "discount": {
                "amount": 40,
                "percentage": 22
            }
        },
        {
            "id": "009",
            "name": "Product 9",
            "price": 220,
            "image": {
                "imageId": "https://www.meme-arsenal.com/memes/2e39c69b3e383b36a1db912367a3b491.jpg"
            },
            "discount": {
                "amount": 35,
                "percentage": 14
            }
        },
        {
            "id": "010",
            "name": "Product 10",
            "price": 140,
            "image": {
                "imageId": "https://www.meme-arsenal.com/memes/2e39c69b3e383b36a1db912367a3b491.jpg"
            },
            "discount": {
                "amount": 18,
                "percentage": 12
            }
        }
    ]
    const dispatch = useDispatch()
    const {bouquets} = useSelector((state) => state.bouquets)
    const {selectedFlower} = useSelector((state) => state.filter);

    useEffect(() => {
        dispatch(fetchBouquet())
    }, [selectedFlower])

    const items = bouquets
        .filter((bouquet) => selectedFlower === null ? true : bouquet.flowerIds.includes(selectedFlower))
        .map((bouquet) => <BouquetsCard key={bouquet.id} product={bouquet}/>)

    return (<>
        <Header/>
        <main className="main-home">
            <Slider/>
            <FilterSlider/>
            <div className="flowers-n-filter">
                <div className="filter">

                </div>

                <div className="flowers">
                    {items}
                </div>
            </div>
        </main>
        <Footer/>
    </>)
}