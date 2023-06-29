### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
	- React is a JavaScript front-end library. React is used to build desktop, mobile and web-based applications. It is useful because it allows for sharing application parts on both the client-side and server-side of an application. It also makes it easier for multiple developers to create different components of an application and integrate them in one application.

- What is Babel?
	- It is a JavaScript transcompiler that is used to convert code that is written in ES2015 and above to a form that is compatible with older versions of JavaScript.

- What is JSX?
	- It is essentially the React form of HTML. It is a syntax that allows developers to structure component rendering.

- How is a Component created in React?
	- A react component is a JavaScript function that returns JSX. It can then be imported into other React components to allow for increased organization in React applications.

- What are some difference between state and props?
	- Props are immutable, meaning they cannot be changed inside of a component, but can be from a parent component. States are able to be changed within a component but cannot be changed by a parent component.

- What does "downward data flow" refer to in React?
	- It is the concept of passing data from parent component to child component via props.

- What is a controlled component?
	- It is a component that is controlled by react state. Meaning it receives its curent values and callbacks from props and its state is managed by the parent component.

- What is an uncontrolled component?
	- It is a react component that maintains its own internal state. When a user interacts with it it will update its own state and in turn its own values.

- What is the purpose of the `key` prop when rendering a list of components?
	- It allows for multiple renderings of the same component to be easily identified.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
	- Arrays are typically not static. This will cause react to get confused and re-render the incorrect element.

- Describe useEffect.  What use cases is it used for in React components?
	- It allows for the use of side effects in a component. Side effects are things like fetching data, updating the DOM or running a timer.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
	- A ref is very similar to a state, it's a method of storing data values, but when the value is changed it does not cause a re-rendering of the component.

- When would you use a ref? When wouldn't you use one?
	- A ref is useful when you would like to update a value without causing a re-render. They are useful for event-driven changes. For example a timer or triggering an animation. Another good time to use a ref is when you need to interact with a DOM component. Since react is data-driven it is best to use state wherever possible, this way react components will update with a change of data not by an event.

- What is a custom hook in React? When would you want to write one?
	- Custom hooks are very similar to a component but they don't return JSX, rather they usually return a variable, function, or an array of both. They are useful to negate the repetition of code in an app.
