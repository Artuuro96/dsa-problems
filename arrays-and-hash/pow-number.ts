let temp

function main(a: number, b:number): any {
	b = Math.floor(b)
	if(b==0){
		return 1;
	}
	temp = main(a, 	b/2);
	if(b%2 != 0) {
		return temp*temp*a
	} else {
		return temp*a
	}
}

console.log("=====>", main(3,5));