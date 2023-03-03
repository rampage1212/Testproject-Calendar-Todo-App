import { useState } from "react";
import { v4 as uuid } from "uuid";
import Calendar from "components/Calendar";
import TodoList from "components/TodoList";

const dummyData = [
  {
    id: uuid(),
    title: "Meeting with Jackson",
    services: "Meeting Service",
    datetime: new Date(),
  },
  {
    id: uuid(),
    title: "Start working",
    services: "Working Service",
    datetime: new Date(),
  },
];

function HomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todos, setTodos] = useState(dummyData);
  const [imgTemp, setImgTemp] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTodoAdd = (title, services, file) => {
    const datetime = selectedDate;
    setTodos([...todos, { id: uuid(), title, services, file, datetime }]);
  };

  const handleTodoUpdate = (event) => {
    todos.map((todo) => {
      if (todo.id === event.id) todo = event;
      return todo;
    });
  };

  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const loadFile = (event) => {
    if (event.target.files) {
      setImgTemp(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="container w-[700px] h-[700px] mx-auto mt-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-bgcolorColor p-4 text-contentColor">
      <h1 className="text-2xl font-bold mb-4 text-headerColor">
        Calendar Todo App
      </h1>
      <div className="font-mono">
        <div className="flex flex-row">
          <div className="w-full">
            <h2 className="mb-4 font-medium text-lg text-subjectColor">
              Calendar
            </h2>
            <Calendar selectedDate={selectedDate} onChange={handleDateChange} />
          </div>
          <div className="w-full pl-4">
            <h2 className="mb-4 font-medium text-lg text-subjectColor">
              Todo List
            </h2>
            <TodoList
              todos={todos}
              selectedDate={selectedDate}
              onDelete={handleTodoDelete}
              handleTodoUpdate={handleTodoUpdate}
            />
          </div>
        </div>
        <form
          className="flex flex-col gap-3 items-left mt-4 w-[50%]"
          onSubmit={(event) => {
            event.preventDefault();
            const title = event.target.elements.title.value;
            const services = event.target.elements.services.value;
            const file = imgTemp;
            handleTodoAdd(title, services, file);
            setImgTemp("");
            event.target.reset();
          }}
        >
          <input
            type="text"
            name="title"
            className="flex-1 border-gray-300 rounded-md p-1 px-2"
            placeholder="Add a New Event"
            required
          />
          <input
            type="text"
            name="services"
            className="flex-1 border-gray-300 rounded-md p-1 px-2"
            placeholder="Add Services"
            required
          />
          <input
            type="file"
            name="file"
            accept="image/*"
            className="flex-1 border-gray-300 rounded"
            onChange={loadFile}
          />
          <div className="flex justify-between">
            {imgTemp && (
              <img src={imgTemp} id="output" width="200" alt="Image" />
            )}
            <button type="submit" className="w-full">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
