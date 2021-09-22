import react from "react"
import { makeAutoObservable, autorun, runInAction, reaction } from "mobx"
import history from "./history"



class TodoStore {
    value = 0
    auth=false

    constructor() {
        makeAutoObservable(this)
        this.value=10
        // this.auth = localStorage.getItem('authbank99')
    }
    
    increment=()=>{
        // this.value++
        // this.value++
        // console.log(1)
    }
    
    getAuth = ()=>{
         this.auth = localStorage.getItem('authbank99')
        
    }

    setAuth=()=>{
        console.log('Auth Storage Save')
        this.auth=true
        localStorage.setItem('authbank99',true)
        window.location.replace("/dashboard");
      
        
    }

    logout = ()=>{
        this.auth=false
        localStorage.removeItem('authbank99')
        localStorage.clear()
        
    }
    // get value(){
    //     return this.value
    // }
}


export const Store = new TodoStore();

