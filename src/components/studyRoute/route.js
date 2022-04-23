import React, { useState } from 'react';
import { Modal } from 'antd';
import Bus from '../../utils/eventBus'

export function Home(props) {
    const [visible, setVisible] = useState(false)

    Bus.addListener('changeVisible', (msg) => {
        setVisible(msg)
    });

    const handleOk = () => {
        console.log("OK")
        setVisible(false)
    }
    const handleCancel = () => {
        setVisible(false)
    }
    return (
        <>
            <div>
                <Modal
                    title="Title"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                ></Modal>
            </div>
        </>
    )
}