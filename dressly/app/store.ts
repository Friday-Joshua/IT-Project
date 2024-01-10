export interface Product {
    pid:string,
    price:number,
    label:string,
    rate:number,
    isFavourite:boolean,
    desc:string,
    tags:string[],
    inStore:boolean,
    src:string
}

const products:Product[] = [
    {pid:"XG73JD", src:'/image1.png',label:'Flower Sundress',price:15000,rate:3.5,isFavourite:false,tags:['sundress'],inStore:true,desc:"Imagine a garment so ethereal that even the sunlight yearns to dance upon its fabric, a sundress that embodies the very essence of summer itself. Its flowing skirt, kissed by a thousand sunbeams, twirls and sways as if orchestrating a symphony of joyous hues. The bodice, a masterpiece of design, effortlessly complements the wearer's silhouette, invoking a sense of timeless grace and elegance. Adorned with colors that rival a painter's palette and patterns that echo the whispers of a gentle breeze, this sundress is not merely an article of clothing; it's a radiant proclamation of carefree bliss and everlasting beauty."
    },
    {pid:"92JCEX",
    src:'/image2.png',label:'Whispering Breeze Dress',
    price:12000,
    rate:4.5,
    isFavourite:false,
    tags:['sundress'],
    inStore:true,
    desc:"A casual dress so light and airy that it seems to float effortlessly on a zephyr's breath. Its fabric, woven from the laughter of woodland nymphs and the dreams of stargazers, drapes the wearer in an embrace that feels like a gentle, everlasting caress of comfort and style."
    },
    // **************
    {pid:"DXK93S",
    src:'/image3.png',label:'Effortless Elegance Ensemble',
    price:8000,
    rate:4.0,
    isFavourite:false,
    tags:['casual dresses'],
    inStore:true,
    desc:"Imagine a casual dress that effortlessly captures the essence of a carefree yet impeccably chic lifestyle. Its threads, spun from the very essence of relaxed sophistication, cocoon the wearer in an aura of understated allure, making every step a statement of grace and ease."
    },    
    // **************
    {pid:"II64hs",
    src:'/image4.png',label:'Starlit Symphony Gown:',
    price:9000,
    rate:4.5,
    isFavourite:false,
    tags:['formal dresses'],
    inStore:true,
    desc:"A formal dress that commands attention like a symphony of stars in the midnight sky. Its fabric, woven with strands of moonlight and elegance, drapes the wearer in an ethereal embrace that whispers tales of grandeur and sophistication."
    },
    // **************
    {pid:"jdhF86",
    src:'/image5.png',label:'Regal Radiance Regalia',
    price:5000,
    rate:4.5,
    isFavourite:false,
    tags:['formal dresses'],
    inStore:false,
    desc:"Behold a formal dress fit for royalty, crafted with threads spun from the finest silks of opulence and adorned with jewels that rival the sparkle of a thousand galaxies. Wearing this gown is akin to donning a majestic mantle, exuding an aura of regal poise and breathtaking magnificence."
    },
    // **************
    {pid:"9gw6RD",
    src:'/image6.png',label:'Celestial Cascade Gown',
    price:11000,
    rate:3.0,
    isFavourite:false,
    tags:['maxi dress'],
    inStore:true,
    desc:"A maxi8 dress that seems to cascade like a celestial waterfall, its fabric woven from the dreams of moonbeams and the whispers of ancient goddesses. Enveloping the wearer in a cosmic embrace, it trails behind in a mesmerizing symphony of elegance and allure."
    },
    // **************
    {pid:"BG65dx",
    src:'/image7.png',label:'Enchanting Elegance Ensemble',
    price:9000,
    rate:3.5,
    isFavourite:false,
    tags:['maxi dresses'],
    inStore:true,
    desc:"A maxi dress that embodies the epitome of enchantment, its threads spun from the very essence of fairy tales and woven into a tapestry of breathtaking sophistication. With each step, it conjures an aura of enchanting grace and unparalleled glamour."
    },
    // **************
    {pid:"KI96ds",
    src:'/image8.png',label:'Whimsical Whirlwind Dress',
    price:12000,
    rate:4.5,
    isFavourite:false,
    tags:['midi dresses'],
    inStore:true,
    desc:"The midi dress that dances with the whims of a swirling breeze, its fabric imbued with the essence of playful sprites and the laughter of springtime. Wearing it is like stepping into a whirlwind of charm and delightful elegance."
    },
    // **************
    {pid:"GHtt6",
    src:'/image9.png',label:' Mystic Meridian Frock',
    price:13000,
    rate:4.0,
    isFavourite:false,
    tags:['midi dress'],
    inStore:true,
    desc:"A midi dress that follows the mystical paths of celestial meridians, crafted from threads that shimmer with the ethereal glow of forgotten constellations. Its allure lies in its ability to evoke an air of enigmatic grace and timeless beauty."
    },
    // **************
    {pid:"ui54d",
    src:'/image10.png',label:'Radiant Revelry Raiment',
    price:15000,
    rate:3.5,
    isFavourite:false,
    tags:['mini dresses'],
    inStore:false,
    desc:"A mini dress that radiates with the exuberance of a joyous celebration, its fabric woven from the echoes of laughter and the effervescence of pure delight. It wraps the wearer in a cloak of vivacious charm and youthful exuberance."
    },
    // **************
    {pid:"oP08gR",
    src:'/image11.png',label:'Effervescent Euphoria Ensemble',
    price:13800,
    rate:4.0,
    isFavourite:false,
    tags:['mini dresses'],
    inStore:true,
    desc:"This mini dress is a celebration of sheer jubilation, its threads intertwined with the essence of everlasting happiness and spun into a fabric that sparkles like the effervescent bubbles of champagne. Donning this dress is like embodying a perpetual festival of style and vivacity."
    },
    // **************
    {pid:"ouiG65D",
    src:'/image12.png',label:'Whispering Willow Wrap',
    price:10000,
    rate:4.0,
    isFavourite:false,
    tags:['wrap dresses'],
    inStore:true,
    desc:"A midi dress that follows the mystical paths of celestial meridians, crafted from threads that shimmer with the ethereal glow of forgotten constellations. Its allure lies in its ability to evoke an air of enigmatic grace and timeless beauty."
    },
    // **************
    {pid:"hj6s6",
    src:'/image13.png',label:'Enigmatic Embrace Ensemble',
    price:10500,
    rate:4.0,
    isFavourite:false,
    tags:['wrap dresses'],
    inStore:true,
    desc:"A wrap dress that seems to possess the mystical ability to cocoon the wearer in an enigmatic embrace, its threads woven from the elusive essence of serenity and sophistication. Wearing it is akin to being swathed in a mystical aura of captivating allure."
    },
    // **************
    {pid:"oTTR54",
    src:'/image14.png',label:'Cosmic Cascade Couture',
    price:8500,
    rate:3.5,
    isFavourite:false,
    tags:['shift dresses'],
    inStore:true,
    desc:"A shift dress that cascades like cosmic stardust, its fabric woven from threads that hold the mysteries of distant galaxies. It envelopes the wearer in an otherworldly allure, evoking the sensation of donning a celestial garment that exudes both grace and wonder."
    },
    // **************
    {pid:"pO6g76G",
    src:'/image17.png',label:'Timeless Tranquility Tunic',
    price:12500,
    rate:3.5,
    isFavourite:false,
    tags:['shift dresses'],
    inStore:true,
    desc:"A shift dress that embodies the essence of timeless tranquility, its fabric a serene reflection of gentle streams and whispered lullabies. It bestows upon the wearer an air of understated elegance and serene poise."
    },
    // **************
    {pid:"09Bvfd",
    src:'/image16.png',label:'Siren"s Silhouette Stunner',
    price:11000,
    rate:4.0,
    isFavourite:false,
    tags:['bodycon dresses'],
    inStore:true,
    desc:"A bodycon dress that seems sculpted by the mythical sirens themselves, its fabric a symphony of allure and mystique. Wearing it, the wearer embodies a mesmerizing silhouette that captivates with every graceful movement."
    },
]


class Cart{
    items:Product[] = [];
    
    addToCart(product:Product) {
        try{
            this.items = [...this.items,...[product]];
            return true
        }catch(e) {
            return false
        }
    }

    removeFromCart(pid:string) {
        this.items = this.items.filter(product=> {
            return product.pid !== pid;
        });
        // checking if product was successfully deleted
        const isRemoved = this.items.findIndex(product=> {
            return product.pid = pid;
        });
        if(isRemoved === -1) {
            return true
        }else {
            return false
        }
    }
}

export default class Store {
    #items:Readonly<Product[]> = products;
    #cart:Cart = new Cart();

    getItems() {
        return this.#items;
    }

    getCart() {
        return this.#cart;
    }

    getStoreSize() {
        return this.#items.length;
    }
}