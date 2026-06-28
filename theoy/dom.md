1.in dom, html file works as a document obj in javascript.
2. console obj method:-
assert()- to assert the condn ; works with no output if true condn , else says assertion fails
clear()-clears console
log()-outputs msg
table()-displays tablular data
warn()-used for warning
error()-used for errors
info()-used for spl infm
alert()-invokes a mini  window with a msg
prompt()-take input as string
confirm()-shows a msg and waits for th user to press ok or cancel(t for ok /false for cancel)
ctrl+l in console to clear the console
Number.parseInt(jisko bh convert krna ho) -> converts str input to interger

Window object is divided in 3 categories:-
1.DOM
2.BOM
3.Js Core

BOM=BROWSER OBJ MODEL
    Repr addn obj provided b the browser for working with everything except document
        Alert,Confirm,Prompt are also a part of BOM
DOM-DOCUMEN OBJ MODEL
    -Repr page content as HTML
    -Dom tree refers to HTML Pg whr all nodes are obj.
        Three main types of node in a dom tree:-
        1.Text Node
        2.Element Node
        3.Comment Node
    document
        <html>

            <head>
            <title></title>
            </head>

            <body>
            //elements,attributes,comments,text
            </body>

        </html>
