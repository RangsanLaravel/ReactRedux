import React, { Component } from "react";
import { httpClient } from "./../../utils/HttpClient";
import { server } from "../../constants";
import { connect } from "react-redux";
import { login,autologin } from "../../actions/login.action";

class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username:"",
       password:""
    }
  }

  componentDidMount(){
    this.props.autologin(this.props.history);
  }

  showError=()=>{
    return (<div className="alert alert-danger alert-dismissible">
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-hidden="true"
              >
                ×
              </button>
              <h4>
                <i className="icon fa fa-ban" /> Error!
              </h4>
              Incorrect username or password
            </div>)
  }
  render() {
    return (
      <div 
      className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>CMStock</b>ReactJS
          </a>
        </div>
        {/* /.login-logo */}
        <div 
        style={{background:"whitesmoke",borderRadius:10}}
        className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form >
            <div className="form-group has-feedback">
              <input
                onChange={e=>this.setState({username:e.target.value})}
                className="form-control"
                placeholder="Email"
              />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                onChange={e=>this.setState({password:e.target.value})}
                className="form-control"
                placeholder="Password"
              />
                {/*Ternery Condition*/}
            {this.props.loginReducer.isError ? this.showError():null}

              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            {/* login */}
            <div className="row">
              <div className="col-xs-12">
                <button               
                  onClick={e=>{
                    e.preventDefault();
                    this.props.login(this.props.history,this.state)
                  }}
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Sign In
                </button>
              </div>
              {/* /.col */}
            </div>
            {/* Register*/}
            <div className="row">
              <div className="col-xs-12">
                <button
                onClick={()=>this.props.history.push("/register")}
                style={{marginTop:8}}
                  className="btn btn-default btn-block"
                >
                  Register
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
        </div>
        {/* /.login-box-body */}
      </div>
    );
  }
}
const mapStateToProps = ({loginReducer}) => ({
  loginReducer
})

const mapDispatchToProps = {
  login,autologin
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
