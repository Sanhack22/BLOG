import { useState } from "react"

import { Header } from "./Components/Header/Header"
import { Main } from "./Components/Main/Main"
import { NewPrimary } from "./Components/NewPrimary/NewPrimary"
import { Home } from "./Components/Pages/Home/Home"
import { Section } from "./Components/Section/Section"
import { TargetNew } from "./Components/TargetNew/TargetNew"
import { News } from "./Scripts/Index"
import {Carousel} from "./Components/Carousel/Carousel"




function App() {
  const numeroAleatorio = Math.floor(Math.random() * News.length);
  const [newBig, setNewBig] = useState(News[numeroAleatorio])
  const slides = [
    'https://www.lanacion.com.ar/resizer/v2/18042024-los-nuevos-satelites-spainsat-ng-i-y-ii-43EBJUEYDBHWLGCEMFTN4N4K44.jpg?auth=5ee2e12c8a5566c85e29d1c8632c13b9e2c716d7fbf33dae146ff080a0fb6469&width=880&height=586&quality=70&smart=true',
    'https://estaticos-cdn.prensaiberica.es/clip/7507cbf0-816e-434b-8b08-b0406975b241_16-9-discover-aspect-ratio_default_0.webp',
    'https://estaticos-cdn.prensaiberica.es/clip/a43a92a1-6170-45bc-b1c4-c758bc56df7d_16-9-discover-aspect-ratio_default_0.webp'
  ]

  return (
    <>
      <Home>
        <Header/>
        <Main >
        

           <Section>
              <NewPrimary 
              key={newBig.id}
              date={newBig.date}
              image={newBig.image}
              description={newBig.description}
              
              />
            
            
            
              
           
          </Section>
          <Section>
          {
            News.map(x=>
              <TargetNew
              key={x.id}
              date={x.date}
              image={x.image}
              description={x.description}
              onClick={() => setNewBig(x)}              
              />             
            )
          }
          </Section>
        </Main>     
        <hr className="bg-blue-700 h-1"/>
        <div className="mt-6 mb-6 flex justify-center items-center h-88 ">
      <div className="max-w-lg">
        <Carousel autoSlide={true} >
          {[...slides.map((s) => (
            <img src={s} />
          ))]}
        </Carousel>

      </div>
    </div>
      </Home>
    </>
  )
}

export default App
