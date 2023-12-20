import Banner from "./components/Banner";
import Form from "./components/Form";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
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
      color: "#57C278"
    },
    {  
      id: id(),
      course: "Sistemas para Internet",
      color: "#82CFFA"
    },
    {  
      id: id(),
      course: "Recursos Humanos",
      color: "#A6D157"
    },
    {  
      id: id(),
      course: "Psicologia",
      color: "#E06B69"
    },
    {  
      id: id(),
      course: "Logística",
      color: "#DB6EBF"
    },
    {  
      id: id(),
      course: "Administração",
      color: "#FFBA05"
    },
    {
      id: id(),
      course: "Gestão Portuária",
      color: "#FF8A29"
    },
  ]);

  const handleDeleteRegister = (registerId) => {
    setRegisters(registers.filter(register => register.registerId !== registerId));
  }

  const handleChangeColorCard = (color, id) => {
    setCourses(courses.map(item => {
      if(item.id === id) {
        item.color = color;
      } 
  
      return item;  
    }));

    console.log(registers);
  }

  const addCourse = (newCourse) => {
    setCourses([ ...courses, { ...newCourse, id: id() }])
  }
  
  return (
    <div className="App">
      <Banner />
      <Form 
        addCourse={addCourse}
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
      <Footer />
    </div>
  );
}

export default App;