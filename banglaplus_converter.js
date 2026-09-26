function Insert(n, t) {
  var r, u;
  if (document.selection)
    (n.focus(),
      (r = document.selection.createRange()),
      (r.text = t),
      r.collapse(!0),
      r.select());
  else if (n.selectionStart || n.selectionStart === "0") {
    var i = n.selectionStart,
      f = n.selectionEnd,
      e = n.scrollTop;
    i = i === -1 ? n.value.length : i;
    n.value =
      n.value.substring(0, i) + t + n.value.substring(f, n.value.length);
    n.focus();
    n.selectionStart = i + t.length;
    n.selectionEnd = i + t.length;
    n.scrollTop = e;
  } else ((u = n.scrollTop), (n.value += t), n.focus(), (n.scrollTop = u));
}
function RemoveNInsert(n, t, i) {
  var u, f;
  if (document.selection)
    (n.focus(),
      (u = document.selection.createRange()),
      n.value.length >= i && u.moveStart("character", -1 * i),
      (u.text = t),
      u.collapse(!0),
      u.select());
  else if (n.selectionStart || n.selectionStart === 0) {
    n.focus();
    var r = n.selectionStart - i,
      e = n.selectionEnd,
      o = n.scrollTop;
    r = r === -1 ? n.value.length : r;
    n.value =
      n.value.substring(0, r) + t + n.value.substring(e, n.value.length);
    n.focus();
    n.selectionStart = r + t.length;
    n.selectionEnd = r + t.length;
    n.scrollTop = o;
  } else ((f = n.scrollTop), (n.value += t), n.focus(), (n.scrollTop = f));
}
function capsDetect(n) {
  if ((n || (n = window.event), !n)) return !1;
  var t = n.which
      ? n.which
      : n.keyCode
        ? n.keyCode
        : n.charCode
          ? n.charCode
          : 0,
    i = n.shiftKey || (n.modifiers && n.modifiers & 4);
  return (t > 64 && t < 91 && !i) || (t > 96 && t < 123 && i);
}
function HideDIV(n) {
  document.getElementById
    ? (document.getElementById(n).style.display = "none")
    : document.layers
      ? (document.id.display = "none")
      : (document.all.id.style.display = "none");
}
function ShowDIV(n) {
  document.getElementById
    ? (document.getElementById(n).style.display = "block")
    : document.layers
      ? (document.id.display = "block")
      : (document.all.id.style.display = "block");
}
function IsBanglaDigit(n) {
  return n === "à§¦" ||
    n === "à§§" ||
    n === "à§¨" ||
    n === "à§©" ||
    n === "à§ª" ||
    n === "à§«" ||
    n === "à§¬" ||
    n === "à§­" ||
    n === "à§®" ||
    n === "à§¯"
    ? !0
    : !1;
}
function IsBanglaPreKar(n) {
  return n === "à¦¿" || n === "à§" || n === "à§" ? !0 : !1;
}
function IsBanglaPostKar(n) {
  return n === "à¦¾" ||
    n === "à§" ||
    n === "à§" ||
    n === "à§" ||
    n === "à§" ||
    n === "à§" ||
    n === "à§" ||
    n === "à§"
    ? !0
    : !1;
}
function IsBanglaKar(n) {
  return IsBanglaPreKar(n) || IsBanglaPostKar(n) ? !0 : !1;
}
function IsBanglaBanjonborno(n) {
  return n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦ " ||
    n === "à¦¡" ||
    n === "à¦¢" ||
    n === "à¦£" ||
    n === "à¦¤" ||
    n === "à¦¥" ||
    n === "à¦¦" ||
    n === "à¦§" ||
    n === "à¦¨" ||
    n === "à¦ª" ||
    n === "à¦«" ||
    n === "à¦¬" ||
    n === "à¦­" ||
    n === "à¦®" ||
    n === "à¦¶" ||
    n === "à¦·" ||
    n === "à¦¸" ||
    n === "à¦¹" ||
    n === "à¦¯" ||
    n === "à¦°" ||
    n === "à¦²" ||
    n === "à§" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à§"
    ? !0
    : !1;
}
function IsBanglaSoroborno(n) {
  return n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦" ||
    n === "à¦"
    ? !0
    : !1;
}
function IsBanglaNukta(n) {
  return n === "à¦" || n === "à¦" || n === "à¦" ? !0 : !1;
}
function IsBanglaFola(n) {
  return n === "à§à¦¯" || n === "à§à¦°" ? !0 : !1;
}
function IsBanglaHalant(n) {
  return n === "à§" ? !0 : !1;
}
function IsSpace(n) {
  return n === " " || n === "\t" || n === "\n" || n === "\r" ? !0 : !1;
}
function MapKarToSorborno(n) {
  var t = n;
  return (
    n === "à¦¾"
      ? (t = "à¦")
      : n === "à¦¿"
        ? (t = "à¦")
        : n === "à§"
          ? (t = "à¦")
          : n === "à§"
            ? (t = "à¦")
            : n === "à§"
              ? (t = "à¦")
              : n === "à§"
                ? (t = "à¦")
                : n === "à§"
                  ? (t = "à¦")
                  : n === "à§"
                    ? (t = "à¦")
                    : n === "à§" || n === "à§à¦¾"
                      ? (t = "à¦")
                      : (n === "à§" || n === "à§à§") && (t = "à¦"),
    t
  );
}
function MapSorbornoToKar(n) {
  var t = n;
  return (
    n === "à¦"
      ? (t = "à¦¾")
      : n === "à¦"
        ? (t = "à¦¿")
        : n === "à¦"
          ? (t = "à§")
          : n === "à¦"
            ? (t = "à§")
            : n === "à¦"
              ? (t = "à§")
              : n === "à¦"
                ? (t = "à§")
                : n === "à¦"
                  ? (t = "à§")
                  : n === "à¦"
                    ? (t = "à§")
                    : n === "à¦"
                      ? (t = "à§")
                      : n === "à¦" && (t = "à§"),
    t
  );
}
function buildConversionPatterns(n) {
  function r(n) {
    return n
      .split("")
      .map(function (n) {
        switch (n) {
          case "\\":
            return "\\\\";
          case ".":
            return "\\.";
          case "*":
            return "\\*";
          case "+":
            return "\\+";
          case "?":
            return "\\?";
          case "^":
            return "\\^";
          case "$":
            return "\\$";
          case "{":
            return "\\{";
          case "}":
            return "\\}";
          case "(":
            return "\\(";
          case ")":
            return "\\)";
          case "|":
            return "\\|";
          case "[":
            return "\\[";
          case "]":
            return "\\]";
          default:
            return n;
        }
      })
      .join("");
  }
  var i = [];
  for (var t in n)
    Object.prototype.hasOwnProperty.call(n, t) &&
      i.push({ regex: new RegExp(r(t), "g"), replacement: n[t] });
  return i;
}
function ensureBijoyPatterns() {
  bijoyPatterns ||
    (bijoyPatterns = buildConversionPatterns(bijoy_string_conversion_map));
}
function ReArrangeUnicodeConvertedText(n) {
  for (var f, e, i, o, u, r, h, s, t = 0; t < n.length; t++) {
    if (
      (t > 0 &&
        n.charAt(t) === "à§" &&
        (IsBanglaKar(n.charAt(t - 1)) || IsBanglaNukta(n.charAt(t - 1))) &&
        t < n.length - 1 &&
        ((f = n.substring(0, t - 1)),
        (f += n.charAt(t)),
        (f += n.charAt(t + 1)),
        (f += n.charAt(t - 1)),
        (f += n.substring(t + 2, n.length)),
        (n = f)),
      t > 0 &&
        t < n.length - 1 &&
        n.charAt(t) === "à§" &&
        n.charAt(t - 1) === "à¦°" &&
        n.charAt(t - 2) !== "à§" &&
        IsBanglaKar(n.charAt(t + 1)) &&
        ((e = n.substring(0, t - 1)),
        (e += n.charAt(t + 1)),
        (e += n.charAt(t - 1)),
        (e += n.charAt(t)),
        (e += n.substring(t + 2, n.length)),
        (n = e)),
      t < n.length - 1 &&
        n.charAt(t) === "à¦°" &&
        IsBanglaHalant(n.charAt(t + 1)) &&
        !IsBanglaHalant(n.charAt(t - 1)))
    ) {
      for (i = 1; ;) {
        if (t - i < 0) break;
        if (
          IsBanglaBanjonborno(n.charAt(t - i)) &&
          IsBanglaHalant(n.charAt(t - i - 1))
        )
          i += 2;
        else if (i === 1 && IsBanglaKar(n.charAt(t - i))) i++;
        else break;
      }
      o = n.substring(0, t - i);
      o += n.charAt(t);
      o += n.charAt(t + 1);
      o += n.substring(t - i, t);
      o += n.substring(t + 2, n.length);
      n = o;
      t += 1;
      continue;
    }
    if (
      t < n.length - 1 &&
      IsBanglaPreKar(n.charAt(t)) &&
      IsSpace(n.charAt(t + 1)) === !1
    ) {
      for (u = n.substring(0, t), r = 1; IsBanglaBanjonborno(n.charAt(t + r));)
        if (IsBanglaHalant(n.charAt(t + r + 1))) r += 2;
        else break;
      u += n.substring(t + 1, t + r + 1);
      h = 0;
      n.charAt(t) === "à§" && n.charAt(t + r + 1) === "à¦¾"
        ? ((u += "à§"), (h = 1))
        : n.charAt(t) === "à§" && n.charAt(t + r + 1) === "à§"
          ? ((u += "à§"), (h = 1))
          : (u += n.charAt(t));
      u += n.substring(t + r + h + 1, n.length);
      n = u;
      t += r;
    }
    t < n.length - 1 &&
      n.charAt(t) === "à¦" &&
      IsBanglaPostKar(n.charAt(t + 1)) &&
      ((s = n.substring(0, t)),
      (s += n.charAt(t + 1)),
      (s += n.charAt(t)),
      (s += n.substring(t + 2, n.length)),
      (n = s));
  }
  return n;
}
function ConvertToUnicode(n) {
  var t, i;
  for (
    n = replaceMultiple(n, correctBijoy, !0), ensureBijoyPatterns(), t = 0;
    t < bijoyPatterns.length;
    t++
  )
    ((i = bijoyPatterns[t]), (n = n.replace(i.regex, i.replacement)));
  return (
    (n = replaceMultiple(n, correctUnicode, !0)),
    (n = ReArrangeUnicodeConvertedText(n)),
    n.replace(/à¦à¦¾/g, "à¦")
  );
}
function ensureUni2BijoyPatterns() {
  uni2bijoyPatterns ||
    (uni2bijoyPatterns = buildConversionPatterns(
      uni2bijoy_string_conversion_map,
    ));
}
function ReArrangeUnicodeText(n) {
  for (var r, f, i, e, u, o = 0, t = 0; t < n.length; t++) {
    if (t < n.length && IsBanglaPreKar(n.charAt(t))) {
      for (r = 1; IsBanglaBanjonborno(n.charAt(t - r));) {
        if (t - r < 0) break;
        if (t - r <= o) break;
        if (IsBanglaHalant(n.charAt(t - r - 1))) r += 2;
        else break;
      }
      f = n.substring(0, t - r);
      f += n.charAt(t);
      f += n.substring(t - r, t);
      f += n.substring(t + 1, n.length);
      n = f;
      o = t + 1;
      continue;
    }
    if (
      t < n.length - 1 &&
      IsBanglaHalant(n.charAt(t)) &&
      n.charAt(t - 1) === "à¦°"
    ) {
      for (i = 1, e = 0; ;)
        if (
          IsBanglaBanjonborno(n.charAt(t + i)) &&
          IsBanglaHalant(n.charAt(t + i + 1))
        )
          i += 2;
        else if (
          IsBanglaBanjonborno(n.charAt(t + i)) &&
          IsBanglaPreKar(n.charAt(t + i + 1))
        ) {
          e = 1;
          break;
        } else break;
      u = n.substring(0, t - 1);
      u += n.substring(t + i + 1, t + i + e + 1);
      u += n.substring(t + 1, t + i + 1);
      u += n.charAt(t - 1);
      u += n.charAt(t);
      u += n.substring(t + i + e + 1, n.length);
      n = u;
      t += i + e;
      o = t + 1;
      continue;
    }
  }
  return n;
}
function ConvertToASCII(n) {
  var t, i, r;
  for (
    t = new RegExp("à¦¬à¦¼", "g"),
      n = n.replace(t, "à¦°"),
      t = new RegExp("à¦¡à¦¼", "g"),
      n = n.replace(t, "à§"),
      t = new RegExp("à¦¢à¦¼", "g"),
      n = n.replace(t, "à§"),
      t = new RegExp("à¦¯à¦¼", "g"),
      n = n.replace(t, "à§"),
      t = new RegExp("à§", "g"),
      n = n.replace(t, "à§à¦¾"),
      t = new RegExp("à§", "g"),
      n = n.replace(t, "à§à§"),
      t = new RegExp("à§à¦°à§à¦¯", "g"),
      n = n.replace(t, "à§à¦°âà§à¦¯"),
      n = replaceLastLetter(n, "à¦°à§", "i&"),
      n = replaceLastLetter(n, "à¦°à§â", "i&"),
      n = ReArrangeUnicodeText(n),
      ensureUni2BijoyPatterns(),
      i = 0;
    i < uni2bijoyPatterns.length;
    i++
  )
    ((r = uni2bijoyPatterns[i]), (n = n.replace(r.regex, r.replacement)));
  return (
    (n = replaceFirstLetter(n, "â¡", "â ")),
    (n = replaceFirstLetter(n, "â°", "Ë")),
    (n = n.replace("(â¡", "(â ")),
    (n = n.replace("[â¡", "[â ")),
    (n = n.replace("Ãâ¡", "Ãâ ")),
    (n = n.replace("Ãâ¡", "Ãâ ")),
    (n = n.replace("(â°", "(Ë")),
    (n = n.replace("[â°", "[Ë")),
    (n = n.replace("Ãâ°", "ÃË")),
    (n = n.replace("Ãâ°", "ÃË")),
    (n = replaceMultiple(n, bijoyKarReplacements, !0)),
    replaceMultiple(n, bijoyRoFolaReplacements, !0)
  );
}
function replaceFirstLetter(n, t, i) {
  for (var r, f = n.split("\n"), e = "", u = 0; u < f.length; u++) {
    var h = f[u],
      o = h.split(/(\s+)/),
      s = "";
    for (r = 0; r < o.length; r++)
      s += r % 2 == 0 ? o[r].replace(new RegExp("^" + t, "g"), i) : o[r];
    e += s.trim();
    u < f.length - 1 && (e += "\n");
  }
  return e;
}
function replaceLastLetter(n, t, i) {
  for (var r, f = n.split("\n"), e = "", u = 0; u < f.length; u++) {
    var h = f[u],
      o = h.split(/(\s+)/),
      s = "";
    for (r = 0; r < o.length; r++)
      s += r % 2 == 0 ? o[r].replace(new RegExp(t + "$", "g"), i) : o[r];
    e += s.trim();
    u < f.length - 1 && (e += "\n");
  }
  return e;
}
function replaceMultiple(n, t, i) {
  var u = n,
    r,
    f;
  for (r in t)
    Object.prototype.hasOwnProperty.call(t, r) &&
      ((f = i ? new RegExp(r, "g") : r), (u = u.replace(f, t[r])));
  return u;
}
function convertToUnicode() {
  for (
    var r = $("#bijoyText").val(),
      t = r.split(/([\u0980-\u09ff]+\s*)/g),
      i = "",
      n = 0;
    n < t.length;
    n = n + 2
  )
    ((i += t[n] === " " ? "" : ConvertToUnicode(t[n])),
      (i += t[n + 1] === undefined ? "" : t[n + 1]));
  return ($("#uniText").val(i), displayCopyBtn("unicode"), !1);
}
function convertToBijoy() {
  var n = $("#uniText").val(),
    t = ConvertToASCII(n);
  return ($("#bijoyText").val(t), setBijoyFont(), displayCopyBtn("bijoy"), !1);
}
function setBijoyFont() {
  var n = $("#bijoyText");
  n.val()
    ? n.hasClass("bijoy-font") || n.addClass("bijoy-font")
    : n.hasClass("bijoy-font") && n.removeClass("bijoy-font");
}
function clearAllText() {
  $("#uniText").val("");
  $("#bijoyText").val("");
  displayCopyBtn("unicode");
  displayCopyBtn("bijoy");
  setBijoyFont();
}
function displayCopyBtn(n) {
  var i = $("#uniText"),
    t = $("#copyUnicode");
  n === "bijoy" && ((i = $("#bijoyText")), (t = $("#copyBijoy")));
  i.val()
    ? t.hasClass("display-none") && t.removeClass("display-none")
    : t.hasClass("display-none") || t.addClass("display-none");
}
var bijoy_string_conversion_map = {
    "iÂ¨": "à¦°âà§à¦¯",
    "ÂªÂ¨": "à§à¦°à§à¦¯",
    "Â°": "à¦à§à¦",
    "Â±": "à¦à§à¦",
    "Â³": "à¦à§à¦¤",
    "KÂ¡": "à¦à§à¦¬",
    "Â¯Å": "à¦¸à§à¦à§à¦°",
    Âµ: "à¦à§à¦°",
    "KÂ¬": "à¦à§à¦²",
    "Â¶Ã¨": "à¦à§à¦·à§à¦£",
    "Ã¾": "à¦¹à§à¦®",
    "Â²": "à¦à§à¦·à§à¦®",
    "Ã¿Ã¨": "à¦à§à¦·à§à¦®",
    "â¢Â¶": "à¦à§à¦à§à¦·",
    "â¢Ã¿": "à¦à§à¦à§à¦·",
    "Â¶": "à¦à§à¦·",
    "Ã¿": "à¦à§à¦·",
    "Â·": "à¦à§à¦¸",
    "Â´": "à¦à§à¦®",
    "Â¸": "à¦à§",
    "Â»": "à¦à§à¦§",
    "MÅ": "à¦à§à¦¨",
    "MÂ¥": "à¦à§à¦®",
    "MÃÆ": "à¦à§à¦°à§",
    "MÃ¸": "à¦à§à¦²",
    "MÂ¬": "à¦à§à¦²",
    "MÂ­": "à¦à§à¦²",
    "NÅ": "à¦à§à¦¨",
    "Â¼": "à¦à§à¦",
    "â¢L": "à¦à§à¦",
    "Â½": "à¦à§à¦",
    "â¢N": "à¦à§à¦",
    "â¢": "à¦à§à¦¸",
    "âP": "à¦à§à¦",
    "âQÂ¡": "à¦à§à¦à§à¦¬",
    "âQ": "à¦à§à¦",
    "âT": "à¦à§à¦",
    "Â¾Â¡": "à¦à§à¦à§à¦¬",
    "Â¾": "à¦à§à¦",
    "Ã": "à¦à§à¦",
    "Ã": "à¦à§à¦",
    "RÂ¡": "à¦à§à¦¬",
    "RÂ¦": "à¦à§à¦¬",
    "Ã": "à¦à§à¦",
    "Ã": "à¦à§à¦",
    "Ã": "à¦à§à¦",
    "Ã": "à¦à§à¦",
    "Ã": "à¦à§à¦",
    "UÂ¡": "à¦à§à¦¬",
    "UÂ¥": "à¦à§à¦®",
    "Ã": "à¦¡à§à¦¡",
    "Ã": "à¦£à§à¦",
    "Ã": "à¦£à§à¦ ",
    "Ã": "à¦¨à§à¦¸",
    "Ã": "à¦£à§à¦¡",
    "Ã": "à¦£à§à¦¡",
    "Å¡â": "à¦¨à§à¦¤à§",
    "Y^": "à¦£à§à¦¬",
    "ÃÂ¡": "à¦¤à§à¦¤à§à¦¬",
    "Å¡ÃÂ¡": "à¦¨à§à¦¤à§à¦¬",
    "Å¡âÂ¡": "à¦¨à§à¦¤à§à¦¬",
    "Ã": "à¦¤à§à¦¤",
    "Ã": "à¦¤à§à¦¥",
    "ZÂ¥": "à¦¤à§à¦®",
    "Ã": "à¦¤à§à¦®",
    "ZÂ¡": "à¦¤à§à¦¬",
    "ZÅ": "à¦¤à§à¦¨",
    "Ã": "à¦¤à§à¦°",
    "_Â¡": "à¦¥à§à¦¬",
    "ËM": "à¦¦à§à¦",
    "ËN": "à¦¦à§à¦",
    "Ã": "à¦¦à§à¦¦",
    "Ã": "à¦¦à§à¦§",
    "âºÃ": "à¦¨à§à¦¦à§à¦¬",
    "ËÂ¡": "à¦¦à§à¦¬",
    "Ã": "à¦¦à§à¦¬",
    "â¢Â£": "à¦¦à§à¦­à§à¦°",
    "â¢Â¢": "à¦¦à§à¦­",
    "Ã": "à¦¦à§à¦®",
    "`ÂªÆ": "à¦¦à§à¦°à§",
    "aÂªÆ": "à¦§à§à¦°à§",
    "aÅ¸": "à¦§à§à¦¬",
    "aÂ¥": "à¦§à§à¦®",
    "âºU": "à¦¨à§à¦",
    "Ã": "à¦¨à§à¦ ",
    "Ã": "à¦¨à§à¦¡",
    "Å¡Ã": "à¦¨à§à¦¤",
    "Å¡â": "à¦¨à§à¦¤",
    "Å¡Â¿": "à¦¨à§à¦¤à§à¦°",
    "Å¡â": "à¦¨à§à¦¥",
    "âº`": "à¦¨à§à¦¦",
    "Ã": "à¦¨à§à¦§",
    "YÅ": "à¦£à§à¦¨",
    "YÃ¨": "à¦£à§à¦¨",
    "bÅ": "à¦¨à§à¦¨",
    "Å¡^": "à¦¨à§à¦¬",
    "bÂ¥": "à¦¨à§à¦®",
    "Å¡Â§": "à¦¨à§à¦®",
    "Ã": "à¦ªà§à¦",
    "Ã": "à¦ªà§à¦¤",
    "cÅ": "à¦ªà§à¦¨",
    "Ã ": "à¦ªà§à¦ª",
    "cÂ¬": "à¦ªà§à¦²",
    "cÃ¸": "à¦ªà§à¦²",
    "cÂ­": "à¦ªà§à¦²",
    "Ã¡": "à¦ªà§à¦¸",
    "cÃÆ": "à¦ªà§à¦°à§",
    "dÂ¬": "à¦«à§à¦²",
    "Ã¢": "à¦¬à§à¦",
    "Ã£": "à¦¬à§à¦¦",
    "Ã¤": "à¦¬à§à¦§",
    "eÅ¸": "à¦¬à§à¦¬",
    "eÂ­": "à¦¬à§à¦²",
    "eÃ¸": "à¦¬à§à¦²",
    "eÂªÆ": "à¦¬à§à¦°à§",
    "Ã¥Æ": "à¦­à§à¦°à§",
    "Ã¥": "à¦­à§à¦°",
    "fâ": "à¦­à§",
    "gÅ": "à¦®à§à¦¨",
    "Â¤Å": "à¦®à§à¦¨",
    "Â¤Ãº": "à¦®à§à¦ª",
    "Â¤c": "à¦®à§à¦ª",
    "Ã§": "à¦®à§à¦«",
    "Â¤^": "à¦®à§à¦¬",
    "Â¤Â¢": "à¦®à§à¦­",
    "Â¤Â£": "à¦®à§à¦­à§à¦°",
    "Â¤Â§": "à¦®à§à¦®",
    "Â¤Ã¸": "à¦®à§à¦²",
    "gÃ¸": "à¦®à§à¦²",
    "Â¤Â¬": "à¦®à§à¦²",
    "gÂ¬": "à¦®à§à¦²",
    "Â¤Âª": "à¦®à§à¦°",
    "iÆ": "à¦°à§",
    "Ã©": "à¦²à§à¦",
    Ãª: "à¦²à§à¦",
    "Ã«": "à¦²à§à¦",
    "Ã¬": "à¦²à§à¦¡",
    "Ã­": "à¦²à§à¦ª",
    "Ã®": "à¦²à§à¦«",
    "jÂ¦": "à¦²à§à¦¬",
    "jÂ¥": "à¦²à§à¦®",
    "jÃ¸": "à¦²à§à¦²",
    "jÂ­": "à¦²à§à¦²",
    "kÃÆ": "à¦¶à§à¦°à§",
    "kÂªÆ": "à¦¶à§à¦°à§",
    "Ã¯": "à¦¶à§",
    "Ã°": "à¦¶à§à¦",
    "Ã±": "à¦¶à§à¦",
    "kÅ": "à¦¶à§à¦¨",
    "kÂ¦": "à¦¶à§à¦¬",
    "k^": "à¦¶à§à¦¬",
    "kÂ¥": "à¦¶à§à¦®",
    "kÃ¸": "à¦¶à§à¦²",
    "kÂ¬": "à¦¶à§à¦²",
    "kÂ­": "à¦¶à§à¦²",
    "kÂªÆ": "à¦¶à§à¦°à§",
    "Â®â¹": "à¦·à§à¦",
    "Â®Å": "à¦·à§à¦à§à¦°",
    "Ã³": "à¦·à§à¦",
    "Ã´": "à¦·à§à¦ ",
    "Ã²": "à¦·à§à¦£",
    "Â®Ãº": "à¦·à§à¦ª",
    "Â®c": "à¦·à§à¦ª",
    Ãµ: "à¦·à§à¦«",
    "Â®Â§": "à¦·à§à¦®",
    "Â¯â¹": "à¦¸à§à¦",
    "Â¯yâ¹": "à¦¸à§à¦à§",
    "Ã·": "à¦¸à§à¦",
    "Ã¶": "à¦¸à§à¦",
    "Â¯Ã": "à¦¸à§à¦¤",
    "Â¯â": "à¦¸à§à¦¤",
    "Â¯â": "à¦¸à§à¦¤à§",
    "Â¯Â¿": "à¦¸à§à¦¤à§à¦°",
    "Â¯â": "à¦¸à§à¦¥",
    "mÅ": "à¦¸à§à¦¨",
    "Â¯Å": "à¦¸à§à¦¨",
    "Â¯Ãº": "à¦¸à§à¦ª",
    "Ã¹": "à¦¸à§à¦«",
    "Â¯Âª": "à¦¸à§à¦°",
    "Â¯^": "à¦¸à§à¦¬",
    "Â¯Â§": "à¦¸à§à¦®",
    "mÂªÆ": "à¦¸à§à¦°à§",
    "Â¯Â­": "à¦¸à§à¦²",
    "Â¯Ã¸": "à¦¸à§à¦²",
    "mÃ¸": "à¦¸à§à¦²",
    "Ã»": "à¦¹à§",
    "nÅ¸": "à¦¹à§à¦¬",
    "nÃ¨": "à¦¹à§à¦£",
    "Ã½": "à¦¹à§à¦¨",
    "nÂ¬": "à¦¹à§à¦²",
    "nÆ": "à¦¹à§",
    "Ã¼": "à¦¹à§",
    "Â©": "à¦°à§",
    Av: "à¦",
    A: "à¦",
    B: "à¦",
    C: "à¦",
    D: "à¦",
    E: "à¦",
    F: "à¦",
    G: "à¦",
    H: "à¦",
    I: "à¦",
    J: "à¦",
    K: "à¦",
    L: "à¦",
    M: "à¦",
    N: "à¦",
    O: "à¦",
    P: "à¦",
    Q: "à¦",
    R: "à¦",
    S: "à¦",
    T: "à¦",
    U: "à¦",
    V: "à¦ ",
    W: "à¦¡",
    X: "à¦¢",
    Y: "à¦£",
    Z: "à¦¤",
    _: "à¦¥",
    "`": "à¦¦",
    a: "à¦§",
    b: "à¦¨",
    c: "à¦ª",
    d: "à¦«",
    e: "à¦¬",
    f: "à¦­",
    g: "à¦®",
    h: "à¦¯",
    i: "à¦°",
    j: "à¦²",
    k: "à¦¶",
    l: "à¦·",
    m: "à¦¸",
    n: "à¦¹",
    o: "à§",
    p: "à§",
    q: "à§",
    r: "à§",
    0: "à§¦",
    1: "à§§",
    2: "à§¨",
    3: "à§©",
    4: "à§ª",
    5: "à§«",
    6: "à§¬",
    7: "à§­",
    8: "à§®",
    9: "à§¯",
    v: "à¦¾",
    w: "à¦¿",
    x: "à§",
    y: "à§",
    z: "à§",
    "â": "à§",
    "â": "à§",
    "Ã¦": "à§",
    "~": "à§",
    "â": "à§",
    "â": "à§",
    "â¡": "à§",
    "â ": "à§",
    "â°": "à§",
    "Ë": "à§",
    "Å ": "à§",
    "Ã": "â",
    "Ã": "â",
    "|": "à¥¤",
    "Ã": "â",
    "Ã": "â",
    s: "à¦",
    t: "à¦",
    u: "à¦",
    Âª: "à§à¦°",
    "Ã": "à§à¦°",
    "Â«": "à§à¦°",
    "Â¨": "à§à¦¯",
    "&": "à§",
    "â¦": "à§",
    "Ã": "â",
    "\\": "à¥¥",
  },
  correctBijoy = { "&Âª": "Âª" },
  correctUnicode = { "Å¡à¦¤à§à¦®": "à¦¨à§à¦¤", "Â¯à¦¤à§à¦®": "à¦¸à§à¦¤" },
  bijoyPatterns = null,
  uni2bijoy_string_conversion_map = {
    "à¥¤": "|",
    "â": "Ã",
    "â": "Ã",
    "â": "Ã",
    "â": "Ã",
    "à§à¦°à§à¦¯": "ÂªÂ¨",
    "à¦°âà§à¦¯": "iÂ¨",
    "à¦à§à¦": "Â°",
    "à¦à§à¦": "Â±",
    "à¦à§à¦¤": "Â³",
    "à¦à§à¦¬": "KÂ¡",
    "à¦¸à§à¦à§à¦°": "Â¯Å",
    "à¦à§à¦°": "Âµ",
    "à¦à§à¦²": "KÂ¬",
    "à¦à§à¦·à§à¦¨": "Â¶Ã¨",
    "à¦à§à¦·à§à¦£": "Â¶Ã¨",
    "à¦¹à§à¦®": "Ã¾",
    "à¦à§à¦·à§à¦®": "Â²",
    "à¦à§à¦à§à¦·": "â¢Â¶",
    "à¦à§à¦·": "Â¶",
    "à¦à§à¦¸": "Â·",
    "à¦à§à¦®": "Â´",
    "à¦à§à¦à§": "Â½y",
    "à¦à§": "Â¸",
    "à¦à§à¦§": "Â»",
    "à¦à§à¦¨": "MÅ",
    "à¦à§à¦®": "MÂ¥",
    "à¦à§à¦²à§": "MÃ¸Ã¦",
    "à¦à§à¦²": "MÃ¸",
    "à¦à§à¦°à§": "MÂªÃ¦",
    "à¦à§à¦¨": "NÅ",
    "à¦à§à¦": "Â¼",
    "à¦à§à¦": "â¢L",
    "à¦à§à¦": "Â½",
    "à¦à§à¦": "â¢N",
    "à¦à§à¦": "âP",
    "à¦à§à¦": "âQ",
    "à¦à§à¦à§à¦¬": "âQÂ¡",
    "à¦à§à¦": "âT",
    "à¦à§à¦à§à¦¬": "Â¾Â¡",
    "à¦à§à¦": "Â¾",
    "à¦à§à¦": "Ã",
    "à¦à§à¦": "Ã",
    "à¦à§à¦¬": "RÂ¡",
    "à¦à§à¦": "Ã",
    "à¦à§à¦": "Ã",
    "à¦à§à¦": "Ã",
    "à¦à§à¦": "Ã",
    "à¦à§à¦": "Ã",
    "à¦à§à¦¬": "UÂ¡",
    "à¦à§à¦®": "UÂ¥",
    "à¦¡à§à¦¡": "Ã",
    "à¦£à§à¦": "Ã",
    "à¦£à§à¦ ": "Ã",
    "à¦¨à§à¦¸": "Ã",
    "à¦£à§à¦¡": "Ã",
    "à¦¨à§à¦¤à§": "Å¡â",
    "à¦£à§à¦¬": "Y^",
    "à¦¤à§à¦¤à§à¦¬": "ÃÂ¡",
    "à¦¨à§à¦¤à§à¦¬": "Å¡ÃÂ¡",
    "à¦¤à§à¦¤": "Ã",
    "à¦¤à§à¦¥": "Ã",
    "à¦¤à§à¦¨": "ZÅ",
    "à¦¤à§à¦®": "ZÂ¥",
    "à¦¤à§à¦¬": "ZÂ¡",
    "à¦¤à§à¦°à§": "ÃÃ¦",
    "à¦¤à§à¦°à§": "ÃÆ",
    "à¦¥à§à¦¬": "_Â¡",
    "à¦¦à§à¦": "ËM",
    "à¦¦à§à¦": "ËN",
    "à¦¦à§à¦¦": "Ã",
    "à¦¦à§à¦§": "Ã",
    "à¦¨à§à¦¦à§à¦¬": "âºÃ",
    "à¦¦à§à¦¬": "Ã",
    "à¦¦à§à¦­à§à¦°": "â¢Â£",
    "à¦¦à§à¦­": "â¢Â¢",
    "à¦¦à§à¦®": "Ã",
    "à¦¦à§à¦°à§": "`ÂªÃ¦",
    "à¦¶à§à¦°à§": "kÃÃ¦",
    "à¦ªà§à¦°à§": "cÃÃ¦",
    "à¦ªà§à¦²à§": "cÃ¸Ã¦",
    "à¦§à§à¦¬": "aÅ¸",
    "à¦§à§à¦®": "aÂ¥",
    "à¦¨à§à¦": "âºU",
    "à¦¨à§à¦ ": "Ã",
    "à¦¨à§à¦¡": "Ã",
    "à¦¨à§à¦¤à§à¦°": "Å¡Â¿",
    "à¦¨à§à¦¤": "Å¡Ã",
    "à¦¸à§à¦¤à§à¦°": "Â¯Â¿",
    "à¦¤à§à¦°": "Ã",
    "à¦¨à§à¦¥": "Å¡â",
    "à¦¨à§à¦¦": "âº`",
    "à¦¨à§à¦§": "Ã",
    "à¦£à§à¦£": "YÅ",
    "à¦£à§à¦¨": "YÅ",
    "à¦¨à§à¦¨": "bÅ",
    "à¦¨à§à¦¬": "Å¡^",
    "à¦¨à§à¦®": "bÂ¥",
    "à¦ªà§à¦": "Ã",
    "à¦ªà§à¦¤": "Ã",
    "à¦ªà§à¦¨": "cÅ",
    "à¦ªà§à¦ª": "Ã ",
    "à¦ªà§à¦²": "cÃ¸",
    "à¦ªà§à¦¸": "Ã¡",
    "à¦«à§à¦²": "dÂ¬",
    "à¦¬à§à¦": "Ã¢",
    "à¦¬à§à¦¦": "Ã£",
    "à¦¬à§à¦§": "Ã¤",
    "à¦¬à§à¦¬": "eÅ¸",
    "à¦¬à§à¦²": "eÃ¸",
    "à¦­à§à¦°": "Ã¥",
    "à¦®à§à¦¨": "gÅ",
    "à¦®à§à¦ª": "Â¤Ãº",
    "à¦®à§à¦«": "Ã§",
    "à¦®à§à¦¬": "Â¤^",
    "à¦®à§à¦­": "Â¤Â¢",
    "à¦®à§à¦­à§à¦°": "Â¤Â£",
    "à¦®à§à¦®": "Â¤Â§",
    "à¦®à§à¦²": "Â¤Ã¸",
    "à§à§": "oâ",
    "à§à§": "pâ",
    "à¦°à§": "iÃ¦",
    "à¦°à§": "iÆ",
    "à¦²à§à¦": "Ã©",
    "à¦²à§à¦": "Ãª",
    "à¦²à§à¦ª": "Ã­",
    "à¦²à§à¦": "Ã«",
    "à¦²à§à¦¡": "Ã¬",
    "à¦²à§à¦«": "Ã®",
    "à¦²à§à¦¬": "jÂ¦",
    "à¦²à§à¦®": "jÂ¥",
    "à¦²à§à¦²": "jÃ¸",
    "à¦¶à§": "Ã¯",
    "à¦¶à§à¦": "Ã°",
    "à¦¶à§à¦": "Ã±",
    "à¦¶à§à¦¨": "kÅ",
    "à¦¶à§à¦¬": "kÂ¦",
    "à¦¶à§à¦®": "kÂ¥",
    "à¦¶à§à¦²": "kÃ¸",
    "à¦·à§à¦": "Â®â¹",
    "à¦·à§à¦à§à¦°": "Â®Å",
    "à¦·à§à¦": "Ã³",
    "à¦·à§à¦ ": "Ã´",
    "à¦·à§à¦£": "Ã²",
    "à¦·à§à¦ª": "Â®Ãº",
    "à¦·à§à¦«": "Ãµ",
    "à¦·à§à¦®": "Â®Â§",
    "à¦¸à§à¦": "Â¯â¹",
    "à¦¸à§à¦": "Ã·",
    "à¦¸à§à¦": "Ã¶",
    "à¦¸à§à¦¤à§": "Â¯â",
    "à¦¸à§à¦¤": "Â¯Ã",
    "à¦¸à§à¦¥": "Â¯â",
    "à¦¸à§à¦¨": "mÅ",
    "à¦¸à§à¦ª": "Â¯Ãº",
    "à¦¸à§à¦«": "Ã¹",
    "à¦¸à§à¦¬": "Â¯^",
    "à¦¸à§à¦®": "Â¯Â§",
    "à¦¸à§à¦²": "Â¯Ã¸",
    "à¦¹à§à¦¬": "nÅ¸",
    "à¦¹à§": "Ã»",
    "à¦¹à§à¦£": "nÃ¨",
    "à¦¹à§à¦¨": "Ã½",
    "à¦¹à§à¦²": "nÂ¬",
    "à¦¹à§": "Ã¼",
    "à¦°à§": "Â©",
    "à§à¦°": "Âª",
    "à§à¦¯": "Â¨",
    "à§": "&",
    "à¦": "Av",
    "à¦": "A",
    "à¦": "B",
    "à¦": "C",
    "à¦": "D",
    "à¦": "E",
    "à¦": "F",
    "à¦": "G",
    "à¦": "H",
    "à¦": "I",
    "à¦": "J",
    "à¦": "K",
    "à¦": "L",
    "à¦": "M",
    "à¦": "N",
    "à¦": "O",
    "à¦": "P",
    "à¦": "Q",
    "à¦": "R",
    "à¦": "S",
    "à¦": "T",
    "à¦": "U",
    "à¦ ": "V",
    "à¦¡": "W",
    "à¦¢": "X",
    "à¦£": "Y",
    "à¦¤": "Z",
    "à¦¥": "_",
    "à¦¦": "`",
    "à¦§": "a",
    "à¦¨": "b",
    "à¦ª": "c",
    "à¦«": "d",
    "à¦¬": "e",
    "à¦­": "f",
    "à¦®": "g",
    "à¦¯": "h",
    "à¦°": "i",
    "à¦²": "j",
    "à¦¶": "k",
    "à¦·": "l",
    "à¦¸": "m",
    "à¦¹": "n",
    "à§": "o",
    "à§": "p",
    "à§": "q",
    "à§": "r",
    "à§¦": "0",
    "à§§": "1",
    "à§¨": "2",
    "à§©": "3",
    "à§ª": "4",
    "à§«": "5",
    "à§¬": "6",
    "à§­": "7",
    "à§®": "8",
    "à§¯": "9",
    "à¦¾": "v",
    "à¦¿": "w",
    "à§": "x",
    "à§": "y",
    "à§": "~",
    "â¦": "...",
    "à§": "â¦",
    "à§": "â¡",
    "à§": "â°",
    "à§": "Å ",
    "à¦": "s",
    "à¦": "t",
    "à¦": "u",
    "â": "Ã",
    "à¥¥": "\\",
  },
  bijoyKarReplacements = {
    "Â¨y": "yÂ¨",
    "Â¨~": "~Â¨",
    vu: "uv",
    "Â¨u": "uÂ¨",
    Ky: "Kz",
    "K~": "Kâ",
    Py: "Pz",
    "P~": "Pâ",
    Qy: "Qz",
    "Q~": "Qâ",
    Sy: "Sz",
    "S~": "Sâ",
    Uy: "Uz",
    "U~": "Uâ",
    Vy: "Vz",
    "V~": "Vâ",
    Wy: "Wz",
    "W~": "Wâ",
    Xy: "Xz",
    "X~": "Xâ",
    Zy: "Zz",
    "Z~": "Zâ",
    dy: "dz",
    "d~": "dâ",
    fy: "fz",
    "f~": "fâ",
    "Â¶y": "Â¶z",
    "Â¶~": "Â¶â",
    "Ãy": "Ãz",
    "Ã~": "Ãâ",
    "Ã¾y": "Ã¾z",
    "Ã¾~": "Ã¾â",
    "Â¾y": "Â¾z",
    "Â¾~": "Â¾â",
    "Â°y": "Â°z",
    "Â°~": "Â°â",
    "Â¼y": "Â¼z",
    "Â¼~": "Â¼â",
    "Ãy": "Ãz",
    "Ã~": "Ãâ",
    "Ãy": "Ãz",
    "Ã~": "xâ",
    "Ã¤y": "Ã¤z",
    "Ã¤~": "Ã¤â",
    "Â§â¦": "Â§â",
    "Â¥â¦": "Â¥â",
    "câ¦": "câ",
    "Nâ¦": "Nâ",
    "gâ¦": "gâ",
    "eâ¦": "eâ",
    "kâ¦": "kâ",
    "Lâ¦": "Lâ",
    "Mâ¦": "Mâ",
    "mâ¦": "mâ",
    "lâ¦": "lâ",
    "Râ¦": "Râ",
    "_â¦": "_â",
    "`â¦": "`â",
    "aâ¦": "aâ",
    "bâ¦": "bâ",
    "jâ¦": "jâ",
    "hâ¦": "hâ",
    "Yâ¦": "Yâ",
    "j&Â¸": "Ãªy",
    "'â¡": "'â ",
    '"â¡': '"â ',
    "{â¡": "{â ",
    "-â¡": "-â ",
    "'â°": "'Ë",
    '"â°': '"Ë',
    "{â°": "{Ë",
    "-â°": "-Ë",
    "Â©y": "Â©z",
    "Â©~": "Â©â",
    "â¹y": "â¹z",
    "â¹~": "â¹â",
    "Ã·y": "Ã·z",
    "Ã·~": "Ã·â",
    "Ã¹y": "Ã¹z",
    "Ã¹~": "Ã¹â",
  },
  bijoyRoFolaReplacements = {
    "&iÃ¦": "ÂªÃ¦",
    "&iÆ": "ÂªÆ",
    MÂª: "MÃ",
    cÂª: "cÃ",
    dÂª: "dÂ«",
    "NÂªÃ¦": "NÂªy",
    "PÂªÃ¦": "PÂªy",
    "QÂªÃ¦": "QÂªy",
    "SÂªÃ¦": "SÂªy",
    "UÂªÃ¦": "UÂªy",
    "VÂªÃ¦": "VÂªy",
    "WÂªÃ¦": "WÂªy",
    "XÂªÃ¦": "XÂªy",
    "YÂªÃ¦": "YÂªy",
    "bÂªÃ¦": "bÂªy",
    "dÂ«Ã¦": "dÂ«y",
    "hÂªÃ¦": "hÂªy",
    "jÂªÃ¦": "jÂªy",
    "lÂªÃ¦": "lÂªy",
    "nÂªÃ¦": "nÂªy",
    "Ã¥y": "Ã¥Ã¦",
    "NÂªÆ": "NÂª~",
    "PÂªÆ": "PÂª~",
    "QÂªÆ": "QÂª~",
    "SÂªÆ": "SÂª~",
    "UÂªÆ": "UÂª~",
    "VÂªÆ": "VÂª~",
    "WÂªÆ": "WÂª~",
    "XÂªÆ": "XÂª~",
    "YÂªÆ": "YÂª~",
    "bÂªÆ": "bÂª~",
    "dÂ«Æ": "dÂ«~",
    "hÂªÆ": "hÂª~",
    "jÂªÆ": "jÂª~",
    "lÂªÆ": "lÂª~",
    "nÂªÆ": "nÂª~",
    "Ã¥~": "Ã¥Æ",
    "âQ&e": "âQÂ¡",
    kÂª: "kÃ",
    mÂª: "mÃ",
    "g&Ã¥": "Â¤Â£",
  },
  uni2bijoyPatterns = null;
document.addEventListener("DOMContentLoaded", function () {
  var n = document.getElementById("btnToBijoy"),
    t = document.getElementById("btnToUnicode"),
    i = document.getElementById("btnClearAll");
  n &&
    n.addEventListener("click", function (n) {
      n.preventDefault();
      convertToBijoy();
    });
  t &&
    t.addEventListener("click", function (n) {
      n.preventDefault();
      convertToUnicode();
    });
  i &&
    i.addEventListener("click", function (n) {
      n.preventDefault();
      clearAllText();
    });
});
$("#uniText").bind("input propertychange", function () {
  $("#uniText").val() || displayCopyBtn("unicode");
});
$("#bijoyText").bind("input propertychange", function () {
  setBijoyFont();
  $("#bijoyText").val() || displayCopyBtn("bijoy");
});
