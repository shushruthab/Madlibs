### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    Open-source Javascript Library developed by Facebook. React's structure is based on reusable components, so it is suitable to develop apps which benefit from componentization. React is easy to scale, and is fast and efficient for large applications. 

- What is Babel?
    Babel is a transpiler that helps convert modern Javascript to a version compatible with modern browsers.  

- What is JSX?
    React extension to the Javascript language which provides a way to structure components in a syntax popularized by React.js

- How is a Component created in React?
    A component is created by writing a Javascript function that returns a JSX element. 

- What are some difference between state and props?
    Props are passed from one component to another and are immutable. State, on the other hand, pass data within the component in which they are declared. They are also mutable. 

- What does "downward data flow" refer to in React?
    In react, data flows only in one direction from the parent to the child. This is known as downward data flow in react. 

- What is a controlled component?
    Controlled components are instances in which the form data is handled by the component's state.  

- What is an uncontrolled component?
    Uncontrolled component are instances in which form data is handled by the DOM itself. 

- What is the purpose of the `key` prop when rendering a list of components?
    The `key` prop creates a relationship between the component and the DOM element. It helps react determine whether or not a component needs to be rerendered.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    If the array is not static, the order of the elements might change and this would cause react to render the wrong element. 

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a side-effect that is executed after a specified lifecycle event. Examples of lifecycle events include, when a component mounts, state changes etc. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef allows the persistence of data between rerenders. Change to a ref value will not trigger a rerender. 

- When would you use a ref? When wouldn't you use one?
    Use useref when you need data that is available regardless of component lifecycle. useRefs expose the DOM element and therefore it would be tempting to manipulate the DOM using useRef. However, this would make the utilization of React futile. 

- What is a custom hook in React? When would you want to write one?
    Custom hooks are javascript functions that use built in hooks. They are created to handle abstract logic, repeated tasks and create your own JSX. 