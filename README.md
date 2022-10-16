# Expenses Calculator App

Expenses Calculator App helps you in showing you expenses.

## NOTE:

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
