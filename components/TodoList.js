import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import Modal from "components/Modal";

function TodoList({ todos, onDelete, selectedDate, handleTodoUpdate }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between py-1">
          {selectedDate.getDate() === todo.datetime.getDate() &&
            selectedDate.getMonth() === todo.datetime.getMonth() && (
              <>
                <div
                  className="font-serif"
                  onClick={() => {
                    setShowModal(!showModal);
                    setSelectedEvent(todo);
                  }}
                >
                  {todo.datetime.getHours()}:{todo.datetime.getMinutes()}
                  {` - `}
                  {todo.title}
                </div>
                <button
                  className="flex items-center justify-center text-red-500"
                  onClick={() => onDelete(todo.id)}
                >
                  <FiTrash2 />
                </button>
              </>
            )}
        </li>
      ))}
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          event={selectedEvent}
          handleTodoUpdate={handleTodoUpdate}
        />
      )}
    </ul>
  );
}

export default TodoList;
