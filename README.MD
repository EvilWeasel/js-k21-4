# HTML/CSS/Javascript

## How to use

1. Öffnen Sie eine Konsole (Powershell/bash/...) in dem Ordner, in dem dieses Repo gespeichert werden soll.
2. Geben Sie `git clone <url>` an und downloaden Sie sich das Repository.
3. Navigieren Sie in den Ordner mit `cd <Ordnername>`.
4. Öffnen Sie VSCode im aktuellen Verzeichnis mit `code .`.

## HTML Notes

HTML ist eine textbasierte Auszeichnungssprache, also Text mit *Strukturelementen*, die steuern, wie der Anzuzeigende Text vom Webbrowser gerendert (dargestellt) wird. Zusätzlich können HTML-Dokumente Metainformationen über den Text haben (Autor, Zusammenfassung, Tags,...).

## CSS Notes

## JavaScript Notes

## Git Notes

Erstellen eines neuen Repositories: `git init`

Default Branch umbennenen: `git branch -m main`

Status des Repo erfragen: `git status`

Dateien für den nächsten **Commit** hinzufügen: `git add <Dateiname>`

Einen neuen Commit erstellen: `git commit -m "<CommitMessage>"`

Die aktuelle Version des Repo auf den Remote hochladen: `git push`

Die aktuelle Version des Repo lokal vom Remote runterladen: `git pull`


## Markdown Notes

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