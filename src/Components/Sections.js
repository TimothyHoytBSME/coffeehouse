import IMGARR, {SMALLIMGARR} from './ImageUrls.js'

var nextkey = 1000;
function getkey(){
    nextkey++;
    // console.log('new key', (nextkey-1))
    return nextkey-1;
}

export default function Sections({javaRef, drinksRef, foodRef, dessertRef}){
    return(
        <>
            <div className="section" ref={javaRef}>
                <div className="section-scroll-container section-scroll-container-left">
                    {sectionImgGroup("java")}
                </div>
                <div className="section-content-container section-content-container-right glass">
                    <JavaMenu></JavaMenu>
                </div>
            </div>
            <div className="section" ref={drinksRef}>
                <div className="section-scroll-container ">
                    {sectionImgGroup("drinks")}
                </div>
                <div className="section-content-container glass">
                    <DrinksMenu></DrinksMenu>
                </div>
            </div>
            <div className="section" ref={foodRef}>
                <div className="section-scroll-container section-scroll-container-left ">
                    {sectionImgGroup("food")}
                </div>
                <div className="section-content-container section-content-container-right glass">
                    <FoodMenu></FoodMenu>
                </div>
            </div>
            <div className="section" ref={dessertRef}>
                <div className="section-scroll-container">
                    {sectionImgGroup("dessert")}
                </div>
                <div className="section-content-container glass">
                    <DessertMenu ></DessertMenu>
                </div>
            </div>
        </>
    )
}


function sectionImgGroup(name){
    var which = 0;
    which=(name==="java")? 0: (name==="drinks")? 1: (name==="food")? 2: 3;  
    const imgs = IMGARR[which];
    const smallimgs =  SMALLIMGARR[which];
    const imgs2 = [...imgs, ...imgs, ...imgs, ...imgs, ...imgs, ...imgs, ...imgs, ...imgs];
    const smallimgs2 = [...smallimgs, ...smallimgs, ...smallimgs, ...smallimgs, ...smallimgs, ...smallimgs, ...smallimgs, ...smallimgs];
    function pick(){
        if(name === "java"){
            return("section-image-div java-slide");
        } else if(name === "drinks"){
            return("section-image-div drinks-slide");
        } else if(name === 'food'){
            return('section-image-div food-slide')
        } else if(name === 'dessert'){
            return('section-image-div dessert-slide')
        }
    }
    const imgGrid = imgs2.map((el,i)=>{
        return(
            <div className={pick()} key={getkey()}>
                <img 
                    alt='product' 
                    className='section-image' 
                    src={el} 
                    srcSet={`${smallimgs2[i]} 300w, ${el} 1337w`}                   
                    ></img>
            </div>
        )
    })
    return imgGrid;
}

function JavaMenu(){
    return(
        <>
            <div className='section-title' >JAVA</div>
            <div className='section-description'>We serve the finest varieties of hot and cold coffees, all made to order from fresh roasted beans.</div>
            <div className='section-list'>
               {coffeeTypes.map((el, i)=>{
                    return(
                        <div className='section-item' key={getkey()}>
                            <div className='section-item-name' >{el.name}</div>
                            <div className='section-item-desc' >{el.desc}</div>
                        </div>
                    )
               })}
            </div>
        </>
    )
}

function DrinksMenu(){
    return(
        <>
            <div className='section-title' >Other Drinks</div>
            <div className='section-description'>Not in the mood for coffee?</div>
            <div className='section-list'>
               {otherDrinkTypes.map((el, i)=>{
                    return(
                        <div className='section-item' key={getkey()}>
                            <div className='section-item-name' >{el.name}</div>
                            <div className='section-item-desc' >{el.desc}</div>
                        </div>
                    )
               })}
            </div>
        </>
    )
}

function FoodMenu(){
    return(
        <>
            <div className='section-title' >Food (Sandwiches and Salads)</div>
            <div className='section-description'>Create your perfect combination: cold, toasted, or panini grilled.</div>
            <div className='section-list'>
               {foodTypes.map((el, i)=>{
                    return(
                        <div className='section-item' key={getkey()}>
                            <div className='section-item-name' >{el.name}</div>
                            <div className='section-item-desc' >{el.desc}</div>
                        </div>
                    )
               })}
            </div>
        </>
    )
}

function DessertMenu(){
    return(
        <>
            <div className='section-title' >Desserts and Shakes</div>
            <div className='section-description'>From light to decadant, satisfy that sweet tooth with some special treats.</div>
            <div className='section-list'>
               {dessertTypes.map((el, i)=>{
                    return(
                        <div className='section-item' key={getkey()}>
                            <div className='section-item-name' >{el.name}</div>
                            <div className='section-item-desc' >{el.desc}</div>
                        </div>
                    )
               })}
            </div>
        </>
    )
}

