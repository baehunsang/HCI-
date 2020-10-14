////////////////////////////////Global Variable/////////////////////////////////////////////////////////
var paper = document.getElementById("MyCanvas");
var context = paper.getContext("2d");
var Tree = new TreeHead();// The tree header that contains the metadata(root node, number of nodes)

//////////////////////////////Global variable/////////////////////////////////////////////////


///////////////////////Tree Data Structure ADT////////////////////////////////////////////
function Node(id, type, parent){
	this.id = id;
	this.type = type;
	this.parent = parent;
	this.child = new Array();
	this.childNo = 0;
}

function TreeHead(){
	this.numOfNode = 0;
	this.root = null;
}

function CreateRoot(Tree){
	if(Tree.root ==null){
		Tree.root = new Node(prompt("The root id"),prompt("type"), null);
		switch(Tree.root.type){
			case 'window':	
				Tree.root.type = new win(prompt("srart x"), prompt("start y"), prompt("width"), prompt("height"), prompt("title"));
			break;
			case 'button':
				Tree.root.type = new butten(prompt("start x"), prompt("start y"), prompt("width"), prompt("height"), prompt("text"));
			break;
			case 'menu':
				Tree.root.type = new menu(prompt("start x"), prompt("start y"), prompt("width"), prompt("height"), prompt("number of items"), prompt("Name"));
			break;
			default:
				 alert("Exception: Undefined type");
				Tree.root = null;
				return false;
			break;
		}
		
		Tree.numOfNode++;
	}
	else{
		alert("Exception: The root node was already defined")
	}
}

function _searchNode(tree, id){ //Inner function of SerchNode
	if(tree.id == id){
		return true; 
	}
	else if(tree.childNo == 0){
		return false;
	}
	else{
		for(var i=0; i<tree.childNo; i++){
			if(_searchNode(tree.child[i], id)){
				return true;
			}
		}
		return false;
	}
}

function SearchNode(Tree, id){
	return _searchNode(Tree.root, id);
}

function UserSearch(Tree){
	if(_searchNode(Tree.root, prompt("The id of node"))){
		alert("The node is inside of the tree");
	}
	else{
		alert("The node is not inside of the tree");
	}
}

function InsertNode(Tree){
	var newNode = new Node(prompt("The id of insert Node"), prompt("type"), prompt("Who is parent?"));
	switch(newNode.type){
		case 'window':	
			newNode.type = new win(prompt("srart x"), prompt("start y"), prompt("width"), prompt("height"), prompt("title"));
			break;
		case 'button':
			newNode.type =new butten(prompt("start x"), prompt("start y"), prompt("width"), prompt("height"), prompt("text"));
			break;
		case 'menu':
			newNode.type = new menu(prompt("start x"), prompt("start y"), prompt("width"), prompt("height"), prompt("number of items"), prompt("Name"));
			break;
		default:
			return alert("Exception: Undefined type");
	}
	if(!SearchNode(Tree,newNode.parent)){
		alert("Exception: No Parent exsist");
		return false;
	}
	else if(SearchNode(Tree, newNode.id)){
		alert("Exception: The node is already exsist")
		return false;
	}
	else{
		_addNode(Tree.root, newNode);
		Tree.numOfNode++;
		alert("id:"+newNode.id+"is added");
		return true;
	}
}

function DeletNode(Tree){
	var id = prompt("Id of delet node");
	if(!SearchNode(Tree,id)){
		alert("Exception: The id is not exsist");
		return false;
	}
	Tree.root = _deletNode(Tree.root, id);
	Tree.root.parent = null;
	alert("id:"+id+"was deleted");
	return true;
}

function PrintTree(Tree){
	context.clearRect(0, 0, paper.width, paper.height);
	_printTree(Tree.root);
}

function _printTree(tree){
	if(tree == null){
		alert("Exception: Tree is null")
	}
	else{
		if(tree.childNo == 0){
			tree.type.draw(tree.type);
		}
		else{
			for(var i=0; i<tree.childNo; i++){
				_printTree(tree.child[i]);
			}
			tree.type.draw(tree.type);
		}
	}
}

