import React,{Component} from 'react';
import './Home.css';

class Home extends Component {

    state = {
        user: ['This is Samiul Islam']
    };


    inputChange = (e) => {
        this.setState({
            newUser: e.target.value
        });
        console.log(this.state.newUser);
    }

    wrapUp = () => {
        this.setState(prevState => ({
            user: [...prevState.user, prevState.newUser]
        })
        );
    }

    render(){
        return(
            <div className="Body">
                
                <h3> Welcome to Learning React </h3>

                <ol className="List">
                    {this.state.user.map(
                        (user, index) => {
                            return <li key={index}>{user} </li>
                        }
                    )}
                </ol>
                
                <input type="text" placeholder="Type your name..." onChange={this.inputChange}/>
                <button onClick={this.wrapUp}> Add </button>
            </div>
    );
    }
}
export default Home;