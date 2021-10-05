import { useState, KeyboardEvent } from "react";
import * as C from "./styled";

type Props = {
  onEnter: (taskName: string) => void
}


export function AddArea({ onEnter }: Props) {

  const [inputText, setInputText] = useState("");
  const handleKeyUP = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText)
      setInputText("");
    }

  }


  return (
    <C.Container>
      <div className="image">➕</div>
      <input type="text"
        placeholder="Adiciona uma Tarefa"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUP}
      />
    </C.Container>
  );
}