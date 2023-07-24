# Suspense and the SWR Library Challenge

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Reason for the Challenge

React 18 released Suspense, which changes how software developers work with AJAX and other asynchronous operations. With Suspense, data and loading status do not need to be stored in state - they will be handled by the Suspense component. A Suspense component will wait for some code to load. While it is waiting, it will display "fallback" code, like a loading symbol, onto the screen. This transforms how software developers engineer code, because a component that fetches data asynchronously can now only focus on fetching data and displaying the result.

SWR is a library that handles AJAX requests. It supports Suspense and is much simpler to use then writing your own code for data fetching with Suspense. To learn more about SWR:

- [How to use SWR with Suspense](https://swr.vercel.app/docs/suspense)
- [Getting started with SWR](https://swr.vercel.app/docs/getting-started)

## Getting Started

Using your command line, you will need to navigate to the this folder, install all dependencies, and start the app.

```bash
cd exercises/14-suspense/
code . # if you would like to open this in a separate VSCode window
npm install
npm start
```

If, at any time, you need to stop the app, press `ctrl+c`.

## User Stories

As a user, I want to see a random cat fact display on my screen.

As a user, I want to see feedback if the fact is loading or if there is an error.

## Acceptance Criteria

- You must use `<Suspense />` to conditionally load a cat fact from the [Cat Fact API](https://catfact.ninja/)
- You must make this request by using the SWR library.
- You must display a loading symbol while the cat fact is loading. The loading symbol must be handled by `<Suspense />`.
- You must use the `<ErrorBoundary />` to handle errors.

## Instructions

Before doing this exercise, you may want to read the documentation for the [Cat Facts API](https://catfact.ninja/).

You will need to install the SWR library with `npm install swr`

First, update _src/App.jsx_ so that it contains the `<Suspense />` and `<ErrorBoundary />` components.

Second, refactor the _CatFact.jsx_ so that 1.) it is fetches data with the SWR library and 2.) it does not have any state. The idea is that this component's sole purpose will be to make an AJAX request and return JSX with a cat fact in it. Loading, errors, and waiting to render asynchronous content will be handled by _src/App.jsx_ instead.
