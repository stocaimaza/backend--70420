//Integramos MercadoPago del lado del cliente

const mp = new MercadoPago("APP_USR-ee6a8b36-0967-4f88-85c1-f2565701e1e5", {
    locale: "es-AR"
});

document.getElementById("checkout-btn").addEventListener("click", async () => {
    try {
        //Paso los datos del producto: 

        const orderData = {
            title: "Patito", 
            quantity: 1, 
            price: 100
        }; 

        const response = await fetch("http://localhost:8080/create-preference", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            }, 
            body: JSON.stringify(orderData)
        })

        const preference = await response.json(); 
        createCheckoutButton(preference.id); 

    } catch (error) {
        alert("Error fatal, te vas a engripar este fin de semana y el lunes ya vas a estar bien"); 
    }
})

const createCheckoutButton= (preferenceId) => {
    const bricksBuilder = mp.bricks(); 

    //Correccion para evitar que se dupliquen los botones: 
    if(window.checkoutButton) window.checkoutButton.unmount(); 
    // si ya existe un boton, desmontalo. 

    const renderComponent = async () => {
        await bricksBuilder.create("wallet", "wallet-container", {
            initialization: {
                preferenceId: preferenceId
            }
        })
    }
    renderComponent(); 
}