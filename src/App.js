import React from 'react';
import $ from 'jquery';

import './App.css';

import TextOnImage from './components/TextOnImage';
import Button from './components/button'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      text_: "",
      src: ""
     
    }
  }
  
  componentDidMount() {
    this.Generate();
  }
  
  fetchImg(){
    $.ajax({
        context: this,
        dataType: "json",
        url: "http://shibe.online/api/shibes?count=1&httpsUrls=false",
        header: "Content-Type: application/json",
        success: function (data){
          this.fetchText();
          this.setState({
            src: data[0]
          });
          
        },
        error: function (error){
          alert("ops something went wrong.");
        }
      });
      
  }
  
  fetchText(){
    $.ajax({
        context: this,
        dataType: "json",
        url: "http://boredapi.com/api/activity/",
        header: "Content-Type: application/json",
        success: function (data){
          this.setState({
            text_: data.activity
          });
          
        },
        error: function (error){
          alert("ops something went wrong.");
        }
      });
  }

  
  Generate = () => {
    this.fetchImg();
    
  }
  
  render() {
    const { text_, src } = this.state;
    
    return (
      <div className="App">
        <h1>things to do :)</h1>
        <TextOnImage onClick={this.Generate} image_src={src} text_={text_} />
        <Button name="Click me!" func = {this.Generate}/>
      </div>
    );
  }
}
export default App;//<Image what="dog" /> <Image what="cat"/>