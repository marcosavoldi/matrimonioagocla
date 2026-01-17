export type Language = 'it' | 'sq';

export interface Translation {
    heroDate: string;
    scrollDown: string;
    introText: string;
    confirmBy: string;
    importantTitle: string;
    noKidsPolicy: string;
    giftTitle: string;
    giftText: string;
    ibanLabel: string;
    holderLabel: string;
    ceremonyTitle: string;
    receptionTitle: string;
    ceremonyPlace: string;
    receptionPlace: string;
    mapsButton: string;
    follow: string;
    rsvpTitle: string;
    rsvpSuccessTitle: string;
    rsvpSuccessText: string;
    rsvpAnother: string;
    name: string;
    surname: string;
    intolerances: string;
    notes: string;
    submit: string;
    submitting: string;
    error: string;
    contactsTitle: string;
    contactsText: string;
    whereWhen: string;
}

export const translations: Record<Language, Translation> = {
    it: {
        heroDate: '29 Agosto 2026',
        scrollDown: '',
        introText: 'In attesa del nostro grande giorno, abbiamo creato questo sito dove puoi trovare tutte le informazioni necessarie.',
        confirmBy: 'Ti chiediamo di confermare la tua presenza entro il 24 Maggio 2026 compilando il form in fondo alla pagina, così da poter organizzare al meglio la giornata.',
        importantTitle: 'Informazione Importante ⚠️',
        noKidsPolicy: 'I vostri bambini sono per noi importantissimi, ma per questa giornata non sarà prevista animazione dedicata ai più piccoli. Se possibile, vi invitiamo ad affidarli a nonni, babysitter o amici, per potervi rilassare e vivere la festa senza pensieri… brindando insieme a noi!',
        giftTitle: 'Regalo 🎁',
        giftText: 'Mentre i nostri cuori sono già colmi d’amore.. il nostro portafoglio (che piange) spera in un piccolo rinforzo per il grande giorno e oltre!',
        ibanLabel: 'IBAN',
        holderLabel: 'INTESTAZIONE',
        ceremonyTitle: 'Cerimonia 💒',
        receptionTitle: 'Ricevimento 🥂',
        ceremonyPlace: 'Chiesa Parrocchiale di San Biagio',
        receptionPlace: 'Villa i Tramonti, Saludecio',
        mapsButton: 'Vedi su Maps 📍',
        follow: 'A seguire',
        rsvpTitle: 'Conferma Presenza ✨',
        rsvpSuccessTitle: 'Grazie per aver confermato! ❤️',
        rsvpSuccessText: 'Non vediamo l\'ora di festeggiare con te.',
        rsvpAnother: 'Invia un\'altra risposta',
        name: 'Nome',
        surname: 'Cognome',
        intolerances: 'Intolleranze o Allergie',
        notes: 'Altre segnalazioni o messaggi',
        submit: 'Conferma',
        submitting: 'Invio in corso...',
        error: 'Si è verificato un errore. Riprova.',
        contactsTitle: 'Contatti 📞',
        contactsText: 'Per qualsiasi dubbio o informazione:',
        whereWhen: 'Dove & Quando 📍'
    },
    sq: {
        heroDate: '29 Gusht 2026',
        scrollDown: '',
        introText: 'Në pritje të ditës sonë të madhe, kemi krijuar këtë faqe ku mund të gjeni të gjitha informacionet e nevojshme.',
        confirmBy: 'Ju lutemi të konfirmoni praninë tuaj deri më 24 Maj 2026 duke plotësuar formularin në fund të faqes, në mënyrë që të organizojmë ditën sa më mirë.',
        importantTitle: 'Informacion i Rëndësishëm ⚠️',
        noKidsPolicy: 'Ne i duam shumë fëmijët tuaj, por duam t\'ju informojmë se nuk do të ketë animacion për të vegjlit. Ju ftojmë t\'i lini ata te gjyshërit, kujdestaret ose miqtë (ku është e mundur) në mënyrë që të shijoni ditën e gjatë pa mendime dhe të pini ndonjë gotë më shumë.. që me siguri nuk do të mungojë!',
        giftTitle: 'Dhurata 🎁',
        giftText: 'Ndërsa zemrat tona janë tashmë plot dashuri.. portofoli ynë (që po qan) shpreson në një përforcim të vogël për ditën e madhe dhe më tej!',
        ibanLabel: 'IBAN',
        holderLabel: 'MBAJTËSI',
        ceremonyTitle: 'Ceremonia 💒',
        receptionTitle: 'Pritja 🥂',
        ceremonyPlace: 'Kisha Famullitare e San Biagio',
        receptionPlace: 'Villa i Tramonti, Saludecio',
        mapsButton: 'Shiko në Hartë 📍',
        follow: 'Në vazhdim',
        rsvpTitle: 'Konfirmo Praninë ✨',
        rsvpSuccessTitle: 'Faleminderit për konfirmimin! ❤️',
        rsvpSuccessText: 'Mezi presim të festojmë me ju.',
        rsvpAnother: 'Dërgo një përgjigje tjetër',
        name: 'Emri',
        surname: 'Mbiemri',
        intolerances: 'Intoleranca ose Alergji',
        notes: 'Njoftime ose mesazhe të tjera',
        submit: 'Konfirmo',
        submitting: 'Duke dërguar...',
        error: 'Ndodhi një gabim. Ju lutemi provoni përsëri.',
        contactsTitle: 'Kontaktet 📞',
        contactsText: 'Për çdo dyshim ose informacion:',
        whereWhen: 'Ku & Kur 📍'
    }
};
