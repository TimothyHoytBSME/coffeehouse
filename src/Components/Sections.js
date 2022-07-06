import IMG1 from './Images/coffee1.webp';
import IMG2 from './Images/coffee2.webp';
import IMG3 from './Images/coffee3.webp';
import IMG4 from './Images/coffee4.webp';
import IMG5 from './Images/coffee5.webp';
import IMG6 from './Images/coffee6.webp';
import IMG7 from './Images/coffee7.webp';
import IMG8 from './Images/coffee8.webp';
import IMG9 from './Images/coffee9.webp';
import IMG10 from './Images/coffee10.webp';
import IMG11 from './Images/coffee11.webp';
import IMG12 from './Images/coffee12.webp';
import IMG13 from './Images/coffee13.webp';
import IMG14 from './Images/coffee14.webp';
import IMG15 from './Images/coffee15.webp';
import IMG16 from './Images/coffee16.webp';
import IMG18 from './Images/coffee18.webp';
import IMG19 from './Images/coffee19.webp';
import IMG20 from './Images/coffee20.webp';
import IMG21 from './Images/coffee21.webp';
import IMG22 from './Images/coffee22.webp';
const IMGARR = [
    IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10, IMG11, IMG12, IMG13, IMG14, IMG15, IMG16, IMG18, IMG19, IMG20, IMG21, IMG22
];

var nextkey = 0;
function getkey(){
    nextkey++;
    console.log('new key', (nextkey-1))
    return nextkey-1;
}

export default function Sections({javaRef}){
    return(
        <>
            {Section(javaRef)}
        </>
    )
}


function Section(javaRef){
    return(
        <>
            <div className="section">
                <div className="section-scroll-container section-scroll-container-left">
                    {sectionImgGroup([0,4,1,2,3,6,7])}
                </div>
                <div className="section-content-container section-content-container-right glass">
                    <Menu javaRef={javaRef}></Menu>
                </div>
            </div>
            <div className="section">
                <div className="section-scroll-container ">
                    {sectionImgGroup([0,4,1,2,3,6,7])}
                </div>
                <div className="section-content-container glass">
                    <Menu javaRef={javaRef}></Menu>
                </div>
            </div>
        </>
    );
}

function sectionImgGroup(indexes){
    const imgs = [];
    for(var i=0; i<indexes.length; i++){
        imgs.push(IMGARR[indexes[i]]);
    }
    const imgGrid = imgs.map((el,i)=>{
        return(
            <div className='section-image-div' key={getkey()}>
                <img alt='product' src={el} className='section-image' key={getkey()}></img>
            </div>
        )
    })
    return [...imgGrid, ...imgGrid, ...imgGrid, ...imgGrid];
}

function Menu({javaRef}){
    return(
        <>
            <div className='section-title' ref={javaRef} >JAVA</div>
            <div className='section-description'>We serve the finest varieties of hot and cold coffees, all made to order from fresh roasted beans.</div>
            <div className='section-list'>
               {coffeeTypes.map((el)=>{
                    return(
                        <div className='section-item' key={getkey()}>
                            <div className='section-item-name'>{el.name}</div>
                            <div className='section-item-desc'>{el.desc}</div>
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
    ,{name: 'SHAKES', desc: 'Classic ice-cream shakes made from a range of flavors and add-ins.'}
    ,{name: 'TEAS', desc: 'Black, green, white, floral, herbal, hot, cold, bubble? We have it all.'}
    ,{name: 'COCKTAILS', desc: 'We may not have alcohol, but we have a world-class bar, equipped with everything needed to make the best virgin drinks.'}
    ,{name: 'CARBONATED', desc: 'Sorry, we do not serve branded soft drinks. However, we make a variety of italian sodas and seltzers.'}
    ,{name: 'JUICES', desc: 'We stock an amazing array of fruits and vegetables, and we can juice them all.'}
]

