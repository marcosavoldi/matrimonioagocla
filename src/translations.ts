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
    // Allergy Modal
    allergiesQuestion: string;
    yes: string;
    no: string;
    modalTitle: string;
    intolerancesTitle: string;
    allergiesTitle: string;
    confirm: string;
    // Intolerances
    lactose: string;
    gluten: string;
    sulfites: string;
    histamine: string;
    // Allergies
    treeNuts: string;
    peanuts: string;
    eggs: string;
    fish: string;
    shellfish: string;
    other: string;
    specify: string;
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
        whereWhen: 'Dove & Quando 📍',
        // Allergy Modal
        allergiesQuestion: 'Hai intolleranze o allergie?',
        yes: 'Sì',
        no: 'No',
        modalTitle: 'Seleziona le tue esigenze',
        intolerancesTitle: 'Intolleranze',
        allergiesTitle: 'Allergie',
        confirm: 'Conferma',
        lactose: 'Lattosio',
        gluten: 'Glutine',
        sulfites: 'Solfiti',
        histamine: 'Istamina',
        treeNuts: 'Frutta a guscio',
        peanuts: 'Arachidi',
        eggs: 'Uova',
        fish: 'Pesce',
        shellfish: 'Crostacei',
        other: 'Altro (specificare)',
        specify: 'Specificare...'
    },
    sq: {
        heroDate: '29 Gusht 2026',
        scrollDown: '',
        introText: 'Në pritje të ditës sonë të madhe, kemi krijuar këtë faqe ku mund të gjeni të gjitha informacionet e nevojshme.',
        confirmBy: 'Ju lutemi të konfirmoni praninë tuaj deri më 24 Maj 2026 duke plotësuar formularin në fund të faqes, në mënyrë që të organizojmë ditën sa më mirë.',
        importantTitle: 'Informacion i Rëndësishëm ⚠️',
        noKidsPolicy: 'Fëmijët tuaj janë shumë të rëndësishëm për ne, por për këtë ditë nuk parashikohet animacion i dedikuar për të vegjlit. Nëse është e mundur, ju ftojmë t\'i lini ata te gjyshërit, kujdestaret ose miqtë, që të mund të relaksoheni dhe ta shijoni festën pa mendime... duke ngritur dolli së bashku me ne!',
        giftTitle: 'Dhurata 🎁',
        giftText: 'Ndërsa zemrat tona janë tashmë plot dashuri.. portofoli ynë (që qan) shpreson në një ndihmë të vogël për ditën e madhe dhe më tej!',
        ibanLabel: 'IBAN',
        holderLabel: 'PËRFITUESI',
        ceremonyTitle: 'Ceremonia 💒',
        receptionTitle: 'Pritja 🥂',
        ceremonyPlace: 'Kisha Famullitare e San Biagio',
        receptionPlace: 'Villa i Tramonti, Saludecio',
        mapsButton: 'Shiko në Hartë 📍',
        follow: 'Në vazhdim',
        rsvpTitle: 'Konfirmo Praninë ✨',
        rsvpSuccessTitle: 'Faleminderit për konfirmimin! ❤️',
        rsvpSuccessText: 'Mezi presim të festojmë me ty.',
        rsvpAnother: 'Dërgo një përgjigje tjetër',
        name: 'Emri',
        surname: 'Mbiemri',
        intolerances: 'Intoleranca ose Alergji',
        notes: 'Shënime ose mesazhe të tjera',
        submit: 'Konfirmo',
        submitting: 'Duke dërguar...',
        error: 'Ndodhi një gabim. Ju lutemi provoni përsëri.',
        contactsTitle: 'Kontaktet 📞',
        contactsText: 'Për çdo paqartësi ose informacion:',
        whereWhen: 'Ku & Kur 📍',
        // Allergy Modal
        allergiesQuestion: 'A ke intolerancë ose alergji?',
        yes: 'Po',
        no: 'Jo',
        modalTitle: 'Zgjidh nevojat e tua',
        intolerancesTitle: 'Intolerancat',
        allergiesTitle: 'Alergjitë',
        confirm: 'Konfirmo',
        lactose: 'Laktozë',
        gluten: 'Gluten',
        sulfites: 'Sulfite',
        histamine: 'Histaminë',
        treeNuts: 'Fruta të thata (Arrore)',
        peanuts: 'Kikirikë',
        eggs: 'Vezë',
        fish: 'Peshk',
        shellfish: 'Krustace',
        other: 'Tjetër (specifikoni)',
        specify: 'Specifikoni...'
    }
};
