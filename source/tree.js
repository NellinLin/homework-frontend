'use strict';

function tree(lineCount) {
    if (lineCount < 3 || isNaN(+lineCount)) {
        return null;
    }
    const treeLines = lineCount - 1;
    let treePicture = '';
    
    for (let i = 0; i < treeLines; i++) {
        treePicture +=
            ' '.repeat(treeLines - i - 1) +
            '*'.repeat(i * 2 + 1) +
            ' '.repeat(treeLines - i - 1) +
            '\n';
    }
    
    treePicture +=
        ' '.repeat(treeLines - 1 ) +
        '|' + ' '.repeat(treeLines - 1) +
        '\n';
    
    return treePicture;
}
