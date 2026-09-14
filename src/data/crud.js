import { HardDrive, KeyRound, Server } from 'lucide-react';

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
        description: 'Lista séries renderizadas no server.',
        color: 'purple',
        Icon: Server,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista séries renderizadas no server.',
        color: 'purple',
        Icon: HardDrive,
    },

];

export const crud = [
    {
        id: 1,
        method: 'Offline',
        verb: 'Get',
        description: 'Lista séries consumida no SessionStorage.',
        color: 'purple',
        Icon: KeyRound,
    },
];
