const form = document.querySelector('#contact-form')

form.addEventListener('submit', async(e)=>{
    e.preventDefault()

    const target = e.target,
       name = target.querySelector('#nombre').value,
       telefono = target.querySelector('#telefono').value, 
       from = target.querySelector('#email').value,
       subject = target.querySelector('#asunto').value,
       message = target.querySelector('#mensaje').value

    const response = await fetch('https://server-mail.onrender.com/api/mail', {
        method: 'POST',
        body: JSON.stringify({
            name,
            from,
            subject,
            message
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }),
    data = await response.json()

    if (response.status === 200) {
        alert(data.message)
        form.reset()
    } else {
        alert(data.message)
    }

})