function _addNode(tree, newNode){ //Inner function of InsertNode
	if(newNode.parent == tree.id){
		tree.child[tree.childNo] = newNode;
		tree.childNo++;
		return;
	}
	else if(tree.childNo == 0){
		return;
	}
	else{
		for(var i=0; i<tree.childNo; i++){
			_addNode(tree.child[i], newNode);
		}
	}
}

function _deletNode(tree, id){ //Inner function of DeletNode
	if((tree.id == id) && (tree.childNo == 0)){
		return null;
	}
	else if((tree.id == id && (tree.childNo != 0))){
		var tmp = tree.child[0];
		tmp.child = _deletNode(tree, tree.child[0].id).child;
		tmp.childNo = tmp.child.length;
		for(var i=0; i<tmp.child.length; i++){
			tmp.child[i].parent = tmp.id;
		}
		return tmp;
	}
	else if(tree.childNo == 0){
		return tree;
	}
	else{
		for(var i=0; i<tree.childNo; i++){
			tree.child[i] = _deletNode(tree.child[i], id);
			if(tree.child[i] == null){
				tree.child.splice(i, 1);
				tree.childNo--;
				break;
			}
			tree.child[i].parent = tree.id;
		}
		return tree;

	}

}


/////////////////Tree Implmientation//////////////////////////


///////////////////////////GUI Object Class///////////////////////////////
function win(x1, y1, width, height, title){
	this.x1 = x1;
	this.y1 = y1;
	this.width = width;
	this.height = height;
	this.title = title;
	this.draw = winDraw;
}

function winDraw(Window){
	context.strokeRect(Window.x1, Window.y1, Window.width, Window.height);
	context.strokeRect(Window.x1, Window.y1, Window.width, 50);
	context.font = "15px Arial";
	context.textAlign = 'center'
	var x = parseInt(Window.x1) + (Window.width/2);
	var y = parseInt(Window.y1) + 25;
	context.fillText(Window.title,x, y);
}

function butten(x1, y1, width, height, text){
	this.x1 = x1;
	this.y1 = y1;
	this.width = width;
	this.height = height;
	this.text = text;
	this.draw = buttenDraw;
}

function buttenDraw(Butten){
	context.strokeRect(Butten.x1, Butten.y1, Butten.width, Butten.height);
	context.font = "15px Arial";
	context.textAlign = 'center';
	var x = parseInt(Butten.x1) + (Butten.width / 2);
	var y = parseInt(Butten.y1) + (Butten.height / 2);
	context.fillText(Butten.text, x, y);
}

function menu(x1, y1, width, height, numOfItm, name){
	this.x1 = x1;
	this.y1 = y1;
	this.width = width;
	this.height = height;
	this.name = name;
	this.numOfItm = numOfItm;
	this.draw = menuDraw;
	this.item = new Array();
}

function menuDraw(Menu){
	context.strokeRect(Menu.x1, Menu.y1, Menu.width, Menu.height);
	context.font = "15px Arial";
	context.textAlign = 'center';
	var x = parseInt(Menu.x1) + (Menu.width / 2);
	var y = parseInt(Menu.y1) + (Menu.height / 2);
	context.fillText(Menu.name, x, y);
	for(var i=0; i<Menu.numOfItm; i++){
		Menu.item[i] = 'Item ' + i;
		context.strokeRect(parseInt(Menu.x1) + 50, parseInt(Menu.y1) + (Menu.height * (parseInt(i)+1)) , Menu.width,Menu.height);
		context.font = "15px Arial";
		context.textAlign = 'center';
		var x = (parseInt(Menu.x1) + 50) + (Menu.width / 2);
		var y = parseInt(Menu.y1) +(Menu.height * (parseInt(i)+1)) + (Menu.height / 2);
		context.fillText(Menu.item[i], x, y);

	}
}
















