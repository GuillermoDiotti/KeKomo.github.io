
# Informe entrega 1

## Repositorio Git

### Creación y uso de repositorios locales y remotos

A partir del repositorio remoto creado, cada integrante creó un repositorio local en su dispositivo, teniendo cada uno de estos los archivos del proyecto a mano. Cada vez que se realizaba un cambio, luego de capturarlo en el repositorio local, se lo pusheaba al repositorio remoto, debiendo el otro integrante a actualizar su repositorio local con los nuevos cambios. Lo mismo ocurría viceversamente.

### Comandos Git ejecutados desde terminal y desde IDE

Utilizamos los siguientes comandos:
- git clone
- git add
- git commit -m ""
- git pull
- git push
- git log
- git status
- git branch
- git checkout
- git merge

##  Versionado

### Aplicar buenas prácticas de versionado

A lo largo del proyecto, dimos uso de buenas prácticas del versionado. Un ejemplo de estas son;
- Se utilizaron nombres claros y concisos para cada commit, indicando cada cambio realizado.
- Se creó una rama develop, en donde se guardaba cada cambio. Al verificar que haya quedado todo bien, se vinvulaba esta rama con la rama main.

### Uso de ramas separadas de 'main'

Como ya se mencionó, utilizamos una rama develop. Al añadir los cambios realizados del working directory a la staging area, se hacia un commit en principio a la rama develop, luego de verificar, se la vinculaba a la main.

### Resumen de commits y evolución del proyecto

A través del siguiente enlace se puede visualizar, en forma sintetizada, un breve resúmen de la evolución del proyecto
[Evolución](../historial-evoluci%C3%B3n/commits.md)

## Elicitación

### Evidencia de actividades de investigación

#### Entrevistas

Entrevista a Auxiliar de Servicio de Colegio San Juan Bautista.
Se entrevistó a una Auxiliar de Servicio del mencionado instituto educativo. De manera presencial.
Se fue con la idea de obtener de la misma, la estructura y manejo del comedor escolar, para asi poder analizar mejores soluciones y poder llevar dicho procedimiento a un area digital mediante una aplicación.

[Entrevista](../elicitacion/entrevistas/entrevista1.md)

#### Cuestionarios

[Encuesta](../elicitacion/encuestas/encuestas.md)

Encuesta realizada a alumnos y responsables de estos. Las encuestas se realizaron de forma virtual. 
El objetivo de las encuestas fue aprender y entender como ambas partes hacían uso, en el caso de existir, de una aplicación de este tipo, y sobre la opinión sobre el responsable del objetivo del proyecto.

#### Ingenieria_Inversa

Otra técnica de elicitación que utilizamos en este proyecto fue la de ingeniería inversa. Investigando, encontramos una aplicación perteneciente al rubro del problema. La información acerca de dicha aplicación se encuentra en el siguiente archivo; 

[Ing. Inversa](../elicitacion/ingenieria%20inversa/menutech.md)

#### User Personas

Perfil/ Características: Ana, madre de 2 niños en Primaria
                         Niños de 8 y 10 años
                         Ella tiene 43 años, es abogada
Contexto: No le gusta cocinar
          Le importa la nutrición
          Usa ig/ wpp pero solo lo mínimo, lo básico
          No tiene computadora
          No usa otras apps de redes sociales
Objetivos o expectativas: espero que mis hijos tengan una mejor nutrición y poder monitorear lo que consumen día a día


Perfil/ Características: Enrique, padre de 1 niño en Primaria
                         Niño tiene 7 años
                         El tiene 37 años, es albañil
Contexto: No le gusta cocinar
          No le importa la nutrición
          Usa algunas redes sociales como wpp/ ig/ twitter
          Tiene computadora
Objetivos o expectativas: espero tener un registro detallado del consumo de mi hijo


Perfil/ Características: Pablo, no tiene hijos
                         El tiene 25 años
                         Trabaja en la cocina del comedor del colegio
Contexto: Forma parte del equipo administrativo de la cocina
          Domina todas las redes sociales
          Tiene computadora
Objetivos o expectativas: espero que el sistema nos oriente a gastar menos


### Referencias a fuentes de información

