import React, { useState } from 'react'
function Login() {

    const[usrid, setUsrid] = useState("");
    const[pwd, setPwd] = useState("");
    const[user, setUser] = useState({});

   /* handleInput = (element)=> {      
        
        console.log(this.state.usrid);
        console.log(this.state.pwd);
    } */


    const submitForm=(ev)=>{
        
        ev.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                userid: usrid,
                pwd: pwd,
            })
        }
        fetch("http://localhost:8081/login",reqOptions)
        .then(resp=> resp.json())
        .then(usr=> {setUser(usr); alert(user.fname)}); 
        
    }

    return (
        <div className="container-fluid">
                <form>
                <h3>Sign In</h3> <hr></hr>
                <div className="form-group"  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}
>
                    <label>User ID</label>  &nbsp;&nbsp;&nbsp;  &nbsp;  
                    <input type="text" style={{width: "400px"}} name="usrid" className="form-control"  placeholder="Enter User ID" onChange={(ev)=>setUsrid(ev.target.value) } />
                </div><br/>
                <div className="form-group"  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <label>Password</label> &nbsp;  &nbsp; 
                    <input type="text" style={{width: "400px"}} name="pwd" className="form-control" placeholder="Enter password" onChange={(ev)=>setPwd(ev.target.value) }/>
                </div><br/>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" onClick={(ev)=>submitForm(ev)}>Submit</button>
                </div>
                <br/><br/>
            </form>
            
            </div>
    );




}

export default Login;

/*export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            usrid:"",   
            pwd:"",
            msg:"",
            user:{},
            loginerror:""
        }
    }

    handleInput = (element)=> {      
        const nm = element.target.name;    
        const val = element.target.value;
        this.setState({[nm]: val});
        console.log(this.state.usrid);
        console.log(this.state.pwd);
    }

    submitForm=(ev)=>{
        console.log(this.state.usrid);
        console.log(this.state.pwd);
        ev.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                userid: this.state.usrid,
                pwd: this.state.pwd,
            })
        }
        fetch("http://localhost:8081/login",reqOptions)
        .then(resp=> resp.json())
        .then(usr=> {this.setState({user: usr}); });
        localStorage.setItem("loggedinuser" , JSON.stringify(this.state.user));
                         /*mystore.dispatch({type: "LOGGEDIN"})
        this.props.history.push("/userhome");
        /*.then(data=>{if(data.length !== 0)
                    {
                      const json = JSON.parse(data);
                      this.setState({usr: json});
                      if(json.loginid.role =="User")  {
                        this.setState({usr: json});
                        this.setState({msg: "Welcome User, " + this.state.usrid});
                      } else if(json.loginid.role =="Admin")  {
                        this.setState({usr: json});
                        this.setState({msg: "Welcome Admin, " + this.state.usrid});
                    }   else {
                         this.setState({usr : json});
                         this.setState({msg: "Welcome Showroom, " + this.state.usrid});
                    }
                    localStorage.setItem("loggedinuser" , JSON.stringify(this.state.usr));
                         /*mystore.dispatch({type: "LOGGEDIN"})
                         this.props.history.push("/userhome");
                    }
                    else
                    {
                        this.setState({msg: "Wrong ID/Pwd"});
                    }
                })
        
    }*/

    /*render(){
        return(
            <div className="container">
                <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>User ID</label>
                    <input type="text" name="usrid" className="form-control" placeholder="Enter User ID" onChange={this.handleInput } />
                </div><br/>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" name="pwd" className="form-control" placeholder="Enter password" onChange={this.handleInput}/>
                </div><br/>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" onClick={this.submitForm}>Submit</button>
                </div>
                <br/><br/>
            </form>
            <h1>{this.state.msg}</h1>
            </div>
        )
    }
} */