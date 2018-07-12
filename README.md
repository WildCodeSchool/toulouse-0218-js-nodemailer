# LiveCoding envoi d'emails avec Node.js

## Installation / Utilisation

- Dans les répertoires `front` et `back`: `npm install` ou `yarn install`
- Créer un fichier `back/credentials.json` (**ignoré de Git**) en prenant pour modèle le fichier `back/credentials.sample.json`.
- Lancer les applis front et back:
    - Dans `back`: `node server`
    - Dans `front`: `npm start` ou `yarn start`

## Intro

On va utiliser la librairie [NodeMailer](https://nodemailer.com/), devenue un standard dans le monde Node.js. NodeMailer offre un grand nombre d'options de configuration, notamment concernant la façon d'envoyer les e-mails.

On peut utiliser entre autres ces "canaux" d'envoi :
- Un serveur SMTP (Simple Mail Transport Protocol), ce qui suppose d'en avoir un à disposition (à savoir: il est difficile de le configurer correctement soi-même)
- Un compte GMail (ce qu'on va faire pour ce live coding)
- Une API du type [MailGun](https://www.mailgun.com/), [MailChimp](https://mailchimp.com/), [SendInBlue](https://fr.sendinblue.com/), moins complexe à paramétrer qu'un serveur SMTP

## Liens

* La vidéo du live coding: https://youtu.be/VuOMhAu5R3I
* Tuto très bien fait dont ~~je me suis inspiré~~ j'ai allègrement repompé le code pour NodeMailer : https://medium.com/@manojsinghnegi/sending-an-email-using-nodemailer-gmail-7cfa0712a799
