const el = React.createElement;

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {counter: 0}
    }

    clickHeandler = ()=>{
        //alert("Hello React");
        //this.state.counter++;
        const newCounter = this.state.counter + 1;
        this.setState({counter: newCounter})
        console.log(this.state.counter);
    }

     render(){
    //     //return el(
    //       //  'button',
    //      //    {
    //             //onClick: ()=>{alert("Hello React")}
    //      //       onClick: this.clickHeandler,
    //       //      className: 'btn btn-info'
    //      //   },
    //      //   'Click me'
    //   //  )

    //     return el('div', null, [
    //         el(
    //             'button',
    //              {
    //                 //onClick: ()=>{alert("Hello React")}
    //                 onClick: this.clickHeandler,
    //                 className: 'btn btn-info',
    //                 key: 'btn'
    //             },
    //             'Click me'
    //         ),
    //         //el('span', {key: 'span'}, this.state.counter)
    //         el(NiceNumber, {value: this.state.counter, key: 'span'})
    //     ])
        return (
            <div className= "container"> 
                <button className= "btn btn-info" onClick={this.clickHeandler}>Click me</button>
                <NiceNumber value={this.state.counter}/>
                <div />
            </div>
        )
    }

}

class NiceNumber extends React.Component {
    constructor(props){
        super(props)

    }

    style = {
        fontWeight: 'bold', 
        paddingLeft: '10px',
        color: 'tomato'
    }

    render() {
        //return el('span', {style: this.style}, this.props.value)
        return(
            <span style={this.style}>{this.props.value}</span>
        )
    }

}

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<App/>);