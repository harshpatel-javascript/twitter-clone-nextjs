export interface Tweet extends TweetBody {
  _id: string
  _createdAt: string
  _updatedat: string
  _rev: string
  _type: 'tweet'
  blocktweet: boolean
}
export type TweetBody = {
  text: string
  username: string
  profileImg: string
  image?: string
}
