# global-card-ident

JavaScript identifier for the Credit Card number for Global Issuers/Brands. Returning data, mask, regex and brand/logo image in SVG.

Identificador global de JavaScript para o número do cartão de crédito para bandeiras/emissoras globais. Retornando dados, máscara, regex e imagem de marca/logo em SVG.

Identificador JavaScript global para el número de tarjeta de crédito para marcas/emisores globales. Devolución de datos, máscara, expresiones regulares e imagen de marca/logotipo en SVG.

**Default use 

*How to use:
```
const CardIdent = require('global-card-ident')

console.log(CardIdent('5031 4332 1540 6351'))
console.log(CardIdent('4235 6477 2802 5682'))
console.log(CardIdent('3753 651535 56885'))

```
**Return sample:

```
{
  type: 'credit',
}
```


**Return from npm test

```
$ npm test

> global-card-ident@1.0.0 test
> node test.js

{
  issuer: 'Mastercard',
  brand: 'mastercard',
  logo: '<svg id="card-maestercard"  xmlns="http://www.w3.org/2000/svg">.../image data/...</svg>',
  prefixes: '5',
  mask: '0000 0000 0000 0000',
  regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
  active: true,
  length: [ 16 ],
  validation: true,
  number: 5031433215406351,
  industry: 'Banking and financial'
}
{
  issuer: 'Visa',
  brand: 'visa',
  logo: '<svg id="card-visa" xmlns="http://www.w3.org/2000/svg">.../image data/...</svg>',
  prefixes: '4',
  mask: [ '0000 0000 0000 0000' ],
  regex: [ '^4\\d{0,15}' ],
  active: true,
  length: [ 13, 16 ],
  validation: true,
  number: 4235647728025682,
  industry: 'Banking and financial'
}
{
  issuer: 'American Express',
  brand: 'amex',
  logo: '<svg id="card-amex" xmlns="http://www.w3.org/2000/svg">.../image data/...</svg>',
  prefixes: '34,37',
  mask: [ '0000 000000 00000' ],
  regex: [ '^3[47]\\d{0,13}' ],
  active: true,
  length: [ 13 ],
  validation: true,
  number: 375365153556885,
  industry: 'Travel and entertainment'
}

```

**Join here -> Project at GitHub 

If you are interested in contributing with new checkups for other types of documents related to Brazil and / or other countries, contact us by clicking on [New Issue] at link https://github.com/slomkowski/octoglow/issues of GitHub, for know how to get involved in the project.

Se você tiver interesse em contribuir com novos checkups para outros tipos de documentos relacionados ao Brasil e / ou outros países, entre em contato conosco clicando em [New Issue] no link https://github.com/slomkowski/octoglow/issues of GitHub, para saber como se envolver no projeto.

Si está interesado en contribuir con nuevos chequeos para otro tipo de documentos relacionados con Brasil y / u otros países, contáctenos haciendo clic en [New Issue] en el enlace https://github.com/slomkowski/octoglow/issues de GitHub , para aprender a involucrarse en el proyecto.

Si vous souhaitez contribuer à de nouveaux contrôles pour d'autres types de documents liés au Brésil et / ou à d'autres pays, contactez-nous en cliquant sur [Nouveau numéro] sur le lien https://github.com/slomkowski/octoglow/issues de GitHub , pour apprendre à s'impliquer dans le projet.

Wenn Sie daran interessiert sind, neue Überprüfungen für andere Arten von Dokumenten in Bezug auf Brasilien und / oder andere Länder durchzuführen, kontaktieren Sie uns, indem Sie unter dem Link https://github.com/slomkowski/octoglow/issues von GitHub auf [Neue Ausgabe] klicken , um zu lernen, wie man sich an dem Projekt beteiligt.

如果您有兴趣对巴西和/或其他国家/地区的其他类型的文档进行新的检查，请在此处与Pojects GitHub联系，以了解如何参与该项目。

إذا كنت مهتمًا بالمساهمة في عمليات فحص جديدة لأنواع أخرى من المستندات المتعلقة بالبرازيل و / أو دول أخرى ، فاتصل بنا من خلال النقر على [إصدار جديد] على الرابط https://github.com/slomkowski/octoglow/issues of GitHub لتعلم كيفية المشاركة في المشروع.

ブラジルや他の国に関連する他の種類のドキュメントの新しい検査に貢献することに興味がある場合は、リンクhttps://github.com/slomkowski/octoglow/issues ofGitHubの[NewIssue]をクリックしてお問い合わせください。 、プロジェクトに参加する方法を学びます。



About Creator: [Alailson Barbosa Ribeiro](https://www.alailson.com.br)
=============
![alt text](https://secure.gravatar.com/avatar/f4a6fbf1b704b29c4236d964f5f5280c "Alailson Barbosa Ribeiro")


