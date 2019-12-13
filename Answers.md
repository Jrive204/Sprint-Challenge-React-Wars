# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React Js is a Javascript library, it tries to put more functionality into vanilla JS, React focuses on a more painless approach for interactive UIS, as well as efficiency. With React it is easier to render just the right component when data changes.

1. What does it mean to think in react?

Thinking in React is looking at the bigger picture, realizing how to best create Components which can be reusable, and easy to test. Make everything look as clean as possible, so it is easier to troubleshoot; make sure code is dry.

1. Describe state.
State is an object that represents the parts of an app that can change. In Js we used count = 0, then we would be doing some function to interact and change the "state" of count. State represents any type of interactions that you want to happen in your react app.

1. Describe props.
Props is passing data from component to component, typically a parent component passing it to a child component. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects mean anything that results in change outside of the scope of the function it is being executed in. By using {useEffect} you can have more control over side effects by setting the state inside {useEffect}.  
