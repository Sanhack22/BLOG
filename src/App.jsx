import { Header } from "./Components/Header/Header"
import { Main } from "./Components/Main/Main"
import { NewPrimary } from "./Components/NewPrimary/NewPrimary"
import { Home } from "./Components/Pages/Home/Home"
import { Section } from "./Components/Section/Section"
import { TargetNew } from "./Components/TargetNew/TargetNew"
import { News,NewActu,NewActuality } from "./Scripts/Index"





function App() {
  return (
    <>
      <Home>
        <Header/>
        <Main>
          { <Section>
            {NewActuality.map(x=>
              <NewPrimary 
              key={x.id}
              date={x.date}
              image={x.image}
              description={x.description}
              onClick={NewActu(x)} 
              />
            )
            }
            
              
           
          </Section>}
          <Section>
          {
            News.map(x=>
              <TargetNew
              key={x.id}
              date={x.date}
              image={x.image}
              description={x.description}
              onClick={NewActu(x)}              
              />             
            )
          }
          </Section>
        </Main>      
      </Home>
    </>
  )
}

export default App
