// Generated from d:/visual/calc/mio/VueloLexer.js/Vuelo.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import VueloListener from './VueloListener.js';
import VueloVisitor from './VueloVisitor.js';

const serializedATN = [4,1,10,96,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,57,8,3,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,5,6,72,8,6,10,6,12,6,75,9,6,1,7,1,7,1,7,3,
7,80,8,7,1,8,1,8,4,8,84,8,8,11,8,12,8,85,1,9,4,9,89,8,9,11,9,12,9,90,1,9,
3,9,94,8,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,2,1,0,4,6,2,0,7,7,10,10,
91,0,20,1,0,0,0,2,40,1,0,0,0,4,46,1,0,0,0,6,56,1,0,0,0,8,58,1,0,0,0,10,67,
1,0,0,0,12,69,1,0,0,0,14,76,1,0,0,0,16,81,1,0,0,0,18,93,1,0,0,0,20,21,3,
2,1,0,21,22,5,10,0,0,22,23,3,4,2,0,23,24,5,9,0,0,24,25,3,4,2,0,25,26,5,10,
0,0,26,27,3,6,3,0,27,28,5,10,0,0,28,29,3,8,4,0,29,30,5,10,0,0,30,31,3,10,
5,0,31,32,5,10,0,0,32,33,3,12,6,0,33,34,5,10,0,0,34,35,3,14,7,0,35,36,5,
10,0,0,36,37,3,16,8,0,37,38,5,10,0,0,38,39,3,18,9,0,39,1,1,0,0,0,40,41,5,
7,0,0,41,42,5,7,0,0,42,43,5,8,0,0,43,44,5,8,0,0,44,45,5,8,0,0,45,3,1,0,0,
0,46,47,5,7,0,0,47,48,5,7,0,0,48,49,5,7,0,0,49,5,1,0,0,0,50,51,5,8,0,0,51,
52,5,8,0,0,52,53,5,1,0,0,53,54,5,8,0,0,54,57,5,8,0,0,55,57,5,2,0,0,56,50,
1,0,0,0,56,55,1,0,0,0,57,7,1,0,0,0,58,59,5,8,0,0,59,60,5,8,0,0,60,61,5,3,
0,0,61,62,5,8,0,0,62,63,5,8,0,0,63,64,5,3,0,0,64,65,5,8,0,0,65,66,5,8,0,
0,66,9,1,0,0,0,67,68,7,0,0,0,68,11,1,0,0,0,69,73,5,7,0,0,70,72,7,1,0,0,71,
70,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,13,1,0,0,0,75,73,
1,0,0,0,76,77,5,7,0,0,77,79,5,8,0,0,78,80,5,8,0,0,79,78,1,0,0,0,79,80,1,
0,0,0,80,15,1,0,0,0,81,83,5,7,0,0,82,84,5,8,0,0,83,82,1,0,0,0,84,85,1,0,
0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,17,1,0,0,0,87,89,5,8,0,0,88,87,1,0,0,
0,89,90,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,94,1,0,0,0,92,94,5,7,0,0,
93,88,1,0,0,0,93,92,1,0,0,0,94,19,1,0,0,0,6,56,73,79,85,90,93];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class VueloParser extends antlr4.Parser {

    static grammarFileName = "Vuelo.g4";
    static literalNames = [ null, "':'", "'NOW'", "'/'", "'ON_TIME'", "'DELAYED'", 
                            "'CANCELLED'", null, null, "'-'", "' '" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "LETRA", 
                             "DIGITO", "GUION", "ESP" ];
    static ruleNames = [ "vuelo", "codigo_vuelo", "aeropuerto", "hora", 
                         "fecha", "estado", "operador", "asiento", "puerta", 
                         "terminal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = VueloParser.ruleNames;
        this.literalNames = VueloParser.literalNames;
        this.symbolicNames = VueloParser.symbolicNames;
    }



	vuelo() {
	    let localctx = new VueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, VueloParser.RULE_vuelo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.codigo_vuelo();
	        this.state = 21;
	        this.match(VueloParser.ESP);
	        this.state = 22;
	        this.aeropuerto();
	        this.state = 23;
	        this.match(VueloParser.GUION);
	        this.state = 24;
	        this.aeropuerto();
	        this.state = 25;
	        this.match(VueloParser.ESP);
	        this.state = 26;
	        this.hora();
	        this.state = 27;
	        this.match(VueloParser.ESP);
	        this.state = 28;
	        this.fecha();
	        this.state = 29;
	        this.match(VueloParser.ESP);
	        this.state = 30;
	        this.estado();
	        this.state = 31;
	        this.match(VueloParser.ESP);
	        this.state = 32;
	        this.operador();
	        this.state = 33;
	        this.match(VueloParser.ESP);
	        this.state = 34;
	        this.asiento();
	        this.state = 35;
	        this.match(VueloParser.ESP);
	        this.state = 36;
	        this.puerta();
	        this.state = 37;
	        this.match(VueloParser.ESP);
	        this.state = 38;
	        this.terminal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	codigo_vuelo() {
	    let localctx = new Codigo_vueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, VueloParser.RULE_codigo_vuelo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(VueloParser.LETRA);
	        this.state = 41;
	        this.match(VueloParser.LETRA);
	        this.state = 42;
	        this.match(VueloParser.DIGITO);
	        this.state = 43;
	        this.match(VueloParser.DIGITO);
	        this.state = 44;
	        this.match(VueloParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aeropuerto() {
	    let localctx = new AeropuertoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, VueloParser.RULE_aeropuerto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(VueloParser.LETRA);
	        this.state = 47;
	        this.match(VueloParser.LETRA);
	        this.state = 48;
	        this.match(VueloParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hora() {
	    let localctx = new HoraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, VueloParser.RULE_hora);
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(VueloParser.DIGITO);
	            this.state = 51;
	            this.match(VueloParser.DIGITO);
	            this.state = 52;
	            this.match(VueloParser.T__0);
	            this.state = 53;
	            this.match(VueloParser.DIGITO);
	            this.state = 54;
	            this.match(VueloParser.DIGITO);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.match(VueloParser.T__1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fecha() {
	    let localctx = new FechaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, VueloParser.RULE_fecha);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(VueloParser.DIGITO);
	        this.state = 59;
	        this.match(VueloParser.DIGITO);
	        this.state = 60;
	        this.match(VueloParser.T__2);
	        this.state = 61;
	        this.match(VueloParser.DIGITO);
	        this.state = 62;
	        this.match(VueloParser.DIGITO);
	        this.state = 63;
	        this.match(VueloParser.T__2);
	        this.state = 64;
	        this.match(VueloParser.DIGITO);
	        this.state = 65;
	        this.match(VueloParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, VueloParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operador() {
	    let localctx = new OperadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, VueloParser.RULE_operador);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(VueloParser.LETRA);
	        this.state = 73;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 70;
	                _la = this._input.LA(1);
	                if(!(_la===7 || _la===10)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 75;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asiento() {
	    let localctx = new AsientoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, VueloParser.RULE_asiento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(VueloParser.LETRA);
	        this.state = 77;
	        this.match(VueloParser.DIGITO);
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 78;
	            this.match(VueloParser.DIGITO);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	puerta() {
	    let localctx = new PuertaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, VueloParser.RULE_puerta);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(VueloParser.LETRA);
	        this.state = 83; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 82;
	            this.match(VueloParser.DIGITO);
	            this.state = 85; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminal() {
	    let localctx = new TerminalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, VueloParser.RULE_terminal);
	    var _la = 0;
	    try {
	        this.state = 93;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 87;
	                this.match(VueloParser.DIGITO);
	                this.state = 90; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===8);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 92;
	            this.match(VueloParser.LETRA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

VueloParser.EOF = antlr4.Token.EOF;
VueloParser.T__0 = 1;
VueloParser.T__1 = 2;
VueloParser.T__2 = 3;
VueloParser.T__3 = 4;
VueloParser.T__4 = 5;
VueloParser.T__5 = 6;
VueloParser.LETRA = 7;
VueloParser.DIGITO = 8;
VueloParser.GUION = 9;
VueloParser.ESP = 10;

VueloParser.RULE_vuelo = 0;
VueloParser.RULE_codigo_vuelo = 1;
VueloParser.RULE_aeropuerto = 2;
VueloParser.RULE_hora = 3;
VueloParser.RULE_fecha = 4;
VueloParser.RULE_estado = 5;
VueloParser.RULE_operador = 6;
VueloParser.RULE_asiento = 7;
VueloParser.RULE_puerta = 8;
VueloParser.RULE_terminal = 9;

class VueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_vuelo;
    }

	codigo_vuelo() {
	    return this.getTypedRuleContext(Codigo_vueloContext,0);
	};

	ESP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.ESP);
	    } else {
	        return this.getToken(VueloParser.ESP, i);
	    }
	};


	aeropuerto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AeropuertoContext);
	    } else {
	        return this.getTypedRuleContext(AeropuertoContext,i);
	    }
	};

	GUION() {
	    return this.getToken(VueloParser.GUION, 0);
	};

	hora() {
	    return this.getTypedRuleContext(HoraContext,0);
	};

	fecha() {
	    return this.getTypedRuleContext(FechaContext,0);
	};

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	operador() {
	    return this.getTypedRuleContext(OperadorContext,0);
	};

	asiento() {
	    return this.getTypedRuleContext(AsientoContext,0);
	};

	puerta() {
	    return this.getTypedRuleContext(PuertaContext,0);
	};

	terminal() {
	    return this.getTypedRuleContext(TerminalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterVuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitVuelo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VueloVisitor ) {
	        return visitor.visitVuelo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Codigo_vueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_codigo_vuelo;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.LETRA);
	    } else {
	        return this.getToken(VueloParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.DIGITO);
	    } else {
	        return this.getToken(VueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterCodigo_vuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitCodigo_vuelo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VueloVisitor ) {
	        return visitor.visitCodigo_vuelo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AeropuertoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_aeropuerto;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.LETRA);
	    } else {
	        return this.getToken(VueloParser.LETRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterAeropuerto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitAeropuerto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VueloVisitor ) {
	        return visitor.visitAeropuerto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HoraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_hora;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.DIGITO);
	    } else {
	        return this.getToken(VueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterHora(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitHora(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VueloVisitor ) {
	        return visitor.visitHora(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FechaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_fecha;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.DIGITO);
	    } else {
	        return this.getToken(VueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterFecha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitFecha(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VueloVisitor ) {
	        return visitor.visitFecha(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_estado;
    }


	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VueloVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_operador;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.LETRA);
	    } else {
	        return this.getToken(VueloParser.LETRA, i);
	    }
	};


	ESP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.ESP);
	    } else {
	        return this.getToken(VueloParser.ESP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterOperador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitOperador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VueloVisitor ) {
	        return visitor.visitOperador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsientoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_asiento;
    }

	LETRA() {
	    return this.getToken(VueloParser.LETRA, 0);
	};

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.DIGITO);
	    } else {
	        return this.getToken(VueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterAsiento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitAsiento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VueloVisitor ) {
	        return visitor.visitAsiento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PuertaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_puerta;
    }

	LETRA() {
	    return this.getToken(VueloParser.LETRA, 0);
	};

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.DIGITO);
	    } else {
	        return this.getToken(VueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterPuerta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitPuerta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VueloVisitor ) {
	        return visitor.visitPuerta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VueloParser.RULE_terminal;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VueloParser.DIGITO);
	    } else {
	        return this.getToken(VueloParser.DIGITO, i);
	    }
	};


	LETRA() {
	    return this.getToken(VueloParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.enterTerminal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VueloListener ) {
	        listener.exitTerminal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VueloVisitor ) {
	        return visitor.visitTerminal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




VueloParser.VueloContext = VueloContext; 
VueloParser.Codigo_vueloContext = Codigo_vueloContext; 
VueloParser.AeropuertoContext = AeropuertoContext; 
VueloParser.HoraContext = HoraContext; 
VueloParser.FechaContext = FechaContext; 
VueloParser.EstadoContext = EstadoContext; 
VueloParser.OperadorContext = OperadorContext; 
VueloParser.AsientoContext = AsientoContext; 
VueloParser.PuertaContext = PuertaContext; 
VueloParser.TerminalContext = TerminalContext; 
