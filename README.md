# Requirements

- docker
- docker-compose
- nodejs >= 16

# Install

```bash
https://github.com/michaelchiche/the-supersecret-fb-copycat/
cd the-supersecret-fb-copycat
docker-compose up -d graphql-engine
docker-compose run -d importer
npm i
npm run start
```

# Add seed data

💣 _You should only run this command once_ 💣

```bash
npm run seed
node dist/seed.js
```

💣 _It is also not bulletproof, you might need to run it a few times before it works_ 💣

to make sure that everything works, you should clean the database, by going to this link: [http://localhost:8080/console/data/sql](http://localhost:8080/console/data/sql)
and in the SQL section, paste the code below and press the `Run!` Button.

```sql
delete from public.user;
delete from public.post;
delete from public.comment;
delete from public.upvote;

ALTER SEQUENCE public.user_id_seq RESTART WITH 1;
ALTER SEQUENCE public.post_id_seq RESTART WITH 1;
ALTER SEQUENCE public.comment_id_seq RESTART WITH 1;
ALTER SEQUENCE public.upvote_id_seq RESTART WITH 1;
```

Now you should go to the URL that is used by parcel, it should be:
[http://localhost:1234/](http://localhost:1234/)

# V1

You can specify which post to go to (there is only 1 in the seed)
and also which user you are,
so for example
[http://localhost:1234/?post=1&user=1](http://localhost:1234/?post=1&user=1)

# V2

You can specify which post to go to (there is only 1 in the seed),
so for example
[http://localhost:1234/post/1](http://localhost:1234/post/1)
