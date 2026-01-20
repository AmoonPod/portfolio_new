'use client'

import { useState, useEffect } from 'react'
import { sitiWebDataset } from '@/data/local-pages/siti-web-dataset' // Importa i dati iniziali
import { LocalPageData } from '@/data/local-pages/types'
import {
    Save, Plus, Trash2, Search, MapPin,
    Layout, Globe, FileText, Activity, Heart, HelpCircle, AlertTriangle
} from 'lucide-react'

// Shadcn Components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { saveDatasetToDisk } from '../actions/cms-actions'
import { toast } from 'sonner'

// --- TEMPLATE VUOTO PER NUOVE CITTÀ ---
const EMPTY_CITY: LocalPageData = {
    slug: 'nuova-citta',
    cityName: 'Nuova Città',
    province: 'Reggio Emilia',
    region: 'Emilia-Romagna',
    population: 0,
    active: false, // New cities start as inactive
    serviceSlug: 'siti-web',
    serviceName: 'Siti Web',
    offers: [],
    seo: { title: '', description: '', canonical: '', keywords: [], h1: '' },
    hero: { h1: '', sub: '', ctaText: 'Contattami', ctaHref: '#contatti', trustSignal: '' },
    diagnostica: { badge: '', title: '', problems: [], solutions: [] },
    goodInvestment: { title: '', titleHighlight: '', subtitle: '', cards: [] },
    faq: []
}

