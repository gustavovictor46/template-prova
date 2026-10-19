<<<<<<< HEAD
"use client";

import { Skeleton } from "antd";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ReadPage() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    async function buscarSeries() {
        try {
            setLoading(true);

            const response = await axios.get("/api/series?limit=50");

            setSeries(response.data.data);
            toast.success("Séries carregadas", { id: "read" });
        } catch (error) {
            toast.error("Erro ao buscar as séries", { id: "read" });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        buscarSeries();
    }, []);

    return (
        <main>
            <h2>Read</h2>
            <p>Busca séries via /api/series (nossa API route.js), que fala com a Codeverse direto do servidor.</p>

            { loading ? (
                    <div className="skeleton">
                        <Skeleton active />
                    </div>
                ) : (
                    <ul>
                        { series.map(atual => 
                            <li key={atual.id}>{ atual.title }</li>
                        ) }
                    </ul>
                )
            }
        </main>
    );
}
=======
import {
    HardDrive,
    KeyRound,
    Layers3,
    List,
    PlusCircle,
    Server,
    SquarePen,
    Trash2,
} from 'lucide-react';

xport const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista series com api-key',
        description: 'Lista séries com api-key exposta.',
        color: 'purple',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista series com SSR',
        description: 'Lista séries renderizadas no SSR.',
        color: 'purple',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        verb: 'Get',
        description: 'Lista séries salvas no SessionStorage',
        description: 'Lista séries salvas no sessionStorage.',
        color: 'purple',
        Icon: HardDrive,
    },
    {
        id: 4,
        method: 'FullStack',
        verb: 'Get',
        description: 'Lista séries via API Route - BackEnd Intermediário.',
        color: 'purple',
        Icon: Layers3,
    },
];

export const crud = [
    {
           id: 1,
        method: 'Create',
        verb: 'Post',
        description: 'Cria série via modal e API Route',
        color: 'orange',
        Icon: PlusCircle,
    },
];
>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6
