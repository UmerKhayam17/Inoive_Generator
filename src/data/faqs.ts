export interface Faq {
  q: string;
  a: string;
}

export const HOME_FAQS: Faq[] = [
  {
    q: "Is this invoice generator really free?",
    a: "Yes. You can create and download unlimited invoices at no cost. There is no trial, no watermark on the PDF and no premium tier hidden behind the download button.",
  },
  {
    q: "Do I need to create an account?",
    a: "No signup is required. The generator runs entirely in your browser, so you can start typing straight away and download the finished PDF immediately.",
  },
  {
    q: "Where is my invoice data stored?",
    a: "Your invoice is saved in your own browser's local storage so you can return and continue later. Nothing is uploaded to a server, and clearing your browser data removes it permanently.",
  },
  {
    q: "Can I add my company logo and brand colour?",
    a: "Yes. Upload a logo image and pick any accent colour; both appear in the live preview and in the downloaded PDF.",
  },
  {
    q: "How many invoice templates can I choose from?",
    a: "Ten professionally designed templates are included — Modern, Minimal, Corporate, Elegant, Blue, Dark, Startup, Agency, Creative and Classic. You can switch between them instantly without re-entering data.",
  },
  {
    q: "Can I add tax, discount and shipping?",
    a: "Yes. Enter a percentage discount, a tax rate and a shipping amount, and the subtotal and grand total recalculate in real time.",
  },
  {
    q: "Which currencies are supported?",
    a: "You can invoice in USD, EUR, GBP, INR, AUD, CAD, AED, SGD, JPY, ZAR and more. The chosen symbol is applied everywhere on the invoice.",
  },
  {
    q: "Can I print the invoice instead of downloading it?",
    a: "Yes. The print button opens your browser's print dialog with a print-optimised version of the invoice, so you can print or save to PDF directly.",
  },
];

export const CONTACT_FAQS: Faq[] = [
  {
    q: "How quickly do you reply?",
    a: "We answer most messages within one business day, Monday to Friday.",
  },
  {
    q: "Can you help me customise an invoice template?",
    a: "Send us a description of what you need and we will point you to the closest template and the settings to change.",
  },
  {
    q: "Do you offer an API or bulk invoicing?",
    a: "Not yet. Both are on our roadmap alongside the other free business tools we are building.",
  },
  {
    q: "I found a bug — where do I report it?",
    a: "Use the form on this page and include your browser and what you were doing. Bug reports get priority.",
  },
];