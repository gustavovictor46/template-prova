<<<<<<< HEAD
"use client";

import { Form, Input, InputNumber, Modal } from "antd";
=======
'use client';

import { Form, Input, InputNumber, Modal } from 'antd';
>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6

export default function FormModal({ openModal, serie, confirmLoading, onSubmit, onCancel }) {
    const [form] = Form.useForm();

    return (
        <Modal
            open={openModal}
<<<<<<< HEAD
            title={serie ? "Editar série" : "Cria nova série"}
=======
            title={serie ? 'Editar série' : 'Cria nova série'}
>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6
            centered
            onOk={() => form.submit()}
            onCancel={onCancel}
            confirmLoading={confirmLoading}
<<<<<<< HEAD
            destroyOnHidden
        >
            <Form
                form={form}
                layout="vetical"
                initialValues={serie}
                onFinish={onSubmit}
            >
                <Form.Item
                    name="title"
                    label="Título"
                    rules={[{
                        required: true,
                        min: 3,
                        max: 120,
                        message: "Título obrigatório. Deve ter entre 3 e 120 caracteres"
                    }]}
                >
=======
            destroyOnHidden>
            <Form form={form} layout="vetical" initialValues={serie} onFinish={onSubmit}>
                <Form.Item
                    name="title"
                    label="Título"
                    rules={[
                        {
                            required: true,
                            min: 3,
                            max: 120,
                            message: 'Título obrigatório. Deve ter entre 3 e 120 caracteres',
                        },
                    ]}>
>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6
                    <Input placeholder="Ex: Breaking Bad" />
                </Form.Item>
                <Form.Item
                    name="genero"
                    label="Gênero"
<<<<<<< HEAD
                    rules={[{
                        required: true,
                        message: "Gênero obrigatório."
                    }]}
                >
=======
                    rules={[
                        {
                            required: true,
                            message: 'Gênero obrigatório.',
                        },
                    ]}>
>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6
                    <Input placeholder="Ex: Drama" />
                </Form.Item>
                <Form.Item
                    name="plataforma"
                    label="Plataforma"
<<<<<<< HEAD
                    rules={[{
                        required: true,
                        message: "Plataforma obrigatória."
                    }]}
                >
=======
                    rules={[
                        {
                            required: true,
                            message: 'Plataforma obrigatória.',
                        },
                    ]}>
>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6
                    <Input placeholder="Ex: Netflix" />
                </Form.Item>
                <Form.Item
                    name="numero_temporadas"
                    label="Temporadas"
<<<<<<< HEAD
                    rules={[{
                        required: true,
                        type: "number",
                        message: "Número de temporados obrigatório."
                    }]}
                >
                    <InputNumber placeholder="Ex: 5" min={1} />
                </Form.Item>
                <Form.Item
                    name="ano_lancamento"
                    label="Ano de Lançamento"
                    rules={[{
                        required: true,
                        type: "number",
                        message: "Ano de Lançamento é obrigatório"
                    }]}
                >
                    <InputNumber placeholder="Ex: 2008" min={1900} max={2100} />
                </Form.Item>
                <Form.Item
                    name="imageUrl"
                    label="URL da imagem"
                    rules={[{
                        type: "url",
                        message: "Deve ser uma URL válida!"
                    }]}
                >
                    <InputNumber placeholder="Ex: https://codeverse.dev.br"/>
=======
                    rules={[
                        {
                            required: true,
                            type: 'number',
                            message: 'Número de temporados obrigatório.',
                        },
                    ]}>
                    <InputNumber placeholder="Ex: 5" min={1} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="ano_lancamento"
                    label="Ano de lançamento"
                    rules={[
                        {
                            required: true,
                            type: 'number',
                            message: 'Ano de lançamento é obrigatório.',
                        },
                    ]}>
                    <InputNumber
                        placeholder="Ex: 2008"
                        min={1900}
                        max={2100}
                        style={{ width: '100%' }}
                    />
                </Form.Item>

                <Form.Item
                    name="imageUrl"
                    label="URL da imagem"
                    rules={[
                        {
                            type: 'url',
                            message: 'Deve ser uma URL válida.',
                        },
                    ]}>
                    <Input placeholder="Ex: https://codeverse.dev.br/breaking-bad.png"/>
>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6
                </Form.Item>
            </Form>
        </Modal>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6