Como principal fuente de información, utilizamos la documentación de archivos Markdown. La misma se puede encontrar a través del siguiente enlace;
[**DOCUMENTACIÓN**](https://github.github.com) 

Otra gran fuente de información utilizada fue la página web de la aplicación similar encontrada "MENUTECH". Dicha aplicación se puede encontrar a través del siguiente enlace: 
[**MENUTECH**](https://app.menutech.com) 

### Caracterización de usuarios: User Personas

El link siguiente dirige a la caracterización de usuarios realizada.
[User Personas](../elicitacion/user%20Personas/userPersonas.md)

### Modelo Conceptual del problema
Para modelar el problema, utilizamos un modelo entidad relación, y un glosario

#### MER:
![MER](../imagenes/MER.png)

#### Glosario:

- Dias de la semana: Consideramos que los días de la semana se consideran de Lunes a Viernes para ver que Menú hay en estos días.

- Usuarios: Consideramos que los usuarios son los responsables de los alumnos siendo Padre/ Madre/ Tutor.

- Gerente de cocina: Es rol dentro de la cocina del comedor encargada de la parte de ventas.

- Reservas: Para que un alumno pueda comer del comedor, este debe reservar un lugar por sus responsables.

- Auxiliar de Servicio/Cocinero: Personas que son responsables de cocinar las comidas para los alumnos.

- Maestro: Persona al mando de formar académicamente a sus alumnos.

- Comensal: Persona que consume sus órdenes en el comedor.

## Especificación

### Definición de requerimientos funcionales y no funcionales

#### Requerimientos Funcionales
    
##### RF#1:
- *Titulo:* Iniciar Sesión
- *Descripción:* El usuario debe iniciar sesión al sistema con su cédula
- *Prioridad:* Media

##### RF#2:
- *Titulo:* Informar menú
- *Descripción:* El colegio debe informar acerca del menú mensual a fin de cada mes
- *Prioridad:* Alta

##### RF#3:
- *Titulo:* Plataforma para pagar
- *Descripción:* El usuario puede optar por pagar el menú desde la aplicación o por ejemplo, incluirlo a la cuota del colegio
- *Prioridad:* Alta

##### RF#4:
- *Titulo:* Momento para pagar
- *Descripción:* El usuario puede optar por pagar el menú desde el mismo día realizado el consumo, hasta el día anterior transcurrido el mes
- *Prioridad:* Alta

##### RF#5:
- *Titulo:* Tarjetas para pagar
- *Descripción:* El sistema debe aceptar tarjetas de crédito o débito como medio de pago
- *Prioridad:* Alta

##### RF#6:
- *Titulo:* Generar factura
- *Descripción:* El sistema debe generar una factura en el mismo día realizado el consumo, indicando dicho consumo del alumno
- *Prioridad:* Alta

##### RF#7:
- *Titulo:* Gestionar reserva
- *Descripción:* El usuario puede gestionar la reserva del menú para cualquier día dentro del mes, eligiendo que alimentos del menú desea reservar
- *Prioridad:* Alta

##### RF#8:
- *Titulo:* Contactar institución
- *Descripción:* El usuario puede contactarse con el colegio, en caso de, por ejemplo, algún inconveniente
- *Prioridad:* Alta

##### RF#9:
- *Titulo:* Información nutricional
- *Descripción:* El usuario puede, si desea, ver la información nutricional de los alimentos del menú
- *Prioridad:* Alta

#### Requerimientos no funcionales

##### RNF#1:
- El sistema debe soportar 500 personas realizando una reserva en forma simultánea sin una degradación del tiempo de respuesta mayor a 5 segundos.

##### RNF#2:
- La interfaz de usuario de la aplicación será HTML5 y Javascript.

##### RNF#3:
- Los usuarios tendrán disponibles aplicaciones móviles compatibles con IOS 13 o superior y con Android 8 Oreo o superior.

##### RNF#4:
- Las aplicaciones de usuarios deben cumplir con las condiciones para ser publicables en Apple Store y Google Play Store.

##### RNF#5:
- La aplicación no debe pesar más de 500 mb.

##### RNF#6:
- La aplicación debe ser responsiva.

##### RNF#7:
- La aplicación se puede usar por la web, como también por descarga.

### User Stories / Use Cases detallados

En los siguientes archivos se puede encontrar detallados los UseCases y UserStories
[User Stories](../elicitacion//user-stories/userStories.md)
[Use Cases](../elicitacion///use-cases/useCases.md)

### Bocetos de IU

Los siguientes bocetos son meramente ilustrativos y describen la funcionalidad de la pagina. 
Los diseños pueden cambiar en el resultado final del proyecto.

La pagina principal sería la siguiente:
![Main](../bocetos/boceto1.0.jpg)

Los siguientes bocetos están destinados para el usuario:
![Inicio](../bocetos/boceto1.1.png)
![Perfil](../bocetos/boceto1.2.png)
![Opciones del menu](../bocetos/boceto1.3.png)
![Gestionar el menu](../bocetos/boceto1.4.png)
![Estado de cuenta](../bocetos/boceto1.5.png)
![Contactar institucion](../bocetos/boceto1.6.png)

Los siguientes bocetos están destinados para empleados del comedor:
![TareasPendientes](../bocetos/boceto2.1.png)
![TareasCompletadas](../bocetos/boceto2.2.png)

## Validación y verificación

### Verificar la especificación

#### Checklist requerimientos

Para verificar si todos los siguientes atributos fueron aplicados a los requerimientos establecidos, fuimos verificando requerimiento por requerimiento con cada atributo.   

##### Completitud

- ¿Se encuentran todos los requerimientos correctamente priorizados? Sí
- ¿Son todas las clases de usuarios identificados y sus características descriptas? Sí
- ¿Respeta la especificación la estructura y apartados del estándar? Sí
- ¿Se identifican y describen las dependencias con otros sitemas? Sí
- ¿Están todas las características de calidad tenidas en cuenta en la especificación? Sí

##### Verificabilidad y no ambiguedad

- ¿Tiene cada requerimiento una única interpretación? Sí
- ¿Puede der cada requerimiento verificado por alguna prueba, demostración, revisión o análisis? Sí

##### Correctitud y consistencia

- ¿Están los requerimentos escritos en forma consistente y a un nivel de detalle adecuado? Sí
- ¿Existe duplicación de requerimientos o conflicto entre requerimientos? No
- ¿Está cada requerimiento dentro del alcance del problema a resolver? Sí
- ¿Evitan los requerimientos incluir aspectos de diseño o implementación de la solución? Sí

##### Trazabilidad

- ¿Puede cada requerimiento ser identificado correctamente y en forma única? Sí
- ¿Se referencian correctamente los requerimientos entre sí? Sí
- ¿Puede cada requerimiento ser referenciado hasta su origen (alguna necesidad de los stakeholders)? Sí


#### Checklist casos de uso

Para verificar si todos los siguientes atributos fueron aplicados a los casos de uso establecidos, fuimos verificando caso por caso con cada atributo. 

- ¿Cumple el caso de uso un único objetivo o tarea? Sí
- ¿Es su objetivo un resultado medible para el usuario? Sí
- ¿Queda claro de actor(es) participan y benefician el caso de uso? Sí
- ¿Existe una secuencia lógica en los pasos que permita entender la transacción entre actor y sistema? Sí
- ¿Es el nivel de abstracción de las transacciones adecuado para el caso de uso? Sí
- ¿Está el caso de uso libre de detalles de diseño e implementación de posibles soluciones? Sí
- ¿Se documentan todos los posibles cursos alternativos y excepcionales? Sí
- ¿Existen pre y pos condiciones que contextualicen correctamente el caso de uso? No


### Validar la solución con personas no involucradas en el proyecto

En este apartado, una de las personas por la cual nos decantamos por contrastar nuestro resultado final fue Cristy Bertinat, Auxiliar de Servicio de Colegio San Juan Bautista de Colonia del Sacramento, a quién entrevistamos anteriormente. La razón principalmente fue porque ella sabe lo que es estar del lado de los dos usuarios definidos en nuestro proyecto, pues se desempeña como Auxiliar de Servicio (preparando las comidas para los estudiantes), y al mismo tiempo tiene un hijo concurriendo a dicho colegio.
Comentado todo el avance que tuvo el proyecto, se procedió a mostrarle los bocetos realizados, para emular asi la experiencia de usuario que tendria por las diferentes partes de la app. En primer lugar, probo la interfaz de "responsable", comentando que bajo su punto de vista, era bastante intuitiva y permitía hacer todo lo que a ella le gustaría poder realizar con las reservas de comida diarias de su hijo.
Llegando al apartado de los bocetos correspondiente al usuario "cocinero", menciona que le parece una buena idea el hecho de que aparezcan todas las reservas y que al irlas completando se vayan hacia otra sección. Sin embargo, informó que ellos suelen preparar las reservas de a minimo 2 personas, es decir, que hay siempre mas de una persona designada a preparar los platos, por lo que cree que se debería implementar algo que avise que una determinada reserva se encuentra en progreso para que la misma no sea realizada por error mas de 1 vez.
Finalmente, aclaró que esta interfaz también le pareció bastante creativa y especialmente útil para las labores del día a día en su sector.

## Reflexión

### Detalle del trabajo individual

[Trabajo Individual Juan Peyrot](../reflexiones/Reflexion-Peyrot.md)

[Trabajo Individual Guillermo Diotti](../reflexiones/Reflexion-Diotti.md)

### Técnicas aplicadas y aprendizajes

En cuanto a las tecnicas aplicadas y aprendizajes se refiere, nos pusimos de acuerdo rapidamente en realizar un formato de commits, que describa brevemente los cambios realizados y en que parte del proyecto se efectuaron. Ademas, la comunicacion en el equipo fue fomentada desde el inicio, con el fin de saber en que cosa estaba trabajando el otro constantemente, dando muy buenos resultados, pues no hubo ningun conflicto a la hora de subir los cambios al repositorio remoto.
Trabajamos cada uno con una copia del repositorio remoto de manera local, efectuando los cambios en una rama separada de la principal (en nuestro caso, llamada develop), y luego de pusheados, comentando al compañero de los cambios realizados.
En cuanto a una actividad que no nos resultó sencilla, fue la parte de elicitación, concretamente la perte de entrevista. Nos resultó difícil ponernos en contacto con alguna persona perteneciente al rubro de comedor escolar.

#### Técnicas utilizadas:
- User personas
- Encuestas
- Entrevistas
- Use cases
- Ingenieria inversa
- Aplicación de UI 
- Verificación y Validación del proyecto
- Técnicas de versionado 
- User personas
- Requerimientos funcionales y no funcionales
- Modelo conceptual
- User stories
