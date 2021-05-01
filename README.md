# **[Tinder Clone using React.Js]()**

## **[Packages Used]()**

## **[APIs Used]()**

## **[useState]()**

This helps create a state variable inside a functional component.

```
Syntax :
const [messages, setMessages] = useState([{}]);
```

In above syntax _messages_ is the name of state created. "setMessages" is a function that helps changing state just like setState in class component. The argument inside useState is the initial value of the state which in this case is a list of objects.

## **[useEffect](https://medium.com/trabe/react-useeffect-hook-44d8aa7cccd0)**

This function executes on a given condition.

```
Syntax :
useEffect(() => { setUsername(prompt('Please enter your name : ')); }, [])
```

Above function executes once because it's second argument is an empty list here. As long as we only want our effect (subscribe to resizes) to be called once, we pass an empty array as the second parameter of the function useEffect . An effect can optionally return a function (the cleanup function) that React will call when the component unmounts and before running the effect next time.

## **[Firebase Commands Used]()**

## **[Firebase Deploy Commands]()**

- sudo npm install -g firebase-tools
- firebase login
- firebase init
- Hosting : Configure and deploy Firebase - Hosting sites
- Use an existing project
- Select your project
- What do you want to use as your public directory ? build
- Configure as a single page app ? Yes
- npm run build
- firebase deploy
