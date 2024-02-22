import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
import './Todo.css'
import { useState } from 'react';
import DateObject from "react-date-object";
import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';

function Todo() {
    const [toDos, setToDos] = useState([])
    const [toDo, setToDo] = useState('')
    var date = new DateObject();

             
    const handleAddTodo = () => {
        if(toDo.trim()===""){
            
            alert("Enter some Task")
        return;
    }

    setToDos([...toDos, { id: Date.now(), text: toDo,status:false}]);
    setToDo("");
} 

console.log(date.format());
    return (
        <div className="app">
            <div className="mainHeading">
                <h1>ToDo List</h1>
              
            </div>
            <div className="subHeading">
                <br />
                <h2>Yeahh..!!, it's {date.format('dddd')} 👋 😊 </h2>
                <h2>{date.format(" DD MMMM YYYY  ")}</h2>
                
            </div>
            <div className="input">
                <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
                {/* <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i> */}

                <i onClick={handleAddTodo}  className="fas fa-plus"></i>

            </div>


            <div className="todos">
                {toDos.map((obj) => {
                    return (<div className="todo">
                        <div className="left">
                            <input onChange={(e) => {
                                console.log(e.target.value);
                                console.log(obj);

                            }} value={obj.status} type="checkbox" name="" id="" />
                            <p>{obj.text}</p>
                            
                        </div>

                        <div >
                            <div className="right">
                                <i onClick={(e) => {
                                    setToDos(toDos.filter(obj2 => {

                                    
                                        let temp;
                                        if (obj2.id !== obj.id) {
                                            temp = obj2
                                        }
                                        return temp;
                                    }));
                                }} className="fa-solid fa-trash"></i>
                            </div>

                        </div>
                    </div>)
                })}
                { }
            </div>
        </div>
    );
}

export default Todo