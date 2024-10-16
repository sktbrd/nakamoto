import { Product } from "@/app/types/Products";
import stamp7 from "../../../public/STAMP01.png";
import stamp1 from "../../../public/Stamp04.png";
import stamp6 from "../../../public/Stamp05.png";
import stamp2 from "../../../public/Stamp06.png";
import stamp3 from "../../../public/Stamp07.png";
import stamp4 from "../../../public/Stamp08.png";
import stamp5 from "../../../public/Stamp09.png";
export const dummyProducts: Product[] = [
    {
        id: 1,
        name: 'LuAmbriz',
        description: '',
        price: 19.99,
        imageUrls: [stamp1.src],
        category: 'Merch',
        stock: 10,
        rating: 4.5,
        width: 800,   
        height: 600
    },
    {
        id: 2,
        name: 'Sasha Chudo',
        description: '',
        price: 29.99,
        imageUrls: [stamp2.src],

        category: 'Art',
        stock: 5,
        rating: 4.0,
    },
    {
        id: 3,
        name: 'Nexus',
        description: '',
        price: 9.99,
        imageUrls: [stamp3.src],
        category: 'Category 3',
        stock: 20,
        rating: 3.5,
    },
    {
        id: 4,
        name: 'Socks',
        description: '',
        price: 49.99,
        imageUrls: [stamp4.src],

        category: 'Merch',
        stock: 15,
        rating: 4.7,
    },
    {
        id: 5,
        name: 'Viva La Vandal',
        description: '',
        price: 19.99,
        imageUrls: [stamp5.src],

        category: 'Merch',
        stock: 10,
        rating: 4.5,
    },
    {
        id: 6,
        name: 'HNFTPepe',
        description: '',
        price: 29.99,
        imageUrls: [stamp6.src],

        category: 'Art',
        stock: 5,
        rating: 4.0,
    },
    {
        id: 7,
        name: 'Mortylen',
        description: '',
        price: 9.99,
        imageUrls: [stamp7.src],
        category: 'Category 3',
        stock: 20,
        rating: 3.5,
    },
   
];
