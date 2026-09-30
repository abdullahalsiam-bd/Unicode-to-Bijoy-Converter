var AvroPhonetic = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@subhesadek/avro-phonetic/dist/index.js
  var index_exports = {};
  __export(index_exports, {
    BANGLISH_DICTIONARY: () => BANGLISH_DICTIONARY,
    PATTERNS: () => PATTERNS,
    SORTED_PATTERNS: () => SORTED_PATTERNS,
    isBangla: () => isBangla,
    parse: () => parse,
    toBangla: () => toBangla
  });
  var DEFAULT_ENTRIES = {
    // ── Pronouns (1st person) ──────────────────────────────────────────────────
    ami: "\u0986\u09AE\u09BF",
    amar: "\u0986\u09AE\u09BE\u09B0",
    amake: "\u0986\u09AE\u09BE\u0995\u09C7",
    amra: "\u0986\u09AE\u09B0\u09BE",
    amader: "\u0986\u09AE\u09BE\u09A6\u09C7\u09B0",
    // ── Pronouns (2nd person informal) ─────────────────────────────────────────
    tumi: "\u09A4\u09C1\u09AE\u09BF",
    tomar: "\u09A4\u09CB\u09AE\u09BE\u09B0",
    tomake: "\u09A4\u09CB\u09AE\u09BE\u0995\u09C7",
    tomra: "\u09A4\u09CB\u09AE\u09B0\u09BE",
    tomader: "\u09A4\u09CB\u09AE\u09BE\u09A6\u09C7\u09B0",
    tui: "\u09A4\u09C1\u0987",
    tor: "\u09A4\u09CB\u09B0",
    toke: "\u09A4\u09CB\u0995\u09C7",
    tora: "\u09A4\u09CB\u09B0\u09BE",
    toder: "\u09A4\u09CB\u09A6\u09C7\u09B0",
    // ── Pronouns (2nd person formal) ───────────────────────────────────────────
    apni: "\u0986\u09AA\u09A8\u09BF",
    apnar: "\u0986\u09AA\u09A8\u09BE\u09B0",
    apnara: "\u0986\u09AA\u09A8\u09BE\u09B0\u09BE",
    apnader: "\u0986\u09AA\u09A8\u09BE\u09A6\u09C7\u09B0",
    // ── Pronouns (3rd person) ──────────────────────────────────────────────────
    se: "\u09B8\u09C7",
    tar: "\u09A4\u09BE\u09B0",
    take: "\u09A4\u09BE\u0995\u09C7",
    tara: "\u09A4\u09BE\u09B0\u09BE",
    tader: "\u09A4\u09BE\u09A6\u09C7\u09B0",
    tini: "\u09A4\u09BF\u09A8\u09BF",
    tahar: "\u09A4\u09BE\u09B9\u09BE\u09B0",
    tahara: "\u09A4\u09BE\u09B9\u09BE\u09B0\u09BE",
    o: "\u0993",
    ora: "\u0993\u09B0\u09BE",
    oder: "\u0993\u09A6\u09C7\u09B0",
    // ── Demonstratives / location ──────────────────────────────────────────────
    ei: "\u098F\u0987",
    eta: "\u098F\u099F\u09BE",
    eti: "\u098F\u099F\u09BF",
    era: "\u098F\u09B0\u09BE",
    eder: "\u098F\u09A6\u09C7\u09B0",
    oi: "\u0990",
    ota: "\u0993\u099F\u09BE",
    oti: "\u0993\u099F\u09BF",
    ekhane: "\u098F\u0996\u09BE\u09A8\u09C7",
    okhane: "\u0993\u0996\u09BE\u09A8\u09C7",
    sekhane: "\u09B8\u09C7\u0996\u09BE\u09A8\u09C7",
    ethay: "\u098F\u09A5\u09BE\u09AF\u09BC",
    // ── Verb হওয়া (to be) ─────────────────────────────────────────────────────
    hoy: "\u09B9\u09AF\u09BC",
    hobe: "\u09B9\u09AC\u09C7",
    holo: "\u09B9\u09B2\u09CB",
    hoyeche: "\u09B9\u09AF\u09BC\u09C7\u099B\u09C7",
    hoyechilo: "\u09B9\u09AF\u09BC\u09C7\u099B\u09BF\u09B2",
    hocche: "\u09B9\u099A\u09CD\u099B\u09C7",
    hochilo: "\u09B9\u099A\u09CD\u099B\u09BF\u09B2",
    hoye: "\u09B9\u09AF\u09BC\u09C7",
    // ── Verb থাকা (to be / to stay) ────────────────────────────────────────────
    ache: "\u0986\u099B\u09C7",
    achi: "\u0986\u099B\u09BF",
    acho: "\u0986\u099B\u09CB",
    achen: "\u0986\u099B\u09C7\u09A8",
    achis: "\u0986\u099B\u09BF\u09B8",
    chilo: "\u099B\u09BF\u09B2",
    chilam: "\u099B\u09BF\u09B2\u09BE\u09AE",
    chile: "\u099B\u09BF\u09B2\u09C7",
    chilen: "\u099B\u09BF\u09B2\u09C7\u09A8",
    chilis: "\u099B\u09BF\u09B2\u09BF\u09B8",
    thaki: "\u09A5\u09BE\u0995\u09BF",
    thako: "\u09A5\u09BE\u0995\u09CB",
    thake: "\u09A5\u09BE\u0995\u09C7",
    thaken: "\u09A5\u09BE\u0995\u09C7\u09A8",
    thakbo: "\u09A5\u09BE\u0995\u09AC\u09CB",
    thakbe: "\u09A5\u09BE\u0995\u09AC\u09C7",
    theke: "\u09A5\u09C7\u0995\u09C7",
    // ── Verb যাওয়া (to go) ────────────────────────────────────────────────────
    jay: "\u09AF\u09BE\u09AF\u09BC",
    jai: "\u09AF\u09BE\u0987",
    jao: "\u09AF\u09BE\u0993",
    jan: "\u09AF\u09BE\u09A8",
    jas: "\u09AF\u09BE\u09B8",
    jabo: "\u09AF\u09BE\u09AC\u09CB",
    jabe: "\u09AF\u09BE\u09AC\u09C7",
    jaben: "\u09AF\u09BE\u09AC\u09C7\u09A8",
    jabi: "\u09AF\u09BE\u09AC\u09BF",
    jachchi: "\u09AF\u09BE\u099A\u09CD\u099B\u09BF",
    jachche: "\u09AF\u09BE\u099A\u09CD\u099B\u09C7",
    gelo: "\u0997\u09C7\u09B2",
    gechi: "\u0997\u09C7\u099B\u09BF",
    geche: "\u0997\u09C7\u099B\u09C7",
    gechen: "\u0997\u09C7\u099B\u09C7\u09A8",
    giye: "\u0997\u09BF\u09AF\u09BC\u09C7",
    giyechi: "\u0997\u09BF\u09AF\u09BC\u09C7\u099B\u09BF",
    giyeche: "\u0997\u09BF\u09AF\u09BC\u09C7\u099B\u09C7",
    // ── Verb করা (to do) ───────────────────────────────────────────────────────
    kori: "\u0995\u09B0\u09BF",
    koro: "\u0995\u09B0\u09CB",
    kore: "\u0995\u09B0\u09C7",
    koren: "\u0995\u09B0\u09C7\u09A8",
    koris: "\u0995\u09B0\u09BF\u09B8",
    korbo: "\u0995\u09B0\u09AC\u09CB",
    korbe: "\u0995\u09B0\u09AC\u09C7",
    korben: "\u0995\u09B0\u09AC\u09C7\u09A8",
    korbi: "\u0995\u09B0\u09AC\u09BF",
    korchi: "\u0995\u09B0\u099B\u09BF",
    korche: "\u0995\u09B0\u099B\u09C7",
    korchen: "\u0995\u09B0\u099B\u09C7\u09A8",
    korlam: "\u0995\u09B0\u09B2\u09BE\u09AE",
    korlo: "\u0995\u09B0\u09B2",
    korle: "\u0995\u09B0\u09B2\u09C7",
    koreche: "\u0995\u09B0\u09C7\u099B\u09C7",
    korechi: "\u0995\u09B0\u09C7\u099B\u09BF",
    korechilo: "\u0995\u09B0\u09C7\u099B\u09BF\u09B2",
    korte: "\u0995\u09B0\u09A4\u09C7",
    // ── Verb বলা (to say) ──────────────────────────────────────────────────────
    boli: "\u09AC\u09B2\u09BF",
    bolo: "\u09AC\u09B2\u09CB",
    bole: "\u09AC\u09B2\u09C7",
    bolen: "\u09AC\u09B2\u09C7\u09A8",
    bolbo: "\u09AC\u09B2\u09AC\u09CB",
    bolbe: "\u09AC\u09B2\u09AC\u09C7",
    bolben: "\u09AC\u09B2\u09AC\u09C7\u09A8",
    bolchi: "\u09AC\u09B2\u099B\u09BF",
    bolche: "\u09AC\u09B2\u099B\u09C7",
    bolechi: "\u09AC\u09B2\u09C7\u099B\u09BF",
    boleche: "\u09AC\u09B2\u09C7\u099B\u09C7",
    bolte: "\u09AC\u09B2\u09A4\u09C7",
    bollam: "\u09AC\u09B2\u09B2\u09BE\u09AE",
    bollo: "\u09AC\u09B2\u09B2",
    // ── Verb দেখা (to see) ─────────────────────────────────────────────────────
    dekhi: "\u09A6\u09C7\u0996\u09BF",
    dekho: "\u09A6\u09C7\u0996\u09CB",
    dekhe: "\u09A6\u09C7\u0996\u09C7",
    dekhen: "\u09A6\u09C7\u0996\u09C7\u09A8",
    dekhbo: "\u09A6\u09C7\u0996\u09AC\u09CB",
    dekhbe: "\u09A6\u09C7\u0996\u09AC\u09C7",
    dekhchi: "\u09A6\u09C7\u0996\u099B\u09BF",
    dekhche: "\u09A6\u09C7\u0996\u099B\u09C7",
    dekhechi: "\u09A6\u09C7\u0996\u09C7\u099B\u09BF",
    dekheche: "\u09A6\u09C7\u0996\u09C7\u099B\u09C7",
    dekhte: "\u09A6\u09C7\u0996\u09A4\u09C7",
    dekha: "\u09A6\u09C7\u0996\u09BE",
    // ── Verb খাওয়া (to eat) ───────────────────────────────────────────────────
    khai: "\u0996\u09BE\u0987",
    khao: "\u0996\u09BE\u0993",
    khay: "\u0996\u09BE\u09AF\u09BC",
    khan: "\u0996\u09BE\u09A8",
    khabo: "\u0996\u09BE\u09AC\u09CB",
    khabe: "\u0996\u09BE\u09AC\u09C7",
    khachchi: "\u0996\u09BE\u099A\u09CD\u099B\u09BF",
    khachche: "\u0996\u09BE\u099A\u09CD\u099B\u09C7",
    khelam: "\u0996\u09C7\u09B2\u09BE\u09AE",
    khelo: "\u0996\u09C7\u09B2",
    kheyechi: "\u0996\u09C7\u09AF\u09BC\u09C7\u099B\u09BF",
    kheyeche: "\u0996\u09C7\u09AF\u09BC\u09C7\u099B\u09C7",
    khete: "\u0996\u09C7\u09A4\u09C7",
    // ── Verb আসা (to come) ─────────────────────────────────────────────────────
    ashi: "\u0986\u09B8\u09BF",
    asho: "\u0986\u09B8\u09CB",
    ase: "\u0986\u09B8\u09C7",
    asen: "\u0986\u09B8\u09C7\u09A8",
    ashbo: "\u0986\u09B8\u09AC\u09CB",
    ashbe: "\u0986\u09B8\u09AC\u09C7",
    asben: "\u0986\u09B8\u09AC\u09C7\u09A8",
    aschi: "\u0986\u09B8\u099B\u09BF",
    asche: "\u0986\u09B8\u099B\u09C7",
    eshe: "\u098F\u09B8\u09C7",
    eshechi: "\u098F\u09B8\u09C7\u099B\u09BF",
    esheche: "\u098F\u09B8\u09C7\u099B\u09C7",
    ashte: "\u0986\u09B8\u09A4\u09C7",
    // ── Verb দেওয়া (to give) ──────────────────────────────────────────────────
    dei: "\u09A6\u09C7\u0987",
    dao: "\u09A6\u09BE\u0993",
    dey: "\u09A6\u09C7\u09AF\u09BC",
    den: "\u09A6\u09C7\u09A8",
    debo: "\u09A6\u09C7\u09AC\u09CB",
    debe: "\u09A6\u09C7\u09AC\u09C7",
    diye: "\u09A6\u09BF\u09AF\u09BC\u09C7",
    diyechi: "\u09A6\u09BF\u09AF\u09BC\u09C7\u099B\u09BF",
    diyeche: "\u09A6\u09BF\u09AF\u09BC\u09C7\u099B\u09C7",
    dilam: "\u09A6\u09BF\u09B2\u09BE\u09AE",
    dite: "\u09A6\u09BF\u09A4\u09C7",
    // ── Verb নেওয়া (to take) ──────────────────────────────────────────────────
    nei: "\u09A8\u09C7\u0987",
    nao: "\u09A8\u09BE\u0993",
    nen: "\u09A8\u09C7\u09A8",
    nebo: "\u09A8\u09C7\u09AC\u09CB",
    niye: "\u09A8\u09BF\u09AF\u09BC\u09C7",
    niyechi: "\u09A8\u09BF\u09AF\u09BC\u09C7\u099B\u09BF",
    niyeche: "\u09A8\u09BF\u09AF\u09BC\u09C7\u099B\u09C7",
    nilam: "\u09A8\u09BF\u09B2\u09BE\u09AE",
    nite: "\u09A8\u09BF\u09A4\u09C7",
    // ── Verb পারা (to be able) ─────────────────────────────────────────────────
    pari: "\u09AA\u09BE\u09B0\u09BF",
    paro: "\u09AA\u09BE\u09B0\u09CB",
    pare: "\u09AA\u09BE\u09B0\u09C7",
    paren: "\u09AA\u09BE\u09B0\u09C7\u09A8",
    parbo: "\u09AA\u09BE\u09B0\u09AC\u09CB",
    parbe: "\u09AA\u09BE\u09B0\u09AC\u09C7",
    parlam: "\u09AA\u09BE\u09B0\u09B2\u09BE\u09AE",
    parchi: "\u09AA\u09BE\u09B0\u099B\u09BF",
    parche: "\u09AA\u09BE\u09B0\u099B\u09C7",
    // ── Verb চাওয়া (to want) ──────────────────────────────────────────────────
    chai: "\u099A\u09BE\u0987",
    chao: "\u099A\u09BE\u0993",
    chan: "\u099A\u09BE\u09A8",
    cheyechi: "\u099A\u09C7\u09AF\u09BC\u09C7\u099B\u09BF",
    cheyeche: "\u099A\u09C7\u09AF\u09BC\u09C7\u099B\u09C7",
    // ── Verb পড়া (to read / to fall) ──────────────────────────────────────────
    // NOTE: `pore` is intentionally OMITTED — it collides with the adverb
    // `pore` (পরে = "later") which is more frequent. Type `poRe` (capital R →
    // ড়) for the verb form, or rely on the phonetic engine.
    pori: "\u09AA\u09A1\u09BC\u09BF",
    poro: "\u09AA\u09A1\u09BC\u09CB",
    poren: "\u09AA\u09A1\u09BC\u09C7\u09A8",
    porbo: "\u09AA\u09A1\u09BC\u09AC\u09CB",
    porbe: "\u09AA\u09A1\u09BC\u09AC\u09C7",
    porchi: "\u09AA\u09A1\u09BC\u099B\u09BF",
    porche: "\u09AA\u09A1\u09BC\u099B\u09C7",
    porechi: "\u09AA\u09A1\u09BC\u09C7\u099B\u09BF",
    poreche: "\u09AA\u09A1\u09BC\u09C7\u099B\u09C7",
    porte: "\u09AA\u09A1\u09BC\u09A4\u09C7",
    // ── Verb শোনা (to hear) ────────────────────────────────────────────────────
    shuni: "\u09B6\u09C1\u09A8\u09BF",
    shono: "\u09B6\u09CB\u09A8\u09CB",
    shone: "\u09B6\u09CB\u09A8\u09C7",
    shonen: "\u09B6\u09CB\u09A8\u09C7\u09A8",
    shunbo: "\u09B6\u09C1\u09A8\u09AC\u09CB",
    shunbe: "\u09B6\u09C1\u09A8\u09AC\u09C7",
    shunchi: "\u09B6\u09C1\u09A8\u099B\u09BF",
    shunche: "\u09B6\u09C1\u09A8\u099B\u09C7",
    shunechi: "\u09B6\u09C1\u09A8\u09C7\u099B\u09BF",
    shuneche: "\u09B6\u09C1\u09A8\u09C7\u099B\u09C7",
    shune: "\u09B6\u09C1\u09A8\u09C7",
    // ── Verb বোঝা (to understand) ──────────────────────────────────────────────
    bujhi: "\u09AC\u09C1\u099D\u09BF",
    bojho: "\u09AC\u09CB\u099D\u09CB",
    bojhe: "\u09AC\u09CB\u099D\u09C7",
    bujhechi: "\u09AC\u09C1\u099D\u09C7\u099B\u09BF",
    bujheche: "\u09AC\u09C1\u099D\u09C7\u099B\u09C7",
    bujhle: "\u09AC\u09C1\u099D\u09B2\u09C7",
    // ── Question words ─────────────────────────────────────────────────────────
    ke: "\u0995\u09C7",
    ki: "\u0995\u09BF",
    kee: "\u0995\u09C0",
    kar: "\u0995\u09BE\u09B0",
    kake: "\u0995\u09BE\u0995\u09C7",
    kara: "\u0995\u09BE\u09B0\u09BE",
    kader: "\u0995\u09BE\u09A6\u09C7\u09B0",
    kothay: "\u0995\u09CB\u09A5\u09BE\u09AF\u09BC",
    kothao: "\u0995\u09CB\u09A5\u09BE\u0993",
    kemon: "\u0995\u09C7\u09AE\u09A8",
    keno: "\u0995\u09C7\u09A8",
    kobe: "\u0995\u09AC\u09C7",
    koto: "\u0995\u09A4",
    kotota: "\u0995\u09A4\u099F\u09BE",
    konta: "\u0995\u09CB\u09A8\u099F\u09BE",
    konti: "\u0995\u09CB\u09A8\u099F\u09BF",
    kon: "\u0995\u09CB\u09A8",
    // ── Time / temporal ────────────────────────────────────────────────────────
    ekhon: "\u098F\u0996\u09A8",
    jokhon: "\u09AF\u0996\u09A8",
    tokhon: "\u09A4\u0996\u09A8",
    aaj: "\u0986\u099C",
    ajke: "\u0986\u099C\u0995\u09C7",
    kal: "\u0995\u09BE\u09B2",
    kalke: "\u0995\u09BE\u09B2\u0995\u09C7",
    poroshu: "\u09AA\u09B0\u09B6\u09C1",
    shokal: "\u09B8\u0995\u09BE\u09B2",
    dupur: "\u09A6\u09C1\u09AA\u09C1\u09B0",
    bikel: "\u09AC\u09BF\u0995\u09C7\u09B2",
    shondha: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
    raat: "\u09B0\u09BE\u09A4",
    raate: "\u09B0\u09BE\u09A4\u09C7",
    shokale: "\u09B8\u0995\u09BE\u09B2\u09C7",
    ekhuni: "\u098F\u0996\u09C1\u09A8\u09BF",
    age: "\u0986\u0997\u09C7",
    pore: "\u09AA\u09B0\u09C7",
    somoy: "\u09B8\u09AE\u09AF\u09BC",
    // ── Conjunctions / function words ──────────────────────────────────────────
    ebong: "\u098F\u09AC\u0982",
    kintu: "\u0995\u09BF\u09A8\u09CD\u09A4\u09C1",
    ar: "\u0986\u09B0",
    ba: "\u09AC\u09BE",
    othoba: "\u0985\u09A5\u09AC\u09BE",
    na: "\u09A8\u09BE",
    hyan: "\u09B9\u09CD\u09AF\u09BE\u0981",
    ha: "\u09B9\u09CD\u09AF\u09BE\u0981",
    jodi: "\u09AF\u09A6\u09BF",
    tahole: "\u09A4\u09BE\u09B9\u09B2\u09C7",
    tobe: "\u09A4\u09AC\u09C7",
    karon: "\u0995\u09BE\u09B0\u09A3",
    jeno: "\u09AF\u09C7\u09A8",
    jodio: "\u09AF\u09A6\u09BF\u0993",
    // Particles & adverbs that legitimately end in ো-kaar — these override the
    // smart-O engine rule that would otherwise strip the trailing ো.
    to: "\u09A4\u09CB",
    hoyto: "\u09B9\u09AF\u09BC\u09A4\u09CB",
    noyto: "\u09A8\u09AF\u09BC\u09A4\u09CB",
    oho: "\u0993\u09B9\u09CB",
    aha: "\u0986\u09B9\u09BE",
    mone: "\u09AE\u09A8\u09C7",
    jonno: "\u099C\u09A8\u09CD\u09AF",
    jonye: "\u099C\u09A8\u09CD\u09AF\u09C7",
    shathe: "\u09B8\u09BE\u09A5\u09C7",
    songe: "\u09B8\u0999\u09CD\u0997\u09C7",
    upor: "\u0989\u09AA\u09B0",
    niche: "\u09A8\u09BF\u099A\u09C7",
    bhitor: "\u09AD\u09BF\u09A4\u09B0",
    baire: "\u09AC\u09BE\u0987\u09B0\u09C7",
    majhe: "\u09AE\u09BE\u099D\u09C7",
    modhye: "\u09AE\u09A7\u09CD\u09AF\u09C7",
    // ── Family ─────────────────────────────────────────────────────────────────
    ma: "\u09AE\u09BE",
    baba: "\u09AC\u09BE\u09AC\u09BE",
    bhai: "\u09AD\u09BE\u0987",
    bon: "\u09AC\u09CB\u09A8",
    dada: "\u09A6\u09BE\u09A6\u09BE",
    didi: "\u09A6\u09BF\u09A6\u09BF",
    chele: "\u099B\u09C7\u09B2\u09C7",
    meye: "\u09AE\u09C7\u09AF\u09BC\u09C7",
    baccha: "\u09AC\u09BE\u099A\u09CD\u099A\u09BE",
    nana: "\u09A8\u09BE\u09A8\u09BE",
    nani: "\u09A8\u09BE\u09A8\u09BF",
    dadi: "\u09A6\u09BE\u09A6\u09BF",
    mama: "\u09AE\u09BE\u09AE\u09BE",
    mami: "\u09AE\u09BE\u09AE\u09BF",
    chacha: "\u099A\u09BE\u099A\u09BE",
    chachi: "\u099A\u09BE\u099A\u09BF",
    // ── Common ো-kaar nouns that the smart-O engine would mis-spell ───────────
    // Without these the phonetic engine would produce, e.g., সনার / লক / চর /
    // বনাস — stripping the canonical ো-kaar.
    sonar: "\u09B8\u09CB\u09A8\u09BE\u09B0",
    sona: "\u09B8\u09CB\u09A8\u09BE",
    lok: "\u09B2\u09CB\u0995",
    lokjon: "\u09B2\u09CB\u0995\u099C\u09A8",
    chor: "\u099A\u09CB\u09B0",
    bonus: "\u09AC\u09CB\u09A8\u09BE\u09B8",
    goyenda: "\u0997\u09CB\u09AF\u09BC\u09C7\u09A8\u09CD\u09A6\u09BE",
    fon: "\u09AB\u09CB\u09A8",
    bot: "\u09AC\u099F",
    // ── Common nouns (implicit-অ heavy) ────────────────────────────────────────
    mon: "\u09AE\u09A8",
    ghor: "\u0998\u09B0",
    bari: "\u09AC\u09BE\u09A1\u09BC\u09BF",
    desh: "\u09A6\u09C7\u09B6",
    bhasha: "\u09AD\u09BE\u09B7\u09BE",
    shahor: "\u09B6\u09B9\u09B0",
    gram: "\u0997\u09CD\u09B0\u09BE\u09AE",
    rasta: "\u09B0\u09BE\u09B8\u09CD\u09A4\u09BE",
    gari: "\u0997\u09BE\u09A1\u09BC\u09BF",
    boi: "\u09AC\u0987",
    kolom: "\u0995\u09B2\u09AE",
    khata: "\u0996\u09BE\u09A4\u09BE",
    kagoj: "\u0995\u09BE\u0997\u099C",
    jol: "\u099C\u09B2",
    pani: "\u09AA\u09BE\u09A8\u09BF",
    bhat: "\u09AD\u09BE\u09A4",
    ruti: "\u09B0\u09C1\u099F\u09BF",
    dal: "\u09A1\u09BE\u09B2",
    machh: "\u09AE\u09BE\u099B",
    mangsho: "\u09AE\u09BE\u0982\u09B8",
    doodh: "\u09A6\u09C1\u09A7",
    cha: "\u099A\u09BE",
    cini: "\u099A\u09BF\u09A8\u09BF",
    lobon: "\u09B2\u09AC\u09A3",
    tel: "\u09A4\u09C7\u09B2",
    gach: "\u0997\u09BE\u099B",
    ful: "\u09AB\u09C1\u09B2",
    pata: "\u09AA\u09BE\u09A4\u09BE",
    nodi: "\u09A8\u09A6\u09C0",
    sagor: "\u09B8\u09BE\u0997\u09B0",
    pahar: "\u09AA\u09BE\u09B9\u09BE\u09A1\u09BC",
    akash: "\u0986\u0995\u09BE\u09B6",
    surjo: "\u09B8\u09C2\u09B0\u09CD\u09AF",
    chand: "\u099A\u09BE\u0981\u09A6",
    // NOTE: `tara` (star) is intentionally omitted — collides with the more
    // frequent 3rd-person pronoun `tara` (তারা = "they"). Use `nokkhotro` for
    // star instead.
    nokkhotro: "\u09A8\u0995\u09CD\u09B7\u09A4\u09CD\u09B0",
    megh: "\u09AE\u09C7\u0998",
    brishti: "\u09AC\u09C3\u09B7\u09CD\u099F\u09BF",
    haowa: "\u09B9\u09BE\u0993\u09AF\u09BC\u09BE",
    batas: "\u09AC\u09BE\u09A4\u09BE\u09B8",
    agun: "\u0986\u0997\u09C1\u09A8",
    mati: "\u09AE\u09BE\u099F\u09BF",
    poth: "\u09AA\u09A5",
    por: "\u09AA\u09B0",
    // `jor` maps to জ্বর (fever) for the clinical use case. Type `jore` for
    // জোরে (loudly / forcefully) if you need the "force" sense.
    jor: "\u099C\u09CD\u09AC\u09B0",
    bol: "\u09AC\u09B2",
    phol: "\u09AB\u09B2",
    jhol: "\u099D\u09CB\u09B2",
    chokh: "\u099A\u09CB\u0996",
    mukh: "\u09AE\u09C1\u0996",
    kan: "\u0995\u09BE\u09A8",
    nak: "\u09A8\u09BE\u0995",
    hath: "\u09B9\u09BE\u09A4",
    pa: "\u09AA\u09BE",
    math: "\u09AE\u09BE\u09A0",
    matha: "\u09AE\u09BE\u09A5\u09BE",
    chul: "\u099A\u09C1\u09B2",
    pet: "\u09AA\u09C7\u099F",
    rokto: "\u09B0\u0995\u09CD\u09A4",
    pran: "\u09AA\u09CD\u09B0\u09BE\u09A3",
    hridoy: "\u09B9\u09C3\u09A6\u09AF\u09BC",
    // ── Adjectives / descriptors ───────────────────────────────────────────────
    bhalo: "\u09AD\u09BE\u09B2\u09CB",
    kharap: "\u0996\u09BE\u09B0\u09BE\u09AA",
    shundor: "\u09B8\u09C1\u09A8\u09CD\u09A6\u09B0",
    boro: "\u09AC\u09A1\u09BC",
    choto: "\u099B\u09CB\u099F",
    lomba: "\u09B2\u09AE\u09CD\u09AC\u09BE",
    khato: "\u0996\u09BE\u099F\u09CB",
    thanda: "\u09A0\u09BE\u09A8\u09CD\u09A1\u09BE",
    gorom: "\u0997\u09B0\u09AE",
    notun: "\u09A8\u09A4\u09C1\u09A8",
    puran: "\u09AA\u09C1\u09B0\u09BE\u09A8",
    purono: "\u09AA\u09C1\u09B0\u09A8\u09CB",
    mishti: "\u09AE\u09BF\u09B7\u09CD\u099F\u09BF",
    tito: "\u09A4\u09BF\u09A4\u09CB",
    shoja: "\u09B8\u09CB\u099C\u09BE",
    shokto: "\u09B6\u0995\u09CD\u09A4",
    norom: "\u09A8\u09B0\u09AE",
    ucca: "\u0989\u099A\u09CD\u099A",
    nichu: "\u09A8\u09BF\u099A\u09C1",
    shada: "\u09B8\u09BE\u09A6\u09BE",
    kalo: "\u0995\u09BE\u09B2\u09CB",
    lal: "\u09B2\u09BE\u09B2",
    nil: "\u09A8\u09C0\u09B2",
    sobuj: "\u09B8\u09AC\u09C1\u099C",
    holud: "\u09B9\u09B2\u09C1\u09A6",
    // ── Numbers (Banglish form) ────────────────────────────────────────────────
    // NOTE: numbers 11-18 legitimately end in ো-kaar (এগারো, বারো, …); without
    // these entries the smart-O engine rule would strip that ো and produce the
    // wrong spelling.
    ek: "\u098F\u0995",
    dui: "\u09A6\u09C1\u0987",
    tin: "\u09A4\u09BF\u09A8",
    char: "\u099A\u09BE\u09B0",
    panch: "\u09AA\u09BE\u0981\u099A",
    choy: "\u099B\u09AF\u09BC",
    saat: "\u09B8\u09BE\u09A4",
    aat: "\u0986\u099F",
    noy: "\u09A8\u09AF\u09BC",
    dosh: "\u09A6\u09B6",
    egaro: "\u098F\u0997\u09BE\u09B0\u09CB",
    baro: "\u09AC\u09BE\u09B0\u09CB",
    tero: "\u09A4\u09C7\u09B0\u09CB",
    choddo: "\u099A\u09CC\u09A6\u09CD\u09A6",
    ponero: "\u09AA\u09A8\u09C7\u09B0\u09CB",
    solo: "\u09B7\u09CB\u09B2\u09CB",
    sotero: "\u09B8\u09A4\u09C7\u09B0\u09CB",
    ataro: "\u0986\u09A0\u09BE\u09B0\u09CB",
    unish: "\u0989\u09A8\u09BF\u09B6",
    bish: "\u09AC\u09BF\u09B6",
    // ── Emotions / abstract ────────────────────────────────────────────────────
    prem: "\u09AA\u09CD\u09B0\u09C7\u09AE",
    bhalobasha: "\u09AD\u09BE\u09B2\u09CB\u09AC\u09BE\u09B8\u09BE",
    ghrina: "\u0998\u09C3\u09A3\u09BE",
    rag: "\u09B0\u09BE\u0997",
    dukkho: "\u09A6\u09C1\u0983\u0996",
    sukh: "\u09B8\u09C1\u0996",
    anondo: "\u0986\u09A8\u09A8\u09CD\u09A6",
    hashi: "\u09B9\u09BE\u09B8\u09BF",
    kanna: "\u0995\u09BE\u09A8\u09CD\u09A8\u09BE",
    bhoy: "\u09AD\u09AF\u09BC",
    asha: "\u0986\u09B6\u09BE",
    shopno: "\u09B8\u09CD\u09AC\u09AA\u09CD\u09A8",
    shanti: "\u09B6\u09BE\u09A8\u09CD\u09A4\u09BF",
    // ── Pleasantries / common phrases ──────────────────────────────────────────
    dhonnobad: "\u09A7\u09A8\u09CD\u09AF\u09AC\u09BE\u09A6",
    shagotom: "\u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE",
    namaskar: "\u09A8\u09AE\u09B8\u09CD\u0995\u09BE\u09B0",
    assalamualaikum: "\u0986\u09B8\u09B8\u09BE\u09B2\u09BE\u09AE\u09C1 \u0986\u09B2\u09BE\u0987\u0995\u09C1\u09AE",
    bangla: "\u09AC\u09BE\u0982\u09B2\u09BE",
    bondhu: "\u09AC\u09A8\u09CD\u09A7\u09C1",
    manush: "\u09AE\u09BE\u09A8\u09C1\u09B7",
    bharat: "\u09AD\u09BE\u09B0\u09A4",
    bangladesh: "\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6",
    // ── Nature / time-of-day (ো-kaar + vowel-length words the engine can't infer)
    bhor: "\u09AD\u09CB\u09B0",
    bhore: "\u09AD\u09CB\u09B0\u09C7",
    bhorer: "\u09AD\u09CB\u09B0\u09C7\u09B0",
    shokalbela: "\u09B8\u0995\u09BE\u09B2\u09AC\u09C7\u09B2\u09BE",
    alo: "\u0986\u09B2\u09CB",
    alor: "\u0986\u09B2\u09CB\u09B0",
    aloy: "\u0986\u09B2\u09CB\u09AF\u09BC",
    adhar: "\u0986\u0981\u09A7\u09BE\u09B0",
    prithibi: "\u09AA\u09C3\u09A5\u09BF\u09AC\u09C0",
    prithibir: "\u09AA\u09C3\u09A5\u09BF\u09AC\u09C0\u09B0",
    prokriti: "\u09AA\u09CD\u09B0\u0995\u09C3\u09A4\u09BF",
    shishir: "\u09B6\u09BF\u09B6\u09BF\u09B0",
    bindu: "\u09AC\u09BF\u09A8\u09CD\u09A6\u09C1",
    pakhi: "\u09AA\u09BE\u0996\u09BF",
    pakhir: "\u09AA\u09BE\u0996\u09BF\u09B0",
    shobuj: "\u09B8\u09AC\u09C1\u099C",
    // casual `sh` spelling of সবুজ (canonical key is `sobuj`)
    dak: "\u09A1\u09BE\u0995",
    daak: "\u09A1\u09BE\u0995",
    // ── Common verbs / forms the sample needed ─────────────────────────────────
    othe: "\u0993\u09A0\u09C7",
    // জেগে ওঠে
    uthe: "\u0989\u09A0\u09C7",
    uthi: "\u0989\u09A0\u09BF",
    jege: "\u099C\u09C7\u0997\u09C7",
    chheye: "\u099B\u09C7\u09AF\u09BC\u09C7",
    // ── Everyday high-frequency words ──────────────────────────────────────────
    kotha: "\u0995\u09A5\u09BE",
    shuru: "\u09B6\u09C1\u09B0\u09C1",
    shesh: "\u09B6\u09C7\u09B7",
    jibon: "\u099C\u09C0\u09AC\u09A8",
    shomoy: "\u09B8\u09AE\u09AF\u09BC",
    // casual `sh` spelling of সময় (canonical key is `somoy`)
    onnorokom: "\u0985\u09A8\u09CD\u09AF\u09B0\u0995\u09AE",
    shomvob: "\u09B8\u09AE\u09CD\u09AD\u09AC",
    sombhob: "\u09B8\u09AE\u09CD\u09AD\u09AC",
    oshomvob: "\u0985\u09B8\u09AE\u09CD\u09AD\u09AC",
    jobe: "\u09AF\u09AC\u09C7",
    // ── "ek-" compounds & similar inherent-অ words ─────────────────────────────
    // The phonetic engine joins consecutive consonants into a conjunct (kd→ক্দ),
    // so "ekdin" → এক্দিন. These common words carry a silent অ between the
    // consonants (এক‑দিন) that only the dictionary can supply.
    ekdin: "\u098F\u0995\u09A6\u09BF\u09A8",
    ekbar: "\u098F\u0995\u09AC\u09BE\u09B0",
    ekjon: "\u098F\u0995\u099C\u09A8",
    ekta: "\u098F\u0995\u099F\u09BE",
    ekti: "\u098F\u0995\u099F\u09BF",
    ektu: "\u098F\u0995\u099F\u09C1",
    ekdom: "\u098F\u0995\u09A6\u09AE",
    eksathe: "\u098F\u0995\u09B8\u09BE\u09A5\u09C7",
    eksonge: "\u098F\u0995\u09B8\u0999\u09CD\u0997\u09C7",
    ekebare: "\u098F\u0995\u09C7\u09AC\u09BE\u09B0\u09C7",
    protidin: "\u09AA\u09CD\u09B0\u09A4\u09BF\u09A6\u09BF\u09A8",
    protibar: "\u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09BE\u09B0",
    duijon: "\u09A6\u09C1\u0987\u099C\u09A8",
    tinjon: "\u09A4\u09BF\u09A8\u099C\u09A8",
    // ── অ-initial words ────────────────────────────────────────────────────────
    // A leading `o` always becomes the independent vowel ও in the engine, but
    // these words start with the inherent অ sound, so the engine mis-spells them
    // (e.g. "onek" → ওনেক instead of অনেক).
    onek: "\u0985\u09A8\u09C7\u0995",
    onekta: "\u0985\u09A8\u09C7\u0995\u099F\u09BE",
    onno: "\u0985\u09A8\u09CD\u09AF",
    ortho: "\u0985\u09B0\u09CD\u09A5",
    olpo: "\u0985\u09B2\u09CD\u09AA",
    ongsho: "\u0985\u0982\u09B6",
    otit: "\u0985\u09A4\u09C0\u09A4",
    odhik: "\u0985\u09A7\u09BF\u0995",
    odhikar: "\u0985\u09A7\u09BF\u0995\u09BE\u09B0",
    obostha: "\u0985\u09AC\u09B8\u09CD\u09A5\u09BE",
    oporadh: "\u0985\u09AA\u09B0\u09BE\u09A7",
    onurodh: "\u0985\u09A8\u09C1\u09B0\u09CB\u09A7",
    onumoti: "\u0985\u09A8\u09C1\u09AE\u09A4\u09BF",
    onuvuti: "\u0985\u09A8\u09C1\u09AD\u09C2\u09A4\u09BF",
    ovinoy: "\u0985\u09AD\u09BF\u09A8\u09AF\u09BC",
    ovab: "\u0985\u09AD\u09BE\u09AC",
    oshukh: "\u0985\u09B8\u09C1\u0996",
    // ── Common sibilant / retroflex / inherent-অ words the engine can't infer ──
    // `s`↔`sh` and `t`↔`Th` are ambiguous in casual Banglish, and silent অ
    // between consonants is invisible — so these high-frequency words need
    // canonical spellings. Both `s`/`sh` spellings are listed where people type
    // either.
    thik: "\u09A0\u09BF\u0995",
    ekhono: "\u098F\u0996\u09A8\u09CB",
    kokhono: "\u0995\u0996\u09A8\u09CB",
    kichu: "\u0995\u09BF\u099B\u09C1",
    kichui: "\u0995\u09BF\u099B\u09C1\u0987",
    shob: "\u09B8\u09AC",
    sob: "\u09B8\u09AC",
    shobai: "\u09B8\u09AC\u09BE\u0987",
    shobkichu: "\u09B8\u09AC\u0995\u09BF\u099B\u09C1",
    sotti: "\u09B8\u09A4\u09CD\u09AF\u09BF",
    shotti: "\u09B8\u09A4\u09CD\u09AF\u09BF",
    mittha: "\u09AE\u09BF\u09A5\u09CD\u09AF\u09BE",
    ichcha: "\u0987\u099A\u09CD\u099B\u09BE",
    chesta: "\u099A\u09C7\u09B7\u09CD\u099F\u09BE",
    jinish: "\u099C\u09BF\u09A8\u09BF\u09B8",
    bishoy: "\u09AC\u09BF\u09B7\u09AF\u09BC",
    shomossa: "\u09B8\u09AE\u09B8\u09CD\u09AF\u09BE",
    somossa: "\u09B8\u09AE\u09B8\u09CD\u09AF\u09BE",
    shorkar: "\u09B8\u09B0\u0995\u09BE\u09B0",
    sorkar: "\u09B8\u09B0\u0995\u09BE\u09B0",
    shadharon: "\u09B8\u09BE\u09A7\u09BE\u09B0\u09A3",
    shahajjo: "\u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF",
    sahajjo: "\u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF",
    shomporko: "\u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995",
    jonogon: "\u099C\u09A8\u0997\u09A3",
    // ── Clinical: dose & form ──────────────────────────────────────────────────
    // Most of these are loanwords the phonetic engine renders wrongly
    // (e.g. "tablet" → তাবলেত), so they need canonical spellings.
    tablet: "\u099F\u09CD\u09AF\u09BE\u09AC\u09B2\u09C7\u099F",
    tab: "\u099F\u09CD\u09AF\u09BE\u09AC",
    capsule: "\u0995\u09CD\u09AF\u09BE\u09AA\u09B8\u09C1\u09B2",
    cap: "\u0995\u09CD\u09AF\u09BE\u09AA",
    syrup: "\u09B8\u09BF\u09B0\u09BE\u09AA",
    injection: "\u0987\u09A8\u099C\u09C7\u0995\u09B6\u09A8",
    inhaler: "\u0987\u09A8\u09B9\u09C7\u09B2\u09BE\u09B0",
    drop: "\u09A1\u09CD\u09B0\u09AA",
    fota: "\u09AB\u09CB\u0981\u099F\u09BE",
    chamoch: "\u099A\u09BE\u09AE\u099A",
    matra: "\u09AE\u09BE\u09A4\u09CD\u09B0\u09BE",
    dose: "\u09A1\u09CB\u099C",
    miligram: "\u09AE\u09BF\u09B2\u09BF\u0997\u09CD\u09B0\u09BE\u09AE",
    mili: "\u09AE\u09BF\u09B2\u09BF",
    unit: "\u0987\u0989\u09A8\u09BF\u099F",
    adha: "\u0986\u09A7\u09BE",
    puro: "\u09AA\u09C1\u09B0\u09CB",
    gota: "\u0997\u09CB\u099F\u09BE",
    duto: "\u09A6\u09C1\u099F\u09CB",
    // ── Clinical: duration & frequency ─────────────────────────────────────────
    bar: "\u09AC\u09BE\u09B0",
    din: "\u09A6\u09BF\u09A8",
    shoptaho: "\u09B8\u09AA\u09CD\u09A4\u09BE\u09B9",
    shoptahe: "\u09B8\u09AA\u09CD\u09A4\u09BE\u09B9\u09C7",
    mash: "\u09AE\u09BE\u09B8",
    mashe: "\u09AE\u09BE\u09B8\u09C7",
    bochor: "\u09AC\u099B\u09B0",
    ghonta: "\u0998\u09A3\u09CD\u099F\u09BE",
    ghontay: "\u0998\u09A3\u09CD\u099F\u09BE\u09AF\u09BC",
    proti: "\u09AA\u09CD\u09B0\u09A4\u09BF",
    porpor: "\u09AA\u09B0\u09AA\u09B0",
    ektana: "\u098F\u0995\u099F\u09BE\u09A8\u09BE",
    niyomito: "\u09A8\u09BF\u09AF\u09BC\u09AE\u09BF\u09A4",
    // ── Clinical: instructions (when/how to take) ──────────────────────────────
    khabar: "\u0996\u09BE\u09AC\u09BE\u09B0",
    khabarer: "\u0996\u09BE\u09AC\u09BE\u09B0\u09C7\u09B0",
    khaowar: "\u0996\u09BE\u0993\u09AF\u09BC\u09BE\u09B0",
    khali: "\u0996\u09BE\u09B2\u09BF",
    khalipete: "\u0996\u09BE\u09B2\u09BF\u09AA\u09C7\u099F\u09C7",
    pete: "\u09AA\u09C7\u099F\u09C7",
    bhora: "\u09AD\u09B0\u09BE",
    khaben: "\u0996\u09BE\u09AC\u09C7\u09A8",
    sheban: "\u09B8\u09C7\u09AC\u09A8",
    gile: "\u0997\u09BF\u09B2\u09C7",
    chibiye: "\u099A\u09BF\u09AC\u09BF\u09AF\u09BC\u09C7",
    lagaben: "\u09B2\u09BE\u0997\u09BE\u09AC\u09C7\u09A8",
    lagano: "\u09B2\u09BE\u0997\u09BE\u09A8\u09CB",
    byabohar: "\u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0",
    ghum: "\u0998\u09C1\u09AE",
    ghumanor: "\u0998\u09C1\u09AE\u09BE\u09A8\u09CB\u09B0",
    dupure: "\u09A6\u09C1\u09AA\u09C1\u09B0\u09C7",
    bikele: "\u09AC\u09BF\u0995\u09C7\u09B2\u09C7",
    rate: "\u09B0\u09BE\u09A4\u09C7",
    // ── Clinical: comments & follow-up ─────────────────────────────────────────
    bishram: "\u09AC\u09BF\u09B6\u09CD\u09B0\u09BE\u09AE",
    followup: "\u09AB\u09B2\u09CB\u0986\u09AA",
    porborti: "\u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0",
    porbortite: "\u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0\u09A4\u09C7",
    proyojon: "\u09AA\u09CD\u09B0\u09AF\u09BC\u09CB\u099C\u09A8",
    proyojone: "\u09AA\u09CD\u09B0\u09AF\u09BC\u09CB\u099C\u09A8\u09C7",
    dorkar: "\u09A6\u09B0\u0995\u09BE\u09B0",
    bondho: "\u09AC\u09A8\u09CD\u09A7",
    chaliye: "\u099A\u09BE\u09B2\u09BF\u09AF\u09BC\u09C7",
    cholbe: "\u099A\u09B2\u09AC\u09C7",
    report: "\u09B0\u09BF\u09AA\u09CB\u09B0\u09CD\u099F",
    test: "\u099F\u09C7\u09B8\u09CD\u099F",
    porikkha: "\u09AA\u09B0\u09C0\u0995\u09CD\u09B7\u09BE",
    doctor: "\u09A1\u09BE\u0995\u09CD\u09A4\u09BE\u09B0",
    daktar: "\u09A1\u09BE\u0995\u09CD\u09A4\u09BE\u09B0",
    rogi: "\u09B0\u09CB\u0997\u09C0",
    rog: "\u09B0\u09CB\u0997",
    oshudh: "\u0993\u09B7\u09C1\u09A7",
    oushadh: "\u0994\u09B7\u09A7",
    hashpatal: "\u09B9\u09BE\u09B8\u09AA\u09BE\u09A4\u09BE\u09B2",
    chikitsa: "\u099A\u09BF\u0995\u09BF\u09CE\u09B8\u09BE",
    shustho: "\u09B8\u09C1\u09B8\u09CD\u09A5",
    // ── Clinical: common symptoms (referenced in comments) ─────────────────────
    jwor: "\u099C\u09CD\u09AC\u09B0",
    byatha: "\u09AC\u09CD\u09AF\u09A5\u09BE",
    kashi: "\u0995\u09BE\u09B6\u09BF",
    shordi: "\u09B8\u09B0\u09CD\u09A6\u09BF",
    bomi: "\u09AC\u09AE\u09BF",
    mathabyatha: "\u09AE\u09BE\u09A5\u09BE\u09AC\u09CD\u09AF\u09A5\u09BE",
    durbol: "\u09A6\u09C1\u09B0\u09CD\u09AC\u09B2",
    durbolota: "\u09A6\u09C1\u09B0\u09CD\u09AC\u09B2\u09A4\u09BE",
    gas: "\u0997\u09CD\u09AF\u09BE\u09B8",
    allergy: "\u0985\u09CD\u09AF\u09BE\u09B2\u09BE\u09B0\u09CD\u099C\u09BF",
    // ── Everyday: greetings, social & interjections ────────────────────────────
    accha: "\u0986\u099A\u09CD\u099B\u09BE",
    achcha: "\u0986\u099A\u09CD\u099B\u09BE",
    are: "\u0986\u09B0\u09C7",
    bah: "\u09AC\u09BE\u09B9",
    ji: "\u099C\u09BF",
    shuvo: "\u09B6\u09C1\u09AD",
    shubho: "\u09B6\u09C1\u09AD",
    obhinondon: "\u0985\u09AD\u09BF\u09A8\u09A8\u09CD\u09A6\u09A8",
    dukkhito: "\u09A6\u09C1\u0983\u0996\u09BF\u09A4",
    maf: "\u09AE\u09BE\u09AB",
    doya: "\u09A6\u09AF\u09BC\u09BE",
    // ── Festivals & occasions ──────────────────────────────────────────────────
    // These carry the retroflex ষ (typed `Sh` in strict Avro) plus an implicit-অ,
    // so the lowercase phonetic spelling people actually type ("borsho") would
    // otherwise render as বর্স্হ. Canonical spellings live here instead.
    noboborsho: "\u09A8\u09AC\u09AC\u09B0\u09CD\u09B7",
    // নববর্ষ — (Bengali) New Year, e.g. "shuvo noboborsho"
    nobborsho: "\u09A8\u09AC\u09AC\u09B0\u09CD\u09B7",
    // common alternate spelling
    borsho: "\u09AC\u09B0\u09CD\u09B7",
    // বর্ষ — year / season
    borso: "\u09AC\u09B0\u09CD\u09B7",
    // common alternate spelling
    borsha: "\u09AC\u09B0\u09CD\u09B7\u09BE",
    // বর্ষা — monsoon
    // ── Everyday: common verbs (base + frequent forms) ─────────────────────────
    lekha: "\u09B2\u09C7\u0996\u09BE",
    likhi: "\u09B2\u09BF\u0996\u09BF",
    likhe: "\u09B2\u09BF\u0996\u09C7",
    likhbo: "\u09B2\u09BF\u0996\u09AC\u09CB",
    kena: "\u0995\u09C7\u09A8\u09BE",
    kini: "\u0995\u09BF\u09A8\u09BF",
    kine: "\u0995\u09BF\u09A8\u09C7",
    kinbo: "\u0995\u09BF\u09A8\u09AC\u09CB",
    bosha: "\u09AC\u09B8\u09BE",
    boshi: "\u09AC\u09B8\u09BF",
    bose: "\u09AC\u09B8\u09C7",
    boshbo: "\u09AC\u09B8\u09AC\u09CB",
    rakha: "\u09B0\u09BE\u0996\u09BE",
    rakhi: "\u09B0\u09BE\u0996\u09BF",
    rakhe: "\u09B0\u09BE\u0996\u09C7",
    rakho: "\u09B0\u09BE\u0996\u09CB",
    chola: "\u099A\u09B2\u09BE",
    choli: "\u099A\u09B2\u09BF",
    chole: "\u099A\u09B2\u09C7",
    khola: "\u0996\u09CB\u09B2\u09BE",
    ana: "\u0986\u09A8\u09BE",
    ane: "\u0986\u09A8\u09C7",
    // ── Everyday: common nouns & loanwords (engine mis-spells these) ───────────
    taka: "\u099F\u09BE\u0995\u09BE",
    poysa: "\u09AA\u09AF\u09BC\u09B8\u09BE",
    dokan: "\u09A6\u09CB\u0995\u09BE\u09A8",
    bajar: "\u09AC\u09BE\u099C\u09BE\u09B0",
    school: "\u09B8\u09CD\u0995\u09C1\u09B2",
    iskul: "\u09B8\u09CD\u0995\u09C1\u09B2",
    office: "\u0985\u09AB\u09BF\u09B8",
    college: "\u0995\u09B2\u09C7\u099C",
    mobile: "\u09AE\u09CB\u09AC\u09BE\u0987\u09B2",
    computer: "\u0995\u09AE\u09CD\u09AA\u09BF\u0989\u099F\u09BE\u09B0",
    internet: "\u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09A8\u09C7\u099F",
    shorir: "\u09B6\u09B0\u09C0\u09B0",
    kaj: "\u0995\u09BE\u099C",
    khela: "\u0996\u09C7\u09B2\u09BE",
    gan: "\u0997\u09BE\u09A8",
    golpo: "\u0997\u09B2\u09CD\u09AA",
    khobor: "\u0996\u09AC\u09B0",
    chithi: "\u099A\u09BF\u09A0\u09BF",
    chhuti: "\u099B\u09C1\u099F\u09BF",
    jonmodin: "\u099C\u09A8\u09CD\u09AE\u09A6\u09BF\u09A8",
    moja: "\u09AE\u099C\u09BE",
    // ── Everyday: common adjectives & adverbs ──────────────────────────────────
    khub: "\u0996\u09C1\u09AC",
    beshi: "\u09AC\u09C7\u09B6\u09BF",
    kom: "\u0995\u09AE",
    shudhu: "\u09B6\u09C1\u09A7\u09C1",
    matro: "\u09AE\u09BE\u09A4\u09CD\u09B0",
    abar: "\u0986\u09AC\u09BE\u09B0",
    aro: "\u0986\u09B0\u0993",
    prai: "\u09AA\u09CD\u09B0\u09BE\u09AF\u09BC",
    pray: "\u09AA\u09CD\u09B0\u09BE\u09AF\u09BC",
    joldi: "\u099C\u09B2\u09A6\u09BF",
    taratari: "\u09A4\u09BE\u09A1\u09BC\u09BE\u09A4\u09BE\u09A1\u09BC\u09BF",
    aste: "\u0986\u09B8\u09CD\u09A4\u09C7",
    obosshoi: "\u0985\u09AC\u09B6\u09CD\u09AF\u0987"
  };
  var BANGLISH_DICTIONARY = Object.freeze(DEFAULT_ENTRIES);
  var B = {
    // Vowels (independent / স্বরবর্ণ)
    A: "\u0986",
    // আ
    I: "\u0987",
    // ই
    II: "\u0988",
    // ঈ
    U: "\u0989",
    // উ
    UU: "\u098A",
    // ঊ
    RRI: "\u098B",
    // ঋ
    E: "\u098F",
    // এ
    OI: "\u0990",
    // ঐ
    O: "\u0993",
    // ও
    OU: "\u0994",
    // ঔ
    // Vowel signs (dependent / কার)
    AA_KAR: "\u09BE",
    // া  U+09BE
    I_KAR: "\u09BF",
    // ি  U+09BF
    II_KAR: "\u09C0",
    // ী  U+09C0
    U_KAR: "\u09C1",
    // ু  U+09C1
    UU_KAR: "\u09C2",
    // ূ  U+09C2
    RRI_KAR: "\u09C3",
    // ৃ  U+09C3
    E_KAR: "\u09C7",
    // ে  U+09C7 — e-kaar (used after consonant for /e/ sound)
    OI_KAR: "\u09C8",
    // ৈ  U+09C8 — oi-kaar
    O_KAR: "\u09CB",
    // ো  U+09CB — o-kaar (= ে U+09C7 + া U+09BE)
    OU_KAR: "\u09CC",
    // ৌ  U+09CC — ou-kaar
    E_MATRA: "\u09C7",
    // ে  U+09C7 — alias for E_KAR (used by kSh* patterns)
    // Consonants
    K: "\u0995",
    // ক
    KH: "\u0996",
    // খ
    G: "\u0997",
    // গ
    GH: "\u0998",
    // ঘ
    NG_LETTER: "\u0999",
    // ঙ
    CH: "\u099A",
    // চ
    CHH: "\u099B",
    // ছ
    J: "\u099C",
    // জ
    JH: "\u099D",
    // ঝ
    NYA: "\u099E",
    // ঞ
    TT: "\u099F",
    // ট
    TTH: "\u09A0",
    // ঠ
    DD: "\u09A1",
    // ড
    DDH: "\u09A2",
    // ঢ
    NN: "\u09A3",
    // ণ
    T: "\u09A4",
    // ত
    TH: "\u09A5",
    // থ
    D: "\u09A6",
    // দ
    DH: "\u09A7",
    // ধ
    N: "\u09A8",
    // ন
    P: "\u09AA",
    // প
    PH: "\u09AB",
    // ফ
    B: "\u09AC",
    // ব
    BH: "\u09AD",
    // ভ
    M: "\u09AE",
    // ম
    Z: "\u09AF",
    // য
    R: "\u09B0",
    // র
    L: "\u09B2",
    // ল
    SH: "\u09B6",
    // শ
    SSH: "\u09B7",
    // ষ
    S: "\u09B8",
    // স
    H: "\u09B9",
    // হ
    RR: "\u09DC",
    // ড়
    RRH: "\u09DD",
    // ঢ়
    Y: "\u09DF",
    // য়
    KSH: "\u0995\u09CD\u09B7",
    // ক্ষ
    GNG: "\u099C\u09CD\u099E",
    // জ্ঞ
    // Special
    HASANTA: "\u09CD",
    // ্ (virama/halant)
    ANUSVAR: "\u0982",
    // ং
    BISARGA: "\u0983",
    // ঃ
    CHANDRABINDU: "\u0981",
    // ঁ
    DAARI: "\u0964",
    // ।
    // Bangla digits
    D0: "\u09E6",
    // ০
    D1: "\u09E7",
    // ১
    D2: "\u09E8",
    // ২
    D3: "\u09E9",
    // ৩
    D4: "\u09EA",
    // ৪
    D5: "\u09EB",
    // ৫
    D6: "\u09EC",
    // ৬
    D7: "\u09ED",
    // ৭
    D8: "\u09EE",
    // ৮
    D9: "\u09EF"
    // ৯
  };
  var H = B.HASANTA;
  var IMPLICIT_A_MARKER = "\u200C";
  function conj(left, right) {
    return `${left}${H}${right}`;
  }
  function vowelEntry(find, independent, dependent) {
    return {
      find,
      replace: independent,
      rules: [
        {
          matches: [{ type: "prefix", scope: "consonant" }],
          replace: dependent
        }
      ]
    };
  }
  var PATTERNS = [
    // ── 4-char sequences ──────────────────────────────────────────────────────
    // kSh + vowel combos
    { find: "kkha", replace: conj(B.K, B.KH) + B.AA_KAR, rules: [] },
    { find: "kSha", replace: B.KSH + B.AA_KAR, rules: [] },
    { find: "kShi", replace: B.KSH + B.I_KAR, rules: [] },
    { find: "kShu", replace: B.KSH + B.U_KAR, rules: [] },
    { find: "kShe", replace: B.KSH + B.E_MATRA, rules: [] },
    { find: "kSho", replace: B.KSH + B.O_KAR, rules: [] },
    { find: "rrai", replace: B.RRI, rules: [] },
    { find: "rrhi", replace: B.RRI, rules: [] },
    // [consonant]rri → consonant + ৃ (rri-kaar / vocalic-R sign)
    // These MUST come before the 2-char kr/gr/pr/etc. cluster patterns so that
    // "krri" is consumed as a 4-char unit (কৃ) rather than "kr"(ক্র) + "ri"(রি).
    { find: "krri", replace: B.K + B.RRI_KAR, rules: [] },
    { find: "grri", replace: B.G + B.RRI_KAR, rules: [] },
    { find: "trri", replace: B.T + B.RRI_KAR, rules: [] },
    { find: "drri", replace: B.D + B.RRI_KAR, rules: [] },
    { find: "nrri", replace: B.N + B.RRI_KAR, rules: [] },
    { find: "prri", replace: B.P + B.RRI_KAR, rules: [] },
    { find: "brri", replace: B.B + B.RRI_KAR, rules: [] },
    { find: "mrri", replace: B.M + B.RRI_KAR, rules: [] },
    { find: "hrri", replace: B.H + B.RRI_KAR, rules: [] },
    { find: "lrri", replace: B.L + B.RRI_KAR, rules: [] },
    { find: "zrri", replace: B.Z + B.RRI_KAR, rules: [] },
    { find: "srri", replace: B.S + B.RRI_KAR, rules: [] },
    // ── 3-char sequences ──────────────────────────────────────────────────────
    // Vowels
    vowelEntry("rri", B.RRI, B.RRI_KAR),
    vowelEntry("oou", B.UU, B.UU_KAR),
    // Consonant clusters (3-char)
    { find: "kSh", replace: B.KSH, rules: [] },
    { find: "ksh", replace: B.KSH, rules: [] },
    // `chh` is a very common casual spelling of ছ (the Avro key is `Ch`). As a
    // 3-char pattern it is tried before the 2-char `ch`→চ, so `chhobi`→ছবি
    // instead of চ্হবি.
    { find: "chh", replace: B.CHH, rules: [] },
    { find: "GNG", replace: B.GNG, rules: [] },
    { find: "jNG", replace: B.GNG, rules: [] },
    { find: "bhl", replace: conj(B.BH, B.L), rules: [] },
    { find: "phl", replace: conj(B.PH, B.L), rules: [] },
    { find: "shr", replace: conj(B.SH, B.R), rules: [] },
    { find: "skr", replace: conj(B.S, conj(B.K, B.R)), rules: [] },
    { find: "spr", replace: conj(B.S, conj(B.P, B.R)), rules: [] },
    { find: "str", replace: conj(B.S, conj(B.T, B.R)), rules: [] },
    { find: "sth", replace: conj(B.S, B.TH), rules: [] },
    { find: "skl", replace: conj(B.S, conj(B.K, B.L)), rules: [] },
    { find: "spl", replace: conj(B.S, conj(B.P, B.L)), rules: [] },
    { find: "Shr", replace: conj(B.SH, B.R), rules: [] },
    { find: "Ngr", replace: conj(B.NG_LETTER, B.R), rules: [] },
    { find: "ndr", replace: conj(B.N, conj(B.D, B.R)), rules: [] },
    { find: "ntr", replace: conj(B.N, conj(B.T, B.R)), rules: [] },
    { find: "mpr", replace: conj(B.M, conj(B.P, B.R)), rules: [] },
    { find: "thr", replace: conj(B.TH, B.R), rules: [] },
    { find: "dhr", replace: conj(B.DH, B.R), rules: [] },
    { find: "khr", replace: conj(B.KH, B.R), rules: [] },
    { find: "ghr", replace: conj(B.GH, B.R), rules: [] },
    { find: "bhr", replace: conj(B.BH, B.R), rules: [] },
    { find: "phr", replace: conj(B.PH, B.R), rules: [] },
    { find: "mhr", replace: conj(B.M, B.R), rules: [] },
    { find: "lhr", replace: conj(B.L, B.R), rules: [] },
    { find: "Thr", replace: conj(B.TTH, B.R), rules: [] },
    { find: "Dhr", replace: conj(B.DDH, B.R), rules: [] },
    { find: "NGr", replace: conj(B.NYA, B.R), rules: [] },
    { find: "ngh", replace: conj(B.N, B.GH), rules: [] },
    { find: "nkh", replace: conj(B.N, B.KH), rules: [] },
    { find: "nth", replace: conj(B.N, B.TH), rules: [] },
    { find: "ndh", replace: conj(B.N, B.DH), rules: [] },
    { find: "nch", replace: conj(B.N, B.CH), rules: [] },
    { find: "njh", replace: conj(B.N, B.JH), rules: [] },
    { find: "nsh", replace: conj(B.N, B.SH), rules: [] },
    { find: "mth", replace: conj(B.M, B.TH), rules: [] },
    { find: "mtr", replace: conj(B.M, conj(B.T, B.R)), rules: [] },
    { find: "mbh", replace: conj(B.M, B.BH), rules: [] },
    { find: "mph", replace: conj(B.M, B.PH), rules: [] },
    // ── 2-char sequences ──────────────────────────────────────────────────────
    // Vowel digraphs
    vowelEntry("aa", B.A, B.AA_KAR),
    vowelEntry("ii", B.II, B.II_KAR),
    vowelEntry("ee", B.II, B.II_KAR),
    vowelEntry("uu", B.UU, B.UU_KAR),
    vowelEntry("oo", B.UU, B.UU_KAR),
    vowelEntry("oi", B.OI, B.OI_KAR),
    vowelEntry("ou", B.OU, B.OU_KAR),
    vowelEntry("OI", B.OI, B.OI_KAR),
    vowelEntry("OU", B.OU, B.OU_KAR),
    // 2-char consonant digraphs
    { find: "kh", replace: B.KH, rules: [] },
    { find: "gh", replace: B.GH, rules: [] },
    { find: "Ng", replace: B.NG_LETTER, rules: [] },
    { find: "ch", replace: B.CH, rules: [] },
    { find: "Ch", replace: B.CHH, rules: [] },
    { find: "jh", replace: B.JH, rules: [] },
    { find: "NG", replace: B.NYA, rules: [] },
    { find: "Th", replace: B.TTH, rules: [] },
    { find: "Dh", replace: B.DDH, rules: [] },
    { find: "th", replace: B.TH, rules: [] },
    { find: "dh", replace: B.DH, rules: [] },
    { find: "ph", replace: B.PH, rules: [] },
    { find: "bh", replace: B.BH, rules: [] },
    { find: "sh", replace: B.SH, rules: [] },
    { find: "Sh", replace: B.SSH, rules: [] },
    { find: "Rh", replace: B.RRH, rules: [] },
    // 2-char consonant clusters
    { find: "kt", replace: conj(B.K, B.T), rules: [] },
    { find: "kk", replace: conj(B.K, B.K), rules: [] },
    { find: "kn", replace: conj(B.K, B.N), rules: [] },
    { find: "km", replace: conj(B.K, B.M), rules: [] },
    { find: "kl", replace: conj(B.K, B.L), rules: [] },
    { find: "kr", replace: conj(B.K, B.R), rules: [] },
    { find: "ks", replace: conj(B.K, B.S), rules: [] },
    { find: "gn", replace: conj(B.G, B.N), rules: [] },
    { find: "gm", replace: conj(B.G, B.M), rules: [] },
    { find: "gl", replace: conj(B.G, B.L), rules: [] },
    { find: "gr", replace: conj(B.G, B.R), rules: [] },
    { find: "gg", replace: conj(B.G, B.G), rules: [] },
    { find: "gd", replace: conj(B.G, B.D), rules: [] },
    { find: "gt", replace: conj(B.G, B.T), rules: [] },
    { find: "gj", replace: conj(B.G, B.J), rules: [] },
    { find: "jj", replace: conj(B.J, B.J), rules: [] },
    { find: "jn", replace: conj(B.J, B.N), rules: [] },
    { find: "jm", replace: conj(B.J, B.M), rules: [] },
    { find: "jl", replace: conj(B.J, B.L), rules: [] },
    { find: "jr", replace: conj(B.J, B.R), rules: [] },
    { find: "jb", replace: conj(B.J, B.B), rules: [] },
    { find: "nk", replace: conj(B.N, B.K), rules: [] },
    // 'ng' → ং (anusvara) by default.
    // When followed by a vowel it becomes ঙ্গ (ঙ + ্ + গ) so that "anga" → অঙ্গা.
    // At end of word or before a consonant it stays ং (e.g. "bangla" → বাংলা).
    {
      find: "ng",
      replace: B.ANUSVAR,
      rules: [{ matches: [{ type: "suffix", scope: "vowel" }], replace: conj(B.NG_LETTER, B.G) }]
    },
    { find: "nn", replace: conj(B.N, B.N), rules: [] },
    { find: "nm", replace: conj(B.N, B.M), rules: [] },
    { find: "nl", replace: conj(B.N, B.L), rules: [] },
    { find: "nr", replace: conj(B.N, B.R), rules: [] },
    { find: "nd", replace: conj(B.N, B.D), rules: [] },
    { find: "nt", replace: conj(B.N, B.T), rules: [] },
    { find: "np", replace: conj(B.N, B.P), rules: [] },
    { find: "nb", replace: conj(B.N, B.B), rules: [] },
    { find: "nc", replace: conj(B.N, B.CH), rules: [] },
    { find: "nj", replace: conj(B.N, B.J), rules: [] },
    { find: "ns", replace: conj(B.N, B.S), rules: [] },
    { find: "pt", replace: conj(B.P, B.T), rules: [] },
    { find: "pk", replace: conj(B.P, B.K), rules: [] },
    { find: "pp", replace: conj(B.P, B.P), rules: [] },
    { find: "pn", replace: conj(B.P, B.N), rules: [] },
    { find: "pm", replace: conj(B.P, B.M), rules: [] },
    { find: "pl", replace: conj(B.P, B.L), rules: [] },
    { find: "pr", replace: conj(B.P, B.R), rules: [] },
    { find: "ps", replace: conj(B.P, B.S), rules: [] },
    { find: "bt", replace: conj(B.B, B.T), rules: [] },
    { find: "bk", replace: conj(B.B, B.K), rules: [] },
    { find: "bb", replace: conj(B.B, B.B), rules: [] },
    { find: "bn", replace: conj(B.B, B.N), rules: [] },
    { find: "bm", replace: conj(B.B, B.M), rules: [] },
    { find: "bl", replace: conj(B.B, B.L), rules: [] },
    { find: "br", replace: conj(B.B, B.R), rules: [] },
    { find: "bd", replace: conj(B.B, B.D), rules: [] },
    { find: "bj", replace: conj(B.B, B.J), rules: [] },
    { find: "mk", replace: conj(B.M, B.K), rules: [] },
    { find: "mg", replace: conj(B.M, B.G), rules: [] },
    { find: "mm", replace: conj(B.M, B.M), rules: [] },
    { find: "mn", replace: conj(B.M, B.N), rules: [] },
    { find: "ml", replace: conj(B.M, B.L), rules: [] },
    { find: "mr", replace: conj(B.M, B.R), rules: [] },
    { find: "mb", replace: conj(B.M, B.B), rules: [] },
    { find: "ms", replace: conj(B.M, B.S), rules: [] },
    { find: "mp", replace: conj(B.M, B.P), rules: [] },
    { find: "mt", replace: conj(B.M, B.T), rules: [] },
    { find: "md", replace: conj(B.M, B.D), rules: [] },
    { find: "lk", replace: conj(B.L, B.K), rules: [] },
    { find: "lg", replace: conj(B.L, B.G), rules: [] },
    { find: "ll", replace: conj(B.L, B.L), rules: [] },
    { find: "ln", replace: conj(B.L, B.N), rules: [] },
    { find: "lm", replace: conj(B.L, B.M), rules: [] },
    { find: "lp", replace: conj(B.L, B.P), rules: [] },
    { find: "lb", replace: conj(B.L, B.B), rules: [] },
    { find: "ld", replace: conj(B.L, B.D), rules: [] },
    { find: "lt", replace: conj(B.L, B.T), rules: [] },
    { find: "ls", replace: conj(B.L, B.S), rules: [] },
    { find: "lr", replace: conj(B.L, B.R), rules: [] },
    { find: "rk", replace: conj(B.R, B.K), rules: [] },
    { find: "rg", replace: conj(B.R, B.G), rules: [] },
    { find: "rn", replace: conj(B.R, B.N), rules: [] },
    { find: "rm", replace: conj(B.R, B.M), rules: [] },
    { find: "rl", replace: conj(B.R, B.L), rules: [] },
    { find: "rr", replace: B.RR, rules: [] },
    { find: "rb", replace: conj(B.R, B.B), rules: [] },
    { find: "rd", replace: conj(B.R, B.D), rules: [] },
    { find: "rt", replace: conj(B.R, B.T), rules: [] },
    { find: "rs", replace: conj(B.R, B.S), rules: [] },
    { find: "rp", replace: conj(B.R, B.P), rules: [] },
    { find: "sk", replace: conj(B.S, B.K), rules: [] },
    { find: "sg", replace: conj(B.S, B.G), rules: [] },
    { find: "sn", replace: conj(B.S, B.N), rules: [] },
    { find: "sm", replace: conj(B.S, B.M), rules: [] },
    { find: "sl", replace: conj(B.S, B.L), rules: [] },
    { find: "sb", replace: conj(B.S, B.B), rules: [] },
    { find: "sd", replace: conj(B.S, B.D), rules: [] },
    { find: "st", replace: conj(B.S, B.T), rules: [] },
    { find: "sp", replace: conj(B.S, B.P), rules: [] },
    { find: "ss", replace: conj(B.S, B.S), rules: [] },
    { find: "sr", replace: conj(B.S, B.R), rules: [] },
    { find: "tk", replace: conj(B.T, B.K), rules: [] },
    { find: "tg", replace: conj(B.T, B.G), rules: [] },
    { find: "tn", replace: conj(B.T, B.N), rules: [] },
    { find: "tm", replace: conj(B.T, B.M), rules: [] },
    { find: "tl", replace: conj(B.T, B.L), rules: [] },
    { find: "tb", replace: conj(B.T, B.B), rules: [] },
    { find: "td", replace: conj(B.T, B.D), rules: [] },
    { find: "tt", replace: conj(B.T, B.T), rules: [] },
    { find: "tp", replace: conj(B.T, B.P), rules: [] },
    { find: "tr", replace: conj(B.T, B.R), rules: [] },
    { find: "ts", replace: conj(B.T, B.S), rules: [] },
    { find: "dk", replace: conj(B.D, B.K), rules: [] },
    { find: "dg", replace: conj(B.D, B.G), rules: [] },
    { find: "dn", replace: conj(B.D, B.N), rules: [] },
    { find: "dm", replace: conj(B.D, B.M), rules: [] },
    { find: "dl", replace: conj(B.D, B.L), rules: [] },
    { find: "db", replace: conj(B.D, B.B), rules: [] },
    { find: "dd", replace: conj(B.D, B.D), rules: [] },
    { find: "dp", replace: conj(B.D, B.P), rules: [] },
    { find: "dr", replace: conj(B.D, B.R), rules: [] },
    { find: "ds", replace: conj(B.D, B.S), rules: [] },
    { find: "dt", replace: conj(B.D, B.T), rules: [] },
    // Special characters
    { find: "^^", replace: H, rules: [] },
    // explicit hasanta
    { find: ",,", replace: B.CHANDRABINDU, rules: [] },
    // ── 1-char sequences ──────────────────────────────────────────────────────
    // Vowels (single-char)
    vowelEntry("a", B.A, B.AA_KAR),
    vowelEntry("i", B.I, B.I_KAR),
    vowelEntry("u", B.U, B.U_KAR),
    vowelEntry("e", B.E, B.E_KAR),
    // ে (e-kaar)
    // 'o' is the most ambiguous Banglish letter — it can mean either the
    // explicit ো-kaar or the inherent অ that every Bangla consonant carries
    // silently. Strict Avro Phonetic always emits ো-kaar after a consonant; we
    // deliberately deviate to match how people actually type Banglish:
    //
    //   1. After a consonant → emit ZWNJ (U+200C) as an "implicit অ" marker.
    //      ZWNJ is invisible, isn't a Bangla consonant (so auto-hasanta does
    //      NOT fire across it), and is stripped in `parse()` before NFC.
    //      e.g.  `bo` → ব,  `bosen` → বসেন,  `kor` → কর,  `mon` → মন.
    //
    //      Words that legitimately have ো-kaar (বোন, তো, দেখো, বারো …) live
    //      in the dictionary and bypass the engine entirely.
    //
    //   2. Otherwise (start of word, after vowel/punct) → independent ও.
    {
      find: "o",
      replace: B.O,
      rules: [
        {
          matches: [{ type: "prefix", scope: "consonant" }],
          replace: IMPLICIT_A_MARKER
        }
      ]
    },
    // Uppercase vowels → always independent form
    { find: "A", replace: B.A, rules: [] },
    { find: "I", replace: B.II, rules: [] },
    // capital I → ঈ
    { find: "U", replace: B.UU, rules: [] },
    // capital U → ঊ
    { find: "E", replace: B.E, rules: [] },
    { find: "O", replace: B.O, rules: [] },
    // Consonants (single-char)
    { find: "k", replace: B.K, rules: [] },
    { find: "g", replace: B.G, rules: [] },
    { find: "j", replace: B.J, rules: [] },
    { find: "T", replace: B.TT, rules: [] },
    { find: "D", replace: B.DD, rules: [] },
    { find: "N", replace: B.NN, rules: [] },
    { find: "t", replace: B.T, rules: [] },
    { find: "d", replace: B.D, rules: [] },
    { find: "n", replace: B.N, rules: [] },
    { find: "p", replace: B.P, rules: [] },
    { find: "b", replace: B.B, rules: [] },
    { find: "m", replace: B.M, rules: [] },
    { find: "z", replace: B.Z, rules: [] },
    { find: "r", replace: B.R, rules: [] },
    { find: "l", replace: B.L, rules: [] },
    { find: "s", replace: B.S, rules: [] },
    { find: "h", replace: B.H, rules: [] },
    { find: "R", replace: B.RR, rules: [] },
    { find: "y", replace: B.Y, rules: [] },
    { find: "S", replace: B.SH, rules: [] },
    // S → শ (common alternative)
    { find: "f", replace: B.PH, rules: [] },
    // f → ফ
    { find: "v", replace: B.BH, rules: [] },
    // v → ভ
    { find: "q", replace: B.K, rules: [] },
    // q → ক (no native Bangla)
    { find: "w", replace: B.O, rules: [] },
    // w → ও (approximation)
    {
      find: "x",
      replace: conj(B.K, B.S),
      rules: [
        { matches: [{ type: "prefix", scope: "punctuation" }], replace: `${B.E}${conj(B.K, B.S)}` }
      ]
    },
    // 'c' → স by default (e.g. "peace" → পিস). 'ch' is already handled by the
    // 2-char 'ch' pattern which fires before single 'c' due to greedy ordering.
    { find: "c", replace: B.S, rules: [] },
    // Special symbols
    { find: "^", replace: B.CHANDRABINDU, rules: [] },
    { find: ":", replace: B.BISARGA, rules: [] },
    // Bangla digits
    { find: "0", replace: B.D0, rules: [] },
    { find: "1", replace: B.D1, rules: [] },
    { find: "2", replace: B.D2, rules: [] },
    { find: "3", replace: B.D3, rules: [] },
    { find: "4", replace: B.D4, rules: [] },
    { find: "5", replace: B.D5, rules: [] },
    { find: "6", replace: B.D6, rules: [] },
    { find: "7", replace: B.D7, rules: [] },
    { find: "8", replace: B.D8, rules: [] },
    { find: "9", replace: B.D9, rules: [] },
    // Sentence-ending full stop → Bangla daari (handled specially in parse)
    {
      find: ".",
      replace: B.DAARI,
      rules: [{ matches: [{ type: "suffix", scope: "exact", value: "." }], replace: "." }]
    }
  ];
  var SORTED_PATTERNS = [...PATTERNS].sort(
    (a, b) => b.find.length - a.find.length
  );
  var VOWELS = /* @__PURE__ */ new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  function isVowel(ch) {
    return VOWELS.has(ch);
  }
  function isConsonant(ch) {
    if (ch.length === 0) return false;
    const code = ch.charCodeAt(0);
    const isAlpha = code >= 65 && code <= 90 || // A-Z
    code >= 97 && code <= 122;
    return isAlpha && !VOWELS.has(ch);
  }
  function isPunctuation(ch) {
    return !isVowel(ch) && !isConsonant(ch);
  }
  function isBanglaConsonant(ch) {
    if (!ch) return false;
    const cp = ch.codePointAt(0);
    if (cp === void 0) return false;
    return cp >= 2453 && cp <= 2489 || // ক–হ (main consonant block)
    cp === 2510 || // ৎ  khanda ta
    cp === 2524 || // ড়  rra  (precomposed)
    cp === 2525 || // ঢ়  rha  (precomposed)
    cp === 2527;
  }
  function assertString(value) {
    if (typeof value !== "string") {
      throw new TypeError(`@subhesadek/avro-phonetic: expected a string, got ${typeof value}`);
    }
  }
  function charBefore(input, pos) {
    return pos > 0 ? input[pos - 1] ?? "" : "";
  }
  function charAfter(input, pos, findLength) {
    const idx = pos + findLength;
    return idx < input.length ? input[idx] ?? "" : "";
  }
  var BENGALI_NUKTA = "\u09BC";
  var BENGALI_HASANTA = "\u09CD";
  function endsInBanglaConsonant(str) {
    if (!str) return false;
    const last = str.charAt(str.length - 1);
    if (isBanglaConsonant(last)) return true;
    if (last === BENGALI_NUKTA && str.length >= 2) {
      return isBanglaConsonant(str.charAt(str.length - 2));
    }
    return false;
  }
  function startsWithBanglaConsonant(str) {
    if (!str) return false;
    return isBanglaConsonant(str.charAt(0));
  }
  function testCondition(cond, input, pos, findLength) {
    const ch = cond.type === "prefix" ? charBefore(input, pos) : charAfter(input, pos, findLength);
    let result;
    switch (cond.scope) {
      case "vowel":
        result = isVowel(ch);
        break;
      case "consonant":
        result = isConsonant(ch);
        break;
      case "punctuation":
        result = isPunctuation(ch);
        break;
      case "exact":
        result = ch === (cond.value ?? "");
        break;
      default: {
        cond.scope;
        result = false;
      }
    }
    return cond.negative === true ? !result : result;
  }
  function tryPattern(entry, input, pos) {
    const { find, replace, rules } = entry;
    if (!input.startsWith(find, pos)) return null;
    if (rules !== void 0 && rules.length > 0) {
      for (const rule of rules) {
        const allMatch = rule.matches.every((cond) => testCondition(cond, input, pos, find.length));
        if (allMatch) return rule.replace;
      }
    }
    return replace;
  }
  function findMatch(segment, pos) {
    for (const entry of SORTED_PATTERNS) {
      const replace = tryPattern(entry, segment, pos);
      if (replace !== null) return { find: entry.find, replace };
    }
    return null;
  }
  function phoneticParse(segment, banglaDigits) {
    let bangla = "";
    let pos = 0;
    while (pos < segment.length) {
      let match = findMatch(segment, pos);
      if (match === null) {
        const ch = segment[pos] ?? "";
        if (ch >= "A" && ch <= "Z") {
          const lowered = segment.slice(0, pos) + ch.toLowerCase() + segment.slice(pos + 1);
          match = findMatch(lowered, pos);
        }
      }
      if (match === null) {
        bangla += segment[pos] ?? "";
        pos += 1;
        continue;
      }
      const effective = !banglaDigits && /[০-৯]/u.test(match.replace) ? segment[pos] ?? "" : match.replace;
      if (endsInBanglaConsonant(bangla) && startsWithBanglaConsonant(effective)) {
        bangla += BENGALI_HASANTA;
      }
      bangla += effective;
      pos += match.find.length;
    }
    return bangla;
  }
  function resolveDictionary(option) {
    if (option === false) return null;
    if (option === void 0 || option === true) return BANGLISH_DICTIONARY;
    return option;
  }
  var TOKEN_REGEX = /([A-Za-z]+)|([^A-Za-z]+)/gu;
  function dictionaryLookup(dict, key) {
    if (!Object.hasOwn(dict, key)) return null;
    const value = dict[key];
    return typeof value === "string" ? value : null;
  }
  function parse(input, options = {}) {
    assertString(input);
    const { banglaDigits = true, banglaFullStop = true, dictionary } = options;
    if (input.length === 0) {
      return { bangla: "", english: input };
    }
    const dict = resolveDictionary(dictionary);
    let bangla = "";
    if (dict === null) {
      bangla = phoneticParse(input, banglaDigits);
    } else {
      TOKEN_REGEX.lastIndex = 0;
      let match;
      while ((match = TOKEN_REGEX.exec(input)) !== null) {
        const word = match[1];
        const other = match[2];
        if (word !== void 0) {
          const hit = dictionaryLookup(dict, word.toLowerCase());
          bangla += hit ?? phoneticParse(word, banglaDigits);
        } else if (other !== void 0) {
          bangla += phoneticParse(other, banglaDigits);
        }
      }
    }
    if (!banglaFullStop) {
      bangla = bangla.replace(/।/gu, ".");
    }
    if (bangla.includes(IMPLICIT_A_MARKER)) {
      bangla = bangla.split(IMPLICIT_A_MARKER).join("");
    }
    return { bangla: bangla.normalize("NFC"), english: input };
  }
  function toBangla(input, options = {}) {
    return parse(input, options).bangla;
  }
  function isBangla(text) {
    assertString(text);
    return /[ঀ-৿]/u.test(text);
  }
  return __toCommonJS(index_exports);
})();
