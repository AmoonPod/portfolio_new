import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code2, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BASE_URL = 'https://manueldeceglie.it';

export const metadata: Metadata = {
    title: 'Software Gestionali e Sviluppo Custom | Manuel De Ceglie',
    description: 'Automazione dei processi aziendali con software su misura.',
    alternates: {
        canonical: `${BASE_URL}/siti-web/sviluppo-software`,
    },
};

const softwareCities = [
    { slug: 'bologna', name: 'Bologna', province: 'Bologna' },
    { slug: 'modena', name: 'Modena', province: 'Modena' },
    { slug: 'reggio-emilia', name: 'Reggio Emilia', province: 'Reggio Emilia' },
    { slug: 'carpi', name: 'Carpi', province: 'Modena' },
    { slug: 'sassuolo', name: 'Sassuolo', province: 'Modena' },
];

export default function SviluppoSoftwarePage() {
    return (
        <main className="min-h-screen flex flex-col font-sans bg-black text-white">
            <section className="py-32 text-center">
                <h1 className="text-4xl font-bold mb-4">Software Gestionali</h1>
                <p className="text-gray-400">Lavoro con aziende in Emilia-Romagna</p>
            </section>
        </main>
    );
}
