import { data } from "jquery";
import React from "react";
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, Row,FormGroup } from 'reactstrap';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);


const validContactRegex = RegExp(
  / \+91-[\d]{10}$/
);
const ValidateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

 class Register extends React.Component
 {
     
     constructor(props) {
        super(props);
        this.state = {
                c_name:'',
                gender:'',
                family_status:'',
                address: '',
                email_id:'',
                aadhar_card:'',
                password:'',
                contact_no:'',
               
                
                errors: {
                  c_name: '',
                  email_id: '',
                  password: '',
                  contact_no:'',
                  aadhar_card:''
                }
                      }
                          this.c_name = this.c_name.bind(this);
                          this.gender = this.gender.bind(this);
                          this.family_status=this.family_status.bind(this);
                          this.address = this.address.bind(this);
                          this.email_id= this.email_id.bind(this);
                          this.aadhar_card=this.aadhar_card.bind(this);
                          this.password = this.password.bind(this);
                          this.contact_no = this.contact_no.bind(this);
                          
                          /*this.user_id = this.user_id.bind(this);
                          this.user_type = this.user_type.bind(this);
                          this.labour_type = this.labour_type.bind(this);
                          this.client_type = this.client_type.bind(this);*/
                          
      }

                  c_name=(event)=> {
             
                    this.setState({ c_name: event.target.value })
              
                  }

                  gender=(event)=> {
             
                    this.setState({ gender: event.target.value })
            
                  }
                  
                  family_status=(event)=> {
             
                    this.setState({ family_status: event.target.value })
            
                  }

                  address=(event)=> {
           
                    this.setState({ address: event.target.value })
              
                  }
                
                  email_id=(event)=> {
             
                    this.setState({ email_id: event.target.value })
              
                  }
          
                  aadhar_card=(event)=> {
           
                    this.setState({ aadhar_card: event.target.value })
              
                  }
                  
                  password=(event)=> {
           
                    this.setState({ password: event.target.value })
              
                  }
                  
                  contact_no=(event)=> {
             
                    this.setState({ contact_no: event.target.value })
              
                  }
                           
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'c_name': 
        errors.c_name = 
          value.length < 2
            ? ' Name must be at least 2 characters long!'
            : '';
        break;

      case 'email': 
        errors.email_id = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;

      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
            break;

       case 'contact_no': 
          errors.contact_no = 
            value.length === 10
              ? ''
              : 'Contact No must be 10 digits long!';
            break;

      case 'aadhar_card': 
          errors.aadhar_card = 
            value.length === 12
              ? ''
              : 'Aadhar Card No must be 12 digits long!';
            break;
      
       default:
        break;
    }
    

    this.setState({errors, [name]: value});
  }




            cancel=()=>{
                    this.props.history.push('/');
            }

            reset=()=>{
                  this.props.history.push('/register');
            }
       

            register=(event)=>
             {
                event.preventDefault();

                if(ValidateForm(this.state.errors)) 
                {
                  console.info('Valid Form')
                }
                else
                {
                  console.error('Invalid Form')
                }

              const requestOption={
                method: 'post',
             
                      headers: {
               
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'

              },
              "body": JSON.stringify({
            
                c_name:this.state.c_name,
                gender:this.state.gender,
                family_status:this.state.family_status,
                address:this.state.address,
                email: this.state.email,
                aadhar_card:this.state.aadhar_card,
                password:this.state.password,
                contact_no: this.state.contact_no,
             })
            };

           /* //alert(this.state.user_type);
            if(this.state.user_type === "labour")
            {
             
              fetch('http://localhost:8080/labour/savelabour',requestOption)
              .then(res=>{
                if(res.status==200)
                {
                  alert("Your Registration Successful !");
                  alert("Name : " + this.state.fname +" "+ this.state.lname );
                  alert("Password : "+this.state.password);
                  
                  this.props.history.push("/login");
                }
                else{
                    alert("OOPS! Registration Failed !");
                }
              })
            }
            else if(this.state.user_type === "client")
            {
              
              fetch('http://localhost:8080/client/saveclient',requestOption)
              .then(res=>{
                if(res.status==200)
                {
                  alert("Your Registration Successful !");
                  alert("Name : " + this.state.fname +" "+ this.state.lname );
                  alert("Password : "+this.state.password);
                  
                  this.props.history.push("/login");
                }
                else{
                    alert("OOPS! Registration Failed !");
                }
              })
            }*/
          }

                  render() {
              

                    const {errors} = this.state;


               
                    return (
             
                        <div className="app flex-row align-items-center;background-color:red">
               
                          <Container>
                  
                            <Row className="justify-content-center">
                            <style>{'body{background-color:Grey}'}</style>
                              <Col md="9" lg="7" xl="6">
                              <style>{'form{background-color:#EF9A9A}'}</style>
                                <Card className="mx-4">
               
                                  <CardBody className="p-4">
                
                                    <Form onSubmit={this.register} noValidate>
                  
                                      <div id="form" class="row" className="mb-3 pageheading" >
                                        <style>{'h2{background-color:#EF5350}'}</style>
                                          <h2>Registration Form</h2>
                                      </div>
                

                                      <div>
                                        
                                      <InputGroup className="mb-2">
                                      <Input type="text" name="c_name" placeholder="Type Customer Name" onChange={(event) =>this.c_name(event),this.handleChange } noValidate required />
                                      {errors.c_name.length > 0 && <span className='error'>{errors.c_name}</span>}
                                       </InputGroup>
                                      </div>

                                      <div>
                                      <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}><h6>Gender</h6></label>
                                      <InputGroup className="mb-3" style={{display: 'flex',  justifyContent:'left', alignItems:'left'}} onChange={(event) =>{this.gender(event)}}> 
                                      <input type="radio" value="Male" name="gender"/> Male
                                      <input type="radio" value="Female" name="gender" /> Female
                                      <input type="radio" value="Other" name="gender" /> Other<br/>
                                      </InputGroup>
                                      </div>

                                      <div>
                                      <label style={{display: 'flex',  justifyContent:'left', alignItems:'left'}}><h6>Family Status</h6></label>
                                      <InputGroup className="mb-3" onChange={(event) =>{this.family_status(event)}}> 
                                      <input type="radio" value="Unmarried" name="family_status"/> Unmarried
                                      <input type="radio" value="Married" name="family_status" /> Married
                                      </InputGroup>
                                      </div>
                                      
                                      <div>
                                      <InputGroup className="mb-3">
                                      <Input type="text" name="address" placeholder="Enter address here" onChange={(event) =>this.address(event) ,this.handleChange } noValidate/>
                                      </InputGroup>
                                      </div>

                                      <div>
                                      <InputGroup className="mb-3">
                                      <Input type="email" name="email_id" placeholder="Email" onChange={(event) =>this.email_id(event), this.handleChange } noValidate />
                                      {errors.email_id.length > 0 && <span className='error'>{errors.email_id}</span>}
                                      </InputGroup>
                                      </div>

                                      <div>
                                      <InputGroup className="mb-3">
                                      <Input type="number" name="aadhar_card" placeholder="aadhar no" onChange={(event) =>this.aadhar_card(event) ,this.handleChange } noValidate/>
                                      { errors.aadhar_card.length > 0 && <span className='error'>{errors.aadhar_card}</span>}
                                      </InputGroup>
                                      </div>

                                      <div>
                                      <InputGroup className="mb-3">
                                     <Input type="password" name="password" placeholder="Password" onChange={(event) =>this.password(event),this.handleChange} noValidate  />
                                     {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                                      </InputGroup>
                                      </div>

                                      <div>
                                      <InputGroup className="mb-3">
                                      <Input type="number" name="contact_no" placeholder="Contact No" onChange={(event) =>this.contact_no(event) ,this.handleChange } noValidate/>
                                      {errors.contact_no.length > 0 && <span className='error'>{errors.contact_no}</span>}
                                      </InputGroup>
                                      </div>
                                      
                                    <Button  onClick={(event) => {this.register(event)}}  color="success" >Register</Button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    <button className="btn btn-primary" onClick={this.reset.bind(this)} style={{marginLeft: "10px"}}>Reset</button>
                                    </Form>
               
                                  </CardBody>
               
                                </Card>
               
                              </Col>
           
                            </Row>
          
                          </Container>
               
                        </div>
               
                      );
              
                    }
               
 }
 
                  export default Register;