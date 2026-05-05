document.getElementById('goBtn').addEventListener('click', function() {
    const url = document.getElementById('url').value;
    const loading = document.getElementById('loading');
    const iframe = document.getElementById('content');
    
    if (!url) return;
    
    loading.classList.remove('hidden');
    
    // Utiliser un service de proxy public
    // Note : Ces services peuvent changer ou devenir indisponibles
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    
    iframe.src = proxyUrl + url;
    
    iframe.onload = function() {
        loading.classList.add('hidden');
    };
    
    iframe.onerror = function() {
        loading.classList.add('hidden');
        alert('Erreur de chargement. Vérifiez l\'URL et réessayez.');
    };
});

// Permettre l'appui sur la touche Entrée
document.getElementById('url').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('goBtn').click();
    }
});