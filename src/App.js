
import { useState } from 'react';
import './App.css';

function App() {
  const [list,setList]=useState([]);
 const[b,setB]=useState("add");
  const [text,setText]=useState({
    message:"",
    id:""
  });
  function changetext(e){
    setText({
      ...text,
      message:e.target.value
    })
  }
  function addtext(){
    if(b=="edit"){
       const obj=list.find((each)=>{
        return each.id==text.id
       })
       if(!obj){
         const newtext={
      message:text.message,
      id: new Date().getTime().toString()
    }
    setB("add");
    setList([
      ...list,
      newtext
    ])
    setText({message:"",id:""});
    return;
       }
       obj.message=text.message
      setB("add");
      setText({
        message:"",
        id:""
      })
      return;
    }
    if(text.message===""){
      alert("add something to do");
      return;
    }
    const newtext={
      message:text.message,
      id: new Date().getTime().toString()
    }
    setList([
      ...list,
      newtext
    ])
    setText({message:"",id:""});
  }
  function filterit(id){
   const newlist=list.filter((ea)=>{
      return ea.id!=id;
    })
    setList(newlist);
  }
  function editit(data){
    setText({
       message:data.message,
       id:data.id
    }
    )
     setB("edit")
  }
  return (
    <div className="App">
      <div className='content'>
      <h1 className='head font-effect-outline'>To do List App</h1>
      <input type="text" value={text.message} onChange={changetext}/>
      <button className='btn' onClick={addtext}>{b}</button>
      {list.length==0 && <h1 className='font-effect-emboss' style={{textAlign:"center"}}>There is no to do {'\u{1F62C}'}</h1>}
      </div>
       {
        list.map((each)=>{
          return(<div key={each.id} className="small">
            <span>{each.message}</span>
            <button style={{color:"white",backgroundColor:"green"}} onClick={()=>{
              editit(each);
            }}>edit</button>
            <button style={{color:"white",backgroundColor:"red"}} onClick={()=>{
              filterit(each.id)
            }}>delete</button>
          </div>)
        })

       }
      
    </div>
  );
}

export default App;
