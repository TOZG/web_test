function my$ (id) {
	return document.getElementById(id);
}

//处理浏览器兼容性
//获取第一个子节点
function getFirstElementChild (element) {
	var node, nodes = element.childNodes, i = 0;
	while (node = nodes[i++]) {
		if (node.nodeType === 1) {
			return node;
		}
	}
	return null;
}

//获取最后一个子节点
function getLastElementChild (element) {
	var node, nodes = element.childNodes, i = nodes.length - 1;
	while (node = nodes[i--]) {
		if (node.nodeType === 1) {
			return node;
		}
	}
	return null;
}

//浏览器兼容性
//获取下一个兄弟元素
function getNextElementSibling (element) {
	var e1 = element;
	while (e1 = e1.nextSibling) {
		if (e1.nodeType === 1) {
			return e1;
		}
	}
	return null;
}



//获取上一个兄弟元素
function getPreviousElementSibling (element) {
	var e1 = element;
	while (e1 = e1.previousSibling) {
		if (e1.nodeType === 1) {
			return e1;
		}
	}
	return null;
}



function setInnerText (element, content) {
	if (typeof element.innerText === 'string') {
		element.innerText = content;
	} else {
		element.textContent = content;
	}
}




