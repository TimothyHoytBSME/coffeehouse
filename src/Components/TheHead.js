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
          <div className='number'>555· 642· JAVA (5282)</div>
          <div className='address'>
            <div className='address-street'>5837 Mocha Hills Blvd.</div>
            <div className='address-city'>Beans, CA 90233</div>
          </div>
        </div>
      </>
    )
  }
}