//HTML OUTLINE TEMPLATE

const generatePage = ("") => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
</head>

<body>
    <header>
        <h1>Team Profile Generator</h1>
    </header>
    <main>
        <!--employee container card-->
          <div class="container col-md-9">
            <div id="employee-card">
            <h2 id="name" class="employee-details"></h2>
            <h3 id="role" class="employee-details"></h3>
            <ul>
                <li id="id" class="employee-details"></li>
                <li id="email" class="employee-details"></li>
                <li id="office" class="employee-details"></li>
            </ul>
            </div>
        </div>
        
    </main>
    <footer></footer>
</body>
</html>
`;
};
