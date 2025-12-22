import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] max-w-2xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
        Informativa sulla Privacy
      </h1>

      <article className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground">
        <p>
          La presente informativa descrive le modalità di trattamento dei dati
          personali degli utenti che interagiscono con il form di contatto
          presente su questo sito web, in conformità al Regolamento UE 2016/679
          (GDPR).
        </p>

        <h2>Titolare del Trattamento</h2>
        <p>
          Il Titolare del trattamento dei dati personali è Manuel De Ceglie,
          contattabile all&apos;indirizzo email{" "}
          <a href="mailto:info@manueldeceglie.it">info@manueldeceglie.it</a>.
        </p>

        <h2>Dati Personali Raccolti</h2>
        <p>
          Attraverso il modulo di contatto presente sul sito, raccogliamo i
          seguenti dati personali forniti volontariamente dall&apos;utente:
        </p>
        <ul>
          <li>Nome</li>
          <li>Indirizzo email</li>
          <li>Numero di telefono (opzionale)</li>
          <li>
            Contesto del servizio richiesto (es. &quot;Homepage Generale&quot;,
            &quot;Realizzazione Siti Web&quot;, ecc.)
          </li>
          <li>Contenuto del messaggio</li>
        </ul>

        <h2>Finalità del Trattamento</h2>
        <p>
          I dati personali raccolti sono trattati esclusivamente per le seguenti
          finalità:
        </p>
        <ul>
          <li>
            Rispondere alle richieste di informazioni, preventivi o contatti
            inviate dall&apos;utente tramite il modulo.
          </li>
          <li>
            Gestire la comunicazione relativa alla richiesta dell&apos;utente.
          </li>
        </ul>

        <h2>Base Giuridica del Trattamento</h2>
        <p>
          La base giuridica del trattamento è il consenso esplicito
          dell&apos;utente, fornito tramite l&apos;invio volontario del modulo
          di contatto (Art. 6, par. 1, lett. a) GDPR).
        </p>

        <h2>Modalità di Trattamento e Servizi Terzi (Formcarry)</h2>
        <p>
          I dati sono trattati con strumenti informatici. Per la gestione
          tecnica dell&apos;invio e della ricezione dei messaggi tramite il form
          di contatto, ci avvaliamo del servizio di terze parti{" "}
          <a
            href="https://formcarry.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Formcarry
          </a>
          . Quando invii il modulo, i dati vengono trasmessi ai server di
          Formcarry per essere processati e recapitati al Titolare. Formcarry
          agisce come responsabile del trattamento limitatamente agli aspetti
          tecnici della trasmissione. Ti invitiamo a consultare la{" "}
          <a
            href="https://formcarry.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy di Formcarry
          </a>{" "}
          per maggiori dettagli su come trattano i dati. I dati non saranno
          diffusi né comunicati a terzi al di fuori di quanto strettamente
          necessario per la gestione tecnica dell&apos;invio tramite Formcarry.
        </p>

        <h2>Periodo di Conservazione</h2>
        <p>
          I dati saranno conservati per il tempo strettamente necessario a
          rispondere alla richiesta dell&apos;utente e per eventuali successive
          comunicazioni correlate, salvo diverse disposizioni di legge.
        </p>

        <h2>Diritti dell&apos;Interessato</h2>
        <p>
          In qualità di interessato, hai il diritto di accedere ai tuoi dati,
          chiederne la rettifica, la cancellazione, la limitazione del
          trattamento, opporti al trattamento e richiedere la portabilità dei
          dati, scrivendo all&apos;indirizzo email del Titolare:{" "}
          <a href="mailto:info@manueldeceglie.it">info@manueldeceglie.it</a>.
        </p>

        <h2>Modifiche all&apos;Informativa</h2>
        <p>
          La presente informativa potrebbe essere soggetta a modifiche. Ogni
          aggiornamento sarà pubblicato su questa pagina.
        </p>

        <p>
          <i>Ultimo aggiornamento: 2 Maggio 2025</i>
        </p>
      </article>
    </main>
  );
}
