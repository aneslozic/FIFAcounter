import React from "react";

export default function showplayers(props) {
    let lista = props.data;
    lista.sort((a,b) => (b.bodovi - a.bodovi))
    return (
        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>bodovi</th>
                    <th>golovi</th>
                    <th>primljeni golovi</th>
                    <th>gol razlika</th>
                </tr>
            </thead>
            <tbody>
                {
                    lista.map(row => (
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.bodovi}</td>
                            <td>{row.postihnutigolovi}</td>
                            <td>{row.primljenigolovi}</td>
                            <td>{row.golRazlika}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );   
}