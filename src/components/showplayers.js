import React from 'react';
import shortid from 'shortid';
import SP from "./listofplayers";
import {Raspored} from "./Raspored"


export class Players extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            player: {
            id: shortid.generate(),
            name: "",
            bodovi: 0,
            postihnutigolovi: 0,
            primljenigolovi: 0,
            golRazlika: 0
        },
            players: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const nova = this.state.player;
        const newplayers = [nova, ...this.state.players]
        this.setState({
            player: {
                    id: shortid.generate(),
                    name: "",
                    bodovi: 0,
                    postihnutigolovi: 0,
                    primljenigolovi: 0,
                    golRazlika: 0
            },
            players: newplayers
        });
    };

    handleChange = (event) => {
        const {id, bodovi, postihnutigolovi,primljenigolovi,golRazlika} = this.state.player;
        this.setState({
        player:{
            id: id,
            name: event.target.value,
            bodovi: bodovi,
            postihnutigolovi: postihnutigolovi,
            primljenigolovi: primljenigolovi,
            golRazlika: golRazlika
        }

        });
    };

    updateState = (novi) => {

        const { players } = this.state;
        for(let i = 0; i < players.length; i++) {
            if(novi.name === players[i].name) {
                players[i] = novi;
                
            }
        }
        this.setState({
            players: players
        });
       
    }

    render() {

        return(
            <React.Fragment>
                <form>
                <input type="text" value={this.state.player.name} onChange={this.handleChange}/>
                <button onClick = {this.handleSubmit}>Submit</button>
                </form>
                <Raspored data={this.state.players} updatePlayerScore={this.updateState}/>
                <SP data={this.state.players} />
            </React.Fragment>
        );
    }

}