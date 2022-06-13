import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: PropsType)=> {
    const [editMode, setEditMode] = useState(true)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])


    const activateMode=()=>{
        setEditMode(false)
    }

    const deactivateMode=()=>{
        setEditMode(true)
        props.updateStatus(status)
    }

    const onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }

        return (
            <>
                {editMode
                    ? <div><span onDoubleClick={activateMode}>{props.status}</span></div>
                    : <div><input onChange={onStatusChange} value={status} autoFocus onBlur={deactivateMode}/></div>
                }

            </>
        );
}

