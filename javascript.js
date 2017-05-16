<html>
    <head>
        <script type="text/javascript">
            function showPrompt()
            {
                var answer=prompt("Identification, please enter your GPA");
                if (answer! < 10)
                {
                    alert("This is a bad GPA !");

                } else {
                    alert("Your GPA is quite good !")
                }
            }
        </script>
    </head>
    <body>
        <input type="button" onclick="showPrompt()" value="Please, enter your GPA" />
    </body>
</html>