# Project 2: AI Text Splitter (Final Project)

This is one of the options that you have for your final project. Please be sure to read the [instructions on getting started, project submission, and other information you need to know](../README.md).

ChatGPT (and other AI chat bots) are great tools to assist you in finding information and writing material in very human friendly, conversational way. However, one limitation of ChatCPT is that is has a 4,000 character limit (approximately 500 words). Let's say that you want ChatGPT to provide the main points on a very long article or YouTube video. In order to do this, you will need to break the text or video transcript up into smaller pieces, and feed each piece to ChatGPT, one-by-one. For this project, you will be working on a tool that will automate breaking large text into smaller pieces.

![Inputting text into the AI test splitter](ai-splitter-demo1.gif)

![Copying a chunk from the AI test splitter and pasting into ChatGPT](ai-splitter-demo2.gif)

![Asking ChatCPT to summarize the article](ai-splitter-demo3.gif)

This application should have:

- A prompt that will split large blocks of text and YouTube video transcript into smaller pieces
- A user's history of all of their conversations.
- Theming. The user should be able to choose between different themes.

## Project Requirements

Your project must meet the following application setup, UI and coding requirements.

### Application Setup Requirements

- You must create a git repository for your application and it must be hosted publicly on Github.
- Your application should be easy to install and start. **IF WE CANNOT INSTALL OR START YOUR APPLICATION, IT IS AN AUTOMATIC FAILURE.**
- Your application should not crash at any point.
- You should include a _README.md_ file within the root of the git repository. The _README.md_ should have clear instructions on how to install and start the project.
- You must have a demo of your project hosted somewhere that is publicly accessible.

Note that we will go over setting up the project in class.

### Screens & UI Requirements

Your project should have at least these four screens:

1. Signin
2. Text Splitter
3. YouTube Transcript Generator
4. View Collection Screen

You will also need to include a running history of all the user's conversations and UI to change the theme.

#### Signin Screen

- Users should be able to signin with a username and password.
- If a user enters the wrong credentials, display a message telling the user that their credentials are not correct.

#### Text Splitter Screen

![Text splitter screen](text-splitter-screen.png)

This is how the text splitter works:

1. Users should be able to input a large block of text.
2. A new collection is created. The name or title of the collection should be an excerpt of the user input.
3. Your application will break the user's input into several pieces or "chunks". Each chunk should not exceed ChatGPT's character limit of 4,000 characters. Display links or buttons on the screen so that the user can copy each chunk, one by one.
4. Your application should display instructions for ChatCPT, that the user can copy and paste. (They will have ChatGPT open in a new tab or window, and will paste the text in a ChatGPT conversation.) Here is what the instructions should be, where you will need to replace the number "10" with the total number of chunks:

> The total length of the content that I want to send you is too large to send in only one piece.
> For sending you that content, I will follow this rule:
> [START PART 1/10]
> this is the content of the part 1 out of 10 in total
> [END PART 1/10]
> Then you just answer: "Received part 1/10"

5. Your application should make API requests to the back-end to save the text to history.
6. The user should be able to repeat the process, and enter another large block of text.

#### YouTube Transcript Generator Screen

![YouTube transcript screen](youtube-transcript-screen.png)

This screen is very similar to the screen above.

1. Users should be able to supply a link to a YouTube video, which they can get my clicking on the "Share" button underneath a YouTube video.
   ![YouTube video share button](youtube-video-share-button.png)
2. A new collection is created. The name or title of the collection is the YouTube video URL.
3. Your application should get the video's transcript and break the transcript into several pieces or "chunks". Each chunk should not exceed ChatGPT's character limit of 4,000 characters. Display links or buttons on the screen so that the user can copy each chunk, one by one.
4. Your application should display instructions for ChatCPT, that the user can copy and paste. (See the instructions in _Text Splitter Screen_ above.)
5. Your application should make API requests to the back-end to save the text to history.
6. The user should be able to repeat the process, and enter a new YouTube video URL.

#### Collection History UI

A _collection_ is a large block of text or a YouTube transcript that is saved to the user's history. You can think of it as a chat or conversation. For every time the user inputs a large block of text, it should be saved to a collection.

![Collection history UI](collection-history-ui.png)

- The user should be able to rename a collection.
- The user should be able to delete a collection.
- Anytime a new collection is created in the _Text Splitter_ or _YouTube Transcript Generator_ screen, the new collection should appear in the collection history in real time.

#### View Collection Screen

- This screen should display the instructions for starting a conversation with ChatGPT. (See the instructions in _Text Splitter Screen_ above.)
- Your application should get the large block of text from the server and break it down into pieces or chunks. Display links or buttons on the screen so that the user can copy each chunk, one by one.

#### Theme UI

- A "theme" toggler, button, dropdown, or some other UI component should be on every page. When the user clicks on it, it should change the theme.

#### AJAX UI Requirements

