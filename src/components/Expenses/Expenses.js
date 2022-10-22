import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState(
		new Date().getFullYear().toString()
	);

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	// filter expenses according to selected year
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});
	const filterOptions = [
		...new Set([
			new Date().getFullYear().toString(),
			...props.items.map((exp) => exp.date.getFullYear().toString()),
		]),
	];
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					filterOptions={filterOptions}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
