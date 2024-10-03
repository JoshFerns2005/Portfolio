function displayPortfolio() {
    const terminal = document.getElementById('terminal');
    const mainContent = document.getElementById('mainContent');
    terminal.classList.add('opacity-0');
    mainContent.classList.remove('hidden');
    mainContent.classList.add('fade-in');
    setTimeout(() => {
      terminal.style.display = 'none';
    }, 1000);
  }
  
  document.getElementById('commandLine').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const command = e.target.value.trim();
      if (command === 'display portfolio();') {
        displayPortfolio();
        document.getElementById('errorMessage').classList.add('hidden');
      } else {
        document.getElementById('errorMessage').textContent = 'Invalid command. Please try again.';
        document.getElementById('errorMessage').classList.remove('hidden');
      }
    }
  });
  