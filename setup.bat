@echo off

:: Criação de pastas
mkdir src\components
mkdir src\pages
mkdir src\styles

:: Criação de arquivos .js
type nul > src\components\Header.js
type nul > src\components\Footer.js
type nul > src\components\ServiceCard.js

type nul > src\pages\Home.js
type nul > src\pages\About.js
type nul > src\pages\Services.js
type nul > src\pages\Contact.js

type nul > src\styles\GlobalStyle.js

type nul > src\App.js
type nul > src\index.js

echo Estrutura de pastas e arquivos criada com sucesso!

:: Adicionando conteúdo básico aos arquivos
echo import React from 'react'; > src\components\Header.js
echo import React from 'react'; > src\components\Footer.js
echo import React from 'react'; > src\components\ServiceCard.js

echo import React from 'react'; > src\pages\Home.js
echo import React from 'react'; > src\pages\About.js
echo import React from 'react'; > src\pages\Services.js
echo import React from 'react'; > src\pages\Contact.js

echo import { createGlobalStyle } from 'styled-components'; > src\styles\GlobalStyle.js

echo import React from 'react'; import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; > src\App.js
echo import React from 'react'; import ReactDOM from 'react-dom/client'; import App from './App'; > src\index.js

echo Conteúdo básico inserido nos arquivos.
pause
