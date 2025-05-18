# Analizador de vuelos-Legajo:52160- Yanzon Santiago #
El proyecto parte de una gramática EBNF con la cual debíamos construir un analizador, por medio de la herramienta ANTLR, capaz de realizar un análisis léxico y sintáctico de la gramática, generar un árbol sintáctico y realizar la traducción al código fuente JavaScript

Durante la conversión de la gramática me percate de que la que se me asigno tenía algunas partes, como “asiento”, a las que era imposible acceder desde la start rule; Por lo que me tome la libertad de modificar un poco esta regla para que así se pudieran alcanzar todas las reglas posibles. Otro problema que tuve durante la escritura de la gramática en ANTLR fue que no me reconocía como validos los espacios en el input, a pesar de utilizar la regla de skip automático de estos, al momento de ejecutar el proyecto me consideraba error la existencia de un espacio, pero no la de dos espacios, entonces, para que fuese más cómodo escribir el input realice los espacios de manera manual con **ESP: ' ';**

Para la realización del índex y CostumeVisitor utilice la ayuda del chat GPT para ayudarme a escribir el código y la conversión correcta a JavaScript

# Estructura #

* **Vuelo.g4**: en él se encuentra la gramática convertida en formato ANTLR.
  
* **generated**: se encuentran los archivos generados automáticamente por ANTLR
  
* **index.js**: Además de tener las cosas necesarias para arrancar la ejecución del programa, tiene algunos agregados para mostrar el árbol generado de manera gráfica y escrita, mostrar los tokens de manera escrita, aplicar el Costumevisitor y realizar la interpretación en JavaScript
  
* **Entradas** : se encuentra el input inicial que use para probar el funcionamiento de la gramática y ejemplos de inputs correctos e incorrectos

# Instrucciones para correr el proyecto #

1. ## Clonar el repositorio ##

Hay varias formas para hacero. 
* Descargar los archivos directamente desde Github
  
* Abrir visual studio code, y usar la opcion de clone git repository

   Al usar esta opcion debemos colocar esto en la direccion que nos solicita VisualStudio https://github.com/santyanz23/52160.git

* Clonar el repositorio desde Cmd, PowerShell, o terminal en Linux
  se debe colocar: 
    1. git clone https://github.com/santyanz23/52160.git
    2. cd 52160
    3. code .

2. ## Escribir input ##
   
Para escribir los inputs hay que tener en cuenta que se deben utilizar letras en mayúsculas, entre palabra y palabra debe haber un solo espacio, utilizar en el lugar correcto los signos especiales “-“, “/”,  “:” que correspondan  

Las fechas siguen el formato DD/MM/AA Y. La hora utiliza el sistema de 24h desde las 00:00 hasta las 23:59 siguiendo el formato NN:NN

El proyecto ya tiene un input, pero se puede modificar y utilizar alguno de los inputs que se encuentran en Entradas, o escribir un input propio
![image](https://github.com/user-attachments/assets/080bf351-986d-4293-8189-e7a5ed18335f)


3. ## Generar Archivos del parecer y leer ##

 Para compilar el programa usamos **F5**,  nos mostrara el árbol de forma gráficamente y los token y árbol de manera escrita en Debug Console

![image](https://github.com/user-attachments/assets/2ed40465-dffc-4108-bef6-dbd0ab31589b)     ![image](https://github.com/user-attachments/assets/cdd430f2-3993-4b03-9db4-a00a85dec7ac)

 
   
4. ## Interpretación en JavaScript ##

Para realizar la interpretación en JavaScript en el termina ponemos el comando **node index.js** y ahí mismo nos mostrara la interpretación

![image](https://github.com/user-attachments/assets/7aecd0b2-1fd5-4388-9961-27b139efa909)

