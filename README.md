# Project 2 : Simon Game
 
### Preview
![Full Width Pics Preview](https://github.com/jaysson29/project-2-simon/blob/master/imgs/simon-preview.jpg?raw=true)

**Live Preview** : [Here](https://jaysson29.github.io/project-2-simon/)
### What is this website for?
 
This is a website for my full stack web development course as a project, this project is based on only three languages HTML, CSS AND JavaScript.
 
### What does it do?
 
This website was made to displaying my understanding of javascript.
I used javascript in this website page to create a simon game.

## Tech Used

### Some the tech used includes:
- **HTML**, **CSS** and **Javascript**
  - Base languages used to create website
- [Bootstrap](http://getbootstrap.com/)
    - I use **Bootstrap** to give our project a simple, responsive layout
- [FontAwesome](https://fontawesome.com/)
    - I use **FontAwesome** For the visual Icon around the Website to make more appealing and easier to understand
- [JQuery](https://jquery.com)
    - I used **JQuery** for boostrap and displaying modal


## Testing 

### Manual Testing:

#### Responsive Testing

##### Browsers

```
Microsoft Edge
Google Chrome
Mozilla Firefox
```

This was to test if the website was compatible with all the most used browsers.
I would of tested it on a Apple Mac but as i dont have one i could not carry out the test. 
##### Devices

```
Mobile (Android)
Mobile (Iphone)
Table (Android)
Desktop (Windows)
```
This was to test if the website was compatible with all the most used device. And displaying the website correctly

##### Frontend
I came across some issues regarding the navigation when using different devices. If i loaded the website on a mobile device the navigation was invisible but wasnt on desktop. This was due to conflicting CSS Styles.

**User Story:**
The user would start a game of simon and the game wouldn't beign the cycle due to the `JavaScript` being loaded before the `<Body>` tag. The `JavaScript` needed to be just before the closing `</Body>`tag by changing this fixed the problem.


## Running The project

##### Installing
1. Clone the project
```console
git clone https://github.com/jaysson29/project-2-simon.git
```

2. Or Fork or Download it From
```console
https://github.com/jaysson29/project-2-simon
```

3. Running The project
```console
Open index.html
```

## Deployment

I used Github pages as a free online Hosting environment to deploy my project.
If you want to do this your self:

**Using Terminal CRM**

1. Initialize git
```console
git init
```

2. Add all fills to git
```console
git add  or  git add .
```

3. Commit Your Changes
```console
git commit -m "Your Commit Message Here..."
```

**Connect it to github**

You’ve now got a local git repository. You can use git locally, like that, if you want. But if you want the thing to have a home on github, do the following.

- Go to github.
- Log in to your account.
- Click the new repository button in the top-right. You’ll have an option there to initialize the repository with a README file, but I don’t.
- Click the “Create repository” button.
- Now, follow the second set of instructions, “Push an existing repository…”

4. Commit Your Changes
```console
git remote add origin git@github.com:username/new_repo
git push -u origin master
```


## Credits

### Media
- The photos used in this site were obtained from [google](https://google.com) and edited by me.



