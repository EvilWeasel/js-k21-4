# HTML/CSS/Javascript

## How to use

1. Öffnen Sie eine Konsole (Powershell/bash/...) in dem Ordner, in dem dieses Repo gespeichert werden soll.
2. Geben Sie `git clone <url>` an und downloaden Sie sich das Repository.
3. Navigieren Sie in den Ordner mit `cd <Ordnername>`.
4. Öffnen Sie VSCode im aktuellen Verzeichnis mit `code .`.

## Random IHK Notes

Subnetting Aufgabe: 192.10.10.0/24

1. 100
2. 50
3. 50
4. 10

## Aufgabe 

### HTML

#### Aufgabe 1

Erstellen Sie ein Formular, für eine Autoverkauf. Dort soll der Kunde sein Auto mit allen relevanten Daten eingeben können,
worauf der Händler dem Kunden ein Angebot zuschicken kann.

### Javascript

#### Aufgabe 1

Schreiben Sie Programm, dass nacheinander von 1 bis 100 in der Konsole ausgibt.
Dabei sollen aber folgende Regeln beachtet werden:

1. Ist die Zahl ein Vielfaches von 3, dann soll anstatt der Zahl "Fizz" ausgegeben werden.
2. Ist die Zahl ein Vielfaches von 5, dann soll anstatt der Zahl "Buzz" ausgegeben werden.
3. Ist die Zahl ein Vielfaches von 3 UND 5, dann soll anstatt der Zahl "FizzBuzz" ausgegeben werden.


## Wichtige Themenbereiche (HN-Kammer)

1. IPV4
2. IPV6 (und besonderst umrechnungen)
3. Projektmanagent (Wasserfalldiagramm, Netzplan, Stakeholder, Risikoanalyse)
4. Handelskalkulation
5. Produktvergleiche (Kosten-Nutzen)
6. UML
7. Pseudocode
8. DSGVO
9. SQL


## HTML Notes

HTML ist eine textbasierte Auszeichnungssprache, also Text mit *Strukturelementen*, die steuern, wie der Anzuzeigende Text vom Webbrowser gerendert (dargestellt) wird. Zusätzlich können HTML-Dokumente Metainformationen über den Text haben (Autor, Zusammenfassung, Tags,...).

### HTML5 Neuerungen

Diese müssen nicht unbedingt alle bekannt sein, aber einige davon *könnten* von der IHK abgefragt werden.

[HTML5 Neuerungen | as-computer.de](https://www.as-computer.de/wissen/neue-html5-tags/)


## CSS Notes

Grundlegende Begriffe und deren Bedeutung sollten bekannt sein. Darunter fallen z.B.:

- Selektoren (e.g. element, class, id, attribute)
- Regeln (e.g. font-size, font-family, display,...)
- Unterschiede zwischen den Einheiten (relativ (vw/%/rem) vs absolut (px))

## JavaScript Notes

### Nützliche Ressourcen

[mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
[w3schools](https://www.w3schools.com/js/default.asp)
[js-learning-collection | github.com](https://github.com/snipcart/learn-vanilla-js)

### Equality-Checks

```javascript
= // => assignment operator
== // => equals
=== // => strict-equality

!= // => not-equals
!== // => not-strictly-equals
```

### JS Primitive Types

| Type      | typeof return value | Object wrapper |
| --------- | ------------------- | -------------- |
| Null      | "object"            | N/A            |
| Undefined | "undefined"         | N/A            |
| Boolean   | "boolean"           | Boolean        |
| Number    | "number"            | Number         |
| BigInt    | "bigint"            | BigInt         |
| String    | "string"            | String         |
| Symbol    | "symbol"            | Symbol         |

### JavaScript Klassen

Klassen sind templates um Objekte zu erstellen. Sie kapseln Daten mit entsprechenden Code.

In JavaScript sind Klassen *nur* `syntaktischer Zucker` für Prototypen, was aber für die Funktion unserer App nicht *so* wichtig ist.

#### Klassendeklaration

```javascript
const x = new Rectangle();// ⛔ Reference Error
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
const y = new Rectangle(); // ✅ Funktioniert
```

> Achtung: Klassendeklarationen werden nicht "gehoisted"
> ==> Deklaration **muss** vor der Instanzierung stehen!

Außerdem wichtig zu wissen:

- Pro Klasse kann es nur **einen** Konstruktor geben.
- Im Konstruktor kann das `super` keyword verwendet werden, um den Konstruktor des Parent (wenn vorhanden) aufzurufen.
- Mit dem `static` keyword können staische Methoden oder Eigenschaften definiert werden. Diese sind **nur** über die Klasse, und **nicht** über die Instanz aufrufbar

#### Static

Quelle: [MDN | Static methods and properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties)

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName);      // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

## Git Notes

Erstellen eines neuen Repositories: `git init`

Default Branch umbennenen: `git branch -m main`

Status des Repo erfragen: `git status`

Dateien für den nächsten **Commit** hinzufügen: `git add <Dateiname>`

Einen neuen Commit erstellen: `git commit -m "<CommitMessage>"`

Die aktuelle Version des Repo auf den Remote hochladen: `git push`

Die aktuelle Version des Repo lokal vom Remote runterladen: `git pull`


## Markdown Notes

[Markdown Cheat-Sheet](https://www.markdownguide.org/cheat-sheet/)

Dateien mit der Endung `.MD` sind sogenannte Markdown-Dateien. Sie sind Text-Dateien, in denen wir den Text mit speziellen Symbolen *hervorheben* können, ähnlich wie in einem Word Dokument.

Während die Formatierung in Word allerdings versteckt ist und nur über Button oder Shortcuts in der App funktioniert, schreiben wir die Formatierung in Markdown selbst mit.

Markdown-Dateien werden vorallem in der Open-Source Community gerne verwendet, unter anderem auf Github, Gitlab, etc.

Es folgen einige Beispiele, wie man Markdown einsetzen kann, um schnell Texte zu schreiben und zu formatieren:

# Header1
## Header2
### Header3
#### Header4
##### Header5
###### Header6

- Aufzählung
- Aufzählung
- Aufzählung

1. Aufzählung1
2. Aufzählung2
3. Aufzählung3

---

Horizontaler Strich (Seperator)

---

Formatierung-Inline (Fett&Kursiv)

**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an *unknown* printer took a galley of type and scrambled it to make a *type specimen* book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the **1960s** with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Durchgestrichener Text:

~~Die Erde ist flach~~

---

Links

[title](https://www.example.com)
![alt text](image.jpg)

---

Tables

| Syntax | Beschreibung |
| ------ | ------------ |
| header | Title |
| Paragraph | Text |

---

Code-Blocks

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

---

Foot-Note

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

---

Block-Quote

> This is a blockquote...
> Which can span multiple lines.

---