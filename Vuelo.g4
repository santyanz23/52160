grammar Vuelo;

// Reglas principales
vuelo:
	codigo_vuelo ESP aeropuerto GUION aeropuerto ESP hora ESP fecha ESP estado ESP operador ESP
		asiento ESP puerta ESP terminal;
// Subreglas
codigo_vuelo: LETRA LETRA DIGITO DIGITO DIGITO;

aeropuerto: LETRA LETRA LETRA;

hora: DIGITO DIGITO ':' DIGITO DIGITO | 'NOW';

fecha: DIGITO DIGITO '/' DIGITO DIGITO '/' DIGITO DIGITO;

estado: 'ON_TIME' | 'DELAYED' | 'CANCELLED';

operador: LETRA (LETRA | ' ')*;

asiento: LETRA DIGITO (DIGITO)?;

puerta: LETRA DIGITO+;

terminal: DIGITO+ | LETRA;

// Tokens
LETRA: [A-Z];
DIGITO: [0-9];
GUION: '-';
ESP: ' ';