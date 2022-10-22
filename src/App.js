import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
	const loadExpenses =
		JSON.parse(localStorage.getItem("React_Expenses_Calculator_app")) ?? [];
	const [expenses, setExpenses] = useState(
		loadExpenses.map((exp) => ({ ...exp, date: new Date(exp.date) }))
	);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			localStorage.setItem(
				"React_Expenses_Calculator_app",
				JSON.stringify([expense, ...prevExpenses])
			);

			return [expense, ...prevExpenses];
		});
	};

	// return React.createElement(
	//   'div',
	//   {},
	//   React.createElement('h2', {}, "Let's get started!"),
	//   React.createElement(Expenses, { items: expenses })
	// );

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
