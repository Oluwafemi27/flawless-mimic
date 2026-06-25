import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <div style={{
    minHeight:'100vh', display:'flex', flexDirection:'column',
    alignItems:'center', justifyContent:'center',
    background:'#0a0a0a', color:'#fff',
    fontFamily:'Arial,sans-serif', textAlign:'center', padding:'2rem'
  }}>
    <h1 style={{fontSize:'clamp(2.5rem,8vw,5rem)',fontWeight:800,marginBottom:'1rem'}}>
      Reply DM
    </h1>
    <p style={{fontSize:'1.2rem',color:'#aaa'}}>
      Send us a direct message to get started.
    </p>
  </div>
)
