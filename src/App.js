import Banner from "./components/Banner";
import Form from "./components/Form";
import Courses from "./components/Courses";
import { useState } from "react";

function App() {

  const[registers, setRegisters] = useState([]);

  const handleAddRegister = (register) => {
    setRegisters([...registers, register]);
  }

  const courses = [
    {
      course: "Análise e Desenvolvimento de Sistemas",
      primaryColor: "#57C278",
      secundaryColor: "#D9F7E9"
    },
    {
      course: "Sistemas para Internet",
      primaryColor: "#82CFFA",
      secundaryColor: "#E8F8FF"
    },
    {
      course: "Recursos Humanos",
      primaryColor: "#A6D157",
      secundaryColor: "#F0F8E2"
    },
    {
      course: "Psicologia",
      primaryColor: "#E06B69",
      secundaryColor: "#FDE7E8"
    },
    {
      course: "Logística",
      primaryColor: "#DB6EBF",
      secundaryColor: "#FAE9F5"
    },
    {
      course: "Administração",
      primaryColor: "#FFBA05",
      secundaryColor: "#FFF5D9"
    },
    {
      course: "Gestão Portuária",
      primaryColor: "#FF8A29",
      secundaryColor: "#FFEEDF"
    },
  ]

  console.log(registers);
  
  return (
    <div className="App">
      <Banner />
      <Form 
        onRegister={(register) => handleAddRegister(register)}
        courses={courses.map(item => item.course)}
      />
    {courses.map(item => 
      <Courses 
        key={item.course}
        courses={item.course}
        primaryColor={item.primaryColor}
        secundaryColor={item.secundaryColor}
        registers={registers.filter(register => register.course === item.course)}
      />
    )}
    </div>
  );
}

export default App;
