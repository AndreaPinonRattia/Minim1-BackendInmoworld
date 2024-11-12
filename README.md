# Mínim 1
La nueva colección aparece en MongoDB como etiquetas, con los parámetros:
- Name: aquí el usuario indica como quiere etiquetar las propiedades, por ejemplo "Casas de montaña"
- Price: aquí el usuario detalla el valor en el que rondan las propiedades de esa etiqueta
- Owner: este se relaciona con un ObjectId a la colección user

El endpoint tiene el CRUD y una listado de la etiqueta de un usuario en específico, funciona perfecto

El nuevo componente es etiquetas, con su respectivo servicio y las llamadas son getall, delete y create.