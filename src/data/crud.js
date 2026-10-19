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
<<<<<<< HEAD
=======

>>>>>>> aa1a9a8fd9578016b5805d42fa1ed3532bad9ac6
export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista séries com api-key exposta.',
        color: 'purple',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista séries renderizadas no SSR.',
        color: 'purple',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        verb: 'Get',
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
    {
        id: 2,
        method: 'Read',
        verb: 'Get',
        description: 'Lista séries no SSR e busca pelo id em rota dinâmica.',
        color: 'green',
        Icon: List,
    },
    {
        id: 3,
        method: 'Update',
        verb: 'Put',
        description: 'Atauliza série existente pelo id.',
        color: 'blue',
        Icon: SquarePen,
    },
    {
        id: 4,
        method: 'Delete',
        verb: 'Delete',
        description: 'Exclui série via modal e API Route',
        color: 'red',
        Icon: Trash2,
    },
];