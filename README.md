# Learn react first time

1. We created a react project using vite

```
npm create vite@latest <project-name>

- Select react
- Select Typescript or Javascript 

or 
defaults to using typescript

npm create vite@latest name-of-your-project -- --template react
# follow prompts
cd <your new project directory>
```

2. The index.html file add the main.jsx script which creates the ReactDOM inside the root div element

3. The react homepage is the App component.

### Adding a Nav component in the App directory

```
 return (
    <>
    {/* Nav component */}
      <Nav />

      {/* Footer component */}
      
    </>
  )
```

## Routing with react router

https://reactrouter.com/en/main/start/tutorial

1. Install react router

```
npm install react-router@<version>

or 

npm i react-router@<version>

note: @latest installs the latest version
```

