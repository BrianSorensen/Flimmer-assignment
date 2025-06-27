import { useState, useEffect } from "react";

export type Story = {
  id: string;
  deleted: boolean;
  type: string;
  by: string;
  time: number;
  text: string;
  dead: boolean;
  parent: string;
  poll: string;
  kids: string[];
  url: string;
  score: number;
  title: string;
  parts: string[];
  descendants: number;
};

export interface Author {
  id: string;
  created: number;
  karma: number;
  about: string;
  submitted: string[];
}

export function useFetchStories(listLenght:number){
  const [stories, setStories] = useState<Story[]>()
  
  useEffect(() => {

  getPosts(listLenght).then(res => setStories(res));

  async function getIds(lenght:number) {
  const ids = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then((res) =>
    res.json()
  )
  return ids.slice(0, lenght)
}

async function getPosts(lenght:number) {
  const postIds = await getIds(lenght)
  const promises = postIds.map(async (id:string) => await getStoryData(id))
  return Promise.all(promises)
}

async function getStoryData(id:string) {
  const data:Story = await fetch("https://hacker-news.firebaseio.com/v0/item/" +id + ".json").then((res) => res.json())
    return data
  }

  },[]);
  return { stories };
};
