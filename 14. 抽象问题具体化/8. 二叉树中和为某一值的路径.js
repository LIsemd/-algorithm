/**
 *  输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 *  路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 *  (注意: 在返回值的list中，数组长度大的数组靠前)
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function FindPath(root, expectNumber) {
    let result = [];
    if (root === null) {
        return result;
    }
    dfsFind(root, expectNumber, [], 0, result);
    return result;
}

function dfsFind(root, expectNumber, path, currentSum, result) {
    currentSum += root.val;
    path.push(root.val);
    if (currentSum === expectNumber && !root.left && !root.right) {
        result.push(path.slice());
    }
    root.left && dfsFind(root.left, expectNumber, path, currentSum, result);
    root.right && dfsFind(root.right, expectNumber, path, currentSum, result);
    path.pop();
}