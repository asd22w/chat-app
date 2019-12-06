import React, { useState } from 'react';

function SendMessage(props) {
    let [value, setValue] = useState('');

    return (
        <form>
            <div className="input-group">
                <input onChange={ (e) => setValue(e.target.value) } type="text" className="form-control" placeholder="Type a message..." value={ value } />
                <div className="input-group-append">
                    <a onClick={ () => { 
                        props.sendMessage(value); 
                        setValue('');
                    } } href="#"><i className="feather icon-send"></i></a>
                </div>
            </div>
        </form>
    )
}

export default SendMessage;