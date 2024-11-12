import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
        <Todo 
        title="Reach Diamond Cart Status"
        paragraph="complete 15 more orders to unlock"
        />
        <Todo 
        title="Make more money, study more" 
        paragraph="complete 15 more orders to unlock"
        />
        <Todo 
        title="Win FES Skool" 
        paragraph="complete 15 more orders to unlock"
        />
        <Modal confirmation="Confirm Delete?" />
        {/* <Modal confirmation=" Maybe Confirm? " /> */}
        {/* <Modal confirmation="Confirm Acceptance of Terms?" /> */}
        </div>
    </div>
  );
}  

export default App;
