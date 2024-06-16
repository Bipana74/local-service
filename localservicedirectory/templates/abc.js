document.addEventListener("DOMContentLoaded", function() {
    const serviceForm = document.getElementById('serviceForm');
    const serviceList = document.getElementById('serviceList');

    serviceForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const service = document.getElementById('service').value;
        const contact = document.getElementById('contact').value;
        
        addServiceProvider(name, service, contact);
        
        serviceForm.reset();
    });

    function addServiceProvider(name, service, contact) {
        const serviceProvider = document.createElement('div');
        serviceProvider.classList.add('list-group-item');

        const providerDetails = `
            <h5>${name}</h5>
            <p>Service: ${service}</p>
            <p>Contact: ${contact}</p>
        `;

        serviceProvider.innerHTML = providerDetails;
        serviceList.appendChild(serviceProvider);
    }
});
