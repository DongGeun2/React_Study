const React = require('react');

class WordReply extends React.Component{
    state = {
        text : 'Hello Webpack',
    };


    render(){
        return <h1>{this.state.text}</h1>
    }
}

module.exports = WordReply;