export default function EditCMSPage() {
    // Auth State
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [authError, setAuthError] = useState('')

    // Data State
    const [dataset, setDataset] = useState<LocalPageData[]>([])
    const [selectedSlug, setSelectedSlug] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

    // Carica i dati all'avvio
    useEffect(() => {
        setDataset(sitiWebDataset)
        if (sitiWebDataset.length > 0) setSelectedSlug(sitiWebDataset[0].slug)
    }, [])

    const activeData = dataset.find(d => d.slug === selectedSlug)

    // --- GESTIONE LOGIN ---
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        const correctPassword = process.env.NEXT_PUBLIC_CMS_PASSWORD
        if (!correctPassword) { setAuthError('ENV non configurata'); return }
        if (password === correctPassword) { setIsAuthenticated(true) }
        else { setAuthError('Password errata'); setPassword('') }
    }

    // --- GESTIONE CRUD ---
    const handleSave = async () => {
        setIsSaving(true)
        const res = await saveDatasetToDisk(dataset)
        setIsSaving(false)
        if (res.success) {
            setHasUnsavedChanges(false)
            toast.success("Salvato!", { description: "Il dataset è stato aggiornato su disco." })
        } else {
            toast.error("Errore", { description: res.message })
        }
    }

    const handleCreate = () => {
        const newCity = { ...EMPTY_CITY, slug: `nuova-citta-${Date.now()}` }
        setDataset([...dataset, newCity])
        setSelectedSlug(newCity.slug)
        setHasUnsavedChanges(true)
    }

    const handleDelete = () => {
        if (!selectedSlug) return
        const newDataset = dataset.filter(d => d.slug !== selectedSlug)
        setDataset(newDataset)
        setSelectedSlug(newDataset.length > 0 ? newDataset[0].slug : null)
        setHasUnsavedChanges(true)
    }

    // --- GESTIONE CAMPI (Deep Update) ---
    const updateField = (path: string, value: any) => {
        if (!selectedSlug) return

        setDataset(prev => prev.map(item => {
            if (item.slug !== selectedSlug) return item

            // Logica per aggiornare oggetti annidati (es. "seo.title")
            const newItem = JSON.parse(JSON.stringify(item)) // Deep clone brutale ma efficace
            const keys = path.split('.')
            let current = newItem

            for (let i = 0; i < keys.length - 1; i++) {
                if (!current[keys[i]]) current[keys[i]] = {} // Crea se non esiste
                current = current[keys[i]]
            }
            current[keys[keys.length - 1]] = value

            return newItem
        }))
        setHasUnsavedChanges(true)
    }

    // --- ARRAY EDITORS ---
    const updateArrayItem = (path: string, index: number, value: any) => {
        if (!activeData) return
        // @ts-ignore - Accesso dinamico complesso
        const list = path.split('.').reduce((o, i) => o[i], activeData) as any[]
        const newList = [...list]
        newList[index] = value
        updateField(path, newList)
    }

    const addToArray = (path: string, emptyValue: any) => {
        if (!activeData) return
        // Estrarre l'array in modo type-safe, gestendo array mancanti o tipi non array
        const list = path
            .split('.')
            .reduce((o: any, i: string) => (o && typeof o === 'object' ? o[i] : undefined), activeData);

        const validatedList = Array.isArray(list) ? list : [];
        updateField(path, [...validatedList, emptyValue]);
    }

    const removeFromArray = (path: string, index: number) => {
        if (!activeData) return
        // @ts-ignore
        const list = path.split('.').reduce((o, i) => o[i], activeData) as any[]
        updateField(path, list.filter((_, i) => i !== index))
    }


    // --- UI LOGIN ---
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background px-4">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl">CMS Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <Label>Password</Label>
                                <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            {authError && <p className="text-sm text-destructive">{authError}</p>}
                            <Button type="submit" className="w-full">Entra</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }

    // --- UI EDITOR ---
    return (
        <div className="min-h-screen bg-background flex flex-col h-screen overflow-hidden">

            {/* HEADER */}
            <header className="border-b bg-card px-6 py-3 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg"><Layout className="text-primary w-5 h-5" /></div>
                    <div>
                        <h1 className="font-bold text-lg leading-none">CMS Editor</h1>
                        <p className="text-xs text-muted-foreground">{dataset.length} Landing Pages</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {hasUnsavedChanges && <span className="text-xs text-amber-500 font-medium animate-pulse">Modifiche non salvate</span>}
                    <Button onClick={handleSave} disabled={isSaving} className="gap-2">
                        <Save className="w-4 h-4" />
                        {isSaving ? 'Salvataggio...' : 'Salva su Disco'}
                    </Button>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">

                {/* SIDEBAR: LISTA CITTÀ */}
                <aside className="w-80 border-r bg-muted/10 flex flex-col shrink-0">
                    <div className="p-4 border-b space-y-3">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Cerca città..."
                                className="pl-9"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button onClick={handleCreate} variant="outline" className="w-full gap-2 border-dashed">
                            <Plus className="w-4 h-4" /> Nuova Città
                        </Button>
                    </div>
                    <ScrollArea className="flex-1">
                        <div className="p-3 space-y-1">
                            {dataset
                                .filter(d => d.cityName.toLowerCase().includes(searchTerm.toLowerCase()))
                                .map(page => (
                                    <button
                                        key={page.slug}
                                        onClick={() => setSelectedSlug(page.slug)}
                                        className={`w-full text-left px-3 py-3 rounded-md text-sm font-medium transition-all flex items-center justify-between group ${selectedSlug === page.slug
                                            ? 'bg-primary text-primary-foreground shadow-sm'
                                            : 'hover:bg-muted text-foreground'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 min-w-0 flex-1">
                                            <div
                                                className={`shrink-0 w-2 h-2 rounded-full ${page.active !== false
                                                    ? 'bg-green-500'
                                                    : 'bg-gray-400'
                                                    }`}
                                                title={page.active !== false ? 'Attiva' : 'Disattivata'}
                                            />
                                            <span className="truncate">{page.cityName}</span>
                                        </div>
                                        {selectedSlug === page.slug && <MapPin className="w-3 h-3 opacity-50 shrink-0 ml-2" />}
                                    </button>
                                ))}
                        </div>
                    </ScrollArea>
                </aside>

                {/* MAIN: EDITOR FORM */}
                <main className="flex-1 flex flex-col min-w-0 bg-background">
                    {activeData ? (
                        <div className="flex flex-col h-full">
                            {/* Toolbar Città */}
                            <div className="border-b px-8 py-4 flex items-center justify-between shrink-0 bg-card">
                                <div>
                                    <h2 className="text-2xl font-black tracking-tight">{activeData.cityName}</h2>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono mt-1">
                                        <span>Slug:</span>
                                        <Input
                                            value={activeData.slug}
                                            onChange={e => updateField('slug', e.target.value)}
                                            className="h-6 w-48 text-xs font-mono"
                                        />
                                    </div>
                                </div>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="destructive" size="sm" className="gap-2">
                                            <Trash2 className="w-4 h-4" /> Elimina
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Sei sicuro?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Stai per eliminare definitivamente {activeData.cityName}. Questa azione non può essere annullata.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Annulla</AlertDialogCancel>
                                            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">Elimina</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>

                            {/* TABS EDITING */}
                            <Tabs defaultValue="generale" className="flex-1 flex flex-col overflow-hidden">
                                <div className="px-8 pt-4 shrink-0">
                                    <TabsList className="grid grid-cols-6 w-full max-w-4xl">
                                        <TabsTrigger value="generale">Generale</TabsTrigger>
                                        <TabsTrigger value="seo">SEO & Meta</TabsTrigger>
                                        <TabsTrigger value="hero">Hero</TabsTrigger>
                                        <TabsTrigger value="diagnostica">Diagnostica</TabsTrigger>
                                        <TabsTrigger value="investment">Investimento</TabsTrigger>
                                        <TabsTrigger value="faq">FAQ</TabsTrigger>
                                    </TabsList>
                                </div>

                                <ScrollArea className="flex-1 p-8">
                                    <div className="max-w-4xl space-y-8 pb-20">

                                        {/* TAB: GENERALE */}
                                        <TabsContent value="generale" className="space-y-6 m-0">
                                            <Card>
                                                <CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="w-5 h-5" /> Info Geografiche</CardTitle></CardHeader>
                                                <CardContent className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label>Nome Città</Label>
                                                        <Input value={activeData.cityName} onChange={e => updateField('cityName', e.target.value)} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label>Provincia</Label>
                                                        <Input value={activeData.province} onChange={e => updateField('province', e.target.value)} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label>Regione</Label>
                                                        <Input value={activeData.region} onChange={e => updateField('region', e.target.value)} />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label>Popolazione</Label>
                                                        <Input type="number" value={activeData.population} onChange={e => updateField('population', parseInt(e.target.value))} />
                                                    </div>
                                                    <div className="space-y-2 flex items-center gap-3 pt-6">
                                                        <input
                                                            type="checkbox"
                                                            id="active"
                                                            checked={activeData.active !== false}
                                                            onChange={e => updateField('active', e.target.checked)}
                                                            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                        />
                                                        <Label htmlFor="active" className="cursor-pointer">
                                                            <span className="font-medium">Pagina Attiva</span>
                                                            <p className="text-xs text-muted-foreground mt-1">
                                                                Se attiva, la pagina sarà indicizzata da Google e accessibile pubblicamente
                                                            </p>
                                                        </Label>
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            <Card>
                                                <CardHeader className="flex flex-row items-center justify-between">
                                                    <CardTitle className="flex items-center gap-2"><Activity className="w-5 h-5" /> Offerte</CardTitle>
                                                    <Button
                                                        size="sm"
                                                        onClick={() => {
                                                            const newOffer = {
                                                                id: `offer-${Date.now()}`,
                                                                title: 'Nuova Offerta',
                                                                description: '',
                                                                price: '490',
                                                                badge: '',
                                                                active: false,
                                                                type: 'landing' as const,
                                                                features: []
                                                            }
                                                            addToArray('offers', newOffer)
                                                        }}
                                                        className="gap-2"
                                                    >
                                                        <Plus className="w-4 h-4" /> Aggiungi Offerta
                                                    </Button>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                    {(!activeData.offers || activeData.offers.length === 0) ? (
                                                        <p className="text-sm text-muted-foreground text-center py-8">
                                                            Nessuna offerta. Clicca "Aggiungi Offerta" per crearne una.
                                                        </p>
                                                    ) : (
                                                        activeData.offers.map((offer, idx) => (
                                                            <Card key={offer.id} className="border-2">
                                                                <CardHeader className="pb-3">
                                                                    <div className="flex items-center justify-between">
                                                                        <div className="flex items-center gap-3">
                                                                            <input
                                                                                type="checkbox"
                                                                                checked={offer.active}
                                                                                onChange={(e) => {
                                                                                    updateArrayItem('offers', idx, { ...offer, active: e.target.checked })
                                                                                }}
                                                                                className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                                            />
                                                                            <CardTitle className="text-lg">
                                                                                {offer.title || `Offerta ${idx + 1}`}
                                                                                {!offer.active && <span className="ml-2 text-xs text-muted-foreground">(Disattivata)</span>}
                                                                            </CardTitle>
                                                                        </div>
                                                                        <AlertDialog>
                                                                            <AlertDialogTrigger asChild>
                                                                                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                                                                                    <Trash2 className="w-4 h-4" />
                                                                                </Button>
                                                                            </AlertDialogTrigger>
                                                                            <AlertDialogContent>
                                                                                <AlertDialogHeader>
                                                                                    <AlertDialogTitle>Eliminare offerta?</AlertDialogTitle>
                                                                                    <AlertDialogDescription>
                                                                                        Questa azione non può essere annullata.
                                                                                    </AlertDialogDescription>
                                                                                </AlertDialogHeader>
                                                                                <AlertDialogFooter>
                                                                                    <AlertDialogCancel>Annulla</AlertDialogCancel>
                                                                                    <AlertDialogAction
                                                                                        onClick={() => removeFromArray('offers', idx)}
                                                                                        className="bg-destructive text-destructive-foreground"
                                                                                    >
                                                                                        Elimina
                                                                                    </AlertDialogAction>
                                                                                </AlertDialogFooter>
                                                                            </AlertDialogContent>
                                                                        </AlertDialog>
                                                                    </div>
                                                                </CardHeader>
                                                                <CardContent className="space-y-4">
                                                                    <div className="grid grid-cols-2 gap-4">
                                                                        <div className="space-y-2">
                                                                            <Label>Titolo</Label>
                                                                            <Input
                                                                                value={offer.title}
                                                                                onChange={e => updateArrayItem('offers', idx, { ...offer, title: e.target.value })}
                                                                            />
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                            <Label>Prezzo (solo numero, es: 490)</Label>
                                                                            <Input
                                                                                value={offer.price}
                                                                                onChange={e => updateArrayItem('offers', idx, { ...offer, price: e.target.value })}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="grid grid-cols-2 gap-4">
                                                                        <div className="space-y-2">
                                                                            <Label>Tipo</Label>
                                                                            <select
                                                                                value={offer.type}
                                                                                onChange={e => updateArrayItem('offers', idx, { ...offer, type: e.target.value as 'landing' | 'website' })}
                                                                                className="w-full px-3 py-2 rounded-lg border border-border bg-background"
                                                                            >
                                                                                <option value="landing">Landing Page</option>
                                                                                <option value="website">Sito Web</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                            <Label>Badge (opzionale)</Label>
                                                                            <Input
                                                                                value={offer.badge || ''}
                                                                                onChange={e => updateArrayItem('offers', idx, { ...offer, badge: e.target.value })}
                                                                                placeholder="es: Promo Montagna"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>Descrizione</Label>
                                                                        <Textarea
                                                                            value={offer.description}
                                                                            onChange={e => updateArrayItem('offers', idx, { ...offer, description: e.target.value })}
                                                                            rows={2}
                                                                        />
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <Label>Features (una per riga, prime 3 mostrate nel popup)</Label>
                                                                        <Textarea
                                                                            value={offer.features.join('\n')}
                                                                            onChange={e => updateArrayItem('offers', idx, { ...offer, features: e.target.value.split('\n').filter(f => f.trim()) })}
                                                                            rows={8}
                                                                            placeholder="Inserisci una feature per riga"
                                                                        />
                                                                    </div>
                                                                </CardContent>
                                                            </Card>
                                                        ))
                                                    )}
                                                </CardContent>
                                            </Card>
                                        </TabsContent>

                                        {/* TAB: SEO */}
                                        <TabsContent value="seo" className="space-y-6 m-0">
                                            <Card>
                                                <CardHeader><CardTitle className="flex items-center gap-2"><Globe className="w-5 h-5" /> SEO Settings</CardTitle></CardHeader>
                                                <CardContent className="space-y-4">
                                                    <div className="space-y-2"><Label>Meta Title</Label><Input value={activeData.seo.title} onChange={e => updateField('seo.title', e.target.value)} /></div>
                                                    <div className="space-y-2"><Label>Meta Description</Label><Textarea value={activeData.seo.description} onChange={e => updateField('seo.description', e.target.value)} /></div>
                                                    <div className="space-y-2"><Label>Canonical URL</Label><Input value={activeData.seo.canonical} onChange={e => updateField('seo.canonical', e.target.value)} /></div>
                                                    <div className="space-y-2">
                                                        <Label>Keywords (separate da virgola)</Label>
                                                        <Input
                                                            value={activeData.seo.keywords?.join(', ')}
                                                            onChange={e => updateField('seo.keywords', e.target.value.split(',').map(s => s.trim()))}
                                                        />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </TabsContent>

                                        {/* TAB: HERO */}
                                        <TabsContent value="hero" className="space-y-6 m-0">
                                            <Card>
                                                <CardHeader><CardTitle className="flex items-center gap-2"><Layout className="w-5 h-5" /> Hero Section</CardTitle></CardHeader>
                                                <CardContent className="space-y-4">
                                                    <div className="space-y-2"><Label>H1 Title</Label><Input value={activeData.hero.h1} onChange={e => updateField('hero.h1', e.target.value)} /></div>
                                                    <div className="space-y-2"><Label>Sottotitolo</Label><Textarea value={activeData.hero.sub} onChange={e => updateField('hero.sub', e.target.value)} /></div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2"><Label>CTA Text</Label><Input value={activeData.hero.ctaText} onChange={e => updateField('hero.ctaText', e.target.value)} /></div>
                                                        <div className="space-y-2"><Label>Trust Signal</Label><Input value={activeData.hero.trustSignal} onChange={e => updateField('hero.trustSignal', e.target.value)} /></div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </TabsContent>

                                        {/* TAB: DIAGNOSTICA */}
                                        <TabsContent value="diagnostica" className="space-y-6 m-0">
                                            <Card>
                                                <CardHeader><CardTitle className="flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> Diagnostica & Problemi</CardTitle></CardHeader>
                                                <CardContent className="space-y-6">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2"><Label>Badge</Label><Input value={activeData.diagnostica?.badge} onChange={e => updateField('diagnostica.badge', e.target.value)} /></div>
                                                        <div className="space-y-2"><Label>Titolo</Label><Input value={activeData.diagnostica?.title as string} onChange={e => updateField('diagnostica.title', e.target.value)} /></div>
                                                    </div>

                                                    <Separator />

                                                    <div className="space-y-3">
                                                        <Label>Lista Problemi (Pain Points)</Label>
                                                        {activeData.diagnostica?.problems.map((prob, i) => (
                                                            <div key={i} className="flex gap-2">
                                                                <Input value={prob} onChange={e => updateArrayItem('diagnostica.problems', i, e.target.value)} />
                                                                <Button variant="ghost" size="icon" onClick={() => removeFromArray('diagnostica.problems', i)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                                                            </div>
                                                        ))}
                                                        <Button variant="outline" size="sm" onClick={() => addToArray('diagnostica.problems', '')}><Plus className="w-4 h-4 mr-2" /> Aggiungi Problema</Button>
                                                    </div>

                                                    <Separator />

                                                    <div className="space-y-3">
                                                        <Label className="text-green-600">Lista Soluzioni</Label>
                                                        {activeData.diagnostica?.solutions.map((sol, i) => (
                                                            <div key={i} className="flex gap-2">
                                                                <Input
                                                                    value={typeof sol === 'string' ? sol : sol.text}
                                                                    onChange={e =>
                                                                        updateArrayItem(
                                                                            'diagnostica.solutions',
                                                                            i,
                                                                            typeof sol === 'string' ? e.target.value : { ...sol, text: e.target.value }
                                                                        )
                                                                    }
                                                                />
                                                                <Button variant="ghost" size="icon" onClick={() => removeFromArray('diagnostica.solutions', i)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                                                            </div>
                                                        ))}
                                                        <Button variant="outline" size="sm" onClick={() => addToArray('diagnostica.solutions', '')}><Plus className="w-4 h-4 mr-2" /> Aggiungi Soluzione</Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </TabsContent>

                                        {/* TAB: INVESTMENT */}
                                        <TabsContent value="investment" className="space-y-6 m-0">
                                            <Card>
                                                <CardHeader><CardTitle className="flex items-center gap-2"><Heart className="w-5 h-5" /> Buon Investimento</CardTitle></CardHeader>
                                                <CardContent className="space-y-6">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2"><Label>Titolo</Label><Input value={activeData.goodInvestment?.title} onChange={e => updateField('goodInvestment.title', e.target.value)} /></div>
                                                        <div className="space-y-2"><Label>Highlight</Label><Input value={activeData.goodInvestment?.titleHighlight} onChange={e => updateField('goodInvestment.titleHighlight', e.target.value)} /></div>
                                                    </div>
                                                    <div className="space-y-2"><Label>Sottotitolo</Label><Textarea value={activeData.goodInvestment?.subtitle} onChange={e => updateField('goodInvestment.subtitle', e.target.value)} /></div>

                                                    <Separator />
                                                    <Label>Cards (3 Cards)</Label>
                                                    <div className="grid gap-6">
                                                        {activeData.goodInvestment?.cards.map((card, i) => (
                                                            <Card key={i} className="bg-muted/50">
                                                                <CardContent className="p-4 space-y-3">
                                                                    <div className="flex justify-between items-center"><Label className="text-xs uppercase text-muted-foreground">Card {i + 1}</Label></div>
                                                                    <Input placeholder="Titolo" value={card.title} onChange={e => {
                                                                        const newCards = [...activeData.goodInvestment!.cards];
                                                                        newCards[i].title = e.target.value;
                                                                        updateField('goodInvestment.cards', newCards);
                                                                    }} />
                                                                    <Textarea placeholder="Descrizione 1" value={card.description} onChange={e => {
                                                                        const newCards = [...activeData.goodInvestment!.cards];
                                                                        newCards[i].description = e.target.value;
                                                                        updateField('goodInvestment.cards', newCards);
                                                                    }} />
                                                                    <Textarea placeholder="Descrizione 2" value={card.description2} onChange={e => {
                                                                        const newCards = [...activeData.goodInvestment!.cards];
                                                                        newCards[i].description2 = e.target.value;
                                                                        updateField('goodInvestment.cards', newCards);
                                                                    }} />
                                                                </CardContent>
                                                            </Card>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </TabsContent>

                                        {/* TAB: FAQ */}
                                        <TabsContent value="faq" className="space-y-6 m-0">
                                            <Card>
                                                <CardHeader><CardTitle className="flex items-center gap-2"><HelpCircle className="w-5 h-5" /> Domande Frequenti</CardTitle></CardHeader>
                                                <CardContent className="space-y-6">
                                                    {activeData.faq?.map((faqItem, i) => (
                                                        <div key={i} className="flex gap-4 items-start border-b pb-4 last:border-0 last:pb-0">
                                                            <div className="bg-muted w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold shrink-0">{i + 1}</div>
                                                            <div className="flex-1 space-y-2">
                                                                <Input
                                                                    placeholder="Domanda"
                                                                    value={faqItem.q}
                                                                    onChange={e => {
                                                                        const newFaq = [...activeData.faq];
                                                                        newFaq[i].q = e.target.value;
                                                                        updateField('faq', newFaq);
                                                                    }}
                                                                    className="font-bold"
                                                                />
                                                                <Textarea
                                                                    placeholder="Risposta"
                                                                    value={faqItem.a}
                                                                    onChange={e => {
                                                                        const newFaq = [...activeData.faq];
                                                                        newFaq[i].a = e.target.value;
                                                                        updateField('faq', newFaq);
                                                                    }}
                                                                />
                                                            </div>
                                                            <Button variant="ghost" size="icon" onClick={() => removeFromArray('faq', i)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                                                        </div>
                                                    ))}
                                                    <Button variant="outline" className="w-full" onClick={() => addToArray('faq', { q: '', a: '' })}><Plus className="w-4 h-4 mr-2" /> Aggiungi FAQ</Button>
                                                </CardContent>
                                            </Card>
                                        </TabsContent>

                                    </div>
                                </ScrollArea>
                            </Tabs>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-muted-foreground">
                            Seleziona una città dalla barra laterale o creane una nuova.
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}
