
// Here in this document is not valid type and it dont have the function program will get crash
function render(document: any) {
    document.close();
    document.open();
}

// We are validating the document by typeof.
function renderDoc(document: unknown) {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
}

// Validating the document by instanceof 
type WordDocument = { docName: string, docType: string };
let doc: WordDocument = { docName: "file1.docx", docType: "MIME/docx" }

let wordDoc: WordDocument = { docName: "file1.docx", docType: "MIME/docx" }

// console.log(doc instanceof WordDocument)

// function renderContent(document: unknown) {
//     if (document instanceof WordDocument) {
        
//     }
// }