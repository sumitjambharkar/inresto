import React,{useState} from 'react';

const HomeSection = () => {
    const [print, setPrint] = useState([])
    const [product, setProduct] = useState({})
    const [tab, setTab] = useState([])
    const table = [{"name":"f1",id:1},{"name":"f2",id:2},{"name":"f3",id:3},{"name":"f4",id:4}]
    const dish = [{id:"1","name":"vadaPav","price":"20"},{id:"2","name":"SamosaPav","price":"120"}]
    const getTable = (id)=> {
        setTab(id)
    console.log(id);
    }
    const addProduct =(id,name,price)=>{
        setProduct({id,price,name})
    console.log(id,price,name);
    }
  return (
    <>
    <div style={{display:"flex",justifyContent: "space-between"}}>
    <h1>table
        <div>
           {table.map((ele)=>{
               return (
                   <>
                    <p onClick={()=>getTable(ele.id)}>{ele.name}</p>
                   </>
               )
           })}
        </div>
    </h1>
    <h1>prit</h1>
    </div>
    console.write(------------------------------------------------------------------------------------)
    <div style={{display:"flex",justifyContent: "space-between"}}>
    <h1>dish
        {dish.map((ele)=>{
            return (
                <>
                <div onClick={()=>addProduct(ele.id,ele.name,ele.price)}>
                <p>{ele.name}</p>
                <p>{ele.price}</p>
                </div>
                </>
            )
        })}
    </h1>
    <h1>prit</h1>
    <h3>{tab}</h3>
    <p>{product.name}</p>
    <p>{product.price}</p>
    </div>
    </>
  )
}

export default HomeSection