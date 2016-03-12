//El usuario ingresa n en pantalla, se debe dibujar un cuadradro hueco de largo n.//
var contador = 0;
var contador2 = 0;

var n = parseInt(prompt("Ingrese el tamaño del cuadradro"))
    while (contador2 < lado+1){
          contador = 1;
       	while (contador < lado+1){
            if (contador2 == 1)
                printf("* ");
                if (contador2 != 1)
                   if (contador2 != lado){
                      if (contador == 1)
                         printf("* ");
                      else
                          if (contador < lado)
                             printf("  ");
                          else
                              printf("* ");
                              }
                   else 
                        printf("* ");
                          
                contador++;
                
          }
          printf(" \n");
          contador2++;
    }
    printf(" \n");
    system("PAUSE");
