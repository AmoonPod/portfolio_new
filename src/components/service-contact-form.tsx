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
    // Form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); // Optional phone state
    const [message, setMessage] = useState('');

    // Submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Formcarry endpoint
    const formCarryEndpoint = "https://formcarry.com/s/fC-nAghgngU";

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        event.stopPropagation();

        setIsSubmitting(true);
        setErrorMessage('');
        setSubmissionStatus('idle');

        // Basic validation (can be enhanced)
        if (!name || !email || !message) {
            setErrorMessage('Nome, Email e Messaggio sono obbligatori.');
            setSubmissionStatus('error');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch(formCarryEndpoint, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                // Include serviceName and optional phone
                body: JSON.stringify({ name, email, message, phone, serviceName })
            });
            const data = await response.json();

            if (data.code === 200) {
                // Success
                setSubmissionStatus('success');
                // Clear form
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            } else if (data.code === 422) {
                // Validation error from Formcarry
                setErrorMessage(data.message || 'Errore di validazione.');
                setSubmissionStatus('error');
            } else {
                // Other error from Formcarry
                setErrorMessage(data.message || 'Si è verificato un errore.');
                setSubmissionStatus('error');
            }
        } catch (error: any) {
            // Network or other fetch error
            setErrorMessage(error.message || 'Errore di rete o richiesta fallita.');
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">{formTitle}</h2>
            <p className="text-muted-foreground md:text-lg mb-6 text-center">
                {formDescription}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* No action/method needed when using fetch */}
                {/* <input type="hidden" name="service_page" value={serviceName} /> REMOVED - sent via JS */}

                <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Il tuo nome"
                        required
                        className="mt-1"
                    />
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="latua@email.com"
                        required
                        className="mt-1"
                    />
                </div>

                <div>
                    <Label htmlFor="phone">Telefono (Opzionale)</Label>
                    <Input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        placeholder="Il tuo numero di telefono"
                        className="mt-1"
                    />
                </div>

                <div>
                    <Label htmlFor="message">Messaggio</Label>
                    <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={`Descrivi brevemente le tue esigenze per ${serviceName}...`}
                        required
                        className="mt-1"
                        rows={5}
                    />
                </div>

                <div className="text-center">
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? 'Invio...' : submitButtonText}
                    </Button>
                </div>

                {/* Submission Status Messages */}
                {submissionStatus === 'success' && (
                    <p className="mt-4 text-center text-sm text-green-600">
                        Messaggio inviato con successo! Grazie.
                    </p>
                )}
                {submissionStatus === 'error' && (
                    <p className="mt-4 text-center text-sm text-red-600">
                        Errore: {errorMessage}
                    </p>
                )}
                {/* Remove old status/config message */}
                {/* <p className="text-xs text-center text-muted-foreground mt-4">
                    Configura l'endpoint del form in <code>src/components/service-contact-form.tsx</code> per abilitare l'invio.
                </p> */}
            </form>
        </div>
    );
} 