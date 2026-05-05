document.getElementById('goBtn').addEventListener('click', function() {
    const url = document.getElementById('url').value;
    const loading = document.getElementById('loading');
    const iframe = document.getElementById('content');
    
    if (!url) return;
    
    loading.classList.remove('hidden');
    
    // Essayer plusieurs services de proxy
    const proxyServices = [
        'https://corsproxy.io/?',
        'https://api.allorigins.win/raw?url=',
        'https://thingproxy.freeboard.io/fetch/'
    ];
    
    // Essayer le premier service, tu peux changer d'index si celui-ci ne fonctionne pas
    const proxyUrl = proxyServices[0];
    
    iframe.src = proxyUrl + encodeURIComponent(url);
    
    iframe.onload = function() {
        loading.classList.add('hidden');
    };
    
    iframe.onerror = function() {
        loading.classList.add('hidden');
        alert('Erreur de chargement. Vérifiez l\'URL et réessayez.');
    };
});