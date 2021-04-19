// Show line numbers on code blocks longer than two lines.
// Runs synchronously inside casper.js, before Prism highlights on DOMContentLoaded.
document.querySelectorAll('pre code').forEach(function (code) {
    if (code.textContent.split('\n').length > 2) {
        code.closest('pre').classList.add('line-numbers');
    }
});
