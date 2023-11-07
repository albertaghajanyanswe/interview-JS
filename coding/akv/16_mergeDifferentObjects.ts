interface  IUser {
  id: string;
  name: string;
  age: number;
}

interface IProduct {
  id: string;
  title: string;
}

interface IComment {
  id: string;
  body: string;
  userId: string;
  productId: string;
}

interface ProductToShow {
  id: string;
  title: string;
  comments: CommentWithUser[]
}

type CommentWithUser = Omit<Comment, 'userId|productId'> & { user: IUser };

function mergeDifferentObjects({
  products,
  users,
  comments
}: {
  products: IProduct[],
  users: IUser[],
  comments: IComment[]
}): ProductToShow[] {

  const usersMap: {[id: string]: IUser} = {}
  for(let i = 0; i < users.length; ++i) {
    usersMap[users[i].id] = users[i];
  }

  const commentsMap: {[productId: string]: CommentWithUser[] } = {};

  for (let i = 0; i < comments.length; ++i) {
    if (commentsMap[comments[i].productId] === undefined) {
      commentsMap[comments[i].productId] = [];
    }

    commentsMap[comments[i].productId].push({
      id: comments[i].id,
      body: comments[i].body,
      user: usersMap[comments[i].userId],
    } as unknown as CommentWithUser)
  }

  return products.map( ({id, title}) => ({
    id,
    title,
    comments: commentsMap[id]
  }))

}

const result1 = mergeDifferentObjects({
  products: [
    { id: '1', title: 'Product 1' }
  ],
  users: [
    { id: '1', name: 'User 1', age: 33}
  ],
  comments: [
    { id: '1', body: 'Comment 1', userId: '1', productId: '1' },
    { id: '2', body: 'Comment 2', userId: '1', productId: '1' },
    { id: '3', body: 'Comment 3', userId: '1', productId: '1' }
  ]
})

console.log('result1 = ', JSON.stringify(result1))