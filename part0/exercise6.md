```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: [{content: "YAS", date: "2023-07-29T18:32:10.188Z"}]
    deactivate server
    
```
