import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import './Chat.css';
import { ApiUrl } from '../../config';

class Chat extends Component {

    constructor() {
        super();

        this.state = {
            chat: [],
            chatButtonDisable: true
        };

        this.endpoint = ApiUrl;
        this.chatSubmit = this
            .chatSubmit
            .bind(this);
        this.chatEvent = this.chatEvent.bind(this);
    }

    chatSubmit() {
        const socket = socketIOClient(this.endpoint);
        socket.emit("clientMsg", { text: this.chatInputText.value });
        this.chatInputText.value = "";
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
            this.setState({ chat: this.state.chat });
        });

        socket.emit('join', {
            room: 'roomA'
        }, (callback) => {
            console.log('callback', callback);
        });
    }

    render() {
        return (
            <div className='chatbody'>
                <div className='chatHeader'>Chat App</div>
                {this.state.chat.length > 0
                    ? this
                        .state
                        .chat
                        .map(d => {
                            return (
                                <div key={Math.random()} className="row">
                                    <div className="col s4 m4">
                                        <div className="card blue-grey darken-1">
                                            <div className="card-content white-text" >
                                                {d}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    : null}
                <div className='chatFooter container row'>
                    <div className='col m11'>
                        <input type='text' id='chatInput' onChange={this.chatEvent} ref={el => this.chatInputText = el} />
                    </div>
                    <div className='col m1' >
                        <button onClick={this.chatSubmit} className='btn'>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;