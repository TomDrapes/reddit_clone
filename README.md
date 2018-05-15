# Dark Theme for Reddit
created by Tom Drapes
## React Challenge by Tanda
This is my submission for the Tanda React Internship Challenge and was designed to fullfil the following user requirements.

**1:** Provide a list view of the 'Hot' posts.  
**2:** Provide a view containing more information about an individual post (including comments for the post).  
**3:** Be able to share a link so others can view the comments for posts viewed on the clone.  
**4:** Sorting of posts and comments (hot, top, new, controversial, etc).  
**5:** Showing previews of videos and images if the post is a link to one of these things.  
**6:** Collapsing and expanding children comments in the post view.  
**7:** Up-voting and down-voting posts and comments.  
**8:** Commenting.  

### How to run
You can check out a working production build [here](http://www.tom-drapes.com/dark-theme-for-reddit) or alternatively you can clone this repository.  
To run this on your local machine you will need to provide your own clientId, clientSecret and refreshToken in the file App.js.    


First create a Reddit account and create an application [here](https://www.reddit.com/prefs/apps) to obtain your own clientId and clientSecret.    
Then enter your clientId and clientSecret [here](https://not-an-aardvark.github.io/reddit-oauth-helper/) to obtain a refreshToken. Make sure you check the permanent box and also for this program to work properly you will require read, vote and submit privileges. Note: I was unable to retrieve any tokens in Firefox so if you experience similar problems try another browser.    
Lastly you will require all the dependencies which can be installed with npm (Node package manager).  


For more information check out the documentation for [React](https://reactjs.org/docs/hello-world.html), [React-Router](https://reacttraining.com/react-router/web/guides/quick-start) and [Snoowrap](https://not-an-aardvark.github.io/snoowrap/).
