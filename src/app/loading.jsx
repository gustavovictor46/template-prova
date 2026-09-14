import { Spin } from 'antd';

export default function Loading() {
    return (
        <main>
            <Spin size="large" />
            <P>Carregando a página...</P>

        </main>
    );
}
