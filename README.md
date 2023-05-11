# PigeonBuddy

Email penpal finder

## Intro

Hey there! Welcome to PigeonBuddy, the coolest spot on the web for finding email penpals. In this crazy fast digital world, I still believe in the magic of old-school letter writing and connecting with amazing people from all over.

With PigeonBuddy, it's all about exploring different cultures, getting a fresh perspective, and making lifelong friendships. With just a few clicks, You can find penpals who are into the same stuff as you or you can find penpals who like something totally new and exciting!

This website was inspired by Kev Quirks [post] (https://fosstodon.org/@kev/110303854305067492) and Chris Coyers [article] (https://email-is-good.com/2023/05/02/email-pen-pals/)

## Become a PenPal

Becoming a penpal is easy, al you have to do is:

1. Fork this repository.
2. Open [`src/data/users.json`](./src/data/users.json) and add your info (template below).
3. Open a pull request and fill out the following template.

### User template

#### Sample

```
{ "displayname": "Peatord",    
  "email": "example@example.com",
  "interests":  [ "Programming", "Nature", "Gaming" ],   // max 3
  "note": "You can write anything you'd like here or nothing at all"
}
```

#### Blank Template

```
{ "displayname": "" ,
  "email": "" ,
  "interests":  [ "", "", "" ] ,
  "note": ""
}
```
