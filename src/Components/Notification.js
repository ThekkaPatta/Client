import React from 'react'
import Modal from 'react-modal'

function Notification() {
    return (
        <Modal isOpen={false}>
            <div className='modalbackground'>
                <div className='modalcontainer'>
                    <button>X</button>
                    <div className='title'>
                        <h3>Notification</h3>
                    </div>
                    <div className='body'><p>This will have the notification</p></div>
                    <div className='Footer'></div>
                </div>
            </div>
        </Modal>
    )
}
export default Notification