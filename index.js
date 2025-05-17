import fs from 'fs';
import antlr4 from 'antlr4';
import { default as VueloLexer } from './generated/VueloLexer.js';
import { default as VueloParser } from './generated/VueloParser.js';
import { default as VueloVisitor } from './generated/VueloVisitor.js';

// VueloCustomVisitor
class CustomVisitor extends VueloVisitor {
    constructor() {
        super();
        this.codigoGenerado = "";
    }

    visitVuelo(ctx) {
        const codigo = ctx.codigo_vuelo().getText();
        const origen = ctx.aeropuerto(0).getText();
        const destino = ctx.aeropuerto(1).getText();
        const hora = ctx.hora().getText();
        const fecha = ctx.fecha().getText()
        const estado = ctx.estado().getText()
        const operador = ctx.operador().getText()
        const asiento = ctx.asiento().getText()
        const puerta = ctx.puerta().getText()
        const terminal = ctx.asiento().getText()

        this.codigoGenerado += `console.log({
      "codigo_vuelo": "${codigo}",
      "origen": "${origen}",
      "destino": "${destino}",
      "hora": "${hora}",
      "fecha": "${fecha}",
      "estado": "${estado}",
      "operador": "${operador}",
      "asiento": "${asiento}",
      "puerta": "${puerta}",
      "terminal": "${terminal}",
    });\n`;

        return null;
    }
}

// Input 
const input = fs.readFileSync('input.txt', 'utf8');

// Tokenizador
const chars = new antlr4.InputStream(input);
const lexer = new VueloLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new VueloParser(tokens);

// tabla de tokens
tokens.getTokens().forEach(token => {
    console.log(`Token: ${token.text}, Tipo: ${lexer.symbolicNames[token.type]}`);
});

// arbol
parser.buildParseTrees = true;
const tree = parser.vuelo();

// Visitor
const visitor = new CustomVisitor();
visitor.visit(tree);


// Mostrar y ejecutar
console.log("Código generado:\n");
console.log(visitor.codigoGenerado);
console.log("\nEjecutando...");
eval(visitor.codigoGenerado);
