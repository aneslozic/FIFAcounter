import React from "react";

export class Raspored extends React.Component {

    gRaspored = (props) => {
        let lista = [];
            for(var i = 0; i < this.props.data.length; i++){   
                for(var j = i + 1; j < this.props.data.length; j++){
                        lista.push({
                            p1: i,
                            p2: j

                        })                 
                }   
            }
            return lista;
    }

    render() {
        const niz = this.gRaspored();
      return(
            niz.map(x => (
                <div>
                   
                    <div>{this.props.data[x.p1].name}</div>
                    <input id={"Player"+x.p1+"vs"+x.p2 } type="text"/>
                    <div> : </div>
                    <input type="text" id={"Player"+x.p2+"vs"+x.p1} />
                    <div>{this.props.data[x.p2].name}</div>
                    <button onClick={() => {
                            const val = parseInt(document.getElementById("Player"+x.p1+"vs"+x.p2).value);
                            const val1 = parseInt(document.getElementById("Player"+x.p2+"vs"+x.p1).value);
                            const player = this.props.data[x.p1];
                            const player1 = this.props.data[x.p2];

                            console.log(player.postihnutigolovi);
                            console.log(player1.postihnutigolovi);

                            player.postihnutigolovi += val;
                            player.primljenigolovi += val1;
                            player.golRazlika += player.postihnutigolovi - player.primljenigolovi;
                            player.bodovi += (val > val1) ? 3 : (val === val1) ? 1 : 0;
                            player1.postihnutigolovi += val1;
                            player1.primljenigolovi += val;
                            player1.golRazlika += player1.postihnutigolovi - player1.primljenigolovi;
                            player1.bodovi += (val1 > val) ? 3 : (val1 === val) ? 1 : 0;
                            
                
                            this.props.updatePlayerScore(player);
                            this.props.updatePlayerScore(player1);

                    }
                    }>Submit</button>
                  
                </div>
            ))
      );
    }
    	
}