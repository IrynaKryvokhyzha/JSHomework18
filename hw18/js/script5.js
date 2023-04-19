function getTable(rowNum, colNum) {
	const table = document.createElement('table')
	table.style.border = "2px solid #000"
	for (let i = 0; i < rowNum; i++) {
		const row = document.createElement('tr')
		for (let j = 0; j < colNum; j++) {
			const column = document.createElement('td')
			column.style.border = "1px solid #000"
			column.innerText = Math.floor(Math.random()*(100-1))
			row.append(column)
		}
		table.append(row)
	}
	document.getElementById('title').append(table)
	
}
getTable(3, 4)