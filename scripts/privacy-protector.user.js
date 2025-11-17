// ==UserScript==
// @name         Privacy Protector
// @namespace    https://example.local/
// @version      1.0
// @description  Protege datos personales y bloquea formularios de registro
// @author       Privacy Script
// @match        https://*.wikipedia.org/*
// @match        https://*.*/signup*
// @match        https://*.*/register*
// @match        https://*.*/join*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Palabras/datos sensibles a ocultar
    const SENSITIVE_PATTERNS = [
        /[0-9]{3}-[0-9]{2}-[0-9]{4}/,  // SSN format
        /[0-9]{16}/,                    // Credit card numbers
        /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,  // Email
        /(?:19|20)\d{2}[-/]\d{1,2}[-/]\d{1,2}/,  // Dates
        /rafaelilover1000-ctrl/         // Username mention
    ];

    // Elementos a bloquear/deshabilitar
    const BLOCK_SELECTORS = [
        'form[action*="register"]',
        'form[action*="signup"]',
        'form[action*="join"]',
        'input[type="submit"][value*="Register"]',
        'button[type="submit"]',
        '.registration-form',
        '.signup-form'
    ];

    function hideElement(el) {
        el.style.display = 'none';
    }

    function disableElement(el) {
        el.disabled = true;
        el.style.opacity = '0.5';
        el.title = 'Deshabilitado por protección de privacidad';
    }

    // Ocultar/reemplazar datos sensibles en el texto
    function processSensitiveData(node) {
        if (node.nodeType === 3) { // Text node
            let content = node.textContent;
            let modified = false;
            
            SENSITIVE_PATTERNS.forEach(pattern => {
                if (pattern.test(content)) {
                    content = content.replace(pattern, '[PROTEGIDO]');
                    modified = true;
                }
            });

            if (modified) {
                node.textContent = content;
            }
        }
    }

    // Bloquear elementos de registro/inscripción
    function blockRegistrationElements() {
        BLOCK_SELECTORS.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                if (el.tagName.toLowerCase() === 'form') {
                    hideElement(el);
                } else {
                    disableElement(el);
                }
            });
        });
    }

    // Procesar nodo y sus hijos
    function processNode(node) {
        if (node.nodeType === 3) { // Text node
            processSensitiveData(node);
        } else if (node.nodeType === 1) { // Element node
            Array.from(node.childNodes).forEach(processNode);
        }
    }

    // Observer para cambios dinámicos
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                processNode(node);
            });
        });
        blockRegistrationElements();
    });

    // Inicialización
    processNode(document.body);
    blockRegistrationElements();

    // Observar cambios
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Bloquear formularios dinámicamente
    document.addEventListener('submit', function(e) {
        const form = e.target;
        if (BLOCK_SELECTORS.some(selector => form.matches(selector))) {
            e.preventDefault();
            console.log('Formulario bloqueado por protección de privacidad');
        }
    }, true);

    // Prevenir autocompletado
    document.querySelectorAll('input').forEach(input => {
        input.autocomplete = 'off';
    });

})();
