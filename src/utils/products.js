export const products = [
    {
        id: 1,
        title: "RTX 3060Ti",
        category: "gpu",
        price: 3406.88,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/14-126-470-V03.webp"
    },
    {
        id: 2,
        title: "Corsair Vengence PRO",
        category: "ram",
        price: 2966.42,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/692564-MLA40194179683_122019-F.jpg"
    },
    {
        id: 3,
        title: "Patriot Viper",
        category: "ram",
        price: 5691.95,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/1617649633_viper_steel_rgb_b_back.jpg"
    },
    {
        id: 4,
        title: "XPG Gammix",
        category: "ram",
        price: 4172.46,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/AGAMMIXS11P-512GT-C.jpeg"
    },
    {
        id: 5,
        title: "Ryzen 9",
        category: "micro",
        price: 7261.03,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/concepto-6252949.jpg"
    },
    {
        id: 6,
        title: "ASUS ROG Helios",
        category: "gabinete",
        price: 2042.06,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/D_NQ_NP_799844-MLA50376713804_062022-W.jpg"
    },
    {
        id: 7,
        title: "Samsung EVO PRO",
        category: "disco",
        price: 6358.07,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/disco-solido-ssd-nvme-m2-samsung-980-evo-pro-250gb-pcie-40-2273-3482.jpg"
    },
    {
        id: 8,
        title: "ROG STRIX 650watts",
        category: "fuente",
        price: 3316.10,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/fuente%20asus%20rog.jpg"
    },
    {
        id: 9,
        title: "Lian Li Dinamiic XL",
        category: "gabinete",
        price: 3778.32,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/GABINETE-LIAN-LI-DYNAMIC-XL-ROG-CERTIFY-BLANCO-ARGB1620611787222.jpg"
    },
    {
        id: 10,
        title: "RTX 360",
        category: "gpu",
        price: 2489.97,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/gpu_rog.jpg"
    },
    {
        id: 11,
        title: "ROG Maximus Z690",
        category: "mother",
        price: 8750.67,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/mobo_rog.jpg"
    },
    {
        id: 12,
        title: "MSI PRO Z690",
        category: "mother",
        price: 3353.15,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/MOT1817.jpg"
    },
    {
        id: 13,
        title: "i5 12600k",
        category: "micro",
        price: 5032.16,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/procesador-intel-core-i5-12600k-370ghz.jpg"
    },
    {
        id: 14,
        title: "i7 12700k",
        category: "micro",
        price: 8780.31,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/procesador-intel-core-i7-12700k-360ghz25mb-lga1700-pnbx8071512700k.jpg"
    },
    {
        id: 15,
        title: "i9 12900k",
        category: "micro",
        price: 7017.08,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/Procesador-IntelCorei9-12900K--5.2Ghz-AlderLake-1700-SinCooler_41360_1.jpeg"
    },
    {
        id: 16,
        title: "Ryzen 5",
        category: "micro",
        price: 9238.24,
        pictureUrl: "https://javascript-proyecto-final-ten.vercel.app/multimedia/PC/Ryzen-5-5600X_Foto0g.jpg"
    }
]

export const getAllProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout (() => {
            return resolve (products);
        }, 2000)
    })
    return promise;
};

export const getProduct = (id) => {
    const promise = new Promise ((resolve) => {
        const results = products.find ((product) => product.id === parseInt(id))
        setTimeout (() => {
            return resolve(results);
        }, 2000);
    })
    return promise;
};

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise ((resolve) => {
        const results = products.filter((product) => product.category === categoryId);
        setTimeout (() => {
            return resolve(results);
        }, 2000);
    })
    return promise;
};