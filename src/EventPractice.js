import React, {Component, useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username:'',
        message:''
    });
    const {username, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }
    const onClick = () => {
        alert(username + ':' + message);
        setForm({
            username:'',
            message:''
        })
    };
    const onKeyPress = e => {
        if (e.key === 'Enter')
            onClick();
    };

    return (
        <div>
            <h1>event prac</h1>
            <input
                type="text"
                name="username"
                placeholder="user name"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="message"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>ok</button>
        </div>
    );
}
// class EventPractice extends Component {

//     state = {
//         username : '',
//         message : ''
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name] : e.target.value
//         })
//     }

//     handleClick = () => {
//         alert(this.state.username + ': ' + this.state.message);
//         this.setState({
//             username:'',
//             message:''
//         });
//     }

//     handleKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             this.handleClick();
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>event</h1>
//                 <input 
//                     type = "text"
//                     name = "username"
//                     placeholder = "input username"
//                     value = {this.state.username}
//                     onChange = {this.handleChange}
//                 />
//                 <br />
//                 <input
//                     type = "text"
//                     name = "message"
//                     placeholder = "input message"
//                     value = {this.state.message}
//                     onChange ={this.handleChange}
//                     onKeyPress = {this.handleKeyPress}
//                 />
//                 <button onClick = {this.handleClick}>확인</button>
//             </div>
//         )
//     }
// }

export default EventPractice;