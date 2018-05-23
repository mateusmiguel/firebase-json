        // Recebo  o json do servidor
        var request = new XMLHttpRequest();
        var endPoint = 'https://teste-json-3fae4.firebaseio.com/agenda.json';
        request.open('GET', endPoint, true);
        request.onload = function () {
            var data = JSON.parse(request.responseText);
            console.log(data[0].telefone);

            var tr;
            for (var i = 0; i < data.length; i++) {
                tr = $('<tr/>');
                tr.append("<td scope=\"row\">" + i + "</td>");
                tr.append("<td>" + data[i].nome + "</td>");
                tr.append("<td>" + data[i].telefone + "</td>");
                $('table').append(tr);
            }
        }

        request.send();