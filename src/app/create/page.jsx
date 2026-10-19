<<<<<<< HEAD
"use client";

import FormModal from "../../components/FormModal";
import { Button } from "antd";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
=======
' use client';

import FormModal from '@components/FormModal';
import { Button } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6

export default function CreatePage() {
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);
<<<<<<< HEAD
    
    const handleSubmit = async (values) => {
        setLoading(true);

        try {
            await axios.post("/", values);
            setOpenModal(false);
            toast.success("Série criada!", { id: "create" });
        } catch (error) {
            toast.error("Erro ao criar série.", { id: "create" });
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main>
            <h2>Post - Create</h2>
            <Button type="primary" onClick={() => setOpenModal(true)}>
                nova série
            </Button>
            <FormModal
                openModal={openModal}
                confirmLoading={loading}
                onSubmit={handleSubmit}
                onCancel={() => setOpenModal(false)}
            />
        </main>
    );
}
=======

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
           await axios.post('/api/series', values);
           setOpenModal(false);
           toast.success('Série criada!', { id: 'create' });
        } catch (error) {
           toast.error('Erro ao criar a série.', { id: 'create' });
           console.error(error);
        } finally {
           setLoading(false);
        }
    };

    return (
        <main>
            
        </main>
    )
}
>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6
