import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button className='big-button' onClick={ props.handleRandomPick } disabled={!props.has_options}>What should I do?</button>
        </div>
    );
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={ this.props.handleRandomPick } disabled={!this.props.has_options}>What should I do?</button>
//             </div>
//         );
//     }
// };

export default Action;