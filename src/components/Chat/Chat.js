import React, {Component} from "react";
import socketIOClient from "socket.io-client";
import {ApiUrl} from '../../config';

class Chat extends Component {

    constructor() {
        super();

        this.state = {
            chat: []
        };

        this.endpoint = ApiUrl;
        this.chatSubmit = this
            .chatSubmit
            .bind(this);
    }

    chatSubmit() {
        const socket = socketIOClient(this.endpoint);
        socket.emit("clientMsg", {text: this.chatInputText.value});
        this.chatInputText.value = "";
        // socket.on('newMessage', (d) => {     console.log(d); })
    }

    componentDidMount() {
        const socket = socketIOClient(this.endpoint);
        socket.on("FromAPI", (res) => {
            console.log(res);
        });
        
        socket.on('ack', (data) => {
            console.log(data.text);
            this
            .state
            .chat
            .push(data.text);
            this.setState({chat: this.state.chat});
        });

        socket.emit('join', {
            room: 'roomA'
        }, (callback) => {
            console.log('callback', callback);
        });
    }

    render() {
        return (
            <div>
                Chat App {this.state.chat.length > 0
                    ? this
                        .state
                        .chat
                        .map(d => {
                            return <li key={Math.random()}>{d}</li>
                        })
                    : null}
                <input type='text' id='chatInput' ref={el => this.chatInputText = el}/>
                <button onClick={this.chatSubmit}>Submit</button>
            </div>
        );
    }
}

export default Chat;