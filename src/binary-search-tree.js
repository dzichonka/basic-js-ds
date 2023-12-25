const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this._addRecursion(this.rootNode, data);
  }
  _addRecursion(node, data) {

    if (node === null) {
      return new Node(data);
    }
    if (data < node.data) {
      node.left = this._addRecursion(node.left, data);
    }
    if (data > node.data) {
      node.right = this._addRecursion(node.right, data);
    }
    return node;
  }

  has(data) {
    return this._hasRecursion(this.rootNode, data);
  }
  _hasRecursion(node, data) {
    if (node === null) {
      return false;
    }
    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this._hasRecursion(node.left, data);
    } else if (data > node.data) {
      return this._hasRecursion(node.right, data);
    }
  }

  find(data) {
    return this._findRecursion(this.rootNode, data);
  }
  _findRecursion(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._findRecursion(node.left, data);
    } else if (data > node.data) {
      return this._findRecursion(node.right, data);
    }
  }

  min() {
    const minNode = this._findMin(this.rootNode);
    if (minNode !== null) {
      return minNode.data;
    } else {
      return null;
    }
  }
  _findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  max() {
    const maxNode = this._findMax(this.rootNode);
    if (maxNode !== null) {
      return maxNode.data;
    } else {
      return null;
    }
  }
  _findMax(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }
  remove(data) {
    return this._removeRecursion(this.rootNode, data);
  }
  _removeRecursion(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minRight = this._findMin(node.right);
        node.data = minRight.data;
        node.right = this._removeRecursion(node.right, minRight.data);
      }
    } else if (data < node.data) {
      node.left = this._removeRecursion(node.left, data);
    } else {
      node.right = this._removeRecursion(node.right, data);
    }

    return node;
  }
}

module.exports = {
  BinarySearchTree
};