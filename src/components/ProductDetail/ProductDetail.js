import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
//import Tabs from 'faster-react-tabs';
import Tabs from 'react-accessible-tabs';
import service from '../../services';
import TabComponent from "../TabComponent/TabComponent"


const sections = [
  {
    title: 'Episode 1',
    content: (
      <div>
        <p> Episode Id </p>
        <p> Episode Name </p>
        <p> Episode Air Date </p>
        <p> Episode </p>
      </div>
    )
  },
  {
    title: 'Episode 2',
    content: (
      <div>
        <p> Episode Id </p>
        <p> Episode Name </p>
        <p> Episode Air Date </p>
        <p> Episode </p>
      </div>
    )
  },
  {
    title: 'Episode 3',
    content: (
      <div>
        <p> Episode Id </p>
        <p> Episode Name </p>
        <p> Episode Air Date </p>
        <p> Episode </p>
      </div>
    )
  }
];

class ProductDetail extends React.Component{
  constructor(props) {
    super(props);
    //this.state = { id: props.match.params.id};
    this.state = {
      created: "",
      episode: [],
      gender: "",
      id: props.match.params.id,
      image: "",
      location: {name: "", url: ""},
      name: ",",
      origin: {name: "", url: ""},
      species: "",
      status: "",
      type: "",
      url: ""
    }
    //console.log("hi id:", props.match.params.id);
  }

  getCharacterByID(id) {
    const self = this;
    service.getCharacterByID(id)
      .then(response => {
        self.setState({
          info: response.data.info,
          results: response.data.results
        });
        this.setState( response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  componentDidMount(){
    this.getCharacterByID(this.state.id);
  }

  render() {
    const self = this;
    const tabContent = [
            {
                label: 'Tab 1',
                content: (<div><p>Episode ID</p>
                          <p>Episode Name</p>
                          <p>Episode Air Date</p>
                          <p>Episode Episode</p></div>)
            },
            {
                label: 'Tab 2',
                content: (<div><p>Episode ID</p>
                          <p>Episode Name</p>
                          <p>Episode Air Date</p>
                          <p>Episode Episode</p></div>)
            },
            {
                label: 'Tab 3',
                content: (<div><p>Episode ID</p>
                          <p>Episode Name</p>
                          <p>Episode Air Date</p>
                          <p>Episode Episode</p></div>)
            }
        ];
        const initialSelectedIndex = 1;
    return (
      <div>
        <div className="panel-heading" style={{borderBottom:"solid 1px grey", textAlign:'center'}}>
          <a href="#default">
            <Image src="https://www.pngitem.com/pimgs/m/499-4990481_rick-and-morty-logo-png-rick-and-morty.png" style={{width:'200px', height: '50px'}} fluid />
          </a>
        </div>
        <div  style = {{ display: "table", width:"100%" }}>
          <div style = {{ float: "left", width: "5%", height: '100%', margin: '20px'}}>
            <Link to="/">
              { `< ` } Back
            </Link>
          </div>
          <div style = {{ width: '90%', display: 'table'}}>
            <div style = {{ display: "table", width: '100%'}}>
              <div   style = {{ display: 'inline-flex', width: '250px', height: '250px',margin:'20px', marginRight:'15%'}}>
                <Image src = {`${this.state.image}`} style={{width: '100%', height: '100%', minWidth: '200px', minHeight:'200px'}}/>
              </div>
              <div style = {{ display: 'inline-block', marginBottom: '20px'}}>
                <p>{ this.state.id}</p>
                <p>{ this.state.name}</p>
                <p>{ this.state.status}</p>
                <p>{ this.state.species}</p>
                <p>{ this.state.type}</p>
                <p>{ this.state.gender}</p>
                <p>{ this.state.origin.name}, { this.state.origin.url}</p>
                <p>{ this.state.created}</p>
              </div>
            </div>
            <p style={{marginLeft: '20px'}}>Episodes Info</p>
            <div style={{marginLeft:'20px'}}>
              <TabComponent episods = { this.state.episode}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetail;
