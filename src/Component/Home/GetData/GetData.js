import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ModalData from '../../Theme/Modal/ModalData';
import ThemeFeature from '../../Theme/ThemeFeture/ThemeFeature';


const GetData = () => {
    const [reload,setReload]=useState('')
    const [dataInput,setDataInput]=useState([])
    const res=async()=>{
           
        const result=await axios.get('https://guarded-woodland-52046.herokuapp.com/data')
        console.log(result.data)
        setDataInput(result.data)
        
        
       }
    
    useEffect(()=>{
   
      res()  
     
    },[reload])
    //aikhane
   



    //delete item

    const deleteItem=(id)=>{
        fetch(`https://guarded-woodland-52046.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        }
        )
        .then(res=>res.json())
        .then(data=>{
            if(data){
            const updateData=dataInput.filter(dt=>dt._id===data._id)
            setDataInput(updateData)
             setReload(data)
 
            }
            
        } 
        )}

    return (
        <>
          <ThemeFeature 
          dataInput={dataInput}
           deleteItem={deleteItem} 
          
         
           >

           </ThemeFeature>
           <ModalData></ModalData>
         
        </>
    );
};

export default GetData;