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

1. Usually the best option is to have your data ready as is. Do your processing on the backend if it makes sense. __Pros__: Frontend remains minimal. __Cons__: Backend becomes more complex.
2. When a request completes do your processing before setting data to state (callback/promise depending on how you process your requests). __Pros__: Guaranteed that it's done only once per request. __Cons__: State will be more bloated. If multiple endpoint responses manipulate the same state data, callback has to be called for all.
3. Process during props mapping with e.g. selectors. __Pros__: State will remain minimal. __Cons__: might cause multiple processing iterations if not memoized properly.
4. Avoid complex logic or processing in render phase. It's easy to miss if you hide complex logic in functions e.g. `className={doSomethingHeavy(props)}`. __Pros__: Fast to do when hacking away. __Cons__: performance and strong possibility of badly structured code.
