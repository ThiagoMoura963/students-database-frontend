import Banner from "./components/Banner";
import FormStudent from "./components/FormStudent";
import Footer from "./components/Footer";
import { useState } from "react";
import { v4 as id } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormCourse from "./components/FormCourse";
import Registers from "./pages/Registers";

function App() {

  const [registers, setRegisters] = useState([]);

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

    toast.success("O registo foi deletado com sucesso!");
  }

  const handleChangeColorCard = (color, id) => {
    setCourses(courses.map(item => {
      if (item.id === id) {
        item.color = color;
      }

      return item;
    }));
  }

  const addCourse = (newCourse) => {
    setCourses([...courses, { ...newCourse, id: id() }])

    toast.success(`O curso ${newCourse.course} foi criado com sucesso!`);
  }

  const handleFavoriteRegister = (registerId) => {
    setRegisters(registers.map(register => {
      if (register.registerId === registerId) {
        register.favorite = !register.favorite;
      }

      return register;
    })
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Banner />

        <Routes>
          <Route 
            path="/"
            element={
              <FormStudent
                addCourse={addCourse}
                onRegister={(register) => handleAddRegister(register)}
                courses={courses.map(item => item.course)}
              />
            }
          />
          <Route 
            path="/cursos"
            element={
              <FormCourse 
                addCourse={addCourse}
              />
            }
          />
          <Route 
            path="/registros"
            element={
              <Registers 
                courses={courses}
                handleDeleteRegister={handleDeleteRegister}
                registers={registers}
                handleChangeColorCard={handleChangeColorCard}
                handleFavoriteRegister={handleFavoriteRegister}
              />
            }
          />
        </Routes>
        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_RIGHT} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;