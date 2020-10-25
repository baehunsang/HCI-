
/////////////////////////////////////////////////////////////////////////////////////////
var paper = document.getElementById("MyCanvas");
var context = paper.getContext("2d");
var Tree = new TreeHead();// The tree header that contains the metadata(root node, number of nodes)
var music = new Audio('./mymusic.mp3');
///////////////////////////////////////////////////////////////////////////////


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

function CreateRootWStr(Tree, strArr){
	if(Tree.root ==null){
		Tree.root = new Node(strArr[1],strArr[2], null);
		switch(Tree.root.type){
			case 'window':	
				Tree.root.type = new win(strArr[3], strArr[4], strArr[5], strArr[6], strArr[7]);
				break;
			case 'button':
				Tree.root.type = new butten(strArr[3], strArr[4], strArr[5], strArr[6], strArr[7]);
				break;
			case 'menu':
				Tree.root.type = new menu(strArr[3], strArr[4], strArr[5], strArr[6], strArr[7], strArr[8]);
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

function InsertNodeWStr(Tree, strArr){
	var newNode = new Node(strArr[1], strArr[2], strArr[3]);
	switch(newNode.type){
		case 'window':	
			newNode.type = new win(strArr[4], strArr[5], strArr[6], strArr[7], strArr[8]);
			break;
		case 'button':
			newNode.type =new butten(strArr[4], strArr[5], strArr[6], strArr[7], strArr[8]);
			break;
		case 'menu':
			newNode.type = new menu(strArr[4], strArr[5], strArr[6], strArr[7], strArr[8], strArr[9]);
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


///////////////////////////////////////////

//////////////////////////Event Handler Implmientation/////////////


function onClickCallBack(){
	alert("The Object  is selected");
}


function _traverse(tree, x, y){
	if(tree == null){
		return;
	}
	else{
		if(tree.childNo == 0){
			if(tree.type.IsClickIn(x, y, tree.type)){
				return tree.type.onClickCallBack();
			}
		}
		else{
			for(var i=0; i<tree.childNo; i++){
				_traverse(tree.child[i], x, y);
				if(tree.type.IsClickIn(x, y, tree.child[i].type)){
					return;
				}
			}			
			if(tree.type.IsClickIn(x, y, tree.type)){
				return tree.type.onClickCallBack();
			}
		}
	}
}

function EventHandle(Tree, event){
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext('2d');

	var x = event.offsetX;
	var y = event.offsetY;
	_traverse(Tree.root, x, y);
}



///////////////////////////GUI Object Class///////////////////////////////
	function win(x1, y1, width, height, title){
		this.x1 = x1;
		this.y1 = y1;
		this.width = width;
		this.height = height;
		this.title = title;
		this.draw = winDraw;
		this.IsClickIn = IsClickInWin;
		this.onClickCallBack = onClickCallBack;
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
	this.IsClickIn = IsClickInButton;
	switch(this.text){
		case 'play':
			this.onClickCallBack = onClickCallBackPlay;
			break;
		case 'pause':
			this.onClickCallBack = onClickCallBackpause;
			break;
		default:
			this.onClickCallBack = onClickCallBack;
			break;
	}
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
	for(var i=0; i<this.numOfItm; i++){
		this.item[i] = prompt("Item "+ i);
	}
	this.IsClickIn = IsClickInMenu;
	this.onClickCallBack = onClickCallBack;
}

function menuDraw(Menu){
	context.strokeRect(Menu.x1, Menu.y1, Menu.width, Menu.height);
	context.font = "15px Arial";
	context.textAlign = 'center';
	var x = parseInt(Menu.x1) + (Menu.width / 2);
	var y = parseInt(Menu.y1) + (Menu.height / 2);
	context.fillText(Menu.name, x, y);
	for(var i=0; i<Menu.numOfItm; i++){
		context.strokeRect(parseInt(Menu.x1) + 50, parseInt(Menu.y1) + (Menu.height * (parseInt(i)+1)) , Menu.width,Menu.height);
		context.font = "15px Arial";
		context.textAlign = 'center';
		var x = (parseInt(Menu.x1) + 50) + (Menu.width / 2);
		var y = parseInt(Menu.y1) +(Menu.height * (parseInt(i)+1)) + (Menu.height / 2);
		context.fillText(Menu.item[i], x, y);

	}
}

function IsClickInButton(x, y, type){
	if((x >= parseInt(type.x1) && x <= (parseInt(type.x1) + parseInt(type.width)))&&
		(y >= parseInt(type.y1) && y <= (parseInt(type.y1) + parseInt(type.height)))){
		return true;
	}		
	return false;

}

function IsClickInWin(x, y, type){
	if((x >= parseInt(type.x1) && x <= (parseInt(type.x1) + parseInt(type.width)))&&
		(y >= parseInt(type.y1) && y <= (parseInt(type.y1) + 50))){
		return true;
	}		
	return false;

}

function IsClickInMenu(x, y, type){
	if((x >= parseInt(type.x1)+50 && x <= (parseInt(type.x1)+50 + parseInt(type.width)))&&
		(y >= parseInt(type.y1)+parseInt(type.height) && y <= (parseInt(type.y1) + parseInt(type.height)*parseInt(type.numOfItm)))){
		return true;
	}		
	return false;

}

function onClickCallBackPlay(){
	music.play();
}

function onClickCallBackpause(){
	music.pause();
}

////////////////////////////////////////////
function getInput(){
	var inputText = document.getElementById("inputText").value;
	var strArr = inputText.split(",");
	switch(strArr[0]){
		case 'create':
			CreateRootWStr(Tree, strArr);
			break;
		case 'insert':
			InsertNodeWStr(Tree, strArr);
			break;
		default:
			alert("Wrong input");
			return;
			break;
	}
}











