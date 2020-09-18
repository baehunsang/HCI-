var Tree = new TreeHead();// The tree header that contains the metadata(root node, number of nodes)

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
		Tree.root = new Node(prompt("The root id"),prompt("Type of node"), null);
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

function InsertNode(Tree){
	var newNode = new Node(prompt("The id of insert Node"), prompt("What type is it?"), prompt("Who is parent?"));
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
	var id = prompt("Delet id");
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
	_printTree(Tree.root, 0);
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

function _printTree(tree, level){
	if(tree == null){
		alert("Exceltion: The tree is empty");
		return;
	}
	
	else{
		var newWindow = window.open("", "MsgWindow", "width = 1000, height = 100000" );
		newWindow.document.write("<p>");
		if(tree.childNo == 0){
			for(var i=0; i<2*level; i++){
				newWindow.document.write("&#160;&#160;&#160;&#160;");
			}
			newWindow.document.write("id:"+tree.id+"<br>");

			for(var i=0; i<2*level; i++){
				newWindow.document.write("&#160;&#160;&#160;&#160;");
			}
			newWindow.document.write("type:"+tree.type+"<br>");
			for(var i=0; i<2*level; i++){
				newWindow.document.write("&#160;&#160;&#160;&#160;");
			}
			newWindow.document.write("parent:"+tree.parent+"<br>");
		}
		else{
			for(var i=0; i<tree.childNo; i++){
				_printTree(tree.child[i], level+1);
			}

			for(var i=0; i<2*level; i++){
				newWindow.document.write("&#160;&#160;&#160;&#160;");
			}
			newWindow.document.write("id:"+tree.id+"<br>");
			for(var i=0; i<2*level; i++){
				newWindow.document.write("&#160;&#160;&#160;&#160;");
			}
			newWindow.document.write("type:"+ tree.type+"<br>");
			for(var i=0; i<2*level; i++){
				newWindow.document.write("&#160;&#160;&#160;&#160;");
			}
			newWindow.document.write("parent:"+tree.parent+"<br>");
		} 
		newWindow.document.write("</p>")
	}
}


