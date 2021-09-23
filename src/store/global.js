import react from "react"
import { makeAutoObservable, autorun, runInAction, reaction } from "mobx"
import history from "./history"



class TodoStore {
    value = 0
    auth=false
    user=''

    constructor() {
        makeAutoObservable(this)
        this.value=10
        // this.auth = localStorage.getItem('authbank99')
        this.user = localStorage.getItem('user')
    }
    
    increment=()=>{
        // this.value++
        // this.value++
        // console.log(1)
    }
    
    getAuth = ()=>{
         this.auth = localStorage.getItem('authbank99')
         console.log(this.user)
        
    }
    setAuth=()=>{
        console.log('Auth Storage Save')
        this.auth=true
        localStorage.setItem('authbank99',true)
    
    }

    setUser=(x)=>{
        this.user=x
        localStorage.setItem('user',x)
    }

    logout = ()=>{
        this.auth=false
        this.user=''
        localStorage.removeItem('authbank99')
        localStorage.clear()
        
    }
    // get value(){
    //     return this.value
    // }
}


export const Store = new TodoStore();

