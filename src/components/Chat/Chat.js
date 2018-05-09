import React, {Component} from "react";
import jwt_decode from 'jwt-decode';
import socketIOClient from "socket.io-client";
import './Chat.css';
import {ApiUrl} from '../../config';

class Chat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chat: [],
            chatButtonDisable: true
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
    }

    componentDidMount() {
        const socket = socketIOClient(this.endpoint);
        const token = sessionStorage.getItem('main.token');
        this.decoded = jwt_decode(token);
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
            <div className='chatbody'>
                <div className='chatHeader'>Chat App</div>
                <ul className='chatUl'>
                    {this.state.chat.length > 0
                        ? this
                            .state
                            .chat
                            .map(d => {
                                return (
                                    <li key={Math.random()} className="col m4 s4 chatLi">
                                        <div
                                            style={{
                                            color: 'red',
                                            float: 'right',
                                            paddingRight: '10px'
                                        }}>{this
                                                .decoded
                                                .name
                                                .toUpperCase()}</div>
                                        <div
                                            style={{
                                            clear: 'both',
                                            paddingLeft: '10px'
                                        }}>{d}</div>
                                    </li>
                                )
                            })
                        : null}
                </ul>
                <div className='chatFooter container row'>
                    <div className='col m11 s11'>
                        <input type='text' id='chatInput' ref={el => this.chatInputText = el}/>
                    </div>
                    <div className='col m1 s1'>
                        <button onClick={this.chatSubmit} className='btn'>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;