- Loading and AJAX errors should not crash your application.
- Display error messages when AJAX requests fail.

### Routing & Navigational Requirements

Routing is a system for resource navigation. When a user clicks on a link, they navigate to the screen. Our router is what controls what screen the user gets.

- The application should have the following paths:

| Route                        | Must Be Logged In | Route                | Notes                                       |
| ---------------------------- | ----------------- | -------------------- | ------------------------------------------- |
| Signin                       | No                | /sign-in             |                                             |
| Text Splitter                | Yes               | /                    |                                             |
| YouTube Transcript Generator | Yes               | /youtube-transcripts |                                             |
| View Collection              | Yes               | /collection/_12_     | where _12_ is an example of a collection ID |

- When a user successfully signs in, they should be redirected to Text Splitter screen.
- The user must be logged in to view the Text Splitter, YouTube Transcript Generator, View Collection or Logout routes. If they are not, redirect them to the Signin screen. (Hint: use protected routes.)
- When logged in, the user should be able to do the following from every screen except the Signin screen:
  - Navigate to the Text Splitter screen and YouTube Transcript Generator screen.
  - View and edit their collection history (a history of their chats or conversations).
  - Navigate to previous collections in history.
  - Logout.
- When the user clicks on the logout button and is logged out, it should redirect to the Signin screen.

![Navigation](ai-splitter-navigation.svg)

### Coding Requirements

