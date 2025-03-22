class Tree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Tree(1);
root.left = new Tree(2);
root.right = new Tree(3);

root.left.left = new Tree(4);
root.left.right = new Tree(5);

root.right.left = new Tree(6);
root.right.right = new Tree(7);

// console.log(root.left.left);

// I will implement Breadth First Search

const BFS = (root) => {
  if (!root) return;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.data);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
};
BFS(root);

// class Tree {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// const root = new Tree(1);
// root.left = new Tree(2);
// root.right = new Tree(3);

// root.left.left = new Tree(4);
// root.left.right = new Tree(5);

// root.right.left = new Tree(6);
// root.right.right = new Tree(7);

// function breadthFirstSearch(root) {
//   if (!root) {
//     return;
//   }

//   const queue = [root];

//   while (queue.length > 0) {
//     const node = queue.shift();
//     console.log(node.data);

//     if (node.left) {
//       queue.push(node.left);
//     }

//     if (node.right) {
//       queue.push(node.right);
//     }
//   }
// }

// breadthFirstSearch(root);
