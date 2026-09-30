/**
 * Bangla Unicode <-> Bijoy (SutonnyMJ) High-Precision Conversion Engine
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        var exports = factory();
        root.BanglaConverter = exports;
        root.BanglaLikhi = exports.BanglaLikhi;
        root.ConvertToASCII = exports.ConvertToASCII;
        root.ConvertToUnicode = exports.ConvertToUnicode;
        root.fixBanglaText = exports.fixBanglaText;
    }
}(typeof self !== 'undefined' ? self : this, function () {

    // --- Helper Functions ---
    function IsBanglaDigit(n) {
        return n >= '০' && n <= '৯';
    }
    function IsBanglaPreKar(n) {
        return n === 'ি' || n === 'ৈ' || n === 'ে';
    }
    function IsBanglaPostKar(n) {
        return n === 'া' || n === 'ো' || n === 'ৌ' || n === 'ৗ' || n === 'ু' || n === 'ূ' || n === 'ী' || n === 'ৃ';
    }
    function IsBanglaKar(n) {
        return IsBanglaPreKar(n) || IsBanglaPostKar(n);
    }
    function IsBanglaBanjonborno(n) {
        return (n >= 'ক' && n <= 'হ') || n === 'ড়' || n === 'ঢ়' || n === 'য়' || n === 'ৎ' || n === 'ং' || n === 'ঃ' || n === 'ঁ';
    }
    function IsBanglaSoroborno(n) {
        return n === 'অ' || n === 'আ' || n === 'ই' || n === 'ঈ' || n === 'উ' || n === 'ঊ' || n === 'ঋ' || n === 'ঌ' || n === 'এ' || n === 'ঐ' || n === 'ও' || n === 'ঔ';
    }
    function IsBanglaNukta(n) {
        return n === 'ং' || n === 'ঃ' || n === 'ঁ';
    }
    function IsBanglaFola(n) {
        return n === '্য' || n === '্র';
    }
    function IsBanglaHalant(n) {
        return n === '্';
    }
    function IsSpace(n) {
        return n === ' ' || n === '\t' || n === '\n' || n === '\r';
    }

    function escapeRegex(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    function buildConversionPatterns(map) {
        var arr = [];
        for (var k in map) {
            if (Object.prototype.hasOwnProperty.call(map, k)) {
                arr.push({ regex: new RegExp(escapeRegex(k), 'g'), replacement: map[k] });
            }
        }
        return arr;
    }

    var bijoy_string_conversion_map = {
        "i¨": "র‌্য", "ª¨": "্র্য", "°": "ক্ক", "±": "ক্ট", "³": "ক্ত", "K¡": "ক্ব", "¯Œ": "স্ক্র", "µ": "ক্র", "K¬": "ক্ল", "¶è": "ক্ষ্ণ", "þ": "হ্ম", "²": "ক্ষ্ম", "ÿè": "ক্ষ্ম", "•¶": "ঙ্ক্ষ", "•ÿ": "ঙ্ক্ষ", "¶": "ক্ষ", "ÿ": "ক্ষ", "·": "ক্স", "´": "ক্ম", "¸": "গু", "»": "গ্ধ", "Mœ": "গ্ন", "M¥": "গ্ম", "MÖƒ": "গ্রূ", "Mø": "গ্ল", "M¬": "গ্ল", "M­": "গ্ল", "Nœ": "ঘ্ন", "¼": "ঙ্ক", "•L": "ঙ্খ", "½": "ঙ্গ", "•N": "ঙ্ঘ", "•": "ক্স", "”P": "চ্চ", "”Q¡": "চ্ছ্ব", "”Q": "চ্ছ", "”T": "চ্ঞ", "¾¡": "জ্জ্ব", "¾": "জ্জ", "À": "জ্ঝ", "Á": "জ্ঞ", "R¡": "জ্ব", "R¦": "জ্ব", "Â": "ঞ্চ", "Ã": "ঞ্ছ", "Ä": "ঞ্জ", "Å": "ঞ্ঝ", "Æ": "ট্ট", "U¡": "ট্ব", "U¥": "ট্ম", "Ç": "ড্ড", "È": "ণ্ট", "É": "ণ্ঠ", "Ý": "ন্স", "Ê": "ণ্ড", "Ð": "ণ্ড", "š‘": "ন্তু", "Y^": "ণ্ব", "Ë¡": "ত্ত্ব", "šÍ¡": "ন্ত্ব", "š—¡": "ন্ত্ব", "Ë": "ত্ত", "Ì": "ত্থ", "Z¥": "ত্ম", "Í": "ত্ম", "Z¡": "ত্ব", "Zœ": "ত্ন", "Î": "ত্র", "_¡": "থ্ব", "˜M": "দ্গ", "˜N": "দ্ঘ", "Ï": "দ্দ", "×": "দ্ধ", "›Ø": "ন্দ্ব", "˜¡": "দ্ব", "Ø": "দ্ব", "™£": "দ্ভ্র", "™¢": "দ্ভ", "Ù": "দ্ম", "`ªƒ": "দ্রূ", "aªƒ": "ধ্রূ", "aŸ": "ধ্ব", "a¥": "ধ্ম", "›U": "ন্ট", "Ú": "ন্ঠ", "Û": "ন্ড", "šÍ": "ন্ত", "š—": "ন্ত", "š¿": "ন্ত্র", "š’": "ন্থ", "›`": "ন্দ", "Ü": "ন্ধ", "Yœ": "ণ্ন", "Yè": "ণ্ন", "bœ": "ন্ন", "š^": "ন্ব", "b¥": "ন্ম", "š§": "ন্ম", "Þ": "প্ট", "ß": "প্ত", "cœ": "প্ন", "à": "প্প", "c¬": "প্ল", "cø": "প্ল", "c­": "প্ল", "á": "প্স", "cÖƒ": "প্রূ", "d¬": "ফ্ল", "â": "ব্জ", "ã": "ব্দ", "ä": "ব্ধ", "eŸ": "ব্ব", "e­": "ব্ল", "eø": "ব্ল", "eªƒ": "ব্রূ", "åƒ": "ভ্রূ", "å": "ভ্র", "f‚": "ভূ", "gœ": "ম্ন", "¤œ": "ম্ন", "¤ú": "ম্প", "¤c": "ম্প", "ç": "ম্ফ", "¤^": "ম্ব", "¤¢": "ম্ভ", "¤£": "ম্ভ্র", "¤§": "ম্ম", "¤ø": "ম্ল", "gø": "ম্ল", "¤¬": "ম্ল", "g¬": "ম্ল", "¤ª": "ম্র", "iƒ": "রূ", "é": "ল্ক", "ê": "ল্গ", "ë": "ল্ট", "ì": "ল্ড", "í": "ল্প", "î": "ল্ফ", "j¦": "ল্ব", "j¥": "ল্ম", "jø": "ল্ল", "j­": "ল্ল", "kÖƒ": "শ্রূ", "kªƒ": "শ্রূ", "ï": "শু", "ð": "শ্চ", "ñ": "শ্ছ", "kœ": "শ্ন", "k¦": "শ্ব", "k^": "শ্ব", "k¥": "শ্ম", "kø": "শ্ল", "k¬": "শ্ল", "k­": "শ্ল", "®‹": "ষ্ক", "®Œ": "ষ্ক্র", "ó": "ষ্ট", "ô": "ষ্ঠ", "ò": "ষ্ণ", "®ú": "ষ্প", "®c": "ষ্প", "õ": "ষ্ফ", "®§": "ষ্ম", "¯‹": "স্ক", "¯y‹": "স্কু", "÷": "স্ট", "ö": "স্খ", "¯Í": "স্ত", "¯—": "স্ত", "¯‘": "স্তু", "¯¿": "স্ত্র", "¯’": "স্থ", "mœ": "স্ন", "¯œ": "স্ন", "¯ú": "স্প", "ù": "স্ফ", "¯ª": "স্র", "¯^": "স্ব", "¯§": "স্ম", "mªƒ": "স্রূ", "¯­": "স্ল", "¯ø": "স্ল", "mø": "স্ল", "û": "হু", "nŸ": "হ্ব", "nè": "হ্ণ", "ý": "হ্ন", "n¬": "হ্ল", "nƒ": "হৃ", "ü": "হৃ", "©": "র্", "Av": "আ", "A": "অ", "B": "ই", "C": "ঈ", "D": "উ", "E": "ঊ", "F": "ঋ", "G": "এ", "H": "ঐ", "I": "ও", "J": "ঔ", "K": "ক", "L": "খ", "M": "গ", "N": "ঘ", "O": "ঙ", "P": "চ", "Q": "ছ", "R": "জ", "S": "ঝ", "T": "ঞ", "U": "ট", "V": "ঠ", "W": "ড", "X": "ঢ", "Y": "ণ", "Z": "ত", "_": "থ", "`": "দ", "a": "ধ", "b": "ন", "c": "প", "d": "ফ", "e": "ব", "f": "ভ", "g": "ম", "h": "য", "i": "র", "j": "ল", "k": "শ", "l": "ষ", "m": "স", "n": "হ", "o": "ড়", "p": "ঢ়", "q": "য়", "r": "ৎ", "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪", "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯", "v": "া", "w": "ি", "x": "ী", "y": "ু", "z": "ু", "–": "ু", "“": "ু", "æ": "ু", "~": "ূ", "‚": "ূ", "„": "ৃ", "‡": "ে", "†": "ে", "‰": "ৈ", "ˆ": "ৈ", "Š": "ৗ", "Ô": "‘", "Õ": "’", "|": "।", "Ò": "“", "Ó": "”", "s": "ং", "t": "ঃ", "u": "ঁ", "ª": "্র", "Ö": "্র", "«": "্র", "¨": "্য", "&": "্", "…": "ৃ", "Ñ": "—", "\\": "॥"
    };

    var correctBijoy = { "&ª": "ª" };
    var correctUnicode = { "šত্ম": "ন্ত", "¯ত্ম": "স্ত" };

    var uni2bijoy_string_conversion_map = {
        "।": "|", "‘": "Ô", "’": "Õ", "“": "Ò", "”": "Ó", "্র্য": "ª¨", "র‌্য": "i¨", "ক্ক": "°", "ক্ট": "±", "ক্ত": "³", "ক্ব": "K¡", "স্ক্র": "¯Œ", "ক্র": "µ", "ক্ল": "K¬", "ক্ষ্ন": "¶è", "ক্ষ্ণ": "¶è", "হ্ম": "þ", "ক্ষ্ম": "²", "ঙ্ক্ষ": "•¶", "ক্ষ": "¶", "ক্স": "·", "ক্ম": "´", "ঙ্গু": "½y", "গু": "¸", "গ্ধ": "»", "গ্ন": "Mœ", "গ্ম": "M¥", "গ্লু": "Møæ", "গ্ল": "Mø", "গ্রু": "Mªæ", "ঘ্ন": "Nœ", "ঙ্ক": "¼", "ঙ্খ": "•L", "ঙ্গ": "½", "ঙ্ঘ": "•N", "চ্চ": "”P", "চ্ছ": "”Q", "চ্ছ্ব": "”Q¡", "চ্ঞ": "”T", "জ্জ্ব": "¾¡", "জ্জ": "¾", "জ্ঝ": "À", "জ্ঞ": "Á", "জ্ব": "R¡", "ঞ্চ": "Â", "ঞ্ছ": "Ã", "ঞ্জ": "Ä", "ঞ্ঝ": "Å", "ট্ট": "Æ", "ট্ব": "U¡", "ট্ম": "U¥", "ড্ড": "Ç", "ণ্ট": "È", "ণ্ঠ": "É", "ন্স": "Ý", "ণ্ড": "Ð", "ন্তু": "š‘", "ণ্ব": "Y^", "ত্ত্ব": "Ë¡", "ন্ত্ব": "šÍ¡", "ত্ত": "Ë", "ত্থ": "Ì", "ত্ন": "Zœ", "ত্ম": "Z¥", "ত্ব": "Z¡", "ত্রু": "Îæ", "ত্রূ": "Îƒ", "থ্ব": "_¡", "দ্গ": "˜M", "দ্ঘ": "˜N", "দ্দ": "Ï", "দ্ধ": "×", "ন্দ্ব": "›Ø", "দ্ব": "Ø", "দ্ভ্র": "™£", "দ্ভ": "™¢", "দ্ম": "Ù", "দ্রু": "`ªæ", "শ্রু": "kÖæ", "প্রু": "cÖæ", "প্লু": "cøæ", "ধ্ব": "aŸ", "ধ্ম": "a¥", "ন্ট": "›U", "ন্ঠ": "Ú", "ন্ড": "Û", "ন্ত্র": "š¿", "ন্ত": "šÍ", "স্ত্র": "¯¿", "ত্র": "Î", "ন্থ": "š’", "ন্দ": "›`", "ন্ধ": "Ü", "ণ্ণ": "Yœ", "ণ্ন": "Yœ", "ন্ন": "bœ", "ন্ব": "š^", "ন্ম": "b¥", "প্ট": "Þ", "প্ত": "ß", "প্ন": "cœ", "প্প": "à", "প্ল": "cø", "প্স": "á", "ফ্ল": "d¬", "ব্জ": "â", "ব্দ": "ã", "ব্ধ": "ä", "ব্ব": "eŸ", "ব্ল": "eø", "ভ্র": "å", "ম্ন": "gœ", "ম্প": "¤ú", "ম্ফ": "ç", "ম্ব": "¤^", "ম্ভ": "¤¢", "ম্ভ্র": "¤£", "ম্ম": "¤§", "ম্ল": "¤ø", "ড়ু": "o–", "ঢ়ু": "p–", "রু": "iæ", "রূ": "iƒ", "ল্ক": "é", "ল্গ": "ê", "ল্প": "í", "ল্ট": "ë", "ল্ড": "ì", "ল্ফ": "î", "ল্ব": "j¦", "ল্ম": "j¥", "ল্ল": "jø", "শু": "ï", "শ্চ": "ð", "শ্ছ": "ñ", "শ্ন": "kœ", "শ্ব": "k¦", "শ্ম": "k¥", "শ্ল": "kø", "ষ্ক": "®‹", "ষ্ক্র": "®Œ", "ষ্ট": "ó", "ষ্ঠ": "ô", "ষ্ণ": "ò", "ষ্প": "®ú", "ষ্ফ": "õ", "ষ্ম": "®§", "স্ক": "¯‹", "স্ট": "÷", "স্খ": "ö", "স্তু": "¯‘", "স্ত": "¯Í", "স্থ": "¯’", "স্ন": "mœ", "স্প": "¯ú", "স্ফ": "ù", "স্ব": "¯^", "স্ম": "¯§", "স্ল": "¯ø", "হ্ব": "nŸ", "হু": "û", "হ্ণ": "nè", "হ্ন": "ý", "হ্ল": "n¬", "হৃ": "ü", "র্": "©", "্র": "ª", "্য": "¨", "্": "&", "আ": "Av", "অ": "A", "ই": "B", "ঈ": "C", "উ": "D", "ঊ": "E", "ঋ": "F", "এ": "G", "ঐ": "H", "ও": "I", "ঔ": "J", "ক": "K", "খ": "L", "গ": "M", "ঘ": "N", "ঙ": "O", "চ": "P", "ছ": "Q", "জ": "R", "ঝ": "S", "ঞ": "T", "ট": "U", "ঠ": "V", "ড": "W", "ঢ": "X", "ণ": "Y", "ত": "Z", "থ": "_", "দ": "`", "ধ": "a", "ন": "b", "প": "c", "ফ": "d", "ব": "e", "ভ": "f", "ম": "g", "য": "h", "র": "i", "ল": "j", "শ": "k", "ষ": "l", "স": "m", "হ": "n", "ড়": "o", "ঢ়": "p", "য়": "q", "ৎ": "r", "০": "0", "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "া": "v", "ি": "w", "ী": "x", "ু": "y", "ূ": "~", "…": "...", "ৃ": "…", "ে": "‡", "ৈ": "‰", "ৗ": "Š", "ং": "s", "ঃ": "t", "ঁ": "u", "—": "Ñ", "॥": "\\"
    };

    var bijoyKarReplacements = {
        "¨y": "y¨", "¨~": "~¨", "vu": "uv", "¨u": "u¨", "Ky": "Kz", "K~": "K‚", "Py": "Pz", "P~": "P‚", "Qy": "Qz", "Q~": "Q‚", "Sy": "Sz", "S~": "S‚", "Uy": "Uz", "U~": "U‚", "Vy": "Vz", "V~": "V‚", "Wy": "Wz", "W~": "W‚", "Xy": "Xz", "X~": "X‚", "Zy": "Zz", "Z~": "Z‚", "dy": "dz", "d~": "d‚", "fy": "fz", "f~": "f‚", "¶y": "¶z", "¶~": "¶‚", "Áy": "Áz", "Á~": "Á‚", "þy": "þz", "þ~": "þ‚", "¾y": "¾z", "¾~": "¾‚", "°y": "°z", "°~": "°‚", "¼y": "¼z", "¼~": "¼‚", "Üy": "Üz", "Ü~": "Ü‚", "×y": "×z", "×~": "x‚", "äy": "äz", "ä~": "ä‚", "§…": "§„", "¥…": "¥„", "c…": "c„", "N…": "N„", "g…": "g„", "e…": "e„", "k…": "k„", "L…": "L„", "M…": "M„", "m…": "m„", "l…": "l„", "R…": "R„", "_…": "_„", "`…": "`„", "a…": "a„", "b…": "b„", "j…": "j„", "h…": "h„", "Y…": "Y„", "j&¸": "êy", "'‡": "'†", "\"‡": '\"†', "{‡": "{†", "-‡": "-†", "'‰": "'ˆ", "\"‰": '\"ˆ', "{‰": "{ˆ", "-‰": "-ˆ", "©y": "©z", "©~": "©‚", "‹y": "‹z", "‹~": "‹‚", "÷y": "÷z", "÷~": "÷‚", "ùy": "ùz", "ù~": "ù‚"
    };

    var bijoyRoFolaReplacements = {
        "&iæ": "ªæ", "&iƒ": "ªƒ", "Mª": "MÖ", "cª": "cÖ", "dª": "d«", "Nªæ": "Nªy", "Pªæ": "Pªy", "Qªæ": "Qªy", "Sªæ": "Sªy", "Uªæ": "Uªy", "Vªæ": "Vªy", "Wªæ": "Wªy", "Xªæ": "Xªy", "Yªæ": "Yªy", "bªæ": "bªy", "d«æ": "d«y", "hªæ": "hªy", "jªæ": "jªy", "lªæ": "lªy", "nªæ": "nªy", "åy": "åæ", "Nªƒ": "Nª~", "Pªƒ": "Pª~", "Qªƒ": "Qª~", "Sªƒ": "Sª~", "Uªƒ": "Uª~", "Vªƒ": "Vª~", "Wªƒ": "Wª~", "Xªƒ": "Xª~", "Yªƒ": "Yª~", "bªƒ": "bª~", "d«ƒ": "d«~", "hªƒ": "hª~", "jªƒ": "jª~", "lªƒ": "lª~", "nªƒ": "nª~", "å~": "åƒ", "”Q&e": "”Q¡", "kª": "kÖ", "mª": "mÖ", "g&å": "¤£"
    };

    var bijoyPatterns = buildConversionPatterns(bijoy_string_conversion_map);
    var uni2bijoyPatterns = buildConversionPatterns(uni2bijoy_string_conversion_map);

    function replaceMultiple(str, map, isGlobal) {
        var res = str;
        for (var k in map) {
            if (Object.prototype.hasOwnProperty.call(map, k)) {
                var re = isGlobal ? new RegExp(escapeRegex(k), "g") : k;
                res = res.replace(re, map[k]);
            }
        }
        return res;
    }

    function replaceFirstLetter(str, target, replacement) {
        var lines = str.split("\n");
        var out = "";
        for (var i = 0; i < lines.length; i++) {
            var parts = lines[i].split(/(\s+)/);
            var s = "";
            for (var j = 0; j < parts.length; j++) {
                s += (j % 2 === 0) ? parts[j].replace(new RegExp("^" + escapeRegex(target), "g"), replacement) : parts[j];
            }
            out += s;
            if (i < lines.length - 1) out += "\n";
        }
        return out;
    }

    function replaceLastLetter(str, target, replacement) {
        var lines = str.split("\n");
        var out = "";
        for (var i = 0; i < lines.length; i++) {
            var parts = lines[i].split(/(\s+)/);
            var s = "";
            for (var j = 0; j < parts.length; j++) {
                s += (j % 2 === 0) ? parts[j].replace(new RegExp(escapeRegex(target) + "$", "g"), replacement) : parts[j];
            }
            out += s;
            if (i < lines.length - 1) out += "\n";
        }
        return out;
    }

    function ReArrangeUnicodeConvertedText(str) {
        for (var i = 0; i < str.length; i++) {
            if (i > 0 && str.charAt(i) === "্" && (IsBanglaKar(str.charAt(i - 1)) || IsBanglaNukta(str.charAt(i - 1))) && i < str.length - 1) {
                str = str.substring(0, i - 1) + str.charAt(i) + str.charAt(i + 1) + str.charAt(i - 1) + str.substring(i + 2);
            }
            if (i > 0 && i < str.length - 1 && str.charAt(i) === "্" && str.charAt(i - 1) === "র" && str.charAt(i - 2) !== "্" && IsBanglaKar(str.charAt(i + 1))) {
                str = str.substring(0, i - 1) + str.charAt(i + 1) + str.charAt(i - 1) + str.charAt(i) + str.substring(i + 2);
            }
            if (i < str.length - 1 && str.charAt(i) === "র" && IsBanglaHalant(str.charAt(i + 1)) && !IsBanglaHalant(str.charAt(i - 1))) {
                var j = 1;
                while (true) {
                    if (i - j < 0) break;
                    if (IsBanglaBanjonborno(str.charAt(i - j)) && IsBanglaHalant(str.charAt(i - j - 1))) j += 2;
                    else if (j === 1 && IsBanglaKar(str.charAt(i - j))) j++;
                    else break;
                }
                str = str.substring(0, i - j) + str.charAt(i) + str.charAt(i + 1) + str.substring(i - j, i) + str.substring(i + 2);
                i += 1;
                continue;
            }
            if (i < str.length - 1 && IsBanglaPreKar(str.charAt(i)) && !IsSpace(str.charAt(i + 1))) {
                var r = 1;
                while (IsBanglaBanjonborno(str.charAt(i + r))) {
                    if (IsBanglaHalant(str.charAt(i + r + 1))) r += 2;
                    else break;
                }
                var pre = str.substring(0, i);
                var mid = str.substring(i + 1, i + r + 1);
                var h = 0;
                var kar = str.charAt(i);
                if (str.charAt(i) === "ে" && str.charAt(i + r + 1) === "া") {
                    kar = "ো"; h = 1;
                } else if (str.charAt(i) === "ে" && str.charAt(i + r + 1) === "ৗ") {
                    kar = "ৌ"; h = 1;
                }
                str = pre + mid + kar + str.substring(i + r + h + 1);
                i += r;
            }
            if (i < str.length - 1 && str.charAt(i) === "ঁ" && IsBanglaPostKar(str.charAt(i + 1))) {
                str = str.substring(0, i) + str.charAt(i + 1) + str.charAt(i) + str.substring(i + 2);
            }
        }
        return str;
    }

    function ReArrangeUnicodeText(str) {
        var barrier = 0;
        for (var i = 0; i < str.length; i++) {
            if (i < str.length && IsBanglaPreKar(str.charAt(i))) {
                var r = 1;
                while (IsBanglaBanjonborno(str.charAt(i - r))) {
                    if (i - r < 0) break;
                    if (i - r <= barrier) break;
                    if (IsBanglaHalant(str.charAt(i - r - 1))) r += 2;
                    else break;
                }
                str = str.substring(0, i - r) + str.charAt(i) + str.substring(i - r, i) + str.substring(i + 1);
                barrier = i + 1;
                continue;
            }
            if (i < str.length - 1 && IsBanglaHalant(str.charAt(i)) && str.charAt(i - 1) === "র") {
                var j = 1;
                var e = 0;
                while (true) {
                    if (IsBanglaBanjonborno(str.charAt(i + j)) && IsBanglaHalant(str.charAt(i + j + 1))) j += 2;
                    else if (IsBanglaBanjonborno(str.charAt(i + j)) && IsBanglaPreKar(str.charAt(i + j + 1))) {
                        e = 1; break;
                    } else break;
                }
                str = str.substring(0, i - 1) + str.substring(i + j + 1, i + j + e + 1) + str.substring(i + 1, i + j + 1) + str.charAt(i - 1) + str.charAt(i) + str.substring(i + j + e + 1);
                i += j + e;
                barrier = i + 1;
                continue;
            }
        }
        return str;
    }

    function ConvertToUnicodeRaw(str) {
        str = replaceMultiple(str, correctBijoy, true);
        for (var i = 0; i < bijoyPatterns.length; i++) {
            str = str.replace(bijoyPatterns[i].regex, bijoyPatterns[i].replacement);
        }
        str = replaceMultiple(str, correctUnicode, true);
        str = ReArrangeUnicodeConvertedText(str);
        return str.replace(/অা/g, "আ");
    }

    function ConvertToASCIIRaw(str) {
        str = str.replace(/ব়/g, "র")
            .replace(/ড়/g, "ড়")
            .replace(/ঢ়/g, "ঢ়")
            .replace(/য়/g, "য়")
            .replace(/ো/g, "ো")
            .replace(/ৌ/g, "ৌ")
            .replace(/্র্য/g, "্র‍্য");
        str = replaceLastLetter(str, "র্", "i&");
        str = replaceLastLetter(str, "র্‌", "i&");
        str = ReArrangeUnicodeText(str);
        for (var i = 0; i < uni2bijoyPatterns.length; i++) {
            str = str.replace(uni2bijoyPatterns[i].regex, uni2bijoyPatterns[i].replacement);
        }
        str = replaceFirstLetter(str, "‡", "†");
        str = replaceFirstLetter(str, "‰", "ˆ");
        str = str.replace(/\(‡/g, "(†")
            .replace(/\[‡/g, "[†")
            .replace(/Ô‡/g, "Ô†")
            .replace(/Ò‡/g, "Ò†")
            .replace(/\(‰/g, "(ˆ")
            .replace(/\[‰/g, "[ˆ")
            .replace(/Ô‰/g, "Ôˆ")
            .replace(/Ò‰/g, "Òˆ");
        str = replaceMultiple(str, bijoyKarReplacements, true);
        return replaceMultiple(str, bijoyRoFolaReplacements, true);
    }

    // --- High-Grade English & Mixed Text Intelligence Engine ---
    var ENGLISH_WORDS = [
        'a', 'about', 'above', 'across', 'action', 'activity', 'actually', 'add', 'address', 'administration', 'adult',
        'after', 'again', 'against', 'age', 'agency', 'agent', 'ago', 'agree', 'agreement', 'ahead', 'air', 'all', 'allow',
        'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'american', 'among', 'amount', 'analysis',
        'and', 'animal', 'another', 'answer', 'any', 'anyone', 'anything', 'appear', 'apply', 'approach', 'area', 'argue',
        'arm', 'around', 'arrive', 'art', 'article', 'artist', 'as', 'ask', 'assume', 'at', 'attack', 'attention', 'attorney',
        'audience', 'author', 'authority', 'available', 'avoid', 'away', 'baby', 'back', 'bad', 'bag', 'ball', 'bank', 'bar',
        'base', 'be', 'beat', 'beautiful', 'because', 'become', 'bed', 'before', 'begin', 'behavior', 'behind', 'believe',
        'benefit', 'best', 'better', 'between', 'beyond', 'big', 'bill', 'billion', 'bit', 'black', 'blood', 'blue', 'board',
        'body', 'book', 'born', 'both', 'box', 'boy', 'break', 'bring', 'brother', 'budget', 'build', 'building', 'business',
        'but', 'buy', 'by', 'call', 'camera', 'campaign', 'can', 'cancer', 'candidate', 'capital', 'car', 'card', 'care',
        'career', 'carry', 'case', 'catch', 'cause', 'cell', 'center', 'central', 'century', 'certain', 'certainly', 'chair',
        'challenge', 'chance', 'change', 'character', 'charge', 'check', 'child', 'choice', 'choose', 'church', 'citizen',
        'city', 'civil', 'claim', 'class', 'clear', 'clearly', 'close', 'coach', 'cold', 'collection', 'college', 'color',
        'come', 'commercial', 'common', 'community', 'company', 'compare', 'computer', 'concern', 'condition', 'conference',
        'congress', 'consider', 'consumer', 'contain', 'continue', 'control', 'cost', 'could', 'country', 'couple', 'course',
        'court', 'cover', 'create', 'crime', 'cultural', 'culture', 'cup', 'current', 'customer', 'cut', 'dark', 'data',
        'daughter', 'day', 'dead', 'deal', 'death', 'debate', 'decade', 'decide', 'decision', 'deep', 'defense', 'degree',
        'democrat', 'democratic', 'describe', 'design', 'designer', 'despite', 'detail', 'determine', 'develop', 'development',
        'die', 'difference', 'different', 'difficult', 'dinner', 'direction', 'director', 'discover', 'discuss', 'discussion',
        'disease', 'do', 'doctor', 'dog', 'door', 'down', 'draw', 'dream', 'drive', 'drop', 'drug', 'during', 'each', 'early',
        'east', 'easy', 'eat', 'economic', 'economy', 'edge', 'education', 'effect', 'effort', 'eight', 'either', 'election',
        'else', 'email', 'employee', 'end', 'energy', 'english', 'enjoy', 'enough', 'enter', 'entire', 'environment', 'environmental',
        'especially', 'establish', 'even', 'evening', 'event', 'ever', 'every', 'everybody', 'everyone', 'everything',
        'evidence', 'exactly', 'example', 'executive', 'exist', 'expect', 'experience', 'expert', 'explain', 'eye', 'face',
        'fact', 'factor', 'fail', 'fall', 'family', 'far', 'fast', 'father', 'fear', 'feature', 'federal', 'feel', 'feeling',
        'few', 'field', 'fight', 'figure', 'fill', 'film', 'final', 'finally', 'financial', 'find', 'fine', 'finger', 'finish',
        'fire', 'firm', 'first', 'fish', 'five', 'floor', 'fly', 'focus', 'follow', 'food', 'foot', 'for', 'force', 'foreign',
        'forget', 'form', 'former', 'forward', 'four', 'free', 'friend', 'from', 'front', 'full', 'fund', 'future', 'game',
        'garden', 'gas', 'general', 'generation', 'get', 'girl', 'give', 'glass', 'go', 'goal', 'good', 'government', 'great',
        'green', 'ground', 'group', 'grow', 'growth', 'guess', 'gun', 'guy', 'hair', 'half', 'hand', 'hang', 'happen', 'happy',
        'hard', 'have', 'he', 'head', 'health', 'hear', 'heart', 'heat', 'heavy', 'help', 'her', 'here', 'herself', 'high',
        'him', 'himself', 'his', 'history', 'hit', 'hold', 'home', 'hope', 'hospital', 'hot', 'hotel', 'hour', 'house', 'how',
        'however', 'huge', 'human', 'hundred', 'husband', 'i', 'idea', 'identify', 'if', 'image', 'imagine', 'impact', 'important',
        'improve', 'in', 'include', 'including', 'increase', 'indeed', 'indicate', 'individual', 'industry', 'information',
        'inside', 'instead', 'institution', 'interest', 'interesting', 'international', 'interview', 'into', 'investment',
        'involve', 'issue', 'it', 'item', 'its', 'itself', 'job', 'join', 'just', 'keep', 'key', 'kid', 'kill', 'kind', 'kitchen',
        'know', 'knowledge', 'land', 'language', 'large', 'last', 'late', 'later', 'laugh', 'law', 'lawyer', 'lay', 'lead',
        'leader', 'learn', 'least', 'leave', 'left', 'leg', 'legal', 'less', 'let', 'letter', 'level', 'lie', 'life', 'light',
        'like', 'likely', 'line', 'list', 'listen', 'little', 'live', 'local', 'long', 'look', 'lose', 'loss', 'lot', 'love',
        'low', 'machine', 'magazine', 'main', 'maintain', 'major', 'majority', 'make', 'man', 'manage', 'management', 'manager',
        'many', 'market', 'marriage', 'material', 'matter', 'may', 'maybe', 'me', 'mean', 'measure', 'media', 'medical', 'meet',
        'meeting', 'member', 'memory', 'mention', 'message', 'method', 'middle', 'might', 'military', 'million', 'mind', 'minute',
        'miss', 'mission', 'model', 'modern', 'moment', 'money', 'month', 'more', 'morning', 'most', 'mother', 'mouth', 'move',
        'movement', 'movie', 'mr', 'mrs', 'much', 'music', 'must', 'my', 'myself', 'name', 'nation', 'national', 'natural',
        'nature', 'near', 'nearly', 'necessary', 'need', 'network', 'never', 'new', 'news', 'newspaper', 'next', 'nice', 'night',
        'no', 'none', 'nor', 'north', 'not', 'note', 'nothing', 'notice', 'now', 'number', 'occur', 'of', 'off', 'offer', 'office',
        'officer', 'official', 'often', 'oh', 'oil', 'ok', 'okay', 'old', 'on', 'once', 'one', 'only', 'onto', 'open', 'operation',
        'opportunity', 'option', 'or', 'order', 'organization', 'other', 'others', 'our', 'ourselves', 'out', 'outside', 'over',
        'own', 'owner', 'page', 'pain', 'painting', 'paper', 'parent', 'part', 'participant', 'particular', 'particularly',
        'partner', 'party', 'pass', 'past', 'patient', 'pattern', 'pay', 'peace', 'people', 'per', 'perform', 'performance',
        'perhaps', 'period', 'person', 'personal', 'phone', 'physical', 'pick', 'picture', 'piece', 'place', 'plan', 'plant',
        'play', 'player', 'pm', 'point', 'police', 'policy', 'political', 'politics', 'poor', 'popular', 'population', 'position',
        'positive', 'possible', 'power', 'practice', 'prepare', 'present', 'president', 'pressure', 'pretty', 'prevent', 'price',
        'private', 'probably', 'problem', 'process', 'produce', 'product', 'production', 'profession', 'professional', 'professor',
        'program', 'project', 'property', 'protect', 'prove', 'provide', 'public', 'pull', 'purpose', 'push', 'put', 'quality',
        'question', 'quickly', 'quite', 'race', 'radio', 'raise', 'range', 'rate', 'rather', 'reach', 'read', 'ready', 'real',
        'reality', 'realize', 'really', 'reason', 'receive', 'recent', 'recently', 'recognize', 'record', 'red', 'reduce',
        'reflect', 'region', 'relate', 'relationship', 'religious', 'remain', 'remember', 'remove', 'report', 'represent',
        'republican', 'require', 'research', 'resource', 'respond', 'response', 'responsibility', 'rest', 'result', 'return',
        'reveal', 'rich', 'right', 'rise', 'risk', 'road', 'rock', 'role', 'room', 'rule', 'run', 'safe', 'same', 'save', 'say',
        'scene', 'school', 'science', 'scientist', 'score', 'sea', 'season', 'seat', 'second', 'section', 'security', 'see',
        'seek', 'seem', 'sell', 'send', 'senior', 'sense', 'series', 'serious', 'serve', 'service', 'set', 'seven', 'several',
        'sex', 'sexual', 'shake', 'share', 'she', 'shoot', 'short', 'shot', 'should', 'shoulder', 'show', 'side', 'sign',
        'significant', 'similar', 'simple', 'simply', 'since', 'sing', 'single', 'sister', 'sit', 'site', 'situation', 'six',
        'size', 'skill', 'skin', 'small', 'smile', 'so', 'social', 'society', 'soldier', 'some', 'somebody', 'someone', 'something',
        'sometimes', 'son', 'song', 'soon', 'sort', 'sound', 'source', 'south', 'southern', 'space', 'speak', 'special', 'specific',
        'speech', 'spend', 'sport', 'spring', 'staff', 'stage', 'stand', 'standard', 'star', 'start', 'state', 'statement', 'station',
        'stay', 'step', 'still', 'stock', 'stop', 'store', 'story', 'strategy', 'street', 'strong', 'structure', 'student', 'study',
        'stuff', 'style', 'subject', 'success', 'successful', 'such', 'suddenly', 'suffer', 'suggest', 'summer', 'support', 'sure',
        'surface', 'system', 'table', 'take', 'talk', 'task', 'tax', 'teach', 'teacher', 'team', 'technology', 'television', 'tell',
        'ten', 'tend', 'term', 'test', 'text', 'than', 'thank', 'thanks', 'that', 'the', 'their', 'them', 'themselves', 'then',
        'theory', 'there', 'these', 'they', 'thing', 'think', 'third', 'this', 'those', 'though', 'thought', 'thousand', 'threat',
        'three', 'through', 'throughout', 'throw', 'thus', 'time', 'to', 'today', 'together', 'tonight', 'too', 'top', 'total',
        'tough', 'toward', 'towards', 'town', 'trade', 'traditional', 'training', 'travel', 'treat', 'treatment', 'tree', 'trial',
        'trip', 'trouble', 'true', 'truth', 'try', 'turn', 'tv', 'two', 'type', 'under', 'understand', 'unit', 'until', 'up',
        'upon', 'us', 'use', 'user', 'usually', 'value', 'various', 'very', 'victim', 'view', 'violence', 'visit', 'voice', 'vote',
        'wait', 'walk', 'wall', 'want', 'war', 'watch', 'water', 'way', 'we', 'weapon', 'wear', 'week', 'weight', 'well', 'west',
        'western', 'what', 'whatever', 'when', 'where', 'whether', 'which', 'while', 'white', 'who', 'whole', 'whom', 'whose', 'why',
        'wide', 'wife', 'will', 'win', 'wind', 'window', 'wish', 'with', 'within', 'without', 'woman', 'wonder', 'word', 'work',
        'worker', 'world', 'worry', 'would', 'write', 'writer', 'wrong', 'yard', 'yeah', 'year', 'yes', 'yet', 'you', 'young',
        'your', 'yourself',
        'bangladesh', 'dhaka', 'bengali', 'bangla', 'abdullah', 'siam', 'al', 'gmail', 'yahoo', 'hotmail', 'outlook', 'facebook',
        'google', 'youtube', 'instagram', 'twitter', 'whatsapp', 'telegram', 'website', 'web', 'site', 'app', 'software',
        'developer', 'engineer', 'graphic', 'designer', 'frontend', 'backend', 'fullstack', 'ui', 'ux', 'login', 'signup',
        'online', 'offline', 'internet', 'network', 'server', 'client', 'browser', 'mobile', 'desktop', 'tablet', 'laptop',
        'code', 'coding', 'python', 'javascript', 'java', 'html', 'css', 'php', 'react', 'vue', 'angular', 'node', 'sql',
        'link', 'click', 'button', 'input', 'output', 'image', 'photo', 'video', 'audio', 'media', 'file', 'download', 'upload'
    ];

    var ENGLISH_DICT = {};
    for (var d = 0; d < ENGLISH_WORDS.length; d++) {
        ENGLISH_DICT[ENGLISH_WORDS[d]] = true;
    }

    var bijoyOnlyCharRegex = /[¡-ÿ‘'“”•…–—|&~_`^]/;
    var bijoyDigraphRegex = /(?:i¨|ª¨|K¡|Mœ|M¥|M­|”P|”Q|”T|¾¡|R¡|U¡|U¥|Y^|Ë¡|Zœ|Z¥|Z¡|_¡|˜M|˜N|˜¡|™¢|aŸ|a¥|›U|šÍ|š¿|š’|›`|›Ø|bœ|š^|b¥|cœ|cø|c­|d¬|eŸ|e­|gœ|¤ú|¤^|¤¢|¤£|¤§|¤­|iƒ|j¦|j¥|jø|kœ|kø|k¦|k¥|k­|®‹|®Œ|®ú|®§|¯‹|¯Í|¯‘|¯¿|¯’|mœ|¯ú|¯^|¯§|¯­|nè|nŸ|ý|þ|n¬)/;

    function isDefiniteBijoyToken(token) {
        if (bijoyOnlyCharRegex.test(token)) return true;
        if (bijoyDigraphRegex.test(token)) return true;
        var clean = token.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
        if (!clean) return false;
        if (/[a-z][A-Z]/.test(clean)) return true;
        if (/^[A-Z][a-z]+[A-Z]/.test(clean)) return true;
        if (/v$/i.test(clean) && !/^(?:rev|gov|spiv)$/i.test(clean)) return true;
        if (/v[bcdfghjklmnpqrstvwxyz]/i.test(clean)) return true;
        if (/^w[b-df-gj-np-tv-z]/i.test(clean)) return true;
        if (/[b-df-hj-np-tv-z]w[b-df-gj-np-tv-z]/i.test(clean)) return true;
        if (/q(?!u)/i.test(clean)) return true;
        if (/[b-df-hj-np-tv-z]x/i.test(clean)) return true;
        if (/^Av/i.test(clean)) return true;
        if (/^[GI][b-df-hj-np-tv-z]/.test(clean)) return true;
        if (/(?:sj|bv|mv|Zv|Lv|fv|cv|Xv|eo|Ni|Kjg|eQi|mgq|eB|hver)/i.test(clean)) return true;
        return false;
    }

    function isEnglishToken(token, prevIsBijoy, nextIsBijoy) {
        // URLs & Emails & Phone
        if (/^https?:\/\//i.test(token) || /^www\./i.test(token) || /^[a-zA-Z0-9-]+\.(?:com|org|net|edu|gov|bd|io|co|me|info|dev)[a-zA-Z0-9/_.~?&=%#+-]*/i.test(token)) return true;
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(token)) return true;
        if (/^\+?[0-9\s-]{7,}$/.test(token)) return true;

        if (/[\u0980-\u09FF]/.test(token)) return false;
        if (bijoyOnlyCharRegex.test(token)) return false;
        if (bijoyDigraphRegex.test(token)) return false;

        var clean = token.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
        if (!clean) return true;

        // Context-aware single character check: In Bijoy, 'I' is 'ও'
        if (clean === 'I') {
            if (prevIsBijoy && nextIsBijoy) return false; // Bijoy 'ও' (only when surrounded by Bijoy on both sides)
            return true; // English 'I'
        }
        if (clean === 'a' || clean === 'A') {
            if (prevIsBijoy && nextIsBijoy) return false;
            return true;
        }

        if (ENGLISH_DICT[clean.toLowerCase()]) return true;
        if (/[a-z][A-Z]/.test(clean)) return false;
        if (/^[A-Z][a-z]+[A-Z]/.test(clean)) return false;

        if (/v$/i.test(clean) && !/^(?:rev|gov|spiv)$/i.test(clean)) return false;
        if (/v[bcdfghjklmnpqrstvwxyz]/i.test(clean)) return false;
        if (/^w[b-df-gj-np-tv-z]/i.test(clean)) return false;
        if (/[b-df-hj-np-tv-z]w[b-df-gj-np-tv-z]/i.test(clean)) return false;
        if (/q(?!u)/i.test(clean)) return false;
        if (/[b-df-hj-np-tv-z]x/i.test(clean)) return false;
        if (/^Av/i.test(clean)) return false;
        if (/^[ABCDEFGI][a-zA-Z]/.test(clean) && !ENGLISH_DICT[clean.toLowerCase()]) return false;
        if (/(?:sj|bv|mv|Zv|Lv|fv|cv|Xv|eo|Ni|Kjg|eQi|mgq|eB|hver)/i.test(clean)) return false;

        if (/^[a-zA-Z]+$/.test(clean) && /[aeiouy]/i.test(clean)) {
            return true;
        }
        if (/^[0-9]+$/.test(clean)) return true;

        return false;
    }

    function cleanUnicodeNormalization(str) {
        if (!str) return '';
        return str.normalize('NFC')
            .replace(/[\u200B\u200C\u200D\u200E\u200F\uFEFF\u00AD]/g, '')
            .replace(/\u09AF\u09BC/g, '\u09DF') // য়
            .replace(/\u09A1\u09BC/g, '\u09DC') // ড়
            .replace(/\u09A2\u09BC/g, '\u09DD'); // ঢ়
    }

    // --- Core High-Precision Public Conversion Methods ---

    function unicodeToBijoy(text) {
        if (!text) return '';
        var input = cleanUnicodeNormalization(text);
        return ConvertToASCIIRaw(input);
    }

    function bijoyToUnicode(text) {
        if (!text) return '';
        var tokens = text.split(/(\s+)/);
        var out = [];

        var isBijoyArr = [];
        for (var k = 0; k < tokens.length; k += 2) {
            isBijoyArr[k] = isDefiniteBijoyToken(tokens[k]);
        }

        for (var i = 0; i < tokens.length; i++) {
            var t = tokens[i];
            if (i % 2 === 1) {
                out.push(t);
                continue;
            }
            if (!t) continue;

            var leading = '';
            var core = t;
            var trailing = '';

            var m = t.match(/^([,.:;?!()\[\]{}"'\\\/]+)(.*)$/);
            if (m) {
                leading = m[1];
                core = m[2];
            }
            var m2 = core.match(/^(.*?)([,.:;?!()\[\]{}"'\\\/]+)$/);
            if (m2) {
                core = m2[1];
                trailing = m2[2];
            }

            if (!core) {
                out.push(t);
                continue;
            }

            if (/[\u0980-\u09FF]/.test(core)) {
                out.push(leading + core + trailing);
                continue;
            }

            var prevIsBijoy = (i >= 2) ? !!isBijoyArr[i - 2] : false;
            var nextIsBijoy = (i + 2 < tokens.length) ? !!isBijoyArr[i + 2] : false;

            if (isEnglishToken(core, prevIsBijoy, nextIsBijoy)) {
                out.push(leading + core + trailing);
            } else {
                var convertedCore = ConvertToUnicodeRaw(core);
                out.push(leading + convertedCore + trailing);
            }
        }

        return cleanUnicodeNormalization(out.join(''));
    }

    function fixBanglaText(str) {
        if (!str) return '';
        return str
            .normalize('NFC')
            .replace(/[\u200B\u200C\u200D\u200E\u200F\uFEFF\u00AD]/g, '')
            .replace(/\u09AF\u09BC/g, '\u09DF')
            .replace(/\u09A1\u09BC/g, '\u09DC')
            .replace(/\u09A2\u09BC/g, '\u09DD')
            .replace(/ে\s*া/g, 'ো')
            .replace(/ে\s*ৗ/g, 'ৌ')
            .replace(/া+/g, 'া')
            .replace(/ি+/g, 'ি')
            .replace(/ী+/g, 'ী')
            .replace(/ু+/g, 'ু')
            .replace(/ূ+/g, 'ূ')
            .replace(/ৃ+/g, 'ৃ')
            .replace(/ে+/g, 'ে')
            .replace(/ৈ+/g, 'ৈ')
            .replace(/ো+/g, 'ো')
            .replace(/ৌ+/g, 'ৌ')
            .replace(/([\u0995-\u09B9\u09DC-\u09DF])\s+([ািীুূৃেৈোৌ্])/g, '$1$2')
            .replace(/্([ািীুূৃেৈোৌ])/g, '$1')
            .replace(/\u09CD+/g, '\u09CD')
            .replace(/\u09CD(?=[\s\r\n\u0964,;:?!)\]}'\"]|$)/g, '')
            .replace(/\u09CD(?=[\s\r\n।,;:?!)\]}'\"]|$)/g, '')  // remove stray hasanta before space/end
            .replace(/[ \t]+$/gm, "")
    }

    var BanglaLikhi = {
        unicodeToBijoy: unicodeToBijoy,
        bijoyToUnicode: bijoyToUnicode,
        fixText: fixBanglaText
    };

    var BanglaConverter = {
        unicodeToBijoy: unicodeToBijoy,
        bijoyToUnicode: bijoyToUnicode,
        fixBanglaText: fixBanglaText,
        ConvertToASCII: unicodeToBijoy,
        ConvertToUnicode: bijoyToUnicode,
        BanglaLikhi: BanglaLikhi
    };

    return BanglaConverter;
}));
