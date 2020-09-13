import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR2Awht65qFuSm8A7H8YJfehUbMiqupVBdU71SzIPLG4MdeoOYbMgvJrSHE"/>
                <div className="home__row">
                    <Product id="12321341" title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWK7QjVSjP9vhw4uXjrFw4nRFy9szVsiFQQu31UfQ3Ka7M7EGBknJNDHfYH8iKXvBAHpkaxLo&usqp=CAc" price={14.99} rating={5}/>
                    <Product id="49538094" title= 'Ghost of Tsushima (PS4)' image="https://m.media-amazon.com/images/I/81jyRkf9qjL._AC_UY218_.jpg" price={59.99} rating={5}/>
                </div>

                <div className="home__row">
                    <Product id="4903850" title= 'VEIKK A15 Graphics Tablet 10x6 Inch Drawing Tablet Pen Table Digital Pen Tablet with Battery-Free Passive Stylus and 12 Shortcut Keys，20 Nibs and 1 Artist Glove (8192 Levels Pressure) (Gray)' image="https://m.media-amazon.com/images/I/61ovFB0NPFL._AC_UY218_.jpg" price={69.99} rating={4}/>
                    <Product id="5151646" title= 'OnePlus 7T HD1907, 8GB RAM + 128GB Memory, GSM 4G LTE Factory Unlocked for AT&T T-Mobile, Single Sim, US Model (Glacier Blue)' image="https://m.media-amazon.com/images/I/71ncRs6HzyL._AC_UY218_.jpg" price={449.99} rating={4}/>
                    <Product id="9866512" title= 'Stand Mixer, Cusimax 5-Quart 800W Dough Mixer, Tilt-Head Electric Mixer with Stainless Steel Bowl, Dough Hook, Mixing Beater and Whisk, CMKM-150, Black' image="https://m.media-amazon.com/images/I/61WmR1B0gfL._AC_UY218_.jpg" price={114.59} rating={4}/>
                </div>

                <div className="home__row">
                    <Product id="3697656" title= 'ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD, Intel i5-1035G1 CPU, 8GB RAM, 512GB SSD, Backlit KB, Fingerprint, Windows 10, Slate Gray, F512JA-AS54' image="https://m.media-amazon.com/images/I/81fstJkUlaL._AC_UY218_.jpg" price={599.99} rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
