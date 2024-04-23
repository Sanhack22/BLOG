import { useState } from "react"
import { Carousel } from "./Components/Carousel/Carousel"
import { Header } from "./Components/Header/Header"
import { Main } from "./Components/Main/Main"
import { NewPrimary } from "./Components/NewPrimary/NewPrimary"
import { Home } from "./Components/Pages/Home/Home"
import { Section } from "./Components/Section/Section"
import { TargetNew } from "./Components/TargetNew/TargetNew"
import { News } from "./Scripts/Index"





function App() {
  const numeroAleatorio = Math.floor(Math.random() * News.length);
  const [newBig, setNewBig] = useState(News[numeroAleatorio])

  return (
    <>
      <Home>
        <Header/>
        <Main>
        

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
        <Carousel></Carousel>

      </Home>
    </>
  )
}

export default App