const coffeeTypes = [
    { name: "AFFOGATO", desc: "Espresso poured on a vanilla ice cream. Served in a cappuccino cup."}
    , {name: 'AMERICANO', desc: 'Espresso with added hot water (100 to 150 ml). Often served in a cappuccino cup. (The espresso is added into the hot water rather than all the water being flowed through the coffee that would lead to over extraction.)'}
    , {name: 'CAFFÈ LATTE', desc: "A tall, mild 'milk coffee' (about 150-300 ml). An espresso with steamed milk and only a little milk foam poured over it. Serve in a latte glass or a coffee cup. Flavoured syrup can be added."}
    , {name: 'CAFFÈ MOCHA', desc: 'A caffè latte with chocolate and whipped cream, made by pouring about 2 cl of chocolate sauce into the glass, followed by an espresso shot and steamed milk.'}
    , {name: 'CAFÈ AU LAIT', desc: 'French morning coffee. Made by mixing dark roasted filter coffee (often prepared with French Press) and warm milk. Served in a bowl or a large coffee cup.'}
    , {name: 'CAPPUCCINO', desc: 'A coffee drink consisting of espresso and a milk foam mixture (drink size about 160 to240 ml). Served in a cappuccino cup.'}
    , {name: 'COLD BREW COFFEE', desc: 'Cold Brew Coffee is a smooth, cold beverage prepared by brewing freshly ground coffee in cold water. In the Cold Brew process, time makes up for heat.'}
    , {name: 'DOUBLE ESPRESSO (DOPPIO)', desc: 'Double portion of espresso in a cappuccino/espresso cup.'}
    , {name: 'DRIP BREW', desc: 'Classic drip-brewed coffee. Choose your roast, choose your strength.'}
    , {name: 'ESPRESSO', desc: 'A short, strong drink (about 30 ml) served in an espresso cup.'}
    , {name: 'ESPRESSO CON PANNA', desc: 'A shot of espresso topped with whipped cream. Served in an espresso cup.'}
    , {name: 'ESPRESSO MACCHIATO', desc: 'Espresso with a little milk foam (drink size about 50 ml). Served in an espresso cup.'}
    , {name: 'FLAT WHITE', desc: 'A coffee drink with a double espresso and lightly frosted milk (About 150 to240 ml). Served in a glass.'}
    , {name: 'FRAPPÉ', desc: 'Rich iced coffee made of espresso, milk and ice. Flavoured syrup can be added (about 300 ml). Mixed in a blender and served for example in a latte glass.'}
    , {name: 'ICED COFFEE', desc: 'Classic drip-brewed coffee, made strong, then poured over ice.'}
    , {name: 'ICED LATTE', desc: 'Ice, cold milk and an espresso in a latte glass (about 300 ml), often mixed with some sugar or flavoured syrup. Served in a latte glass.'}
    , {name: 'ICED MOCHA', desc: 'Cold Caffè mocha. Prepared like iced latte, but garnished and flavoured like caffè mocha (about 300 ml). Served in a latte glass.'}
    , {name: 'LATTE MACCHIATO', desc: 'Like a traditional caffè latte, but with a thicker layer of foam. Often made by pouring an espresso last into the milk (drink size about 300 ml). Served in a latte glass.'}
    , {name: 'LUNGO', desc: 'An espresso pulled long (50 to60 ml). Served in an espresso/cappuccino cup.'}
    , {name: 'POUR OVER', desc: 'A scientic approach to hand-brewed coffee, using precise temperatures, grinds, quantities, and timing to produce a cup like no other.'}
    , {name: 'RISTRETTO', desc: 'A very short shot of espresso (about 20 ml). Served in an espresso cup.'}
];

const otherDrinkTypes = [
    { name: "SMOOTHIES", desc: "Delicious, smooth, cold, and creamy. Choose your base (dairy, soy, coconut, almond, oat), choose your ingredients (fruits, powders, etc.), and enjoy!"}
    ,{name: 'TEAS', desc: 'Black, green, white, floral, herbal, hot, cold, bubble? We have it all.'}
    ,{name: 'COCKTAILS', desc: 'We may not have alcohol, but we have a world-class bar, equipped with everything needed to make the best virgin drinks.'}
    ,{name: 'CARBONATED', desc: 'Sorry, we do not serve branded soft drinks. However, we make a variety of italian sodas and seltzers.'}
    ,{name: 'JUICES', desc: 'We stock an amazing array of fruits and vegetables, and we can juice them all.'}
];

const foodTypes = [
    { name: 'BREADS', desc: 'Ciabatta, baguette, brioche, pita, rye, sourdough, wheat, focaccia, vienna roll, cheese roll, multigrain, seeded, spelt. Vegan options available.'}
    , {name: 'BAGELS', desc: 'Plain, everything, cinnamon raisin, blueberry, asiago, wheat. Vegan options available.'}
    , {name: 'CHEESES', desc: 'Swiss, fontina, provolone, manchego, cheddar, goat, pepper jack, muenster. Vegan options available.'}
    , {name: 'SPREADS', desc: 'Hummus (seasonal varieties, made fresh), mustard (brown, stone ground), avacado, house mayo (spicy or regular), cream cheeses (many), vegemite, pesto'}
    , {name: 'VEGGIES', desc: 'We have most types of lettuces, pickles, peppers, onions, as well as a variety of other seasonals.'}
    , {name: 'MEATS', desc: 'Ham, turkey, bacon, pancetta, prosciutto, peppered salami. Tofu based deli slices available. '}
    , {name: 'SALADS', desc: 'Choose your ingredients and toppings, many seasonal items available upon request.'}
];

const dessertTypes = [
    {name: 'SHAKES', desc: 'Classic ice-cream shakes made from a range of flavors and add-ins.'}
    ,{name: 'ICECREAM', desc: 'Ask for the seasonal menu! We always keep the basics, and source from a local creamery.'}
    ,{name: 'MUFFINS', desc: 'Bran, blueberry, cranberry orange, lemon, and some other rotating flavors. Locally baked daily.'}
    ,{name: 'PASTRIES', desc: 'Each day a variety of fresh pastries is selected and stocked from a local bakery.'}
    ,{name: 'PIE', desc: "Come see the viewing case for today's available flavors, made fresh locally."}
    ,{name: 'COOKIES', desc: 'Just like with our pastries and pies, always something new and delicious.'}
];
