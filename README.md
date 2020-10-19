# GoonBot
Hello! This is a Discord bot named Goon whose sole purpose is to detect if users are using profane language in a server. If you swear, he will very rudely yell at you.

# Why did I create this?
1. I personally have a potty mouth when I'm talking with my friends on Discord. I would like to do that less, and this bot helps in making me more conscious about the language that I use.
2. When I first started using Discord, I didn't know how to program. Now I do.

<img src="/preview.png" width="384" height="130">

# What more would I like to do with this?
- Based on a trigger, I want Goon to be able to evaluate the most recent messages sent by a user and pass a conclusion on what the user's emotion is. If they are sad, then I'd like for Goon to send a sweet message. 

# Work in progress ...
- Exported thousands of chats since the creation of the server
- Proccessed the chat logs so that they are organized by who sent them
- Currently going with the supervised learning approach, employing a Naive Bayes classifier ... which means I need to split these chat logs into different chunks based on time logs and label the chunks as sad, happy, angry, etc.

