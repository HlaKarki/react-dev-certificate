# Sequence diagram of "exampleapp"


![mermaid-diagram-2023-04-13-234136](https://user-images.githubusercontent.com/72935373/231963625-7ba53c28-ca4e-4c6e-a9a4-ea88a217a61a.svg)





### Mermaid code
```

sequenceDiagram
Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate Server
Server-->>Browser: HTML document
deactivate Server

Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate Server
Server-->>Browser: the CSS file
deactivate Server

Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate Server
Server-->>Browser: the JavaScript file
deactivate Server
Note right of Browser: "The broser starts executing the JavaScript code that fetches the JSON from the server"

Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate Server
Server-->>Browser: [{content: "00000000", date: "2023-04-13T21:46:07.541Z"}, ...]
deactivate Server
Note right of Browser: "The broser executing the callback function that renders the notes"

```

