import Link from 'next/link'

export type UrgencyVariant = 'countdown' | 'slots' | 'clients' | 'none'

interface UrgencyBannerProps {
    variant: UrgencyVariant
    whatsappLink: string
    daysLeft?: number
    hoursLeft?: number
}

export function UrgencyBanner({ variant, whatsappLink, daysLeft = 0, hoursLeft = 0 }: UrgencyBannerProps) {
    if (variant === 'none') return null

    const renderContent = () => {
        switch (variant) {
            case 'countdown':
                return (
                    <>
                        <span className="hidden sm:inline">⚡ Offerta limitata:</span>
                        <span className="font-bold">Landing Page a 347€</span>
                        <span className="text-amber-800" aria-hidden="true">|</span>
                        <span>Scade tra {daysLeft}g {hoursLeft}h</span>
                    </>
                )
            case 'slots':
                return (
                    <>
                        <span className="hidden sm:inline">🔥 Alta richiesta:</span>
                        <span className="font-bold">Solo 3 slot disponibili</span>
                        <span className="text-amber-800" aria-hidden="true">|</span>
                        <span>questa settimana</span>
                    </>
                )
            case 'clients':
                return (
                    <>
                        <span className="hidden sm:inline">⚡ Ultimi posti:</span>
                        <span className="font-bold">5 clienti nelle prossime 48h</span>
                        <span className="text-amber-800" aria-hidden="true">|</span>
                        <span>poi chiudo le richieste</span>
                    </>
                )
            default:
                return null
        }
    }

    return (
        <div className="bg-[#FFBC11] text-zinc-950 py-2 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm font-medium">
                {renderContent()}
                <Link
                    href={whatsappLink}
                    className="ml-2 bg-zinc-950 text-[#FFBC11] px-3 py-1 rounded-full text-xs font-bold hover:bg-zinc-900 transition-colors"
                    aria-label="Prenota il tuo posto su WhatsApp"
                >
                    Prenota Ora →
                </Link>
            </div>
        </div>
    )
}

export function UrgencyReminder({ variant, daysLeft = 0, hoursLeft = 0 }: Omit<UrgencyBannerProps, 'whatsappLink'>) {
    if (variant === 'none') return null

    const renderContent = () => {
        switch (variant) {
            case 'countdown':
                return (
                    <>
                        Solo <span className="text-white font-semibold">{daysLeft} giorni</span> e <span className="text-white font-semibold">{hoursLeft} ore</span> rimaste per l'offerta a 347€
                    </>
                )
            case 'slots':
                return (
                    <>
                        Solo <span className="text-white font-semibold">3 slot</span> rimasti questa settimana
                    </>
                )
            case 'clients':
                return (
                    <>
                        Accetto solo <span className="text-white font-semibold">5 clienti</span> nelle prossime 48 ore
                    </>
                )
            default:
                return null
        }
    }

    return (
        <div className="inline-flex items-center gap-2 bg-zinc-900/80 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-sm text-zinc-400">
                {renderContent()}
            </span>
        </div>
    )
}