- Your project must be written in TypeScript. (If you need to, you can use type of `any`, but this is not the best practice.)
- This application should contain at least four React components. Each of the four screens outlined earlier should be a separate, high-level React Component.
- You must use the React Router library.
- You must have a signin form and authenticate users.
- You must log users out.
- You must have protected routes (routes that the user must be logged in to see).
- You must use the Context API to store state that is shared universally between most components.
- For components that are functions, you should handle AJAX calls using styles that we covered in class. (`useEffect()` hook, a custom asynchronous hook, `<Suspense />`, or [SWR](https://swr.vercel.app/)). You can mix different styles together.
- AJAX errors should be caught.
- Styling must be included, but you will not be graded on how visually appealing your application is or how well your CSS is written.
- You must store the user's theme in _localStorage_ so that the theme remains the same when the user logs back in at a later date.

## API Documentation

As a part of this project, you will be making AJAX requests to the back-end server that remembers the user's chat history. In order for this to be a part of your Github portfolio, we have a written a server in Node.js, which you will install and run locally. We also have it setup so that if you choose, you can easily upload the application to a hosting service.

The API is a REST based API that will return JSON data. Here is an overview of the API end-points. You will need to plugin the _{collectionId}_ and _{youtubeUrl}_ into the URL.

| Action                                    | Method | URL                                      | Need JWT? |
| ----------------------------------------- | :----: | ---------------------------------------- | --------- |
| Signin and get a JWT token                |  POST  | /api/signin                              | No        |
| Get a YouTube video transcript            |  GET   | /api/youtube-transcript?url={youtubeUrl} | No        |
| Create a collection                       |  POST  | /api/collection                          | Yes       |
| Change a collection's name                |  PUT   | /api/collection/{collectionId}           | Yes       |
| Add a large block of text to a collection |  POST  | /api/collection/{collectionId}/text      | Yes       |
| Delete a collection                       | DELETE | /api/collection/{collectionId}           | Yes       |
| View a single collection                  |  GET   | /api/collection/{collectionId}           | Yes       |
| View all collection history               |  GET   | /api/collection                          | Yes       |

After the user logins, the te splitter should work like this:

1. The user provides a large block of text.
2. The UI creates a _collection_.
3. Your UI will make API requests to save the large block to text to history.
4. Your UI will break the text pieces that are less than 4,000 characters and share this with the user.

If the user provides a YouTube video, their is an extra step to generate the YouTube transcript.

1. The user provides a link to a YouTube video.
2. The UI creates a _collection_.
3. Your UI makes a request to _/api/youtube-transcript?url={youtubeUrl}_ to generate a YouTube transcript for the video.
4. Your UI will make API requests to save the large block to text to history.
5. Your UI will break the text pieces that are less than 4,000 characters and share this with the user.

### Signin

Send a GET request to _/api/login_. You will need to include the username and password in the request in the JSON body.

```json
{
  "username": "wall-e",
  "password": "eve"
}
```

You have two users you can signin with:

> Username: r2-d2 \
> Password: c-3po

> Username: wall-e \
> Password: eve

POST a request the URL _/api/signin_. If the username and password is correct, you will get a response with a JWT token like this:

```json
{
  "message": "You did it! Success!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNzI1IiwiaWF0IjoxNTg3MjQ1MzMxfQ.lC7PVh4Miwc_r6GO6UWelJAqDYBvaInC-qepdX_7Jdw"
}
```

If they are not correct, you will get a response like this below. The server will return a _401 Unauthorized_ error and, if you are using Axios, you must handle it within the catch block.

```json
{
  "message": "Unauthorized. Your username or password is not correct."
}
```

**One thing to note about the tokens is that they will be different each time you restart the back-end server. This means you will need to signin and get a new JWT token every time you restart.**

In many of the other APIs, you are required to included the JWT token you received in the _Authorization_ header. Here is an example with Axios:

```javascript
// You should not hardcode this
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNzI1IiwiaWF0IjoxNTg3MjQ1MzMxfQ.lC7PVh4Miwc_r6GO6UWelJAqDYBvaInC-qepdX_7Jdw";

axios("/api/collection", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
```

See the AJAX requests in your [auth assignment](../../exercises/18-auth) and the [final project example](../../examples/final-project) for an example of authentication with JWT tokens.

### Get a YouTube video transcript

This API will generate a transcript for a given YouTube video. To get the YouTube video URL, click on the "Share" button near the video you are watching.

![YouTube video share button](youtube-video-share-button.png)

You will need to include this in the URL to get a transcript. For example, if the YouTube video URL is _https://youtu.be/S8eX0MxfnB4_, send a GET request to _/api/youtube-transcript?url=https%3A%2F%2Fyoutu.be%2FS8eX0MxfnB4_. (It is recommend that you use the [`encodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) function in JavaScript to make the YouTube video link URL friendly.)

It will return a response in JSON. For example:

```json
{
  "message": "Successfully fetched transcript",
  "result": [
    {
      "text": "Kubernetes is being adopted at companies at \na high pace and anyone with knowledge in that  ",
      "duration": 5460,
      "offset": 60
    },
    {
      "text": "has a career advantage. You can even become a \nfull-time Kubernetes engineer at your job, it  ",
      "duration": 5940,
      "offset": 5520
    }
    // ...
  ]
}
```

Note that content creators can disable transcripts on their YouTube videos and you will to handle when this happens.

### Create a collection

A _collection_ represents a large block of text (or YouTube video transcript) saved in the user's history. This way, the user can see a running list of conversations a later date. All collections have a name.

Send a POST request to _/api/collection_. You will include the collection name in the JSON request body.

```json
{
  "name": "My first collection"
}
```

A token must be in the request, or you will get a _401 Unauthorized_.

You will get this as a response:

```json
{
  "id": 1,
  "userId": "012bce18-3336-4f80-a2a5-998ba63e244f",
  "name": "My first collection",
  "createdAt": "2023-08-13T22:05:54.010Z",
  "updatedAt": "2023-08-13T22:05:54.010Z"
}
```

### Change a collection's name

A user can rename a collection. In order to do this, you the ID of the collection that the user is trying to change. If the collection id is 1, you would send a PUT request to _/api/collection/1_. You will include the new collection name in the JSON request body.

```json
{
  "name": "Rename me"
}
```

A token must be in the request, or you will get a _401 Unauthorized_.

You will get this as a response:

```json
{
  "id": 1,
  "userId": "012bce18-3336-4f80-a2a5-998ba63e244f",
  "name": "Rename me",
  "text": "Pretend this is really long", // This is not always included
  "createdAt": "2023-08-13T22:05:54.010Z",
  "updatedAt": "2023-08-13T22:09:30.529Z"
}
```

### Add a large block of text to a collection

This API endpoint save a large block of text (or YouTube transcript). You will need the ID of the collection that you are adding the large block of text to. If the collection id is 1, you would send a POST request to _/api/collection/1/text_. You will include the text in JSON request body.

```json
{
  "text": "Pretend this is really long"
}
```

A token must be in the request, or you will get a _401 Unauthorized_.

### Delete a collection

You need the ID of the collection the user would like to delete. If the collection ID is 1, you would make a DELETE request to _/api/collection/1_. You must include the access token in your request.

### View a single collection

If the collection ID is 1, you would make a GET request to _/api/collection/1_. You must include the access token in your request. You must include the access token in your request. You would get this as the response:

```json
{
  "id": 1,
  "userId": "012bce18-3336-4f80-a2a5-998ba63e244f",
  "name": "Rename me",
  "text": "Pretend this is really long", // This is not always included
  "createdAt": "2023-08-13T22:05:54.010Z",
  "updatedAt": "2023-08-13T22:09:30.529Z"
}
```

### View all collection history

Make a GET request to _/api/collection_ to return all the collections in a user's history. You must include the access token in your request. You must include the access token in your request. You would get this as the response:

```json
[
  {
    "id": 1,
    "userId": "012bce18-3336-4f80-a2a5-998ba63e244f",
    "name": "Rename me",
    "text": "Pretend this is really long", // This is not always included
    "createdAt": "2023-08-13T22:05:54.010Z",
    "updatedAt": "2023-08-13T22:20:48.400Z"
  },
  {
    "id": 2
    // ...
  }
  // ...
]
```
