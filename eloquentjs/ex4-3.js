// Your code here.
function arrayToList(arr){
	let list = {value: null, rest: null};
  	for(let i of arr){
    	Insert(list, i);
    }
  	return list;
}

function Insert(list ,value){
	if(list.value == null){
      	list.value = value;
      	return;
    }
  	else if(list.rest == null){
    	list.rest = {value, rest: null};
      	return;
    }
  	else{
    	return Insert(list.rest, value);
    }
}

function listToArray(list){
	let arr = [];
  	let i;
  	for(i = list; i.rest != null; i = i.rest){
    	arr.push(i.value);
    }
  	arr.push(i.value);
    return arr;
}

function prepend(value, list){
	let newlist = {value, rest: list};
    return newlist;
}

function nth(list, index){
	let trv = 0;
  	if((trv == index)){
    	return list.value;
    }
  	else{
    	return nth(list.rest, index - 1);
    }
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20