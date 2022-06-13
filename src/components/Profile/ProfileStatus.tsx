import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}
type localEditStateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType> {

    state: localEditStateType = {
        editMode: false,
        status: this.props.status
    }
    activateMode = () => {
        console.log(this)
        this.setState({
            editMode: true
        })
    }

    deactivateMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: PropsType, PrevState: localEditStateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div><span onDoubleClick={this.activateMode}>{this.props.status}</span></div>
                    : <div><input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateMode}
                                  value={this.state.status}/></div>
                }

            </>
        );
    }
}

export default ProfileStatus;