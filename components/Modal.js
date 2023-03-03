import React from "react";
import { useEffect, useState } from "react";

export default function Modal({ setShowModal, event, handleTodoUpdate }) {
  const [imgTemp, setImgTemp] = useState("");

  const loadFile = (event) => {
    if (event.target.files) {
      setImgTemp(URL.createObjectURL(event.target.files[0]));
    }
  };

  useEffect(() => {
    if (event.file) setImgTemp(event.file);
  }, []);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl bg-bgcolorColor">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
            <form
              className="flex flex-col gap-5 items-left mt-4 w-full p-5"
              onSubmit={(e) => {
                e.preventDefault();
                let updatedEvent = event;
                updatedEvent.title = e.target.elements.title.value;
                updatedEvent.services = e.target.elements.services.value;
                updatedEvent.file = imgTemp;
                handleTodoUpdate(updatedEvent);
                e.target.reset();
                setShowModal(false);
              }}
            >
              <div className="w-full flex justify-end">
                <h2 className="font-bold text-xl text-headerColor mb-5 mr-2">
                  Update Event
                </h2>
              </div>
              <div className="flex justify-center items-center gap-2">
                <h4 className="text-subjectColor">Event:</h4>
                <input
                  type="text"
                  name="title"
                  className="flex-1 border-gray-300 rounded-md p-1 px-2"
                  defaultValue={event.title}
                  required
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <h4 className="text-subjectColor">Services:</h4>
                <input
                  type="text"
                  name="services"
                  className="flex-1 border-gray-300 rounded-md p-1 px-2"
                  defaultValue={event.services}
                  required
                />
              </div>
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={loadFile}
                className="flex-1 border-gray-300 rounded"
              />
              {imgTemp && (
                <img src={imgTemp} id="output" width="200" alt="Image" />
              )}
              <div className="flex justify-end mt-5">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-2 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="text-white uppercase text-sm px-2 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
