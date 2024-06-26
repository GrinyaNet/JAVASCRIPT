const favorites = ['id-2'];
const tree = {
    id: 'id-1',
    name: 'Products',
    nodes: [
        {
            id: 'id-2',
            name: 'Food',
            nodes: []
        },
    ],
};
//const result = markFavoites(tree, favorites);
// result; // {
//     id: 'id-1,
//     name: "Products',
//     isFavorite: false,
//     nodes: [
//         {
//             id: 'id-2',
//             isFavorite: true,
//             name: 'Food',
//             nodes: []
//         },
//     ],
// };



const markFavoites = (tree, favorites) => {
    const isFavorite = favorites.includes(tree.id);

    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavoites(childNode, favorites)),
    }
}

const result = markFavoites(tree, favorites);
console.log(result);