'use client';

import { useEffect, useState } from "react";

export default function OfflinePage() {
<<<<<<< HEAD
    const  [series, setSeries] = useState([]);

    useEffect(() => {
        const stored = sessionStorage.getItem('series');
        setSeries(stored ? JSON.parse(stored) : []);
    }, []);
    return (
        <main>
            <h2>GET - Offline</h2>
            <p>SesionStorage e nunca chama (fetch/axios) a API.</p>
=======
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const stored = sessionStorage.getItem("series");
        setSeries(stored ? JSON.parse(stored) : []);
    }, []);

    return (
        <main>
            <h2>Get - Offline</h2>
            <p>SessionStorage e nunca chama (fetch/axios) a API.</p>
>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6
            <ul>
                {series.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </main>
<<<<<<< HEAD
    )
}
=======
    );
}
>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6
