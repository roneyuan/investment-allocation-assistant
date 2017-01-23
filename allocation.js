
function changeChart(thisQuestion, thisAnswer) {
	// TODO
	
	var defaultStockAllocation = state['stock'];
	switch (thisQuestion+1) { // +1 on purpose. Fix it later
		case 1:
			switch (thisAnswer) {
				case "0":
					defaultStockAllocation += 5;		
					break;
				case "1":
					defaultStockAllocation += 4;
					break;
				case "2":
					defaultStockAllocation += 2;
					break;
				case "3":
					defaultStockAllocation += 3;
					break;
				default:			
					break;
			}
			break;
		case 2:
			switch (thisAnswer) {
				case "0":
					defaultStockAllocation += 2;		
					break;
				case "1":
					defaultStockAllocation += 1;
					break;
				case "2":
					defaultStockAllocation -= 1;
					break;
				case "3":
					defaultStockAllocation -= 2;
					break;
				default:			
					break;
			}		
			break;
		case 3:
			switch (thisAnswer) {
				case "0":
					defaultStockAllocation += 1;		
					break;
				case "1":
					defaultStockAllocation += 3;
					break;
				case "2":
					defaultStockAllocation += 5;
					break;
				case "3":
					defaultStockAllocation += 7;
					break;
				default:			
					break;
			}
			break;			
		case 4:
			switch (thisAnswer) {
				case "0":
					defaultStockAllocation += 1;		
					break;
				case "1":
					defaultStockAllocation += 2;
					break;
				case "2":
					defaultStockAllocation += 3;
					break;
				case "3":
					defaultStockAllocation += 4;
					break;
				default:			
					break;
			}		
			break;
		case 5:
			switch (thisAnswer) {
				case "0":
					defaultStockAllocation += 2;		
					break;
				case "1":
					defaultStockAllocation += 1;
					break;
				case "2":
					defaultStockAllocation -= 1;
					break;
				case "3":
					defaultStockAllocation -= 2;
					break;
				default:			
					break;
			}
			break;			
		case 6:
			switch (thisAnswer) {
				case "0":
					defaultStockAllocation += 1;		
					break;
				case "1":
					defaultStockAllocation += 0;
					break;
				case "2":
					defaultStockAllocation -= 1;
					break;
				case "3":
					defaultStockAllocation -= 2;
					break;
				default:			
					break;
			}		
			break;
		case 7:
			switch (thisAnswer) {
				case "0":
					defaultStockAllocation -= 3;		
					break;
				case "1":
					defaultStockAllocation -= 2;
					break;
				case "2":
					defaultStockAllocation -= 1;
					break;
				case "3":
					defaultStockAllocation += 0;
					break;
				default:			
					break;
			}
			break;			
		case 8:
			switch (thisAnswer) {
				case "0":
					defaultStockAllocation += 1;		
					break;
				case "1":
					defaultStockAllocation += 0;
					break;
				case "2":
					defaultStockAllocation -= 1;
					break;
				case "3":
					defaultStockAllocation -= 2;
					break;
				default:			
					break;
			}		
			break;
		case 9:
			switch (thisAnswer) {
				case "0":
					defaultStockAllocation += 2;		
					break;
				case "1":
					defaultStockAllocation += 1;
					break;
				case "2":
					defaultStockAllocation -= 1;
					break;
				case "3":
					defaultStockAllocation -= 2;
					break;
				default:			
					break;
			}
			break;			
		case 10:
			break;
		default:
			break;
	}	
	
	
	var bond = 100 - defaultStockAllocation;
	
	state['stock'] = defaultStockAllocation;
	state['bond'] = bond;
	// Update here...
	
	return;
}