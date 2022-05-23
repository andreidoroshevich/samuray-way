import React from 'react';

type PropsType = {
    status: string
}
type localEditStateType = {
    editMode: boolean
}

class ProfileStatus extends React.Component<PropsType> {

    state: localEditStateType = {
        editMode: false
    }
    activateMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateMode() {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div><span onDoubleClick={this.activateMode.bind(this)}>{this.props.status}</span></div>
                    : <div><input autoFocus onBlur={this.deactivateMode.bind(this)} value={this.props.status}/></div>
                }

            </>
        );
    }
}

export default ProfileStatus;