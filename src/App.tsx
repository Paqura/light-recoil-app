import React from 'react';
import { atom, selector, useRecoilValue, useRecoilState } from 'recoil';

export class Api {
  constructor(private url: string) {}

  async getComments() {
    return await fetch(this.url).then(res => res.json())
  }
}

const sinemaApi = new Api('https://jsonplaceholder.typicode.com/comments')

const getFilms = selector({
  key: 'comments',
  get: async ({ get }: { get(...args: any[]): void }) => {
    const response = await sinemaApi.getComments()
    return response
  },
});

const counterAtom = atom({
  key: 'counter',
  default: 0,
})

const Counter = () => {
  const [counter, setCounter] = useRecoilState(counterAtom)
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <p>{counter}</p>
    </div>
  )
}

interface Comment {
  id: string;
  body: string;
}

const App = () => {
  const comments = useRecoilValue(getFilms) as Comment[]

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <div>{comment.body}</div>
          <br />
          <Counter />
        </div>
      ))}
    </div>
  );
}

export default App;
