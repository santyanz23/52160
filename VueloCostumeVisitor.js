import VueloVisitor from ('./generated/VueloVisitor').VueloVisitor;

class CustomVisitor extends VueloVisitor {
    constructor() {
        super();
        this.codigoGenerado = "";
    }

    visitVuelo(ctx) {
        // Traducir vuelo completo a un objeto JS
        let vuelo = {};

        vuelo.codigo_vuelo = this.visit(ctx.codigo_vuelo());
        const aeropuertos = ctx.aeropuerto().map(a => this.visit(a));
        vuelo.origen = aeropuertos[0];
        vuelo.destino = aeropuertos[1];
        vuelo.hora = this.visit(ctx.hora());

        if (ctx.fecha()) vuelo.fecha = this.visit(ctx.fecha());
        if (ctx.estado()) vuelo.estado = ctx.estado().getText();
        if (ctx.operador()) vuelo.operador = this.visit(ctx.operador());
        if (ctx.asiento()) vuelo.asiento = this.visit(ctx.asiento());
        if (ctx.puerta()) vuelo.puerta = this.visit(ctx.puerta());
        if (ctx.terminal()) vuelo.terminal = this.visit(ctx.terminal());

        this.codigoGenerado += `console.log(${JSON.stringify(vuelo, null, 2)});\n`;

        return vuelo;
    }

    visitCodigo_vuelo(ctx) {
        return ctx.getText();
    }

    visitAeropuerto(ctx) {
        return ctx.getText();
    }

    visitHora(ctx) {
        return ctx.getText();
    }

    visitFecha(ctx) {
        return ctx.getText();
    }

    visitOperador(ctx) {
        return ctx.getText().trim();
    }

    visitAsiento(ctx) {
        return ctx.getText();
    }

    visitPuerta(ctx) {
        return ctx.getText();
    }

    visitTerminal(ctx) {
        return ctx.getText();
    }
}

module.exports = CustomVisitor;