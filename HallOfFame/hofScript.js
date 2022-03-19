let hyear;
//initial 2021 requested data from mudfoot Server
fetch("http://mudfoot.doc.stu.mmu.ac.uk/node/api/halloffame")
    .then((response) => {
        return response.json();
    })
    .then((obj) => {
        document.getElementById('year').innerHTML = 'Year: ' + obj.year
        let = contentHTML = "";
        for (let a = 0; a < obj.data.length; a++) {
            contentHTML += '<h3> Name: ' + '<a href="' + obj.data[a].band.url + '">' + obj.data[a].band.name + '</a>' + '</h3>'
            contentHTML += '<img src=' + obj.data[a].image.source + ' alt=' + obj.data[a].image.title + 'class="hofimage" />'
            contentHTML += '<td>'
            if (obj.data[a].inducted_members[0] != null) {
                contentHTML += '<br /> <h3>Members: ' + '</h3>'
                for (let i = 0; i < obj.data[a].inducted_members.length; i++) {

                    contentHTML += '<li>' + '<a href="' + obj.data[a].inducted_members[i].url + '">' + obj.data[a].inducted_members[i].name + '</a>' + '</li>'
                }
            }
            contentHTML += '</td>'
            if (obj.data[a].inducted_by.name != null) {
                contentHTML += '<br />Inducted by: ' + '<a href="' + obj.data[a].inducted_by.url + '">' + obj.data[a].inducted_by.name + '</a>'
            }
        }

        document.getElementById('hofMain-outputBody').innerHTML = contentHTML
        console.log(obj.data[1].inducted_members[0].name)



    })
//users ability to request selected year data from mudfoot server
window.onload = () => {
    document.getElementById('hofMain-submit').addEventListener('click', () => {
        hyear = document.getElementById('hofMain-yearInput').value;
        console.log(hyear)
        fetch("http://mudfoot.doc.stu.mmu.ac.uk/node/api/halloffame?year=" + hyear)
            .then((response) => {
                return response.json();
            })
            .then((obj) => {
                document.getElementById('year').innerHTML = 'Year: ' + obj.year
                let = contentHTML = "";
                for (let a = 0; a < obj.data.length; a++) {
                    contentHTML += '<h3> Name: ' + '<a href="' + obj.data[a].band.url + '">' + obj.data[a].band.name + '</a>' + '</h3>'
                    contentHTML += '<img src=' + obj.data[a].image.source + ' alt=' + obj.data[a].image.title + 'class="hofimage" />'
                    contentHTML += '<td>'
                    if (obj.data[a].inducted_members[0] != null) {
                        contentHTML += '<br /> <h3>Members: ' + '</h3>'
                        for (let i = 0; i < obj.data[a].inducted_members.length; i++) {
        
                            contentHTML += '<li>' + '<a href="' + obj.data[a].inducted_members[i].url + '">' + obj.data[a].inducted_members[i].name + '</a>' + '</li>'
                        }
                    }
                    contentHTML += '</td>'
                    if (obj.data[a].inducted_by.name != null) {
                        contentHTML += '<br />Inducted by: ' + '<a href="' + obj.data[a].inducted_by.url + '">' + obj.data[a].inducted_by.name + '</a>'
                    }
                }
                document.getElementById('hofMain-outputBody').innerHTML = contentHTML
            })
    })
}
