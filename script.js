document.getElementById('goBtn').addEventListener('click', function() {
    const url = document.getElementById('url').value;
    const loading = document.getElementById('loading');
    const iframe = document.getElementById('content');
    
    if (!url) return;
    
    loading.classList.remove('hidden');
    
    // Encoder l'URL en base64 pour contourner les filtres simples
    const encodedUrl = btoa(url);
    
    // Utiliser un service de décodage côté client
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(`
        <script>
            const encodedUrl = "${encodedUrl}";
            const url = atob(encodedUrl);
            window.location.href = url;
        </script>
    `);
    
    iframe.onload = function() {
        loading.classList.add('hidden');
    };
    
    iframe.onerror = function() {
        loading.classList.add('hidden');
        alert('Erreur de chargement. Vérifiez l\'URL et réessayez.');
    };
});