import Header from "./comps/header/Header.tsx"
import CardProfile from "./comps/ProfileCard/ProfileCard.tsx"
import Footer from "./comps/Footer/Footer.tsx"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <div className="continer_cards">
      <CardProfile
        name = "AAAAA"
        imageUrl="src\assets\react.svg"
        description="Full-Stack Developer with a passion for clean code."
        buttonType="Student"
      />
       <CardProfile
        name = "BBBBBB"
        imageUrl="src\assets\react.svg"
        description="Full-Stack Developer with a passion for clean code."
        buttonType="Teacher"
      />
       <CardProfile
        name = "ariel ben pazi"
        imageUrl="src\assets\react.svg"
        description="Full-Stack Developer with a passion for clean code."
        buttonType="friend"
      />
      </div>
      <Footer/>
    </div>
  )
}
//rfc