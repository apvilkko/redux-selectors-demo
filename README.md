# redux-selectors-demo

Example usage of React & Redux with selectors (reselect), and how to keep things DRY with business logic in the selectors.

The branch `memoize` has the modifications needed to make memoization work for the movie cards.

```
npm install
npm start
```

Where should you place your logic/data manipulations?
```
Data from API (1.)
=> {2. API action/reducer}
state
=> {3. mapStateToProps}
connected component
=> {4. render}
DOM
```

1. Usually the best option is to have your data ready as is. Do your processing on the backend if it makes sense. Pros: Frontend remains minimal. Cons: Backend becomes more complex.
2. When a request completes do your processing before setting data to state (callback/promise depending on how you process your requests). Pros: Guaranteed that it's done only once per request. Cons: State will be more bloated.
3. Process during props mapping with e.g. selectors. Pros: State will remain minimal. Cons: might cause multiple processing iterations if not memoized properly.
4. Avoid complex logic or processing in render phase. It's easy to miss if you hide complex logic in functions e.g. `className={doSomethingHeavy(props)}`. Pros: Fast to do when hacking away. Cons: performance and strong possibility of badly structured code.
