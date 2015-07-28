// moment.js locale configuration
// locale : afrikaans (af)
// author : Werner Mollentze : https://github.com/wernerm

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('af', {
        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM : function (input) {
            return /^nm$/i.test(input);
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower ? 'vm' : 'VM';
            } else {
                return isLower ? 'nm' : 'NM';
            }
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
            sameDay : '[Vandag om] LT',
            nextDay : '[M╨ô╥ære om] LT',
            nextWeek : 'dddd [om] LT',
            lastDay : '[Gister om] LT',
            lastWeek : '[Laas] dddd [om] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'oor %s',
            past : '%s gelede',
            s : '\'n paar sekondes',
            m : '\'n minuut',
            mm : '%d minute',
            h : '\'n uur',
            hh : '%d ure',
            d : '\'n dag',
            dd : '%d dae',
            M : '\'n maand',
            MM : '%d maande',
            y : '\'n jaar',
            yy : '%d jaar'
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris R╨ô┬╢ling : https://github.com/jjupiter
        },
        week : {
            dow : 1, // Maandag is die eerste dag van die week.
            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
        }
    });
}));

// moment.js locale configuration
// locale : Moroccan Arabic (ar-ma)
// author : ElFadili Yassine : https://github.com/ElFadiliY
// author : Abdel Said : https://github.com/abdelsaid

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('ar-ma', {
        months : '╨⌐╨ë╨⌐ΓÇá╨¿┬º╨⌐╨ë╨¿┬▒_╨⌐╨â╨¿╨ü╨¿┬▒╨¿┬º╨⌐╨ë╨¿┬▒_╨⌐ΓÇª╨¿┬º╨¿┬▒╨¿╤û_╨¿╨ê╨¿╨ü╨¿┬▒╨⌐╨ë╨⌐ΓÇ₧_╨⌐ΓÇª╨¿┬º╨⌐╨ë_╨⌐╨ë╨⌐Γé¼╨⌐ΓÇá╨⌐╨ë╨⌐Γé¼_╨⌐╨ë╨⌐Γé¼╨⌐ΓÇ₧╨⌐╨ë╨⌐Γé¼╨¿╨å_╨¿╤ö╨¿╥æ╨¿╨ä_╨¿╥æ╨¿╨ä╨⌐ΓÇá╨¿╨ü╨¿┬▒_╨¿╨ê╨⌐╤ô╨¿╨ä╨⌐Γé¼╨¿╨ü╨¿┬▒_╨⌐ΓÇá╨⌐Γé¼╨⌐ΓÇá╨¿╨ü╨¿┬▒_╨¿╨ç╨¿┬¼╨⌐ΓÇá╨¿╨ü╨¿┬▒'.split('_'),
        monthsShort : '╨⌐╨ë╨⌐ΓÇá╨¿┬º╨⌐╨ë╨¿┬▒_╨⌐╨â╨¿╨ü╨¿┬▒╨¿┬º╨⌐╨ë╨¿┬▒_╨⌐ΓÇª╨¿┬º╨¿┬▒╨¿╤û_╨¿╨ê╨¿╨ü╨¿┬▒╨⌐╨ë╨⌐ΓÇ₧_╨⌐ΓÇª╨¿┬º╨⌐╨ë_╨⌐╨ë╨⌐Γé¼╨⌐ΓÇá╨⌐╨ë╨⌐Γé¼_╨⌐╨ë╨⌐Γé¼╨⌐ΓÇ₧╨⌐╨ë╨⌐Γé¼╨¿╨å_╨¿╤ö╨¿╥æ╨¿╨ä_╨¿╥æ╨¿╨ä╨⌐ΓÇá╨¿╨ü╨¿┬▒_╨¿╨ê╨⌐╤ô╨¿╨ä╨⌐Γé¼╨¿╨ü╨¿┬▒_╨⌐ΓÇá╨⌐Γé¼╨⌐ΓÇá╨¿╨ü╨¿┬▒_╨¿╨ç╨¿┬¼╨⌐ΓÇá╨¿╨ü╨¿┬▒'.split('_'),
        weekdays : '╨¿┬º╨⌐ΓÇ₧╨¿╨ê╨¿┬¡╨¿╨ç_╨¿┬º╨⌐ΓÇ₧╨¿╥É╨¿╨ä╨⌐ΓÇá╨⌐╨ë╨⌐ΓÇá_╨¿┬º╨⌐ΓÇ₧╨¿┬½╨⌐ΓÇ₧╨¿┬º╨¿┬½╨¿┬º╨¿╨Ä_╨¿┬º╨⌐ΓÇ₧╨¿╨ê╨¿┬▒╨¿╨ü╨¿Γäû╨¿┬º╨¿╨Ä_╨¿┬º╨⌐ΓÇ₧╨¿┬«╨⌐ΓÇª╨⌐╨ë╨¿╤û_╨¿┬º╨⌐ΓÇ₧╨¿┬¼╨⌐ΓÇª╨¿Γäû╨¿┬⌐_╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿╨ü╨¿╨ä'.split('_'),
        weekdaysShort : '╨¿┬º╨¿┬¡╨¿╨ç_╨¿┬º╨¿╨ä╨⌐ΓÇá╨⌐╨ë╨⌐ΓÇá_╨¿┬½╨⌐ΓÇ₧╨¿┬º╨¿┬½╨¿┬º╨¿╨Ä_╨¿┬º╨¿┬▒╨¿╨ü╨¿Γäû╨¿┬º╨¿╨Ä_╨¿┬«╨⌐ΓÇª╨⌐╨ë╨¿╤û_╨¿┬¼╨⌐ΓÇª╨¿Γäû╨¿┬⌐_╨¿╤û╨¿╨ü╨¿╨ä'.split('_'),
        weekdaysMin : '╨¿┬¡_╨⌐ΓÇá_╨¿┬½_╨¿┬▒_╨¿┬«_╨¿┬¼_╨¿╤û'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[╨¿┬º╨⌐ΓÇ₧╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª ╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            nextDay: '[╨¿╤ö╨¿╨ç╨¿┬º ╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            nextWeek: 'dddd [╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            lastDay: '[╨¿╨ê╨⌐ΓÇª╨¿╤û ╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            lastWeek: 'dddd [╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '╨⌐╨â╨⌐╨ë %s',
            past : '╨⌐ΓÇª╨⌐ΓÇá╨¿┬░ %s',
            s : '╨¿┬½╨⌐Γé¼╨¿┬º╨⌐ΓÇá',
            m : '╨¿╨ç╨⌐ΓÇÜ╨⌐╨ë╨⌐ΓÇÜ╨¿┬⌐',
            mm : '%d ╨¿╨ç╨⌐ΓÇÜ╨¿┬º╨¿┬ª╨⌐ΓÇÜ',
            h : '╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐',
            hh : '%d ╨¿╤û╨¿┬º╨¿Γäû╨¿┬º╨¿╨ä',
            d : '╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª',
            dd : '%d ╨¿╨ê╨⌐╨ë╨¿┬º╨⌐ΓÇª',
            M : '╨¿╥æ╨⌐ΓÇí╨¿┬▒',
            MM : '%d ╨¿╨ê╨¿╥æ╨⌐ΓÇí╨¿┬▒',
            y : '╨¿╤û╨⌐ΓÇá╨¿┬⌐',
            yy : '%d ╨¿╤û╨⌐ΓÇá╨⌐Γé¼╨¿┬º╨¿╨ä'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Arabic Saudi Arabia (ar-sa)
// author : Suhail Alkowaileet : https://github.com/xsoh

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var symbolMap = {
        '1': '╨⌐╨Ä',
        '2': '╨⌐╤₧',
        '3': '╨⌐╨ê',
        '4': '╨⌐┬ñ',
        '5': '╨⌐╥É',
        '6': '╨⌐┬ª',
        '7': '╨⌐┬º',
        '8': '╨⌐╨ü',
        '9': '╨⌐┬⌐',
        '0': '╨⌐ '
    }, numberMap = {
        '╨⌐╨Ä': '1',
        '╨⌐╤₧': '2',
        '╨⌐╨ê': '3',
        '╨⌐┬ñ': '4',
        '╨⌐╥É': '5',
        '╨⌐┬ª': '6',
        '╨⌐┬º': '7',
        '╨⌐╨ü': '8',
        '╨⌐┬⌐': '9',
        '╨⌐ ': '0'
    };

    return moment.defineLocale('ar-sa', {
        months : '╨⌐╨ë╨⌐ΓÇá╨¿┬º╨⌐╨ë╨¿┬▒_╨⌐╨â╨¿╨ü╨¿┬▒╨¿┬º╨⌐╨ë╨¿┬▒_╨⌐ΓÇª╨¿┬º╨¿┬▒╨¿╤û_╨¿╨ê╨¿╨ü╨¿┬▒╨⌐╨ë╨⌐ΓÇ₧_╨⌐ΓÇª╨¿┬º╨⌐╨ë╨⌐Γé¼_╨⌐╨ë╨⌐Γé¼╨⌐ΓÇá╨⌐╨ë╨⌐Γé¼_╨⌐╨ë╨⌐Γé¼╨⌐ΓÇ₧╨⌐╨ë╨⌐Γé¼_╨¿╨ê╨¿╤ö╨¿╤û╨¿┬╖╨¿╤û_╨¿╤û╨¿╨ü╨¿╨ä╨⌐ΓÇª╨¿╨ü╨¿┬▒_╨¿╨ê╨⌐╤ô╨¿╨ä╨⌐Γé¼╨¿╨ü╨¿┬▒_╨⌐ΓÇá╨⌐Γé¼╨⌐╨â╨⌐ΓÇª╨¿╨ü╨¿┬▒_╨¿╨ç╨⌐╨ë╨¿╤û╨⌐ΓÇª╨¿╨ü╨¿┬▒'.split('_'),
        monthsShort : '╨⌐╨ë╨⌐ΓÇá╨¿┬º╨⌐╨ë╨¿┬▒_╨⌐╨â╨¿╨ü╨¿┬▒╨¿┬º╨⌐╨ë╨¿┬▒_╨⌐ΓÇª╨¿┬º╨¿┬▒╨¿╤û_╨¿╨ê╨¿╨ü╨¿┬▒╨⌐╨ë╨⌐ΓÇ₧_╨⌐ΓÇª╨¿┬º╨⌐╨ë╨⌐Γé¼_╨⌐╨ë╨⌐Γé¼╨⌐ΓÇá╨⌐╨ë╨⌐Γé¼_╨⌐╨ë╨⌐Γé¼╨⌐ΓÇ₧╨⌐╨ë╨⌐Γé¼_╨¿╨ê╨¿╤ö╨¿╤û╨¿┬╖╨¿╤û_╨¿╤û╨¿╨ü╨¿╨ä╨⌐ΓÇª╨¿╨ü╨¿┬▒_╨¿╨ê╨⌐╤ô╨¿╨ä╨⌐Γé¼╨¿╨ü╨¿┬▒_╨⌐ΓÇá╨⌐Γé¼╨⌐╨â╨⌐ΓÇª╨¿╨ü╨¿┬▒_╨¿╨ç╨⌐╨ë╨¿╤û╨⌐ΓÇª╨¿╨ü╨¿┬▒'.split('_'),
        weekdays : '╨¿┬º╨⌐ΓÇ₧╨¿╨ê╨¿┬¡╨¿╨ç_╨¿┬º╨⌐ΓÇ₧╨¿╥É╨¿┬½╨⌐ΓÇá╨⌐╨ë╨⌐ΓÇá_╨¿┬º╨⌐ΓÇ₧╨¿┬½╨⌐ΓÇ₧╨¿┬º╨¿┬½╨¿┬º╨¿╨Ä_╨¿┬º╨⌐ΓÇ₧╨¿╨ê╨¿┬▒╨¿╨ü╨¿Γäû╨¿┬º╨¿╨Ä_╨¿┬º╨⌐ΓÇ₧╨¿┬«╨⌐ΓÇª╨⌐╨ë╨¿╤û_╨¿┬º╨⌐ΓÇ₧╨¿┬¼╨⌐ΓÇª╨¿Γäû╨¿┬⌐_╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿╨ü╨¿╨ä'.split('_'),
        weekdaysShort : '╨¿╨ê╨¿┬¡╨¿╨ç_╨¿╥É╨¿┬½╨⌐ΓÇá╨⌐╨ë╨⌐ΓÇá_╨¿┬½╨⌐ΓÇ₧╨¿┬º╨¿┬½╨¿┬º╨¿╨Ä_╨¿╨ê╨¿┬▒╨¿╨ü╨¿Γäû╨¿┬º╨¿╨Ä_╨¿┬«╨⌐ΓÇª╨⌐╨ë╨¿╤û_╨¿┬¼╨⌐ΓÇª╨¿Γäû╨¿┬⌐_╨¿╤û╨¿╨ü╨¿╨ä'.split('_'),
        weekdaysMin : '╨¿┬¡_╨⌐ΓÇá_╨¿┬½_╨¿┬▒_╨¿┬«_╨¿┬¼_╨¿╤û'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        meridiemParse: /╨¿┬╡|╨⌐ΓÇª/,
        isPM : function (input) {
            return '╨⌐ΓÇª' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return '╨¿┬╡';
            } else {
                return '╨⌐ΓÇª';
            }
        },
        calendar : {
            sameDay: '[╨¿┬º╨⌐ΓÇ₧╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª ╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            nextDay: '[╨¿╤ö╨¿╨ç╨¿┬º ╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            nextWeek: 'dddd [╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            lastDay: '[╨¿╨ê╨⌐ΓÇª╨¿╤û ╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            lastWeek: 'dddd [╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '╨⌐╨â╨⌐╨ë %s',
            past : '╨⌐ΓÇª╨⌐ΓÇá╨¿┬░ %s',
            s : '╨¿┬½╨⌐Γé¼╨¿┬º╨⌐ΓÇá',
            m : '╨¿╨ç╨⌐ΓÇÜ╨⌐╨ë╨⌐ΓÇÜ╨¿┬⌐',
            mm : '%d ╨¿╨ç╨⌐ΓÇÜ╨¿┬º╨¿┬ª╨⌐ΓÇÜ',
            h : '╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐',
            hh : '%d ╨¿╤û╨¿┬º╨¿Γäû╨¿┬º╨¿╨ä',
            d : '╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª',
            dd : '%d ╨¿╨ê╨⌐╨ë╨¿┬º╨⌐ΓÇª',
            M : '╨¿╥æ╨⌐ΓÇí╨¿┬▒',
            MM : '%d ╨¿╨ê╨¿╥æ╨⌐ΓÇí╨¿┬▒',
            y : '╨¿╤û╨⌐ΓÇá╨¿┬⌐',
            yy : '%d ╨¿╤û╨⌐ΓÇá╨⌐Γé¼╨¿┬º╨¿╨ä'
        },
        preparse: function (string) {
            return string.replace(/[╨⌐╨Ä╨⌐╤₧╨⌐╨ê╨⌐┬ñ╨⌐╥É╨⌐┬ª╨⌐┬º╨⌐╨ü╨⌐┬⌐╨⌐ ]/g, function (match) {
                return numberMap[match];
            }).replace(/╨¿╨è/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '╨¿╨è');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale  : Tunisian Arabic (ar-tn)

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('ar-tn', {
        months: '╨¿┬¼╨¿┬º╨⌐ΓÇá╨⌐╨â╨⌐╨ë_╨⌐╨â╨⌐╨ë╨⌐╨â╨¿┬▒╨⌐╨ë_╨⌐ΓÇª╨¿┬º╨¿┬▒╨¿╤û_╨¿╨ê╨⌐╨â╨¿┬▒╨⌐╨ë╨⌐ΓÇ₧_╨⌐ΓÇª╨¿┬º╨⌐╨ë_╨¿┬¼╨⌐Γé¼╨¿┬º╨⌐ΓÇá_╨¿┬¼╨⌐Γé¼╨⌐╨ë╨⌐ΓÇ₧╨⌐╨ë╨¿┬⌐_╨¿╨ê╨⌐Γé¼╨¿╨ä_╨¿╤û╨¿╨ü╨¿╨ä╨⌐ΓÇª╨¿╨ü╨¿┬▒_╨¿╨ê╨⌐╤ô╨¿╨ä╨⌐Γé¼╨¿╨ü╨¿┬▒_╨⌐ΓÇá╨⌐Γé¼╨⌐╨â╨⌐ΓÇª╨¿╨ü╨¿┬▒_╨¿╨ç╨⌐╨ë╨¿╤û╨⌐ΓÇª╨¿╨ü╨¿┬▒'.split('_'),
        monthsShort: '╨¿┬¼╨¿┬º╨⌐ΓÇá╨⌐╨â╨⌐╨ë_╨⌐╨â╨⌐╨ë╨⌐╨â╨¿┬▒╨⌐╨ë_╨⌐ΓÇª╨¿┬º╨¿┬▒╨¿╤û_╨¿╨ê╨⌐╨â╨¿┬▒╨⌐╨ë╨⌐ΓÇ₧_╨⌐ΓÇª╨¿┬º╨⌐╨ë_╨¿┬¼╨⌐Γé¼╨¿┬º╨⌐ΓÇá_╨¿┬¼╨⌐Γé¼╨⌐╨ë╨⌐ΓÇ₧╨⌐╨ë╨¿┬⌐_╨¿╨ê╨⌐Γé¼╨¿╨ä_╨¿╤û╨¿╨ü╨¿╨ä╨⌐ΓÇª╨¿╨ü╨¿┬▒_╨¿╨ê╨⌐╤ô╨¿╨ä╨⌐Γé¼╨¿╨ü╨¿┬▒_╨⌐ΓÇá╨⌐Γé¼╨⌐╨â╨⌐ΓÇª╨¿╨ü╨¿┬▒_╨¿╨ç╨⌐╨ë╨¿╤û╨⌐ΓÇª╨¿╨ü╨¿┬▒'.split('_'),
        weekdays: '╨¿┬º╨⌐ΓÇ₧╨¿╨ê╨¿┬¡╨¿╨ç_╨¿┬º╨⌐ΓÇ₧╨¿╥É╨¿┬½╨⌐ΓÇá╨⌐╨ë╨⌐ΓÇá_╨¿┬º╨⌐ΓÇ₧╨¿┬½╨⌐ΓÇ₧╨¿┬º╨¿┬½╨¿┬º╨¿╨Ä_╨¿┬º╨⌐ΓÇ₧╨¿╨ê╨¿┬▒╨¿╨ü╨¿Γäû╨¿┬º╨¿╨Ä_╨¿┬º╨⌐ΓÇ₧╨¿┬«╨⌐ΓÇª╨⌐╨ë╨¿╤û_╨¿┬º╨⌐ΓÇ₧╨¿┬¼╨⌐ΓÇª╨¿Γäû╨¿┬⌐_╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿╨ü╨¿╨ä'.split('_'),
        weekdaysShort: '╨¿╨ê╨¿┬¡╨¿╨ç_╨¿╥É╨¿┬½╨⌐ΓÇá╨⌐╨ë╨⌐ΓÇá_╨¿┬½╨⌐ΓÇ₧╨¿┬º╨¿┬½╨¿┬º╨¿╨Ä_╨¿╨ê╨¿┬▒╨¿╨ü╨¿Γäû╨¿┬º╨¿╨Ä_╨¿┬«╨⌐ΓÇª╨⌐╨ë╨¿╤û_╨¿┬¼╨⌐ΓÇª╨¿Γäû╨¿┬⌐_╨¿╤û╨¿╨ü╨¿╨ä'.split('_'),
        weekdaysMin: '╨¿┬¡_╨⌐ΓÇá_╨¿┬½_╨¿┬▒_╨¿┬«_╨¿┬¼_╨¿╤û'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'LT:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY LT',
            LLLL: 'dddd D MMMM YYYY LT'
        },
        calendar: {
            sameDay: '[╨¿┬º╨⌐ΓÇ₧╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª ╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            nextDay: '[╨¿╤ö╨¿╨ç╨¿┬º ╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            nextWeek: 'dddd [╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            lastDay: '[╨¿╨ê╨⌐ΓÇª╨¿╤û ╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            lastWeek: 'dddd [╨¿Γäû╨⌐ΓÇ₧╨⌐ΓÇ░ ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '╨⌐╨â╨⌐╨ë %s',
            past: '╨⌐ΓÇª╨⌐ΓÇá╨¿┬░ %s',
            s: '╨¿┬½╨⌐Γé¼╨¿┬º╨⌐ΓÇá',
            m: '╨¿╨ç╨⌐ΓÇÜ╨⌐╨ë╨⌐ΓÇÜ╨¿┬⌐',
            mm: '%d ╨¿╨ç╨⌐ΓÇÜ╨¿┬º╨¿┬ª╨⌐ΓÇÜ',
            h: '╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐',
            hh: '%d ╨¿╤û╨¿┬º╨¿Γäû╨¿┬º╨¿╨ä',
            d: '╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª',
            dd: '%d ╨¿╨ê╨⌐╨ë╨¿┬º╨⌐ΓÇª',
            M: '╨¿╥æ╨⌐ΓÇí╨¿┬▒',
            MM: '%d ╨¿╨ê╨¿╥æ╨⌐ΓÇí╨¿┬▒',
            y: '╨¿╤û╨⌐ΓÇá╨¿┬⌐',
            yy: '%d ╨¿╤û╨⌐ΓÇá╨⌐Γé¼╨¿┬º╨¿╨ä'
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// Locale: Arabic (ar)
// Author: Abdel Said: https://github.com/abdelsaid
// Changes in months, weekdays: Ahmed Elkhatib
// Native plural forms: forabi https://github.com/forabi

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var symbolMap = {
        '1': '╨⌐╨Ä',
        '2': '╨⌐╤₧',
        '3': '╨⌐╨ê',
        '4': '╨⌐┬ñ',
        '5': '╨⌐╥É',
        '6': '╨⌐┬ª',
        '7': '╨⌐┬º',
        '8': '╨⌐╨ü',
        '9': '╨⌐┬⌐',
        '0': '╨⌐ '
    }, numberMap = {
        '╨⌐╨Ä': '1',
        '╨⌐╤₧': '2',
        '╨⌐╨ê': '3',
        '╨⌐┬ñ': '4',
        '╨⌐╥É': '5',
        '╨⌐┬ª': '6',
        '╨⌐┬º': '7',
        '╨⌐╨ü': '8',
        '╨⌐┬⌐': '9',
        '╨⌐ ': '0'
    }, pluralForm = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals = {
        s : ['╨¿╨ê╨⌐ΓÇÜ╨⌐ΓÇ₧ ╨⌐ΓÇª╨⌐ΓÇá ╨¿┬½╨¿┬º╨⌐ΓÇá╨⌐╨ë╨¿┬⌐', '╨¿┬½╨¿┬º╨⌐ΓÇá╨⌐╨ë╨¿┬⌐ ╨⌐Γé¼╨¿┬º╨¿┬¡╨¿╨ç╨¿┬⌐', ['╨¿┬½╨¿┬º╨⌐ΓÇá╨⌐╨ë╨¿╨ä╨¿┬º╨⌐ΓÇá', '╨¿┬½╨¿┬º╨⌐ΓÇá╨⌐╨ë╨¿╨ä╨⌐╨ë╨⌐ΓÇá'], '%d ╨¿┬½╨⌐Γé¼╨¿┬º╨⌐ΓÇá', '%d ╨¿┬½╨¿┬º╨⌐ΓÇá╨⌐╨ë╨¿┬⌐', '%d ╨¿┬½╨¿┬º╨⌐ΓÇá╨⌐╨ë╨¿┬⌐'],
        m : ['╨¿╨ê╨⌐ΓÇÜ╨⌐ΓÇ₧ ╨⌐ΓÇª╨⌐ΓÇá ╨¿╨ç╨⌐ΓÇÜ╨⌐╨ë╨⌐ΓÇÜ╨¿┬⌐', '╨¿╨ç╨⌐ΓÇÜ╨⌐╨ë╨⌐ΓÇÜ╨¿┬⌐ ╨⌐Γé¼╨¿┬º╨¿┬¡╨¿╨ç╨¿┬⌐', ['╨¿╨ç╨⌐ΓÇÜ╨⌐╨ë╨⌐ΓÇÜ╨¿╨ä╨¿┬º╨⌐ΓÇá', '╨¿╨ç╨⌐ΓÇÜ╨⌐╨ë╨⌐ΓÇÜ╨¿╨ä╨⌐╨ë╨⌐ΓÇá'], '%d ╨¿╨ç╨⌐ΓÇÜ╨¿┬º╨¿┬ª╨⌐ΓÇÜ', '%d ╨¿╨ç╨⌐ΓÇÜ╨⌐╨ë╨⌐ΓÇÜ╨¿┬⌐', '%d ╨¿╨ç╨⌐ΓÇÜ╨⌐╨ë╨⌐ΓÇÜ╨¿┬⌐'],
        h : ['╨¿╨ê╨⌐ΓÇÜ╨⌐ΓÇ₧ ╨⌐ΓÇª╨⌐ΓÇá ╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐', '╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐ ╨⌐Γé¼╨¿┬º╨¿┬¡╨¿╨ç╨¿┬⌐', ['╨¿╤û╨¿┬º╨¿Γäû╨¿╨ä╨¿┬º╨⌐ΓÇá', '╨¿╤û╨¿┬º╨¿Γäû╨¿╨ä╨⌐╨ë╨⌐ΓÇá'], '%d ╨¿╤û╨¿┬º╨¿Γäû╨¿┬º╨¿╨ä', '%d ╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐', '%d ╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐'],
        d : ['╨¿╨ê╨⌐ΓÇÜ╨⌐ΓÇ₧ ╨⌐ΓÇª╨⌐ΓÇá ╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª', '╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª ╨⌐Γé¼╨¿┬º╨¿┬¡╨¿╨ç', ['╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª╨¿┬º╨⌐ΓÇá', '╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª╨⌐╨ë╨⌐ΓÇá'], '%d ╨¿╨ê╨⌐╨ë╨¿┬º╨⌐ΓÇª', '%d ╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª╨⌐ΓÇ╣╨¿┬º', '%d ╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª'],
        M : ['╨¿╨ê╨⌐ΓÇÜ╨⌐ΓÇ₧ ╨⌐ΓÇª╨⌐ΓÇá ╨¿╥æ╨⌐ΓÇí╨¿┬▒', '╨¿╥æ╨⌐ΓÇí╨¿┬▒ ╨⌐Γé¼╨¿┬º╨¿┬¡╨¿╨ç', ['╨¿╥æ╨⌐ΓÇí╨¿┬▒╨¿┬º╨⌐ΓÇá', '╨¿╥æ╨⌐ΓÇí╨¿┬▒╨⌐╨ë╨⌐ΓÇá'], '%d ╨¿╨ê╨¿╥æ╨⌐ΓÇí╨¿┬▒', '%d ╨¿╥æ╨⌐ΓÇí╨¿┬▒╨¿┬º', '%d ╨¿╥æ╨⌐ΓÇí╨¿┬▒'],
        y : ['╨¿╨ê╨⌐ΓÇÜ╨⌐ΓÇ₧ ╨⌐ΓÇª╨⌐ΓÇá ╨¿Γäû╨¿┬º╨⌐ΓÇª', '╨¿Γäû╨¿┬º╨⌐ΓÇª ╨⌐Γé¼╨¿┬º╨¿┬¡╨¿╨ç', ['╨¿Γäû╨¿┬º╨⌐ΓÇª╨¿┬º╨⌐ΓÇá', '╨¿Γäû╨¿┬º╨⌐ΓÇª╨⌐╨ë╨⌐ΓÇá'], '%d ╨¿╨ê╨¿Γäû╨⌐Γé¼╨¿┬º╨⌐ΓÇª', '%d ╨¿Γäû╨¿┬º╨⌐ΓÇª╨⌐ΓÇ╣╨¿┬º', '%d ╨¿Γäû╨¿┬º╨⌐ΓÇª']
    }, pluralize = function (u) {
        return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm(number),
                str = plurals[u][pluralForm(number)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return str.replace(/%d/i, number);
        };
    }, months = [
        '╨⌐╤ô╨¿┬º╨⌐ΓÇá╨⌐Γé¼╨⌐ΓÇá ╨¿┬º╨⌐ΓÇ₧╨¿┬½╨¿┬º╨⌐ΓÇá╨⌐╨ë ╨⌐╨ë╨⌐ΓÇá╨¿┬º╨⌐╨ë╨¿┬▒',
        '╨¿╥æ╨¿╨ü╨¿┬º╨¿┬╖ ╨⌐╨â╨¿╨ü╨¿┬▒╨¿┬º╨⌐╨ë╨¿┬▒',
        '╨¿╤₧╨¿┬░╨¿┬º╨¿┬▒ ╨⌐ΓÇª╨¿┬º╨¿┬▒╨¿╤û',
        '╨⌐ΓÇá╨⌐╨ë╨¿╤û╨¿┬º╨⌐ΓÇá ╨¿╨ê╨¿╨ü╨¿┬▒╨⌐╨ë╨⌐ΓÇ₧',
        '╨¿╨ê╨⌐╨ë╨¿┬º╨¿┬▒ ╨⌐ΓÇª╨¿┬º╨⌐╨ë╨⌐Γé¼',
        '╨¿┬¡╨¿╨å╨⌐╨ë╨¿┬▒╨¿┬º╨⌐ΓÇá ╨⌐╨ë╨⌐Γé¼╨⌐ΓÇá╨⌐╨ë╨⌐Γé¼',
        '╨¿╨ä╨⌐ΓÇª╨⌐Γé¼╨¿╨å ╨⌐╨ë╨⌐Γé¼╨⌐ΓÇ₧╨⌐╨ë╨⌐Γé¼',
        '╨¿╤₧╨¿╨ü ╨¿╨ê╨¿╤ö╨¿╤û╨¿┬╖╨¿╤û',
        '╨¿╨ê╨⌐╨ë╨⌐ΓÇ₧╨⌐Γé¼╨⌐ΓÇ₧ ╨¿╤û╨¿╨ü╨¿╨ä╨⌐ΓÇª╨¿╨ü╨¿┬▒',
        '╨¿╨ä╨¿╥æ╨¿┬▒╨⌐╨ë╨⌐ΓÇá ╨¿┬º╨⌐ΓÇ₧╨¿╨ê╨⌐Γé¼╨⌐ΓÇ₧ ╨¿╨ê╨⌐╤ô╨¿╨ä╨⌐Γé¼╨¿╨ü╨¿┬▒',
        '╨¿╨ä╨¿╥æ╨¿┬▒╨⌐╨ë╨⌐ΓÇá ╨¿┬º╨⌐ΓÇ₧╨¿┬½╨¿┬º╨⌐ΓÇá╨⌐╨ë ╨⌐ΓÇá╨⌐Γé¼╨⌐╨â╨⌐ΓÇª╨¿╨ü╨¿┬▒',
        '╨⌐╤ô╨¿┬º╨⌐ΓÇá╨⌐Γé¼╨⌐ΓÇá ╨¿┬º╨⌐ΓÇ₧╨¿╨ê╨⌐Γé¼╨⌐ΓÇ₧ ╨¿╨ç╨⌐╨ë╨¿╤û╨⌐ΓÇª╨¿╨ü╨¿┬▒'
    ];

    return moment.defineLocale('ar', {
        months : months,
        monthsShort : months,
        weekdays : '╨¿┬º╨⌐ΓÇ₧╨¿╨ê╨¿┬¡╨¿╨ç_╨¿┬º╨⌐ΓÇ₧╨¿╥É╨¿┬½╨⌐ΓÇá╨⌐╨ë╨⌐ΓÇá_╨¿┬º╨⌐ΓÇ₧╨¿┬½╨⌐ΓÇ₧╨¿┬º╨¿┬½╨¿┬º╨¿╨Ä_╨¿┬º╨⌐ΓÇ₧╨¿╨ê╨¿┬▒╨¿╨ü╨¿Γäû╨¿┬º╨¿╨Ä_╨¿┬º╨⌐ΓÇ₧╨¿┬«╨⌐ΓÇª╨⌐╨ë╨¿╤û_╨¿┬º╨⌐ΓÇ₧╨¿┬¼╨⌐ΓÇª╨¿Γäû╨¿┬⌐_╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿╨ü╨¿╨ä'.split('_'),
        weekdaysShort : '╨¿╨ê╨¿┬¡╨¿╨ç_╨¿╥É╨¿┬½╨⌐ΓÇá╨⌐╨ë╨⌐ΓÇá_╨¿┬½╨⌐ΓÇ₧╨¿┬º╨¿┬½╨¿┬º╨¿╨Ä_╨¿╨ê╨¿┬▒╨¿╨ü╨¿Γäû╨¿┬º╨¿╨Ä_╨¿┬«╨⌐ΓÇª╨⌐╨ë╨¿╤û_╨¿┬¼╨⌐ΓÇª╨¿Γäû╨¿┬⌐_╨¿╤û╨¿╨ü╨¿╨ä'.split('_'),
        weekdaysMin : '╨¿┬¡_╨⌐ΓÇá_╨¿┬½_╨¿┬▒_╨¿┬«_╨¿┬¼_╨¿╤û'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        meridiemParse: /╨¿┬╡|╨⌐ΓÇª/,
        isPM : function (input) {
            return '╨⌐ΓÇª' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return '╨¿┬╡';
            } else {
                return '╨⌐ΓÇª';
            }
        },
        calendar : {
            sameDay: '[╨¿┬º╨⌐ΓÇ₧╨⌐╨ë╨⌐Γé¼╨⌐ΓÇª ╨¿Γäû╨⌐ΓÇá╨¿╨ç ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            nextDay: '[╨¿╤ö╨¿╨ç╨⌐ΓÇ╣╨¿┬º ╨¿Γäû╨⌐ΓÇá╨¿╨ç ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            nextWeek: 'dddd [╨¿Γäû╨⌐ΓÇá╨¿╨ç ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            lastDay: '[╨¿╨ê╨⌐ΓÇª╨¿╤û ╨¿Γäû╨⌐ΓÇá╨¿╨ç ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            lastWeek: 'dddd [╨¿Γäû╨⌐ΓÇá╨¿╨ç ╨¿┬º╨⌐ΓÇ₧╨¿╤û╨¿┬º╨¿Γäû╨¿┬⌐] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '╨¿╨ü╨¿Γäû╨¿╨ç %s',
            past : '╨⌐ΓÇª╨⌐ΓÇá╨¿┬░ %s',
            s : pluralize('s'),
            m : pluralize('m'),
            mm : pluralize('m'),
            h : pluralize('h'),
            hh : pluralize('h'),
            d : pluralize('d'),
            dd : pluralize('d'),
            M : pluralize('M'),
            MM : pluralize('M'),
            y : pluralize('y'),
            yy : pluralize('y')
        },
        preparse: function (string) {
            return string.replace(/[╨⌐╨Ä╨⌐╤₧╨⌐╨ê╨⌐┬ñ╨⌐╥É╨⌐┬ª╨⌐┬º╨⌐╨ü╨⌐┬⌐╨⌐ ]/g, function (match) {
                return numberMap[match];
            }).replace(/╨¿╨è/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '╨¿╨è');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : azerbaijani (az)
// author : topchiyev : https://github.com/topchiyev

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var suffixes = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',

        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',

        3: '-╨ô╤ÿnc╨ô╤ÿ',
        4: '-╨ô╤ÿnc╨ô╤ÿ',
        100: '-╨ô╤ÿnc╨ô╤ÿ',

        6: '-nc╨ö┬▒',

        9: '-uncu',
        10: '-uncu',
        30: '-uncu',

        60: '-╨ö┬▒nc╨ö┬▒',
        90: '-╨ö┬▒nc╨ö┬▒'
    };
    return moment.defineLocale('az', {
        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays : 'Bazar_Bazar ert╨ÖΓäósi_╨ôΓÇí╨ÖΓäór╨ò╤ƒ╨ÖΓäónb╨ÖΓäó ax╨ò╤ƒam╨ö┬▒_╨ôΓÇí╨ÖΓäór╨ò╤ƒ╨ÖΓäónb╨ÖΓäó_C╨ô╤ÿm╨ÖΓäó ax╨ò╤ƒam╨ö┬▒_C╨ô╤ÿm╨ÖΓäó_╨ò╤¢╨ÖΓäónb╨ÖΓäó'.split('_'),
        weekdaysShort : 'Baz_BzE_╨ôΓÇíAx_╨ôΓÇí╨ÖΓäór_CAx_C╨ô╤ÿm_╨ò╤¢╨ÖΓäón'.split('_'),
        weekdaysMin : 'Bz_BE_╨ôΓÇíA_╨ôΓÇí╨ÖΓäó_CA_C╨ô╤ÿ_╨ò╤¢╨ÖΓäó'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
            sameDay : '[bug╨ô╤ÿn saat] LT',
            nextDay : '[sabah saat] LT',
            nextWeek : '[g╨ÖΓäól╨ÖΓäón h╨ÖΓäóft╨ÖΓäó] dddd [saat] LT',
            lastDay : '[d╨ô╤ÿn╨ÖΓäón] LT',
            lastWeek : '[ke╨ô┬º╨ÖΓäón h╨ÖΓäóft╨ÖΓäó] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s ╨ÖΓäóvv╨ÖΓäól',
            s : 'birne╨ô┬º╨ÖΓäó saniyy╨ÖΓäó',
            m : 'bir d╨ÖΓäóqiq╨ÖΓäó',
            mm : '%d d╨ÖΓäóqiq╨ÖΓäó',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir g╨ô╤ÿn',
            dd : '%d g╨ô╤ÿn',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir il',
            yy : '%d il'
        },
        meridiemParse: /gec╨ÖΓäó|s╨ÖΓäóh╨ÖΓäór|g╨ô╤ÿnd╨ô╤ÿz|ax╨ò╤ƒam/,
        isPM : function (input) {
            return /^(g╨ô╤ÿnd╨ô╤ÿz|ax╨ò╤ƒam)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'gec╨ÖΓäó';
            } else if (hour < 12) {
                return 's╨ÖΓäóh╨ÖΓäór';
            } else if (hour < 17) {
                return 'g╨ô╤ÿnd╨ô╤ÿz';
            } else {
                return 'ax╨ò╤ƒam';
            }
        },
        ordinalParse: /\d{1,2}-(╨ö┬▒nc╨ö┬▒|inci|nci|╨ô╤ÿnc╨ô╤ÿ|nc╨ö┬▒|uncu)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '-╨ö┬▒nc╨ö┬▒';
            }
            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;

            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : belarusian (be)
// author : Dmitry Demidov : https://github.com/demidov91
// author: Praleska: http://praleska.pro/
// Author : Menelion Elens╨ô╤öle : https://github.com/Oire

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }

    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'mm': withoutSuffix ? '╨íΓÇª╨á╨å╨íΓÇô╨á┬╗╨íΓÇô╨á╨à╨á┬░_╨íΓÇª╨á╨å╨íΓÇô╨á┬╗╨íΓÇô╨á╨à╨íΓÇ╣_╨íΓÇª╨á╨å╨íΓÇô╨á┬╗╨íΓÇô╨á╨à' : '╨íΓÇª╨á╨å╨íΓÇô╨á┬╗╨íΓÇô╨á╨à╨í╤ô_╨íΓÇª╨á╨å╨íΓÇô╨á┬╗╨íΓÇô╨á╨à╨íΓÇ╣_╨íΓÇª╨á╨å╨íΓÇô╨á┬╗╨íΓÇô╨á╨à',
            'hh': withoutSuffix ? '╨á╤û╨á┬░╨á╥æ╨á┬╖╨íΓÇô╨á╨à╨á┬░_╨á╤û╨á┬░╨á╥æ╨á┬╖╨íΓÇô╨á╨à╨íΓÇ╣_╨á╤û╨á┬░╨á╥æ╨á┬╖╨íΓÇô╨á╨à' : '╨á╤û╨á┬░╨á╥æ╨á┬╖╨íΓÇô╨á╨à╨í╤ô_╨á╤û╨á┬░╨á╥æ╨á┬╖╨íΓÇô╨á╨à╨íΓÇ╣_╨á╤û╨á┬░╨á╥æ╨á┬╖╨íΓÇô╨á╨à',
            'dd': '╨á╥æ╨á┬╖╨á┬╡╨á╨à╨í╨è_╨á╥æ╨á╨à╨íΓÇô_╨á╥æ╨á┬╖╨íΓÇÿ╨á╨à',
            'MM': '╨á╤ÿ╨á┬╡╨í╨â╨í╨Å╨íΓÇá_╨á╤ÿ╨á┬╡╨í╨â╨í╨Å╨íΓÇá╨íΓÇ╣_╨á╤ÿ╨á┬╡╨í╨â╨í╨Å╨íΓÇá╨á┬░╨í╤¢',
            'yy': '╨á╤û╨á╤ò╨á╥æ_╨á╤û╨á┬░╨á╥æ╨íΓÇ╣_╨á╤û╨á┬░╨á╥æ╨á╤ò╨í╤¢'
        };
        if (key === 'm') {
            return withoutSuffix ? '╨íΓÇª╨á╨å╨íΓÇô╨á┬╗╨íΓÇô╨á╨à╨á┬░' : '╨íΓÇª╨á╨å╨íΓÇô╨á┬╗╨íΓÇô╨á╨à╨í╤ô';
        }
        else if (key === 'h') {
            return withoutSuffix ? '╨á╤û╨á┬░╨á╥æ╨á┬╖╨íΓÇô╨á╨à╨á┬░' : '╨á╤û╨á┬░╨á╥æ╨á┬╖╨íΓÇô╨á╨à╨í╤ô';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }

    function monthsCaseReplace(m, format) {
        var months = {
            'nominative': '╨í╨â╨íΓÇÜ╨í╤ô╨á╥æ╨á┬╖╨á┬╡╨á╨à╨í╨è_╨á┬╗╨í╨ï╨íΓÇÜ╨íΓÇ╣_╨í╨â╨á┬░╨á╤ö╨á┬░╨á╨å╨íΓÇô╨á╤ö_╨á╤ö╨í╨é╨á┬░╨í╨â╨á┬░╨á╨å╨íΓÇô╨á╤ö_╨íΓÇÜ╨í╨é╨á┬░╨á╨å╨á┬╡╨á╨à╨í╨è_╨íΓÇí╨í╨î╨í╨é╨á╨å╨á┬╡╨á╨à╨í╨è_╨á┬╗╨íΓÇô╨á╤ù╨á┬╡╨á╨à╨í╨è_╨á┬╢╨á╨à╨íΓÇô╨á╨å╨á┬╡╨á╨à╨í╨è_╨á╨å╨á┬╡╨í╨é╨á┬░╨í╨â╨á┬╡╨á╨à╨í╨è_╨á╤ö╨á┬░╨í╨â╨íΓÇÜ╨í╨é╨íΓÇ╣╨íΓÇí╨á╨à╨íΓÇô╨á╤ö_╨á┬╗╨íΓÇô╨í╨â╨íΓÇÜ╨á┬░╨á╤ù╨á┬░╨á╥æ_╨í╨â╨á╨à╨á┬╡╨á┬╢╨á┬░╨á╨à╨í╨è'.split('_'),
            'accusative': '╨í╨â╨íΓÇÜ╨í╤ô╨á╥æ╨á┬╖╨á┬╡╨á╨à╨í╨Å_╨á┬╗╨í╨ï╨íΓÇÜ╨á┬░╨á╤û╨á┬░_╨í╨â╨á┬░╨á╤ö╨á┬░╨á╨å╨íΓÇô╨á╤ö╨á┬░_╨á╤ö╨í╨é╨á┬░╨í╨â╨á┬░╨á╨å╨íΓÇô╨á╤ö╨á┬░_╨íΓÇÜ╨í╨é╨á┬░╨í╤¢╨á╨à╨í╨Å_╨íΓÇí╨í╨î╨í╨é╨á╨å╨á┬╡╨á╨à╨í╨Å_╨á┬╗╨íΓÇô╨á╤ù╨á┬╡╨á╨à╨í╨Å_╨á┬╢╨á╨à╨íΓÇô╨í╤¢╨á╨à╨í╨Å_╨á╨å╨á┬╡╨í╨é╨á┬░╨í╨â╨á╨à╨í╨Å_╨á╤ö╨á┬░╨í╨â╨íΓÇÜ╨í╨é╨íΓÇ╣╨íΓÇí╨á╨à╨íΓÇô╨á╤ö╨á┬░_╨á┬╗╨íΓÇô╨í╨â╨íΓÇÜ╨á┬░╨á╤ù╨á┬░╨á╥æ╨á┬░_╨í╨â╨á╨à╨á┬╡╨á┬╢╨á╨à╨í╨Å'.split('_')
        },

        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
            'accusative' :
            'nominative';

        return months[nounCase][m.month()];
    }

    function weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': '╨á╨à╨í╨Å╨á╥æ╨á┬╖╨á┬╡╨á┬╗╨í╨Å_╨á╤ù╨á┬░╨á╨à╨í╨Å╨á╥æ╨á┬╖╨á┬╡╨á┬╗╨á┬░╨á╤ö_╨á┬░╨í╤¢╨íΓÇÜ╨á╤ò╨í╨é╨á┬░╨á╤ö_╨í╨â╨á┬╡╨í╨é╨á┬░╨á╥æ╨á┬░_╨íΓÇí╨á┬░╨íΓÇá╨á╨å╨á┬╡╨í╨é_╨á╤ù╨í╨Å╨íΓÇÜ╨á╨à╨íΓÇô╨íΓÇá╨á┬░_╨í╨â╨í╤ô╨á┬▒╨á╤ò╨íΓÇÜ╨á┬░'.split('_'),
            'accusative': '╨á╨à╨í╨Å╨á╥æ╨á┬╖╨á┬╡╨á┬╗╨í╨ï_╨á╤ù╨á┬░╨á╨à╨í╨Å╨á╥æ╨á┬╖╨á┬╡╨á┬╗╨á┬░╨á╤ö_╨á┬░╨í╤¢╨íΓÇÜ╨á╤ò╨í╨é╨á┬░╨á╤ö_╨í╨â╨á┬╡╨í╨é╨á┬░╨á╥æ╨í╤ô_╨íΓÇí╨á┬░╨íΓÇá╨á╨å╨á┬╡╨í╨é_╨á╤ù╨í╨Å╨íΓÇÜ╨á╨à╨íΓÇô╨íΓÇá╨í╤ô_╨í╨â╨í╤ô╨á┬▒╨á╤ò╨íΓÇÜ╨í╤ô'.split('_')
        },

        nounCase = (/\[ ?[╨áΓÇÖ╨á╨å] ?(?:╨á╤ÿ╨íΓÇô╨á╨à╨í╤ô╨á┬╗╨í╤ô╨í╨ï|╨á╨à╨á┬░╨í╨â╨íΓÇÜ╨í╤ô╨á╤ù╨á╨à╨í╤ô╨í╨ï)? ?\] ?dddd/).test(format) ?
            'accusative' :
            'nominative';

        return weekdays[nounCase][m.day()];
    }

    return moment.defineLocale('be', {
        months : monthsCaseReplace,
        monthsShort : '╨í╨â╨íΓÇÜ╨í╤ô╨á╥æ_╨á┬╗╨í╨ï╨íΓÇÜ_╨í╨â╨á┬░╨á╤ö_╨á╤ö╨í╨é╨á┬░╨í╨â_╨íΓÇÜ╨í╨é╨á┬░╨á╨å_╨íΓÇí╨í╨î╨í╨é╨á╨å_╨á┬╗╨íΓÇô╨á╤ù_╨á┬╢╨á╨à╨íΓÇô╨á╨å_╨á╨å╨á┬╡╨í╨é_╨á╤ö╨á┬░╨í╨â╨íΓÇÜ_╨á┬╗╨íΓÇô╨í╨â╨íΓÇÜ_╨í╨â╨á╨à╨á┬╡╨á┬╢'.split('_'),
        weekdays : weekdaysCaseReplace,
        weekdaysShort : '╨á╨à╨á╥æ_╨á╤ù╨á╨à_╨á┬░╨íΓÇÜ_╨í╨â╨í╨é_╨íΓÇí╨íΓÇá_╨á╤ù╨íΓÇÜ_╨í╨â╨á┬▒'.split('_'),
        weekdaysMin : '╨á╨à╨á╥æ_╨á╤ù╨á╨à_╨á┬░╨íΓÇÜ_╨í╨â╨í╨é_╨íΓÇí╨íΓÇá_╨á╤ù╨íΓÇÜ_╨í╨â╨á┬▒'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY ╨á╤û.',
            LLL : 'D MMMM YYYY ╨á╤û., LT',
            LLLL : 'dddd, D MMMM YYYY ╨á╤û., LT'
        },
        calendar : {
            sameDay: '[╨á╨Ä╨íΓÇÿ╨á╨à╨á╨à╨í╨Å ╨í╤¢] LT',
            nextDay: '[╨áΓÇö╨á┬░╨í╤¢╨íΓÇÜ╨í╨é╨á┬░ ╨í╤¢] LT',
            lastDay: '[╨á╨ê╨íΓÇí╨á╤ò╨í╨é╨á┬░ ╨í╤¢] LT',
            nextWeek: function () {
                return '[╨á╨ê] dddd [╨í╤¢] LT';
            },
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return '[╨á╨ê ╨á╤ÿ╨íΓÇô╨á╨à╨í╤ô╨á┬╗╨í╤ô╨í╨ï] dddd [╨í╤¢] LT';
                case 1:
                case 2:
                case 4:
                    return '[╨á╨ê ╨á╤ÿ╨íΓÇô╨á╨à╨í╤ô╨á┬╗╨íΓÇ╣] dddd [╨í╤¢] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '╨á╤ù╨í╨é╨á┬░╨á┬╖ %s',
            past : '%s ╨íΓÇÜ╨á┬░╨á╤ÿ╨í╤ô',
            s : '╨á╨à╨á┬╡╨á╤ö╨á┬░╨á┬╗╨í╨è╨á╤ö╨íΓÇô ╨í╨â╨á┬╡╨á╤ö╨í╤ô╨á╨à╨á╥æ',
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithPlural,
            hh : relativeTimeWithPlural,
            d : '╨á╥æ╨á┬╖╨á┬╡╨á╨à╨í╨è',
            dd : relativeTimeWithPlural,
            M : '╨á╤ÿ╨á┬╡╨í╨â╨í╨Å╨íΓÇá',
            MM : relativeTimeWithPlural,
            y : '╨á╤û╨á╤ò╨á╥æ',
            yy : relativeTimeWithPlural
        },
        meridiemParse: /╨á╨à╨á╤ò╨íΓÇí╨íΓÇ╣|╨í╨é╨á┬░╨á╨à╨íΓÇô╨íΓÇá╨íΓÇ╣|╨á╥æ╨á╨à╨í╨Å|╨á╨å╨á┬╡╨íΓÇí╨á┬░╨í╨é╨á┬░/,
        isPM : function (input) {
            return /^(╨á╥æ╨á╨à╨í╨Å|╨á╨å╨á┬╡╨íΓÇí╨á┬░╨í╨é╨á┬░)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return '╨á╨à╨á╤ò╨íΓÇí╨íΓÇ╣';
            } else if (hour < 12) {
                return '╨í╨é╨á┬░╨á╨à╨íΓÇô╨íΓÇá╨íΓÇ╣';
            } else if (hour < 17) {
                return '╨á╥æ╨á╨à╨í╨Å';
            } else {
                return '╨á╨å╨á┬╡╨íΓÇí╨á┬░╨í╨é╨á┬░';
            }
        },

        ordinalParse: /\d{1,2}-(╨íΓÇô|╨íΓÇ╣|╨á╤û╨á┬░)/,
        ordinal: function (number, period) {
            switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-╨íΓÇô' : number + '-╨íΓÇ╣';
            case 'D':
                return number + '-╨á╤û╨á┬░';
            default:
                return number;
            }
        },

        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : bulgarian (bg)
// author : Krasen Borisov : https://github.com/kraz

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('bg', {
        months : '╨í╨Å╨á╨à╨í╤ô╨á┬░╨í╨é╨á╤æ_╨íΓÇ₧╨á┬╡╨á╨å╨í╨é╨í╤ô╨á┬░╨í╨é╨á╤æ_╨á╤ÿ╨á┬░╨í╨é╨íΓÇÜ_╨á┬░╨á╤ù╨í╨é╨á╤æ╨á┬╗_╨á╤ÿ╨á┬░╨áΓäû_╨í╨ï╨á╨à╨á╤æ_╨í╨ï╨á┬╗╨á╤æ_╨á┬░╨á╨å╨á╤û╨í╤ô╨í╨â╨íΓÇÜ_╨í╨â╨á┬╡╨á╤ù╨íΓÇÜ╨á┬╡╨á╤ÿ╨á╨å╨í╨é╨á╤æ_╨á╤ò╨á╤ö╨íΓÇÜ╨á╤ò╨á╤ÿ╨á╨å╨í╨é╨á╤æ_╨á╨à╨á╤ò╨á┬╡╨á╤ÿ╨á╨å╨í╨é╨á╤æ_╨á╥æ╨á┬╡╨á╤ö╨á┬╡╨á╤ÿ╨á╨å╨í╨é╨á╤æ'.split('_'),
        monthsShort : '╨í╨Å╨á╨à╨í╨é_╨íΓÇ₧╨á┬╡╨á╨å_╨á╤ÿ╨á┬░╨í╨é_╨á┬░╨á╤ù╨í╨é_╨á╤ÿ╨á┬░╨áΓäû_╨í╨ï╨á╨à╨á╤æ_╨í╨ï╨á┬╗╨á╤æ_╨á┬░╨á╨å╨á╤û_╨í╨â╨á┬╡╨á╤ù_╨á╤ò╨á╤ö╨íΓÇÜ_╨á╨à╨á╤ò╨á┬╡_╨á╥æ╨á┬╡╨á╤ö'.split('_'),
        weekdays : '╨á╨à╨á┬╡╨á╥æ╨á┬╡╨á┬╗╨í╨Å_╨á╤ù╨á╤ò╨á╨à╨á┬╡╨á╥æ╨á┬╡╨á┬╗╨á╨à╨á╤æ╨á╤ö_╨á╨å╨íΓÇÜ╨á╤ò╨í╨é╨á╨à╨á╤æ╨á╤ö_╨í╨â╨í╨é╨í╨Å╨á╥æ╨á┬░_╨íΓÇí╨á┬╡╨íΓÇÜ╨á╨å╨í╨ë╨í╨é╨íΓÇÜ╨í╨ë╨á╤ö_╨á╤ù╨á┬╡╨íΓÇÜ╨í╨ë╨á╤ö_╨í╨â╨í╨ë╨á┬▒╨á╤ò╨íΓÇÜ╨á┬░'.split('_'),
        weekdaysShort : '╨á╨à╨á┬╡╨á╥æ_╨á╤ù╨á╤ò╨á╨à_╨á╨å╨íΓÇÜ╨á╤ò_╨í╨â╨í╨é╨í╨Å_╨íΓÇí╨á┬╡╨íΓÇÜ_╨á╤ù╨á┬╡╨íΓÇÜ_╨í╨â╨í╨ë╨á┬▒'.split('_'),
        weekdaysMin : '╨á╨à╨á╥æ_╨á╤ù╨á╨à_╨á╨å╨íΓÇÜ_╨í╨â╨í╨é_╨íΓÇí╨íΓÇÜ_╨á╤ù╨íΓÇÜ_╨í╨â╨á┬▒'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'LT:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
            sameDay : '[╨áΓÇ¥╨á╨à╨á┬╡╨í╨â ╨á╨å] LT',
            nextDay : '[╨á╨ê╨íΓÇÜ╨í╨é╨á┬╡ ╨á╨å] LT',
            nextWeek : 'dddd [╨á╨å] LT',
            lastDay : '[╨áΓÇÖ╨íΓÇí╨á┬╡╨í╨é╨á┬░ ╨á╨å] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[╨áΓÇÖ ╨á╤æ╨á┬╖╨á╤ÿ╨á╤æ╨á╨à╨á┬░╨á┬╗╨á┬░╨íΓÇÜ╨á┬░] dddd [╨á╨å] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[╨áΓÇÖ ╨á╤æ╨á┬╖╨á╤ÿ╨á╤æ╨á╨à╨á┬░╨á┬╗╨á╤æ╨í╨Å] dddd [╨á╨å] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '╨í╨â╨á┬╗╨á┬╡╨á╥æ %s',
            past : '╨á╤ù╨í╨é╨á┬╡╨á╥æ╨á╤æ %s',
            s : '╨á╨à╨í╨Å╨á╤ö╨á╤ò╨á┬╗╨á╤ö╨á╤ò ╨í╨â╨á┬╡╨á╤ö╨í╤ô╨á╨à╨á╥æ╨á╤æ',
            m : '╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨á┬░',
            mm : '%d ╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨á╤æ',
            h : '╨íΓÇí╨á┬░╨í╨â',
            hh : '%d ╨íΓÇí╨á┬░╨í╨â╨á┬░',
            d : '╨á╥æ╨á┬╡╨á╨à',
            dd : '%d ╨á╥æ╨á╨à╨á╤æ',
            M : '╨á╤ÿ╨á┬╡╨í╨â╨á┬╡╨íΓÇá',
            MM : '%d ╨á╤ÿ╨á┬╡╨í╨â╨á┬╡╨íΓÇá╨á┬░',
            y : '╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨á┬░',
            yy : '%d ╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨á╤æ'
        },
        ordinalParse: /\d{1,2}-(╨á┬╡╨á╨å|╨á┬╡╨á╨à|╨íΓÇÜ╨á╤æ|╨á╨å╨á╤æ|╨í╨é╨á╤æ|╨á╤ÿ╨á╤æ)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-╨á┬╡╨á╨å';
            } else if (last2Digits === 0) {
                return number + '-╨á┬╡╨á╨à';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-╨íΓÇÜ╨á╤æ';
            } else if (lastDigit === 1) {
                return number + '-╨á╨å╨á╤æ';
            } else if (lastDigit === 2) {
                return number + '-╨í╨é╨á╤æ';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-╨á╤ÿ╨á╤æ';
            } else {
                return number + '-╨íΓÇÜ╨á╤æ';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Bengali (bn)
// author : Kaushik Gandhi : https://github.com/kaushikgandhi

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var symbolMap = {
        '1': '╨░┬º┬º',
        '2': '╨░┬º╨ü',
        '3': '╨░┬º┬⌐',
        '4': '╨░┬º╨ä',
        '5': '╨░┬º┬½',
        '6': '╨░┬º┬¼',
        '7': '╨░┬º┬¡',
        '8': '╨░┬º┬«',
        '9': '╨░┬º╨ç',
        '0': '╨░┬º┬ª'
    },
    numberMap = {
        '╨░┬º┬º': '1',
        '╨░┬º╨ü': '2',
        '╨░┬º┬⌐': '3',
        '╨░┬º╨ä': '4',
        '╨░┬º┬½': '5',
        '╨░┬º┬¼': '6',
        '╨░┬º┬¡': '7',
        '╨░┬º┬«': '8',
        '╨░┬º╨ç': '9',
        '╨░┬º┬ª': '0'
    };

    return moment.defineLocale('bn', {
        months : '╨░┬ª╤Ü╨░┬ª╤ò╨░┬ª╨ü╨░┬º╨â╨░┬º╤ƒ╨░┬ª╤ò╨░┬ª┬░╨░┬º╨é_╨░┬ª┬½╨░┬ºΓÇí╨░┬ª┬¼╨░┬º╨â╨░┬º╤ƒ╨░┬ª╤ò╨░┬ª┬░╨░┬º╨é_╨░┬ª┬«╨░┬ª╤ò╨░┬ª┬░╨░┬º╨î╨░┬ª╤Ö_╨░┬ª╨Å╨░┬ª╨ä╨░┬º╨î╨░┬ª┬░╨░┬ª╤ù╨░┬ª╨å_╨░┬ª┬«╨░┬ºΓÇí_╨░┬ª╤Ü╨░┬º╨â╨░┬ª╨ü_╨░┬ª╤Ü╨░┬º╨â╨░┬ª╨å╨░┬ª╤ò╨░┬ªΓÇí_╨░┬ªΓÇª╨░┬ªΓÇö╨░┬ª╤ò╨░┬ª╤æ╨░┬º╨î╨░┬ª╤ƒ_╨░┬ª╤æ╨░┬ºΓÇí╨░┬ª╨ä╨░┬º╨î╨░┬ª╤ƒ╨░┬ºΓÇí╨░┬ª┬«╨░┬º╨î╨░┬ª┬¼╨░┬ª┬░_╨░┬ªΓÇª╨░┬ªΓÇó╨░┬º╨î╨░┬ª╤ƒ╨░┬ºΓÇ╣╨░┬ª┬¼╨░┬ª┬░_╨░┬ª╨ü╨░┬ª┬¡╨░┬ºΓÇí╨░┬ª┬«╨░┬º╨î╨░┬ª┬¼╨░┬ª┬░_╨░┬ª╨Ä╨░┬ª╤ù╨░┬ª╤æ╨░┬ºΓÇí╨░┬ª┬«╨░┬º╨î╨░┬ª┬¼╨░┬ª┬░'.split('_'),
        monthsShort : '╨░┬ª╤Ü╨░┬ª╤ò╨░┬ª╨ü╨░┬º╨â_╨░┬ª┬½╨░┬ºΓÇí╨░┬ª┬¼_╨░┬ª┬«╨░┬ª╤ò╨░┬ª┬░╨░┬º╨î╨░┬ª╤Ö_╨░┬ª╨Å╨░┬ª╨ä╨░┬ª┬░_╨░┬ª┬«╨░┬ºΓÇí_╨░┬ª╤Ü╨░┬º╨â╨░┬ª╨ü_╨░┬ª╤Ü╨░┬º╨â╨░┬ª╨å_╨░┬ªΓÇª╨░┬ªΓÇö_╨░┬ª╤æ╨░┬ºΓÇí╨░┬ª╨ä╨░┬º╨î╨░┬ª╤ƒ_╨░┬ªΓÇª╨░┬ªΓÇó╨░┬º╨î╨░┬ª╤ƒ╨░┬ºΓÇ╣_╨░┬ª╨ü╨░┬ª┬¡_╨░┬ª╨Ä╨░┬ª╤ù╨░┬ª╤æ╨░┬ºΓÇí╨░┬ª┬«╨░┬º╨î'.split('_'),
        weekdays : '╨░┬ª┬░╨░┬ª┬¼╨░┬ª╤ù╨░┬ª┬¼╨░┬ª╤ò╨░┬ª┬░_╨░┬ª╤æ╨░┬ºΓÇ╣╨░┬ª┬«╨░┬ª┬¼╨░┬ª╤ò╨░┬ª┬░_╨░┬ª┬«╨░┬ªΓäó╨░┬º╨î╨░┬ªΓÇö╨░┬ª╨å╨░┬ª┬¼╨░┬ª╤ò╨░┬ª┬░_╨░┬ª┬¼╨░┬º╨â╨░┬ª┬º╨░┬ª┬¼╨░┬ª╤ò╨░┬ª┬░_╨░┬ª┬¼╨░┬º╤ô╨░┬ªΓäû╨░┬ª╤æ╨░┬º╨î╨░┬ª╨ä╨░┬ª┬ñ╨░┬º╨î╨░┬ª┬ñ╨░┬ª╤ù╨░┬ª┬¼╨░┬ª╤ò╨░┬ª┬░_╨░┬ª┬╢╨░┬º╨â╨░┬ªΓÇó╨░┬º╨î╨░┬ª┬░╨░┬º╨â╨░┬ª┬¼╨░┬ª╤ò╨░┬ª┬░_╨░┬ª┬╢╨░┬ª╨ü╨░┬ª╤ù╨░┬ª┬¼╨░┬ª╤ò╨░┬ª┬░'.split('_'),
        weekdaysShort : '╨░┬ª┬░╨░┬ª┬¼╨░┬ª╤ù_╨░┬ª╤æ╨░┬ºΓÇ╣╨░┬ª┬«_╨░┬ª┬«╨░┬ªΓäó╨░┬º╨î╨░┬ªΓÇö╨░┬ª╨å_╨░┬ª┬¼╨░┬º╨â╨░┬ª┬º_╨░┬ª┬¼╨░┬º╤ô╨░┬ªΓäû╨░┬ª╤æ╨░┬º╨î╨░┬ª╨ä╨░┬ª┬ñ╨░┬º╨î╨░┬ª┬ñ╨░┬ª╤ù_╨░┬ª┬╢╨░┬º╨â╨░┬ªΓÇó╨░┬º╨î╨░┬ª┬░╨░┬º╨â_╨░┬ª┬╢╨░┬ª╨ü╨░┬ª╤ù'.split('_'),
        weekdaysMin : '╨░┬ª┬░╨░┬ª┬¼_╨░┬ª╤æ╨░┬ª┬«_╨░┬ª┬«╨░┬ªΓäó╨░┬º╨î╨░┬ªΓÇö_╨░┬ª┬¼╨░┬º╨â_╨░┬ª┬¼╨░┬º╨î╨░┬ª┬░╨░┬ª╤ù╨░┬ªΓäû_╨░┬ª┬╢╨░┬º╨â_╨░┬ª┬╢╨░┬ª╨ü╨░┬ª╤ù'.split('_'),
        longDateFormat : {
            LT : 'A h:mm ╨░┬ª╤æ╨░┬ª┬«╨░┬º╤ƒ',
            LTS : 'A h:mm:ss ╨░┬ª╤æ╨░┬ª┬«╨░┬º╤ƒ',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, LT',
            LLLL : 'dddd, D MMMM YYYY, LT'
        },
        calendar : {
            sameDay : '[╨░┬ªΓÇá╨░┬ª╤Ü] LT',
            nextDay : '[╨░┬ªΓÇá╨░┬ªΓÇö╨░┬ª╤ò╨░┬ª┬«╨░┬º╨é╨░┬ªΓÇó╨░┬ª╤ò╨░┬ª╨å] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[╨░┬ªΓÇö╨░┬ª┬ñ╨░┬ªΓÇó╨░┬ª╤ò╨░┬ª╨å] LT',
            lastWeek : '[╨░┬ªΓÇö╨░┬ª┬ñ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ╨░┬ª╨ä╨░┬ª┬░╨░┬ºΓÇí',
            past : '%s ╨░┬ªΓÇá╨░┬ªΓÇö╨░┬ºΓÇí',
            s : '╨░┬ªΓÇó╨░┬ª╨Å╨░┬ªΓÇó ╨░┬ª╤æ╨░┬ºΓÇí╨░┬ªΓÇó╨░┬ºΓÇí╨░┬ª╨ü╨░┬º╨î╨░┬ª╨Ä',
            m : '╨░┬ª╨Å╨░┬ªΓÇó ╨░┬ª┬«╨░┬ª╤ù╨░┬ª╨ü╨░┬ª╤ù╨░┬ª╤ƒ',
            mm : '%d ╨░┬ª┬«╨░┬ª╤ù╨░┬ª╨ü╨░┬ª╤ù╨░┬ª╤ƒ',
            h : '╨░┬ª╨Å╨░┬ªΓÇó ╨░┬ª┬ÿ╨░┬ª╨ü╨░┬º╨î╨░┬ª╤ƒ╨░┬ª╤ò',
            hh : '%d ╨░┬ª┬ÿ╨░┬ª╨ü╨░┬º╨î╨░┬ª╤ƒ╨░┬ª╤ò',
            d : '╨░┬ª╨Å╨░┬ªΓÇó ╨░┬ª┬ª╨░┬ª╤ù╨░┬ª╨ü',
            dd : '%d ╨░┬ª┬ª╨░┬ª╤ù╨░┬ª╨ü',
            M : '╨░┬ª╨Å╨░┬ªΓÇó ╨░┬ª┬«╨░┬ª╤ò╨░┬ª╤æ',
            MM : '%d ╨░┬ª┬«╨░┬ª╤ò╨░┬ª╤æ',
            y : '╨░┬ª╨Å╨░┬ªΓÇó ╨░┬ª┬¼╨░┬ªΓÇ║╨░┬ª┬░',
            yy : '%d ╨░┬ª┬¼╨░┬ªΓÇ║╨░┬ª┬░'
        },
        preparse: function (string) {
            return string.replace(/[╨░┬º┬º╨░┬º╨ü╨░┬º┬⌐╨░┬º╨ä╨░┬º┬½╨░┬º┬¼╨░┬º┬¡╨░┬º┬«╨░┬º╨ç╨░┬º┬ª]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /╨░┬ª┬░╨░┬ª╤ò╨░┬ª┬ñ|╨░┬ª┬╢╨░┬ªΓÇó╨░┬ª╤ò╨░┬ª╨å|╨░┬ª┬ª╨░┬º╨â╨░┬ª╨ä╨░┬º╨â╨░┬ª┬░|╨░┬ª┬¼╨░┬ª╤ù╨░┬ªΓÇó╨░┬ºΓÇí╨░┬ª╨å|╨░┬ª┬░╨░┬ª╤ò╨░┬ª┬ñ/,
        isPM: function (input) {
            return /^(╨░┬ª┬ª╨░┬º╨â╨░┬ª╨ä╨░┬º╨â╨░┬ª┬░|╨░┬ª┬¼╨░┬ª╤ù╨░┬ªΓÇó╨░┬ºΓÇí╨░┬ª╨å|╨░┬ª┬░╨░┬ª╤ò╨░┬ª┬ñ)$/.test(input);
        },
        //Bengali is a vast language its spoken
        //in different forms in various parts of the world.
        //I have just generalized with most common one used
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return '╨░┬ª┬░╨░┬ª╤ò╨░┬ª┬ñ';
            } else if (hour < 10) {
                return '╨░┬ª┬╢╨░┬ªΓÇó╨░┬ª╤ò╨░┬ª╨å';
            } else if (hour < 17) {
                return '╨░┬ª┬ª╨░┬º╨â╨░┬ª╨ä╨░┬º╨â╨░┬ª┬░';
            } else if (hour < 20) {
                return '╨░┬ª┬¼╨░┬ª╤ù╨░┬ªΓÇó╨░┬ºΓÇí╨░┬ª╨å';
            } else {
                return '╨░┬ª┬░╨░┬ª╤ò╨░┬ª┬ñ';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : tibetan (bo)
// author : Thupten N. Chakrishar : https://github.com/vajradog

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var symbolMap = {
        '1': '╨░╤ÿ╨Ä',
        '2': '╨░╤ÿ╤₧',
        '3': '╨░╤ÿ╨ê',
        '4': '╨░╤ÿ┬ñ',
        '5': '╨░╤ÿ╥É',
        '6': '╨░╤ÿ┬ª',
        '7': '╨░╤ÿ┬º',
        '8': '╨░╤ÿ╨ü',
        '9': '╨░╤ÿ┬⌐',
        '0': '╨░╤ÿ '
    },
    numberMap = {
        '╨░╤ÿ╨Ä': '1',
        '╨░╤ÿ╤₧': '2',
        '╨░╤ÿ╨ê': '3',
        '╨░╤ÿ┬ñ': '4',
        '╨░╤ÿ╥É': '5',
        '╨░╤ÿ┬ª': '6',
        '╨░╤ÿ┬º': '7',
        '╨░╤ÿ╨ü': '8',
        '╨░╤ÿ┬⌐': '9',
        '╨░╤ÿ ': '0'
    };

    return moment.defineLocale('bo', {
        months : '╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇÿ╨░╨àΓÇ₧╨░╤ÿΓÇ╣╨░╨àΓÇ¥╨░╨à╤ÿ_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨àΓÇ░╨░╨à╨å╨░╨à┬ª╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨à┬ª╨░╨à╥æ╨░╨à┬ÿ╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨à╤¢╨░╨à╨å╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨à╨ê╨░╤òΓÇ¥╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇÿ╨░╤ò╨å╨░╨à╥æ╨░╨àΓÇÜ╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨àΓÇÿ╨░╨à╥æ╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨à╤₧╨░╤òΓÇÖ╨░╤ò┬▒╨░╨àΓÇÿ╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇÿ╨░╨àΓÇÜ╨░╨à╥æ╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨àΓÇª╨░╨à╥æ╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨àΓÇª╨░╨à╥æ╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨àΓÇª╨░╨à╨å╨░╨àΓÇÜ╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨àΓÇª╨░╨à╥æ╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨àΓÇ░╨░╨à╨å╨░╨à┬ª╨░╤ÿΓÇ╣╨░╨àΓÇ¥'.split('_'),
        monthsShort : '╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇÿ╨░╨àΓÇ₧╨░╤ÿΓÇ╣╨░╨àΓÇ¥╨░╨à╤ÿ_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨àΓÇ░╨░╨à╨å╨░╨à┬ª╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨à┬ª╨░╨à╥æ╨░╨à┬ÿ╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨à╤¢╨░╨à╨å╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨à╨ê╨░╤òΓÇ¥╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇÿ╨░╤ò╨å╨░╨à╥æ╨░╨àΓÇÜ╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨àΓÇÿ╨░╨à╥æ╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨à╤₧╨░╤òΓÇÖ╨░╤ò┬▒╨░╨àΓÇÿ╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇÿ╨░╨àΓÇÜ╨░╨à╥æ╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨àΓÇª╨░╨à╥æ╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨àΓÇª╨░╨à╥æ╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨àΓÇª╨░╨à╨å╨░╨àΓÇÜ╨░╤ÿΓÇ╣╨░╨àΓÇ¥_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨àΓÇª╨░╨à╥æ╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨àΓÇ░╨░╨à╨å╨░╨à┬ª╨░╤ÿΓÇ╣╨░╨àΓÇ¥'.split('_'),
        weekdays : '╨░╨àΓÇÜ╨░╨à╤ƒ╨░╨à ╨░╤ÿΓÇ╣╨░╨àΓÇ░╨░╨à╨å╨░╤ÿΓÇ╣╨░╨à┬ÿ╨░╤ÿΓÇ╣_╨░╨àΓÇÜ╨░╨à╤ƒ╨░╨à ╨░╤ÿΓÇ╣╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣_╨░╨àΓÇÜ╨░╨à╤ƒ╨░╨à ╨░╤ÿΓÇ╣╨░╨à┬ÿ╨░╨à╨å╨░╨àΓÇÜ╨░╤ÿΓÇ╣╨░╨àΓÇÿ╨░╨à┬ÿ╨░╨à╤₧╨░╤ÿΓÇ╣_╨░╨àΓÇÜ╨░╨à╤ƒ╨░╨à ╨░╤ÿΓÇ╣╨░╨à╨ê╨░╤ò┬╖╨░╨àΓÇÜ╨░╤ÿΓÇ╣╨░╨àΓÇ¥╨░╤ÿΓÇ╣_╨░╨àΓÇÜ╨░╨à╤ƒ╨░╨à ╨░╤ÿΓÇ╣╨░╨àΓÇó╨░╨à╥æ╨░╨à╤₧╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨à╥æ_╨░╨àΓÇÜ╨░╨à╤ƒ╨░╨à ╨░╤ÿΓÇ╣╨░╨àΓÇ¥╨░╤ÿΓÇ╣╨░╨à┬ª╨░╨àΓÇ₧╨░╨à┬ª╨░╤ÿΓÇ╣_╨░╨àΓÇÜ╨░╨à╤ƒ╨░╨à ╨░╤ÿΓÇ╣╨░╨à┬ª╨░╤ò┬ñ╨░╨à╤ö╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨àΓÇ¥╨░╤ÿΓÇ╣'.split('_'),
        weekdaysShort : '╨░╨àΓÇ░╨░╨à╨å╨░╤ÿΓÇ╣╨░╨à┬ÿ╨░╤ÿΓÇ╣_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣_╨░╨à┬ÿ╨░╨à╨å╨░╨àΓÇÜ╨░╤ÿΓÇ╣╨░╨àΓÇÿ╨░╨à┬ÿ╨░╨à╤₧╨░╤ÿΓÇ╣_╨░╨à╨ê╨░╤ò┬╖╨░╨àΓÇÜ╨░╤ÿΓÇ╣╨░╨àΓÇ¥╨░╤ÿΓÇ╣_╨░╨àΓÇó╨░╨à╥æ╨░╨à╤₧╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨à╥æ_╨░╨àΓÇ¥╨░╤ÿΓÇ╣╨░╨à┬ª╨░╨àΓÇ₧╨░╨à┬ª╨░╤ÿΓÇ╣_╨░╨à┬ª╨░╤ò┬ñ╨░╨à╤ö╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨àΓÇ¥╨░╤ÿΓÇ╣'.split('_'),
        weekdaysMin : '╨░╨àΓÇ░╨░╨à╨å╨░╤ÿΓÇ╣╨░╨à┬ÿ╨░╤ÿΓÇ╣_╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣_╨░╨à┬ÿ╨░╨à╨å╨░╨àΓÇÜ╨░╤ÿΓÇ╣╨░╨àΓÇÿ╨░╨à┬ÿ╨░╨à╤₧╨░╤ÿΓÇ╣_╨░╨à╨ê╨░╤ò┬╖╨░╨àΓÇÜ╨░╤ÿΓÇ╣╨░╨àΓÇ¥╨░╤ÿΓÇ╣_╨░╨àΓÇó╨░╨à╥æ╨░╨à╤₧╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╨à╥æ_╨░╨àΓÇ¥╨░╤ÿΓÇ╣╨░╨à┬ª╨░╨àΓÇ₧╨░╨à┬ª╨░╤ÿΓÇ╣_╨░╨à┬ª╨░╤ò┬ñ╨░╨à╤ö╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨àΓÇ¥╨░╤ÿΓÇ╣'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, LT',
            LLLL : 'dddd, D MMMM YYYY, LT'
        },
        calendar : {
            sameDay : '[╨░╨àΓÇÿ╨░╨à╨å╨░╤ÿΓÇ╣╨░╨à╤₧╨░╨à╨å╨░╨àΓÇ₧] LT',
            nextDay : '[╨░╨à┬ª╨░╨àΓÇ₧╨░╤ÿΓÇ╣╨░╨àΓÇ░╨░╨à╨å╨░╨àΓÇ£] LT',
            nextWeek : '[╨░╨àΓÇô╨░╨àΓÇÿ╨░╨à╥æ╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨àΓÇó╨░╤ò╨å╨░╨àΓÇÜ╨░╤ÿΓÇ╣╨░╨à╤₧╨░╤òΓÇö╨░╨à╤ö╨░╨à┬ª╨░╤ÿΓÇ╣╨░╨à┬ÿ], LT',
            lastDay : '[╨░╨à╨â╨░╤ÿΓÇ╣╨░╨à┬ª╨░╨àΓÇ₧] LT',
            lastWeek : '[╨░╨àΓÇô╨░╨àΓÇÿ╨░╨à╥æ╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨àΓÇó╨░╤ò╨å╨░╨àΓÇÜ╨░╤ÿΓÇ╣╨░╨à┬ÿ╨░╨à╤Æ╨░╨à ╨░╤ÿΓÇ╣╨░╨à┬ÿ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ╨░╨à╨ê╨░╤ÿΓÇ╣',
            past : '%s ╨░╨à┬ª╨░╤òΓÇ¥╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨à╨ê',
            s : '╨░╨à╨ê╨░╨à┬ÿ╨░╤ÿΓÇ╣╨░╨à┬ª╨░╨àΓÇ₧',
            m : '╨░╨à┬ª╨░╤ò╤Æ╨░╨à╤₧╨░╤ÿΓÇ╣╨░╨à┬ÿ╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨àΓÇª╨░╨à╨å╨░╨àΓÇÜ',
            mm : '%d ╨░╨à┬ª╨░╤ò╤Æ╨░╨à╤₧╨░╤ÿΓÇ╣╨░╨à┬ÿ',
            h : '╨░╨àΓÇá╨░╨à╥æ╨░╤ÿΓÇ╣╨░╨à╤Ö╨░╨à╤ÿ╨░╨àΓÇÿ╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨àΓÇª╨░╨à╨å╨░╨àΓÇÜ',
            hh : '%d ╨░╨àΓÇá╨░╨à╥æ╨░╤ÿΓÇ╣╨░╨à╤Ö╨░╨à╤ÿ╨░╨àΓÇÿ',
            d : '╨░╨àΓÇ░╨░╨à╨å╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨àΓÇª╨░╨à╨å╨░╨àΓÇÜ',
            dd : '%d ╨░╨àΓÇ░╨░╨à╨å╨░╨àΓÇ£╨░╤ÿΓÇ╣',
            M : '╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨àΓÇª╨░╨à╨å╨░╨àΓÇÜ',
            MM : '%d ╨░╨à╤ƒ╨░╤ò╤û╨░╤ÿΓÇ╣╨░╨àΓÇô',
            y : '╨░╨à╨ê╨░╨à╤ÿ╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨àΓÇª╨░╨à╨å╨░╨àΓÇÜ',
            yy : '%d ╨░╨à╨ê╨░╨à╤ÿ'
        },
        preparse: function (string) {
            return string.replace(/[╨░╤ÿ╨Ä╨░╤ÿ╤₧╨░╤ÿ╨ê╨░╤ÿ┬ñ╨░╤ÿ╥É╨░╤ÿ┬ª╨░╤ÿ┬º╨░╤ÿ╨ü╨░╤ÿ┬⌐╨░╤ÿ ]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /╨░╨à┬ÿ╨░╨à╤Ö╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨à┬ÿ╨░╨à╤ÿ|╨░╨à╤¢╨░╨à╤ÿ╨░╨àΓÇÜ╨░╨à┬ª╨░╤ÿΓÇ╣╨░╨à╨é╨░╨à┬ª|╨░╨àΓÇ░╨░╨à╨å╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨à╥æ╨░╨àΓÇ₧|╨░╨àΓÇÿ╨░╨àΓÇÜ╨░╨à╤ÿ╨░╨àΓÇ₧╨░╤ÿΓÇ╣╨░╨àΓÇÿ╨░╨àΓÇÜ|╨░╨à┬ÿ╨░╨à╤Ö╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨à┬ÿ╨░╨à╤ÿ/,
        isPM: function (input) {
            return /^(╨░╨àΓÇ░╨░╨à╨å╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨à╥æ╨░╨àΓÇ₧|╨░╨àΓÇÿ╨░╨àΓÇÜ╨░╨à╤ÿ╨░╨àΓÇ₧╨░╤ÿΓÇ╣╨░╨àΓÇÿ╨░╨àΓÇÜ|╨░╨à┬ÿ╨░╨à╤Ö╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨à┬ÿ╨░╨à╤ÿ)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return '╨░╨à┬ÿ╨░╨à╤Ö╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨à┬ÿ╨░╨à╤ÿ';
            } else if (hour < 10) {
                return '╨░╨à╤¢╨░╨à╤ÿ╨░╨àΓÇÜ╨░╨à┬ª╨░╤ÿΓÇ╣╨░╨à╨é╨░╨à┬ª';
            } else if (hour < 17) {
                return '╨░╨àΓÇ░╨░╨à╨å╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨àΓÇÜ╨░╨à╥æ╨░╨àΓÇ₧';
            } else if (hour < 20) {
                return '╨░╨àΓÇÿ╨░╨àΓÇÜ╨░╨à╤ÿ╨░╨àΓÇ₧╨░╤ÿΓÇ╣╨░╨àΓÇÿ╨░╨àΓÇÜ';
            } else {
                return '╨░╨à┬ÿ╨░╨à╤Ö╨░╨àΓÇ£╨░╤ÿΓÇ╣╨░╨à┬ÿ╨░╨à╤ÿ';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : breton (br)
// author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function relativeTimeWithMutation(number, withoutSuffix, key) {
        var format = {
            'mm': 'munutenn',
            'MM': 'miz',
            'dd': 'devezh'
        };
        return number + ' ' + mutation(format[key], number);
    }

    function specialMutationForYears(number) {
        switch (lastNumber(number)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
            return number + ' bloaz';
        default:
            return number + ' vloaz';
        }
    }

    function lastNumber(number) {
        if (number > 9) {
            return lastNumber(number % 10);
        }
        return number;
    }

    function mutation(text, number) {
        if (number === 2) {
            return softMutation(text);
        }
        return text;
    }

    function softMutation(text) {
        var mutationTable = {
            'm': 'v',
            'b': 'v',
            'd': 'z'
        };
        if (mutationTable[text.charAt(0)] === undefined) {
            return text;
        }
        return mutationTable[text.charAt(0)] + text.substring(1);
    }

    return moment.defineLocale('br', {
        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        longDateFormat : {
            LT : 'h[e]mm A',
            LTS : 'h[e]mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D [a viz] MMMM YYYY',
            LLL : 'D [a viz] MMMM YYYY LT',
            LLLL : 'dddd, D [a viz] MMMM YYYY LT'
        },
        calendar : {
            sameDay : '[Hiziv da] LT',
            nextDay : '[Warc\'hoazh da] LT',
            nextWeek : 'dddd [da] LT',
            lastDay : '[Dec\'h da] LT',
            lastWeek : 'dddd [paset da] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'a-benn %s',
            past : '%s \'zo',
            s : 'un nebeud segondenno╨ôΓäû',
            m : 'ur vunutenn',
            mm : relativeTimeWithMutation,
            h : 'un eur',
            hh : '%d eur',
            d : 'un devezh',
            dd : relativeTimeWithMutation,
            M : 'ur miz',
            MM : relativeTimeWithMutation,
            y : 'ur bloaz',
            yy : specialMutationForYears
        },
        ordinalParse: /\d{1,2}(a╨ô┬▒|vet)/,
        ordinal : function (number) {
            var output = (number === 1) ? 'a╨ô┬▒' : 'vet';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : bosnian (bs)
// author : Nedim Cholich : https://github.com/frontyard
// based on (hr) translation by Bojan Markovi╨öΓÇí

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
        case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            if (number === 1) {
                result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
            } else {
                result += 'minuta';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
            if (number === 1) {
                result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
            } else {
                result += 'sati';
            }
            return result;
        case 'dd':
            if (number === 1) {
                result += 'dan';
            } else {
                result += 'dana';
            }
            return result;
        case 'MM':
            if (number === 1) {
                result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
            } else {
                result += 'mjeseci';
            }
            return result;
        case 'yy':
            if (number === 1) {
                result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
            } else {
                result += 'godina';
            }
            return result;
        }
    }

    return moment.defineLocale('bs', {
        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_╨ö╨îetvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._╨ö╨îet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_╨ö╨îe_pe_su'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'LT:ss',
            L : 'DD. MM. YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY LT',
            LLLL : 'dddd, D. MMMM YYYY LT'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',

            nextWeek : function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[ju╨ö╨îer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                case 3:
                    return '[pro╨ò╨Älu] dddd [u] LT';
                case 6:
                    return '[pro╨ò╨Äle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[pro╨ò╨Äli] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            m      : translate,
            mm     : translate,
            h      : translate,
            hh     : translate,
            d      : 'dan',
            dd     : translate,
            M      : 'mjesec',
            MM     : translate,
            y      : 'godinu',
            yy     : translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : catalan (ca)
// author : Juan G. Hurtado : https://github.com/juanghurtado

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('ca', {
        months : 'gener_febrer_mar╨ô┬º_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
        monthsShort : 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        calendar : {
            sameDay : function () {
                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextDay : function () {
                return '[dem╨ô  a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastDay : function () {
                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'fa %s',
            s : 'uns segons',
            m : 'un minut',
            mm : '%d minuts',
            h : 'una hora',
            hh : '%d hores',
            d : 'un dia',
            dd : '%d dies',
            M : 'un mes',
            MM : '%d mesos',
            y : 'un any',
            yy : '%d anys'
        },
        ordinalParse: /\d{1,2}(r|n|t|╨ô╨ü|a)/,
        ordinal : function (number, period) {
            var output = (number === 1) ? 'r' :
                (number === 2) ? 'n' :
                (number === 3) ? 'r' :
                (number === 4) ? 't' : '╨ô╨ü';
            if (period === 'w' || period === 'W') {
                output = 'a';
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : czech (cs)
// author : petrbela : https://github.com/petrbela

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var months = 'leden_╨ô╤önor_b╨òΓäóezen_duben_kv╨öΓÇ║ten_╨ö╨îerven_╨ö╨îervenec_srpen_z╨ô╨Ä╨òΓäó╨ô┬¡_╨òΓäó╨ô┬¡jen_listopad_prosinec'.split('_'),
        monthsShort = 'led_╨ô╤öno_b╨òΓäóe_dub_kv╨öΓÇ║_╨ö╨îvn_╨ö╨îvc_srp_z╨ô╨Ä╨òΓäó_╨òΓäó╨ô┬¡j_lis_pro'.split('_');

    function plural(n) {
        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
    }

    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'p╨ô╨Är sekund' : 'p╨ô╨Är sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'minuty' : 'minut');
            } else {
                return result + 'minutami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'hodiny' : 'hodin');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'dny' : 'dn╨ô┬¡');
            } else {
                return result + 'dny';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'm╨öΓÇ║s╨ô┬¡c' : 'm╨öΓÇ║s╨ô┬¡cem';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'm╨öΓÇ║s╨ô┬¡ce' : 'm╨öΓÇ║s╨ô┬¡c╨ò╨ç');
            } else {
                return result + 'm╨öΓÇ║s╨ô┬¡ci';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'roky' : 'let');
            } else {
                return result + 'lety';
            }
            break;
        }
    }

    return moment.defineLocale('cs', {
        months : months,
        monthsShort : monthsShort,
        monthsParse : (function (months, monthsShort) {
            var i, _monthsParse = [];
            for (i = 0; i < 12; i++) {
                // use custom parser to solve problem with July (╨ö╨îervenec)
                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
            }
            return _monthsParse;
        }(months, monthsShort)),
        weekdays : 'ned╨öΓÇ║le_pond╨öΓÇ║l╨ô┬¡_╨ô╤öter╨ô╨à_st╨òΓäóeda_╨ö╨îtvrtek_p╨ô╨Ätek_sobota'.split('_'),
        weekdaysShort : 'ne_po_╨ô╤öt_st_╨ö╨ît_p╨ô╨Ä_so'.split('_'),
        weekdaysMin : 'ne_po_╨ô╤öt_st_╨ö╨ît_p╨ô╨Ä_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY LT',
            LLLL : 'dddd D. MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[dnes v] LT',
            nextDay: '[z╨ô┬¡tra v] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[v ned╨öΓÇ║li v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve st╨òΓäóedu v] LT';
                case 4:
                    return '[ve ╨ö╨îtvrtek v] LT';
                case 5:
                    return '[v p╨ô╨Ätek v] LT';
                case 6:
                    return '[v sobotu v] LT';
                }
            },
            lastDay: '[v╨ö╨îera v] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[minulou ned╨öΓÇ║li v] LT';
                case 1:
                case 2:
                    return '[minul╨ô┬⌐] dddd [v] LT';
                case 3:
                    return '[minulou st╨òΓäóedu v] LT';
                case 4:
                case 5:
                    return '[minul╨ô╨à] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'p╨òΓäóed %s',
            s : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        ordinalParse : /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : chuvash (cv)
// author : Anatoly Mironov : https://github.com/mirontoli

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('cv', {
        months : '╨á╤ö╨ö╤ô╨í╨é╨á┬╗╨á┬░╨íΓÇí_╨á╨à╨á┬░╨í╨é╨ö╤ô╨í╨â_╨á╤ù╨í╤ô╨íΓé¼_╨á┬░╨á╤ö╨á┬░_╨á╤ÿ╨á┬░╨áΓäû_╨ô┬º╨öΓÇó╨í╨é╨íΓÇÜ╨á╤ÿ╨á┬╡_╨í╤ô╨íΓÇÜ╨ö╤ô_╨ô┬º╨í╤ô╨í╨é╨á┬╗╨á┬░_╨á┬░╨á╨å╨ö╤ô╨á╨à_╨í╨ï╨á╤ù╨á┬░_╨íΓÇí╨ú╤û╨á╤ö_╨í╨é╨á┬░╨íΓé¼╨íΓÇÜ╨á┬░╨á╨å'.split('_'),
        monthsShort : '╨á╤ö╨ö╤ô╨í╨é_╨á╨à╨á┬░╨í╨é_╨á╤ù╨í╤ô╨íΓé¼_╨á┬░╨á╤ö╨á┬░_╨á╤ÿ╨á┬░╨áΓäû_╨ô┬º╨öΓÇó╨í╨é_╨í╤ô╨íΓÇÜ╨ö╤ô_╨ô┬º╨í╤ô╨í╨é_╨á┬░╨á╨å_╨í╨ï╨á╤ù╨á┬░_╨íΓÇí╨ú╤û╨á╤ö_╨í╨é╨á┬░╨íΓé¼'.split('_'),
        weekdays : '╨á╨å╨íΓÇ╣╨í╨é╨í╨â╨á┬░╨í╨é╨á╨à╨á╤æ╨á╤ö╨í╤ô╨á╨à_╨íΓÇÜ╨í╤ô╨á╨à╨íΓÇÜ╨á╤æ╨á╤ö╨í╤ô╨á╨à_╨íΓÇ╣╨íΓÇÜ╨á┬╗╨á┬░╨í╨é╨á╤æ╨á╤ö╨í╤ô╨á╨à_╨í╨ï╨á╨à╨á╤ö╨í╤ô╨á╨à_╨á╤ö╨öΓÇó╨ô┬º╨á╨à╨á┬╡╨í╨é╨á╨à╨á╤æ╨á╤ö╨í╤ô╨á╨à_╨í╨î╨í╨é╨á╨à╨á┬╡╨á╤ö╨í╤ô╨á╨à_╨íΓé¼╨ö╤ô╨á╤ÿ╨á┬░╨íΓÇÜ╨á╤ö╨í╤ô╨á╨à'.split('_'),
        weekdaysShort : '╨á╨å╨íΓÇ╣╨í╨é_╨íΓÇÜ╨í╤ô╨á╨à_╨íΓÇ╣╨íΓÇÜ╨á┬╗_╨í╨ï╨á╨à_╨á╤ö╨öΓÇó╨ô┬º_╨í╨î╨í╨é╨á╨à_╨íΓé¼╨ö╤ô╨á╤ÿ'.split('_'),
        weekdaysMin : '╨á╨å╨í╨é_╨íΓÇÜ╨á╨à_╨íΓÇ╣╨íΓÇÜ_╨í╨ï╨á╨à_╨á╤ö╨ô┬º_╨í╨î╨í╨é_╨íΓé¼╨á╤ÿ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD-MM-YYYY',
            LL : 'YYYY [╨ô┬º╨í╤ô╨á┬╗╨íΓÇª╨á╤æ] MMMM [╨í╤ô╨áΓäû╨ö╤ô╨íΓÇª╨öΓÇó╨á╨à] D[-╨á╤ÿ╨öΓÇó╨íΓé¼╨öΓÇó]',
            LLL : 'YYYY [╨ô┬º╨í╤ô╨á┬╗╨íΓÇª╨á╤æ] MMMM [╨í╤ô╨áΓäû╨ö╤ô╨íΓÇª╨öΓÇó╨á╨à] D[-╨á╤ÿ╨öΓÇó╨íΓé¼╨öΓÇó], LT',
            LLLL : 'dddd, YYYY [╨ô┬º╨í╤ô╨á┬╗╨íΓÇª╨á╤æ] MMMM [╨í╤ô╨áΓäû╨ö╤ô╨íΓÇª╨öΓÇó╨á╨à] D[-╨á╤ÿ╨öΓÇó╨íΓé¼╨öΓÇó], LT'
        },
        calendar : {
            sameDay: '[╨á╤ƒ╨á┬░╨í╨Å╨á╨à] LT [╨í╨â╨á┬╡╨íΓÇª╨á┬╡╨íΓÇÜ╨í╨é╨á┬╡]',
            nextDay: '[╨á┬½╨í╨é╨á┬░╨á╨à] LT [╨í╨â╨á┬╡╨íΓÇª╨á┬╡╨íΓÇÜ╨í╨é╨á┬╡]',
            lastDay: '[╨öΓÇ¥╨á╨à╨á┬╡╨í╨é] LT [╨í╨â╨á┬╡╨íΓÇª╨á┬╡╨íΓÇÜ╨í╨é╨á┬╡]',
            nextWeek: '[╨ôΓÇí╨á╤æ╨íΓÇÜ╨á┬╡╨í╨â] dddd LT [╨í╨â╨á┬╡╨íΓÇª╨á┬╡╨íΓÇÜ╨í╨é╨á┬╡]',
            lastWeek: '[╨á┬ÿ╨í╨é╨íΓÇÜ╨á╨à╨öΓÇó] dddd LT [╨í╨â╨á┬╡╨íΓÇª╨á┬╡╨íΓÇÜ╨í╨é╨á┬╡]',
            sameElse: 'L'
        },
        relativeTime : {
            future : function (output) {
                var affix = /╨í╨â╨á┬╡╨íΓÇª╨á┬╡╨íΓÇÜ$/i.exec(output) ? '╨í╨é╨á┬╡╨á╨à' : /╨ô┬º╨í╤ô╨á┬╗$/i.exec(output) ? '╨íΓÇÜ╨á┬░╨á╨à' : '╨í╨é╨á┬░╨á╨à';
                return output + affix;
            },
            past : '%s ╨á╤ö╨á┬░╨í╨Å╨á┬╗╨á┬╗╨á┬░',
            s : '╨á╤ù╨öΓÇó╨í╨é-╨á╤æ╨á╤ö ╨ô┬º╨á┬╡╨á╤ö╨á╤ö╨í╤ô╨á╨à╨íΓÇÜ',
            m : '╨á╤ù╨öΓÇó╨í╨é ╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ',
            mm : '%d ╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ',
            h : '╨á╤ù╨öΓÇó╨í╨é ╨í╨â╨á┬╡╨íΓÇª╨á┬╡╨íΓÇÜ',
            hh : '%d ╨í╨â╨á┬╡╨íΓÇª╨á┬╡╨íΓÇÜ',
            d : '╨á╤ù╨öΓÇó╨í╨é ╨á╤ö╨í╤ô╨á╨à',
            dd : '%d ╨á╤ö╨í╤ô╨á╨à',
            M : '╨á╤ù╨öΓÇó╨í╨é ╨í╤ô╨áΓäû╨ö╤ô╨íΓÇª',
            MM : '%d ╨í╤ô╨áΓäû╨ö╤ô╨íΓÇª',
            y : '╨á╤ù╨öΓÇó╨í╨é ╨ô┬º╨í╤ô╨á┬╗',
            yy : '%d ╨ô┬º╨í╤ô╨á┬╗'
        },
        ordinalParse: /\d{1,2}-╨á╤ÿ╨öΓÇó╨íΓé¼/,
        ordinal : '%d-╨á╤ÿ╨öΓÇó╨íΓé¼',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Welsh (cy)
// author : Robert Allen

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        // time formats are the same as en-gb
        longDateFormat: {
            LT: 'HH:mm',
            LTS : 'LT:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY LT',
            LLLL: 'dddd, D MMMM YYYY LT'
        },
        calendar: {
            sameDay: '[Heddiw am] LT',
            nextDay: '[Yfory am] LT',
            nextWeek: 'dddd [am] LT',
            lastDay: '[Ddoe am] LT',
            lastWeek: 'dddd [diwethaf am] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'mewn %s',
            past: '%s yn ╨ô╥æl',
            s: 'ychydig eiliadau',
            m: 'munud',
            mm: '%d munud',
            h: 'awr',
            hh: '%d awr',
            d: 'diwrnod',
            dd: '%d diwrnod',
            M: 'mis',
            MM: '%d mis',
            y: 'blwyddyn',
            yy: '%d flynedd'
        },
        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
        ordinal: function (number) {
            var b = number,
                output = '',
                lookup = [
                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
                ];

            if (b > 20) {
                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                    output = 'fed'; // not 30ain, 70ain or 90ain
                } else {
                    output = 'ain';
                }
            } else if (b > 0) {
                output = lookup[b];
            }

            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : danish (da)
// author : Ulrik Nielsen : https://github.com/mrbase

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('da', {
        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 's╨ô╤ændag_mandag_tirsdag_onsdag_torsdag_fredag_l╨ô╤ærdag'.split('_'),
        weekdaysShort : 's╨ô╤æn_man_tir_ons_tor_fre_l╨ô╤ær'.split('_'),
        weekdaysMin : 's╨ô╤æ_ma_ti_on_to_fr_l╨ô╤æ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY LT',
            LLLL : 'dddd [d.] D. MMMM YYYY LT'
        },
        calendar : {
            sameDay : '[I dag kl.] LT',
            nextDay : '[I morgen kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[I g╨ô╥Ér kl.] LT',
            lastWeek : '[sidste] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'f╨ô╥É sekunder',
            m : 'et minut',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dage',
            M : 'en m╨ô╥Éned',
            MM : '%d m╨ô╥Éneder',
            y : 'et ╨ô╥Ér',
            yy : '%d ╨ô╥Ér'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : austrian german (de-at)
// author : lluchs : https://github.com/lluchs
// author: Menelion Elens╨ô╤öle: https://github.com/Oire
// author : Martin Groller : https://github.com/MadMG

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    return moment.defineLocale('de-at', {
        months : 'J╨ô┬ñnner_Februar_M╨ô┬ñrz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'J╨ô┬ñn._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY LT',
            LLLL : 'dddd, D. MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[Heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[Morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[Gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            m : processRelativeTime,
            mm : '%d Minuten',
            h : processRelativeTime,
            hh : '%d Stunden',
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : german (de)
// author : lluchs : https://github.com/lluchs
// author: Menelion Elens╨ô╤öle: https://github.com/Oire

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    return moment.defineLocale('de', {
        months : 'Januar_Februar_M╨ô┬ñrz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY LT',
            LLLL : 'dddd, D. MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[Heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[Morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[Gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            m : processRelativeTime,
            mm : '%d Minuten',
            h : processRelativeTime,
            hh : '%d Stunden',
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : modern greek (el)
// author : Aggelos Karalias : https://github.com/mehiel

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('el', {
        monthsNominativeEl : '╨₧Γäó╨₧┬▒╨₧╨à╨₧╤ù╨ƒΓÇª╨₧┬¼╨ƒ╨â╨₧Γäû╨₧╤ù╨ƒΓÇÜ_╨₧┬ª╨₧┬╡╨₧╨å╨ƒ╨â╨₧╤ù╨ƒΓÇª╨₧┬¼╨ƒ╨â╨₧Γäû╨₧╤ù╨ƒΓÇÜ_╨₧╤Ü╨₧┬¼╨ƒ╨â╨ƒΓÇ₧╨₧Γäû╨₧╤ù╨ƒΓÇÜ_╨₧ΓÇÿ╨ƒ╨é╨ƒ╨â╨₧╨ç╨₧┬╗╨₧Γäû╨₧╤ù╨ƒΓÇÜ_╨₧╤Ü╨₧┬¼╨₧Γäû╨₧╤ù╨ƒΓÇÜ_╨₧Γäó╨₧╤ù╨ƒ╨î╨₧╨à╨₧Γäû╨₧╤ù╨ƒΓÇÜ_╨₧Γäó╨₧╤ù╨ƒ╨î╨₧┬╗╨₧Γäû╨₧╤ù╨ƒΓÇÜ_╨₧ΓÇÿ╨ƒ╨î╨₧╤û╨₧╤ù╨ƒΓÇª╨ƒ╤ô╨ƒΓÇ₧╨₧╤ù╨ƒΓÇÜ_╨₧╨ê╨₧┬╡╨ƒ╨é╨ƒΓÇ₧╨₧┬¡╨₧╤ÿ╨₧╨å╨ƒ╨â╨₧Γäû╨₧╤ù╨ƒΓÇÜ_╨₧╤ƒ╨₧╤ö╨ƒΓÇ₧╨ƒ╨ï╨₧╨å╨ƒ╨â╨₧Γäû╨₧╤ù╨ƒΓÇÜ_╨₧╤£╨₧╤ù╨₧┬¡╨₧╤ÿ╨₧╨å╨ƒ╨â╨₧Γäû╨₧╤ù╨ƒΓÇÜ_╨₧ΓÇ¥╨₧┬╡╨₧╤ö╨₧┬¡╨₧╤ÿ╨₧╨å╨ƒ╨â╨₧Γäû╨₧╤ù╨ƒΓÇÜ'.split('_'),
        monthsGenitiveEl : '╨₧Γäó╨₧┬▒╨₧╨à╨₧╤ù╨ƒΓÇª╨₧┬▒╨ƒ╨â╨₧╨ç╨₧╤ù╨ƒΓÇª_╨₧┬ª╨₧┬╡╨₧╨å╨ƒ╨â╨₧╤ù╨ƒΓÇª╨₧┬▒╨ƒ╨â╨₧╨ç╨₧╤ù╨ƒΓÇª_╨₧╤Ü╨₧┬▒╨ƒ╨â╨ƒΓÇ₧╨₧╨ç╨₧╤ù╨ƒΓÇª_╨₧ΓÇÿ╨ƒ╨é╨ƒ╨â╨₧Γäû╨₧┬╗╨₧╨ç╨₧╤ù╨ƒΓÇª_╨₧╤Ü╨₧┬▒╨₧╤Æ╨₧╤ù╨ƒΓÇª_╨₧Γäó╨₧╤ù╨ƒΓÇª╨₧╨à╨₧╨ç╨₧╤ù╨ƒΓÇª_╨₧Γäó╨₧╤ù╨ƒΓÇª╨₧┬╗╨₧╨ç╨₧╤ù╨ƒΓÇª_╨₧ΓÇÿ╨ƒΓÇª╨₧╤û╨₧╤ù╨ƒ╨î╨ƒ╤ô╨ƒΓÇ₧╨₧╤ù╨ƒΓÇª_╨₧╨ê╨₧┬╡╨ƒ╨é╨ƒΓÇ₧╨₧┬╡╨₧╤ÿ╨₧╨å╨ƒ╨â╨₧╨ç╨₧╤ù╨ƒΓÇª_╨₧╤ƒ╨₧╤ö╨ƒΓÇ₧╨ƒΓÇ░╨₧╨å╨ƒ╨â╨₧╨ç╨₧╤ù╨ƒΓÇª_╨₧╤£╨₧╤ù╨₧┬╡╨₧╤ÿ╨₧╨å╨ƒ╨â╨₧╨ç╨₧╤ù╨ƒΓÇª_╨₧ΓÇ¥╨₧┬╡╨₧╤ö╨₧┬╡╨₧╤ÿ╨₧╨å╨ƒ╨â╨₧╨ç╨₧╤ù╨ƒΓÇª'.split('_'),
        months : function (momentToFormat, format) {
            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
                return this._monthsGenitiveEl[momentToFormat.month()];
            } else {
                return this._monthsNominativeEl[momentToFormat.month()];
            }
        },
        monthsShort : '╨₧Γäó╨₧┬▒╨₧╨à_╨₧┬ª╨₧┬╡╨₧╨å_╨₧╤Ü╨₧┬▒╨ƒ╨â_╨₧ΓÇÿ╨ƒ╨é╨ƒ╨â_╨₧╤Ü╨₧┬▒╨ƒ╨ë_╨₧Γäó╨₧╤ù╨ƒΓÇª╨₧╨à_╨₧Γäó╨₧╤ù╨ƒΓÇª╨₧┬╗_╨₧ΓÇÿ╨ƒΓÇª╨₧╤û_╨₧╨ê╨₧┬╡╨ƒ╨é_╨₧╤ƒ╨₧╤ö╨ƒΓÇ₧_╨₧╤£╨₧╤ù╨₧┬╡_╨₧ΓÇ¥╨₧┬╡╨₧╤ö'.split('_'),
        weekdays : '╨₧╤Ö╨ƒΓÇª╨ƒ╨â╨₧Γäû╨₧┬▒╨₧╤ö╨₧┬«_╨₧ΓÇ¥╨₧┬╡╨ƒΓÇª╨ƒΓÇ₧╨₧┬¡╨ƒ╨â╨₧┬▒_╨₧┬ñ╨ƒ╨â╨₧╨ç╨ƒΓÇ₧╨₧┬╖_╨₧┬ñ╨₧┬╡╨ƒΓÇ₧╨₧┬¼╨ƒ╨â╨ƒΓÇ₧╨₧┬╖_╨₧ ╨₧┬¡╨₧╤ÿ╨ƒ╨é╨ƒΓÇ₧╨₧┬╖_╨₧ ╨₧┬▒╨ƒ╨â╨₧┬▒╨ƒ╤ô╨₧╤ö╨₧┬╡╨ƒΓÇª╨₧┬«_╨₧╨ê╨₧┬¼╨₧╨å╨₧╨å╨₧┬▒╨ƒΓÇ₧╨₧╤ù'.split('_'),
        weekdaysShort : '╨₧╤Ö╨ƒΓÇª╨ƒ╨â_╨₧ΓÇ¥╨₧┬╡╨ƒΓÇª_╨₧┬ñ╨ƒ╨â╨₧Γäû_╨₧┬ñ╨₧┬╡╨ƒΓÇ₧_╨₧ ╨₧┬╡╨₧╤ÿ_╨₧ ╨₧┬▒╨ƒ╨â_╨₧╨ê╨₧┬▒╨₧╨å'.split('_'),
        weekdaysMin : '╨₧╤Ö╨ƒΓÇª_╨₧ΓÇ¥╨₧┬╡_╨₧┬ñ╨ƒ╨â_╨₧┬ñ╨₧┬╡_╨₧ ╨₧┬╡_╨₧ ╨₧┬▒_╨₧╨ê╨₧┬▒'.split('_'),
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? '╨₧╤ÿ╨₧╤ÿ' : '╨₧╤Ü╨₧╤Ü';
            } else {
                return isLower ? '╨ƒ╨é╨₧╤ÿ' : '╨₧ ╨₧╤Ü';
            }
        },
        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === '╨₧╤ÿ');
        },
        meridiemParse : /[╨₧ ╨₧╤Ü]\.?╨₧╤Ü?\.?/i,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendarEl : {
            sameDay : '[╨₧╨ê╨₧┬«╨₧╤ÿ╨₧┬╡╨ƒ╨â╨₧┬▒ {}] LT',
            nextDay : '[╨₧ΓÇÿ╨ƒ╨î╨ƒ╨â╨₧Γäû╨₧╤ù {}] LT',
            nextWeek : 'dddd [{}] LT',
            lastDay : '[╨₧┬º╨₧╤æ╨₧┬╡╨ƒΓÇÜ {}] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 6:
                        return '[╨ƒΓÇ₧╨₧╤ù ╨ƒ╨é╨ƒ╨â╨₧╤ù╨₧┬╖╨₧╤û╨₧╤ù╨ƒ╨î╨₧╤ÿ╨₧┬╡╨₧╨à╨₧╤ù] dddd [{}] LT';
                    default:
                        return '[╨ƒΓÇ₧╨₧┬╖╨₧╨à ╨ƒ╨é╨ƒ╨â╨₧╤ù╨₧┬╖╨₧╤û╨₧╤ù╨ƒ╨î╨₧╤ÿ╨₧┬╡╨₧╨à╨₧┬╖] dddd [{}] LT';
                }
            },
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendarEl[key],
                hours = mom && mom.hours();

            if (typeof output === 'function') {
                output = output.apply(mom);
            }

            return output.replace('{}', (hours % 12 === 1 ? '╨ƒ╤ô╨ƒΓÇ₧╨₧┬╖' : '╨ƒ╤ô╨ƒΓÇ₧╨₧Γäû╨ƒΓÇÜ'));
        },
        relativeTime : {
            future : '╨ƒ╤ô╨₧┬╡ %s',
            past : '%s ╨ƒ╨é╨ƒ╨â╨₧Γäû╨₧╨à',
            s : '╨₧┬╗╨₧╨ç╨₧╤û╨₧┬▒ ╨₧╥æ╨₧┬╡╨ƒΓÇª╨ƒΓÇ₧╨₧┬╡╨ƒ╨â╨ƒ╨è╨₧┬╗╨₧┬╡╨ƒ╨é╨ƒΓÇ₧╨₧┬▒',
            m : '╨₧┬¡╨₧╨à╨₧┬▒ ╨₧┬╗╨₧┬╡╨ƒ╨é╨ƒΓÇ₧╨ƒ╨è',
            mm : '%d ╨₧┬╗╨₧┬╡╨ƒ╨é╨ƒΓÇ₧╨₧┬¼',
            h : '╨₧╤ÿ╨₧╨ç╨₧┬▒ ╨ƒ╨ï╨ƒ╨â╨₧┬▒',
            hh : '%d ╨ƒ╨ï╨ƒ╨â╨₧┬╡╨ƒΓÇÜ',
            d : '╨₧╤ÿ╨₧╨ç╨₧┬▒ ╨₧╤ÿ╨₧┬¡╨ƒ╨â╨₧┬▒',
            dd : '%d ╨₧╤ÿ╨₧┬¡╨ƒ╨â╨₧┬╡╨ƒΓÇÜ',
            M : '╨₧┬¡╨₧╨à╨₧┬▒╨ƒΓÇÜ ╨₧╤ÿ╨₧┬«╨₧╨à╨₧┬▒╨ƒΓÇÜ',
            MM : '%d ╨₧╤ÿ╨₧┬«╨₧╨à╨₧┬╡╨ƒΓÇÜ',
            y : '╨₧┬¡╨₧╨à╨₧┬▒╨ƒΓÇÜ ╨ƒΓÇí╨ƒ╨â╨ƒ╨è╨₧╨à╨₧╤ù╨ƒΓÇÜ',
            yy : '%d ╨ƒΓÇí╨ƒ╨â╨ƒ╨è╨₧╨à╨₧Γäû╨₧┬▒'
        },
        ordinalParse: /\d{1,2}╨₧┬╖/,
        ordinal: '%d╨₧┬╖',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : australian english (en-au)

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('en-au', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : canadian english (en-ca)
// author : Jonathan Abourbih : https://github.com/jonbca

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('en-ca', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM, YYYY',
            LLL : 'D MMMM, YYYY LT',
            LLLL : 'dddd, D MMMM, YYYY LT'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });
}));

// moment.js locale configuration
// locale : great britain english (en-gb)
// author : Chris Gedrim : https://github.com/chrisgedrim

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('en-gb', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : esperanto (eo)
// author : Colin Dean : https://github.com/colindean
// komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
//          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('eo', {
        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_a╨ò┬¡gusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_a╨ò┬¡g_sep_okt_nov_dec'.split('_'),
        weekdays : 'Diman╨öΓÇ░o_Lundo_Mardo_Merkredo_╨ö╥æa╨ò┬¡do_Vendredo_Sabato'.split('_'),
        weekdaysShort : 'Dim_Lun_Mard_Merk_╨ö╥æa╨ò┬¡_Ven_Sab'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_╨ö╥æa_Ve_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'YYYY-MM-DD',
            LL : 'D[-an de] MMMM, YYYY',
            LLL : 'D[-an de] MMMM, YYYY LT',
            LLLL : 'dddd, [la] D[-an de] MMMM, YYYY LT'
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (input) {
            return input.charAt(0).toLowerCase() === 'p';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'p.t.m.' : 'P.T.M.';
            } else {
                return isLower ? 'a.t.m.' : 'A.T.M.';
            }
        },
        calendar : {
            sameDay : '[Hodia╨ò┬¡ je] LT',
            nextDay : '[Morga╨ò┬¡ je] LT',
            nextWeek : 'dddd [je] LT',
            lastDay : '[Hiera╨ò┬¡ je] LT',
            lastWeek : '[pasinta] dddd [je] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'je %s',
            past : 'anta╨ò┬¡ %s',
            s : 'sekundoj',
            m : 'minuto',
            mm : '%d minutoj',
            h : 'horo',
            hh : '%d horoj',
            d : 'tago',//ne 'diurno', ╨öΓÇ░ar estas uzita por proksimumo
            dd : '%d tagoj',
            M : 'monato',
            MM : '%d monatoj',
            y : 'jaro',
            yy : '%d jaroj'
        },
        ordinalParse: /\d{1,2}a/,
        ordinal : '%da',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : spanish (es)
// author : Julio Napur╨ô┬¡ : https://github.com/julionc

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    return moment.defineLocale('es', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        weekdays : 'domingo_lunes_martes_mi╨ô┬⌐rcoles_jueves_viernes_s╨ô╨Äbado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mi╨ô┬⌐._jue._vie._s╨ô╨Äb.'.split('_'),
        weekdaysMin : 'Do_Lu_Ma_Mi_Ju_Vi_S╨ô╨Ä'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY LT',
            LLLL : 'dddd, D [de] MMMM [de] YYYY LT'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[ma╨ô┬▒ana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un d╨ô┬¡a',
            dd : '%d d╨ô┬¡as',
            M : 'un mes',
            MM : '%d meses',
            y : 'un a╨ô┬▒o',
            yy : '%d a╨ô┬▒os'
        },
        ordinalParse : /\d{1,2}╨Æ╤ö/,
        ordinal : '%d╨Æ╤ö',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : estonian (et)
// author : Henry Kehlmann : https://github.com/madhenry
// improvements : Illimar Tambek : https://github.com/ragulka

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's' : ['m╨ô┬╡ne sekundi', 'm╨ô┬╡ni sekund', 'paar sekundit'],
            'm' : ['╨ô╤ÿhe minuti', '╨ô╤ÿks minut'],
            'mm': [number + ' minuti', number + ' minutit'],
            'h' : ['╨ô╤ÿhe tunni', 'tund aega', '╨ô╤ÿks tund'],
            'hh': [number + ' tunni', number + ' tundi'],
            'd' : ['╨ô╤ÿhe p╨ô┬ñeva', '╨ô╤ÿks p╨ô┬ñev'],
            'M' : ['kuu aja', 'kuu aega', '╨ô╤ÿks kuu'],
            'MM': [number + ' kuu', number + ' kuud'],
            'y' : ['╨ô╤ÿhe aasta', 'aasta', '╨ô╤ÿks aasta'],
            'yy': [number + ' aasta', number + ' aastat']
        };
        if (withoutSuffix) {
            return format[key][2] ? format[key][2] : format[key][1];
        }
        return isFuture ? format[key][0] : format[key][1];
    }

    return moment.defineLocale('et', {
        months        : 'jaanuar_veebruar_m╨ô┬ñrts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort   : 'jaan_veebr_m╨ô┬ñrts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays      : 'p╨ô╤ÿhap╨ô┬ñev_esmasp╨ô┬ñev_teisip╨ô┬ñev_kolmap╨ô┬ñev_neljap╨ô┬ñev_reede_laup╨ô┬ñev'.split('_'),
        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat : {
            LT   : 'H:mm',
            LTS : 'LT:ss',
            L    : 'DD.MM.YYYY',
            LL   : 'D. MMMM YYYY',
            LLL  : 'D. MMMM YYYY LT',
            LLLL : 'dddd, D. MMMM YYYY LT'
        },
        calendar : {
            sameDay  : '[T╨ô┬ñna,] LT',
            nextDay  : '[Homme,] LT',
            nextWeek : '[J╨ô┬ñrgmine] dddd LT',
            lastDay  : '[Eile,] LT',
            lastWeek : '[Eelmine] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s p╨ô┬ñrast',
            past   : '%s tagasi',
            s      : processRelativeTime,
            m      : processRelativeTime,
            mm     : processRelativeTime,
            h      : processRelativeTime,
            hh     : processRelativeTime,
            d      : processRelativeTime,
            dd     : '%d p╨ô┬ñeva',
            M      : processRelativeTime,
            MM     : processRelativeTime,
            y      : processRelativeTime,
            yy     : processRelativeTime
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : euskara (eu)
// author : Eneko Illarramendi : https://github.com/eillarra

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('eu', {
        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY[ko] MMMM[ren] D[a]',
            LLL : 'YYYY[ko] MMMM[ren] D[a] LT',
            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] LT',
            l : 'YYYY-M-D',
            ll : 'YYYY[ko] MMM D[a]',
            lll : 'YYYY[ko] MMM D[a] LT',
            llll : 'ddd, YYYY[ko] MMM D[a] LT'
        },
        calendar : {
            sameDay : '[gaur] LT[etan]',
            nextDay : '[bihar] LT[etan]',
            nextWeek : 'dddd LT[etan]',
            lastDay : '[atzo] LT[etan]',
            lastWeek : '[aurreko] dddd LT[etan]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s barru',
            past : 'duela %s',
            s : 'segundo batzuk',
            m : 'minutu bat',
            mm : '%d minutu',
            h : 'ordu bat',
            hh : '%d ordu',
            d : 'egun bat',
            dd : '%d egun',
            M : 'hilabete bat',
            MM : '%d hilabete',
            y : 'urte bat',
            yy : '%d urte'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Persian (fa)
// author : Ebrahim Byagowi : https://github.com/ebraminio

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var symbolMap = {
        '1': '╨½┬▒',
        '2': '╨½╨å',
        '3': '╨½╤û',
        '4': '╨½╥æ',
        '5': '╨½┬╡',
        '6': '╨½┬╢',
        '7': '╨½┬╖',
        '8': '╨½╤æ',
        '9': '╨½Γäû',
        '0': '╨½┬░'
    }, numberMap = {
        '╨½┬▒': '1',
        '╨½╨å': '2',
        '╨½╤û': '3',
        '╨½╥æ': '4',
        '╨½┬╡': '5',
        '╨½┬╢': '6',
        '╨½┬╖': '7',
        '╨½╤æ': '8',
        '╨½Γäû': '9',
        '╨½┬░': '0'
    };

    return moment.defineLocale('fa', {
        months : '╨¬┬ÿ╨¿┬º╨⌐ΓÇá╨⌐Γé¼╨½╨è╨⌐ΓÇí_╨⌐╨â╨⌐Γé¼╨¿┬▒╨½╨è╨⌐ΓÇí_╨⌐ΓÇª╨¿┬º╨¿┬▒╨¿╤û_╨¿╤₧╨⌐Γé¼╨¿┬▒╨½╨è╨⌐ΓÇ₧_╨⌐ΓÇª╨⌐ΓÇí_╨¬┬ÿ╨⌐Γé¼╨¿┬ª╨⌐ΓÇá_╨¬┬ÿ╨⌐Γé¼╨¿┬ª╨½╨è╨⌐ΓÇí_╨¿┬º╨⌐Γé¼╨¿╨ä_╨¿╤û╨⌐╤ò╨¿╨ä╨¿┬º╨⌐ΓÇª╨¿╨ü╨¿┬▒_╨¿┬º╨¬┬⌐╨¿╨ä╨¿╨ü╨¿┬▒_╨⌐ΓÇá╨⌐Γé¼╨¿┬º╨⌐ΓÇª╨¿╨ü╨¿┬▒_╨¿╨ç╨¿╤û╨¿┬º╨⌐ΓÇª╨¿╨ü╨¿┬▒'.split('_'),
        monthsShort : '╨¬┬ÿ╨¿┬º╨⌐ΓÇá╨⌐Γé¼╨½╨è╨⌐ΓÇí_╨⌐╨â╨⌐Γé¼╨¿┬▒╨½╨è╨⌐ΓÇí_╨⌐ΓÇª╨¿┬º╨¿┬▒╨¿╤û_╨¿╤₧╨⌐Γé¼╨¿┬▒╨½╨è╨⌐ΓÇ₧_╨⌐ΓÇª╨⌐ΓÇí_╨¬┬ÿ╨⌐Γé¼╨¿┬ª╨⌐ΓÇá_╨¬┬ÿ╨⌐Γé¼╨¿┬ª╨½╨è╨⌐ΓÇí_╨¿┬º╨⌐Γé¼╨¿╨ä_╨¿╤û╨⌐╤ò╨¿╨ä╨¿┬º╨⌐ΓÇª╨¿╨ü╨¿┬▒_╨¿┬º╨¬┬⌐╨¿╨ä╨¿╨ü╨¿┬▒_╨⌐ΓÇá╨⌐Γé¼╨¿┬º╨⌐ΓÇª╨¿╨ü╨¿┬▒_╨¿╨ç╨¿╤û╨¿┬º╨⌐ΓÇª╨¿╨ü╨¿┬▒'.split('_'),
        weekdays : '╨½╨è╨¬┬⌐\u200c╨¿╥æ╨⌐ΓÇá╨¿╨ü╨⌐ΓÇí_╨¿╨ç╨⌐Γé¼╨¿╥æ╨⌐ΓÇá╨¿╨ü╨⌐ΓÇí_╨¿╤û╨⌐ΓÇí\u200c╨¿╥æ╨⌐ΓÇá╨¿╨ü╨⌐ΓÇí_╨¬ΓÇá╨⌐ΓÇí╨¿┬º╨¿┬▒╨¿╥æ╨⌐ΓÇá╨¿╨ü╨⌐ΓÇí_╨⌐╤ò╨⌐ΓÇá╨¿┬¼\u200c╨¿╥æ╨⌐ΓÇá╨¿╨ü╨⌐ΓÇí_╨¿┬¼╨⌐ΓÇª╨¿Γäû╨⌐ΓÇí_╨¿╥æ╨⌐ΓÇá╨¿╨ü╨⌐ΓÇí'.split('_'),
        weekdaysShort : '╨½╨è╨¬┬⌐\u200c╨¿╥æ╨⌐ΓÇá╨¿╨ü╨⌐ΓÇí_╨¿╨ç╨⌐Γé¼╨¿╥æ╨⌐ΓÇá╨¿╨ü╨⌐ΓÇí_╨¿╤û╨⌐ΓÇí\u200c╨¿╥æ╨⌐ΓÇá╨¿╨ü╨⌐ΓÇí_╨¬ΓÇá╨⌐ΓÇí╨¿┬º╨¿┬▒╨¿╥æ╨⌐ΓÇá╨¿╨ü╨⌐ΓÇí_╨⌐╤ò╨⌐ΓÇá╨¿┬¼\u200c╨¿╥æ╨⌐ΓÇá╨¿╨ü╨⌐ΓÇí_╨¿┬¼╨⌐ΓÇª╨¿Γäû╨⌐ΓÇí_╨¿╥æ╨⌐ΓÇá╨¿╨ü╨⌐ΓÇí'.split('_'),
        weekdaysMin : '╨½╨è_╨¿╨ç_╨¿╤û_╨¬ΓÇá_╨⌐╤ò_╨¿┬¼_╨¿╥æ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        meridiemParse: /╨⌐ΓÇÜ╨¿╨ü╨⌐ΓÇ₧ ╨¿┬º╨¿╨å ╨¿╤æ╨⌐ΓÇí╨¿┬▒|╨¿╨ü╨¿Γäû╨¿╨ç ╨¿┬º╨¿╨å ╨¿╤æ╨⌐ΓÇí╨¿┬▒/,
        isPM: function (input) {
            return /╨¿╨ü╨¿Γäû╨¿╨ç ╨¿┬º╨¿╨å ╨¿╤æ╨⌐ΓÇí╨¿┬▒/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return '╨⌐ΓÇÜ╨¿╨ü╨⌐ΓÇ₧ ╨¿┬º╨¿╨å ╨¿╤æ╨⌐ΓÇí╨¿┬▒';
            } else {
                return '╨¿╨ü╨¿Γäû╨¿╨ç ╨¿┬º╨¿╨å ╨¿╤æ╨⌐ΓÇí╨¿┬▒';
            }
        },
        calendar : {
            sameDay : '[╨¿┬º╨⌐ΓÇª╨¿┬▒╨⌐Γé¼╨¿╨å ╨¿╤û╨¿┬º╨¿Γäû╨¿╨ä] LT',
            nextDay : '[╨⌐╨â╨¿┬▒╨¿╨ç╨¿┬º ╨¿╤û╨¿┬º╨¿Γäû╨¿╨ä] LT',
            nextWeek : 'dddd [╨¿╤û╨¿┬º╨¿Γäû╨¿╨ä] LT',
            lastDay : '[╨¿╨ç╨½╨è╨¿┬▒╨⌐Γé¼╨¿╨å ╨¿╤û╨¿┬º╨¿Γäû╨¿╨ä] LT',
            lastWeek : 'dddd [╨⌐╤ò╨½╨è╨¿╥æ] [╨¿╤û╨¿┬º╨¿Γäû╨¿╨ä] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '╨¿╨ç╨¿┬▒ %s',
            past : '%s ╨⌐╤ò╨½╨è╨¿╥æ',
            s : '╨¬ΓÇá╨⌐ΓÇá╨¿╨ç╨½╨è╨⌐ΓÇá ╨¿┬½╨¿┬º╨⌐ΓÇá╨½╨è╨⌐ΓÇí',
            m : '╨½╨è╨¬┬⌐ ╨¿╨ç╨⌐ΓÇÜ╨½╨è╨⌐ΓÇÜ╨⌐ΓÇí',
            mm : '%d ╨¿╨ç╨⌐ΓÇÜ╨½╨è╨⌐ΓÇÜ╨⌐ΓÇí',
            h : '╨½╨è╨¬┬⌐ ╨¿╤û╨¿┬º╨¿Γäû╨¿╨ä',
            hh : '%d ╨¿╤û╨¿┬º╨¿Γäû╨¿╨ä',
            d : '╨½╨è╨¬┬⌐ ╨¿┬▒╨⌐Γé¼╨¿╨å',
            dd : '%d ╨¿┬▒╨⌐Γé¼╨¿╨å',
            M : '╨½╨è╨¬┬⌐ ╨⌐ΓÇª╨¿┬º╨⌐ΓÇí',
            MM : '%d ╨⌐ΓÇª╨¿┬º╨⌐ΓÇí',
            y : '╨½╨è╨¬┬⌐ ╨¿╤û╨¿┬º╨⌐ΓÇ₧',
            yy : '%d ╨¿╤û╨¿┬º╨⌐ΓÇ₧'
        },
        preparse: function (string) {
            return string.replace(/[╨½┬░-╨½Γäû]/g, function (match) {
                return numberMap[match];
            }).replace(/╨¿╨è/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '╨¿╨è');
        },
        ordinalParse: /\d{1,2}╨⌐ΓÇª/,
        ordinal : '%d╨⌐ΓÇª',
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : finnish (fi)
// author : Tarmo Aidantausta : https://github.com/bleadof

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var numbersPast = 'nolla yksi kaksi kolme nelj╨ô┬ñ viisi kuusi seitsem╨ô┬ñn kahdeksan yhdeks╨ô┬ñn'.split(' '),
        numbersFuture = [
            'nolla', 'yhden', 'kahden', 'kolmen', 'nelj╨ô┬ñn', 'viiden', 'kuuden',
            numbersPast[7], numbersPast[8], numbersPast[9]
        ];

    function translate(number, withoutSuffix, key, isFuture) {
        var result = '';
        switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'p╨ô┬ñiv╨ô┬ñn' : 'p╨ô┬ñiv╨ô┬ñ';
        case 'dd':
            result = isFuture ? 'p╨ô┬ñiv╨ô┬ñn' : 'p╨ô┬ñiv╨ô┬ñ╨ô┬ñ';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
        }
        result = verbalNumber(number, isFuture) + ' ' + result;
        return result;
    }

    function verbalNumber(number, isFuture) {
        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
    }

    return moment.defineLocale('fi', {
        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes╨ô┬ñkuu_hein╨ô┬ñkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort : 'tammi_helmi_maalis_huhti_touko_kes╨ô┬ñ_hein╨ô┬ñ_elo_syys_loka_marras_joulu'.split('_'),
        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD.MM.YYYY',
            LL : 'Do MMMM[ta] YYYY',
            LLL : 'Do MMMM[ta] YYYY, [klo] LT',
            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] LT',
            l : 'D.M.YYYY',
            ll : 'Do MMM YYYY',
            lll : 'Do MMM YYYY, [klo] LT',
            llll : 'ddd, Do MMM YYYY, [klo] LT'
        },
        calendar : {
            sameDay : '[t╨ô┬ñn╨ô┬ñ╨ô┬ñn] [klo] LT',
            nextDay : '[huomenna] [klo] LT',
            nextWeek : 'dddd [klo] LT',
            lastDay : '[eilen] [klo] LT',
            lastWeek : '[viime] dddd[na] [klo] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s p╨ô┬ñ╨ô┬ñst╨ô┬ñ',
            past : '%s sitten',
            s : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : faroese (fo)
// author : Ragnar Johannesen : https://github.com/ragnar123

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('fo', {
        months : 'januar_februar_mars_apr╨ô┬¡l_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sunnudagur_m╨ô╨Änadagur_t╨ô╨àsdagur_mikudagur_h╨ô╤ûsdagur_fr╨ô┬¡ggjadagur_leygardagur'.split('_'),
        weekdaysShort : 'sun_m╨ô╨Än_t╨ô╨às_mik_h╨ô╤ûs_fr╨ô┬¡_ley'.split('_'),
        weekdaysMin : 'su_m╨ô╨Ä_t╨ô╨à_mi_h╨ô╤û_fr_le'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D. MMMM, YYYY LT'
        },
        calendar : {
            sameDay : '[╨ô╨î dag kl.] LT',
            nextDay : '[╨ô╨î morgin kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[╨ô╨î gj╨ô╨Är kl.] LT',
            lastWeek : '[s╨ô┬¡╨ô┬░stu] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'um %s',
            past : '%s s╨ô┬¡╨ô┬░ani',
            s : 'f╨ô╨Ä sekund',
            m : 'ein minutt',
            mm : '%d minuttir',
            h : 'ein t╨ô┬¡mi',
            hh : '%d t╨ô┬¡mar',
            d : 'ein dagur',
            dd : '%d dagar',
            M : 'ein m╨ô╨Äna╨ô┬░i',
            MM : '%d m╨ô╨Äna╨ô┬░ir',
            y : 'eitt ╨ô╨Är',
            yy : '%d ╨ô╨Är'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : canadian french (fr-ca)
// author : Jonathan Abourbih : https://github.com/jonbca

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('fr-ca', {
        months : 'janvier_f╨ô┬⌐vrier_mars_avril_mai_juin_juillet_ao╨ô┬╗t_septembre_octobre_novembre_d╨ô┬⌐cembre'.split('_'),
        monthsShort : 'janv._f╨ô┬⌐vr._mars_avr._mai_juin_juil._ao╨ô┬╗t_sept._oct._nov._d╨ô┬⌐c.'.split('_'),
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[Aujourd\'hui ╨ô ] LT',
            nextDay: '[Demain ╨ô ] LT',
            nextWeek: 'dddd [╨ô ] LT',
            lastDay: '[Hier ╨ô ] LT',
            lastWeek: 'dddd [dernier ╨ô ] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        ordinalParse: /\d{1,2}(er|)/,
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : '');
        }
    });
}));

// moment.js locale configuration
// locale : french (fr)
// author : John Fischer : https://github.com/jfroffice

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('fr', {
        months : 'janvier_f╨ô┬⌐vrier_mars_avril_mai_juin_juillet_ao╨ô┬╗t_septembre_octobre_novembre_d╨ô┬⌐cembre'.split('_'),
        monthsShort : 'janv._f╨ô┬⌐vr._mars_avr._mai_juin_juil._ao╨ô┬╗t_sept._oct._nov._d╨ô┬⌐c.'.split('_'),
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[Aujourd\'hui ╨ô ] LT',
            nextDay: '[Demain ╨ô ] LT',
            nextWeek: 'dddd [╨ô ] LT',
            lastDay: '[Hier ╨ô ] LT',
            lastWeek: 'dddd [dernier ╨ô ] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        ordinalParse: /\d{1,2}(er|)/,
        ordinal : function (number) {
            return number + (number === 1 ? 'er' : '');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : frisian (fy)
// author : Robin van der Vliet : https://github.com/robin0van0der0v

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

    return moment.defineLocale('fy', {
        months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },
        weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[hjoed om] LT',
            nextDay: '[moarn om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[juster om] LT',
            lastWeek: '[╨ô╥æfr╨ô┬╗ne] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'oer %s',
            past : '%s lyn',
            s : 'in pear sekonden',
            m : 'ien min╨ô╤öt',
            mm : '%d minuten',
            h : 'ien oere',
            hh : '%d oeren',
            d : 'ien dei',
            dd : '%d dagen',
            M : 'ien moanne',
            MM : '%d moannen',
            y : 'ien jier',
            yy : '%d jierren'
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : galician (gl)
// author : Juan G. Hurtado : https://github.com/juanghurtado

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('gl', {
        months : 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xu╨ô┬▒o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
        monthsShort : 'Xan._Feb._Mar._Abr._Mai._Xu╨ô┬▒._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
        weekdays : 'Domingo_Luns_Martes_M╨ô┬⌐rcores_Xoves_Venres_S╨ô╨Äbado'.split('_'),
        weekdaysShort : 'Dom._Lun._Mar._M╨ô┬⌐r._Xov._Ven._S╨ô╨Äb.'.split('_'),
        weekdaysMin : 'Do_Lu_Ma_M╨ô┬⌐_Xo_Ve_S╨ô╨Ä'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        calendar : {
            sameDay : function () {
                return '[hoxe ' + ((this.hours() !== 1) ? '╨ô╨Äs' : '╨ô╨Ä') + '] LT';
            },
            nextDay : function () {
                return '[ma╨ô┬▒╨ô╨Ä ' + ((this.hours() !== 1) ? '╨ô╨Äs' : '╨ô╨Ä') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [' + ((this.hours() !== 1) ? '╨ô╨Äs' : 'a') + '] LT';
            },
            lastDay : function () {
                return '[onte ' + ((this.hours() !== 1) ? '╨ô╨Ä' : 'a') + '] LT';
            },
            lastWeek : function () {
                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? '╨ô╨Äs' : 'a') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : function (str) {
                if (str === 'uns segundos') {
                    return 'nuns segundos';
                }
                return 'en ' + str;
            },
            past : 'hai %s',
            s : 'uns segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'unha hora',
            hh : '%d horas',
            d : 'un d╨ô┬¡a',
            dd : '%d d╨ô┬¡as',
            M : 'un mes',
            MM : '%d meses',
            y : 'un ano',
            yy : '%d anos'
        },
        ordinalParse : /\d{1,2}╨Æ╤ö/,
        ordinal : '%d╨Æ╤ö',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Hebrew (he)
// author : Tomer Cohen : https://github.com/tomer
// author : Moshe Simantov : https://github.com/DevelopmentIL
// author : Tal Ater : https://github.com/TalAter

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('he', {
        months : '╨ºΓäó╨º ╨ºΓÇó╨º╤Æ╨º╨ü_╨º┬ñ╨ºΓÇÿ╨º╨ü╨ºΓÇó╨º╤Æ╨º╨ü_╨º╤¢╨º╨ü╨º╥É_╨º╤Æ╨º┬ñ╨º╨ü╨ºΓäó╨º╤Ü_╨º╤¢╨º╤Æ╨ºΓäó_╨ºΓäó╨ºΓÇó╨º ╨ºΓäó_╨ºΓäó╨ºΓÇó╨º╤Ü╨ºΓäó_╨º╤Æ╨ºΓÇó╨ºΓÇÖ╨ºΓÇó╨º╨Ä╨º┬ÿ_╨º╨Ä╨º┬ñ╨º┬ÿ╨º╤¢╨ºΓÇÿ╨º╨ü_╨º╤Æ╨ºΓÇó╨º┬º╨º┬ÿ╨ºΓÇó╨ºΓÇÿ╨º╨ü_╨º ╨ºΓÇó╨ºΓÇÿ╨º╤¢╨ºΓÇÿ╨º╨ü_╨ºΓÇ£╨º┬ª╨º╤¢╨ºΓÇÿ╨º╨ü'.split('_'),
        monthsShort : '╨ºΓäó╨º ╨ºΓÇó╨º╤û_╨º┬ñ╨ºΓÇÿ╨º╨ü╨º╤û_╨º╤¢╨º╨ü╨º╥É_╨º╤Æ╨º┬ñ╨º╨ü╨º╤û_╨º╤¢╨º╤Æ╨ºΓäó_╨ºΓäó╨ºΓÇó╨º ╨ºΓäó_╨ºΓäó╨ºΓÇó╨º╤Ü╨ºΓäó_╨º╤Æ╨ºΓÇó╨ºΓÇÖ╨º╤û_╨º╨Ä╨º┬ñ╨º┬ÿ╨º╤û_╨º╤Æ╨ºΓÇó╨º┬º╨º╤û_╨º ╨ºΓÇó╨ºΓÇÿ╨º╤û_╨ºΓÇ£╨º┬ª╨º╤¢╨º╤û'.split('_'),
        weekdays : '╨º╨ü╨º╤Æ╨º┬⌐╨ºΓÇó╨º╤ƒ_╨º┬⌐╨º ╨ºΓäó_╨º┬⌐╨º╤Ü╨ºΓäó╨º┬⌐╨ºΓäó_╨º╨ü╨ºΓÇÿ╨ºΓäó╨º╤₧╨ºΓäó_╨ºΓÇö╨º╤¢╨ºΓäó╨º┬⌐╨ºΓäó_╨º┬⌐╨ºΓäó╨º┬⌐╨ºΓäó_╨º┬⌐╨ºΓÇÿ╨º╨ä'.split('_'),
        weekdaysShort : '╨º╤Æ╨º╤û_╨ºΓÇÿ╨º╤û_╨ºΓÇÖ╨º╤û_╨ºΓÇ£╨º╤û_╨ºΓÇ¥╨º╤û_╨ºΓÇó╨º╤û_╨º┬⌐╨º╤û'.split('_'),
        weekdaysMin : '╨º╤Æ_╨ºΓÇÿ_╨ºΓÇÖ_╨ºΓÇ£_╨ºΓÇ¥_╨ºΓÇó_╨º┬⌐'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [╨ºΓÇÿ]MMMM YYYY',
            LLL : 'D [╨ºΓÇÿ]MMMM YYYY LT',
            LLLL : 'dddd, D [╨ºΓÇÿ]MMMM YYYY LT',
            l : 'D/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY LT',
            llll : 'ddd, D MMM YYYY LT'
        },
        calendar : {
            sameDay : '[╨ºΓÇ¥╨ºΓäó╨ºΓÇó╨º╤£ ╨ºΓÇÿ╨ª╤ò]LT',
            nextDay : '[╨º╤¢╨ºΓÇö╨º╨ü ╨ºΓÇÿ╨ª╤ò]LT',
            nextWeek : 'dddd [╨ºΓÇÿ╨º┬⌐╨º╤₧╨ºΓÇ¥] LT',
            lastDay : '[╨º╤Æ╨º╨ä╨º╤¢╨ºΓÇó╨º╤Ü ╨ºΓÇÿ╨ª╤ò]LT',
            lastWeek : '[╨ºΓÇÿ╨ºΓäó╨ºΓÇó╨º╤£] dddd [╨ºΓÇ¥╨º╤Æ╨ºΓÇö╨º╨ü╨ºΓÇó╨º╤ƒ ╨ºΓÇÿ╨º┬⌐╨º╤₧╨ºΓÇ¥] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '╨ºΓÇÿ╨º╤₧╨ºΓÇó╨ºΓÇ£ %s',
            past : '╨º╤Ü╨º┬ñ╨º ╨ºΓäó %s',
            s : '╨º╤¢╨º╨Ä╨º┬ñ╨º╨ü ╨º┬⌐╨º ╨ºΓäó╨ºΓÇó╨º╨ä',
            m : '╨ºΓÇ£╨º┬º╨ºΓÇ¥',
            mm : '%d ╨ºΓÇ£╨º┬º╨ºΓÇó╨º╨ä',
            h : '╨º┬⌐╨º╤₧╨ºΓÇ¥',
            hh : function (number) {
                if (number === 2) {
                    return '╨º┬⌐╨º╤₧╨º╨ä╨ºΓäó╨ºΓäó╨º╤£';
                }
                return number + ' ╨º┬⌐╨º╤₧╨ºΓÇó╨º╨ä';
            },
            d : '╨ºΓäó╨ºΓÇó╨º╤£',
            dd : function (number) {
                if (number === 2) {
                    return '╨ºΓäó╨ºΓÇó╨º╤¢╨ºΓäó╨ºΓäó╨º╤£';
                }
                return number + ' ╨ºΓäó╨º╤¢╨ºΓäó╨º╤£';
            },
            M : '╨ºΓÇö╨ºΓÇó╨ºΓÇ£╨º┬⌐',
            MM : function (number) {
                if (number === 2) {
                    return '╨ºΓÇö╨ºΓÇó╨ºΓÇ£╨º┬⌐╨ºΓäó╨ºΓäó╨º╤£';
                }
                return number + ' ╨ºΓÇö╨ºΓÇó╨ºΓÇ£╨º┬⌐╨ºΓäó╨º╤£';
            },
            y : '╨º┬⌐╨º ╨ºΓÇ¥',
            yy : function (number) {
                if (number === 2) {
                    return '╨º┬⌐╨º ╨º╨ä╨ºΓäó╨ºΓäó╨º╤£';
                } else if (number % 10 === 0 && number !== 10) {
                    return number + ' ╨º┬⌐╨º ╨ºΓÇ¥';
                }
                return number + ' ╨º┬⌐╨º ╨ºΓäó╨º╤£';
            }
        }
    });
}));

// moment.js locale configuration
// locale : hindi (hi)
// author : Mayank Singhal : https://github.com/mayanksinghal

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var symbolMap = {
        '1': '╨░╥É┬º',
        '2': '╨░╥É╨ü',
        '3': '╨░╥É┬⌐',
        '4': '╨░╥É╨ä',
        '5': '╨░╥É┬½',
        '6': '╨░╥É┬¼',
        '7': '╨░╥É┬¡',
        '8': '╨░╥É┬«',
        '9': '╨░╥É╨ç',
        '0': '╨░╥É┬ª'
    },
    numberMap = {
        '╨░╥É┬º': '1',
        '╨░╥É╨ü': '2',
        '╨░╥É┬⌐': '3',
        '╨░╥É╨ä': '4',
        '╨░╥É┬½': '5',
        '╨░╥É┬¼': '6',
        '╨░╥É┬¡': '7',
        '╨░╥É┬«': '8',
        '╨░╥É╨ç': '9',
        '╨░╥É┬ª': '0'
    };

    return moment.defineLocale('hi', {
        months : '╨░┬ñ╤Ü╨░┬ñ╨ü╨░┬ñ┬╡╨░┬ñ┬░╨░╥É╨é_╨░┬ñ┬½╨░┬ñ╤ÿ╨░┬ñ┬░╨░┬ñ┬╡╨░┬ñ┬░╨░╥É╨é_╨░┬ñ┬«╨░┬ñ╤ò╨░┬ñ┬░╨░╥É╨î╨░┬ñ╤Ö_╨░┬ñΓÇª╨░┬ñ╨ä╨░╥É╨î╨░┬ñ┬░╨░╥ÉΓé¼╨░┬ñ╨å_╨░┬ñ┬«╨░┬ñΓé¼_╨░┬ñ╤Ü╨░╥ÉΓÇÜ╨░┬ñ╨ü_╨░┬ñ╤Ü╨░╥É╨â╨░┬ñ╨å╨░┬ñ╤ò╨░┬ñΓé¼_╨░┬ñΓÇª╨░┬ñΓÇö╨░┬ñ╤æ╨░╥É╨î╨░┬ñ┬ñ_╨░┬ñ╤æ╨░┬ñ╤ù╨░┬ñ┬ñ╨░┬ñ┬«╨░╥É╨î╨░┬ñ┬¼╨░┬ñ┬░_╨░┬ñΓÇª╨░┬ñΓÇó╨░╥É╨î╨░┬ñ╤ƒ╨░╥ÉΓÇÜ╨░┬ñ┬¼╨░┬ñ┬░_╨░┬ñ╨ü╨░┬ñ┬╡╨░┬ñ┬«╨░╥É╨î╨░┬ñ┬¼╨░┬ñ┬░_╨░┬ñ┬ª╨░┬ñ╤ù╨░┬ñ╤æ╨░┬ñ┬«╨░╥É╨î╨░┬ñ┬¼╨░┬ñ┬░'.split('_'),
        monthsShort : '╨░┬ñ╤Ü╨░┬ñ╨ü._╨░┬ñ┬½╨░┬ñ╤ÿ╨░┬ñ┬░._╨░┬ñ┬«╨░┬ñ╤ò╨░┬ñ┬░╨░╥É╨î╨░┬ñ╤Ö_╨░┬ñΓÇª╨░┬ñ╨ä╨░╥É╨î╨░┬ñ┬░╨░╥ÉΓé¼._╨░┬ñ┬«╨░┬ñΓé¼_╨░┬ñ╤Ü╨░╥ÉΓÇÜ╨░┬ñ╨ü_╨░┬ñ╤Ü╨░╥É╨â╨░┬ñ╨å._╨░┬ñΓÇª╨░┬ñΓÇö._╨░┬ñ╤æ╨░┬ñ╤ù╨░┬ñ┬ñ._╨░┬ñΓÇª╨░┬ñΓÇó╨░╥É╨î╨░┬ñ╤ƒ╨░╥ÉΓÇÜ._╨░┬ñ╨ü╨░┬ñ┬╡._╨░┬ñ┬ª╨░┬ñ╤ù╨░┬ñ╤æ.'.split('_'),
        weekdays : '╨░┬ñ┬░╨░┬ñ┬╡╨░┬ñ╤ù╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ╤æ╨░╥ÉΓÇ╣╨░┬ñ┬«╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬«╨░┬ñΓÇÜ╨░┬ñΓÇö╨░┬ñ╨å╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬¼╨░╥É╨â╨░┬ñ┬º╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñΓÇö╨░╥É╨â╨░┬ñ┬░╨░╥ÉΓÇÜ╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬╢╨░╥É╨â╨░┬ñΓÇó╨░╥É╨î╨░┬ñ┬░╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬╢╨░┬ñ╨ü╨░┬ñ╤ù╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░'.split('_'),
        weekdaysShort : '╨░┬ñ┬░╨░┬ñ┬╡╨░┬ñ╤ù_╨░┬ñ╤æ╨░╥ÉΓÇ╣╨░┬ñ┬«_╨░┬ñ┬«╨░┬ñΓÇÜ╨░┬ñΓÇö╨░┬ñ╨å_╨░┬ñ┬¼╨░╥É╨â╨░┬ñ┬º_╨░┬ñΓÇö╨░╥É╨â╨░┬ñ┬░╨░╥ÉΓÇÜ_╨░┬ñ┬╢╨░╥É╨â╨░┬ñΓÇó╨░╥É╨î╨░┬ñ┬░_╨░┬ñ┬╢╨░┬ñ╨ü╨░┬ñ╤ù'.split('_'),
        weekdaysMin : '╨░┬ñ┬░_╨░┬ñ╤æ╨░╥ÉΓÇ╣_╨░┬ñ┬«╨░┬ñΓÇÜ_╨░┬ñ┬¼╨░╥É╨â_╨░┬ñΓÇö╨░╥É╨â_╨░┬ñ┬╢╨░╥É╨â_╨░┬ñ┬╢'.split('_'),
        longDateFormat : {
            LT : 'A h:mm ╨░┬ñ┬¼╨░┬ñ╤Ü╨░╥ÉΓÇí',
            LTS : 'A h:mm:ss ╨░┬ñ┬¼╨░┬ñ╤Ü╨░╥ÉΓÇí',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, LT',
            LLLL : 'dddd, D MMMM YYYY, LT'
        },
        calendar : {
            sameDay : '[╨░┬ñΓÇá╨░┬ñ╤Ü] LT',
            nextDay : '[╨░┬ñΓÇó╨░┬ñ╨å] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[╨░┬ñΓÇó╨░┬ñ╨å] LT',
            lastWeek : '[╨░┬ñ╨ä╨░┬ñ╤ù╨░┬ñΓÇ║╨░┬ñ╨å╨░╥ÉΓÇí] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ╨░┬ñ┬«╨░╥ÉΓÇí╨░┬ñΓÇÜ',
            past : '%s ╨░┬ñ╨ä╨░┬ñΓäû╨░┬ñ╨å╨░╥ÉΓÇí',
            s : '╨░┬ñΓÇó╨░╥É╨â╨░┬ñΓÇ║ ╨░┬ñΓäû╨░╥É╨é ╨░┬ñΓÇó╨░╥É╨î╨░┬ñ┬╖╨░┬ñ╨ê',
            m : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬«╨░┬ñ╤ù╨░┬ñ╨ü╨░┬ñ╤ƒ',
            mm : '%d ╨░┬ñ┬«╨░┬ñ╤ù╨░┬ñ╨ü╨░┬ñ╤ƒ',
            h : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬ÿ╨░┬ñΓÇÜ╨░┬ñ╤ƒ╨░┬ñ╤ò',
            hh : '%d ╨░┬ñ┬ÿ╨░┬ñΓÇÜ╨░┬ñ╤ƒ╨░╥ÉΓÇí',
            d : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬ª╨░┬ñ╤ù╨░┬ñ╨ü',
            dd : '%d ╨░┬ñ┬ª╨░┬ñ╤ù╨░┬ñ╨ü',
            M : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬«╨░┬ñΓäû╨░╥É╨é╨░┬ñ╨ü╨░╥ÉΓÇí',
            MM : '%d ╨░┬ñ┬«╨░┬ñΓäû╨░╥É╨é╨░┬ñ╨ü╨░╥ÉΓÇí',
            y : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬╡╨░┬ñ┬░╨░╥É╨î╨░┬ñ┬╖',
            yy : '%d ╨░┬ñ┬╡╨░┬ñ┬░╨░╥É╨î╨░┬ñ┬╖'
        },
        preparse: function (string) {
            return string.replace(/[╨░╥É┬º╨░╥É╨ü╨░╥É┬⌐╨░╥É╨ä╨░╥É┬½╨░╥É┬¼╨░╥É┬¡╨░╥É┬«╨░╥É╨ç╨░╥É┬ª]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ|╨░┬ñ╤æ╨░╥É╨â╨░┬ñ┬¼╨░┬ñΓäû|╨░┬ñ┬ª╨░╥ÉΓÇ╣╨░┬ñ╨ä╨░┬ñΓäû╨░┬ñ┬░|╨░┬ñ┬╢╨░┬ñ╤ò╨░┬ñ┬«/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === '╨░┬ñ╤æ╨░╥É╨â╨░┬ñ┬¼╨░┬ñΓäû') {
                return hour;
            } else if (meridiem === '╨░┬ñ┬ª╨░╥ÉΓÇ╣╨░┬ñ╨ä╨░┬ñΓäû╨░┬ñ┬░') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === '╨░┬ñ┬╢╨░┬ñ╤ò╨░┬ñ┬«') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return '╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ';
            } else if (hour < 10) {
                return '╨░┬ñ╤æ╨░╥É╨â╨░┬ñ┬¼╨░┬ñΓäû';
            } else if (hour < 17) {
                return '╨░┬ñ┬ª╨░╥ÉΓÇ╣╨░┬ñ╨ä╨░┬ñΓäû╨░┬ñ┬░';
            } else if (hour < 20) {
                return '╨░┬ñ┬╢╨░┬ñ╤ò╨░┬ñ┬«';
            } else {
                return '╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : hrvatski (hr)
// author : Bojan Markovi╨öΓÇí : https://github.com/bmarkovic

// based on (sl) translation by Robert Sedov╨ò╨Äek

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
        case 'm':
            return withoutSuffix ? 'jedna minuta' : 'jedne minute';
        case 'mm':
            if (number === 1) {
                result += 'minuta';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
            } else {
                result += 'minuta';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'jedan sat' : 'jednog sata';
        case 'hh':
            if (number === 1) {
                result += 'sat';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
            } else {
                result += 'sati';
            }
            return result;
        case 'dd':
            if (number === 1) {
                result += 'dan';
            } else {
                result += 'dana';
            }
            return result;
        case 'MM':
            if (number === 1) {
                result += 'mjesec';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
            } else {
                result += 'mjeseci';
            }
            return result;
        case 'yy':
            if (number === 1) {
                result += 'godina';
            } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
            } else {
                result += 'godina';
            }
            return result;
        }
    }

    return moment.defineLocale('hr', {
        months : 'sje╨ö╨îanj_velja╨ö╨îa_o╨ò╤òujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_'),
        monthsShort : 'sje._vel._o╨ò╤òu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_╨ö╨îetvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._╨ö╨îet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_╨ö╨îe_pe_su'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'LT:ss',
            L : 'DD. MM. YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY LT',
            LLLL : 'dddd, D. MMMM YYYY LT'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',

            nextWeek : function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedjelju] [u] LT';
                case 3:
                    return '[u] [srijedu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[ju╨ö╨îer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                case 3:
                    return '[pro╨ò╨Älu] dddd [u] LT';
                case 6:
                    return '[pro╨ò╨Äle] [subote] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[pro╨ò╨Äli] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            m      : translate,
            mm     : translate,
            h      : translate,
            hh     : translate,
            d      : 'dan',
            dd     : translate,
            M      : 'mjesec',
            MM     : translate,
            y      : 'godinu',
            yy     : translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : hungarian (hu)
// author : Adam Brunner : https://github.com/adambrunner

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var weekEndings = 'vas╨ô╨Ärnap h╨ô┬⌐tf╨òΓÇÿn kedden szerd╨ô╨Än cs╨ô╤ÿt╨ô┬╢rt╨ô┬╢k╨ô┬╢n p╨ô┬⌐nteken szombaton'.split(' ');

    function translate(number, withoutSuffix, key, isFuture) {
        var num = number,
            suffix;

        switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'n╨ô┬⌐h╨ô╨Äny m╨ô╨Äsodperc' : 'n╨ô┬⌐h╨ô╨Äny m╨ô╨Äsodperce';
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' ╨ô╤ûra' : ' ╨ô╤ûr╨ô╨Äja');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' ╨ô╤ûra' : ' ╨ô╤ûr╨ô╨Äja');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' h╨ô╤ûnap' : ' h╨ô╤ûnapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' h╨ô╤ûnap' : ' h╨ô╤ûnapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' ╨ô┬⌐v' : ' ╨ô┬⌐ve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' ╨ô┬⌐v' : ' ╨ô┬⌐ve');
        }

        return '';
    }

    function week(isFuture) {
        return (isFuture ? '' : '[m╨ô╤ölt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
    }

    return moment.defineLocale('hu', {
        months : 'janu╨ô╨Är_febru╨ô╨Är_m╨ô╨Ärcius_╨ô╨Äprilis_m╨ô╨Äjus_j╨ô╤önius_j╨ô╤ölius_augusztus_szeptember_okt╨ô╤ûber_november_december'.split('_'),
        monthsShort : 'jan_feb_m╨ô╨Ärc_╨ô╨Äpr_m╨ô╨Äj_j╨ô╤ön_j╨ô╤öl_aug_szept_okt_nov_dec'.split('_'),
        weekdays : 'vas╨ô╨Ärnap_h╨ô┬⌐tf╨òΓÇÿ_kedd_szerda_cs╨ô╤ÿt╨ô┬╢rt╨ô┬╢k_p╨ô┬⌐ntek_szombat'.split('_'),
        weekdaysShort : 'vas_h╨ô┬⌐t_kedd_sze_cs╨ô╤ÿt_p╨ô┬⌐n_szo'.split('_'),
        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'LT:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY. MMMM D.',
            LLL : 'YYYY. MMMM D., LT',
            LLLL : 'YYYY. MMMM D., dddd LT'
        },
        meridiemParse: /de|du/i,
        isPM: function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
            } else {
                return isLower === true ? 'du' : 'DU';
            }
        },
        calendar : {
            sameDay : '[ma] LT[-kor]',
            nextDay : '[holnap] LT[-kor]',
            nextWeek : function () {
                return week.call(this, true);
            },
            lastDay : '[tegnap] LT[-kor]',
            lastWeek : function () {
                return week.call(this, false);
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s m╨ô╤ölva',
            past : '%s',
            s : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Armenian (hy-am)
// author : Armendarabyan : https://github.com/armendarabyan

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function monthsCaseReplace(m, format) {
        var months = {
            'nominative': '╨Ñ┬░╨Ñ╤æ╨ªΓÇÜ╨Ñ┬╢╨Ñ╤ò╨Ñ╨Ä╨ª╨é_╨ª╤ô╨Ñ╥É╨Ñ╤ù╨ª╨é╨Ñ╤ò╨Ñ╨Ä╨ª╨é_╨Ñ╥æ╨Ñ╨Ä╨ª╨é╨Ñ╤ù_╨Ñ╨Ä╨Ñ╤ö╨ª╨é╨Ñ┬½╨Ñ┬¼_╨Ñ╥æ╨Ñ╨Ä╨Ñ┬╡╨Ñ┬½╨Ñ╨à_╨Ñ┬░╨Ñ╤æ╨ªΓÇÜ╨Ñ┬╢╨Ñ┬½╨Ñ╨à_╨Ñ┬░╨Ñ╤æ╨ªΓÇÜ╨Ñ┬¼╨Ñ┬½╨Ñ╨à_╨ªΓÇª╨Ñ╨ê╨Ñ╤æ╨Ñ╨à╨Ñ╤ù╨Ñ╤æ╨Ñ╨à_╨Ñ╨à╨Ñ╥É╨Ñ╤ö╨Ñ╤ù╨Ñ╥É╨Ñ╥æ╨Ñ╤₧╨Ñ╥É╨ª╨é_╨Ñ┬░╨Ñ╤æ╨Ñ╨ç╨Ñ╤ù╨Ñ╥É╨Ñ╥æ╨Ñ╤₧╨Ñ╥É╨ª╨é_╨Ñ┬╢╨Ñ╤æ╨Ñ┬╡╨Ñ╥É╨Ñ╥æ╨Ñ╤₧╨Ñ╥É╨ª╨é_╨Ñ┬ñ╨Ñ╥É╨Ñ╨ç╨Ñ╤ù╨Ñ╥É╨Ñ╥æ╨Ñ╤₧╨Ñ╥É╨ª╨é'.split('_'),
            'accusative': '╨Ñ┬░╨Ñ╤æ╨ªΓÇÜ╨Ñ┬╢╨Ñ╤ò╨Ñ╨Ä╨ª╨é╨Ñ┬½_╨ª╤ô╨Ñ╥É╨Ñ╤ù╨ª╨é╨Ñ╤ò╨Ñ╨Ä╨ª╨é╨Ñ┬½_╨Ñ╥æ╨Ñ╨Ä╨ª╨é╨Ñ╤ù╨Ñ┬½_╨Ñ╨Ä╨Ñ╤ö╨ª╨é╨Ñ┬½╨Ñ┬¼╨Ñ┬½_╨Ñ╥æ╨Ñ╨Ä╨Ñ┬╡╨Ñ┬½╨Ñ╨à╨Ñ┬½_╨Ñ┬░╨Ñ╤æ╨ªΓÇÜ╨Ñ┬╢╨Ñ┬½╨Ñ╨à╨Ñ┬½_╨Ñ┬░╨Ñ╤æ╨ªΓÇÜ╨Ñ┬¼╨Ñ┬½╨Ñ╨à╨Ñ┬½_╨ªΓÇª╨Ñ╨ê╨Ñ╤æ╨Ñ╨à╨Ñ╤ù╨Ñ╤æ╨Ñ╨à╨Ñ┬½_╨Ñ╨à╨Ñ╥É╨Ñ╤ö╨Ñ╤ù╨Ñ╥É╨Ñ╥æ╨Ñ╤₧╨Ñ╥É╨ª╨é╨Ñ┬½_╨Ñ┬░╨Ñ╤æ╨Ñ╨ç╨Ñ╤ù╨Ñ╥É╨Ñ╥æ╨Ñ╤₧╨Ñ╥É╨ª╨é╨Ñ┬½_╨Ñ┬╢╨Ñ╤æ╨Ñ┬╡╨Ñ╥É╨Ñ╥æ╨Ñ╤₧╨Ñ╥É╨ª╨é╨Ñ┬½_╨Ñ┬ñ╨Ñ╥É╨Ñ╨ç╨Ñ╤ù╨Ñ╥É╨Ñ╥æ╨Ñ╤₧╨Ñ╥É╨ª╨é╨Ñ┬½'.split('_')
        },

        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
            'accusative' :
            'nominative';

        return months[nounCase][m.month()];
    }

    function monthsShortCaseReplace(m, format) {
        var monthsShort = '╨Ñ┬░╨Ñ┬╢╨Ñ╤ò_╨ª╤ô╨Ñ╤ù╨ª╨é_╨Ñ╥æ╨ª╨é╨Ñ╤ù_╨Ñ╨Ä╨Ñ╤ö╨ª╨é_╨Ñ╥æ╨Ñ┬╡╨Ñ╨à_╨Ñ┬░╨Ñ┬╢╨Ñ╨à_╨Ñ┬░╨Ñ┬¼╨Ñ╨à_╨ªΓÇª╨Ñ╨ê╨Ñ╨à_╨Ñ╨à╨Ñ╤ö╨Ñ╤ù_╨Ñ┬░╨Ñ╨ç╨Ñ╤ù_╨Ñ┬╢╨Ñ╥æ╨Ñ╤₧_╨Ñ┬ñ╨Ñ╨ç╨Ñ╤ù'.split('_');

        return monthsShort[m.month()];
    }

    function weekdaysCaseReplace(m, format) {
        var weekdays = '╨Ñ╨ç╨Ñ┬½╨ª╨é╨Ñ╨Ä╨Ñ╨ç╨Ñ┬½_╨Ñ╥É╨ª╨é╨Ñ╨ç╨Ñ╤æ╨ªΓÇÜ╨Ñ┬╖╨Ñ╨Ä╨Ñ╤₧╨Ñ┬⌐╨Ñ┬½_╨Ñ╥É╨ª╨é╨Ñ╥É╨ªΓÇ₧╨Ñ┬╖╨Ñ╨Ä╨Ñ╤₧╨Ñ┬⌐╨Ñ┬½_╨ÑΓäû╨Ñ╤æ╨ª╨é╨Ñ╥É╨ªΓÇ₧╨Ñ┬╖╨Ñ╨Ä╨Ñ╤₧╨Ñ┬⌐╨Ñ┬½_╨Ñ┬░╨Ñ┬½╨Ñ┬╢╨Ñ╨ê╨Ñ┬╖╨Ñ╨Ä╨Ñ╤₧╨Ñ┬⌐╨Ñ┬½_╨Ñ╤æ╨ªΓÇÜ╨ª╨é╨Ñ╤₧╨Ñ╨Ä╨Ñ┬⌐_╨Ñ┬╖╨Ñ╨Ä╨Ñ╤₧╨Ñ╨Ä╨Ñ┬⌐'.split('_');

        return weekdays[m.day()];
    }

    return moment.defineLocale('hy-am', {
        months : monthsCaseReplace,
        monthsShort : monthsShortCaseReplace,
        weekdays : weekdaysCaseReplace,
        weekdaysShort : '╨Ñ╨ç╨ª╨é╨Ñ╨ç_╨Ñ╥É╨ª╨é╨Ñ╨ç_╨Ñ╥É╨ª╨é╨ªΓÇ₧_╨ÑΓäû╨ª╨é╨ªΓÇ₧_╨Ñ┬░╨Ñ┬╢╨Ñ╨ê_╨Ñ╤æ╨ªΓÇÜ╨ª╨é╨Ñ╤₧_╨Ñ┬╖╨Ñ╤₧╨Ñ┬⌐'.split('_'),
        weekdaysMin : '╨Ñ╨ç╨ª╨é╨Ñ╨ç_╨Ñ╥É╨ª╨é╨Ñ╨ç_╨Ñ╥É╨ª╨é╨ªΓÇ₧_╨ÑΓäû╨ª╨é╨ªΓÇ₧_╨Ñ┬░╨Ñ┬╢╨Ñ╨ê_╨Ñ╤æ╨ªΓÇÜ╨ª╨é╨Ñ╤₧_╨Ñ┬╖╨Ñ╤₧╨Ñ┬⌐'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY ╨Ñ┬⌐.',
            LLL : 'D MMMM YYYY ╨Ñ┬⌐., LT',
            LLLL : 'dddd, D MMMM YYYY ╨Ñ┬⌐., LT'
        },
        calendar : {
            sameDay: '[╨Ñ╨Ä╨Ñ┬╡╨Ñ╨à╨ªΓÇª╨ª╨é] LT',
            nextDay: '[╨Ñ╤ò╨Ñ╨Ä╨Ñ╨å╨Ñ╨ü] LT',
            lastDay: '[╨Ñ╥É╨ª╨é╨Ñ╥É╨Ñ╨ç] LT',
            nextWeek: function () {
                return 'dddd [╨ªΓÇª╨ª╨é╨Ñ╨ü ╨Ñ╨ä╨Ñ╨Ä╨Ñ╥æ╨Ñ╨ü] LT';
            },
            lastWeek: function () {
                return '[╨Ñ╨Ä╨Ñ┬╢╨ª╨â╨Ñ╨Ä╨Ñ┬«] dddd [╨ªΓÇª╨ª╨é╨Ñ╨ü ╨Ñ╨ä╨Ñ╨Ä╨Ñ╥æ╨Ñ╨ü] LT';
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s ╨Ñ┬░╨Ñ╥É╨Ñ╤ù╨Ñ╤æ',
            past : '%s ╨Ñ╨Ä╨Ñ╤ÿ╨Ñ╨Ä╨Ñ┬╗',
            s : '╨Ñ╥æ╨Ñ┬½ ╨ªΓÇ₧╨Ñ╨Ä╨Ñ┬╢╨Ñ┬½ ╨Ñ╤ò╨Ñ╨Ä╨Ñ┬╡╨ª╨é╨Ñ╨ç╨Ñ┬╡╨Ñ╨Ä╨Ñ┬╢',
            m : '╨ª╨é╨Ñ╤æ╨Ñ╤ö╨Ñ╥É',
            mm : '%d ╨ª╨é╨Ñ╤æ╨Ñ╤ö╨Ñ╥É',
            h : '╨Ñ╨ä╨Ñ╨Ä╨Ñ╥æ',
            hh : '%d ╨Ñ╨ä╨Ñ╨Ä╨Ñ╥æ',
            d : '╨ªΓÇª╨ª╨é',
            dd : '%d ╨ªΓÇª╨ª╨é',
            M : '╨Ñ╨Ä╨Ñ╥æ╨Ñ┬½╨Ñ╨à',
            MM : '%d ╨Ñ╨Ä╨Ñ╥æ╨Ñ┬½╨Ñ╨à',
            y : '╨Ñ╤ù╨Ñ╨Ä╨ª╨é╨Ñ┬½',
            yy : '%d ╨Ñ╤ù╨Ñ╨Ä╨ª╨é╨Ñ┬½'
        },

        meridiemParse: /╨Ñ╨ê╨Ñ┬½╨Ñ┬╖╨Ñ╥É╨ª╨é╨Ñ╤ò╨Ñ╨Ä|╨Ñ╨Ä╨Ñ╤ÿ╨Ñ╨Ä╨Ñ╤ò╨Ñ╤æ╨Ñ╤ù╨Ñ╤ò╨Ñ╨Ä|╨ª╨â╨Ñ╥É╨ª╨é╨Ñ╥É╨Ñ╨ç╨Ñ╤ò╨Ñ╨Ä|╨Ñ╥É╨ª╨é╨Ñ╥É╨Ñ╨ç╨Ñ╤æ╨Ñ┬╡╨Ñ╨Ä╨Ñ┬╢/,
        isPM: function (input) {
            return /^(╨ª╨â╨Ñ╥É╨ª╨é╨Ñ╥É╨Ñ╨ç╨Ñ╤ò╨Ñ╨Ä|╨Ñ╥É╨ª╨é╨Ñ╥É╨Ñ╨ç╨Ñ╤æ╨Ñ┬╡╨Ñ╨Ä╨Ñ┬╢)$/.test(input);
        },
        meridiem : function (hour) {
            if (hour < 4) {
                return '╨Ñ╨ê╨Ñ┬½╨Ñ┬╖╨Ñ╥É╨ª╨é╨Ñ╤ò╨Ñ╨Ä';
            } else if (hour < 12) {
                return '╨Ñ╨Ä╨Ñ╤ÿ╨Ñ╨Ä╨Ñ╤ò╨Ñ╤æ╨Ñ╤ù╨Ñ╤ò╨Ñ╨Ä';
            } else if (hour < 17) {
                return '╨ª╨â╨Ñ╥É╨ª╨é╨Ñ╥É╨Ñ╨ç╨Ñ╤ò╨Ñ╨Ä';
            } else {
                return '╨Ñ╥É╨ª╨é╨Ñ╥É╨Ñ╨ç╨Ñ╤æ╨Ñ┬╡╨Ñ╨Ä╨Ñ┬╢';
            }
        },

        ordinalParse: /\d{1,2}|\d{1,2}-(╨Ñ┬½╨Ñ┬╢|╨ª╨é╨Ñ┬ñ)/,
        ordinal: function (number, period) {
            switch (period) {
            case 'DDD':
            case 'w':
            case 'W':
            case 'DDDo':
                if (number === 1) {
                    return number + '-╨Ñ┬½╨Ñ┬╢';
                }
                return number + '-╨ª╨é╨Ñ┬ñ';
            default:
                return number;
            }
        },

        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Bahasa Indonesia (id)
// author : Mohammad Satrio Utomo : https://github.com/tyok
// reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('id', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'LT.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] LT',
            LLLL : 'dddd, D MMMM YYYY [pukul] LT'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'siang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sore' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'siang';
            } else if (hours < 19) {
                return 'sore';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Besok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kemarin pukul] LT',
            lastWeek : 'dddd [lalu pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lalu',
            s : 'beberapa detik',
            m : 'semenit',
            mm : '%d menit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : icelandic (is)
// author : Hinrik ╨ôΓÇôrn Sigur╨ô┬░sson : https://github.com/hinrik

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function plural(n) {
        if (n % 100 === 11) {
            return true;
        } else if (n % 10 === 1) {
            return false;
        }
        return true;
    }

    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nokkrar sek╨ô╤öndur' : 'nokkrum sek╨ô╤öndum';
        case 'm':
            return withoutSuffix ? 'm╨ô┬¡n╨ô╤öta' : 'm╨ô┬¡n╨ô╤ötu';
        case 'mm':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'm╨ô┬¡n╨ô╤ötur' : 'm╨ô┬¡n╨ô╤ötum');
            } else if (withoutSuffix) {
                return result + 'm╨ô┬¡n╨ô╤öta';
            }
            return result + 'm╨ô┬¡n╨ô╤ötu';
        case 'hh':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
            }
            return result + 'klukkustund';
        case 'd':
            if (withoutSuffix) {
                return 'dagur';
            }
            return isFuture ? 'dag' : 'degi';
        case 'dd':
            if (plural(number)) {
                if (withoutSuffix) {
                    return result + 'dagar';
                }
                return result + (isFuture ? 'daga' : 'd╨ô┬╢gum');
            } else if (withoutSuffix) {
                return result + 'dagur';
            }
            return result + (isFuture ? 'dag' : 'degi');
        case 'M':
            if (withoutSuffix) {
                return 'm╨ô╨Änu╨ô┬░ur';
            }
            return isFuture ? 'm╨ô╨Änu╨ô┬░' : 'm╨ô╨Änu╨ô┬░i';
        case 'MM':
            if (plural(number)) {
                if (withoutSuffix) {
                    return result + 'm╨ô╨Änu╨ô┬░ir';
                }
                return result + (isFuture ? 'm╨ô╨Änu╨ô┬░i' : 'm╨ô╨Änu╨ô┬░um');
            } else if (withoutSuffix) {
                return result + 'm╨ô╨Änu╨ô┬░ur';
            }
            return result + (isFuture ? 'm╨ô╨Änu╨ô┬░' : 'm╨ô╨Änu╨ô┬░i');
        case 'y':
            return withoutSuffix || isFuture ? '╨ô╨Är' : '╨ô╨Äri';
        case 'yy':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? '╨ô╨Är' : '╨ô╨Ärum');
            }
            return result + (withoutSuffix || isFuture ? '╨ô╨Är' : '╨ô╨Äri');
        }
    }

    return moment.defineLocale('is', {
        months : 'jan╨ô╤öar_febr╨ô╤öar_mars_apr╨ô┬¡l_ma╨ô┬¡_j╨ô╤ön╨ô┬¡_j╨ô╤öl╨ô┬¡_╨ô╨Äg╨ô╤öst_september_okt╨ô╤ûber_n╨ô╤ûvember_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_ma╨ô┬¡_j╨ô╤ön_j╨ô╤öl_╨ô╨Äg╨ô╤ö_sep_okt_n╨ô╤ûv_des'.split('_'),
        weekdays : 'sunnudagur_m╨ô╨Änudagur_╨ô╤òri╨ô┬░judagur_mi╨ô┬░vikudagur_fimmtudagur_f╨ô┬╢studagur_laugardagur'.split('_'),
        weekdaysShort : 'sun_m╨ô╨Än_╨ô╤òri_mi╨ô┬░_fim_f╨ô┬╢s_lau'.split('_'),
        weekdaysMin : 'Su_M╨ô╨Ä_╨ô╤¢r_Mi_Fi_F╨ô┬╢_La'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] LT',
            LLLL : 'dddd, D. MMMM YYYY [kl.] LT'
        },
        calendar : {
            sameDay : '[╨ô┬¡ dag kl.] LT',
            nextDay : '[╨ô╨Ä morgun kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[╨ô┬¡ g╨ô┬ªr kl.] LT',
            lastWeek : '[s╨ô┬¡╨ô┬░asta] dddd [kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'eftir %s',
            past : 'fyrir %s s╨ô┬¡╨ô┬░an',
            s : translate,
            m : translate,
            mm : translate,
            h : 'klukkustund',
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : italian (it)
// author : Lorenzo : https://github.com/aliem
// author: Mattia Larentis: https://github.com/nostalgiaz

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('it', {
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays : 'Domenica_Luned╨ô┬¼_Marted╨ô┬¼_Mercoled╨ô┬¼_Gioved╨ô┬¼_Venerd╨ô┬¼_Sabato'.split('_'),
        weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
        weekdaysMin : 'D_L_Ma_Me_G_V_S'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
            },
            past : '%s fa',
            s : 'alcuni secondi',
            m : 'un minuto',
            mm : '%d minuti',
            h : 'un\'ora',
            hh : '%d ore',
            d : 'un giorno',
            dd : '%d giorni',
            M : 'un mese',
            MM : '%d mesi',
            y : 'un anno',
            yy : '%d anni'
        },
        ordinalParse : /\d{1,2}╨Æ╤ö/,
        ordinal: '%d╨Æ╤ö',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : japanese (ja)
// author : LI Long : https://github.com/baryon

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('ja', {
        months : '1╨╢╤ÜΓé¼_2╨╢╤ÜΓé¼_3╨╢╤ÜΓé¼_4╨╢╤ÜΓé¼_5╨╢╤ÜΓé¼_6╨╢╤ÜΓé¼_7╨╢╤ÜΓé¼_8╨╢╤ÜΓé¼_9╨╢╤ÜΓé¼_10╨╢╤ÜΓé¼_11╨╢╤ÜΓé¼_12╨╢╤ÜΓé¼'.split('_'),
        monthsShort : '1╨╢╤ÜΓé¼_2╨╢╤ÜΓé¼_3╨╢╤ÜΓé¼_4╨╢╤ÜΓé¼_5╨╢╤ÜΓé¼_6╨╢╤ÜΓé¼_7╨╢╤ÜΓé¼_8╨╢╤ÜΓé¼_9╨╢╤ÜΓé¼_10╨╢╤ÜΓé¼_11╨╢╤ÜΓé¼_12╨╢╤ÜΓé¼'.split('_'),
        weekdays : '╨╢ΓÇö╥É╨╢ΓÇ║╤Ü╨╢ΓÇö╥É_╨╢╤ÜΓé¼╨╢ΓÇ║╤Ü╨╢ΓÇö╥É_╨╖╨â┬½╨╢ΓÇ║╤Ü╨╢ΓÇö╥É_╨╢┬░╥æ╨╢ΓÇ║╤Ü╨╢ΓÇö╥É_╨╢╤Ü╨ü╨╢ΓÇ║╤Ü╨╢ΓÇö╥É_╨╣ΓÇíΓÇÿ╨╢ΓÇ║╤Ü╨╢ΓÇö╥É_╨╡╤Ü╤ƒ╨╢ΓÇ║╤Ü╨╢ΓÇö╥É'.split('_'),
        weekdaysShort : '╨╢ΓÇö╥É_╨╢╤ÜΓé¼_╨╖╨â┬½_╨╢┬░╥æ_╨╢╤Ü╨ü_╨╣ΓÇíΓÇÿ_╨╡╤Ü╤ƒ'.split('_'),
        weekdaysMin : '╨╢ΓÇö╥É_╨╢╤ÜΓé¼_╨╖╨â┬½_╨╢┬░╥æ_╨╢╤Ü╨ü_╨╣ΓÇíΓÇÿ_╨╡╤Ü╤ƒ'.split('_'),
        longDateFormat : {
            LT : 'Ah╨╢ΓäóΓÇÜm╨╡Γé¼ΓÇá',
            LTS : 'LTs╨╖┬ºΓÇÖ',
            L : 'YYYY/MM/DD',
            LL : 'YYYY╨╡Γäû╥æM╨╢╤ÜΓé¼D╨╢ΓÇö╥É',
            LLL : 'YYYY╨╡Γäû╥æM╨╢╤ÜΓé¼D╨╢ΓÇö╥ÉLT',
            LLLL : 'YYYY╨╡Γäû╥æM╨╢╤ÜΓé¼D╨╢ΓÇö╥ÉLT dddd'
        },
        meridiemParse: /╨╡╨îΓé¼╨╡ΓÇ░╨î|╨╡╨îΓé¼╨╡╤ò╨è/i,
        isPM : function (input) {
            return input === '╨╡╨îΓé¼╨╡╤ò╨è';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return '╨╡╨îΓé¼╨╡ΓÇ░╨î';
            } else {
                return '╨╡╨îΓé¼╨╡╤ò╨è';
            }
        },
        calendar : {
            sameDay : '[╨┤┬╗╨ë╨╢ΓÇö╥É] LT',
            nextDay : '[╨╢┬ÿ╨ï╨╢ΓÇö╥É] LT',
            nextWeek : '[╨╢╤£╥É╨╣╨é┬▒]dddd LT',
            lastDay : '[╨╢┬ÿ╨ü╨╢ΓÇö╥É] LT',
            lastWeek : '[╨╡ΓÇ░╨î╨╣╨é┬▒]dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s╨╡╤ò╨è',
            past : '%s╨╡ΓÇ░╨î',
            s : '╨╢ΓÇó┬░╨╖┬ºΓÇÖ',
            m : '1╨╡Γé¼ΓÇá',
            mm : '%d╨╡Γé¼ΓÇá',
            h : '1╨╢ΓäóΓÇÜ╨╣ΓÇôΓÇ£',
            hh : '%d╨╢ΓäóΓÇÜ╨╣ΓÇôΓÇ£',
            d : '1╨╢ΓÇö╥É',
            dd : '%d╨╢ΓÇö╥É',
            M : '1╨│╤ô┬╢╨╢╤ÜΓé¼',
            MM : '%d╨│╤ô┬╢╨╢╤ÜΓé¼',
            y : '1╨╡Γäû╥æ',
            yy : '%d╨╡Γäû╥æ'
        }
    });
}));

// moment.js locale configuration
// locale : Georgian (ka)
// author : Irakli Janiashvili : https://github.com/irakli-janiashvili

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function monthsCaseReplace(m, format) {
        var months = {
            'nominative': '╨▒╤ô┬ÿ╨▒╤ô╤Æ╨▒╤ô╤Ü╨▒╤ôΓÇó╨▒╤ô╤Æ╨▒╤ô ╨▒╤ô┬ÿ_╨▒╤ôΓÇö╨▒╤ôΓÇ¥╨▒╤ôΓÇÿ╨▒╤ôΓÇ¥╨▒╤ô ╨▒╤ôΓÇó╨▒╤ô╤Æ╨▒╤ô╤Ö╨▒╤ô┬ÿ_╨▒╤ôΓÇ║╨▒╤ô╤Æ╨▒╤ô ╨▒╤ô╤₧╨▒╤ô┬ÿ_╨▒╤ô╤Æ╨▒╤ô╤¢╨▒╤ô ╨▒╤ô┬ÿ╨▒╤ô╤Ö╨▒╤ô┬ÿ_╨▒╤ôΓÇ║╨▒╤ô╤Æ╨▒╤ô┬ÿ╨▒╤ô╨Ä╨▒╤ô┬ÿ_╨▒╤ô┬ÿ╨▒╤ôΓÇó╨▒╤ô╤Ü╨▒╤ô┬ÿ╨▒╤ô╨Ä╨▒╤ô┬ÿ_╨▒╤ô┬ÿ╨▒╤ôΓÇó╨▒╤ô╤Ö╨▒╤ô┬ÿ╨▒╤ô╨Ä╨▒╤ô┬ÿ_╨▒╤ô╤Æ╨▒╤ôΓÇÖ╨▒╤ôΓÇó╨▒╤ô┬ÿ╨▒╤ô╨Ä╨▒╤ô╤₧╨▒╤ô╤£_╨▒╤ô╨Ä╨▒╤ôΓÇ¥╨▒╤ô╥É╨▒╤ô╤₧╨▒╤ôΓÇ¥╨▒╤ôΓÇ║╨▒╤ôΓÇÿ╨▒╤ôΓÇ¥╨▒╤ô ╨▒╤ô┬ÿ_╨▒╤ô╤£╨▒╤ô╥É╨▒╤ô╤₧╨▒╤ô╤£╨▒╤ôΓÇ║╨▒╤ôΓÇÿ╨▒╤ôΓÇ¥╨▒╤ô ╨▒╤ô┬ÿ_╨▒╤ô╤Ü╨▒╤ô╤£╨▒╤ôΓÇ¥╨▒╤ôΓÇ║╨▒╤ôΓÇÿ╨▒╤ôΓÇ¥╨▒╤ô ╨▒╤ô┬ÿ_╨▒╤ôΓÇ£╨▒╤ôΓÇ¥╨▒╤ôΓäó╨▒╤ôΓÇ¥╨▒╤ôΓÇ║╨▒╤ôΓÇÿ╨▒╤ôΓÇ¥╨▒╤ô ╨▒╤ô┬ÿ'.split('_'),
            'accusative': '╨▒╤ô┬ÿ╨▒╤ô╤Æ╨▒╤ô╤Ü╨▒╤ôΓÇó╨▒╤ô╤Æ╨▒╤ô ╨▒╤ô╨Ä_╨▒╤ôΓÇö╨▒╤ôΓÇ¥╨▒╤ôΓÇÿ╨▒╤ôΓÇ¥╨▒╤ô ╨▒╤ôΓÇó╨▒╤ô╤Æ╨▒╤ô╤Ö╨▒╤ô╨Ä_╨▒╤ôΓÇ║╨▒╤ô╤Æ╨▒╤ô ╨▒╤ô╤₧╨▒╤ô╨Ä_╨▒╤ô╤Æ╨▒╤ô╤¢╨▒╤ô ╨▒╤ô┬ÿ╨▒╤ô╤Ö╨▒╤ô┬ÿ╨▒╤ô╨Ä_╨▒╤ôΓÇ║╨▒╤ô╤Æ╨▒╤ô┬ÿ╨▒╤ô╨Ä╨▒╤ô╨Ä_╨▒╤ô┬ÿ╨▒╤ôΓÇó╨▒╤ô╤Ü╨▒╤ô┬ÿ╨▒╤ô╨Ä╨▒╤ô╨Ä_╨▒╤ô┬ÿ╨▒╤ôΓÇó╨▒╤ô╤Ö╨▒╤ô┬ÿ╨▒╤ô╨Ä╨▒╤ô╨Ä_╨▒╤ô╤Æ╨▒╤ôΓÇÖ╨▒╤ôΓÇó╨▒╤ô┬ÿ╨▒╤ô╨Ä╨▒╤ô╤₧╨▒╤ô╨Ä_╨▒╤ô╨Ä╨▒╤ôΓÇ¥╨▒╤ô╥É╨▒╤ô╤₧╨▒╤ôΓÇ¥╨▒╤ôΓÇ║╨▒╤ôΓÇÿ╨▒╤ôΓÇ¥╨▒╤ô ╨▒╤ô╨Ä_╨▒╤ô╤£╨▒╤ô╥É╨▒╤ô╤₧╨▒╤ô╤£╨▒╤ôΓÇ║╨▒╤ôΓÇÿ╨▒╤ôΓÇ¥╨▒╤ô ╨▒╤ô╨Ä_╨▒╤ô╤Ü╨▒╤ô╤£╨▒╤ôΓÇ¥╨▒╤ôΓÇ║╨▒╤ôΓÇÿ╨▒╤ôΓÇ¥╨▒╤ô ╨▒╤ô╨Ä_╨▒╤ôΓÇ£╨▒╤ôΓÇ¥╨▒╤ôΓäó╨▒╤ôΓÇ¥╨▒╤ôΓÇ║╨▒╤ôΓÇÿ╨▒╤ôΓÇ¥╨▒╤ô ╨▒╤ô╨Ä'.split('_')
        },

        nounCase = (/D[oD] *MMMM?/).test(format) ?
            'accusative' :
            'nominative';

        return months[nounCase][m.month()];
    }

    function weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': '╨▒╤ôΓäó╨▒╤ôΓÇó╨▒╤ô┬ÿ╨▒╤ô ╨▒╤ô╤Æ_╨▒╤ô╤£╨▒╤ô ╨▒╤ô╨ü╨▒╤ô╤Æ╨▒╤ôΓÇÿ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô┬ÿ_╨▒╤ô╨Ä╨▒╤ô╤Æ╨▒╤ôΓÇ║╨▒╤ô╨ü╨▒╤ô╤Æ╨▒╤ôΓÇÿ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô┬ÿ_╨▒╤ô╤£╨▒╤ôΓÇö╨▒╤ô┬«╨▒╤ô╨ü╨▒╤ô╤Æ╨▒╤ôΓÇÿ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô┬ÿ_╨▒╤ô┬«╨▒╤ô╨ê╨▒╤ôΓÇö╨▒╤ô╨ü╨▒╤ô╤Æ╨▒╤ôΓÇÿ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô┬ÿ_╨▒╤ô╤¢╨▒╤ô╤Æ╨▒╤ô ╨▒╤ô╤Æ╨▒╤ô╨Ä╨▒╤ôΓäó╨▒╤ôΓÇ¥╨▒╤ôΓÇó╨▒╤ô┬ÿ_╨▒╤ô╨ü╨▒╤ô╤Æ╨▒╤ôΓÇÿ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô┬ÿ'.split('_'),
            'accusative': '╨▒╤ôΓäó╨▒╤ôΓÇó╨▒╤ô┬ÿ╨▒╤ô ╨▒╤ô╤Æ╨▒╤ô╨Ä_╨▒╤ô╤£╨▒╤ô ╨▒╤ô╨ü╨▒╤ô╤Æ╨▒╤ôΓÇÿ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô╨Ä_╨▒╤ô╨Ä╨▒╤ô╤Æ╨▒╤ôΓÇ║╨▒╤ô╨ü╨▒╤ô╤Æ╨▒╤ôΓÇÿ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô╨Ä_╨▒╤ô╤£╨▒╤ôΓÇö╨▒╤ô┬«╨▒╤ô╨ü╨▒╤ô╤Æ╨▒╤ôΓÇÿ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô╨Ä_╨▒╤ô┬«╨▒╤ô╨ê╨▒╤ôΓÇö╨▒╤ô╨ü╨▒╤ô╤Æ╨▒╤ôΓÇÿ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô╨Ä_╨▒╤ô╤¢╨▒╤ô╤Æ╨▒╤ô ╨▒╤ô╤Æ╨▒╤ô╨Ä╨▒╤ôΓäó╨▒╤ôΓÇ¥╨▒╤ôΓÇó╨▒╤ô╨Ä_╨▒╤ô╨ü╨▒╤ô╤Æ╨▒╤ôΓÇÿ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô╨Ä'.split('_')
        },

        nounCase = (/(╨▒╤ô┬¼╨▒╤ô┬ÿ╨▒╤ô╤Ü╨▒╤ô╤Æ|╨▒╤ô╨ü╨▒╤ôΓÇ¥╨▒╤ôΓÇ║╨▒╤ôΓÇ£╨▒╤ôΓÇ¥╨▒╤ôΓÇÖ)/).test(format) ?
            'accusative' :
            'nominative';

        return weekdays[nounCase][m.day()];
    }

    return moment.defineLocale('ka', {
        months : monthsCaseReplace,
        monthsShort : '╨▒╤ô┬ÿ╨▒╤ô╤Æ╨▒╤ô╤Ü_╨▒╤ôΓÇö╨▒╤ôΓÇ¥╨▒╤ôΓÇÿ_╨▒╤ôΓÇ║╨▒╤ô╤Æ╨▒╤ô _╨▒╤ô╤Æ╨▒╤ô╤¢╨▒╤ô _╨▒╤ôΓÇ║╨▒╤ô╤Æ╨▒╤ô┬ÿ_╨▒╤ô┬ÿ╨▒╤ôΓÇó╨▒╤ô╤Ü_╨▒╤ô┬ÿ╨▒╤ôΓÇó╨▒╤ô╤Ö_╨▒╤ô╤Æ╨▒╤ôΓÇÖ╨▒╤ôΓÇó_╨▒╤ô╨Ä╨▒╤ôΓÇ¥╨▒╤ô╥É_╨▒╤ô╤£╨▒╤ô╥É╨▒╤ô╤₧_╨▒╤ô╤Ü╨▒╤ô╤£╨▒╤ôΓÇ¥_╨▒╤ôΓÇ£╨▒╤ôΓÇ¥╨▒╤ôΓäó'.split('_'),
        weekdays : weekdaysCaseReplace,
        weekdaysShort : '╨▒╤ôΓäó╨▒╤ôΓÇó╨▒╤ô┬ÿ_╨▒╤ô╤£╨▒╤ô ╨▒╤ô╨ü_╨▒╤ô╨Ä╨▒╤ô╤Æ╨▒╤ôΓÇ║_╨▒╤ô╤£╨▒╤ôΓÇö╨▒╤ô┬«_╨▒╤ô┬«╨▒╤ô╨ê╨▒╤ôΓÇö_╨▒╤ô╤¢╨▒╤ô╤Æ╨▒╤ô _╨▒╤ô╨ü╨▒╤ô╤Æ╨▒╤ôΓÇÿ'.split('_'),
        weekdaysMin : '╨▒╤ôΓäó╨▒╤ôΓÇó_╨▒╤ô╤£╨▒╤ô _╨▒╤ô╨Ä╨▒╤ô╤Æ_╨▒╤ô╤£╨▒╤ôΓÇö_╨▒╤ô┬«╨▒╤ô╨ê_╨▒╤ô╤¢╨▒╤ô╤Æ_╨▒╤ô╨ü╨▒╤ô╤Æ'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
            sameDay : '[╨▒╤ôΓÇ£╨▒╤ô┬ª╨▒╤ôΓÇ¥╨▒╤ô╨Ä] LT[-╨▒╤ôΓÇô╨▒╤ôΓÇ¥]',
            nextDay : '[╨▒╤ô┬«╨▒╤ôΓÇó╨▒╤ô╤Æ╨▒╤ô╤Ö] LT[-╨▒╤ôΓÇô╨▒╤ôΓÇ¥]',
            lastDay : '[╨▒╤ôΓÇÖ╨▒╤ô╨ê╨▒╤ô╨ü╨▒╤ô┬ÿ╨▒╤ô╤Ü] LT[-╨▒╤ôΓÇô╨▒╤ôΓÇ¥]',
            nextWeek : '[╨▒╤ô╨ü╨▒╤ôΓÇ¥╨▒╤ôΓÇ║╨▒╤ôΓÇ£╨▒╤ôΓÇ¥╨▒╤ôΓÇÖ] dddd LT[-╨▒╤ôΓÇô╨▒╤ôΓÇ¥]',
            lastWeek : '[╨▒╤ô┬¼╨▒╤ô┬ÿ╨▒╤ô╤Ü╨▒╤ô╤Æ] dddd LT-╨▒╤ôΓÇô╨▒╤ôΓÇ¥',
            sameElse : 'L'
        },
        relativeTime : {
            future : function (s) {
                return (/(╨▒╤ô┬¼╨▒╤ô╤Æ╨▒╤ôΓÇ║╨▒╤ô┬ÿ|╨▒╤ô┬¼╨▒╤ô╨ê╨▒╤ôΓÇö╨▒╤ô┬ÿ|╨▒╤ô╨Ä╨▒╤ô╤Æ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô┬ÿ|╨▒╤ô┬¼╨▒╤ôΓÇ¥╨▒╤ô╤Ö╨▒╤ô┬ÿ)/).test(s) ?
                    s.replace(/╨▒╤ô┬ÿ$/, '╨▒╤ô╨ü╨▒╤ô┬ÿ') :
                    s + '╨▒╤ô╨ü╨▒╤ô┬ÿ';
            },
            past : function (s) {
                if ((/(╨▒╤ô┬¼╨▒╤ô╤Æ╨▒╤ôΓÇ║╨▒╤ô┬ÿ|╨▒╤ô┬¼╨▒╤ô╨ê╨▒╤ôΓÇö╨▒╤ô┬ÿ|╨▒╤ô╨Ä╨▒╤ô╤Æ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô┬ÿ|╨▒╤ôΓÇ£╨▒╤ô┬ª╨▒╤ôΓÇ¥|╨▒╤ôΓÇö╨▒╤ôΓÇó╨▒╤ôΓÇ¥)/).test(s)) {
                    return s.replace(/(╨▒╤ô┬ÿ|╨▒╤ôΓÇ¥)$/, '╨▒╤ô┬ÿ╨▒╤ô╨Ä ╨▒╤ô┬¼╨▒╤ô┬ÿ╨▒╤ô╤Ü');
                }
                if ((/╨▒╤ô┬¼╨▒╤ôΓÇ¥╨▒╤ô╤Ö╨▒╤ô┬ÿ/).test(s)) {
                    return s.replace(/╨▒╤ô┬¼╨▒╤ôΓÇ¥╨▒╤ô╤Ö╨▒╤ô┬ÿ$/, '╨▒╤ô┬¼╨▒╤ô╤Ö╨▒╤ô┬ÿ╨▒╤ô╨Ä ╨▒╤ô┬¼╨▒╤ô┬ÿ╨▒╤ô╤Ü');
                }
            },
            s : '╨▒╤ô ╨▒╤ô╤Æ╨▒╤ôΓÇ║╨▒╤ôΓÇ£╨▒╤ôΓÇ¥╨▒╤ô╤Ü╨▒╤ô┬ÿ╨▒╤ôΓÇ║╨▒╤ôΓÇ¥ ╨▒╤ô┬¼╨▒╤ô╤Æ╨▒╤ôΓÇ║╨▒╤ô┬ÿ',
            m : '╨▒╤ô┬¼╨▒╤ô╨ê╨▒╤ôΓÇö╨▒╤ô┬ÿ',
            mm : '%d ╨▒╤ô┬¼╨▒╤ô╨ê╨▒╤ôΓÇö╨▒╤ô┬ÿ',
            h : '╨▒╤ô╨Ä╨▒╤ô╤Æ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô┬ÿ',
            hh : '%d ╨▒╤ô╨Ä╨▒╤ô╤Æ╨▒╤ô╤Æ╨▒╤ôΓÇö╨▒╤ô┬ÿ',
            d : '╨▒╤ôΓÇ£╨▒╤ô┬ª╨▒╤ôΓÇ¥',
            dd : '%d ╨▒╤ôΓÇ£╨▒╤ô┬ª╨▒╤ôΓÇ¥',
            M : '╨▒╤ôΓÇö╨▒╤ôΓÇó╨▒╤ôΓÇ¥',
            MM : '%d ╨▒╤ôΓÇö╨▒╤ôΓÇó╨▒╤ôΓÇ¥',
            y : '╨▒╤ô┬¼╨▒╤ôΓÇ¥╨▒╤ô╤Ö╨▒╤ô┬ÿ',
            yy : '%d ╨▒╤ô┬¼╨▒╤ôΓÇ¥╨▒╤ô╤Ö╨▒╤ô┬ÿ'
        },
        ordinalParse: /0|1-╨▒╤ô╤Ö╨▒╤ô┬ÿ|╨▒╤ôΓÇ║╨▒╤ôΓÇ¥-\d{1,2}|\d{1,2}-╨▒╤ôΓÇ¥/,
        ordinal : function (number) {
            if (number === 0) {
                return number;
            }

            if (number === 1) {
                return number + '-╨▒╤ô╤Ö╨▒╤ô┬ÿ';
            }

            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
                return '╨▒╤ôΓÇ║╨▒╤ôΓÇ¥-' + number;
            }

            return number + '-╨▒╤ôΓÇ¥';
        },
        week : {
            dow : 1,
            doy : 7
        }
    });
}));

// moment.js locale configuration
// locale : khmer (km)
// author : Kruy Vanna : https://github.com/kruyvanna

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('km', {
        months: '╨▒╤¢┬ÿ╨▒╤¢╨é╨▒╤¢╤Ö╨▒╤¢┬╢_╨▒╤¢╨é╨▒╤¢┬╗╨▒╤¢┬ÿ╨▒╤ƒΓÇÖ╨▒╤¢ΓÇö╨▒╤ƒΓé¼_╨▒╤¢┬ÿ╨▒╤¢┬╖╨▒╤¢ΓÇ£╨▒╤¢┬╢_╨▒╤¢┬ÿ╨▒╤ƒ╨â╨▒╤¢╤ƒ╨▒╤¢┬╢_╨▒╤¢┬º╨▒╤¢╤ƒ╨▒╤¢ΓÇö╨▒╤¢┬╢_╨▒╤¢┬ÿ╨▒╤¢┬╖╨▒╤¢╤Æ╨▒╤¢┬╗╨▒╤¢ΓÇ£╨▒╤¢┬╢_╨▒╤¢╨é╨▒╤¢╨é╨▒╤ƒΓÇÖ╨▒╤¢╨é╨▒╤¢╨ë╨▒╤¢┬╢_╨▒╤¢╤ƒ╨▒╤¢╤æ╨▒╤¢ ╨▒╤¢┬╢_╨▒╤¢╨é╨▒╤¢ΓÇ░╨▒╤ƒΓÇÖ╨▒╤¢ΓÇ░╨▒╤¢┬╢_╨▒╤¢╨Å╨▒╤¢┬╗╨▒╤¢ΓÇ║╨▒╤¢┬╢_╨▒╤¢╤Ü╨▒╤¢┬╖╨▒╤¢ΓÇª╨▒╤ƒΓÇÖ╨▒╤¢ΓÇá╨▒╤¢┬╖╨▒╤¢╨é╨▒╤¢┬╢_╨▒╤¢ΓÇÖ╨▒╤ƒΓÇÖ╨▒╤¢ΓÇ£╨▒╤¢╤ÿ'.split('_'),
        monthsShort: '╨▒╤¢┬ÿ╨▒╤¢╨é╨▒╤¢╤Ö╨▒╤¢┬╢_╨▒╤¢╨é╨▒╤¢┬╗╨▒╤¢┬ÿ╨▒╤ƒΓÇÖ╨▒╤¢ΓÇö╨▒╤ƒΓé¼_╨▒╤¢┬ÿ╨▒╤¢┬╖╨▒╤¢ΓÇ£╨▒╤¢┬╢_╨▒╤¢┬ÿ╨▒╤ƒ╨â╨▒╤¢╤ƒ╨▒╤¢┬╢_╨▒╤¢┬º╨▒╤¢╤ƒ╨▒╤¢ΓÇö╨▒╤¢┬╢_╨▒╤¢┬ÿ╨▒╤¢┬╖╨▒╤¢╤Æ╨▒╤¢┬╗╨▒╤¢ΓÇ£╨▒╤¢┬╢_╨▒╤¢╨é╨▒╤¢╨é╨▒╤ƒΓÇÖ╨▒╤¢╨é╨▒╤¢╨ë╨▒╤¢┬╢_╨▒╤¢╤ƒ╨▒╤¢╤æ╨▒╤¢ ╨▒╤¢┬╢_╨▒╤¢╨é╨▒╤¢ΓÇ░╨▒╤ƒΓÇÖ╨▒╤¢ΓÇ░╨▒╤¢┬╢_╨▒╤¢╨Å╨▒╤¢┬╗╨▒╤¢ΓÇ║╨▒╤¢┬╢_╨▒╤¢╤Ü╨▒╤¢┬╖╨▒╤¢ΓÇª╨▒╤ƒΓÇÖ╨▒╤¢ΓÇá╨▒╤¢┬╖╨▒╤¢╨é╨▒╤¢┬╢_╨▒╤¢ΓÇÖ╨▒╤ƒΓÇÖ╨▒╤¢ΓÇ£╨▒╤¢╤ÿ'.split('_'),
        weekdays: '╨▒╤¢╤₧╨▒╤¢┬╢╨▒╤¢ΓÇÿ╨▒╤¢┬╖╨▒╤¢╨Å╨▒╤ƒΓÇÖ╨▒╤¢Γäó_╨▒╤¢ΓÇª╨▒╤ƒ╤Æ╨▒╤¢ΓÇ£╨▒╤ƒΓÇÖ╨▒╤¢ΓÇÿ_╨▒╤¢╤₧╨▒╤¢ΓÇ₧╨▒╤ƒΓÇÖ╨▒╤¢ΓÇÜ╨▒╤¢┬╢╨▒╤¢╤Ö_╨▒╤¢ΓÇô╨▒╤¢┬╗╨▒╤¢ΓÇÖ_╨▒╤¢ΓÇô╨▒╤ƒΓÇÖ╨▒╤¢╤Ö╨▒╤¢ ╨▒╤¢╤ƒ╨▒╤ƒΓÇÖ╨▒╤¢ΓÇ¥╨▒╤¢╨Å╨▒╤¢┬╖╨▒╤ƒ╨î_╨▒╤¢╤ƒ╨▒╤¢┬╗╨▒╤¢╨é╨▒╤ƒΓÇÖ╨▒╤¢╤Ö_╨▒╤¢╤ƒ╨▒╤ƒΓÇª╨▒╤¢╤Ö╨▒╤ƒ╨î'.split('_'),
        weekdaysShort: '╨▒╤¢╤₧╨▒╤¢┬╢╨▒╤¢ΓÇÿ╨▒╤¢┬╖╨▒╤¢╨Å╨▒╤ƒΓÇÖ╨▒╤¢Γäó_╨▒╤¢ΓÇª╨▒╤ƒ╤Æ╨▒╤¢ΓÇ£╨▒╤ƒΓÇÖ╨▒╤¢ΓÇÿ_╨▒╤¢╤₧╨▒╤¢ΓÇ₧╨▒╤ƒΓÇÖ╨▒╤¢ΓÇÜ╨▒╤¢┬╢╨▒╤¢╤Ö_╨▒╤¢ΓÇô╨▒╤¢┬╗╨▒╤¢ΓÇÖ_╨▒╤¢ΓÇô╨▒╤ƒΓÇÖ╨▒╤¢╤Ö╨▒╤¢ ╨▒╤¢╤ƒ╨▒╤ƒΓÇÖ╨▒╤¢ΓÇ¥╨▒╤¢╨Å╨▒╤¢┬╖╨▒╤ƒ╨î_╨▒╤¢╤ƒ╨▒╤¢┬╗╨▒╤¢╨é╨▒╤ƒΓÇÖ╨▒╤¢╤Ö_╨▒╤¢╤ƒ╨▒╤ƒΓÇª╨▒╤¢╤Ö╨▒╤ƒ╨î'.split('_'),
        weekdaysMin: '╨▒╤¢╤₧╨▒╤¢┬╢╨▒╤¢ΓÇÿ╨▒╤¢┬╖╨▒╤¢╨Å╨▒╤ƒΓÇÖ╨▒╤¢Γäó_╨▒╤¢ΓÇª╨▒╤ƒ╤Æ╨▒╤¢ΓÇ£╨▒╤ƒΓÇÖ╨▒╤¢ΓÇÿ_╨▒╤¢╤₧╨▒╤¢ΓÇ₧╨▒╤ƒΓÇÖ╨▒╤¢ΓÇÜ╨▒╤¢┬╢╨▒╤¢╤Ö_╨▒╤¢ΓÇô╨▒╤¢┬╗╨▒╤¢ΓÇÖ_╨▒╤¢ΓÇô╨▒╤ƒΓÇÖ╨▒╤¢╤Ö╨▒╤¢ ╨▒╤¢╤ƒ╨▒╤ƒΓÇÖ╨▒╤¢ΓÇ¥╨▒╤¢╨Å╨▒╤¢┬╖╨▒╤ƒ╨î_╨▒╤¢╤ƒ╨▒╤¢┬╗╨▒╤¢╨é╨▒╤ƒΓÇÖ╨▒╤¢╤Ö_╨▒╤¢╤ƒ╨▒╤ƒΓÇª╨▒╤¢╤Ö╨▒╤ƒ╨î'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS : 'LT:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY LT',
            LLLL: 'dddd, D MMMM YYYY LT'
        },
        calendar: {
            sameDay: '[╨▒╤¢╤Æ╨▒╤ƒΓÇÖ╨▒╤¢ΓÇ₧╨▒╤ƒ╤ô╨▒╤¢ΓÇ£╨▒╤ƒΓé¼ ╨▒╤¢┬ÿ╨▒╤ƒΓÇ░╨▒╤ƒΓÇ₧╨▒╤¢ΓÇ₧] LT',
            nextDay: '[╨▒╤¢╤ƒ╨▒╤ƒΓÇÖ╨▒╤¢╤₧╨▒╤ƒΓÇÜ╨▒╤¢╨é ╨▒╤¢┬ÿ╨▒╤ƒΓÇ░╨▒╤ƒΓÇ₧╨▒╤¢ΓÇ₧] LT',
            nextWeek: 'dddd [╨▒╤¢┬ÿ╨▒╤ƒΓÇ░╨▒╤ƒΓÇ₧╨▒╤¢ΓÇ₧] LT',
            lastDay: '[╨▒╤¢┬ÿ╨▒╤ƒΓÇÖ╨▒╤¢╤ƒ╨▒╤¢┬╖╨▒╤¢ΓÇ║╨▒╤¢┬ÿ╨▒╤¢┬╖╨▒╤¢ΓÇ░ ╨▒╤¢┬ÿ╨▒╤ƒΓÇ░╨▒╤ƒΓÇ₧╨▒╤¢ΓÇ₧] LT',
            lastWeek: 'dddd [╨▒╤¢╤ƒ╨▒╤¢ΓÇ¥╨▒╤ƒΓÇÖ╨▒╤¢╨Å╨▒╤¢┬╢╨▒╤¢ ╨▒╤ƒ╨î╨▒╤¢┬ÿ╨▒╤¢┬╗╨▒╤¢ΓÇ£] [╨▒╤¢┬ÿ╨▒╤ƒΓÇ░╨▒╤ƒΓÇ₧╨▒╤¢ΓÇ₧] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s╨▒╤¢ΓÇÿ╨▒╤ƒ╨é╨▒╤¢╨Å',
            past: '%s╨▒╤¢┬ÿ╨▒╤¢┬╗╨▒╤¢ΓÇ£',
            s: '╨▒╤¢ΓÇ¥╨▒╤ƒΓÇ░╨▒╤¢┬╗╨▒╤¢ΓÇ£╨▒╤ƒΓÇÖ╨▒╤¢┬ÿ╨▒╤¢┬╢╨▒╤¢ΓÇ£╨▒╤¢╤Ü╨▒╤¢┬╖╨▒╤¢ΓÇ£╨▒╤¢┬╢╨▒╤¢ΓÇÿ╨▒╤¢╤æ',
            m: '╨▒╤¢┬ÿ╨▒╤¢╨à╨▒╤¢Γäó╨▒╤¢ΓÇ£╨▒╤¢┬╢╨▒╤¢ΓÇÿ╨▒╤¢╤æ',
            mm: '%d ╨▒╤¢ΓÇ£╨▒╤¢┬╢╨▒╤¢ΓÇÿ╨▒╤¢╤æ',
            h: '╨▒╤¢┬ÿ╨▒╤¢╨à╨▒╤¢Γäó╨▒╤¢┬ÿ╨▒╤ƒΓÇ░╨▒╤ƒΓÇ₧╨▒╤¢ΓÇ₧',
            hh: '%d ╨▒╤¢┬ÿ╨▒╤ƒΓÇ░╨▒╤ƒΓÇ₧╨▒╤¢ΓÇ₧',
            d: '╨▒╤¢┬ÿ╨▒╤¢╨à╨▒╤¢Γäó╨▒╤¢╤Æ╨▒╤ƒΓÇÖ╨▒╤¢ΓÇ₧╨▒╤ƒ╤ô',
            dd: '%d ╨▒╤¢╤Æ╨▒╤ƒΓÇÖ╨▒╤¢ΓÇ₧╨▒╤ƒ╤ô',
            M: '╨▒╤¢┬ÿ╨▒╤¢╨à╨▒╤¢Γäó╨▒╤¢╨â╨▒╤ƒΓÇÜ',
            MM: '%d ╨▒╤¢╨â╨▒╤ƒΓÇÜ',
            y: '╨▒╤¢┬ÿ╨▒╤¢╨à╨▒╤¢Γäó╨▒╤¢ΓÇá╨▒╤ƒΓÇÖ╨▒╤¢ΓÇ£╨▒╤¢┬╢╨▒╤ƒΓÇá',
            yy: '%d ╨▒╤¢ΓÇá╨▒╤ƒΓÇÖ╨▒╤¢ΓÇ£╨▒╤¢┬╢╨▒╤ƒΓÇá'
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : korean (ko)
//
// authors
//
// - Kyungwook, Park : https://github.com/kyungw00k
// - Jeeeyul Lee <jeeeyul@gmail.com>
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('ko', {
        months : '1╨╝ΓÇ║ΓÇ¥_2╨╝ΓÇ║ΓÇ¥_3╨╝ΓÇ║ΓÇ¥_4╨╝ΓÇ║ΓÇ¥_5╨╝ΓÇ║ΓÇ¥_6╨╝ΓÇ║ΓÇ¥_7╨╝ΓÇ║ΓÇ¥_8╨╝ΓÇ║ΓÇ¥_9╨╝ΓÇ║ΓÇ¥_10╨╝ΓÇ║ΓÇ¥_11╨╝ΓÇ║ΓÇ¥_12╨╝ΓÇ║ΓÇ¥'.split('_'),
        monthsShort : '1╨╝ΓÇ║ΓÇ¥_2╨╝ΓÇ║ΓÇ¥_3╨╝ΓÇ║ΓÇ¥_4╨╝ΓÇ║ΓÇ¥_5╨╝ΓÇ║ΓÇ¥_6╨╝ΓÇ║ΓÇ¥_7╨╝ΓÇ║ΓÇ¥_8╨╝ΓÇ║ΓÇ¥_9╨╝ΓÇ║ΓÇ¥_10╨╝ΓÇ║ΓÇ¥_11╨╝ΓÇ║ΓÇ¥_12╨╝ΓÇ║ΓÇ¥'.split('_'),
        weekdays : '╨╝╤£╤ÿ╨╝╤ÖΓÇ¥╨╝╤£╤ÿ_╨╝ΓÇ║ΓÇ¥╨╝╤ÖΓÇ¥╨╝╤£╤ÿ_╨╜ΓäóΓÇ¥╨╝╤ÖΓÇ¥╨╝╤£╤ÿ_╨╝Γé¼┬ÿ╨╝╤ÖΓÇ¥╨╝╤£╤ÿ_╨╗╨ä┬⌐╨╝╤ÖΓÇ¥╨╝╤£╤ÿ_╨║╤æΓé¼╨╝╤ÖΓÇ¥╨╝╤£╤ÿ_╨╜ΓÇá ╨╝╤ÖΓÇ¥╨╝╤£╤ÿ'.split('_'),
        weekdaysShort : '╨╝╤£╤ÿ_╨╝ΓÇ║ΓÇ¥_╨╜ΓäóΓÇ¥_╨╝Γé¼┬ÿ_╨╗╨ä┬⌐_╨║╤æΓé¼_╨╜ΓÇá '.split('_'),
        weekdaysMin : '╨╝╤£╤ÿ_╨╝ΓÇ║ΓÇ¥_╨╜ΓäóΓÇ¥_╨╝Γé¼┬ÿ_╨╗╨ä┬⌐_╨║╤æΓé¼_╨╜ΓÇá '.split('_'),
        longDateFormat : {
            LT : 'A h╨╝ΓÇ╣╤Ü m╨╗┬╢ΓÇ₧',
            LTS : 'A h╨╝ΓÇ╣╤Ü m╨╗┬╢ΓÇ₧ s╨╝╥æΓé¼',
            L : 'YYYY.MM.DD',
            LL : 'YYYY╨╗ΓÇªΓÇ₧ MMMM D╨╝╤£╤ÿ',
            LLL : 'YYYY╨╗ΓÇªΓÇ₧ MMMM D╨╝╤£╤ÿ LT',
            LLLL : 'YYYY╨╗ΓÇªΓÇ₧ MMMM D╨╝╤£╤ÿ dddd LT'
        },
        calendar : {
            sameDay : '╨╝┬ÿ┬ñ╨╗╨ë┬ÿ LT',
            nextDay : '╨╗ΓÇÜ╥æ╨╝╤£╤ÿ LT',
            nextWeek : 'dddd LT',
            lastDay : '╨╝ΓÇô╥æ╨╝ ╤Ü LT',
            lastWeek : '╨╝┬º╨é╨╗ΓÇÜ╤Ü╨╝╨ê╤ÿ dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ╨╜ΓÇ║ΓÇ₧',
            past : '%s ╨╝ ΓÇ₧',
            s : '╨╗╨äΓÇí╨╝╥æΓé¼',
            ss : '%d╨╝╥æΓé¼',
            m : '╨╝╤£╤ÿ╨╗┬╢ΓÇ₧',
            mm : '%d╨╗┬╢ΓÇ₧',
            h : '╨╜ΓÇó╤Ü╨╝ΓÇ╣╤Ü╨║┬░ΓÇ₧',
            hh : '%d╨╝ΓÇ╣╤Ü╨║┬░ΓÇ₧',
            d : '╨╜ΓÇó┬ÿ╨╗╨ê╨ü',
            dd : '%d╨╝╤£╤ÿ',
            M : '╨╜ΓÇó╤Ü╨╗ΓÇ╣┬¼',
            MM : '%d╨╗ΓÇ╣┬¼',
            y : '╨╝╤£╤ÿ╨╗ΓÇªΓÇ₧',
            yy : '%d╨╗ΓÇªΓÇ₧'
        },
        ordinalParse : /\d{1,2}╨╝╤£╤ÿ/,
        ordinal : '%d╨╝╤£╤ÿ',
        meridiemParse : /╨╝┬ÿ┬ñ╨╝ ΓÇ₧|╨╝┬ÿ┬ñ╨╜ΓÇ║ΓÇ₧/,
        isPM : function (token) {
            return token === '╨╝┬ÿ┬ñ╨╜ΓÇ║ΓÇ₧';
        },
        meridiem : function (hour, minute, isUpper) {
            return hour < 12 ? '╨╝┬ÿ┬ñ╨╝ ΓÇ₧' : '╨╝┬ÿ┬ñ╨╜ΓÇ║ΓÇ₧';
        }
    });
}));

// moment.js locale configuration
// locale : Luxembourgish (lb)
// author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz

// Note: Luxembourgish has a very particular phonological rule ('Eifeler Regel') that causes the
// deletion of the final 'n' in certain contexts. That's what the 'eifelerRegelAppliesToWeekday'
// and 'eifelerRegelAppliesToNumber' methods are meant for

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eng Minutt', 'enger Minutt'],
            'h': ['eng Stonn', 'enger Stonn'],
            'd': ['een Dag', 'engem Dag'],
            'M': ['ee Mount', 'engem Mount'],
            'y': ['ee Joer', 'engem Joer']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    function processFutureTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'a ' + string;
        }
        return 'an ' + string;
    }

    function processPastTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'viru ' + string;
        }
        return 'virun ' + string;
    }

    /**
     * Returns true if the word before the given number loses the '-n' ending.
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
     *
     * @param number {integer}
     * @returns {boolean}
     */
    function eifelerRegelAppliesToNumber(number) {
        number = parseInt(number, 10);
        if (isNaN(number)) {
            return false;
        }
        if (number < 0) {
            // Negative Number --> always true
            return true;
        } else if (number < 10) {
            // Only 1 digit
            if (4 <= number && number <= 7) {
                return true;
            }
            return false;
        } else if (number < 100) {
            // 2 digits
            var lastDigit = number % 10, firstDigit = number / 10;
            if (lastDigit === 0) {
                return eifelerRegelAppliesToNumber(firstDigit);
            }
            return eifelerRegelAppliesToNumber(lastDigit);
        } else if (number < 10000) {
            // 3 or 4 digits --> recursively check first digit
            while (number >= 10) {
                number = number / 10;
            }
            return eifelerRegelAppliesToNumber(number);
        } else {
            // Anything larger than 4 digits: recursively check first n-3 digits
            number = number / 1000;
            return eifelerRegelAppliesToNumber(number);
        }
    }

    return moment.defineLocale('lb', {
        months: 'Januar_Februar_M╨ô┬ñerz_Abr╨ô┬½ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        weekdays: 'Sonndeg_M╨ô┬⌐indeg_D╨ô┬½nschdeg_M╨ô┬½ttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._M╨ô┬⌐._D╨ô┬½._M╨ô┬½._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_M╨ô┬⌐_D╨ô┬½_M╨ô┬½_Do_Fr_Sa'.split('_'),
        longDateFormat: {
            LT: 'H:mm [Auer]',
            LTS: 'H:mm:ss [Auer]',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY LT',
            LLLL: 'dddd, D. MMMM YYYY LT'
        },
        calendar: {
            sameDay: '[Haut um] LT',
            sameElse: 'L',
            nextDay: '[Muer um] LT',
            nextWeek: 'dddd [um] LT',
            lastDay: '[G╨ô┬½schter um] LT',
            lastWeek: function () {
                // Different date string for 'D╨ô┬½nschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
                switch (this.day()) {
                    case 2:
                    case 4:
                        return '[Leschten] dddd [um] LT';
                    default:
                        return '[Leschte] dddd [um] LT';
                }
            }
        },
        relativeTime : {
            future : processFutureTime,
            past : processPastTime,
            s : 'e puer Sekonnen',
            m : processRelativeTime,
            mm : '%d Minutten',
            h : processRelativeTime,
            hh : '%d Stonnen',
            d : processRelativeTime,
            dd : '%d Deeg',
            M : processRelativeTime,
            MM : '%d M╨ô┬⌐int',
            y : processRelativeTime,
            yy : '%d Joer'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Lithuanian (lt)
// author : Mindaugas Moz╨ò┬½ras : https://github.com/mmozuras

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var units = {
        'm' : 'minut╨öΓÇö_minut╨öΓÇös_minut╨öΓäó',
        'mm': 'minut╨öΓÇös_minu╨ö╨îi╨ò╤û_minutes',
        'h' : 'valanda_valandos_valand╨öΓÇª',
        'hh': 'valandos_valand╨ò╤û_valandas',
        'd' : 'diena_dienos_dien╨öΓÇª',
        'dd': 'dienos_dien╨ò╤û_dienas',
        'M' : 'm╨öΓÇönuo_m╨öΓÇönesio_m╨öΓÇönes╨ö╨ç',
        'MM': 'm╨öΓÇönesiai_m╨öΓÇönesi╨ò╤û_m╨öΓÇönesius',
        'y' : 'metai_met╨ò╤û_metus',
        'yy': 'metai_met╨ò╤û_metus'
    },
    weekDays = 'sekmadienis_pirmadienis_antradienis_tre╨ö╨îiadienis_ketvirtadienis_penktadienis_╨ò╨Äe╨ò╨Ätadienis'.split('_');

    function translateSeconds(number, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
            return 'kelios sekund╨öΓÇös';
        } else {
            return isFuture ? 'keli╨ò╤û sekund╨ò╤òi╨ò╤û' : 'kelias sekundes';
        }
    }

    function translateSingular(number, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
    }

    function special(number) {
        return number % 10 === 0 || (number > 10 && number < 20);
    }

    function forms(key) {
        return units[key].split('_');
    }

    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        if (number === 1) {
            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
        } else if (withoutSuffix) {
            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
        } else {
            if (isFuture) {
                return result + forms(key)[1];
            } else {
                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
            }
        }
    }

    function relativeWeekDay(moment, format) {
        var nominative = format.indexOf('dddd HH:mm') === -1,
            weekDay = weekDays[moment.day()];

        return nominative ? weekDay : weekDay.substring(0, weekDay.length - 2) + '╨ö╨ç';
    }

    return moment.defineLocale('lt', {
        months : 'sausio_vasario_kovo_baland╨ò╤òio_gegu╨ò╤ò╨öΓÇös_bir╨ò╤òelio_liepos_rugpj╨ò┬½╨ö╨îio_rugs╨öΓÇöjo_spalio_lapkri╨ö╨îio_gruod╨ò╤òio'.split('_'),
        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays : relativeWeekDay,
        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_╨ò e╨ò╨Ä'.split('_'),
        weekdaysMin : 'S_P_A_T_K_Pn_╨ò '.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY [m.] MMMM D [d.]',
            LLL : 'YYYY [m.] MMMM D [d.], LT [val.]',
            LLLL : 'YYYY [m.] MMMM D [d.], dddd, LT [val.]',
            l : 'YYYY-MM-DD',
            ll : 'YYYY [m.] MMMM D [d.]',
            lll : 'YYYY [m.] MMMM D [d.], LT [val.]',
            llll : 'YYYY [m.] MMMM D [d.], ddd, LT [val.]'
        },
        calendar : {
            sameDay : '[╨ò iandien] LT',
            nextDay : '[Rytoj] LT',
            nextWeek : 'dddd LT',
            lastDay : '[Vakar] LT',
            lastWeek : '[Pra╨öΓÇöjus╨ö╨ç] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'po %s',
            past : 'prie╨ò╨Ä %s',
            s : translateSeconds,
            m : translateSingular,
            mm : translate,
            h : translateSingular,
            hh : translate,
            d : translateSingular,
            dd : translate,
            M : translateSingular,
            MM : translate,
            y : translateSingular,
            yy : translate
        },
        ordinalParse: /\d{1,2}-oji/,
        ordinal : function (number) {
            return number + '-oji';
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : latvian (lv)
// author : Kristaps Karlsons : https://github.com/skakri

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var units = {
        'mm': 'min╨ò┬½ti_min╨ò┬½tes_min╨ò┬½te_min╨ò┬½tes',
        'hh': 'stundu_stundas_stunda_stundas',
        'dd': 'dienu_dienas_diena_dienas',
        'MM': 'm╨öΓÇ£nesi_m╨öΓÇ£ne╨ò╨Äus_m╨öΓÇ£nesis_m╨öΓÇ£ne╨ò╨Äi',
        'yy': 'gadu_gadus_gads_gadi'
    };

    function format(word, number, withoutSuffix) {
        var forms = word.split('_');
        if (withoutSuffix) {
            return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
        } else {
            return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
        }
    }

    function relativeTimeWithPlural(number, withoutSuffix, key) {
        return number + ' ' + format(units[key], number, withoutSuffix);
    }

    return moment.defineLocale('lv', {
        months : 'janv╨ö╨âris_febru╨ö╨âris_marts_apr╨ö┬½lis_maijs_j╨ò┬½nijs_j╨ò┬½lijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_j╨ò┬½n_j╨ò┬½l_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'sv╨öΓÇ£tdiena_pirmdiena_otrdiena_tre╨ò╨Ädiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'YYYY. [gada] D. MMMM',
            LLL : 'YYYY. [gada] D. MMMM, LT',
            LLLL : 'YYYY. [gada] D. MMMM, dddd, LT'
        },
        calendar : {
            sameDay : '[╨ò odien pulksten] LT',
            nextDay : '[R╨ö┬½t pulksten] LT',
            nextWeek : 'dddd [pulksten] LT',
            lastDay : '[Vakar pulksten] LT',
            lastWeek : '[Pag╨ö╨âju╨ò╨Ä╨ö╨â] dddd [pulksten] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s v╨öΓÇ£l╨ö╨âk',
            past : '%s agr╨ö╨âk',
            s : 'da╨ò╤òas sekundes',
            m : 'min╨ò┬½ti',
            mm : relativeTimeWithPlural,
            h : 'stundu',
            hh : relativeTimeWithPlural,
            d : 'dienu',
            dd : relativeTimeWithPlural,
            M : 'm╨öΓÇ£nesi',
            MM : relativeTimeWithPlural,
            y : 'gadu',
            yy : relativeTimeWithPlural
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : macedonian (mk)
// author : Borislav Mickov : https://github.com/B0k0

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('mk', {
        months : '╨í┬ÿ╨á┬░╨á╨à╨í╤ô╨á┬░╨í╨é╨á╤æ_╨íΓÇ₧╨á┬╡╨á╨å╨í╨é╨í╤ô╨á┬░╨í╨é╨á╤æ_╨á╤ÿ╨á┬░╨í╨é╨íΓÇÜ_╨á┬░╨á╤ù╨í╨é╨á╤æ╨á┬╗_╨á╤ÿ╨á┬░╨í┬ÿ_╨í┬ÿ╨í╤ô╨á╨à╨á╤æ_╨í┬ÿ╨í╤ô╨á┬╗╨á╤æ_╨á┬░╨á╨å╨á╤û╨í╤ô╨í╨â╨íΓÇÜ_╨í╨â╨á┬╡╨á╤ù╨íΓÇÜ╨á┬╡╨á╤ÿ╨á╨å╨í╨é╨á╤æ_╨á╤ò╨á╤ö╨íΓÇÜ╨á╤ò╨á╤ÿ╨á╨å╨í╨é╨á╤æ_╨á╨à╨á╤ò╨á┬╡╨á╤ÿ╨á╨å╨í╨é╨á╤æ_╨á╥æ╨á┬╡╨á╤ö╨á┬╡╨á╤ÿ╨á╨å╨í╨é╨á╤æ'.split('_'),
        monthsShort : '╨í┬ÿ╨á┬░╨á╨à_╨íΓÇ₧╨á┬╡╨á╨å_╨á╤ÿ╨á┬░╨í╨é_╨á┬░╨á╤ù╨í╨é_╨á╤ÿ╨á┬░╨í┬ÿ_╨í┬ÿ╨í╤ô╨á╨à_╨í┬ÿ╨í╤ô╨á┬╗_╨á┬░╨á╨å╨á╤û_╨í╨â╨á┬╡╨á╤ù_╨á╤ò╨á╤ö╨íΓÇÜ_╨á╨à╨á╤ò╨á┬╡_╨á╥æ╨á┬╡╨á╤ö'.split('_'),
        weekdays : '╨á╨à╨á┬╡╨á╥æ╨á┬╡╨á┬╗╨á┬░_╨á╤ù╨á╤ò╨á╨à╨á┬╡╨á╥æ╨á┬╡╨á┬╗╨á╨à╨á╤æ╨á╤ö_╨á╨å╨íΓÇÜ╨á╤ò╨í╨é╨á╨à╨á╤æ╨á╤ö_╨í╨â╨í╨é╨á┬╡╨á╥æ╨á┬░_╨íΓÇí╨á┬╡╨íΓÇÜ╨á╨å╨í╨é╨íΓÇÜ╨á╤ò╨á╤ö_╨á╤ù╨á┬╡╨íΓÇÜ╨á╤ò╨á╤ö_╨í╨â╨á┬░╨á┬▒╨á╤ò╨íΓÇÜ╨á┬░'.split('_'),
        weekdaysShort : '╨á╨à╨á┬╡╨á╥æ_╨á╤ù╨á╤ò╨á╨à_╨á╨å╨íΓÇÜ╨á╤ò_╨í╨â╨í╨é╨á┬╡_╨íΓÇí╨á┬╡╨íΓÇÜ_╨á╤ù╨á┬╡╨íΓÇÜ_╨í╨â╨á┬░╨á┬▒'.split('_'),
        weekdaysMin : '╨á╨àe_╨á╤ùo_╨á╨å╨íΓÇÜ_╨í╨â╨í╨é_╨íΓÇí╨á┬╡_╨á╤ù╨á┬╡_╨í╨âa'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'LT:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
            sameDay : '[╨áΓÇ¥╨á┬╡╨á╨à╨á┬╡╨í╨â ╨á╨å╨á╤ò] LT',
            nextDay : '[╨á╨ê╨íΓÇÜ╨í╨é╨á┬╡ ╨á╨å╨á╤ò] LT',
            nextWeek : 'dddd [╨á╨å╨á╤ò] LT',
            lastDay : '[╨áΓÇÖ╨íΓÇí╨á┬╡╨í╨é╨á┬░ ╨á╨å╨á╤ò] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[╨áΓÇÖ╨á╤ò ╨á╤æ╨á┬╖╨á╤ÿ╨á╤æ╨á╨à╨á┬░╨íΓÇÜ╨á┬░╨íΓÇÜ╨á┬░] dddd [╨á╨å╨á╤ò] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[╨áΓÇÖ╨á╤ò ╨á╤æ╨á┬╖╨á╤ÿ╨á╤æ╨á╨à╨á┬░╨íΓÇÜ╨á╤æ╨á╤ò╨íΓÇÜ] dddd [╨á╨å╨á╤ò] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '╨á╤ù╨á╤ò╨í╨â╨á┬╗╨á┬╡ %s',
            past : '╨á╤ù╨í╨é╨á┬╡╨á╥æ %s',
            s : '╨á╨à╨á┬╡╨á╤ö╨á╤ò╨á┬╗╨á╤ö╨í╤ô ╨í╨â╨á┬╡╨á╤ö╨í╤ô╨á╨à╨á╥æ╨á╤æ',
            m : '╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨á┬░',
            mm : '%d ╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨á╤æ',
            h : '╨íΓÇí╨á┬░╨í╨â',
            hh : '%d ╨íΓÇí╨á┬░╨í╨â╨á┬░',
            d : '╨á╥æ╨á┬╡╨á╨à',
            dd : '%d ╨á╥æ╨á┬╡╨á╨à╨á┬░',
            M : '╨á╤ÿ╨á┬╡╨í╨â╨á┬╡╨íΓÇá',
            MM : '%d ╨á╤ÿ╨á┬╡╨í╨â╨á┬╡╨íΓÇá╨á╤æ',
            y : '╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨á┬░',
            yy : '%d ╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨á╤æ'
        },
        ordinalParse: /\d{1,2}-(╨á┬╡╨á╨å|╨á┬╡╨á╨à|╨íΓÇÜ╨á╤æ|╨á╨å╨á╤æ|╨í╨é╨á╤æ|╨á╤ÿ╨á╤æ)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-╨á┬╡╨á╨å';
            } else if (last2Digits === 0) {
                return number + '-╨á┬╡╨á╨à';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-╨íΓÇÜ╨á╤æ';
            } else if (lastDigit === 1) {
                return number + '-╨á╨å╨á╤æ';
            } else if (lastDigit === 2) {
                return number + '-╨í╨é╨á╤æ';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-╨á╤ÿ╨á╤æ';
            } else {
                return number + '-╨íΓÇÜ╨á╤æ';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : malayalam (ml)
// author : Floyd Pink : https://github.com/floydpink

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('ml', {
        months : '╨░╥æ╤Ü╨░╥æ╨ü╨░┬╡╨â╨░╥æ┬╡╨░╥æ┬░╨░╥æ╤ù_╨░╥æ┬½╨░┬╡ΓÇá╨░╥æ┬¼╨░┬╡╨î╨░╥æ┬░╨░┬╡╨â╨░╥æ┬╡╨░╥æ┬░╨░╥æ╤ù_╨░╥æ┬«╨░╥æ╤ò╨░┬╡╤ÿ╨░╥æ╤Ö╨░┬╡╨î╨░╥æ╤Ö╨░┬╡╨î_╨░╥æ╨Å╨░╥æ╨ä╨░┬╡╨î╨░╥æ┬░╨░╥æ╤ù╨░┬╡╨à_╨░╥æ┬«╨░┬╡ΓÇí╨░╥æ╨ç╨░┬╡╨î_╨░╥æ╤Ü╨░┬╡ΓÇÜ╨░┬╡╤ö_╨░╥æ╤Ü╨░┬╡ΓÇÜ╨░╥æ╨å╨░┬╡Γé¼_╨░╥æΓÇ£╨░╥æΓÇö╨░╥æ╤æ╨░┬╡╨î╨░╥æ┬▒╨░┬╡╨î╨░╥æ┬▒╨░┬╡╨î_╨░╥æ╤æ╨░┬╡ΓÇá╨░╥æ╨ä╨░┬╡╨î╨░╥æ┬▒╨░┬╡╨î╨░╥æ┬▒╨░╥æΓÇÜ╨░╥æ┬¼╨░┬╡╤ÿ_╨░╥æΓÇÖ╨░╥æΓÇó╨░┬╡╨î╨░╥æ╤ƒ╨░┬╡ΓÇ╣╨░╥æ┬¼╨░┬╡╤ÿ_╨░╥æ╨ü╨░╥æ┬╡╨░╥æΓÇÜ╨░╥æ┬¼╨░┬╡╤ÿ_╨░╥æ╨Ä╨░╥æ╤ù╨░╥æ╤æ╨░╥æΓÇÜ╨░╥æ┬¼╨░┬╡╤ÿ'.split('_'),
        monthsShort : '╨░╥æ╤Ü╨░╥æ╨ü╨░┬╡╨â._╨░╥æ┬½╨░┬╡ΓÇá╨░╥æ┬¼╨░┬╡╨î╨░╥æ┬░╨░┬╡╨â._╨░╥æ┬«╨░╥æ╤ò╨░┬╡╤ÿ._╨░╥æ╨Å╨░╥æ╨ä╨░┬╡╨î╨░╥æ┬░╨░╥æ╤ù._╨░╥æ┬«╨░┬╡ΓÇí╨░╥æ╨ç╨░┬╡╨î_╨░╥æ╤Ü╨░┬╡ΓÇÜ╨░┬╡╤ö_╨░╥æ╤Ü╨░┬╡ΓÇÜ╨░╥æ╨å╨░┬╡Γé¼._╨░╥æΓÇ£╨░╥æΓÇö._╨░╥æ╤æ╨░┬╡ΓÇá╨░╥æ╨ä╨░┬╡╨î╨░╥æ┬▒╨░┬╡╨î╨░╥æ┬▒._╨░╥æΓÇÖ╨░╥æΓÇó╨░┬╡╨î╨░╥æ╤ƒ╨░┬╡ΓÇ╣._╨░╥æ╨ü╨░╥æ┬╡╨░╥æΓÇÜ._╨░╥æ╨Ä╨░╥æ╤ù╨░╥æ╤æ╨░╥æΓÇÜ.'.split('_'),
        weekdays : '╨░╥æ╤¢╨░╥æ╤ò╨░╥æ╨ç╨░╥æ┬▒╨░╥æ╤ò╨░╥æ╥æ╨░┬╡╨î╨░╥æ╤Ö_╨░╥æ┬ñ╨░╥æ╤ù╨░╥æΓäó╨░┬╡╨î╨░╥æΓÇó╨░╥æ╤û╨░╥æ╤ò╨░╥æ╥æ╨░┬╡╨î╨░╥æ╤Ö_╨░╥æ╤Ö╨░┬╡╨ë╨░╥æ┬╡╨░┬╡╨î╨░╥æ┬╡╨░╥æ╤ò╨░╥æ╥æ╨░┬╡╨î╨░╥æ╤Ö_╨░╥æ┬¼╨░┬╡╨â╨░╥æ┬º╨░╥æ╨ü╨░╥æ╤ò╨░╥æ╥æ╨░┬╡╨î╨░╥æ╤Ö_╨░╥æ┬╡╨░┬╡╨î╨░╥æ╨ç╨░╥æ╤ò╨░╥æ╥æ╨░╥æ╤ò╨░╥æ╥æ╨░┬╡╨î╨░╥æ╤Ö_╨░╥æ┬╡╨░┬╡ΓÇá╨░╥æ╤û╨░┬╡╨î╨░╥æ╤û╨░╥æ╤ù╨░╥æ╨ç╨░╥æ╤ò╨░╥æ╥æ╨░┬╡╨î╨░╥æ╤Ö_╨░╥æ┬╢╨░╥æ╨ü╨░╥æ╤ù╨░╥æ╨ç╨░╥æ╤ò╨░╥æ╥æ╨░┬╡╨î╨░╥æ╤Ö'.split('_'),
        weekdaysShort : '╨░╥æ╤¢╨░╥æ╤ò╨░╥æ╨ç╨░┬╡╤ÿ_╨░╥æ┬ñ╨░╥æ╤ù╨░╥æΓäó╨░┬╡╨î╨░╥æΓÇó╨░┬╡╤ò_╨░╥æ╤Ö╨░┬╡╨ë╨░╥æ┬╡╨░┬╡╨î╨░╥æ┬╡_╨░╥æ┬¼╨░┬╡╨â╨░╥æ┬º╨░┬╡┬╗_╨░╥æ┬╡╨░┬╡╨î╨░╥æ╨ç╨░╥æ╤ò╨░╥æ╥æ╨░╥æΓÇÜ_╨░╥æ┬╡╨░┬╡ΓÇá╨░╥æ╤û╨░┬╡╨î╨░╥æ╤û╨░╥æ╤ù_╨░╥æ┬╢╨░╥æ╨ü╨░╥æ╤ù'.split('_'),
        weekdaysMin : '╨░╥æ╤¢╨░╥æ╤ò_╨░╥æ┬ñ╨░╥æ╤ù_╨░╥æ╤Ö╨░┬╡╨ë_╨░╥æ┬¼╨░┬╡╨â_╨░╥æ┬╡╨░┬╡╨î╨░╥æ╨ç╨░╥æ╤ò_╨░╥æ┬╡╨░┬╡ΓÇá_╨░╥æ┬╢'.split('_'),
        longDateFormat : {
            LT : 'A h:mm -╨░╥æ╨ü╨░┬╡╨â',
            LTS : 'A h:mm:ss -╨░╥æ╨ü╨░┬╡╨â',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, LT',
            LLLL : 'dddd, D MMMM YYYY, LT'
        },
        calendar : {
            sameDay : '[╨░╥æΓÇí╨░╥æ╨ü╨░┬╡╨î╨░╥æ╨ü╨░┬╡╨î] LT',
            nextDay : '[╨░╥æ╨ü╨░╥æ╤ò╨░╥æ╤û╨░┬╡ΓÇá] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[╨░╥æΓÇí╨░╥æ╨ü╨░┬╡╨î╨░╥æ╨ü╨░╥æ╨å╨░┬╡ΓÇá] LT',
            lastWeek : '[╨░╥æΓÇó╨░╥æ╥æ╨░╥æ╤ù╨░╥æ╤¢╨░┬╡╨î╨░╥æ╤¢] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ╨░╥æΓÇó╨░╥æ╥æ╨░╥æ╤ù╨░╥æ╤¢╨░┬╡╨î╨░╥æ╤¢╨░┬╡╨î',
            past : '%s ╨░╥æ┬«╨░┬╡╨â╨░┬╡┬╗╨░╥æ╨ä╨░┬╡╨î',
            s : '╨░╥æΓÇª╨░┬╡╨à╨░╥æ╨ä ╨░╥æ╨ü╨░╥æ╤ù╨░╥æ┬«╨░╥æ╤ù╨░╥æ┬╖╨░╥æΓäó╨░┬╡╨î╨░╥æΓäó╨░┬╡╤ò',
            m : '╨░╥æΓÇÖ╨░╥æ┬░╨░┬╡╨â ╨░╥æ┬«╨░╥æ╤ù╨░╥æ╨ü╨░╥æ╤ù╨░╥æ┬▒╨░┬╡╨î╨░╥æ┬▒╨░┬╡╨î',
            mm : '%d ╨░╥æ┬«╨░╥æ╤ù╨░╥æ╨ü╨░╥æ╤ù╨░╥æ┬▒╨░┬╡╨î╨░╥æ┬▒╨░┬╡╨î',
            h : '╨░╥æΓÇÖ╨░╥æ┬░╨░┬╡╨â ╨░╥æ┬«╨░╥æ╨ê╨░╥æ╤ù╨░╥æΓÇó╨░┬╡╨î╨░╥æΓÇó╨░┬╡ΓÇÜ╨░┬╡╤ÿ',
            hh : '%d ╨░╥æ┬«╨░╥æ╨ê╨░╥æ╤ù╨░╥æΓÇó╨░┬╡╨î╨░╥æΓÇó╨░┬╡ΓÇÜ╨░┬╡╤ÿ',
            d : '╨░╥æΓÇÖ╨░╥æ┬░╨░┬╡╨â ╨░╥æ┬ª╨░╥æ╤ù╨░╥æ┬╡╨░╥æ╤æ╨░╥æΓÇÜ',
            dd : '%d ╨░╥æ┬ª╨░╥æ╤ù╨░╥æ┬╡╨░╥æ╤æ╨░╥æΓÇÜ',
            M : '╨░╥æΓÇÖ╨░╥æ┬░╨░┬╡╨â ╨░╥æ┬«╨░╥æ╤ò╨░╥æ╤æ╨░╥æΓÇÜ',
            MM : '%d ╨░╥æ┬«╨░╥æ╤ò╨░╥æ╤æ╨░╥æΓÇÜ',
            y : '╨░╥æΓÇÖ╨░╥æ┬░╨░┬╡╨â ╨░╥æ┬╡╨░┬╡╤ÿ╨░╥æ┬╖╨░╥æΓÇÜ',
            yy : '%d ╨░╥æ┬╡╨░┬╡╤ÿ╨░╥æ┬╖╨░╥æΓÇÜ'
        },
        meridiemParse: /╨░╥æ┬░╨░╥æ╤ò╨░╥æ┬ñ╨░┬╡╨î╨░╥æ┬░╨░╥æ╤ù|╨░╥æ┬░╨░╥æ╤ò╨░╥æ┬╡╨░╥æ╤ù╨░╥æ╨å╨░┬╡ΓÇá|╨░╥æΓÇ░╨░╥æ╤Ö╨░┬╡╨î╨░╥æ╤Ö ╨░╥æΓÇó╨░╥æ╥æ╨░╥æ╤ù╨░╥æ╤¢╨░┬╡╨î╨░╥æ╤¢╨░┬╡╨î|╨░╥æ┬╡╨░┬╡Γé¼╨░╥æΓÇó╨░┬╡╨â╨░╥æ╨ü╨░┬╡╨î╨░╥æ╨ü╨░┬╡ΓÇí╨░╥æ┬░╨░╥æΓÇÜ|╨░╥æ┬░╨░╥æ╤ò╨░╥æ┬ñ╨░┬╡╨î╨░╥æ┬░╨░╥æ╤ù/i,
        isPM : function (input) {
            return /^(╨░╥æΓÇ░╨░╥æ╤Ö╨░┬╡╨î╨░╥æ╤Ö ╨░╥æΓÇó╨░╥æ╥æ╨░╥æ╤ù╨░╥æ╤¢╨░┬╡╨î╨░╥æ╤¢╨░┬╡╨î|╨░╥æ┬╡╨░┬╡Γé¼╨░╥æΓÇó╨░┬╡╨â╨░╥æ╨ü╨░┬╡╨î╨░╥æ╨ü╨░┬╡ΓÇí╨░╥æ┬░╨░╥æΓÇÜ|╨░╥æ┬░╨░╥æ╤ò╨░╥æ┬ñ╨░┬╡╨î╨░╥æ┬░╨░╥æ╤ù)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return '╨░╥æ┬░╨░╥æ╤ò╨░╥æ┬ñ╨░┬╡╨î╨░╥æ┬░╨░╥æ╤ù';
            } else if (hour < 12) {
                return '╨░╥æ┬░╨░╥æ╤ò╨░╥æ┬╡╨░╥æ╤ù╨░╥æ╨å╨░┬╡ΓÇá';
            } else if (hour < 17) {
                return '╨░╥æΓÇ░╨░╥æ╤Ö╨░┬╡╨î╨░╥æ╤Ö ╨░╥æΓÇó╨░╥æ╥æ╨░╥æ╤ù╨░╥æ╤¢╨░┬╡╨î╨░╥æ╤¢╨░┬╡╨î';
            } else if (hour < 20) {
                return '╨░╥æ┬╡╨░┬╡Γé¼╨░╥æΓÇó╨░┬╡╨â╨░╥æ╨ü╨░┬╡╨î╨░╥æ╨ü╨░┬╡ΓÇí╨░╥æ┬░╨░╥æΓÇÜ';
            } else {
                return '╨░╥æ┬░╨░╥æ╤ò╨░╥æ┬ñ╨░┬╡╨î╨░╥æ┬░╨░╥æ╤ù';
            }
        }
    });
}));

// moment.js locale configuration
// locale : Marathi (mr)
// author : Harshad Kale : https://github.com/kalehv

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var symbolMap = {
        '1': '╨░╥É┬º',
        '2': '╨░╥É╨ü',
        '3': '╨░╥É┬⌐',
        '4': '╨░╥É╨ä',
        '5': '╨░╥É┬½',
        '6': '╨░╥É┬¼',
        '7': '╨░╥É┬¡',
        '8': '╨░╥É┬«',
        '9': '╨░╥É╨ç',
        '0': '╨░╥É┬ª'
    },
    numberMap = {
        '╨░╥É┬º': '1',
        '╨░╥É╨ü': '2',
        '╨░╥É┬⌐': '3',
        '╨░╥É╨ä': '4',
        '╨░╥É┬½': '5',
        '╨░╥É┬¼': '6',
        '╨░╥É┬¡': '7',
        '╨░╥É┬«': '8',
        '╨░╥É╨ç': '9',
        '╨░╥É┬ª': '0'
    };

    return moment.defineLocale('mr', {
        months : '╨░┬ñ╤Ü╨░┬ñ╤ò╨░┬ñ╨ü╨░╥ÉΓÇí╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░╨░╥É╨é_╨░┬ñ┬½╨░╥ÉΓÇí╨░┬ñ┬¼╨░╥É╨î╨░┬ñ┬░╨░╥É╨â╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░╨░╥É╨é_╨░┬ñ┬«╨░┬ñ╤ò╨░┬ñ┬░╨░╥É╨î╨░┬ñ╤Ö_╨░┬ñ╨Å╨░┬ñ╨ä╨░╥É╨î╨░┬ñ┬░╨░┬ñ╤ù╨░┬ñ╨å_╨░┬ñ┬«╨░╥ÉΓÇí_╨░┬ñ╤Ü╨░╥ÉΓÇÜ╨░┬ñ╨ü_╨░┬ñ╤Ü╨░╥É╨â╨░┬ñ╨å╨░╥ÉΓé¼_╨░┬ñΓÇÿ╨░┬ñΓÇö╨░┬ñ╤æ╨░╥É╨î╨░┬ñ╤ƒ_╨░┬ñ╤æ╨░┬ñ╨ä╨░╥É╨î╨░┬ñ╤ƒ╨░╥ÉΓÇí╨░┬ñΓÇÜ╨░┬ñ┬¼╨░┬ñ┬░_╨░┬ñΓÇÿ╨░┬ñΓÇó╨░╥É╨î╨░┬ñ╤ƒ╨░╥ÉΓÇ╣╨░┬ñ┬¼╨░┬ñ┬░_╨░┬ñ╨ü╨░╥ÉΓÇ╣╨░┬ñ┬╡╨░╥É╨î╨░┬ñΓäû╨░╥ÉΓÇí╨░┬ñΓÇÜ╨░┬ñ┬¼╨░┬ñ┬░_╨░┬ñ╨Ä╨░┬ñ╤ù╨░┬ñ╤æ╨░╥ÉΓÇí╨░┬ñΓÇÜ╨░┬ñ┬¼╨░┬ñ┬░'.split('_'),
        monthsShort: '╨░┬ñ╤Ü╨░┬ñ╤ò╨░┬ñ╨ü╨░╥ÉΓÇí._╨░┬ñ┬½╨░╥ÉΓÇí╨░┬ñ┬¼╨░╥É╨î╨░┬ñ┬░╨░╥É╨â._╨░┬ñ┬«╨░┬ñ╤ò╨░┬ñ┬░╨░╥É╨î╨░┬ñ╤Ö._╨░┬ñ╨Å╨░┬ñ╨ä╨░╥É╨î╨░┬ñ┬░╨░┬ñ╤ù._╨░┬ñ┬«╨░╥ÉΓÇí._╨░┬ñ╤Ü╨░╥ÉΓÇÜ╨░┬ñ╨ü._╨░┬ñ╤Ü╨░╥É╨â╨░┬ñ╨å╨░╥ÉΓé¼._╨░┬ñΓÇÿ╨░┬ñΓÇö._╨░┬ñ╤æ╨░┬ñ╨ä╨░╥É╨î╨░┬ñ╤ƒ╨░╥ÉΓÇí╨░┬ñΓÇÜ._╨░┬ñΓÇÿ╨░┬ñΓÇó╨░╥É╨î╨░┬ñ╤ƒ╨░╥ÉΓÇ╣._╨░┬ñ╨ü╨░╥ÉΓÇ╣╨░┬ñ┬╡╨░╥É╨î╨░┬ñΓäû╨░╥ÉΓÇí╨░┬ñΓÇÜ._╨░┬ñ╨Ä╨░┬ñ╤ù╨░┬ñ╤æ╨░╥ÉΓÇí╨░┬ñΓÇÜ.'.split('_'),
        weekdays : '╨░┬ñ┬░╨░┬ñ┬╡╨░┬ñ╤ù╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ╤æ╨░╥ÉΓÇ╣╨░┬ñ┬«╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬«╨░┬ñΓÇÜ╨░┬ñΓÇö╨░┬ñ╤û╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬¼╨░╥É╨â╨░┬ñ┬º╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñΓÇö╨░╥É╨â╨░┬ñ┬░╨░╥ÉΓÇÜ╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬╢╨░╥É╨â╨░┬ñΓÇó╨░╥É╨î╨░┬ñ┬░╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬╢╨░┬ñ╨ü╨░┬ñ╤ù╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ┬░'.split('_'),
        weekdaysShort : '╨░┬ñ┬░╨░┬ñ┬╡╨░┬ñ╤ù_╨░┬ñ╤æ╨░╥ÉΓÇ╣╨░┬ñ┬«_╨░┬ñ┬«╨░┬ñΓÇÜ╨░┬ñΓÇö╨░┬ñ╤û_╨░┬ñ┬¼╨░╥É╨â╨░┬ñ┬º_╨░┬ñΓÇö╨░╥É╨â╨░┬ñ┬░╨░╥ÉΓÇÜ_╨░┬ñ┬╢╨░╥É╨â╨░┬ñΓÇó╨░╥É╨î╨░┬ñ┬░_╨░┬ñ┬╢╨░┬ñ╨ü╨░┬ñ╤ù'.split('_'),
        weekdaysMin : '╨░┬ñ┬░_╨░┬ñ╤æ╨░╥ÉΓÇ╣_╨░┬ñ┬«╨░┬ñΓÇÜ_╨░┬ñ┬¼╨░╥É╨â_╨░┬ñΓÇö╨░╥É╨â_╨░┬ñ┬╢╨░╥É╨â_╨░┬ñ┬╢'.split('_'),
        longDateFormat : {
            LT : 'A h:mm ╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ╤Ü╨░┬ñ┬ñ╨░┬ñ╤ò',
            LTS : 'A h:mm:ss ╨░┬ñ┬╡╨░┬ñ╤ò╨░┬ñ╤Ü╨░┬ñ┬ñ╨░┬ñ╤ò',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, LT',
            LLLL : 'dddd, D MMMM YYYY, LT'
        },
        calendar : {
            sameDay : '[╨░┬ñΓÇá╨░┬ñ╤Ü] LT',
            nextDay : '[╨░┬ñΓÇ░╨░┬ñ┬ª╨░╥É╨î╨░┬ñ╨ç╨░┬ñ╤ò] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[╨░┬ñΓÇó╨░┬ñ╤ò╨░┬ñ╨å] LT',
            lastWeek: '[╨░┬ñ┬«╨░┬ñ╤ò╨░┬ñΓÇö╨░╥É╨é╨░┬ñ╨å] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ╨░┬ñ╨ü╨░┬ñΓÇÜ╨░┬ñ┬ñ╨░┬ñ┬░',
            past : '%s ╨░┬ñ╨ä╨░╥ÉΓÇÜ╨░┬ñ┬░╨░╥É╨î╨░┬ñ┬╡╨░╥É╨é',
            s : '╨░┬ñ╤æ╨░╥ÉΓÇí╨░┬ñΓÇó╨░┬ñΓÇÜ╨░┬ñ┬ª',
            m: '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬«╨░┬ñ╤ù╨░┬ñ╨ü╨░┬ñ╤ù╨░┬ñ╤ƒ',
            mm: '%d ╨░┬ñ┬«╨░┬ñ╤ù╨░┬ñ╨ü╨░┬ñ╤ù╨░┬ñ╤ƒ╨░╥ÉΓÇí',
            h : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬ñ╨░┬ñ╤ò╨░┬ñ╤æ',
            hh : '%d ╨░┬ñ┬ñ╨░┬ñ╤ò╨░┬ñ╤æ',
            d : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬ª╨░┬ñ╤ù╨░┬ñ┬╡╨░┬ñ╤æ',
            dd : '%d ╨░┬ñ┬ª╨░┬ñ╤ù╨░┬ñ┬╡╨░┬ñ╤æ',
            M : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬«╨░┬ñΓäû╨░┬ñ╤ù╨░┬ñ╨ü╨░┬ñ╤ò',
            MM : '%d ╨░┬ñ┬«╨░┬ñΓäû╨░┬ñ╤ù╨░┬ñ╨ü╨░╥ÉΓÇí',
            y : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬╡╨░┬ñ┬░╨░╥É╨î╨░┬ñ┬╖',
            yy : '%d ╨░┬ñ┬╡╨░┬ñ┬░╨░╥É╨î╨░┬ñ┬╖╨░╥ÉΓÇí'
        },
        preparse: function (string) {
            return string.replace(/[╨░╥É┬º╨░╥É╨ü╨░╥É┬⌐╨░╥É╨ä╨░╥É┬½╨░╥É┬¼╨░╥É┬¡╨░╥É┬«╨░╥É╨ç╨░╥É┬ª]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ╨░╥É╨î╨░┬ñ┬░╨░╥É╨é|╨░┬ñ╤æ╨░┬ñΓÇó╨░┬ñ╤ò╨░┬ñ╤û╨░╥É╨é|╨░┬ñ┬ª╨░╥É╨â╨░┬ñ╨ä╨░┬ñ╤ò╨░┬ñ┬░╨░╥É╨é|╨░┬ñ╤æ╨░┬ñ╤ò╨░┬ñ╨ç╨░┬ñΓÇÜ╨░┬ñΓÇó╨░┬ñ╤ò╨░┬ñ╤û╨░╥É╨é/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ╨░╥É╨î╨░┬ñ┬░╨░╥É╨é') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === '╨░┬ñ╤æ╨░┬ñΓÇó╨░┬ñ╤ò╨░┬ñ╤û╨░╥É╨é') {
                return hour;
            } else if (meridiem === '╨░┬ñ┬ª╨░╥É╨â╨░┬ñ╨ä╨░┬ñ╤ò╨░┬ñ┬░╨░╥É╨é') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === '╨░┬ñ╤æ╨░┬ñ╤ò╨░┬ñ╨ç╨░┬ñΓÇÜ╨░┬ñΓÇó╨░┬ñ╤ò╨░┬ñ╤û╨░╥É╨é') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower)
        {
            if (hour < 4) {
                return '╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ╨░╥É╨î╨░┬ñ┬░╨░╥É╨é';
            } else if (hour < 10) {
                return '╨░┬ñ╤æ╨░┬ñΓÇó╨░┬ñ╤ò╨░┬ñ╤û╨░╥É╨é';
            } else if (hour < 17) {
                return '╨░┬ñ┬ª╨░╥É╨â╨░┬ñ╨ä╨░┬ñ╤ò╨░┬ñ┬░╨░╥É╨é';
            } else if (hour < 20) {
                return '╨░┬ñ╤æ╨░┬ñ╤ò╨░┬ñ╨ç╨░┬ñΓÇÜ╨░┬ñΓÇó╨░┬ñ╤ò╨░┬ñ╤û╨░╥É╨é';
            } else {
                return '╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ╨░╥É╨î╨░┬ñ┬░╨░╥É╨é';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Bahasa Malaysia (ms-MY)
// author : Weldan Jamili : https://github.com/weldan

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('ms-my', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'LT.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] LT',
            LLLL : 'dddd, D MMMM YYYY [pukul] LT'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Burmese (my)
// author : Squar team, mysquar.com

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var symbolMap = {
        '1': '╨▒╨â╨â',
        '2': '╨▒╨âΓÇÜ',
        '3': '╨▒╨â╤ô',
        '4': '╨▒╨âΓÇ₧',
        '5': '╨▒╨âΓÇª',
        '6': '╨▒╨âΓÇá',
        '7': '╨▒╨âΓÇí',
        '8': '╨▒╨âΓé¼',
        '9': '╨▒╨âΓÇ░',
        '0': '╨▒╨â╨é'
    }, numberMap = {
        '╨▒╨â╨â': '1',
        '╨▒╨âΓÇÜ': '2',
        '╨▒╨â╤ô': '3',
        '╨▒╨âΓÇ₧': '4',
        '╨▒╨âΓÇª': '5',
        '╨▒╨âΓÇá': '6',
        '╨▒╨âΓÇí': '7',
        '╨▒╨âΓé¼': '8',
        '╨▒╨âΓÇ░': '9',
        '╨▒╨â╨é': '0'
    };
    return moment.defineLocale('my', {
        months: '╨▒╨éΓÇí╨▒╨éΓÇ¥╨▒╨é╤ö╨▒╨éΓÇ¥╨▒╨é╤£╨▒╨é┬½╨▒╨éΓÇ║╨▒╨é┬«_╨▒╨éΓÇô╨▒╨é┬▒╨▒╨éΓÇô╨▒╨é┬▒╨▒╨é┬¼╨▒╨é╤ö╨▒╨é╤£╨▒╨é┬½╨▒╨éΓÇ║╨▒╨é┬«_╨▒╨éΓäó╨▒╨é╤Æ╨▒╨é╤ö_╨▒╨é┬º╨▒╨éΓÇó╨▒╨é╤ÿ╨▒╨é┬«_╨▒╨éΓäó╨▒╨é┬▒_╨▒╨éΓÇí╨▒╨é╨à╨▒╨éΓÇ¥╨▒╨é╤ö_╨▒╨éΓÇí╨▒╨é┬░╨▒╨é╤Ü╨▒╨é┬¡╨▒╨é╨ç╨▒╨éΓÇ₧╨▒╨é╤ö_╨▒╨é╤¢╨▒╨é╤ÿ╨▒╨éΓÇÜ╨▒╨é╨ç╨▒╨é╤Æ╨▒╨é╤ö_╨▒╨éΓÇª╨▒╨é╨é╨▒╨é╤ö╨▒╨é╤Æ╨▒╨éΓÇ₧╨▒╨é╤ö╨▒╨é┬ÿ╨▒╨é┬¼_╨▒╨é╨Ä╨▒╨é┬▒╨▒╨é┬¼╨▒╨é╨é╨▒╨é╤ö╨▒╨é╤Æ╨▒╨é┬¡╨▒╨é╨ç╨▒╨é┬ÿ╨▒╨é┬¼_╨▒╨éΓÇ¥╨▒╨é┬¡╨▒╨é╨ç╨▒╨é╤£╨▒╨éΓÇ₧╨▒╨é╤ö╨▒╨é┬ÿ╨▒╨é┬¼_╨▒╨éΓÇÖ╨▒╨é┬«╨▒╨éΓÇí╨▒╨éΓÇ₧╨▒╨é╤ö╨▒╨é┬ÿ╨▒╨é┬¼'.split('_'),
        monthsShort: '╨▒╨éΓÇí╨▒╨éΓÇ¥╨▒╨é╤ö_╨▒╨éΓÇô╨▒╨é┬▒_╨▒╨éΓäó╨▒╨é╤Æ╨▒╨é╤ö_╨▒╨éΓÇó╨▒╨é╤ÿ╨▒╨é┬«_╨▒╨éΓäó╨▒╨é┬▒_╨▒╨éΓÇí╨▒╨é╨à╨▒╨éΓÇ¥╨▒╨é╤ö_╨▒╨é╤Ü╨▒╨é┬¡╨▒╨é╨ç╨▒╨éΓÇ₧╨▒╨é╤ö_╨▒╨é╤¢╨▒╨é╤ÿ_╨▒╨éΓÇª╨▒╨é╨é╨▒╨é╤ö_╨▒╨é╨Ä╨▒╨é┬▒╨▒╨é┬¼╨▒╨é╨é╨▒╨é╤ö_╨▒╨éΓÇ¥╨▒╨é┬¡╨▒╨é╨ç_╨▒╨éΓÇÖ╨▒╨é┬«'.split('_'),
        weekdays: '╨▒╨é╤Æ╨▒╨éΓÇ¥╨▒╨éΓÇ₧╨▒╨é╤ö╨▒╨éΓäû╨▒╨éΓÇÜ╨▒╨éΓÇ¥╨▒╨é╨à╨▒╨é┬▒_╨▒╨é╤Æ╨▒╨éΓÇ¥╨▒╨éΓÇ₧╨▒╨é╤ö╨▒╨éΓäû╨▒╨é╤Ü╨▒╨é┬¼_╨▒╨é╨Ä╨▒╨éΓÇ₧╨▒╨é╤ö╨▒╨éΓäû╨▒╨éΓÇÜ╨▒╨é┬½_╨▒╨éΓÇö╨▒╨é╨ç╨▒╨éΓÇÖ╨▒╨éΓäû╨▒╨éΓÇ£╨▒╨é╤ƒ╨▒╨é┬░╨▒╨é╤æ_╨▒╨é╨é╨▒╨é╤ÿ╨▒╨é┬¼╨▒╨é╤¢╨▒╨éΓÇó╨▒╨é╤Æ╨▒╨é┬▒╨▒╨é╤æ_╨▒╨é╤¢╨▒╨é┬▒╨▒╨é┬¼╨▒╨é╨é╨▒╨é╤ÿ╨▒╨é┬¼_╨▒╨éΓÇª╨▒╨éΓÇ¥╨▒╨é┬▒'.split('_'),
        weekdaysShort: '╨▒╨éΓÇ¥╨▒╨é╨à╨▒╨é┬▒_╨▒╨é╤Ü╨▒╨é┬¼_╨▒╨éΓÇ₧╨▒╨é╤ö╨▒╨éΓäû╨▒╨éΓÇÜ╨▒╨é┬½_╨▒╨é╤ƒ╨▒╨é┬░╨▒╨é╤æ_╨▒╨é╨é╨▒╨é╤ÿ╨▒╨é┬¼_╨▒╨é╤¢╨▒╨é┬▒╨▒╨é┬¼_╨▒╨éΓÇ¥╨▒╨é┬▒'.split('_'),
        weekdaysMin: '╨▒╨éΓÇ¥╨▒╨é╨à╨▒╨é┬▒_╨▒╨é╤Ü╨▒╨é┬¼_╨▒╨éΓÇ₧╨▒╨é╤ö╨▒╨éΓäû╨▒╨éΓÇÜ╨▒╨é┬½_╨▒╨é╤ƒ╨▒╨é┬░╨▒╨é╤æ_╨▒╨é╨é╨▒╨é╤ÿ╨▒╨é┬¼_╨▒╨é╤¢╨▒╨é┬▒╨▒╨é┬¼_╨▒╨éΓÇ¥╨▒╨é┬▒'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY LT',
            LLLL: 'dddd D MMMM YYYY LT'
        },
        calendar: {
            sameDay: '[╨▒╨é╤Ö╨▒╨éΓÇ¥╨▒╨é┬▒.] LT [╨▒╨éΓäó╨▒╨é╤ò╨▒╨é┬¼]',
            nextDay: '[╨▒╨éΓäó╨▒╨éΓÇ¥╨▒╨é╨é╨▒╨é╤ö╨▒╨éΓÇô╨▒╨é╤ÿ╨▒╨éΓÇ¥╨▒╨é╤ö] LT [╨▒╨éΓäó╨▒╨é╤ò╨▒╨é┬¼]',
            nextWeek: 'dddd LT [╨▒╨éΓäó╨▒╨é╤ò╨▒╨é┬¼]',
            lastDay: '[╨▒╨éΓäó╨▒╨éΓÇ¥╨▒╨é┬▒.╨▒╨é╨é] LT [╨▒╨éΓäó╨▒╨é╤ò╨▒╨é┬¼]',
            lastWeek: '[╨▒╨éΓÇó╨▒╨é╤ÿ╨▒╨é┬«╨▒╨é╤æ╨▒╨é╨â╨▒╨é╨å╨▒╨é┬╖╨▒╨é╤¢╨▒╨é┬▒╨▒╨é┬¼] dddd LT [╨▒╨éΓäó╨▒╨é╤ò╨▒╨é┬¼]',
            sameElse: 'L'
        },
        relativeTime: {
            future: '╨▒╨é╤Ü╨▒╨é┬¼╨▒╨éΓäó╨▒╨é╨ë╨▒╨é╤ö╨▒╨é┬╖ %s ╨▒╨éΓäó╨▒╨é╤ò╨▒╨é┬¼',
            past: '╨▒╨é╤Ü╨▒╨é╨à╨▒╨éΓÇ¥╨▒╨é╤ö╨▒╨é╨â╨▒╨é╨å╨▒╨é┬╖╨▒╨é╤¢╨▒╨é┬▒╨▒╨é┬¼ %s ╨▒╨é╨é',
            s: '╨▒╨éΓÇª╨▒╨é╨é╨▒╨éΓäû╨▒╨é╨é╨▒╨éΓÇ¥╨▒╨é╤ö.╨▒╨é╨Ä╨▒╨éΓÇ¥╨▒╨é╨ë╨▒╨é╤ö╨▒╨é╤æ╨▒╨éΓÇ₧╨▒╨é╤Ö╨▒╨é╤ö',
            m: '╨▒╨é╤Æ╨▒╨éΓÇª╨▒╨é╤ö╨▒╨éΓäó╨▒╨é┬¡╨▒╨éΓÇ¥╨▒╨éΓÇª╨▒╨é╤ö',
            mm: '%d ╨▒╨éΓäó╨▒╨é┬¡╨▒╨éΓÇ¥╨▒╨éΓÇª╨▒╨é╤ö',
            h: '╨▒╨é╤Æ╨▒╨éΓÇª╨▒╨é╤ö╨▒╨éΓÇ¥╨▒╨é┬¼╨▒╨éΓÇ║╨▒╨é┬«',
            hh: '%d ╨▒╨éΓÇ¥╨▒╨é┬¼╨▒╨éΓÇ║╨▒╨é┬«',
            d: '╨▒╨é╤Æ╨▒╨éΓÇª╨▒╨é╤ö╨▒╨éΓÇ║╨▒╨é╨é╨▒╨é╤ö',
            dd: '%d ╨▒╨éΓÇ║╨▒╨é╨é╨▒╨é╤ö',
            M: '╨▒╨é╤Æ╨▒╨éΓÇª╨▒╨é╤ö╨▒╨é╤Ü',
            MM: '%d ╨▒╨é╤Ü',
            y: '╨▒╨é╤Æ╨▒╨éΓÇª╨▒╨é╤ö╨▒╨éΓÇ¥╨▒╨é╤ò╨▒╨éΓÇª╨▒╨é╤ö',
            yy: '%d ╨▒╨éΓÇ¥╨▒╨é╤ò╨▒╨éΓÇª╨▒╨é╤ö'
        },
        preparse: function (string) {
            return string.replace(/[╨▒╨â╨â╨▒╨âΓÇÜ╨▒╨â╤ô╨▒╨âΓÇ₧╨▒╨âΓÇª╨▒╨âΓÇá╨▒╨âΓÇí╨▒╨âΓé¼╨▒╨âΓÇ░╨▒╨â╨é]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : norwegian bokm╨ô╥Él (nb)
// authors : Espen Hovlandsdal : https://github.com/rexxars
//           Sigurd Gartmann : https://github.com/sigurdga

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('nb', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 's╨ô╤ændag_mandag_tirsdag_onsdag_torsdag_fredag_l╨ô╤ærdag'.split('_'),
        weekdaysShort : 's╨ô╤æn_man_tirs_ons_tors_fre_l╨ô╤ær'.split('_'),
        weekdaysMin : 's╨ô╤æ_ma_ti_on_to_fr_l╨ô╤æ'.split('_'),
        longDateFormat : {
            LT : 'H.mm',
            LTS : 'LT.ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] LT',
            LLLL : 'dddd D. MMMM YYYY [kl.] LT'
        },
        calendar : {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i g╨ô╥Ér kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : 'for %s siden',
            s : 'noen sekunder',
            m : 'ett minutt',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dager',
            M : 'en m╨ô╥Éned',
            MM : '%d m╨ô╥Éneder',
            y : 'ett ╨ô╥Ér',
            yy : '%d ╨ô╥Ér'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : nepali/nepalese
// author : suvash : https://github.com/suvash

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var symbolMap = {
        '1': '╨░╥É┬º',
        '2': '╨░╥É╨ü',
        '3': '╨░╥É┬⌐',
        '4': '╨░╥É╨ä',
        '5': '╨░╥É┬½',
        '6': '╨░╥É┬¼',
        '7': '╨░╥É┬¡',
        '8': '╨░╥É┬«',
        '9': '╨░╥É╨ç',
        '0': '╨░╥É┬ª'
    },
    numberMap = {
        '╨░╥É┬º': '1',
        '╨░╥É╨ü': '2',
        '╨░╥É┬⌐': '3',
        '╨░╥É╨ä': '4',
        '╨░╥É┬½': '5',
        '╨░╥É┬¼': '6',
        '╨░╥É┬¡': '7',
        '╨░╥É┬«': '8',
        '╨░╥É╨ç': '9',
        '╨░╥É┬ª': '0'
    };

    return moment.defineLocale('ne', {
        months : '╨░┬ñ╤Ü╨░┬ñ╨ü╨░┬ñ┬╡╨░┬ñ┬░╨░╥É╨é_╨░┬ñ┬½╨░╥ÉΓÇí╨░┬ñ┬¼╨░╥É╨î╨░┬ñ┬░╨░╥É╨â╨░┬ñ┬╡╨░┬ñ┬░╨░╥É╨é_╨░┬ñ┬«╨░┬ñ╤ò╨░┬ñ┬░╨░╥É╨î╨░┬ñ╤Ö_╨░┬ñΓÇª╨░┬ñ╨ä╨░╥É╨î╨░┬ñ┬░╨░┬ñ╤ù╨░┬ñ╨å_╨░┬ñ┬«╨░┬ñΓé¼_╨░┬ñ╤Ü╨░╥É╨â╨░┬ñ╨ü_╨░┬ñ╤Ü╨░╥É╨â╨░┬ñ╨å╨░┬ñ╤ò╨░┬ñΓé¼_╨░┬ñΓÇª╨░┬ñΓÇö╨░┬ñ┬╖╨░╥É╨î╨░┬ñ╤ƒ_╨░┬ñ╤æ╨░╥ÉΓÇí╨░┬ñ╨ä╨░╥É╨î╨░┬ñ╤ƒ╨░╥ÉΓÇí╨░┬ñ┬«╨░╥É╨î╨░┬ñ┬¼╨░┬ñ┬░_╨░┬ñΓÇª╨░┬ñΓÇó╨░╥É╨î╨░┬ñ╤ƒ╨░╥ÉΓÇ╣╨░┬ñ┬¼╨░┬ñ┬░_╨░┬ñ╨ü╨░╥ÉΓÇ╣╨░┬ñ┬¡╨░╥ÉΓÇí╨░┬ñ┬«╨░╥É╨î╨░┬ñ┬¼╨░┬ñ┬░_╨░┬ñ╨Ä╨░┬ñ╤ù╨░┬ñ╤æ╨░╥ÉΓÇí╨░┬ñ┬«╨░╥É╨î╨░┬ñ┬¼╨░┬ñ┬░'.split('_'),
        monthsShort : '╨░┬ñ╤Ü╨░┬ñ╨ü._╨░┬ñ┬½╨░╥ÉΓÇí╨░┬ñ┬¼╨░╥É╨î╨░┬ñ┬░╨░╥É╨â._╨░┬ñ┬«╨░┬ñ╤ò╨░┬ñ┬░╨░╥É╨î╨░┬ñ╤Ö_╨░┬ñΓÇª╨░┬ñ╨ä╨░╥É╨î╨░┬ñ┬░╨░┬ñ╤ù._╨░┬ñ┬«╨░┬ñΓé¼_╨░┬ñ╤Ü╨░╥É╨â╨░┬ñ╨ü_╨░┬ñ╤Ü╨░╥É╨â╨░┬ñ╨å╨░┬ñ╤ò╨░┬ñΓé¼._╨░┬ñΓÇª╨░┬ñΓÇö._╨░┬ñ╤æ╨░╥ÉΓÇí╨░┬ñ╨ä╨░╥É╨î╨░┬ñ╤ƒ._╨░┬ñΓÇª╨░┬ñΓÇó╨░╥É╨î╨░┬ñ╤ƒ╨░╥ÉΓÇ╣._╨░┬ñ╨ü╨░╥ÉΓÇ╣╨░┬ñ┬¡╨░╥ÉΓÇí._╨░┬ñ╨Ä╨░┬ñ╤ù╨░┬ñ╤æ╨░╥ÉΓÇí.'.split('_'),
        weekdays : '╨░┬ñΓÇá╨░┬ñΓÇí╨░┬ñ┬ñ╨░┬ñ┬¼╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ╤æ╨░╥ÉΓÇ╣╨░┬ñ┬«╨░┬ñ┬¼╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬«╨░┬ñΓäó╨░╥É╨î╨░┬ñΓÇö╨░┬ñ╨å╨░┬ñ┬¼╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬¼╨░╥É╨â╨░┬ñ┬º╨░┬ñ┬¼╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬¼╨░┬ñ╤ù╨░┬ñΓäû╨░┬ñ╤ù╨░┬ñ┬¼╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬╢╨░╥É╨â╨░┬ñΓÇó╨░╥É╨î╨░┬ñ┬░╨░┬ñ┬¼╨░┬ñ╤ò╨░┬ñ┬░_╨░┬ñ┬╢╨░┬ñ╨ü╨░┬ñ╤ù╨░┬ñ┬¼╨░┬ñ╤ò╨░┬ñ┬░'.split('_'),
        weekdaysShort : '╨░┬ñΓÇá╨░┬ñΓÇí╨░┬ñ┬ñ._╨░┬ñ╤æ╨░╥ÉΓÇ╣╨░┬ñ┬«._╨░┬ñ┬«╨░┬ñΓäó╨░╥É╨î╨░┬ñΓÇö╨░┬ñ╨å._╨░┬ñ┬¼╨░╥É╨â╨░┬ñ┬º._╨░┬ñ┬¼╨░┬ñ╤ù╨░┬ñΓäû╨░┬ñ╤ù._╨░┬ñ┬╢╨░╥É╨â╨░┬ñΓÇó╨░╥É╨î╨░┬ñ┬░._╨░┬ñ┬╢╨░┬ñ╨ü╨░┬ñ╤ù.'.split('_'),
        weekdaysMin : '╨░┬ñΓÇá╨░┬ñΓÇí._╨░┬ñ╤æ╨░╥ÉΓÇ╣._╨░┬ñ┬«╨░┬ñΓäó╨░╥É╨î_╨░┬ñ┬¼╨░╥É╨â._╨░┬ñ┬¼╨░┬ñ╤ù._╨░┬ñ┬╢╨░╥É╨â._╨░┬ñ┬╢.'.split('_'),
        longDateFormat : {
            LT : 'A╨░┬ñΓÇó╨░╥ÉΓÇ╣ h:mm ╨░┬ñ┬¼╨░┬ñ╤Ü╨░╥ÉΓÇí',
            LTS : 'A╨░┬ñΓÇó╨░╥ÉΓÇ╣ h:mm:ss ╨░┬ñ┬¼╨░┬ñ╤Ü╨░╥ÉΓÇí',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, LT',
            LLLL : 'dddd, D MMMM YYYY, LT'
        },
        preparse: function (string) {
            return string.replace(/[╨░╥É┬º╨░╥É╨ü╨░╥É┬⌐╨░╥É╨ä╨░╥É┬½╨░╥É┬¼╨░╥É┬¡╨░╥É┬«╨░╥É╨ç╨░╥É┬ª]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ╨░╥É╨é|╨░┬ñ┬¼╨░┬ñ╤ù╨░┬ñΓäû╨░┬ñ╤ò╨░┬ñ╨ü|╨░┬ñ┬ª╨░┬ñ╤ù╨░┬ñΓÇ░╨░┬ñ╨â╨░┬ñ╤æ╨░╥ÉΓÇ╣|╨░┬ñ┬¼╨░╥ÉΓÇí╨░┬ñ╨å╨░╥É╨â╨░┬ñΓÇó╨░┬ñ╤ò|╨░┬ñ╤æ╨░┬ñ╤ò╨░┬ñ╨â╨░┬ñ╤£|╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ╨░╥É╨é/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ╨░╥É╨é') {
                return hour < 3 ? hour : hour + 12;
            } else if (meridiem === '╨░┬ñ┬¼╨░┬ñ╤ù╨░┬ñΓäû╨░┬ñ╤ò╨░┬ñ╨ü') {
                return hour;
            } else if (meridiem === '╨░┬ñ┬ª╨░┬ñ╤ù╨░┬ñΓÇ░╨░┬ñ╨â╨░┬ñ╤æ╨░╥ÉΓÇ╣') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === '╨░┬ñ┬¼╨░╥ÉΓÇí╨░┬ñ╨å╨░╥É╨â╨░┬ñΓÇó╨░┬ñ╤ò' || meridiem === '╨░┬ñ╤æ╨░┬ñ╤ò╨░┬ñ╨â╨░┬ñ╤£') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 3) {
                return '╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ╨░╥É╨é';
            } else if (hour < 10) {
                return '╨░┬ñ┬¼╨░┬ñ╤ù╨░┬ñΓäû╨░┬ñ╤ò╨░┬ñ╨ü';
            } else if (hour < 15) {
                return '╨░┬ñ┬ª╨░┬ñ╤ù╨░┬ñΓÇ░╨░┬ñ╨â╨░┬ñ╤æ╨░╥ÉΓÇ╣';
            } else if (hour < 18) {
                return '╨░┬ñ┬¼╨░╥ÉΓÇí╨░┬ñ╨å╨░╥É╨â╨░┬ñΓÇó╨░┬ñ╤ò';
            } else if (hour < 20) {
                return '╨░┬ñ╤æ╨░┬ñ╤ò╨░┬ñ╨â╨░┬ñ╤£';
            } else {
                return '╨░┬ñ┬░╨░┬ñ╤ò╨░┬ñ┬ñ╨░╥É╨é';
            }
        },
        calendar : {
            sameDay : '[╨░┬ñΓÇá╨░┬ñ╤Ü] LT',
            nextDay : '[╨░┬ñ┬¡╨░╥ÉΓÇ╣╨░┬ñ╨å╨░╥É╨é] LT',
            nextWeek : '[╨░┬ñΓÇá╨░┬ñΓÇ░╨░┬ñ╨â╨░┬ñ┬ª╨░╥ÉΓÇ╣] dddd[,] LT',
            lastDay : '[╨░┬ñΓäû╨░┬ñ╤ù╨░┬ñ╤Ü╨░╥ÉΓÇ╣] LT',
            lastWeek : '[╨░┬ñΓÇö╨░┬ñ╨Å╨░┬ñΓÇó╨░╥ÉΓÇ╣] dddd[,] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s╨░┬ñ┬«╨░┬ñ╤ò',
            past : '%s ╨░┬ñΓÇª╨░┬ñΓÇö╨░┬ñ╤ò╨░┬ñ╨Ä╨░╥É╨é',
            s : '╨░┬ñΓÇó╨░╥ÉΓÇí╨░┬ñΓäû╨░╥É╨é ╨░┬ñ╤æ╨░┬ñ┬«╨░┬ñ╨ç',
            m : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬«╨░┬ñ╤ù╨░┬ñ╨ü╨░╥ÉΓÇí╨░┬ñ╤ƒ',
            mm : '%d ╨░┬ñ┬«╨░┬ñ╤ù╨░┬ñ╨ü╨░╥ÉΓÇí╨░┬ñ╤ƒ',
            h : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬ÿ╨░┬ñ╨ê╨░╥É╨î╨░┬ñ╤ƒ╨░┬ñ╤ò',
            hh : '%d ╨░┬ñ┬ÿ╨░┬ñ╨ê╨░╥É╨î╨░┬ñ╤ƒ╨░┬ñ╤ò',
            d : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬ª╨░┬ñ╤ù╨░┬ñ╨ü',
            dd : '%d ╨░┬ñ┬ª╨░┬ñ╤ù╨░┬ñ╨ü',
            M : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬«╨░┬ñΓäû╨░┬ñ╤ù╨░┬ñ╨ü╨░┬ñ╤ò',
            MM : '%d ╨░┬ñ┬«╨░┬ñΓäû╨░┬ñ╤ù╨░┬ñ╨ü╨░┬ñ╤ò',
            y : '╨░┬ñ╨Å╨░┬ñΓÇó ╨░┬ñ┬¼╨░┬ñ┬░╨░╥É╨î╨░┬ñ┬╖',
            yy : '%d ╨░┬ñ┬¼╨░┬ñ┬░╨░╥É╨î╨░┬ñ┬╖'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : dutch (nl)
// author : Joris R╨ô┬╢ling : https://github.com/jjupiter

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

    return moment.defineLocale('nl', {
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },
        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'over %s',
            past : '%s geleden',
            s : 'een paar seconden',
            m : '╨ô┬⌐╨ô┬⌐n minuut',
            mm : '%d minuten',
            h : '╨ô┬⌐╨ô┬⌐n uur',
            hh : '%d uur',
            d : '╨ô┬⌐╨ô┬⌐n dag',
            dd : '%d dagen',
            M : '╨ô┬⌐╨ô┬⌐n maand',
            MM : '%d maanden',
            y : '╨ô┬⌐╨ô┬⌐n jaar',
            yy : '%d jaar'
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : norwegian nynorsk (nn)
// author : https://github.com/mechuwind

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('nn', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sundag_m╨ô╥Éndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort : 'sun_m╨ô╥Én_tys_ons_tor_fre_lau'.split('_'),
        weekdaysMin : 'su_m╨ô╥É_ty_on_to_fr_l╨ô╤æ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[I dag klokka] LT',
            nextDay: '[I morgon klokka] LT',
            nextWeek: 'dddd [klokka] LT',
            lastDay: '[I g╨ô╥Ér klokka] LT',
            lastWeek: '[F╨ô╤æreg╨ô╥Éande] dddd [klokka] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : 'for %s sidan',
            s : 'nokre sekund',
            m : 'eit minutt',
            mm : '%d minutt',
            h : 'ein time',
            hh : '%d timar',
            d : 'ein dag',
            dd : '%d dagar',
            M : 'ein m╨ô╥Énad',
            MM : '%d m╨ô╥Énader',
            y : 'eit ╨ô╥Ér',
            yy : '%d ╨ô╥Ér'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : polish (pl)
// author : Rafal Hirsz : https://github.com/evoL

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var monthsNominative = 'stycze╨òΓÇ₧_luty_marzec_kwiecie╨òΓÇ₧_maj_czerwiec_lipiec_sierpie╨òΓÇ₧_wrzesie╨òΓÇ₧_pa╨ò╤ödziernik_listopad_grudzie╨òΓÇ₧'.split('_'),
        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze╨òΓÇ║nia_pa╨ò╤ödziernika_listopada_grudnia'.split('_');

    function plural(n) {
        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
    }

    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
        case 'm':
            return withoutSuffix ? 'minuta' : 'minut╨öΓäó';
        case 'mm':
            return result + (plural(number) ? 'minuty' : 'minut');
        case 'h':
            return withoutSuffix  ? 'godzina'  : 'godzin╨öΓäó';
        case 'hh':
            return result + (plural(number) ? 'godziny' : 'godzin');
        case 'MM':
            return result + (plural(number) ? 'miesi╨öΓÇªce' : 'miesi╨öΓäócy');
        case 'yy':
            return result + (plural(number) ? 'lata' : 'lat');
        }
    }

    return moment.defineLocale('pl', {
        months : function (momentToFormat, format) {
            if (/D MMMM/.test(format)) {
                return monthsSubjective[momentToFormat.month()];
            } else {
                return monthsNominative[momentToFormat.month()];
            }
        },
        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa╨ò╤ö_lis_gru'.split('_'),
        weekdays : 'niedziela_poniedzia╨òΓÇÜek_wtorek_╨òΓÇ║roda_czwartek_pi╨öΓÇªtek_sobota'.split('_'),
        weekdaysShort : 'nie_pon_wt_╨òΓÇ║r_czw_pt_sb'.split('_'),
        weekdaysMin : 'N_Pn_Wt_╨ò╤Ör_Cz_Pt_So'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[Dzi╨òΓÇ║ o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: '[W] dddd [o] LT',
            lastDay: '[Wczoraj o] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[W zesz╨òΓÇÜ╨öΓÇª niedziel╨öΓäó o] LT';
                case 3:
                    return '[W zesz╨òΓÇÜ╨öΓÇª ╨òΓÇ║rod╨öΓäó o] LT';
                case 6:
                    return '[W zesz╨òΓÇÜ╨öΓÇª sobot╨öΓäó o] LT';
                default:
                    return '[W zesz╨òΓÇÜy] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : '%s temu',
            s : 'kilka sekund',
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : '1 dzie╨òΓÇ₧',
            dd : '%d dni',
            M : 'miesi╨öΓÇªc',
            MM : translate,
            y : 'rok',
            yy : translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : brazilian portuguese (pt-br)
// author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('pt-br', {
        months : 'janeiro_fevereiro_mar╨ô┬ºo_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays : 'domingo_segunda-feira_ter╨ô┬ºa-feira_quarta-feira_quinta-feira_sexta-feira_s╨ô╨Äbado'.split('_'),
        weekdaysShort : 'dom_seg_ter_qua_qui_sex_s╨ô╨Äb'.split('_'),
        weekdaysMin : 'dom_2╨Æ╨ä_3╨Æ╨ä_4╨Æ╨ä_5╨Æ╨ä_6╨Æ╨ä_s╨ô╨Äb'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [╨ô s] LT',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [╨ô s] LT'
        },
        calendar : {
            sameDay: '[Hoje ╨ô s] LT',
            nextDay: '[Amanh╨ô╨ê ╨ô s] LT',
            nextWeek: 'dddd [╨ô s] LT',
            lastDay: '[Ontem ╨ô s] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[╨ô╤Öltimo] dddd [╨ô s] LT' : // Saturday + Sunday
                    '[╨ô╤Öltima] dddd [╨ô s] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : '%s atr╨ô╨Äs',
            s : 'segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um m╨ô╨äs',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        ordinalParse: /\d{1,2}╨Æ╤ö/,
        ordinal : '%d╨Æ╤ö'
    });
}));

// moment.js locale configuration
// locale : portuguese (pt)
// author : Jefferson : https://github.com/jalex79

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('pt', {
        months : 'janeiro_fevereiro_mar╨ô┬ºo_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays : 'domingo_segunda-feira_ter╨ô┬ºa-feira_quarta-feira_quinta-feira_sexta-feira_s╨ô╨Äbado'.split('_'),
        weekdaysShort : 'dom_seg_ter_qua_qui_sex_s╨ô╨Äb'.split('_'),
        weekdaysMin : 'dom_2╨Æ╨ä_3╨Æ╨ä_4╨Æ╨ä_5╨Æ╨ä_6╨Æ╨ä_s╨ô╨Äb'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY LT',
            LLLL : 'dddd, D [de] MMMM [de] YYYY LT'
        },
        calendar : {
            sameDay: '[Hoje ╨ô s] LT',
            nextDay: '[Amanh╨ô╨ê ╨ô s] LT',
            nextWeek: 'dddd [╨ô s] LT',
            lastDay: '[Ontem ╨ô s] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[╨ô╤Öltimo] dddd [╨ô s] LT' : // Saturday + Sunday
                    '[╨ô╤Öltima] dddd [╨ô s] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'h╨ô╨Ä %s',
            s : 'segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um m╨ô╨äs',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        ordinalParse: /\d{1,2}╨Æ╤ö/,
        ordinal : '%d╨Æ╤ö',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : romanian (ro)
// author : Vlad Gurdiga : https://github.com/gurdiga
// author : Valentin Agachi : https://github.com/avaly

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
                'mm': 'minute',
                'hh': 'ore',
                'dd': 'zile',
                'MM': 'luni',
                'yy': 'ani'
            },
            separator = ' ';
        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
            separator = ' de ';
        }

        return number + separator + format[key];
    }

    return moment.defineLocale('ro', {
        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        weekdays : 'duminic╨ö╤ô_luni_mar╨ÿΓÇ║i_miercuri_joi_vineri_s╨ô╤₧mb╨ö╤ôt╨ö╤ô'.split('_'),
        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_S╨ô╤₧m'.split('_'),
        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_S╨ô╤₧'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[azi la] LT',
            nextDay: '[m╨ô╤₧ine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'peste %s',
            past : '%s ╨ô┬«n urm╨ö╤ô',
            s : 'c╨ô╤₧teva secunde',
            m : 'un minut',
            mm : relativeTimeWithPlural,
            h : 'o or╨ö╤ô',
            hh : relativeTimeWithPlural,
            d : 'o zi',
            dd : relativeTimeWithPlural,
            M : 'o lun╨ö╤ô',
            MM : relativeTimeWithPlural,
            y : 'un an',
            yy : relativeTimeWithPlural
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : russian (ru)
// author : Viktorminator : https://github.com/Viktorminator
// Author : Menelion Elens╨ô╤öle : https://github.com/Oire

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }

    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'mm': withoutSuffix ? '╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨á┬░_╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨íΓÇ╣_╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ' : '╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨í╤ô_╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨íΓÇ╣_╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ',
            'hh': '╨íΓÇí╨á┬░╨í╨â_╨íΓÇí╨á┬░╨í╨â╨á┬░_╨íΓÇí╨á┬░╨í╨â╨á╤ò╨á╨å',
            'dd': '╨á╥æ╨á┬╡╨á╨à╨í╨è_╨á╥æ╨á╨à╨í╨Å_╨á╥æ╨á╨à╨á┬╡╨áΓäû',
            'MM': '╨á╤ÿ╨á┬╡╨í╨â╨í╨Å╨íΓÇá_╨á╤ÿ╨á┬╡╨í╨â╨í╨Å╨íΓÇá╨á┬░_╨á╤ÿ╨á┬╡╨í╨â╨í╨Å╨íΓÇá╨á┬╡╨á╨å',
            'yy': '╨á╤û╨á╤ò╨á╥æ_╨á╤û╨á╤ò╨á╥æ╨á┬░_╨á┬╗╨á┬╡╨íΓÇÜ'
        };
        if (key === 'm') {
            return withoutSuffix ? '╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨á┬░' : '╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨í╤ô';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }

    function monthsCaseReplace(m, format) {
        var months = {
            'nominative': '╨í╨Å╨á╨à╨á╨å╨á┬░╨í╨é╨í╨è_╨íΓÇ₧╨á┬╡╨á╨å╨í╨é╨á┬░╨á┬╗╨í╨è_╨á╤ÿ╨á┬░╨í╨é╨íΓÇÜ_╨á┬░╨á╤ù╨í╨é╨á┬╡╨á┬╗╨í╨è_╨á╤ÿ╨á┬░╨áΓäû_╨á╤æ╨í╨ï╨á╨à╨í╨è_╨á╤æ╨í╨ï╨á┬╗╨í╨è_╨á┬░╨á╨å╨á╤û╨í╤ô╨í╨â╨íΓÇÜ_╨í╨â╨á┬╡╨á╨à╨íΓÇÜ╨í╨Å╨á┬▒╨í╨é╨í╨è_╨á╤ò╨á╤ö╨íΓÇÜ╨í╨Å╨á┬▒╨í╨é╨í╨è_╨á╨à╨á╤ò╨í╨Å╨á┬▒╨í╨é╨í╨è_╨á╥æ╨á┬╡╨á╤ö╨á┬░╨á┬▒╨í╨é╨í╨è'.split('_'),
            'accusative': '╨í╨Å╨á╨à╨á╨å╨á┬░╨í╨é╨í╨Å_╨íΓÇ₧╨á┬╡╨á╨å╨í╨é╨á┬░╨á┬╗╨í╨Å_╨á╤ÿ╨á┬░╨í╨é╨íΓÇÜ╨á┬░_╨á┬░╨á╤ù╨í╨é╨á┬╡╨á┬╗╨í╨Å_╨á╤ÿ╨á┬░╨í╨Å_╨á╤æ╨í╨ï╨á╨à╨í╨Å_╨á╤æ╨í╨ï╨á┬╗╨í╨Å_╨á┬░╨á╨å╨á╤û╨í╤ô╨í╨â╨íΓÇÜ╨á┬░_╨í╨â╨á┬╡╨á╨à╨íΓÇÜ╨í╨Å╨á┬▒╨í╨é╨í╨Å_╨á╤ò╨á╤ö╨íΓÇÜ╨í╨Å╨á┬▒╨í╨é╨í╨Å_╨á╨à╨á╤ò╨í╨Å╨á┬▒╨í╨é╨í╨Å_╨á╥æ╨á┬╡╨á╤ö╨á┬░╨á┬▒╨í╨é╨í╨Å'.split('_')
        },

        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
            'accusative' :
            'nominative';

        return months[nounCase][m.month()];
    }

    function monthsShortCaseReplace(m, format) {
        var monthsShort = {
            'nominative': '╨í╨Å╨á╨à╨á╨å_╨íΓÇ₧╨á┬╡╨á╨å_╨á╤ÿ╨á┬░╨í╨é╨íΓÇÜ_╨á┬░╨á╤ù╨í╨é_╨á╤ÿ╨á┬░╨áΓäû_╨á╤æ╨í╨ï╨á╨à╨í╨è_╨á╤æ╨í╨ï╨á┬╗╨í╨è_╨á┬░╨á╨å╨á╤û_╨í╨â╨á┬╡╨á╨à_╨á╤ò╨á╤ö╨íΓÇÜ_╨á╨à╨á╤ò╨í╨Å_╨á╥æ╨á┬╡╨á╤ö'.split('_'),
            'accusative': '╨í╨Å╨á╨à╨á╨å_╨íΓÇ₧╨á┬╡╨á╨å_╨á╤ÿ╨á┬░╨í╨é_╨á┬░╨á╤ù╨í╨é_╨á╤ÿ╨á┬░╨í╨Å_╨á╤æ╨í╨ï╨á╨à╨í╨Å_╨á╤æ╨í╨ï╨á┬╗╨í╨Å_╨á┬░╨á╨å╨á╤û_╨í╨â╨á┬╡╨á╨à_╨á╤ò╨á╤ö╨íΓÇÜ_╨á╨à╨á╤ò╨í╨Å_╨á╥æ╨á┬╡╨á╤ö'.split('_')
        },

        nounCase = (/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/).test(format) ?
            'accusative' :
            'nominative';

        return monthsShort[nounCase][m.month()];
    }

    function weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': '╨á╨å╨á╤ò╨í╨â╨á╤ö╨í╨é╨á┬╡╨í╨â╨á┬╡╨á╨à╨í╨è╨á┬╡_╨á╤ù╨á╤ò╨á╨à╨á┬╡╨á╥æ╨á┬╡╨á┬╗╨í╨è╨á╨à╨á╤æ╨á╤ö_╨á╨å╨íΓÇÜ╨á╤ò╨í╨é╨á╨à╨á╤æ╨á╤ö_╨í╨â╨í╨é╨á┬╡╨á╥æ╨á┬░_╨íΓÇí╨á┬╡╨íΓÇÜ╨á╨å╨á┬╡╨í╨é╨á╤û_╨á╤ù╨í╨Å╨íΓÇÜ╨á╨à╨á╤æ╨íΓÇá╨á┬░_╨í╨â╨í╤ô╨á┬▒╨á┬▒╨á╤ò╨íΓÇÜ╨á┬░'.split('_'),
            'accusative': '╨á╨å╨á╤ò╨í╨â╨á╤ö╨í╨é╨á┬╡╨í╨â╨á┬╡╨á╨à╨í╨è╨á┬╡_╨á╤ù╨á╤ò╨á╨à╨á┬╡╨á╥æ╨á┬╡╨á┬╗╨í╨è╨á╨à╨á╤æ╨á╤ö_╨á╨å╨íΓÇÜ╨á╤ò╨í╨é╨á╨à╨á╤æ╨á╤ö_╨í╨â╨í╨é╨á┬╡╨á╥æ╨í╤ô_╨íΓÇí╨á┬╡╨íΓÇÜ╨á╨å╨á┬╡╨í╨é╨á╤û_╨á╤ù╨í╨Å╨íΓÇÜ╨á╨à╨á╤æ╨íΓÇá╨í╤ô_╨í╨â╨í╤ô╨á┬▒╨á┬▒╨á╤ò╨íΓÇÜ╨í╤ô'.split('_')
        },

        nounCase = (/\[ ?[╨áΓÇÖ╨á╨å] ?(?:╨á╤ù╨í╨é╨á╤ò╨íΓé¼╨á┬╗╨í╤ô╨í╨ï|╨í╨â╨á┬╗╨á┬╡╨á╥æ╨í╤ô╨í╨ï╨íΓÇ░╨í╤ô╨í╨ï|╨í╨î╨íΓÇÜ╨í╤ô)? ?\] ?dddd/).test(format) ?
            'accusative' :
            'nominative';

        return weekdays[nounCase][m.day()];
    }

    return moment.defineLocale('ru', {
        months : monthsCaseReplace,
        monthsShort : monthsShortCaseReplace,
        weekdays : weekdaysCaseReplace,
        weekdaysShort : '╨á╨å╨í╨â_╨á╤ù╨á╨à_╨á╨å╨íΓÇÜ_╨í╨â╨í╨é_╨íΓÇí╨íΓÇÜ_╨á╤ù╨íΓÇÜ_╨í╨â╨á┬▒'.split('_'),
        weekdaysMin : '╨á╨å╨í╨â_╨á╤ù╨á╨à_╨á╨å╨íΓÇÜ_╨í╨â╨í╨é_╨íΓÇí╨íΓÇÜ_╨á╤ù╨íΓÇÜ_╨í╨â╨á┬▒'.split('_'),
        monthsParse : [/^╨í╨Å╨á╨à╨á╨å/i, /^╨íΓÇ₧╨á┬╡╨á╨å/i, /^╨á╤ÿ╨á┬░╨í╨é/i, /^╨á┬░╨á╤ù╨í╨é/i, /^╨á╤ÿ╨á┬░[╨áΓäû|╨í╨Å]/i, /^╨á╤æ╨í╨ï╨á╨à/i, /^╨á╤æ╨í╨ï╨á┬╗/i, /^╨á┬░╨á╨å╨á╤û/i, /^╨í╨â╨á┬╡╨á╨à/i, /^╨á╤ò╨á╤ö╨íΓÇÜ/i, /^╨á╨à╨á╤ò╨í╨Å/i, /^╨á╥æ╨á┬╡╨á╤ö/i],
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY ╨á╤û.',
            LLL : 'D MMMM YYYY ╨á╤û., LT',
            LLLL : 'dddd, D MMMM YYYY ╨á╤û., LT'
        },
        calendar : {
            sameDay: '[╨á╨Ä╨á┬╡╨á╤û╨á╤ò╨á╥æ╨á╨à╨í╨Å ╨á╨å] LT',
            nextDay: '[╨áΓÇö╨á┬░╨á╨å╨íΓÇÜ╨í╨é╨á┬░ ╨á╨å] LT',
            lastDay: '[╨áΓÇÖ╨íΓÇí╨á┬╡╨í╨é╨á┬░ ╨á╨å] LT',
            nextWeek: function () {
                return this.day() === 2 ? '[╨áΓÇÖ╨á╤ò] dddd [╨á╨å] LT' : '[╨áΓÇÖ] dddd [╨á╨å] LT';
            },
            lastWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                    case 0:
                        return '[╨áΓÇÖ ╨á╤ù╨í╨é╨á╤ò╨íΓé¼╨á┬╗╨á╤ò╨á┬╡] dddd [╨á╨å] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[╨áΓÇÖ ╨á╤ù╨í╨é╨á╤ò╨íΓé¼╨á┬╗╨íΓÇ╣╨áΓäû] dddd [╨á╨å] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[╨áΓÇÖ ╨á╤ù╨í╨é╨á╤ò╨íΓé¼╨á┬╗╨í╤ô╨í╨ï] dddd [╨á╨å] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[╨áΓÇÖ╨á╤ò] dddd [╨á╨å] LT';
                    } else {
                        return '[╨áΓÇÖ] dddd [╨á╨å] LT';
                    }
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '╨íΓÇí╨á┬╡╨í╨é╨á┬╡╨á┬╖ %s',
            past : '%s ╨á╨à╨á┬░╨á┬╖╨á┬░╨á╥æ',
            s : '╨á╨à╨á┬╡╨í╨â╨á╤ö╨á╤ò╨á┬╗╨í╨è╨á╤ö╨á╤ò ╨í╨â╨á┬╡╨á╤ö╨í╤ô╨á╨à╨á╥æ',
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : '╨íΓÇí╨á┬░╨í╨â',
            hh : relativeTimeWithPlural,
            d : '╨á╥æ╨á┬╡╨á╨à╨í╨è',
            dd : relativeTimeWithPlural,
            M : '╨á╤ÿ╨á┬╡╨í╨â╨í╨Å╨íΓÇá',
            MM : relativeTimeWithPlural,
            y : '╨á╤û╨á╤ò╨á╥æ',
            yy : relativeTimeWithPlural
        },

        meridiemParse: /╨á╨à╨á╤ò╨íΓÇí╨á╤æ|╨í╤ô╨íΓÇÜ╨í╨é╨á┬░|╨á╥æ╨á╨à╨í╨Å|╨á╨å╨á┬╡╨íΓÇí╨á┬╡╨í╨é╨á┬░/i,
        isPM : function (input) {
            return /^(╨á╥æ╨á╨à╨í╨Å|╨á╨å╨á┬╡╨íΓÇí╨á┬╡╨í╨é╨á┬░)$/.test(input);
        },

        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return '╨á╨à╨á╤ò╨íΓÇí╨á╤æ';
            } else if (hour < 12) {
                return '╨í╤ô╨íΓÇÜ╨í╨é╨á┬░';
            } else if (hour < 17) {
                return '╨á╥æ╨á╨à╨í╨Å';
            } else {
                return '╨á╨å╨á┬╡╨íΓÇí╨á┬╡╨í╨é╨á┬░';
            }
        },

        ordinalParse: /\d{1,2}-(╨áΓäû|╨á╤û╨á╤ò|╨í╨Å)/,
        ordinal: function (number, period) {
            switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return number + '-╨áΓäû';
            case 'D':
                return number + '-╨á╤û╨á╤ò';
            case 'w':
            case 'W':
                return number + '-╨í╨Å';
            default:
                return number;
            }
        },

        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : slovak (sk)
// author : Martin Minka : https://github.com/k2s
// based on work of petrbela : https://github.com/petrbela

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var months = 'janu╨ô╨Är_febru╨ô╨Är_marec_apr╨ô┬¡l_m╨ô╨Äj_j╨ô╤ön_j╨ô╤öl_august_september_okt╨ô╤ûber_november_december'.split('_'),
        monthsShort = 'jan_feb_mar_apr_m╨ô╨Äj_j╨ô╤ön_j╨ô╤öl_aug_sep_okt_nov_dec'.split('_');

    function plural(n) {
        return (n > 1) && (n < 5);
    }

    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
        case 's':  // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'p╨ô╨Är sek╨ô╤önd' : 'p╨ô╨Är sekundami';
        case 'm':  // a minute / in a minute / a minute ago
            return withoutSuffix ? 'min╨ô╤öta' : (isFuture ? 'min╨ô╤ötu' : 'min╨ô╤ötou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'min╨ô╤öty' : 'min╨ô╤öt');
            } else {
                return result + 'min╨ô╤ötami';
            }
            break;
        case 'h':  // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'hodiny' : 'hod╨ô┬¡n');
            } else {
                return result + 'hodinami';
            }
            break;
        case 'd':  // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'de╨òΓé¼' : 'd╨òΓé¼om';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'dni' : 'dn╨ô┬¡');
            } else {
                return result + 'd╨òΓé¼ami';
            }
            break;
        case 'M':  // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'mesiace' : 'mesiacov');
            } else {
                return result + 'mesiacmi';
            }
            break;
        case 'y':  // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'roky' : 'rokov');
            } else {
                return result + 'rokmi';
            }
            break;
        }
    }

    return moment.defineLocale('sk', {
        months : months,
        monthsShort : monthsShort,
        monthsParse : (function (months, monthsShort) {
            var i, _monthsParse = [];
            for (i = 0; i < 12; i++) {
                // use custom parser to solve problem with July (╨ö╨îervenec)
                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
            }
            return _monthsParse;
        }(months, monthsShort)),
        weekdays : 'nede╨ö╤òa_pondelok_utorok_streda_╨ò╨Ätvrtok_piatok_sobota'.split('_'),
        weekdaysShort : 'ne_po_ut_st_╨ò╨Ät_pi_so'.split('_'),
        weekdaysMin : 'ne_po_ut_st_╨ò╨Ät_pi_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY LT',
            LLLL : 'dddd D. MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[v nede╨ö╤òu o] LT';
                case 1:
                case 2:
                    return '[v] dddd [o] LT';
                case 3:
                    return '[v stredu o] LT';
                case 4:
                    return '[vo ╨ò╨Ätvrtok o] LT';
                case 5:
                    return '[v piatok o] LT';
                case 6:
                    return '[v sobotu o] LT';
                }
            },
            lastDay: '[v╨ö╨îera o] LT',
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[minul╨ô╤ö nede╨ö╤òu o] LT';
                case 1:
                case 2:
                    return '[minul╨ô╨à] dddd [o] LT';
                case 3:
                    return '[minul╨ô╤ö stredu o] LT';
                case 4:
                case 5:
                    return '[minul╨ô╨à] dddd [o] LT';
                case 6:
                    return '[minul╨ô╤ö sobotu o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'pred %s',
            s : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : slovenian (sl)
// author : Robert Sedov╨ò╨Äek : https://github.com/sedovsek

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
        case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';
        case 'mm':
            if (number === 1) {
                result += 'minuta';
            } else if (number === 2) {
                result += 'minuti';
            } else if (number === 3 || number === 4) {
                result += 'minute';
            } else {
                result += 'minut';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';
        case 'hh':
            if (number === 1) {
                result += 'ura';
            } else if (number === 2) {
                result += 'uri';
            } else if (number === 3 || number === 4) {
                result += 'ure';
            } else {
                result += 'ur';
            }
            return result;
        case 'dd':
            if (number === 1) {
                result += 'dan';
            } else {
                result += 'dni';
            }
            return result;
        case 'MM':
            if (number === 1) {
                result += 'mesec';
            } else if (number === 2) {
                result += 'meseca';
            } else if (number === 3 || number === 4) {
                result += 'mesece';
            } else {
                result += 'mesecev';
            }
            return result;
        case 'yy':
            if (number === 1) {
                result += 'leto';
            } else if (number === 2) {
                result += 'leti';
            } else if (number === 3 || number === 4) {
                result += 'leta';
            } else {
                result += 'let';
            }
            return result;
        }
    }

    return moment.defineLocale('sl', {
        months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        weekdays : 'nedelja_ponedeljek_torek_sreda_╨ö╨îetrtek_petek_sobota'.split('_'),
        weekdaysShort : 'ned._pon._tor._sre._╨ö╨îet._pet._sob.'.split('_'),
        weekdaysMin : 'ne_po_to_sr_╨ö╨îe_pe_so'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'LT:ss',
            L : 'DD. MM. YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY LT',
            LLLL : 'dddd, D. MMMM YYYY LT'
        },
        calendar : {
            sameDay  : '[danes ob] LT',
            nextDay  : '[jutri ob] LT',

            nextWeek : function () {
                switch (this.day()) {
                case 0:
                    return '[v] [nedeljo] [ob] LT';
                case 3:
                    return '[v] [sredo] [ob] LT';
                case 6:
                    return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[v] dddd [ob] LT';
                }
            },
            lastDay  : '[v╨ö╨îeraj ob] LT',
            lastWeek : function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return '[prej╨ò╨Änja] dddd [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prej╨ò╨Änji] dddd [ob] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '╨ö╨îez %s',
            past   : '%s nazaj',
            s      : 'nekaj sekund',
            m      : translate,
            mm     : translate,
            h      : translate,
            hh     : translate,
            d      : 'en dan',
            dd     : translate,
            M      : 'en mesec',
            MM     : translate,
            y      : 'eno leto',
            yy     : translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Albanian (sq)
// author : Flak╨ô┬½rim Ismani : https://github.com/flakerimi
// author: Menelion Elens╨ô╤öle: https://github.com/Oire (tests)
// author : Oerd Cukalla : https://github.com/oerd (fixes)

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('sq', {
        months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N╨ô┬½ntor_Dhjetor'.split('_'),
        monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N╨ô┬½n_Dhj'.split('_'),
        weekdays : 'E Diel_E H╨ô┬½n╨ô┬½_E Mart╨ô┬½_E M╨ô┬½rkur╨ô┬½_E Enjte_E Premte_E Shtun╨ô┬½'.split('_'),
        weekdaysShort : 'Die_H╨ô┬½n_Mar_M╨ô┬½r_Enj_Pre_Sht'.split('_'),
        weekdaysMin : 'D_H_Ma_M╨ô┬½_E_P_Sh'.split('_'),
        meridiemParse: /PD|MD/,
        isPM: function (input) {
            return input.charAt(0) === 'M';
        },
        meridiem : function (hours, minutes, isLower) {
            return hours < 12 ? 'PD' : 'MD';
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
            sameDay : '[Sot n╨ô┬½] LT',
            nextDay : '[Nes╨ô┬½r n╨ô┬½] LT',
            nextWeek : 'dddd [n╨ô┬½] LT',
            lastDay : '[Dje n╨ô┬½] LT',
            lastWeek : 'dddd [e kaluar n╨ô┬½] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'n╨ô┬½ %s',
            past : '%s m╨ô┬½ par╨ô┬½',
            s : 'disa sekonda',
            m : 'nj╨ô┬½ minut╨ô┬½',
            mm : '%d minuta',
            h : 'nj╨ô┬½ or╨ô┬½',
            hh : '%d or╨ô┬½',
            d : 'nj╨ô┬½ dit╨ô┬½',
            dd : '%d dit╨ô┬½',
            M : 'nj╨ô┬½ muaj',
            MM : '%d muaj',
            y : 'nj╨ô┬½ vit',
            yy : '%d vite'
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Serbian-cyrillic (sr-cyrl)
// author : Milan Jana╨ö╨îkovi╨öΓÇí<milanjanackovic@gmail.com> : https://github.com/milan-j

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var translator = {
        words: { //Different grammatical cases
            m: ['╨í┬ÿ╨á┬╡╨á╥æ╨á┬░╨á╨à ╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ', '╨í┬ÿ╨á┬╡╨á╥æ╨á╨à╨á┬╡ ╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨á┬╡'],
            mm: ['╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ', '╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨á┬╡', '╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨íΓÇÜ╨á┬░'],
            h: ['╨í┬ÿ╨á┬╡╨á╥æ╨á┬░╨á╨à ╨í╨â╨á┬░╨íΓÇÜ', '╨í┬ÿ╨á┬╡╨á╥æ╨á╨à╨á╤ò╨á╤û ╨í╨â╨á┬░╨íΓÇÜ╨á┬░'],
            hh: ['╨í╨â╨á┬░╨íΓÇÜ', '╨í╨â╨á┬░╨íΓÇÜ╨á┬░', '╨í╨â╨á┬░╨íΓÇÜ╨á╤æ'],
            dd: ['╨á╥æ╨á┬░╨á╨à', '╨á╥æ╨á┬░╨á╨à╨á┬░', '╨á╥æ╨á┬░╨á╨à╨á┬░'],
            MM: ['╨á╤ÿ╨á┬╡╨í╨â╨á┬╡╨íΓÇá', '╨á╤ÿ╨á┬╡╨í╨â╨á┬╡╨íΓÇá╨á┬░', '╨á╤ÿ╨á┬╡╨í╨â╨á┬╡╨íΓÇá╨á╤æ'],
            yy: ['╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨á┬░', '╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨á┬╡', '╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨á┬░']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    return moment.defineLocale('sr-cyrl', {
        months: ['╨í┬ÿ╨á┬░╨á╨à╨í╤ô╨á┬░╨í╨é', '╨íΓÇ₧╨á┬╡╨á┬▒╨í╨é╨í╤ô╨á┬░╨í╨é', '╨á╤ÿ╨á┬░╨í╨é╨íΓÇÜ', '╨á┬░╨á╤ù╨í╨é╨á╤æ╨á┬╗', '╨á╤ÿ╨á┬░╨í┬ÿ', '╨í┬ÿ╨í╤ô╨á╨à', '╨í┬ÿ╨í╤ô╨á┬╗', '╨á┬░╨á╨å╨á╤û╨í╤ô╨í╨â╨íΓÇÜ', '╨í╨â╨á┬╡╨á╤ù╨íΓÇÜ╨á┬╡╨á╤ÿ╨á┬▒╨á┬░╨í╨é', '╨á╤ò╨á╤ö╨íΓÇÜ╨á╤ò╨á┬▒╨á┬░╨í╨é', '╨á╨à╨á╤ò╨á╨å╨á┬╡╨á╤ÿ╨á┬▒╨á┬░╨í╨é', '╨á╥æ╨á┬╡╨íΓÇá╨á┬╡╨á╤ÿ╨á┬▒╨á┬░╨í╨é'],
        monthsShort: ['╨í┬ÿ╨á┬░╨á╨à.', '╨íΓÇ₧╨á┬╡╨á┬▒.', '╨á╤ÿ╨á┬░╨í╨é.', '╨á┬░╨á╤ù╨í╨é.', '╨á╤ÿ╨á┬░╨í┬ÿ', '╨í┬ÿ╨í╤ô╨á╨à', '╨í┬ÿ╨í╤ô╨á┬╗', '╨á┬░╨á╨å╨á╤û.', '╨í╨â╨á┬╡╨á╤ù.', '╨á╤ò╨á╤ö╨íΓÇÜ.', '╨á╨à╨á╤ò╨á╨å.', '╨á╥æ╨á┬╡╨íΓÇá.'],
        weekdays: ['╨á╨à╨á┬╡╨á╥æ╨á┬╡╨íΓäó╨á┬░', '╨á╤ù╨á╤ò╨á╨à╨á┬╡╨á╥æ╨á┬╡╨íΓäó╨á┬░╨á╤ö', '╨í╤ô╨íΓÇÜ╨á╤ò╨í╨é╨á┬░╨á╤ö', '╨í╨â╨í╨é╨á┬╡╨á╥æ╨á┬░', '╨íΓÇí╨á┬╡╨íΓÇÜ╨á╨å╨í╨é╨íΓÇÜ╨á┬░╨á╤ö', '╨á╤ù╨á┬╡╨íΓÇÜ╨á┬░╨á╤ö', '╨í╨â╨í╤ô╨á┬▒╨á╤ò╨íΓÇÜ╨á┬░'],
        weekdaysShort: ['╨á╨à╨á┬╡╨á╥æ.', '╨á╤ù╨á╤ò╨á╨à.', '╨í╤ô╨íΓÇÜ╨á╤ò.', '╨í╨â╨í╨é╨á┬╡.', '╨íΓÇí╨á┬╡╨íΓÇÜ.', '╨á╤ù╨á┬╡╨íΓÇÜ.', '╨í╨â╨í╤ô╨á┬▒.'],
        weekdaysMin: ['╨á╨à╨á┬╡', '╨á╤ù╨á╤ò', '╨í╤ô╨íΓÇÜ', '╨í╨â╨í╨é', '╨íΓÇí╨á┬╡', '╨á╤ù╨á┬╡', '╨í╨â╨í╤ô'],
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'LT:ss',
            L: 'DD. MM. YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY LT',
            LLLL: 'dddd, D. MMMM YYYY LT'
        },
        calendar: {
            sameDay: '[╨á╥æ╨á┬░╨á╨à╨á┬░╨í╨â ╨í╤ô] LT',
            nextDay: '[╨í╨â╨í╤ô╨íΓÇÜ╨í╨é╨á┬░ ╨í╤ô] LT',

            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[╨í╤ô] [╨á╨à╨á┬╡╨á╥æ╨á┬╡╨íΓäó╨í╤ô] [╨í╤ô] LT';
                case 3:
                    return '[╨í╤ô] [╨í╨â╨í╨é╨á┬╡╨á╥æ╨í╤ô] [╨í╤ô] LT';
                case 6:
                    return '[╨í╤ô] [╨í╨â╨í╤ô╨á┬▒╨á╤ò╨íΓÇÜ╨í╤ô] [╨í╤ô] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[╨í╤ô] dddd [╨í╤ô] LT';
                }
            },
            lastDay  : '[╨í┬ÿ╨í╤ô╨íΓÇí╨á┬╡ ╨í╤ô] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[╨á╤ù╨í╨é╨á╤ò╨íΓé¼╨á┬╗╨á┬╡] [╨á╨à╨á┬╡╨á╥æ╨á┬╡╨íΓäó╨á┬╡] [╨í╤ô] LT',
                    '[╨á╤ù╨í╨é╨á╤ò╨íΓé¼╨á┬╗╨á╤ò╨á╤û] [╨á╤ù╨á╤ò╨á╨à╨á┬╡╨á╥æ╨á┬╡╨íΓäó╨á╤ö╨á┬░] [╨í╤ô] LT',
                    '[╨á╤ù╨í╨é╨á╤ò╨íΓé¼╨á┬╗╨á╤ò╨á╤û] [╨í╤ô╨íΓÇÜ╨á╤ò╨í╨é╨á╤ö╨á┬░] [╨í╤ô] LT',
                    '[╨á╤ù╨í╨é╨á╤ò╨íΓé¼╨á┬╗╨á┬╡] [╨í╨â╨í╨é╨á┬╡╨á╥æ╨á┬╡] [╨í╤ô] LT',
                    '[╨á╤ù╨í╨é╨á╤ò╨íΓé¼╨á┬╗╨á╤ò╨á╤û] [╨íΓÇí╨á┬╡╨íΓÇÜ╨á╨å╨í╨é╨íΓÇÜ╨á╤ö╨á┬░] [╨í╤ô] LT',
                    '[╨á╤ù╨í╨é╨á╤ò╨íΓé¼╨á┬╗╨á╤ò╨á╤û] [╨á╤ù╨á┬╡╨íΓÇÜ╨á╤ö╨á┬░] [╨í╤ô] LT',
                    '[╨á╤ù╨í╨é╨á╤ò╨íΓé¼╨á┬╗╨á┬╡] [╨í╨â╨í╤ô╨á┬▒╨á╤ò╨íΓÇÜ╨á┬╡] [╨í╤ô] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '╨á┬╖╨á┬░ %s',
            past   : '╨á╤ù╨í╨é╨á┬╡ %s',
            s      : '╨á╨à╨á┬╡╨á╤ö╨á╤ò╨á┬╗╨á╤æ╨á╤ö╨á╤ò ╨í╨â╨á┬╡╨á╤ö╨í╤ô╨á╨à╨á╥æ╨á╤æ',
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : '╨á╥æ╨á┬░╨á╨à',
            dd     : translator.translate,
            M      : '╨á╤ÿ╨á┬╡╨í╨â╨á┬╡╨íΓÇá',
            MM     : translator.translate,
            y      : '╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨í╤ô',
            yy     : translator.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Serbian-latin (sr)
// author : Milan Jana╨ö╨îkovi╨öΓÇí<milanjanackovic@gmail.com> : https://github.com/milan-j

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var translator = {
        words: { //Different grammatical cases
            m: ['jedan minut', 'jedne minute'],
            mm: ['minut', 'minute', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mesec', 'meseca', 'meseci'],
            yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    return moment.defineLocale('sr', {
        months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
        monthsShort: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
        weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', '╨ö╨îetvrtak', 'petak', 'subota'],
        weekdaysShort: ['ned.', 'pon.', 'uto.', 'sre.', '╨ö╨îet.', 'pet.', 'sub.'],
        weekdaysMin: ['ne', 'po', 'ut', 'sr', '╨ö╨îe', 'pe', 'su'],
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'LT:ss',
            L: 'DD. MM. YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY LT',
            LLLL: 'dddd, D. MMMM YYYY LT'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',

            nextWeek: function () {
                switch (this.day()) {
                case 0:
                    return '[u] [nedelju] [u] LT';
                case 3:
                    return '[u] [sredu] [u] LT';
                case 6:
                    return '[u] [subotu] [u] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[ju╨ö╨îe u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[pro╨ò╨Äle] [nedelje] [u] LT',
                    '[pro╨ò╨Älog] [ponedeljka] [u] LT',
                    '[pro╨ò╨Älog] [utorka] [u] LT',
                    '[pro╨ò╨Äle] [srede] [u] LT',
                    '[pro╨ò╨Älog] [╨ö╨îetvrtka] [u] LT',
                    '[pro╨ò╨Älog] [petka] [u] LT',
                    '[pro╨ò╨Äle] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'pre %s',
            s      : 'nekoliko sekundi',
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : 'dan',
            dd     : translator.translate,
            M      : 'mesec',
            MM     : translator.translate,
            y      : 'godinu',
            yy     : translator.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : swedish (sv)
// author : Jens Alm : https://github.com/ulmus

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('sv', {
        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 's╨ô┬╢ndag_m╨ô╥Éndag_tisdag_onsdag_torsdag_fredag_l╨ô┬╢rdag'.split('_'),
        weekdaysShort : 's╨ô┬╢n_m╨ô╥Én_tis_ons_tor_fre_l╨ô┬╢r'.split('_'),
        weekdaysMin : 's╨ô┬╢_m╨ô╥É_ti_on_to_fr_l╨ô┬╢'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Ig╨ô╥Ér] LT',
            nextWeek: 'dddd LT',
            lastWeek: '[F╨ô┬╢rra] dddd[en] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : 'f╨ô┬╢r %s sedan',
            s : 'n╨ô╥Égra sekunder',
            m : 'en minut',
            mm : '%d minuter',
            h : 'en timme',
            hh : '%d timmar',
            d : 'en dag',
            dd : '%d dagar',
            M : 'en m╨ô╥Énad',
            MM : '%d m╨ô╥Énader',
            y : 'ett ╨ô╥Ér',
            yy : '%d ╨ô╥Ér'
        },
        ordinalParse: /\d{1,2}(e|a)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'e' :
                (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                (b === 3) ? 'e' : 'e';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : tamil (ta)
// author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    /*var symbolMap = {
            '1': '╨░╨ç┬º',
            '2': '╨░╨ç╨ü',
            '3': '╨░╨ç┬⌐',
            '4': '╨░╨ç╨ä',
            '5': '╨░╨ç┬½',
            '6': '╨░╨ç┬¼',
            '7': '╨░╨ç┬¡',
            '8': '╨░╨ç┬«',
            '9': '╨░╨ç╨ç',
            '0': '╨░╨ç┬ª'
        },
        numberMap = {
            '╨░╨ç┬º': '1',
            '╨░╨ç╨ü': '2',
            '╨░╨ç┬⌐': '3',
            '╨░╨ç╨ä': '4',
            '╨░╨ç┬½': '5',
            '╨░╨ç┬¼': '6',
            '╨░╨ç┬¡': '7',
            '╨░╨ç┬«': '8',
            '╨░╨ç╨ç': '9',
            '╨░╨ç┬ª': '0'
        }; */

    return moment.defineLocale('ta', {
        months : '╨░┬«╤Ü╨░┬«┬⌐╨░┬«┬╡╨░┬«┬░╨░┬«╤ù_╨░┬«╨ä╨░┬«╤ù╨░┬«╨ä╨░╨ç╨î╨░┬«┬░╨░┬«┬╡╨░┬«┬░╨░┬«╤ù_╨░┬«┬«╨░┬«╤ò╨░┬«┬░╨░╨ç╨î╨░┬«╤Ö╨░╨ç╨î_╨░┬«╨Å╨░┬«╨ä╨░╨ç╨î╨░┬«┬░╨░┬«╨å╨░╨ç╨î_╨░┬«┬«╨░╨çΓÇí_╨░┬«╤Ü╨░╨çΓÇÜ╨░┬«┬⌐╨░╨ç╨î_╨░┬«╤Ü╨░╨çΓÇÜ╨░┬«╨å╨░╨çΓé¼_╨░┬«ΓÇá╨░┬«ΓÇó╨░┬«╤æ╨░╨ç╨î╨░┬«╤ƒ╨░╨ç╨î_╨░┬«╤Ö╨░╨çΓÇá╨░┬«╨ä╨░╨ç╨î╨░┬«╤ƒ╨░╨çΓÇá╨░┬«┬«╨░╨ç╨î╨░┬«╨ä╨░┬«┬░╨░╨ç╨î_╨░┬«ΓÇª╨░┬«ΓÇó╨░╨ç╨î╨░┬«╤ƒ╨░╨çΓÇí╨░┬«╤ò╨░┬«╨ä╨░┬«┬░╨░╨ç╨î_╨░┬«╨ü╨░┬«┬╡╨░┬«┬«╨░╨ç╨î╨░┬«╨ä╨░┬«┬░╨░╨ç╨î_╨░┬«╤ƒ╨░┬«╤ù╨░┬«╤Ö╨░┬«┬«╨░╨ç╨î╨░┬«╨ä╨░┬«┬░╨░╨ç╨î'.split('_'),
        monthsShort : '╨░┬«╤Ü╨░┬«┬⌐╨░┬«┬╡╨░┬«┬░╨░┬«╤ù_╨░┬«╨ä╨░┬«╤ù╨░┬«╨ä╨░╨ç╨î╨░┬«┬░╨░┬«┬╡╨░┬«┬░╨░┬«╤ù_╨░┬«┬«╨░┬«╤ò╨░┬«┬░╨░╨ç╨î╨░┬«╤Ö╨░╨ç╨î_╨░┬«╨Å╨░┬«╨ä╨░╨ç╨î╨░┬«┬░╨░┬«╨å╨░╨ç╨î_╨░┬«┬«╨░╨çΓÇí_╨░┬«╤Ü╨░╨çΓÇÜ╨░┬«┬⌐╨░╨ç╨î_╨░┬«╤Ü╨░╨çΓÇÜ╨░┬«╨å╨░╨çΓé¼_╨░┬«ΓÇá╨░┬«ΓÇó╨░┬«╤æ╨░╨ç╨î╨░┬«╤ƒ╨░╨ç╨î_╨░┬«╤Ö╨░╨çΓÇá╨░┬«╨ä╨░╨ç╨î╨░┬«╤ƒ╨░╨çΓÇá╨░┬«┬«╨░╨ç╨î╨░┬«╨ä╨░┬«┬░╨░╨ç╨î_╨░┬«ΓÇª╨░┬«ΓÇó╨░╨ç╨î╨░┬«╤ƒ╨░╨çΓÇí╨░┬«╤ò╨░┬«╨ä╨░┬«┬░╨░╨ç╨î_╨░┬«╨ü╨░┬«┬╡╨░┬«┬«╨░╨ç╨î╨░┬«╨ä╨░┬«┬░╨░╨ç╨î_╨░┬«╤ƒ╨░┬«╤ù╨░┬«╤Ö╨░┬«┬«╨░╨ç╨î╨░┬«╨ä╨░┬«┬░╨░╨ç╨î'.split('_'),
        weekdays : '╨░┬«╤¢╨░┬«╤ò╨░┬«╨ç╨░┬«╤ù╨░┬«┬▒╨░╨ç╨î╨░┬«┬▒╨░╨ç╨â╨░┬«ΓÇó╨░╨ç╨î╨░┬«ΓÇó╨░┬«╤ù╨░┬«╥æ╨░┬«┬«╨░╨çΓé¼_╨░┬«┬ñ╨░┬«╤ù╨░┬«Γäó╨░╨ç╨î╨░┬«ΓÇó╨░┬«╤ƒ╨░╨ç╨î╨░┬«ΓÇó╨░┬«╤ù╨░┬«╥æ╨░┬«┬«╨░╨çΓé¼_╨░┬«╤Ö╨░╨çΓÇá╨░┬«┬╡╨░╨ç╨î╨░┬«┬╡╨░┬«╤ò╨░┬«╨ç╨░╨ç╨î╨░┬«ΓÇó╨░┬«╤ù╨░┬«╥æ╨░┬«┬«╨░╨çΓé¼_╨░┬«╨ä╨░╨ç╨â╨░┬«┬ñ╨░┬«┬⌐╨░╨ç╨î╨░┬«ΓÇó╨░┬«╤ù╨░┬«╥æ╨░┬«┬«╨░╨çΓé¼_╨░┬«┬╡╨░┬«╤ù╨░┬«╨ç╨░┬«╤ò╨░┬«╥æ╨░┬«ΓÇó╨░╨ç╨î╨░┬«ΓÇó╨░┬«╤ù╨░┬«╥æ╨░┬«┬«╨░╨çΓé¼_╨░┬«┬╡╨░╨çΓÇá╨░┬«╤û╨░╨ç╨î╨░┬«╤û╨░┬«╤ù╨░┬«ΓÇó╨░╨ç╨î╨░┬«ΓÇó╨░┬«╤ù╨░┬«╥æ╨░┬«┬«╨░╨çΓé¼_╨░┬«╤Ö╨░┬«┬⌐╨░┬«╤ù╨░┬«ΓÇó╨░╨ç╨î╨░┬«ΓÇó╨░┬«╤ù╨░┬«╥æ╨░┬«┬«╨░╨çΓé¼'.split('_'),
        weekdaysShort : '╨░┬«╤¢╨░┬«╤ò╨░┬«╨ç╨░┬«╤ù╨░┬«┬▒╨░╨ç╨â_╨░┬«┬ñ╨░┬«╤ù╨░┬«Γäó╨░╨ç╨î╨░┬«ΓÇó╨░┬«╤û╨░╨ç╨î_╨░┬«╤Ö╨░╨çΓÇá╨░┬«┬╡╨░╨ç╨î╨░┬«┬╡╨░┬«╤ò╨░┬«╨ç╨░╨ç╨î_╨░┬«╨ä╨░╨ç╨â╨░┬«┬ñ╨░┬«┬⌐╨░╨ç╨î_╨░┬«┬╡╨░┬«╤ù╨░┬«╨ç╨░┬«╤ò╨░┬«╥æ╨░┬«┬⌐╨░╨ç╨î_╨░┬«┬╡╨░╨çΓÇá╨░┬«╤û╨░╨ç╨î╨░┬«╤û╨░┬«╤ù_╨░┬«╤Ö╨░┬«┬⌐╨░┬«╤ù'.split('_'),
        weekdaysMin : '╨░┬«╤¢╨░┬«╤ò_╨░┬«┬ñ╨░┬«╤ù_╨░┬«╤Ö╨░╨çΓÇá_╨░┬«╨ä╨░╨ç╨â_╨░┬«┬╡╨░┬«╤ù_╨░┬«┬╡╨░╨çΓÇá_╨░┬«╤Ö'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, LT',
            LLLL : 'dddd, D MMMM YYYY, LT'
        },
        calendar : {
            sameDay : '[╨░┬«ΓÇí╨░┬«┬⌐╨░╨ç╨î╨░┬«┬▒╨░╨ç╨â] LT',
            nextDay : '[╨░┬«╨ü╨░┬«╤ò╨░┬«╤û╨░╨çΓé¼] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[╨░┬«╨ü╨░╨çΓÇí╨░┬«┬▒╨░╨ç╨î╨░┬«┬▒╨░╨ç╨â] LT',
            lastWeek : '[╨░┬«ΓÇó╨░┬«╤ƒ╨░┬«╨ü╨░╨ç╨î╨░┬«┬ñ ╨░┬«┬╡╨░┬«╤ò╨░┬«┬░╨░┬«┬«╨░╨ç╨î] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ╨░┬«ΓÇí╨░┬«╨å╨░╨ç╨î',
            past : '%s ╨░┬«┬«╨░╨ç╨â╨░┬«┬⌐╨░╨ç╨î',
            s : '╨░┬«ΓÇÖ╨░┬«┬░╨░╨ç╨â ╨░┬«╤Ö╨░┬«╤ù╨░┬«╨å ╨░┬«┬╡╨░┬«╤ù╨░┬«╨ü╨░┬«╤ò╨░┬«╤ƒ╨░┬«╤ù╨░┬«ΓÇó╨░┬«╤û╨░╨ç╨î',
            m : '╨░┬«ΓÇÖ╨░┬«┬░╨░╨ç╨â ╨░┬«╨ü╨░┬«╤ù╨░┬«┬«╨░┬«╤ù╨░┬«╤ƒ╨░┬«┬«╨░╨ç╨î',
            mm : '%d ╨░┬«╨ü╨░┬«╤ù╨░┬«┬«╨░┬«╤ù╨░┬«╤ƒ╨░┬«Γäó╨░╨ç╨î╨░┬«ΓÇó╨░┬«╤û╨░╨ç╨î',
            h : '╨░┬«ΓÇÖ╨░┬«┬░╨░╨ç╨â ╨░┬«┬«╨░┬«╨ê╨░┬«╤ù ╨░┬«╨ü╨░╨çΓÇí╨░┬«┬░╨░┬«┬«╨░╨ç╨î',
            hh : '%d ╨░┬«┬«╨░┬«╨ê╨░┬«╤ù ╨░┬«╨ü╨░╨çΓÇí╨░┬«┬░╨░┬«┬«╨░╨ç╨î',
            d : '╨░┬«ΓÇÖ╨░┬«┬░╨░╨ç╨â ╨░┬«╨ü╨░┬«╤ò╨░┬«╤û╨░╨ç╨î',
            dd : '%d ╨░┬«╨ü╨░┬«╤ò╨░┬«╤ƒ╨░╨ç╨î╨░┬«ΓÇó╨░┬«╤û╨░╨ç╨î',
            M : '╨░┬«ΓÇÖ╨░┬«┬░╨░╨ç╨â ╨░┬«┬«╨░┬«╤ò╨░┬«┬ñ╨░┬«┬«╨░╨ç╨î',
            MM : '%d ╨░┬«┬«╨░┬«╤ò╨░┬«┬ñ╨░┬«Γäó╨░╨ç╨î╨░┬«ΓÇó╨░┬«╤û╨░╨ç╨î',
            y : '╨░┬«ΓÇÖ╨░┬«┬░╨░╨ç╨â ╨░┬«┬╡╨░┬«┬░╨░╨ç╨â╨░┬«╤ƒ╨░┬«┬«╨░╨ç╨î',
            yy : '%d ╨░┬«ΓÇá╨░┬«╨ê╨░╨ç╨î╨░┬«╤ƒ╨░╨ç╨â╨░┬«ΓÇó╨░┬«╤û╨░╨ç╨î'
        },
/*        preparse: function (string) {
            return string.replace(/[╨░╨ç┬º╨░╨ç╨ü╨░╨ç┬⌐╨░╨ç╨ä╨░╨ç┬½╨░╨ç┬¼╨░╨ç┬¡╨░╨ç┬«╨░╨ç╨ç╨░╨ç┬ª]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },*/
        ordinalParse: /\d{1,2}╨░┬«┬╡╨░┬«┬ñ╨░╨ç╨â/,
        ordinal : function (number) {
            return number + '╨░┬«┬╡╨░┬«┬ñ╨░╨ç╨â';
        },


        // refer http://ta.wikipedia.org/s/1er1
        meridiemParse: /╨░┬«╨ç╨░┬«╤ò╨░┬«┬«╨░┬«┬«╨░╨ç╨î|╨░┬«┬╡╨░╨çΓé¼╨░┬«ΓÇó╨░┬«┬▒╨░╨çΓé¼|╨░┬«ΓÇó╨░┬«╤ò╨░┬«╨å╨░╨çΓé¼|╨░┬«╨ü╨░┬«╨ê╨░╨ç╨î╨░┬«╨ä╨░┬«ΓÇó╨░┬«╨å╨░╨ç╨î|╨░┬«╨ï╨░┬«┬▒╨░╨ç╨î╨░┬«╨ä╨░┬«╤ò╨░┬«╤ƒ╨░╨ç╨â|╨░┬«┬«╨░┬«╤ò╨░┬«╨å╨░╨çΓé¼/,
        meridiem : function (hour, minute, isLower) {
            if (hour < 2) {
                return ' ╨░┬«╨ç╨░┬«╤ò╨░┬«┬«╨░┬«┬«╨░╨ç╨î';
            } else if (hour < 6) {
                return ' ╨░┬«┬╡╨░╨çΓé¼╨░┬«ΓÇó╨░┬«┬▒╨░╨çΓé¼';  // ╨░┬«┬╡╨░╨çΓé¼╨░┬«ΓÇó╨░┬«┬▒╨░╨çΓé¼
            } else if (hour < 10) {
                return ' ╨░┬«ΓÇó╨░┬«╤ò╨░┬«╨å╨░╨çΓé¼'; // ╨░┬«ΓÇó╨░┬«╤ò╨░┬«╨å╨░╨çΓé¼
            } else if (hour < 14) {
                return ' ╨░┬«╨ü╨░┬«╨ê╨░╨ç╨î╨░┬«╨ä╨░┬«ΓÇó╨░┬«╨å╨░╨ç╨î'; // ╨░┬«╨ü╨░┬«╨ê╨░╨ç╨î╨░┬«╨ä╨░┬«ΓÇó╨░┬«╨å╨░╨ç╨î
            } else if (hour < 18) {
                return ' ╨░┬«╨ï╨░┬«┬▒╨░╨ç╨î╨░┬«╨ä╨░┬«╤ò╨░┬«╤ƒ╨░╨ç╨â'; // ╨░┬«╨ï╨░┬«┬▒╨░╨ç╨î╨░┬«╨ä╨░┬«╤ò╨░┬«╤ƒ╨░╨ç╨â
            } else if (hour < 22) {
                return ' ╨░┬«┬«╨░┬«╤ò╨░┬«╨å╨░╨çΓé¼'; // ╨░┬«┬«╨░┬«╤ò╨░┬«╨å╨░╨çΓé¼
            } else {
                return ' ╨░┬«╨ç╨░┬«╤ò╨░┬«┬«╨░┬«┬«╨░╨ç╨î';
            }
        },
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '╨░┬«╨ç╨░┬«╤ò╨░┬«┬«╨░┬«┬«╨░╨ç╨î') {
                return hour < 2 ? hour : hour + 12;
            } else if (meridiem === '╨░┬«┬╡╨░╨çΓé¼╨░┬«ΓÇó╨░┬«┬▒╨░╨çΓé¼' || meridiem === '╨░┬«ΓÇó╨░┬«╤ò╨░┬«╨å╨░╨çΓé¼') {
                return hour;
            } else if (meridiem === '╨░┬«╨ü╨░┬«╨ê╨░╨ç╨î╨░┬«╨ä╨░┬«ΓÇó╨░┬«╨å╨░╨ç╨î') {
                return hour >= 10 ? hour : hour + 12;
            } else {
                return hour + 12;
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : thai (th)
// author : Kridsada Thanabulpong : https://github.com/sirn

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('th', {
        months : '╨░╤æ╨Ä╨░╤æ╨â╨░╤æ╨ê╨░╤æ╨å╨░╤æΓÇ₧╨░╤æ╨Ä_╨░╤æ╨â╨░╤æ╤æ╨░╤æ╨Ä╨░╤æ ╨░╤æ╨å╨░╤æ╤¢╨░╤æ┬▒╨░╤æΓäó╨░╤æ┬ÿ╨░Γäû╨è_╨░╤æ╨Ä╨░╤æ┬╡╨░╤æΓäó╨░╤æ╨å╨░╤æΓÇ₧╨░╤æ╨Ä_╨░Γäû╨é╨░╤æ╨Ä╨░╤æ┬⌐╨░╤æ╨å╨░╤æ╤₧╨░╤æΓäó_╨░╤æ╤¢╨░╤æ┬ñ╨░╤æ┬⌐╨░╤æ ╨░╤æ╨å╨░╤æΓÇ₧╨░╤æ╨Ä_╨░╤æ╨Ä╨░╤æ╥æ╨░╤æΓÇô╨░╤æ╤æ╨░╤æΓäó╨░╤æ╨å╨░╤æ╤₧╨░╤æΓäó_╨░╤æ╨â╨░╤æ╨ê╨░╤æ╨â╨░╤æ╨ï╨░╤æ╨å╨░╤æΓÇ₧╨░╤æ╨Ä_╨░╤æ╨ä╨░╤æ╥æ╨░╤æΓÇí╨░╤æ┬½╨░╤æ╨å╨░╤æΓÇ₧╨░╤æ╨Ä_╨░╤æ╨â╨░╤æ┬▒╨░╤æΓäó╨░╤æ╤₧╨░╤æ╨å╨░╤æ╤₧╨░╤æΓäó_╨░╤æΓÇó╨░╤æ╤æ╨░╤æ╥É╨░╤æ╨å╨░╤æΓÇ₧╨░╤æ╨Ä_╨░╤æ╤¢╨░╤æ┬ñ╨░╤æ╨ü╨░╤æΓé¼╨░╤æ╥æ╨░╤æ╨â╨░╤æ╨å╨░╤æ╤₧╨░╤æΓäó_╨░╤æ┬ÿ╨░╤æ┬▒╨░╤æΓäó╨░╤æ┬º╨░╤æ╨å╨░╤æΓÇ₧╨░╤æ╨Ä'.split('_'),
        monthsShort : '╨░╤æ╨Ä╨░╤æ╨â╨░╤æ╨ê╨░╤æ╨å_╨░╤æ╨â╨░╤æ╤æ╨░╤æ╨Ä╨░╤æ ╨░╤æ╨å_╨░╤æ╨Ä╨░╤æ┬╡╨░╤æΓäó╨░╤æ╨å_╨░Γäû╨é╨░╤æ╨Ä╨░╤æ┬⌐╨░╤æ╨å_╨░╤æ╤¢╨░╤æ┬ñ╨░╤æ┬⌐╨░╤æ ╨░╤æ╨å_╨░╤æ╨Ä╨░╤æ╥æ╨░╤æΓÇô╨░╤æ╤æ╨░╤æΓäó╨░╤æ╨å_╨░╤æ╨â╨░╤æ╨ê╨░╤æ╨â╨░╤æ╨ï╨░╤æ╨å_╨░╤æ╨ä╨░╤æ╥æ╨░╤æΓÇí╨░╤æ┬½╨░╤æ╨å_╨░╤æ╨â╨░╤æ┬▒╨░╤æΓäó╨░╤æ╤₧╨░╤æ╨å_╨░╤æΓÇó╨░╤æ╤æ╨░╤æ╥É╨░╤æ╨å_╨░╤æ╤¢╨░╤æ┬ñ╨░╤æ╨ü╨░╤æΓé¼╨░╤æ╥æ╨░╤æ╨â╨░╤æ╨å_╨░╤æ┬ÿ╨░╤æ┬▒╨░╤æΓäó╨░╤æ┬º╨░╤æ╨å'.split('_'),
        weekdays : '╨░╤æ┬¡╨░╤æ╨å╨░╤æΓÇö╨░╤æ╥æ╨░╤æΓÇó╨░╤æ╤₧╨░Γäû╨è_╨░╤æΓé¼╨░╤æ┬▒╨░╤æΓäó╨░╤æΓÇö╨░╤æ╨ê╨░Γäû╨è_╨░╤æ┬¡╨░╤æ┬▒╨░╤æΓÇí╨░╤æΓÇ₧╨░╤æ╨å╨░╤æ╨ê_╨░╤æ╤¢╨░╤æ╤æ╨░╤æ┬ÿ_╨░╤æ╤¢╨░╤æ┬ñ╨░╤æ┬½╨░╤æ┬▒╨░╤æ╨ä╨░╤æ╤Ö╨░╤æΓÇ¥╨░╤æ┬╡_╨░╤æ╨ü╨░╤æ╤æ╨░╤æ╨â╨░╤æ╨ê╨░Γäû╨è_╨░Γäû╨é╨░╤æ╨ä╨░╤æ╨å╨░╤æ╨ê╨░Γäû╨è'.split('_'),
        weekdaysShort : '╨░╤æ┬¡╨░╤æ╨å╨░╤æΓÇö╨░╤æ╥æ╨░╤æΓÇó╨░╤æ╤₧╨░Γäû╨è_╨░╤æΓé¼╨░╤æ┬▒╨░╤æΓäó╨░╤æΓÇö╨░╤æ╨ê╨░Γäû╨è_╨░╤æ┬¡╨░╤æ┬▒╨░╤æΓÇí╨░╤æΓÇ₧╨░╤æ╨å╨░╤æ╨ê_╨░╤æ╤¢╨░╤æ╤æ╨░╤æ┬ÿ_╨░╤æ╤¢╨░╤æ┬ñ╨░╤æ┬½╨░╤æ┬▒╨░╤æ╨ä_╨░╤æ╨ü╨░╤æ╤æ╨░╤æ╨â╨░╤æ╨ê╨░Γäû╨è_╨░Γäû╨é╨░╤æ╨ä╨░╤æ╨å╨░╤æ╨ê╨░Γäû╨è'.split('_'), // yes, three characters difference
        weekdaysMin : '╨░╤æ┬¡╨░╤æ╨å._╨░╤æΓé¼._╨░╤æ┬¡._╨░╤æ╤¢._╨░╤æ╤¢╨░╤æ┬ñ._╨░╤æ╨ü._╨░╤æ╨ä.'.split('_'),
        longDateFormat : {
            LT : 'H ╨░╤æΓäó╨░╤æ╨å╨░╤æ┬¼╨░╤æ╥æ╨░╤æ╨â╨░╤æ╨å m ╨░╤æΓäó╨░╤æ╨å╨░╤æΓÇö╨░╤æ┬╡',
            LTS : 'LT s ╨░╤æ┬º╨░╤æ╥æ╨░╤æΓäó╨░╤æ╨å╨░╤æΓÇö╨░╤æ┬╡',
            L : 'YYYY/MM/DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY ╨░Γäû╨é╨░╤æ┬º╨░╤æ╥É╨░╤æ╨å LT',
            LLLL : '╨░╤æ┬º╨░╤æ┬▒╨░╤æΓäódddd╨░╤æΓÇö╨░╤æ┬╡╨░ΓäûΓé¼ D MMMM YYYY ╨░Γäû╨é╨░╤æ┬º╨░╤æ╥É╨░╤æ╨å LT'
        },
        meridiemParse: /╨░╤æ╨â╨░ΓäûΓé¼╨░╤æ┬¡╨░╤æΓäó╨░Γäû╨é╨░╤æΓÇö╨░╤æ┬╡╨░ΓäûΓé¼╨░╤æ╤₧╨░╤æΓÇí|╨░╤æ┬½╨░╤æ╥É╨░╤æ┬▒╨░╤æΓÇí╨░Γäû╨é╨░╤æΓÇö╨░╤æ┬╡╨░ΓäûΓé¼╨░╤æ╤₧╨░╤æΓÇí/,
        isPM: function (input) {
            return input === '╨░╤æ┬½╨░╤æ╥É╨░╤æ┬▒╨░╤æΓÇí╨░Γäû╨é╨░╤æΓÇö╨░╤æ┬╡╨░ΓäûΓé¼╨░╤æ╤₧╨░╤æΓÇí';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return '╨░╤æ╨â╨░ΓäûΓé¼╨░╤æ┬¡╨░╤æΓäó╨░Γäû╨é╨░╤æΓÇö╨░╤æ┬╡╨░ΓäûΓé¼╨░╤æ╤₧╨░╤æΓÇí';
            } else {
                return '╨░╤æ┬½╨░╤æ╥É╨░╤æ┬▒╨░╤æΓÇí╨░Γäû╨é╨░╤æΓÇö╨░╤æ┬╡╨░ΓäûΓé¼╨░╤æ╤₧╨░╤æΓÇí';
            }
        },
        calendar : {
            sameDay : '[╨░╤æ┬º╨░╤æ┬▒╨░╤æΓäó╨░╤æΓäó╨░╤æ┬╡╨░ΓäûΓÇ░ ╨░Γäû╨é╨░╤æ┬º╨░╤æ╥É╨░╤æ╨å] LT',
            nextDay : '[╨░╤æ╤¢╨░╤æ╨ê╨░╤æ╤æ╨░ΓäûΓé¼╨░╤æΓÇí╨░╤æΓäó╨░╤æ┬╡╨░ΓäûΓÇ░ ╨░Γäû╨é╨░╤æ┬º╨░╤æ╥É╨░╤æ╨å] LT',
            nextWeek : 'dddd[╨░╤æ┬½╨░╤æΓäó╨░ΓäûΓÇ░╨░╤æ╨å ╨░Γäû╨é╨░╤æ┬º╨░╤æ╥É╨░╤æ╨å] LT',
            lastDay : '[╨░Γäû╨é╨░╤æ╨Ä╨░╤æ┬╖╨░ΓäûΓé¼╨░╤æ┬¡╨░╤æ┬º╨░╤æ╨å╨░╤æΓäó╨░╤æΓäó╨░╤æ┬╡╨░ΓäûΓÇ░ ╨░Γäû╨é╨░╤æ┬º╨░╤æ╥É╨░╤æ╨å] LT',
            lastWeek : '[╨░╤æ┬º╨░╤æ┬▒╨░╤æΓäó]dddd[╨░╤æΓÇö╨░╤æ┬╡╨░ΓäûΓé¼╨░Γäû╨â╨░╤æ╥É╨░ΓäûΓÇ░╨░╤æ┬º ╨░Γäû╨é╨░╤æ┬º╨░╤æ╥É╨░╤æ╨å] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '╨░╤æ┬¡╨░╤æ┬╡╨░╤æ╨â %s',
            past : '%s╨░╤æΓÇö╨░╤æ┬╡╨░ΓäûΓé¼╨░Γäû╨â╨░╤æ╥É╨░ΓäûΓÇ░╨░╤æ┬º',
            s : '╨░ΓäûΓÇ₧╨░╤æ╨Ä╨░ΓäûΓé¼╨░╤æ╨â╨░╤æ┬╡╨░ΓäûΓé¼╨░╤æ┬º╨░╤æ╥æ╨░╤æΓäó╨░╤æ╨å╨░╤æΓÇö╨░╤æ┬╡',
            m : '1 ╨░╤æΓäó╨░╤æ╨å╨░╤æΓÇö╨░╤æ┬╡',
            mm : '%d ╨░╤æΓäó╨░╤æ╨å╨░╤æΓÇö╨░╤æ┬╡',
            h : '1 ╨░╤æ╨ë╨░╤æ┬▒╨░ΓäûΓé¼╨░╤æ┬º╨░ΓäûΓÇÜ╨░╤æ╨Ä╨░╤æΓÇí',
            hh : '%d ╨░╤æ╨ë╨░╤æ┬▒╨░ΓäûΓé¼╨░╤æ┬º╨░ΓäûΓÇÜ╨░╤æ╨Ä╨░╤æΓÇí',
            d : '1 ╨░╤æ┬º╨░╤æ┬▒╨░╤æΓäó',
            dd : '%d ╨░╤æ┬º╨░╤æ┬▒╨░╤æΓäó',
            M : '1 ╨░Γäû╨é╨░╤æΓÇ¥╨░╤æ┬╖╨░╤æ┬¡╨░╤æΓäó',
            MM : '%d ╨░Γäû╨é╨░╤æΓÇ¥╨░╤æ┬╖╨░╤æ┬¡╨░╤æΓäó',
            y : '1 ╨░╤æΓÇ║╨░╤æ┬╡',
            yy : '%d ╨░╤æΓÇ║╨░╤æ┬╡'
        }
    });
}));

// moment.js locale configuration
// locale : Tagalog/Filipino (tl-ph)
// author : Dan Hagman

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('tl-ph', {
        months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'MM/D/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY LT',
            LLLL : 'dddd, MMMM DD, YYYY LT'
        },
        calendar : {
            sameDay: '[Ngayon sa] LT',
            nextDay: '[Bukas sa] LT',
            nextWeek: 'dddd [sa] LT',
            lastDay: '[Kahapon sa] LT',
            lastWeek: 'dddd [huling linggo] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'sa loob ng %s',
            past : '%s ang nakalipas',
            s : 'ilang segundo',
            m : 'isang minuto',
            mm : '%d minuto',
            h : 'isang oras',
            hh : '%d oras',
            d : 'isang araw',
            dd : '%d araw',
            M : 'isang buwan',
            MM : '%d buwan',
            y : 'isang taon',
            yy : '%d taon'
        },
        ordinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : turkish (tr)
// authors : Erhan Gundogan : https://github.com/erhangundogan,
//           Burak Yi╨ö╤ƒit Kaya: https://github.com/BYK

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    var suffixes = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',

        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',

        3: '\'╨ô╤ÿnc╨ô╤ÿ',
        4: '\'╨ô╤ÿnc╨ô╤ÿ',
        100: '\'╨ô╤ÿnc╨ô╤ÿ',

        6: '\'nc╨ö┬▒',

        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',

        60: '\'╨ö┬▒nc╨ö┬▒',
        90: '\'╨ö┬▒nc╨ö┬▒'
    };

    return moment.defineLocale('tr', {
        months : 'Ocak_╨ò╤¢ubat_Mart_Nisan_May╨ö┬▒s_Haziran_Temmuz_A╨ö╤ƒustos_Eyl╨ô╤ÿl_Ekim_Kas╨ö┬▒m_Aral╨ö┬▒k'.split('_'),
        monthsShort : 'Oca_╨ò╤¢ub_Mar_Nis_May_Haz_Tem_A╨ö╤ƒu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays : 'Pazar_Pazartesi_Sal╨ö┬▒_╨ôΓÇíar╨ò╤ƒamba_Per╨ò╤ƒembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort : 'Paz_Pts_Sal_╨ôΓÇíar_Per_Cum_Cts'.split('_'),
        weekdaysMin : 'Pz_Pt_Sa_╨ôΓÇía_Pe_Cu_Ct'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd, D MMMM YYYY LT'
        },
        calendar : {
            sameDay : '[bug╨ô╤ÿn saat] LT',
            nextDay : '[yar╨ö┬▒n saat] LT',
            nextWeek : '[haftaya] dddd [saat] LT',
            lastDay : '[d╨ô╤ÿn] LT',
            lastWeek : '[ge╨ô┬ºen hafta] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s ╨ô┬╢nce',
            s : 'birka╨ô┬º saniye',
            m : 'bir dakika',
            mm : '%d dakika',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir g╨ô╤ÿn',
            dd : '%d g╨ô╤ÿn',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir y╨ö┬▒l',
            yy : '%d y╨ö┬▒l'
        },
        ordinalParse: /\d{1,2}'(inci|nci|╨ô╤ÿnc╨ô╤ÿ|nc╨ö┬▒|uncu|╨ö┬▒nc╨ö┬▒)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '\'╨ö┬▒nc╨ö┬▒';
            }
            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;

            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Morocco Central Atlas Tamazi╨Ö╨êt in Latin (tzm-latn)
// author : Abdel Said : https://github.com/abdelsaid

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('tzm-latn', {
        months : 'innayr_br╨¢┬ñayr╨¢┬ñ_mar╨¢┬ñs╨¢┬ñ_ibrir_mayyw_ywnyw_ywlywz_╨Ö╨êw╨ò╨Ät_╨ò╨Äwtanbir_kt╨¢┬ñwbr╨¢┬ñ_nwwanbir_dwjnbir'.split('_'),
        monthsShort : 'innayr_br╨¢┬ñayr╨¢┬ñ_mar╨¢┬ñs╨¢┬ñ_ibrir_mayyw_ywnyw_ywlywz_╨Ö╨êw╨ò╨Ät_╨ò╨Äwtanbir_kt╨¢┬ñwbr╨¢┬ñ_nwwanbir_dwjnbir'.split('_'),
        weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asi╨▒╤æ╨îyas'.split('_'),
        weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asi╨▒╤æ╨îyas'.split('_'),
        weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asi╨▒╤æ╨îyas'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[asdkh g] LT',
            nextDay: '[aska g] LT',
            nextWeek: 'dddd [g] LT',
            lastDay: '[assant g] LT',
            lastWeek: 'dddd [g] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dadkh s yan %s',
            past : 'yan %s',
            s : 'imik',
            m : 'minu╨▒╤æ╨î',
            mm : '%d minu╨▒╤æ╨î',
            h : 'sa╨ÖΓÇ║a',
            hh : '%d tassa╨ÖΓÇ║in',
            d : 'ass',
            dd : '%d ossan',
            M : 'ayowr',
            MM : '%d iyyirn',
            y : 'asgas',
            yy : '%d isgasn'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : Morocco Central Atlas Tamazi╨Ö╨êt (tzm)
// author : Abdel Said : https://github.com/abdelsaid

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('tzm', {
        months : '╨▓┬╡ΓÇ░╨▓┬╡╨Å╨▓┬╡╨Å╨▓╥æ┬░╨▓┬╡╤₧╨▓┬╡ΓÇ¥_╨▓╥æ┬▒╨▓┬╡ΓÇó╨▓╥æ┬░╨▓┬╡╤₧╨▓┬╡ΓÇó_╨▓┬╡╨ï╨▓╥æ┬░╨▓┬╡ΓÇó╨▓┬╡╤Ö_╨▓┬╡ΓÇ░╨▓╥æ┬▒╨▓┬╡ΓÇ¥╨▓┬╡ΓÇ░╨▓┬╡ΓÇ¥_╨▓┬╡╨ï╨▓╥æ┬░╨▓┬╡╤₧╨▓┬╡╤₧╨▓┬╡ΓÇ£_╨▓┬╡╤₧╨▓┬╡ΓÇ£╨▓┬╡╨Å╨▓┬╡╤₧╨▓┬╡ΓÇ£_╨▓┬╡╤₧╨▓┬╡ΓÇ£╨▓┬╡╨î╨▓┬╡╤₧╨▓┬╡ΓÇ£╨▓┬╡╨ê_╨▓┬╡ΓÇô╨▓┬╡ΓÇ£╨▓┬╡ΓÇ║╨▓┬╡╤Ü_╨▓┬╡ΓÇ║╨▓┬╡ΓÇ£╨▓┬╡╤Ü╨▓╥æ┬░╨▓┬╡╨Å╨▓╥æ┬▒╨▓┬╡ΓÇ░╨▓┬╡ΓÇ¥_╨▓╥æ╨à╨▓┬╡╤ƒ╨▓┬╡ΓÇ£╨▓╥æ┬▒╨▓┬╡ΓÇó_╨▓┬╡╨Å╨▓┬╡ΓÇ£╨▓┬╡╨Ä╨▓╥æ┬░╨▓┬╡╨Å╨▓╥æ┬▒╨▓┬╡ΓÇ░╨▓┬╡ΓÇ¥_╨▓╥æ┬╖╨▓┬╡ΓÇ£╨▓┬╡╨ë╨▓┬╡╨Å╨▓╥æ┬▒╨▓┬╡ΓÇ░╨▓┬╡ΓÇ¥'.split('_'),
        monthsShort : '╨▓┬╡ΓÇ░╨▓┬╡╨Å╨▓┬╡╨Å╨▓╥æ┬░╨▓┬╡╤₧╨▓┬╡ΓÇ¥_╨▓╥æ┬▒╨▓┬╡ΓÇó╨▓╥æ┬░╨▓┬╡╤₧╨▓┬╡ΓÇó_╨▓┬╡╨ï╨▓╥æ┬░╨▓┬╡ΓÇó╨▓┬╡╤Ö_╨▓┬╡ΓÇ░╨▓╥æ┬▒╨▓┬╡ΓÇ¥╨▓┬╡ΓÇ░╨▓┬╡ΓÇ¥_╨▓┬╡╨ï╨▓╥æ┬░╨▓┬╡╤₧╨▓┬╡╤₧╨▓┬╡ΓÇ£_╨▓┬╡╤₧╨▓┬╡ΓÇ£╨▓┬╡╨Å╨▓┬╡╤₧╨▓┬╡ΓÇ£_╨▓┬╡╤₧╨▓┬╡ΓÇ£╨▓┬╡╨î╨▓┬╡╤₧╨▓┬╡ΓÇ£╨▓┬╡╨ê_╨▓┬╡ΓÇô╨▓┬╡ΓÇ£╨▓┬╡ΓÇ║╨▓┬╡╤Ü_╨▓┬╡ΓÇ║╨▓┬╡ΓÇ£╨▓┬╡╤Ü╨▓╥æ┬░╨▓┬╡╨Å╨▓╥æ┬▒╨▓┬╡ΓÇ░╨▓┬╡ΓÇ¥_╨▓╥æ╨à╨▓┬╡╤ƒ╨▓┬╡ΓÇ£╨▓╥æ┬▒╨▓┬╡ΓÇó_╨▓┬╡╨Å╨▓┬╡ΓÇ£╨▓┬╡╨Ä╨▓╥æ┬░╨▓┬╡╨Å╨▓╥æ┬▒╨▓┬╡ΓÇ░╨▓┬╡ΓÇ¥_╨▓╥æ┬╖╨▓┬╡ΓÇ£╨▓┬╡╨ë╨▓┬╡╨Å╨▓╥æ┬▒╨▓┬╡ΓÇ░╨▓┬╡ΓÇ¥'.split('_'),
        weekdays : '╨▓╥æ┬░╨▓┬╡Γäó╨▓╥æ┬░╨▓┬╡╨ï╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓┬╡╤₧╨▓┬╡╨Å╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓┬╡Γäó╨▓┬╡ΓÇ░╨▓┬╡╨Å╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓╥æ╨à╨▓┬╡ΓÇ¥╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓╥æ╨à╨▓┬╡╨Ä╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓┬╡Γäó╨▓┬╡ΓÇ░╨▓┬╡╨ï╨▓┬╡╨Ä╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓┬╡Γäó╨▓┬╡ΓÇ░╨▓╥æΓäû╨▓┬╡╤₧╨▓╥æ┬░╨▓┬╡Γäó'.split('_'),
        weekdaysShort : '╨▓╥æ┬░╨▓┬╡Γäó╨▓╥æ┬░╨▓┬╡╨ï╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓┬╡╤₧╨▓┬╡╨Å╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓┬╡Γäó╨▓┬╡ΓÇ░╨▓┬╡╨Å╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓╥æ╨à╨▓┬╡ΓÇ¥╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓╥æ╨à╨▓┬╡╨Ä╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓┬╡Γäó╨▓┬╡ΓÇ░╨▓┬╡╨ï╨▓┬╡╨Ä╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓┬╡Γäó╨▓┬╡ΓÇ░╨▓╥æΓäû╨▓┬╡╤₧╨▓╥æ┬░╨▓┬╡Γäó'.split('_'),
        weekdaysMin : '╨▓╥æ┬░╨▓┬╡Γäó╨▓╥æ┬░╨▓┬╡╨ï╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓┬╡╤₧╨▓┬╡╨Å╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓┬╡Γäó╨▓┬╡ΓÇ░╨▓┬╡╨Å╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓╥æ╨à╨▓┬╡ΓÇ¥╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓╥æ╨à╨▓┬╡╨Ä╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓┬╡Γäó╨▓┬╡ΓÇ░╨▓┬╡╨ï╨▓┬╡╨Ä╨▓╥æ┬░╨▓┬╡Γäó_╨▓╥æ┬░╨▓┬╡Γäó╨▓┬╡ΓÇ░╨▓╥æΓäû╨▓┬╡╤₧╨▓╥æ┬░╨▓┬╡Γäó'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS: 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'dddd D MMMM YYYY LT'
        },
        calendar : {
            sameDay: '[╨▓╥æ┬░╨▓┬╡Γäó╨▓╥æ┬╖╨▓┬╡ΓÇª ╨▓╥æ╥æ] LT',
            nextDay: '[╨▓╥æ┬░╨▓┬╡Γäó╨▓╥æ╨à╨▓╥æ┬░ ╨▓╥æ╥æ] LT',
            nextWeek: 'dddd [╨▓╥æ╥æ] LT',
            lastDay: '[╨▓╥æ┬░╨▓┬╡╤Ö╨▓╥æ┬░╨▓┬╡╨Å╨▓┬╡╤Ü ╨▓╥æ╥æ] LT',
            lastWeek: 'dddd [╨▓╥æ╥æ] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '╨▓╥æ┬╖╨▓╥æ┬░╨▓╥æ┬╖╨▓┬╡ΓÇª ╨▓┬╡Γäó ╨▓┬╡╤₧╨▓╥æ┬░╨▓┬╡╨Å %s',
            past : '╨▓┬╡╤₧╨▓╥æ┬░╨▓┬╡╨Å %s',
            s : '╨▓┬╡ΓÇ░╨▓┬╡╨ï╨▓┬╡ΓÇ░╨▓╥æ╨à',
            m : '╨▓┬╡╨ï╨▓┬╡ΓÇ░╨▓┬╡╨Å╨▓┬╡ΓÇ£╨▓╥æ╤ö',
            mm : '%d ╨▓┬╡╨ï╨▓┬╡ΓÇ░╨▓┬╡╨Å╨▓┬╡ΓÇ£╨▓╥æ╤ö',
            h : '╨▓┬╡Γäó╨▓╥æ┬░╨▓┬╡ΓÇ₧╨▓╥æ┬░',
            hh : '%d ╨▓┬╡╤Ü╨▓╥æ┬░╨▓┬╡Γäó╨▓┬╡Γäó╨▓╥æ┬░╨▓┬╡ΓÇ₧╨▓┬╡ΓÇ░╨▓┬╡╨Å',
            d : '╨▓╥æ┬░╨▓┬╡Γäó╨▓┬╡Γäó',
            dd : '%d o╨▓┬╡Γäó╨▓┬╡Γäó╨▓╥æ┬░╨▓┬╡╨Å',
            M : '╨▓╥æ┬░╨▓┬╡╤₧o╨▓┬╡ΓÇ£╨▓┬╡ΓÇ¥',
            MM : '%d ╨▓┬╡ΓÇ░╨▓┬╡╤₧╨▓┬╡╤₧╨▓┬╡ΓÇ░╨▓┬╡ΓÇ¥╨▓┬╡╨Å',
            y : '╨▓╥æ┬░╨▓┬╡Γäó╨▓╥æ╤û╨▓╥æ┬░╨▓┬╡Γäó',
            yy : '%d ╨▓┬╡ΓÇ░╨▓┬╡Γäó╨▓╥æ╤û╨▓╥æ┬░╨▓┬╡Γäó╨▓┬╡╨Å'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : ukrainian (uk)
// author : zemlanin : https://github.com/zemlanin
// Author : Menelion Elens╨ô╤öle : https://github.com/Oire

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }

    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'mm': '╨íΓÇª╨á╨å╨á╤æ╨á┬╗╨á╤æ╨á╨à╨á┬░_╨íΓÇª╨á╨å╨á╤æ╨á┬╗╨á╤æ╨á╨à╨á╤æ_╨íΓÇª╨á╨å╨á╤æ╨á┬╗╨á╤æ╨á╨à',
            'hh': '╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨á┬░_╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨á╤æ_╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à',
            'dd': '╨á╥æ╨á┬╡╨á╨à╨í╨è_╨á╥æ╨á╨à╨íΓÇô_╨á╥æ╨á╨à╨íΓÇô╨á╨å',
            'MM': '╨á╤ÿ╨íΓÇô╨í╨â╨í╨Å╨íΓÇá╨í╨è_╨á╤ÿ╨íΓÇô╨í╨â╨í╨Å╨íΓÇá╨íΓÇô_╨á╤ÿ╨íΓÇô╨í╨â╨í╨Å╨íΓÇá╨íΓÇô╨á╨å',
            'yy': '╨í╨é╨íΓÇô╨á╤ö_╨í╨é╨á╤ò╨á╤ö╨á╤æ_╨í╨é╨á╤ò╨á╤ö╨íΓÇô╨á╨å'
        };
        if (key === 'm') {
            return withoutSuffix ? '╨íΓÇª╨á╨å╨á╤æ╨á┬╗╨á╤æ╨á╨à╨á┬░' : '╨íΓÇª╨á╨å╨á╤æ╨á┬╗╨á╤æ╨á╨à╨í╤ô';
        }
        else if (key === 'h') {
            return withoutSuffix ? '╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨á┬░' : '╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨í╤ô';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }

    function monthsCaseReplace(m, format) {
        var months = {
            'nominative': '╨í╨â╨íΓÇô╨íΓÇí╨á┬╡╨á╨à╨í╨è_╨á┬╗╨í╨ï╨íΓÇÜ╨á╤æ╨áΓäû_╨á┬▒╨á┬╡╨í╨é╨á┬╡╨á┬╖╨á┬╡╨á╨à╨í╨è_╨á╤ö╨á╨å╨íΓÇô╨íΓÇÜ╨á┬╡╨á╨à╨í╨è_╨íΓÇÜ╨í╨é╨á┬░╨á╨å╨á┬╡╨á╨à╨í╨è_╨íΓÇí╨á┬╡╨í╨é╨á╨å╨á┬╡╨á╨à╨í╨è_╨á┬╗╨á╤æ╨á╤ù╨á┬╡╨á╨à╨í╨è_╨í╨â╨á┬╡╨í╨é╨á╤ù╨á┬╡╨á╨à╨í╨è_╨á╨å╨á┬╡╨í╨é╨á┬╡╨í╨â╨á┬╡╨á╨à╨í╨è_╨á┬╢╨á╤ò╨á╨å╨íΓÇÜ╨á┬╡╨á╨à╨í╨è_╨á┬╗╨á╤æ╨í╨â╨íΓÇÜ╨á╤ò╨á╤ù╨á┬░╨á╥æ_╨á╤û╨í╨é╨í╤ô╨á╥æ╨á┬╡╨á╨à╨í╨è'.split('_'),
            'accusative': '╨í╨â╨íΓÇô╨íΓÇí╨á╨à╨í╨Å_╨á┬╗╨í╨ï╨íΓÇÜ╨á╤ò╨á╤û╨á╤ò_╨á┬▒╨á┬╡╨í╨é╨á┬╡╨á┬╖╨á╨à╨í╨Å_╨á╤ö╨á╨å╨íΓÇô╨íΓÇÜ╨á╨à╨í╨Å_╨íΓÇÜ╨í╨é╨á┬░╨á╨å╨á╨à╨í╨Å_╨íΓÇí╨á┬╡╨í╨é╨á╨å╨á╨à╨í╨Å_╨á┬╗╨á╤æ╨á╤ù╨á╨à╨í╨Å_╨í╨â╨á┬╡╨í╨é╨á╤ù╨á╨à╨í╨Å_╨á╨å╨á┬╡╨í╨é╨á┬╡╨í╨â╨á╨à╨í╨Å_╨á┬╢╨á╤ò╨á╨å╨íΓÇÜ╨á╨à╨í╨Å_╨á┬╗╨á╤æ╨í╨â╨íΓÇÜ╨á╤ò╨á╤ù╨á┬░╨á╥æ╨á┬░_╨á╤û╨í╨é╨í╤ô╨á╥æ╨á╨à╨í╨Å'.split('_')
        },

        nounCase = (/D[oD]? *MMMM?/).test(format) ?
            'accusative' :
            'nominative';

        return months[nounCase][m.month()];
    }

    function weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': '╨á╨à╨á┬╡╨á╥æ╨íΓÇô╨á┬╗╨í╨Å_╨á╤ù╨á╤ò╨á╨à╨á┬╡╨á╥æ╨íΓÇô╨á┬╗╨á╤ò╨á╤ö_╨á╨å╨íΓÇô╨á╨å╨íΓÇÜ╨á╤ò╨í╨é╨á╤ò╨á╤ö_╨í╨â╨á┬╡╨í╨é╨á┬╡╨á╥æ╨á┬░_╨íΓÇí╨á┬╡╨íΓÇÜ╨á╨å╨á┬╡╨í╨é_╨á╤ù╨▓╨éΓäó╨í╨Å╨íΓÇÜ╨á╨à╨á╤æ╨íΓÇá╨í╨Å_╨í╨â╨í╤ô╨á┬▒╨á╤ò╨íΓÇÜ╨á┬░'.split('_'),
            'accusative': '╨á╨à╨á┬╡╨á╥æ╨íΓÇô╨á┬╗╨í╨ï_╨á╤ù╨á╤ò╨á╨à╨á┬╡╨á╥æ╨íΓÇô╨á┬╗╨á╤ò╨á╤ö_╨á╨å╨íΓÇô╨á╨å╨íΓÇÜ╨á╤ò╨í╨é╨á╤ò╨á╤ö_╨í╨â╨á┬╡╨í╨é╨á┬╡╨á╥æ╨í╤ô_╨íΓÇí╨á┬╡╨íΓÇÜ╨á╨å╨á┬╡╨í╨é_╨á╤ù╨▓╨éΓäó╨í╨Å╨íΓÇÜ╨á╨à╨á╤æ╨íΓÇá╨í╨ï_╨í╨â╨í╤ô╨á┬▒╨á╤ò╨íΓÇÜ╨í╤ô'.split('_'),
            'genitive': '╨á╨à╨á┬╡╨á╥æ╨íΓÇô╨á┬╗╨íΓÇô_╨á╤ù╨á╤ò╨á╨à╨á┬╡╨á╥æ╨íΓÇô╨á┬╗╨á╤ö╨á┬░_╨á╨å╨íΓÇô╨á╨å╨íΓÇÜ╨á╤ò╨í╨é╨á╤ö╨á┬░_╨í╨â╨á┬╡╨í╨é╨á┬╡╨á╥æ╨á╤æ_╨íΓÇí╨á┬╡╨íΓÇÜ╨á╨å╨á┬╡╨í╨é╨á╤û╨á┬░_╨á╤ù╨▓╨éΓäó╨í╨Å╨íΓÇÜ╨á╨à╨á╤æ╨íΓÇá╨íΓÇô_╨í╨â╨í╤ô╨á┬▒╨á╤ò╨íΓÇÜ╨á╤æ'.split('_')
        },

        nounCase = (/(\[[╨áΓÇÖ╨á╨å╨á╨ê╨í╤ô]\]) ?dddd/).test(format) ?
            'accusative' :
            ((/\[?(?:╨á╤ÿ╨á╤æ╨á╨à╨í╤ô╨á┬╗╨á╤ò╨íΓÇö|╨á╨à╨á┬░╨í╨â╨íΓÇÜ╨í╤ô╨á╤ù╨á╨à╨á╤ò╨íΓÇö)? ?\] ?dddd/).test(format) ?
                'genitive' :
                'nominative');

        return weekdays[nounCase][m.day()];
    }

    function processHoursFunction(str) {
        return function () {
            return str + '╨á╤ò' + (this.hours() === 11 ? '╨á┬▒' : '') + '] LT';
        };
    }

    return moment.defineLocale('uk', {
        months : monthsCaseReplace,
        monthsShort : '╨í╨â╨íΓÇô╨íΓÇí_╨á┬╗╨í╨ï╨íΓÇÜ_╨á┬▒╨á┬╡╨í╨é_╨á╤ö╨á╨å╨íΓÇô╨íΓÇÜ_╨íΓÇÜ╨í╨é╨á┬░╨á╨å_╨íΓÇí╨á┬╡╨í╨é╨á╨å_╨á┬╗╨á╤æ╨á╤ù_╨í╨â╨á┬╡╨í╨é╨á╤ù_╨á╨å╨á┬╡╨í╨é_╨á┬╢╨á╤ò╨á╨å╨íΓÇÜ_╨á┬╗╨á╤æ╨í╨â╨íΓÇÜ_╨á╤û╨í╨é╨í╤ô╨á╥æ'.split('_'),
        weekdays : weekdaysCaseReplace,
        weekdaysShort : '╨á╨à╨á╥æ_╨á╤ù╨á╨à_╨á╨å╨íΓÇÜ_╨í╨â╨í╨é_╨íΓÇí╨íΓÇÜ_╨á╤ù╨íΓÇÜ_╨í╨â╨á┬▒'.split('_'),
        weekdaysMin : '╨á╨à╨á╥æ_╨á╤ù╨á╨à_╨á╨å╨íΓÇÜ_╨í╨â╨í╨é_╨íΓÇí╨íΓÇÜ_╨á╤ù╨íΓÇÜ_╨í╨â╨á┬▒'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY ╨í╨é.',
            LLL : 'D MMMM YYYY ╨í╨é., LT',
            LLLL : 'dddd, D MMMM YYYY ╨í╨é., LT'
        },
        calendar : {
            sameDay: processHoursFunction('[╨á╨Ä╨í╨è╨á╤ò╨á╤û╨á╤ò╨á╥æ╨á╨à╨íΓÇô '),
            nextDay: processHoursFunction('[╨áΓÇö╨á┬░╨á╨å╨íΓÇÜ╨í╨é╨á┬░ '),
            lastDay: processHoursFunction('[╨áΓÇÖ╨íΓÇí╨á╤ò╨í╨é╨á┬░ '),
            nextWeek: processHoursFunction('[╨á╨ê] dddd ['),
            lastWeek: function () {
                switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return processHoursFunction('[╨á╤Ü╨á╤æ╨á╨à╨í╤ô╨á┬╗╨á╤ò╨íΓÇö] dddd [').call(this);
                case 1:
                case 2:
                case 4:
                    return processHoursFunction('[╨á╤Ü╨á╤æ╨á╨à╨í╤ô╨á┬╗╨á╤ò╨á╤û╨á╤ò] dddd [').call(this);
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '╨á┬╖╨á┬░ %s',
            past : '%s ╨íΓÇÜ╨á╤ò╨á╤ÿ╨í╤ô',
            s : '╨á╥æ╨á┬╡╨á╤ö╨íΓÇô╨á┬╗╨í╨è╨á╤ö╨á┬░ ╨í╨â╨á┬╡╨á╤ö╨í╤ô╨á╨à╨á╥æ',
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : '╨á╤û╨á╤ò╨á╥æ╨á╤æ╨á╨à╨í╤ô',
            hh : relativeTimeWithPlural,
            d : '╨á╥æ╨á┬╡╨á╨à╨í╨è',
            dd : relativeTimeWithPlural,
            M : '╨á╤ÿ╨íΓÇô╨í╨â╨í╨Å╨íΓÇá╨í╨è',
            MM : relativeTimeWithPlural,
            y : '╨í╨é╨íΓÇô╨á╤ö',
            yy : relativeTimeWithPlural
        },

        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason

        meridiemParse: /╨á╨à╨á╤ò╨íΓÇí╨íΓÇô|╨í╨é╨á┬░╨á╨à╨á╤ö╨í╤ô|╨á╥æ╨á╨à╨í╨Å|╨á╨å╨á┬╡╨íΓÇí╨á╤ò╨í╨é╨á┬░/,
        isPM: function (input) {
            return /^(╨á╥æ╨á╨à╨í╨Å|╨á╨å╨á┬╡╨íΓÇí╨á╤ò╨í╨é╨á┬░)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return '╨á╨à╨á╤ò╨íΓÇí╨íΓÇô';
            } else if (hour < 12) {
                return '╨í╨é╨á┬░╨á╨à╨á╤ö╨í╤ô';
            } else if (hour < 17) {
                return '╨á╥æ╨á╨à╨í╨Å';
            } else {
                return '╨á╨å╨á┬╡╨íΓÇí╨á╤ò╨í╨é╨á┬░';
            }
        },

        ordinalParse: /\d{1,2}-(╨áΓäû|╨á╤û╨á╤ò)/,
        ordinal: function (number, period) {
            switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
            case 'w':
            case 'W':
                return number + '-╨áΓäû';
            case 'D':
                return number + '-╨á╤û╨á╤ò';
            default:
                return number;
            }
        },

        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1st is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : uzbek (uz)
// author : Sardor Muminov : https://github.com/muminoff

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('uz', {
        months : '╨í╨Å╨á╨à╨á╨å╨á┬░╨í╨é╨í╨è_╨íΓÇ₧╨á┬╡╨á╨å╨í╨é╨á┬░╨á┬╗╨í╨è_╨á╤ÿ╨á┬░╨í╨é╨íΓÇÜ_╨á┬░╨á╤ù╨í╨é╨á┬╡╨á┬╗╨í╨è_╨á╤ÿ╨á┬░╨áΓäû_╨á╤æ╨í╨ï╨á╨à╨í╨è_╨á╤æ╨í╨ï╨á┬╗╨í╨è_╨á┬░╨á╨å╨á╤û╨í╤ô╨í╨â╨íΓÇÜ_╨í╨â╨á┬╡╨á╨à╨íΓÇÜ╨í╨Å╨á┬▒╨í╨é╨í╨è_╨á╤ò╨á╤ö╨íΓÇÜ╨í╨Å╨á┬▒╨í╨é╨í╨è_╨á╨à╨á╤ò╨í╨Å╨á┬▒╨í╨é╨í╨è_╨á╥æ╨á┬╡╨á╤ö╨á┬░╨á┬▒╨í╨é╨í╨è'.split('_'),
        monthsShort : '╨í╨Å╨á╨à╨á╨å_╨íΓÇ₧╨á┬╡╨á╨å_╨á╤ÿ╨á┬░╨í╨é_╨á┬░╨á╤ù╨í╨é_╨á╤ÿ╨á┬░╨áΓäû_╨á╤æ╨í╨ï╨á╨à_╨á╤æ╨í╨ï╨á┬╗_╨á┬░╨á╨å╨á╤û_╨í╨â╨á┬╡╨á╨à_╨á╤ò╨á╤ö╨íΓÇÜ_╨á╨à╨á╤ò╨í╨Å_╨á╥æ╨á┬╡╨á╤ö'.split('_'),
        weekdays : '╨á╨ç╨á╤ö╨íΓé¼╨á┬░╨á╨à╨á┬▒╨á┬░_╨áΓÇ¥╨í╤ô╨íΓé¼╨á┬░╨á╨à╨á┬▒╨á┬░_╨á╨Ä╨á┬╡╨íΓé¼╨á┬░╨á╨à╨á┬▒╨á┬░_╨á┬º╨á╤ò╨í╨é╨íΓé¼╨á┬░╨á╨à╨á┬▒╨á┬░_╨á╤ƒ╨á┬░╨áΓäû╨íΓé¼╨á┬░╨á╨à╨á┬▒╨á┬░_╨áΓÇô╨í╤ô╨á╤ÿ╨á┬░_╨á╨ü╨á┬░╨á╨à╨á┬▒╨á┬░'.split('_'),
        weekdaysShort : '╨á╨ç╨á╤ö╨íΓé¼_╨áΓÇ¥╨í╤ô╨íΓé¼_╨á╨Ä╨á┬╡╨íΓé¼_╨á┬º╨á╤ò╨í╨é_╨á╤ƒ╨á┬░╨áΓäû_╨áΓÇô╨í╤ô╨á╤ÿ_╨á╨ü╨á┬░╨á╨à'.split('_'),
        weekdaysMin : '╨á╨ç╨á╤ö_╨áΓÇ¥╨í╤ô_╨á╨Ä╨á┬╡_╨á┬º╨á╤ò_╨á╤ƒ╨á┬░_╨áΓÇô╨í╤ô_╨á╨ü╨á┬░'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY LT',
            LLLL : 'D MMMM YYYY, dddd LT'
        },
        calendar : {
            sameDay : '[╨áΓÇÿ╨í╤ô╨á╤û╨í╤ô╨á╨à ╨í╨â╨á╤ò╨á┬░╨íΓÇÜ] LT [╨á╥æ╨á┬░]',
            nextDay : '[╨á┬¡╨í╨é╨íΓÇÜ╨á┬░╨á╤û╨á┬░] LT [╨á╥æ╨á┬░]',
            nextWeek : 'dddd [╨á╤ö╨í╤ô╨á╨à╨á╤æ ╨í╨â╨á╤ò╨á┬░╨íΓÇÜ] LT [╨á╥æ╨á┬░]',
            lastDay : '[╨á╤Ö╨á┬╡╨íΓÇí╨á┬░ ╨í╨â╨á╤ò╨á┬░╨íΓÇÜ] LT [╨á╥æ╨á┬░]',
            lastWeek : '[╨á╨ê╨íΓÇÜ╨á╤û╨á┬░╨á╨à] dddd [╨á╤ö╨í╤ô╨á╨à╨á╤æ ╨í╨â╨á╤ò╨á┬░╨íΓÇÜ] LT [╨á╥æ╨á┬░]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '╨á╨ç╨á╤ö╨á╤æ╨á╨à %s ╨á╤æ╨íΓÇí╨á╤æ╨á╥æ╨á┬░',
            past : '╨áΓÇÿ╨á╤æ╨í╨é ╨á╨à╨á┬╡╨íΓÇí╨á┬░ %s ╨á╤ò╨á┬╗╨á╥æ╨á╤æ╨á╨à',
            s : '╨íΓÇ₧╨í╤ô╨í╨é╨í╨â╨á┬░╨íΓÇÜ',
            m : '╨á┬▒╨á╤æ╨í╨é ╨á╥æ╨á┬░╨á╤ö╨á╤æ╨á╤ö╨á┬░',
            mm : '%d ╨á╥æ╨á┬░╨á╤ö╨á╤æ╨á╤ö╨á┬░',
            h : '╨á┬▒╨á╤æ╨í╨é ╨í╨â╨á╤ò╨á┬░╨íΓÇÜ',
            hh : '%d ╨í╨â╨á╤ò╨á┬░╨íΓÇÜ',
            d : '╨á┬▒╨á╤æ╨í╨é ╨á╤ö╨í╤ô╨á╨à',
            dd : '%d ╨á╤ö╨í╤ô╨á╨à',
            M : '╨á┬▒╨á╤æ╨í╨é ╨á╤ò╨áΓäû',
            MM : '%d ╨á╤ò╨áΓäû',
            y : '╨á┬▒╨á╤æ╨í╨é ╨áΓäû╨á╤æ╨á┬╗',
            yy : '%d ╨áΓäû╨á╤æ╨á┬╗'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : vietnamese (vi)
// author : Bang Nguyen : https://github.com/bangnk

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('vi', {
        months : 'th╨ô╨Äng 1_th╨ô╨Äng 2_th╨ô╨Äng 3_th╨ô╨Äng 4_th╨ô╨Äng 5_th╨ô╨Äng 6_th╨ô╨Äng 7_th╨ô╨Äng 8_th╨ô╨Äng 9_th╨ô╨Äng 10_th╨ô╨Äng 11_th╨ô╨Äng 12'.split('_'),
        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
        weekdays : 'ch╨▒┬╗┬º nh╨▒╤ö┬¡t_th╨▒┬╗┬⌐ hai_th╨▒┬╗┬⌐ ba_th╨▒┬╗┬⌐ t╨û┬░_th╨▒┬╗┬⌐ n╨ö╤ôm_th╨▒┬╗┬⌐ s╨ô╨Äu_th╨▒┬╗┬⌐ b╨▒╤ö╨êy'.split('_'),
        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'LT:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM [n╨ö╤ôm] YYYY',
            LLL : 'D MMMM [n╨ö╤ôm] YYYY LT',
            LLLL : 'dddd, D MMMM [n╨ö╤ôm] YYYY LT',
            l : 'DD/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY LT',
            llll : 'ddd, D MMM YYYY LT'
        },
        calendar : {
            sameDay: '[H╨ô╥æm nay l╨ô╤öc] LT',
            nextDay: '[Ng╨ô y mai l╨ô╤öc] LT',
            nextWeek: 'dddd [tu╨▒╤ö┬ºn t╨▒┬╗ΓÇ║i l╨ô╤öc] LT',
            lastDay: '[H╨ô╥æm qua l╨ô╤öc] LT',
            lastWeek: 'dddd [tu╨▒╤ö┬ºn r╨▒┬╗ΓÇ£i l╨ô╤öc] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s t╨▒┬╗ΓÇ║i',
            past : '%s tr╨û┬░╨▒┬╗ΓÇ║c',
            s : 'v╨ô i gi╨ô╤₧y',
            m : 'm╨▒┬╗Γäót ph╨ô╤öt',
            mm : '%d ph╨ô╤öt',
            h : 'm╨▒┬╗Γäót gi╨▒┬╗╤£',
            hh : '%d gi╨▒┬╗╤£',
            d : 'm╨▒┬╗Γäót ng╨ô y',
            dd : '%d ng╨ô y',
            M : 'm╨▒┬╗Γäót th╨ô╨Äng',
            MM : '%d th╨ô╨Äng',
            y : 'm╨▒┬╗Γäót n╨ö╤ôm',
            yy : '%d n╨ö╤ôm'
        },
        ordinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : chinese (zh-cn)
// author : suupic : https://github.com/suupic
// author : Zeno Zeng : https://github.com/zenozeng

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('zh-cn', {
        months : '╨┤╤æ╨é╨╢╤ÜΓé¼_╨┤╤ö╨è╨╢╤ÜΓé¼_╨┤╤æΓÇ░╨╢╤ÜΓé¼_╨╡ΓÇ║ΓÇ║╨╢╤ÜΓé¼_╨┤╤öΓÇ¥╨╢╤ÜΓé¼_╨╡ΓÇª┬¡╨╢╤ÜΓé¼_╨┤╤æ╤ô╨╢╤ÜΓé¼_╨╡ΓÇª┬½╨╢╤ÜΓé¼_╨┤Γäû╤£╨╢╤ÜΓé¼_╨╡╨î╨â╨╢╤ÜΓé¼_╨╡╨î╨â╨┤╤æ╨é╨╢╤ÜΓé¼_╨╡╨î╨â╨┤╤ö╨è╨╢╤ÜΓé¼'.split('_'),
        monthsShort : '1╨╢╤ÜΓé¼_2╨╢╤ÜΓé¼_3╨╢╤ÜΓé¼_4╨╢╤ÜΓé¼_5╨╢╤ÜΓé¼_6╨╢╤ÜΓé¼_7╨╢╤ÜΓé¼_8╨╢╤ÜΓé¼_9╨╢╤ÜΓé¼_10╨╢╤ÜΓé¼_11╨╢╤ÜΓé¼_12╨╢╤ÜΓé¼'.split('_'),
        weekdays : '╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨╢ΓÇö╥É_╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨┤╤æ╨é_╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨┤╤ö╨è_╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨┤╤æΓÇ░_╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨╡ΓÇ║ΓÇ║_╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨┤╤öΓÇ¥_╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨╡ΓÇª┬¡'.split('_'),
        weekdaysShort : '╨╡ΓÇÿ╨ü╨╢ΓÇö╥É_╨╡ΓÇÿ╨ü╨┤╤æ╨é_╨╡ΓÇÿ╨ü╨┤╤ö╨è_╨╡ΓÇÿ╨ü╨┤╤æΓÇ░_╨╡ΓÇÿ╨ü╨╡ΓÇ║ΓÇ║_╨╡ΓÇÿ╨ü╨┤╤öΓÇ¥_╨╡ΓÇÿ╨ü╨╡ΓÇª┬¡'.split('_'),
        weekdaysMin : '╨╢ΓÇö╥É_╨┤╤æ╨é_╨┤╤ö╨è_╨┤╤æΓÇ░_╨╡ΓÇ║ΓÇ║_╨┤╤öΓÇ¥_╨╡ΓÇª┬¡'.split('_'),
        longDateFormat : {
            LT : 'Ah╨╖ΓÇÜΓäûmm',
            LTS : 'Ah╨╖ΓÇÜΓäûm╨╡Γé¼ΓÇás╨╖┬ºΓÇÖ',
            L : 'YYYY-MM-DD',
            LL : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥É',
            LLL : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥ÉLT',
            LLLL : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥ÉddddLT',
            l : 'YYYY-MM-DD',
            ll : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥É',
            lll : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥ÉLT',
            llll : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥ÉddddLT'
        },
        meridiemParse: /╨╡ΓÇí╨è╨╢Γäó╨ü|╨╢ΓÇö┬⌐╨┤╤æ╨ë|╨┤╤æ╨ë╨╡╨îΓé¼|╨┤╤æ┬¡╨╡╨îΓé¼|╨┤╤æΓÇ╣╨╡╨îΓé¼|╨╢Γäó╤Ö╨┤╤æ╨ë/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '╨╡ΓÇí╨è╨╢Γäó╨ü' || meridiem === '╨╢ΓÇö┬⌐╨┤╤æ╨ë' ||
                    meridiem === '╨┤╤æ╨ë╨╡╨îΓé¼') {
                return hour;
            } else if (meridiem === '╨┤╤æΓÇ╣╨╡╨îΓé¼' || meridiem === '╨╢Γäó╤Ö╨┤╤æ╨ë') {
                return hour + 12;
            } else {
                // '╨┤╤æ┬¡╨╡╨îΓé¼'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '╨╡ΓÇí╨è╨╢Γäó╨ü';
            } else if (hm < 900) {
                return '╨╢ΓÇö┬⌐╨┤╤æ╨ë';
            } else if (hm < 1130) {
                return '╨┤╤æ╨ë╨╡╨îΓé¼';
            } else if (hm < 1230) {
                return '╨┤╤æ┬¡╨╡╨îΓé¼';
            } else if (hm < 1800) {
                return '╨┤╤æΓÇ╣╨╡╨îΓé¼';
            } else {
                return '╨╢Γäó╤Ö╨┤╤æ╨ë';
            }
        },
        calendar : {
            sameDay : function () {
                return this.minutes() === 0 ? '[╨┤┬╗╨ë╨╡┬ñ┬⌐]Ah[╨╖ΓÇÜΓäû╨╢ΓÇó╥æ]' : '[╨┤┬╗╨ë╨╡┬ñ┬⌐]LT';
            },
            nextDay : function () {
                return this.minutes() === 0 ? '[╨╢┬ÿ╨ï╨╡┬ñ┬⌐]Ah[╨╖ΓÇÜΓäû╨╢ΓÇó╥æ]' : '[╨╢┬ÿ╨ï╨╡┬ñ┬⌐]LT';
            },
            lastDay : function () {
                return this.minutes() === 0 ? '[╨╢┬ÿ╨ü╨╡┬ñ┬⌐]Ah[╨╖ΓÇÜΓäû╨╢ΓÇó╥æ]' : '[╨╢┬ÿ╨ü╨╡┬ñ┬⌐]LT';
            },
            nextWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() - startOfWeek.unix() >= 7 * 24 * 3600 ? '[╨┤╤æΓÇ╣]' : '[╨╢╤Ü┬¼]';
                return this.minutes() === 0 ? prefix + 'dddAh╨╖ΓÇÜΓäû╨╢ΓÇó╥æ' : prefix + 'dddAh╨╖ΓÇÜΓäûmm';
            },
            lastWeek : function () {
                var startOfWeek, prefix;
                startOfWeek = moment().startOf('week');
                prefix = this.unix() < startOfWeek.unix()  ? '[╨┤╤æ╨ë]' : '[╨╢╤Ü┬¼]';
                return this.minutes() === 0 ? prefix + 'dddAh╨╖ΓÇÜΓäû╨╢ΓÇó╥æ' : prefix + 'dddAh╨╖ΓÇÜΓäûmm';
            },
            sameElse : 'LL'
        },
        ordinalParse: /\d{1,2}(╨╢ΓÇö╥É|╨╢╤ÜΓé¼|╨╡ΓÇÿ╨ü)/,
        ordinal : function (number, period) {
            switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return number + '╨╢ΓÇö╥É';
            case 'M':
                return number + '╨╢╤ÜΓé¼';
            case 'w':
            case 'W':
                return number + '╨╡ΓÇÿ╨ü';
            default:
                return number;
            }
        },
        relativeTime : {
            future : '%s╨╡ΓÇáΓÇª',
            past : '%s╨╡ΓÇ░╨î',
            s : '╨╡ΓÇí ╨╖┬ºΓÇÖ',
            m : '1╨╡Γé¼ΓÇá╨╣ΓÇÖ╤ƒ',
            mm : '%d╨╡Γé¼ΓÇá╨╣ΓÇÖ╤ƒ',
            h : '1╨╡┬░╨Å╨╢ΓÇö┬╢',
            hh : '%d╨╡┬░╨Å╨╢ΓÇö┬╢',
            d : '1╨╡┬ñ┬⌐',
            dd : '%d╨╡┬ñ┬⌐',
            M : '1╨┤╤æ╨ä╨╢╤ÜΓé¼',
            MM : '%d╨┤╤æ╨ä╨╢╤ÜΓé¼',
            y : '1╨╡Γäû╥æ',
            yy : '%d╨╡Γäû╥æ'
        },
        week : {
            // GB/T 7408-1994╨│╨é╨ë╨╢ΓÇó┬░╨╢╨î┬«╨╡ΓÇª╤ô╨╡ΓÇÖ╨è╨┤╤ö┬ñ╨╢╨î╤₧╨╢ ╤ÿ╨╡╤ÿ╨Å╨Æ┬╖╨┤╤ù╨Ä╨╢╨â╨ç╨┤╤ö┬ñ╨╢╨î╤₧╨Æ┬╖╨╢ΓÇö╥É╨╢╤Ü╤ƒ╨╡ΓÇÖ╨è╨╢ΓÇö┬╢╨╣ΓÇö╥æ╨╕╨Ä╨ü╨╖┬ñ╤ö╨╢╤ûΓÇó╨│╨éΓÇ╣╨┤╤æ╨ïISO 8601:1988╨╖┬¡ΓÇ░╨╢ΓÇóΓé¼
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));

// moment.js locale configuration
// locale : traditional chinese (zh-tw)
// author : Ben : https://github.com/ben-lin

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).moment); // node or other global
    }
}(function (moment) {
    return moment.defineLocale('zh-tw', {
        months : '╨┤╤æ╨é╨╢╤ÜΓé¼_╨┤╤ö╨è╨╢╤ÜΓé¼_╨┤╤æΓÇ░╨╢╤ÜΓé¼_╨╡ΓÇ║ΓÇ║╨╢╤ÜΓé¼_╨┤╤öΓÇ¥╨╢╤ÜΓé¼_╨╡ΓÇª┬¡╨╢╤ÜΓé¼_╨┤╤æ╤ô╨╢╤ÜΓé¼_╨╡ΓÇª┬½╨╢╤ÜΓé¼_╨┤Γäû╤£╨╢╤ÜΓé¼_╨╡╨î╨â╨╢╤ÜΓé¼_╨╡╨î╨â╨┤╤æ╨é╨╢╤ÜΓé¼_╨╡╨î╨â╨┤╤ö╨è╨╢╤ÜΓé¼'.split('_'),
        monthsShort : '1╨╢╤ÜΓé¼_2╨╢╤ÜΓé¼_3╨╢╤ÜΓé¼_4╨╢╤ÜΓé¼_5╨╢╤ÜΓé¼_6╨╢╤ÜΓé¼_7╨╢╤ÜΓé¼_8╨╢╤ÜΓé¼_9╨╢╤ÜΓé¼_10╨╢╤ÜΓé¼_11╨╢╤ÜΓé¼_12╨╢╤ÜΓé¼'.split('_'),
        weekdays : '╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨╢ΓÇö╥É_╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨┤╤æ╨é_╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨┤╤ö╨è_╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨┤╤æΓÇ░_╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨╡ΓÇ║ΓÇ║_╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨┤╤öΓÇ¥_╨╢┬ÿ╤ƒ╨╢╤Ü╤ƒ╨╡ΓÇª┬¡'.split('_'),
        weekdaysShort : '╨╣╨é┬▒╨╢ΓÇö╥É_╨╣╨é┬▒╨┤╤æ╨é_╨╣╨é┬▒╨┤╤ö╨è_╨╣╨é┬▒╨┤╤æΓÇ░_╨╣╨é┬▒╨╡ΓÇ║ΓÇ║_╨╣╨é┬▒╨┤╤öΓÇ¥_╨╣╨é┬▒╨╡ΓÇª┬¡'.split('_'),
        weekdaysMin : '╨╢ΓÇö╥É_╨┤╤æ╨é_╨┤╤ö╨è_╨┤╤æΓÇ░_╨╡ΓÇ║ΓÇ║_╨┤╤öΓÇ¥_╨╡ΓÇª┬¡'.split('_'),
        longDateFormat : {
            LT : 'Ah╨╣┬╗╤¢mm',
            LTS : 'Ah╨╣┬╗╤¢m╨╡Γé¼ΓÇás╨╖┬ºΓÇÖ',
            L : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥É',
            LL : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥É',
            LLL : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥ÉLT',
            LLLL : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥ÉddddLT',
            l : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥É',
            ll : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥É',
            lll : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥ÉLT',
            llll : 'YYYY╨╡Γäû╥æMMMD╨╢ΓÇö╥ÉddddLT'
        },
        meridiemParse: /╨╢ΓÇö┬⌐╨┤╤æ╨ë|╨┤╤æ╨ë╨╡╨îΓé¼|╨┤╤æ┬¡╨╡╨îΓé¼|╨┤╤æΓÇ╣╨╡╨îΓé¼|╨╢Γäó╤Ö╨┤╤æ╨ë/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '╨╢ΓÇö┬⌐╨┤╤æ╨ë' || meridiem === '╨┤╤æ╨ë╨╡╨îΓé¼') {
                return hour;
            } else if (meridiem === '╨┤╤æ┬¡╨╡╨îΓé¼') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === '╨┤╤æΓÇ╣╨╡╨îΓé¼' || meridiem === '╨╢Γäó╤Ö╨┤╤æ╨ë') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 900) {
                return '╨╢ΓÇö┬⌐╨┤╤æ╨ë';
            } else if (hm < 1130) {
                return '╨┤╤æ╨ë╨╡╨îΓé¼';
            } else if (hm < 1230) {
                return '╨┤╤æ┬¡╨╡╨îΓé¼';
            } else if (hm < 1800) {
                return '╨┤╤æΓÇ╣╨╡╨îΓé¼';
            } else {
                return '╨╢Γäó╤Ö╨┤╤æ╨ë';
            }
        },
        calendar : {
            sameDay : '[╨┤┬╗╨ë╨╡┬ñ┬⌐]LT',
            nextDay : '[╨╢┬ÿ╨ï╨╡┬ñ┬⌐]LT',
            nextWeek : '[╨┤╤æΓÇ╣]ddddLT',
            lastDay : '[╨╢┬ÿ╨ü╨╡┬ñ┬⌐]LT',
            lastWeek : '[╨┤╤æ╨ë]ddddLT',
            sameElse : 'L'
        },
        ordinalParse: /\d{1,2}(╨╢ΓÇö╥É|╨╢╤ÜΓé¼|╨╣╨é┬▒)/,
        ordinal : function (number, period) {
            switch (period) {
            case 'd' :
            case 'D' :
            case 'DDD' :
                return number + '╨╢ΓÇö╥É';
            case 'M' :
                return number + '╨╢╤ÜΓé¼';
            case 'w' :
            case 'W' :
                return number + '╨╣╨é┬▒';
            default :
                return number;
            }
        },
        relativeTime : {
            future : '%s╨╡ΓÇª┬º',
            past : '%s╨╡ΓÇ░╨î',
            s : '╨╡Γäû╤ò╨╖┬ºΓÇÖ',
            m : '╨┤╤æ╨é╨╡Γé¼ΓÇá╨╣╤Æ┬ÿ',
            mm : '%d╨╡Γé¼ΓÇá╨╣╤Æ┬ÿ',
            h : '╨┤╤æ╨é╨╡┬░╨Å╨╢ΓäóΓÇÜ',
            hh : '%d╨╡┬░╨Å╨╢ΓäóΓÇÜ',
            d : '╨┤╤æ╨é╨╡┬ñ┬⌐',
            dd : '%d╨╡┬ñ┬⌐',
            M : '╨┤╤æ╨é╨╡╨éΓÇ╣╨╢╤ÜΓé¼',
            MM : '%d╨╡╨éΓÇ╣╨╢╤ÜΓé¼',
            y : '╨┤╤æ╨é╨╡Γäû╥æ',
            yy : '%d╨╡Γäû╥æ'
        }
    });
}));