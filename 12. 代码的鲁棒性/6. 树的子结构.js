/**
 *  输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
    let res = false
    if(pRoot1 && pRoot2) {
        if(pRoot1.val === pRoot2.val) {
            res = hasSameChildren(pRoot1, pRoot2)
        }
        if(!res) {
            res = HasSubtree(pRoot1.left, pRoot2)
        }
        if(!res) {
            res = HasSubtree(pRoot1.right, pRoot2)
        }
    }
    return res
}

function hasSameChildren(pRoot1, pRoot2) {
    if(!pRoot2) {
        return true
    }
    if(!pRoot1) {
        return false
    }
    if(pRoot1.val !== pRoot2.val) {
        return false
    }
    return hasSameChildren(pRoot1.left, pRoot2.left) && hasSameChildren(pRoot1.right, pRoot2.right)
}
