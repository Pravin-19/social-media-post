 
 /*


 import { createContext , useState, useEffect  } from "react";

 const DataContext = createContext({})

 export const DataProvider = ({children})=>{
    return (
        <DataContext.Provider value={{

        }}>
            {children}
        </DataContext.Provider>
    )
 }

 export default DataContext


*/












/*
 For Example:

 Steps:


1. 1st import {DataProvider} from "./context/DataContext"

2.Then Use <DataProvider> in  Return

    Our App.JS example:
    Eg:
        return (
         <div className="App">
         <DataProvider>
         ....               (Children..)
         </DataProvider>
         </Footer>
 
3. Then Cut the code in App.js. Code copied should be above the "Return" function...
 
    Eg:     
            function App() {
                ...
                ...
                ...

            return (
                <div className="App">
                {

4. Paste the code in the "DataContext.js" file...
            Eg:

            const DataContext = createContext({
                ... (Paste Here...)
            })


5. Then enter the values you are going to pass from "DataContext.Js" to "App.js"
            Eg: 

                return(
                <DataContext.Provider value={{
                    ....  (Enter the Values Here)
        }}>
        ...
        )

6. Entered Values in "DataContext" should be removed from "App.JS" 

Eg: 
       
        1. In DataContext.JS
                return (
                    <DataContext.Provider value={{
                            width, ...
                    }}>

        2. In App.js 

             <Header title= "Pravin Social Media" width={width} />

    Convert this to =>

    =>       <Header title= "Pravin Social Media" />

        
        3. In Header.js
                
            1.      import {useContext} from "react";
                    import {DataProvider} from "./context/DataContext"


            2.      
                    const Header=({ title,width})=>{
                    return(   
                        ....
                        )

    Convert this to =>
                      
                    const Header=({ title })=>{
                        const {width} = useContext(DataContext)
                    return(   
                        ....
                        )
            3. Then Change the values in header  and continue to edit...


7. Follow the Same steps.... and import all the files correctly.........
        Here the file is within the another folder....
                        

    Eg: 

            import Header from "../Header";
            import App from "../App";


             
If the file is another folder call with " ../ "     

                    


     */        
