'use strict';

/**
 * Рисует ёлочку заданной высоты из '*'
 * 
 * @param {Number} lineCount - передаваемое целое число (высота ёлочки)
 * @returns {String} - возвращаемая строка (изображение ёлочки)
 * @example
 * 
 * tree(3);
 * // => ' * \n***\n | \n'
 */
function tree(lineCount) {
    const count = +lineCount;
    
    if (count < 3 || isNaN(count)) {
        return null;
    }

    const treeLines = count - 1;
    let treePicture = '';
    const drawLine = (str, padding) => str.padStart(str.length + padding).padEnd(str.length + padding * 2);
    
    for (let i = 0; i < treeLines; i++) {
        treePicture += drawLine('*'.repeat(i * 2 + 1), treeLines - i - 1) + '\n';
    }

    treePicture += drawLine('|', treeLines - 1) + '\n';
    
    return treePicture;
}
