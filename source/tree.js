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
const tree = (lineCount) => {
    const count = +lineCount;
    
    if (count < 3 || isNaN(count)) {
        return null;
    }

    const treeLines = count - 1;
    let treePicture = '';
    
    for (let i = 0; i < treeLines; i++) {
        treePicture += drawLine('*'.repeat(i * 2 + 1), treeLines - i - 1) + '\n';
    }

    treePicture += drawLine('|', treeLines - 1) + '\n';
    
    return treePicture;
}

/**
 * Создаёт строку с заданными симметричными отсутпами и заданной строкой в центре
 * 
 * @param {String} str - строка, которая будет расположена в центре
 * @param {Number} padding - отступы
 * @example
 * 
 * drawLine("***", 1)
 * // => ' *** '
 */
const drawLine = (str, padding) => str.padStart(str.length + padding).padEnd(str.length + padding * 2);
