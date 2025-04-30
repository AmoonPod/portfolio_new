"use client"; // Mark as client component for form handling

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ServiceContactFormProps {
    serviceName: string; // To identify the service page
    formTitle?: string;
    formDescription?: string;
    submitButtonText?: string;
}

export function ServiceContactForm({
    serviceName,
    formTitle = "Richiedi Maggiori Informazioni",
    formDescription = "Compila il modulo sottostante per discutere delle tue esigenze specifiche. Ti risponderò al più presto.",
    submitButtonText = "Invia Richiesta"
}: ServiceContactFormProps) {
    const [status, setStatus] = useState('');

    // !! IMPORTANT: Replace with your actual form endpoint URL (e.g., Formspree, API route)
    const formActionUrl = "YOUR_FORM_ENDPOINT_HERE";

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus('Invio in corso...');
        const formData = new FormData(event.currentTarget);

        // Basic validation example (can be enhanced)
        if (!formData.get('email') || !formData.get('message')) {
            setStatus('Errore: Email e Messaggio sono obbligatori.');
            return;
        }

        if (formActionUrl === "YOUR_FORM_ENDPOINT_HERE") {
            console.error("Please replace YOUR_FORM_ENDPOINT_HERE with your actual form submission URL in src/components/service-contact-form.tsx");
            setStatus('Errore: Endpoint del form non configurato.');
            // Simulate submission for local testing without endpoint
            // setTimeout(() => setStatus('Messaggio inviato (simulato)!'), 1000);
            return;
        }

        try {
            const response = await fetch(formActionUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('Messaggio inviato con successo!');
                (event.target as HTMLFormElement).reset(); // Clear form
            } else {
                // Handle server errors (e.g., response.json() might contain details)
                setStatus('Errore durante l\'invio. Riprova più tardi.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('Errore di rete durante l\'invio.');
        }
    }

    return (
        <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">{formTitle}</h2>
            <p className="text-muted-foreground md:text-lg mb-6 text-center">
                {formDescription}
            </p>
            <form onSubmit={handleSubmit} action={formActionUrl} method="POST" className="space-y-4">
                {/* Hidden field for service context */}
                <input type="hidden" name="service_page" value={serviceName} />

                <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" name="name" type="text" placeholder="Il tuo nome" required className="mt-1" />
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="latua@email.com" required className="mt-1" />
                </div>

                <div>
                    <Label htmlFor="phone">Telefono (Opzionale)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Il tuo numero di telefono" className="mt-1" />
                </div>

                <div>
                    <Label htmlFor="message">Messaggio</Label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder={`Descrivi brevemente le tue esigenze per ${serviceName}...`}
                        required
                        className="mt-1"
                        rows={5}
                    />
                </div>

                <div className="text-center">
                    <Button type="submit" size="lg" disabled={status.startsWith('Invio') || status.includes('successo')}>
                        {status.startsWith('Invio') ? 'Invio...' : submitButtonText}
                    </Button>
                </div>
                {status && (
                    <p className={`mt-4 text-center text-sm ${status.includes('Errore') ? 'text-red-600' : 'text-green-600'}`}>
                        {status}
                    </p>
                )}
                <p className="text-xs text-center text-muted-foreground mt-4">
                    Configura l'endpoint del form in <code>src/components/service-contact-form.tsx</code> per abilitare l'invio.
                </p>
            </form>
        </div>
    );
} 