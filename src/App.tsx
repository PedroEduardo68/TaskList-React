import { useState } from 'react';
import * as C from './App.styles'
import { Item } from './types/item'
import { ListItem } from "./components/ListItem/index"
import { AddArea } from "./components/AddArea/index"



function App() {
  const [list, setlist] = useState<Item[]>([
    { id: 1, name: 'compara pao', done: false },
    { id: 2, name: 'compara refri', done: true },
  ]);


  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setlist(newList);
  }

  // Função feita para tarefinha de casa.
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setlist(newList);
  }



  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />



        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;