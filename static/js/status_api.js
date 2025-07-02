window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/status/status.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        const statusBar = document.getElementById('status_bar');
        if (statusBar) {
            if (data.message && data.message.trim() !== '') {
                statusBar.textContent = data.message;
                statusBar.style.display = '';
            } else {
                statusBar.remove();
            }
        }
    } catch (error) {
        console.error('Failed to fetch status:', error);
        const statusBar = document.getElementById('status_bar');
        if (statusBar) {
            statusBar.remove();
        }
    }
});