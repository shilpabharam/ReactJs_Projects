
import FilterProductTable from './components/ProductBoard/FilterProductTable.jsx';
import KanbanBoard , {UseMemoExample} from './components/KanbanBoard/KanbanBoard.jsx';
import Memorization from './components/ReactCoding/Memorization.jsx';
import PasswordGenration from './components/ReactCoding/PasswordGenration.jsx';
import ControlledForm from './components/ControlledForm.jsx';
import {UncontrolledForm} from './components/ControlledForm.jsx';
import CardBoard from './components/CardBoard.jsx';
import FileStructure from './components/ReactCoding/FIleStructure.jsx'
import {ToDotask} from './components/ToDotask.jsx'
import "./App.css"; 

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];



const TaskList ={
  todo: [{ id: 1, title: "Task A" }, { id:21, title: "Task A" }],
  progress: [{ id: 2, title: "Task B" }],
  done: [{ id: 3, title: "Task C" }]
};

export default function App() {
  return (
    <div className="App">
      {/*<FilterProductTable products={PRODUCTS}/>*/}
      <KanbanBoard ></KanbanBoard>
      {/*<Memorization></Memorization>*/}

      {/*<CardBoard ></CardBoard>*/}
      {/*{<ToDotask>  </ToDotask>}*/}

      {/*{<ControlledForm></ControlledForm>}*/}
      {/*{"Uncontrolled Component"}*/}
      {/*{<UncontrolledForm></UncontrolledForm>}*/}
      {/*<FileStructure></FileStructure>*/}
    </div>
  );
}



