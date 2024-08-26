# Encriptador de Texto

Este proyecto es una aplicación web simple que permite encriptar y desencriptar texto usando un conjunto específico de reglas de transformación de caracteres. La aplicación también permite copiar el resultado encriptado/desencriptado al portapapeles y limpiar el campo de entrada.

## Funcionalidades

- **Encriptar Texto**: Transforma las vocales del texto ingresado en palabras clave según las siguientes reglas:

  - La letra "e" se convierte en "enter".
  - La letra "i" se convierte en "imes".
  - La letra "a" se convierte en "ai".
  - La letra "o" se convierte en "ober".
  - La letra "u" se convierte en "ufat".

- **Desencriptar Texto**: Revierte el proceso de encriptación devolviendo el texto a su estado original.

- **Copiar Texto**: Copia el texto encriptado o desencriptado al portapapeles.

- **Limpiar**: Limpia los campos de texto de entrada y salida.

## Tecnologías Utilizadas

- **HTML**: Para la estructura básica de la aplicación.
- **CSS**: Para el diseño visual de la aplicación.
- **JavaScript**: Para la funcionalidad de encriptación, desencriptación y manejo de eventos.

## Estructura de Archivos

- `index.html`: Contiene la estructura HTML de la aplicación.
- `assets/css/styles.css`: Archivo CSS para la personalización del diseño de la aplicación.
- `assets/js/main.js`: Archivo JavaScript que gestiona la lógica de encriptación, desencriptación y eventos de la aplicación.

## Cómo Usar

1. **Ingresar Texto**: Escribe el texto que deseas encriptar o desencriptar en el área de texto de entrada.

2. **Encriptar/Desencriptar**: Haz clic en el botón correspondiente ("Encriptar" o "Desencriptar") para procesar el texto.

3. **Copiar**: Una vez encriptado o desencriptado el texto, puedes copiar el resultado haciendo clic en el botón "Copiar".

4. **Limpiar**: Puedes limpiar el campo de texto de entrada y el resultado haciendo clic en el botón "Limpiar".

## Requisitos

Este proyecto no requiere instalación de dependencias adicionales. Solo necesitas un navegador web moderno para ejecutarlo.

## Ejecución del Proyecto

1. Clona o descarga este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.

## Personalización

Puedes modificar las reglas de encriptación/desencriptación en el archivo `main.js` para adaptarlas a tus necesidades.
