import Banner from "./components/Banner";
import Form from "./components/Form";
import Courses from "./components/Courses";
import { useState } from "react";
import { v4 as id } from 'uuid';

function App() {

  const[registers, setRegisters] = useState([]);

  const handleAddRegister = (register) => {
    setRegisters([...registers, register]);
  }

  const [courses, setCourses] = useState([
    {  
      id: id(),
      course: "Análise e Desenvolvimento de Sistemas",
      color: "#D9F7E9"
    },
    {  
      id: id(),
      course: "Sistemas para Internet",
      color: "#E8F8FF"
    },
    {  
      id: id(),
      course: "Recursos Humanos",
      color: "#F0F8E2"
    },
    {  
      id: id(),
      course: "Psicologia",
      color: "#FDE7E8"
    },
    {  
      id: id(),
      course: "Logística",
      color: "#FAE9F5"
    },
    {  
      id: id(),
      course: "Administração",
      color: "#FFF5D9"
    },
    {
      id: id(),
      course: "Gestão Portuária",
      color: "#FFEEDF"
    },
  ]);

  const handleDeleteRegister = () => {
    console.log("Deletando registro!");
  }

  const handleChangeColorCard = (color, id) => {
    setCourses(courses.map(item => {
      if(item.id === id) {
        item.color = color;
      }
  
      return item;  
    }));
  }
  
  
  return (
    <div className="App">
      <Banner />
      <Form 
        onRegister={(register) => handleAddRegister(register)}
        courses={courses.map(item => item.course)}
      />
    {courses.map((item, index) => 
      <Courses 
        key={index}
        courses={item.course}
        id={item.id}
        color={item.color}
        registers={registers.filter(register => register.course === item.course)}
        onDelete={handleDeleteRegister}
        onChangeColor={handleChangeColorCard}
      />
    )}
    </div>
  );
}

export default App;
