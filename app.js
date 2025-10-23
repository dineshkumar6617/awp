const http = require('http');
const stu = require('./students.json');
const url = require('url');
const fs = require('fs');
const { stringify } = require('querystring');
const port = 3001;

const server = http.createServer((req, res) => {
    res.setHeader("content-type", "text/html");

    if (req.method == "GET" && req.url == "/") {
        res.write("<h1>Welcome to server</h1>");
        res.end();
    }

    if (req.method == "GET" && req.url == "/list1") {
        fs.readFile("students.json", function (err, data) {   // corrected filename
            if (err) {
                res.write("Error reading file");
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    }

    if (req.method == "POST") {   // changed from PUT to POST for insert
        newstu = url.parse(req.url, true).query;
        stu.push(newstu);
        mywrite(stu);
        res.write("<h1>The file is inserted</h1>");
        res.end();
    }

    if (req.method == "PUT") {
    upstu = url.parse(req.url, true).query;
    let found = false;

    for (s in stu) {
        if (stu[s]['roll'] == upstu['roll']) {
            stu[s]['name'] = upstu['name'];
            found = true;
            mywrite(stu);
            res.write("updated");
            res.end();
            break;
        }
    }

    if (!found) {
        res.write("student not found");
        res.end();
    }
}

    if (req.method == 'DELETE') {
        delstu = url.parse(req.url, true).query;  // corrected req.rl → req.url
        for (s in stu) {
            if (stu[s]['roll'] == delstu['roll']) {
                stu.splice(s, 1);
                mywrite(stu);
                res.write("deleted");
                res.end();
            }
        }
    }

    function mywrite(data) {
        fs.writeFile("students.json", JSON.stringify(data), function (err) {
            if (err) console.log(err);
        });
    }

});

server.listen(port, function () {
    console.log("server started...");
    console.log("server is listening on " + port);
});