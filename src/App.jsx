import { useState } from 'react'
import  posts from './posts.json'
import './App.css'
import Cards from './Components/Cards';

function App() {
  const [arr, setArr] = useState(posts);

  function delCard(id){
    const copyArr = [...arr];
    const resultArr= copyArr.filter((item)=>item.id != id);
    setArr(resultArr);
  }
  function addPost(){
    const copyArr = [...arr];
    const obj = {
        "userId": 0,
        "id": 0,
        "title": "aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    copyArr.unshift(obj);
    console.log(copyArr);
  }
  function start(id) {
    <Cards id = {id}/>
  }

  return (
    <>
    <div>
      <button onClick={()=>addPost() && start(0)}>add post</button>
      {arr.map((item,index)=>(
        <Cards object={item} delCard={delCard} key={index}/>
      ))}
    </div>
    </>
  );
}

export default App
