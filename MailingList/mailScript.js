window.onload = () => {

    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault()
        // Validation-Checks
        const fname = document.getElementById('fname').value
        const email = document.getElementById('email').value
        re_name = /[a-zA-Z_\s\-\.]{5,32}/
        re_email = /([a-zA-Z_\d\.\-]+)@([a-zA-Z_\.\-]+)\.[a-zA-Z]{2,5}/
        if (!re_name.test(fname) || !re_email.test(email)) {
            alert('Oops try again!')
            location.reload()
        }
        const data = {
            "name": fname,
            "email": email
        }
        // Send&Recieve-Data
        fetch("https://mudfoot.doc.stu.mmu.ac.uk/node/api/mailinglist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => {
                if (res.status === 200) return res.json()
                else if (res.status === 400) throw 'Oop try again!'
                else throw res.statusText
            })
            .then(obj => {
                document.getElementById('userAdded').innerHTML = obj.data.name + ' has been added'
            })
            .catch(err => {
                document.getElementById('userAdded').innerHTML = err
            })
    })
}





