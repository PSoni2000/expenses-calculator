# About Project App

Expenses Calculator is a basic Expenses Calculator app which let you store your expenses in your Web browser(localStorage). And prepare a bar chart dynamically to show your expenses month wise in filtered Year.

## Language / Library Used

1. React JS
2. bootstrap

## Future Plans

1. include Update / Delete Expenses options.

# NOTES

1. Best way to get previous state in useState hook is -

   ```
   setUserInput((prevState) => {
       return { ...prevState,enteredTitle: event.target.value };
   });
   ```

2. You can store JSX content in variables
   `let expensesContent = <p>No expenses found.</p>`

3. When setting dynamic styles like this -
   `style={{ height: barFillHeight }}`
   here style attribute wants an Object of styles to apply. as there is no special syntax applied
   `{` - represent we are passing dynamic value
   `{{` - represent we are passing object as dynamic value

4. The localStorage object stores data with no expiration date.
   The data is not deleted when the browser is closed, and are available for future sessions.

   Syntax: `window.localStorage` or just `localStorage`
   Save Data to Local Storage : `localStorage.setItem(key, value);`
   Read Data from Local Storage : `let data = localStorage.getItem(key);`
   Remove Data from Local Storage : `localStorage.removeItem(key);`
   Remove All (Clear Local Storage) : `localStorage.clear();`

5. The sessionStorage object stores data for only one session. (The data is deleted when the browser is closed).

   Syntax : `window.sessionStorage` Or just `sessionStorage`
   Save Data to Session Storage : `sessionStorage.setItem("key", "value");`
   Read Data from Session Storage : `const data = sessionStorage.getItem("key");`
   Remove Data from Session Storage : `sessionStorage.removeItem("key");`
   Remove All (Clear session Storage) : `sessionStorage.clear();`
