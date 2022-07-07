import Logo from './Logo.js';

export default function TheHead({side}){
    return(
        <div className="head glass">
          {getSide(side)} 
          
        </div>
    )
}

function getSide(side){
  if(side==="left"){
    return(
      <>
        <div className='brand'>
          <div className="logo">
            <Logo></Logo>
          </div>
          <div className="name">Frothy Java Cafe</div>
        </div>
      </>
    )
  }else{
    return(
      <>
        <div className='info'>
          <a href="tel:5556425282"><div className='number'>555· 642· JAVA (5282)</div></a>
          <a href='https://goo.gl/maps/pbku7fjepfUb84kC9' target="_blank">
            <address className='address'>
              <div className='address-street'>5690 Cottle Rd</div>
              <div className='address-city'>San Jose, CA 95123</div>
            </address>
          </a>
        </div>
      </>
    )
  }
}